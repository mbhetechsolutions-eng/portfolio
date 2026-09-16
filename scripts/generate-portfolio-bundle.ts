import { Buffer } from 'node:buffer'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { PDFDocument, StandardFonts, rgb, type PDFPage, type PDFFont } from 'pdf-lib'
import { personalInfo } from '../src/config/personal'
import { projects } from '../src/config/projects'
import { portfolioDocuments } from '../src/config/documents'
import { education } from '../src/config/education'
import { skillGroups } from '../src/config/skills'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, '..')
const cvDir = path.join(rootDir, 'public', 'cv')

const OUTPUT_FILENAME = 'Lungi_Malungana_Complete_Portfolio.pdf'
const SITE_URL = 'https://portfolio-sand-delta-33.vercel.app'

const PAGE = {
  width: 595.28,
  height: 841.89,
  margin: 50,
  lineHeight: 14,
  titleSize: 22,
  headingSize: 14,
  bodySize: 10,
  smallSize: 9,
}

type PageContext = {
  doc: PDFDocument
  page: PDFPage
  font: PDFFont
  fontBold: PDFFont
  y: number
}

function wrapText(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = text.split(/\s+/)
  const lines: string[] = []
  let line = ''

  for (const word of words) {
    const test = line ? `${line} ${word}` : word
    if (font.widthOfTextAtSize(test, size) <= maxWidth) {
      line = test
    } else {
      if (line) lines.push(line)
      line = word
    }
  }
  if (line) lines.push(line)
  return lines.length ? lines : ['']
}

async function ensurePage(ctx: PageContext, needed = PAGE.lineHeight): Promise<PageContext> {
  if (ctx.y - needed >= PAGE.margin) return ctx

  const page = ctx.doc.addPage([PAGE.width, PAGE.height])
  return { ...ctx, page, y: PAGE.height - PAGE.margin }
}

async function drawLines(
  ctx: PageContext,
  lines: string[],
  options: { size?: number; bold?: boolean; color?: ReturnType<typeof rgb>; gap?: number } = {},
): Promise<PageContext> {
  const size = options.size ?? PAGE.bodySize
  const font = options.bold ? ctx.fontBold : ctx.font
  const color = options.color ?? rgb(0.15, 0.18, 0.22)
  const gap = options.gap ?? PAGE.lineHeight
  const maxWidth = PAGE.width - PAGE.margin * 2

  let next = ctx
  for (const raw of lines) {
    const wrapped = wrapText(raw, font, size, maxWidth)
    for (const line of wrapped) {
      next = await ensurePage(next, gap + 2)
      next.page.drawText(line, {
        x: PAGE.margin,
        y: next.y,
        size,
        font,
        color,
      })
      next = { ...next, y: next.y - gap }
    }
  }
  return next
}

async function drawHeading(ctx: PageContext, text: string): Promise<PageContext> {
  let next = await ensurePage(ctx, 30)
  next = await drawLines(next, [text], { size: PAGE.headingSize, bold: true, gap: 18 })
  return { ...next, y: next.y - 4 }
}

async function drawSpacer(ctx: PageContext, amount = 12): Promise<PageContext> {
  return { ...ctx, y: ctx.y - amount }
}

