import { mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { chromium } from 'playwright'

const outDir = join(process.cwd(), 'public', 'projects', 'ndzhuti')
const baseUrl = 'https://ndzhuti-skills-development-and-proj.vercel.app'

const pages = [
  { path: '/', filename: 'ndzhuti-01.png', label: 'Homepage' },
]

mkdirSync(outDir, { recursive: true })

const browser = await chromium.launch()
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
})

for (const pageInfo of pages) {
  const page = await context.newPage()
  const url = `${baseUrl}${pageInfo.path}`
  console.log(`Capturing ${url}...`)
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 })
  await page.waitForTimeout(3000)
  await page.screenshot({
    path: join(outDir, pageInfo.filename),
    fullPage: true,
  })
  await page.close()
  console.log(`Saved ${pageInfo.filename}`)
}

await browser.close()
console.log('Run: npm run optimize-screenshots')
