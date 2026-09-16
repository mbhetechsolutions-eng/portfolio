import { mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { chromium } from 'playwright'

const outDir = join(process.cwd(), 'public', 'projects', 'mectom')
const baseUrl = 'https://mectomskillsdevelopment.co.za'

const pages = [
  { path: '/', filename: 'mectom-01.png', label: 'Homepage' },
  { path: '/about', filename: 'mectom-02.png', label: 'About' },
  { path: '/courses', filename: 'mectom-03.png', label: 'Courses' },
  { path: '/gallery', filename: 'mectom-04.png', label: 'Gallery' },
  { path: '/contact', filename: 'mectom-05.png', label: 'Contact' },
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
console.log('Done.')