async function drawProjectCover(ctx: PageContext, coverPublicPath: string): Promise<PageContext> {
  const filePath = path.join(rootDir, 'public', coverPublicPath.replace(/^\//, ''))
  try {
    const pngBytes = await sharp(filePath).resize({ width: 900 }).png().toBuffer()
    const image = await ctx.doc.embedPng(pngBytes)
    const maxWidth = PAGE.width - PAGE.margin * 2
    const scale = maxWidth / image.width
    const height = image.height * scale
    const needed = height + 16

    let next = await ensurePage(ctx, needed)
    next.page.drawImage(image, {
      x: PAGE.margin,
      y: next.y - height,
      width: maxWidth,
      height,
    })
    return { ...next, y: next.y - height - 12 }
  } catch {
    return ctx
  }
}

async function buildPortfolioBooklet(): Promise<Uint8Array> {
  const doc = await PDFDocument.create()
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold)

  let page = doc.addPage([PAGE.width, PAGE.height])
  let ctx: PageContext = { doc, page, font, fontBold, y: PAGE.height - PAGE.margin }

  // Cover
  ctx = await drawLines(ctx, [personalInfo.fullName], {
    size: PAGE.titleSize,
    bold: true,
    gap: 28,
  })
  ctx = await drawLines(ctx, [personalInfo.title], { size: 12, gap: 16 })
  ctx = await drawSpacer(ctx, 8)
  ctx = await drawLines(ctx, [personalInfo.location], { size: PAGE.bodySize })
  ctx = await drawLines(ctx, [`Email: ${personalInfo.email}`], { size: PAGE.bodySize })
  ctx = await drawLines(ctx, [`Phone: ${personalInfo.phone}`], { size: PAGE.bodySize })
  ctx = await drawLines(ctx, [`Business: ${personalInfo.business} (${personalInfo.businessEmail})`], {
    size: PAGE.bodySize,
  })
  ctx = await drawSpacer(ctx, 16)
  ctx = await drawLines(ctx, [`Online portfolio: ${SITE_URL}`], { size: PAGE.bodySize, bold: true })
  ctx = await drawSpacer(ctx, 20)
  ctx = await drawLines(
    ctx,
    [
      'This PDF mirrors this portfolio website in one file for employers and offline use.',
      'Contents:',
      `1. CV (${personalInfo.cvFilename})`,
      '2. Written portfolio (about, education, skills, all projects with screenshots)',
      ...portfolioDocuments.map((d, i) => `${i + 3}. ${d.title}`),
    ],
    { size: PAGE.smallSize, color: rgb(0.35, 0.4, 0.45) },
  )

  // About
  page = doc.addPage([PAGE.width, PAGE.height])
  ctx = { doc, page, font, fontBold, y: PAGE.height - PAGE.margin }
  ctx = await drawHeading(ctx, 'About')
  for (const paragraph of personalInfo.aboutParagraphs) {
    ctx = await drawLines(ctx, [paragraph], { gap: 13 })
    ctx = await drawSpacer(ctx, 6)
  }

  // Education
  ctx = await drawSpacer(ctx, 8)
  ctx = await drawHeading(ctx, 'Education')
  for (const qual of education) {
    ctx = await drawLines(ctx, [qual.title], { bold: true, gap: 13 })
    ctx = await drawLines(ctx, [qual.institution], { color: rgb(0.4, 0.45, 0.5) })
    for (const detail of qual.details) {
      ctx = await drawLines(ctx, [`• ${detail}`], { size: PAGE.smallSize })
    }
    if (qual.highlights) {
      ctx = await drawSpacer(ctx, 4)
      ctx = await drawLines(ctx, ['Strong results:'], { bold: true, size: PAGE.smallSize })
      for (const h of qual.highlights) {
        ctx = await drawLines(ctx, [`• ${h}`], { size: PAGE.smallSize })
      }
    }
    ctx = await drawSpacer(ctx, 10)
  }

  // Skills
  ctx = await drawHeading(ctx, 'Technical skills')
  for (const group of skillGroups) {
    ctx = await drawLines(ctx, [group.title], { bold: true, gap: 12 })
    ctx = await drawLines(ctx, [group.skills.join(' · ')], { gap: 13 })
    ctx = await drawSpacer(ctx, 4)
  }

  // Projects
  page = doc.addPage([PAGE.width, PAGE.height])
  ctx = { doc, page, font, fontBold, y: PAGE.height - PAGE.margin }
  ctx = await drawHeading(ctx, 'Featured projects')
  ctx = await drawLines(ctx, [
    'Production work delivered through MbheTech Solutions and academic/commercial development.',
  ])
  ctx = await drawSpacer(ctx, 10)

  for (const project of projects) {
    ctx = await ensurePage(ctx, 80)
    ctx = await drawProjectCover(ctx, project.coverImage)
    ctx = await drawLines(ctx, [project.name], { size: 13, bold: true, gap: 16 })
    ctx = await drawLines(ctx, [project.type], { color: rgb(0.4, 0.45, 0.5), gap: 12 })
    if (project.liveUrl) {
      ctx = await drawLines(ctx, [`Live: ${project.liveUrl}`], { size: PAGE.smallSize, gap: 12 })
    }
    ctx = await drawLines(ctx, [project.description], { gap: 13 })
    ctx = await drawLines(ctx, [`Technologies: ${project.technologies.join(', ')}`], {
      size: PAGE.smallSize,
      gap: 12,
    })
    ctx = await drawLines(ctx, ['Key features:'], { bold: true, size: PAGE.smallSize, gap: 12 })
    for (const feature of project.features) {
      ctx = await drawLines(ctx, [`• ${feature}`], { size: PAGE.smallSize })
    }
    ctx = await drawSpacer(ctx, 14)
  }

  // Documents index
  ctx = await drawHeading(ctx, 'Academic documents (attached in this PDF)')
  for (const docEntry of portfolioDocuments) {
    ctx = await drawLines(ctx, [`• ${docEntry.title} (${docEntry.category})`], { gap: 12 })
  }

  return doc.save()
}

async function loadPdfBytes(relativePublicPath: string): Promise<Uint8Array | null> {
  const filePath = path.join(rootDir, 'public', relativePublicPath.replace(/^\//, ''))
  try {
    return await fs.readFile(filePath)
  } catch {
    console.warn(`Skipping missing file: ${filePath}`)
    return null
  }
}

async function main() {
  const cvBytes = await loadPdfBytes(personalInfo.cvPath)
  if (!cvBytes) {
    throw new Error(`CV not found at public${personalInfo.cvPath}. Add your CV PDF and run again.`)
  }

  const alternateCvBytes = await loadPdfBytes(personalInfo.alternateCvPath)
  const includeAlternateCv =
    alternateCvBytes !== null &&
    personalInfo.alternateCvPath !== personalInfo.cvPath &&
    !Buffer.from(alternateCvBytes).equals(Buffer.from(cvBytes))

  const bookletBytes = await buildPortfolioBooklet()
  const merged = await PDFDocument.create()

  const appendPdf = async (bytes: Uint8Array, label: string) => {
    const source = await PDFDocument.load(bytes)
    const pages = await merged.copyPages(source, source.getPageIndices())
    pages.forEach((p) => merged.addPage(p))
    console.log(`  + ${label} (${pages.length} page${pages.length === 1 ? '' : 's'})`)
  }

  console.log('Building complete portfolio PDF…')
  await appendPdf(cvBytes, 'CV (PNet)')
  if (includeAlternateCv && alternateCvBytes) {
    await appendPdf(alternateCvBytes, 'CV (alternate)')
  }
  await appendPdf(bookletBytes, 'Portfolio summary (about, skills, projects)')

  for (const docEntry of portfolioDocuments) {
    const bytes = await loadPdfBytes(docEntry.filePath)
    if (bytes) await appendPdf(bytes, docEntry.title)
  }

  const outPath = path.join(cvDir, OUTPUT_FILENAME)
  await fs.writeFile(outPath, await merged.save())

  console.log(`\nDone: ${outPath}`)
  console.log(`Pages: ${merged.getPageCount()}`)
  console.log(`\nContents order:`)
  console.log(`  1. ${personalInfo.cvFilename}`)
  if (includeAlternateCv) console.log(`  2. ${personalInfo.alternateCvFilename}`)
  console.log(`  ${includeAlternateCv ? 3 : 2}. Portfolio summary (generated)`)
  portfolioDocuments.forEach((d, i) =>
    console.log(`  ${i + (includeAlternateCv ? 4 : 3)}. ${d.title}`),
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
