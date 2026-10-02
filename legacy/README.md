# Legacy content and backlink-recovery plan

This folder holds the raw material for restoring the old healthcheck.org pages that still
carry backlinks, so the new Astro site recovers that link equity. Nothing in here is served;
`astro build` ignores it. The work itself is described in `REBUILD_PROMPT.md`.

## What's here

| Path | What it is |
| --- | --- |
| `crawl/` | Wayback-derived download of the old site (Drupal 6, HSF "Health Check" program, ~3,000 HTML pages, images, CSS/JS). The 193 MB crawler log `report.txt` was left out (over GitHub's file limit, no content value). No PDFs were captured. |
| `ahrefs-backlinks-2026-10-02.tsv` | Ahrefs "Backlinks" export for www.healthcheck.org (all subdomains), UTF-8 tab-separated. 584 live links, 471 dofollow, 102 distinct target URLs. |
| `targets.csv` / `targets.json` | One row per backlinked target URL: tier, referring domains, links, dofollow count, best DR, top anchor, the matching file in `crawl/` (if any), and the action to take. **This is the work list.** |

## What the old site was

The Heart & Stroke Foundation of Canada's "Health Check" food-labelling program site: nutrition
education pages (`/page/*`), press releases (`/story/*`), dietitian blog posts (`/content/*`,
`/blogs/*`), recipes, product and restaurant finders, and several contest microsites. Bilingual
EN/FR. The new healthcheck.org is a US preventive-imaging marketplace, so this is a topic
transplant: the old pages come back as a lightly framed archive, not as marketplace copy.

## Where the link equity is

- Homepage: 69 referring domains, 174 links, DR up to 92. Already live. Nothing to do.
- Every other target currently returns **404**.
- The weight beyond the homepage is concentrated: `/page/different-types-fat` (18 RD, DR 90),
  `/story/health-check-exit` (10), `/page/helping-you-eat-well` (8),
  `/sites/default/files/mmallet/GroceryNutrientCriteria_Sept11.pdf` (7), `/faq` (6),
  `/page/nutrient-criteria-grocery-0` (6), `/story/health-check-media` (5), and `/node/11157`
  (32 dofollow links from Global News, DR 89). Then a long tail of 1–2 domains each.
- Tiers in `targets.csv`: T1 = 3+ referring domains or DR 60+ (49 URLs); T2 = at least one
  dofollow link (44); T3 = nofollow only (9).

## Decisions (Erik, 2026-10-02)

1. **Scope:** restore only pages with backlinks. Everything else 301s.
2. **Paths:** restored pages live at their **exact old paths**. No redirect hops.
3. **Framing:** faithful restore of the content, rendered in the new design (Base layout, Nav,
   footer disclaimer, Markdown mirror) under a light "archive" framing so it doesn't read as the
   marketplace's own voice. Dated-content refresh is a later pass.
4. **Branding:** strip Heart & Stroke Foundation branding, logos, and Health Check™ trademark
   references. Keep the nutrition substance.
5. **PDFs:** fetch each linked PDF from web.archive.org and host it at the original path under
   `public/`. Any that can't be recovered 301 to the matching nutrient-criteria HTML page.
6. **French and contest URLs:** 301 to the best English equivalent or the homepage. No new pages.

## Action counts (from `targets.csv`)

| action | count | meaning |
| --- | --- | --- |
| `restore-page` | 43 | HTML exists in `crawl/`; rebuild at the same path |
| `recover-page-from-wayback` | 10 | not in the crawl; try web.archive.org, else 301 |
| `recover-pdf-from-wayback` | 12 | fetch PDF from web.archive.org into `public/`, else 301 |
| `redirect-to-english-equivalent` | 8 | old `/en/*.html` and `/english/*` → matching restored page or home |
| `redirect-home` | 24 | French, contests, campaign microsites, query-string search URLs |
| `restore-image` / `recover-image-from-wayback` | 2 | hotlinked images at original paths |
| `already-live` | 1 | the homepage |

## Verification

After deploy, request every `path` in `targets.csv` on https://www.healthcheck.org and confirm a
200, or a single 301 that lands on a 200. Anything else is a bug.

## Pipeline (implemented)

The restore is scripted so it can be re-run end to end:

| Step | Command | Output |
| --- | --- | --- |
| 2. Wayback recovery | `python3 legacy/scripts/wayback.py` | `legacy/wayback/pages/*.html`, PDFs/images under `public/`, log in `wayback-recovery.md` |
| 1. Extraction | `python3 legacy/scripts/extract.py` (`--top 10` for a spot check) | `src/content/legacy/*.md`, images under `public/sites/…`, log in `extract-log.md` |
| 4. Redirects | `python3 legacy/scripts/redirects.py` | `vercel.json` |
| 5. Verify | `npm run build && node legacy/scripts/serve-dist.mjs` then `legacy/scripts/verify.sh [base-url]` | status + final URL for every target |

Run Wayback before extraction (recovered pages go through the same extractor) and redirects
last (anything not restored or recovered gets a 301). Python needs `beautifulsoup4 lxml
markdownify pyyaml`. `astro preview` ignores `vercel.json`; `serve-dist.mjs` applies its
redirects so `verify.sh` can check them locally.

Rendering: `src/content.config.ts` (collection `legacy`), `src/pages/[...slug].astro` (page),
`src/pages/[...slug].md.ts` (Markdown twin at `<path>.md`), `src/pages/archive.astro` (index,
linked from the footer only), `src/utils/legacy.ts` (routing helpers and the reserved-route guard).
Archive copy, including `legacyNotice`, lives in `src/data/site.ts`.
