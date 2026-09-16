# Project Screenshots

Place optimised WebP screenshots in the folders below. Each project uses numbered files starting from `01.webp`.

## Folder structure

| Project | Folder | Files | Count |
|---------|--------|-------|-------|
| Mistlik Solutions | `mistlik/` | `01.webp` – `07.webp` | 7 |
| MNB Chartered Accountants | `mnb/` | `01.webp` – `07.webp` | 7 |
| Pure H2O | `pure-h2o/` | `01.webp` – `06.webp` | 6 |
| Lee Pharmacy | `lee-pharmacy/` | `01.webp` – `04.webp` | 4 |
| Shiluva Landscaping | `shiluva/` | `01.webp` – `03.webp` | 3 |
| AFM Fountain of Life | `afm-fol/` | `01.webp` – `05.webp` | 5 |

## Screenshot order

If you have a batch of 32 screenshots in upload order:

1. Screenshots 1–7 → `mistlik/`
2. Screenshots 8–14 → `mnb/`
3. Screenshots 15–20 → `pure-h2o/`
4. Screenshots 21–24 → `lee-pharmacy/`
5. Screenshots 25–27 → `shiluva/`
6. Screenshots 28–32 → `afm-fol/`

## Optimising images

Run from the project root after placing source PNG/JPG files:

```bash
npm run optimize-screenshots
```

This converts images to optimised WebP format without significant quality loss.
