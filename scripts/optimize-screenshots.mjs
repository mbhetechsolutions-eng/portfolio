import { existsSync, mkdirSync, readdirSync } from 'node:fs'
import { join, parse } from 'node:path'
import sharp from 'sharp'

const projectsDir = join(process.cwd(), 'public', 'projects')

const projectFolders = [
  'mistlik',
  'mnb',
  'pure-h2o',
  'lee-pharmacy',
  'shiluva',
  'afm-fol',
  'mectom',
]

const sourceExtensions = new Set(['.png', '.jpg', '.jpeg'])

async function optimizeFolder(folder) {
  const folderPath = join(projectsDir, folder)
  if (!existsSync(folderPath)) {
    mkdirSync(folderPath, { recursive: true })
    console.log(`Created folder: ${folderPath}`)
    return
  }

  const files = readdirSync(folderPath)
    .filter((file) => sourceExtensions.has(parse(file).ext.toLowerCase()))
    .sort()

  if (files.length === 0) {
    console.log(`No source images found in ${folder}/`)
    return
  }

  let index = 1
  for (const file of files) {
    const inputPath = join(folderPath, file)
    const outputPath = join(folderPath, `${String(index).padStart(2, '0')}.webp`)

    await sharp(inputPath)
      .webp({ quality: 82, effort: 4 })
      .resize({ width: 1920, withoutEnlargement: true })
      .toFile(outputPath)

    console.log(`Optimized: ${folder}/${file} → ${parse(outputPath).base}`)
    index++
  }
}

async function main() {
  console.log('Optimizing project screenshots...\n')

  for (const folder of projectFolders) {
    await optimizeFolder(folder)
  }

  console.log('\nDone.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
