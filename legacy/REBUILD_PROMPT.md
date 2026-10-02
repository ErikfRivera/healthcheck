# Prompt: restore the backlinked legacy pages in the new design

Paste everything below the line into a Claude Code session opened at the root of this repo.

---

Restore the old healthcheck.org pages that still have backlinks, rendered in this site's
existing Astro design, at their exact original URLs. Read `legacy/README.md` first: it has the
decisions already made, the findings, and what each file in `legacy/` is. Do not re-ask those
questions. `legacy/targets.csv` is the work list; `legacy/targets.json` is the same data with
every raw target URL variant Ahrefs saw.

## Ground rules

- Read `BRAND.md` and `README.md` before touching styles or copy conventions. Use the tokens in
  `src/styles/tokens.css`; no raw hex values or one-off sizes in components.
- Every restored page uses `src/layouts/Base.astro`, the `Nav` component, and `SiteFooter` so the
  marketplace disclaimer is on every page. Pass `mdPath` so the page gets a Markdown twin like
  the scan pages do.
- Restored paths must match the `path` column in `targets.csv` byte for byte (after URL
  decoding). Astro will need `trailingSlash: 'ignore'` or equivalent so `/faq` and `/faq/` both
  resolve. Do not rename, slugify, or "clean up" any path, including `/node/11157`,
  `/page/nutrient-criteria-grocery-0`, and the two with a curly apostrophe
  (`/story/harvey’s-launches-four-health-check-items`,
  `/content/dairy-milking-it-what-it’s-worth`). For the apostrophe paths, make sure both the
  percent-encoded form and the raw form resolve; test with curl.
- Work on a branch and open a PR. Do not push to `main`.

## Step 1 — Content extraction

Write a one-off script (`legacy/scripts/extract.py` or `.ts`, committed) that, for every
`targets.csv` row with action `restore-page`, reads `legacy/crawl/<crawl_file>` and produces a
Markdown file with YAML frontmatter at `src/content/legacy/<path-with-slashes-encoded>.md` (pick
a filename scheme and record the original `path` in frontmatter; the path, not the filename, is
the source of truth for routing).

From each old HTML page keep: `<title>` (minus the " | Health Check Program" suffix), the real
article heading (the old H1 is the site name on every page; the page heading is usually the
first `<h2>` or the `.title` inside `#content`), the body content of the main content region,
inline images (copy referenced images from `legacy/crawl` into `public/` at their original paths
so hotlinked images keep working), and any tables or lists. Drop: nav, breadcrumbs, sidebars,
login/join links, "Print | Share | Add to favourites", search boxes, footers, comment forms,
Drupal boilerplate, and all `<script>`/`<style>`.

Strip branding per the decision in `legacy/README.md`: remove Heart & Stroke Foundation logos
and image references, remove ™ and "TM" after "Health Check", and remove sentences that are
purely about the HSF program's licensing or trademark. Keep the nutrition content, the press
release facts, and the dietitian bios. Keep "Health Check" as a plain name where the sentence
needs it. Where the old text references the HSF website or program contact info, remove the
sentence rather than rewriting it. Do not editorialize or modernize the content; a dated-content
refresh is a later pass.

Record in frontmatter: `path`, `title`, `description` (first ~155 chars of body text, cleaned),
`originalTitle`, `section` (page / story / content / blog / faq / other), `crawlFile`,
`referringDomains`, `maxDR`, and `archived: true`.

Check the output of the ten highest-`referring_domains` pages by hand before running the rest.

## Step 2 — Wayback recovery

For every row with action `recover-page-from-wayback`, `recover-pdf-from-wayback`, or
`recover-image-from-wayback`, query `https://archive.org/wayback/available?url=www.healthcheck.org<path>`
(also try the `http://` and non-www variants and, for the trailing-space / `>` / `exitl` typo
variants, the corrected path) and download the latest snapshot. For HTML pages, run them through
the same extractor as Step 1. For PDFs and images, save the file to `public/<original path>` so it
is served at the exact URL. Log every attempt and its result in `legacy/wayback-recovery.md`.
Anything unrecoverable becomes a redirect in Step 4; note which.

## Step 3 — Rendering

Add a content collection `legacy` (`src/content.config.ts`, schema matching the frontmatter) and
a catch-all route `src/pages/[...slug].astro` whose `getStaticPaths` maps each entry's `path` to a
route. Make sure it cannot shadow existing routes (`/`, `/scans/*`, `/robots.txt`, `/llms.txt`,
`/index.md`, `/index.html.md`).

The template: `Base` + `Nav` + a single-column article at the site's reading measure +
`SiteFooter`. Above the heading, a kicker in the existing kicker style reading "Archive" and the
section (e.g., "Archive · Nutrition" or "Archive · Press release"). Below the heading, one line
of muted text: "An archived page from the former Health Check nutrition program site. Kept
because other sites still link here. Not part of HealthCheck.org's imaging services." Put that
sentence in `src/data/site.ts` as `legacyNotice`, not in the component. Images are
`loading="lazy"` with the original alt text. Tables get the existing `tnum` treatment.

Add a Markdown twin per page at `<path>.md` (a `[...slug].md.ts` endpoint), extend
`src/utils/markdown.ts` so `pages` includes the legacy entries, and confirm `/llms.txt` and the
sitemap list them. Add `<meta name="robots" content="index,follow">` as normal; do not noindex.

Add an index page at `/archive` listing every restored page grouped by section, linked from the
footer only (not the main nav). This is the one new URL.

## Step 4 — Redirects

Create `vercel.json` with `redirects` (301) for every `targets.csv` row whose action is
`redirect-home`, `redirect-to-english-equivalent`, or anything Step 2 could not recover:

- `/en/<x>.html` and `/english/<x>` → the restored English page on the same topic if one exists
  (match by slug words; e.g. `/en/nutritional-information/nutrient-criteria-grocery.html` →
  `/page/nutrient-criteria-grocery`), else `/`.
- `/fr/*`, `/french/*`, `/2013/*`, `/contest/*`, `/instylecontest/*`, `/timetostartcontest/*`,
  `/backtoschool/*`, `/healthybeat14/*`, `/AIR MILES/*`, and `/restosearch`/`/prodsearch` with
  query strings → `/`.
- Unrecoverable nutrient-criteria PDFs → `/page/nutrient-criteria-grocery-0` (grocery/retail) or
  `/page/nutrient-criteria-restaurants` (foodservice/restaurant). Other unrecoverable files → `/`.
- The typo/variant targets (`/story/health-check-exitl`, `/page/nutrients-women>`, trailing-space
  variants) → their correct restored page.

Keep the list explicit; one rule per row rather than broad wildcards, except for the campaign
folders above. Redirects must be single-hop: the destination must itself be a 200.

## Step 5 — Verify before opening the PR

`npm run check` and `npm run build` must pass. Then serve `dist/` (`npm run preview`) and run a
script (`legacy/scripts/verify.sh`, committed) that requests every `path` in `targets.csv` and
prints the status code and final URL. Every row must be a 200, or a 301 whose destination is a
200. Include the script's output in the PR description along with: pages restored, files
recovered from Wayback, files not recovered and where they redirect, and anything you had to
judge by hand (branding strips that were borderline, pages with almost no content left after
cleanup). Flag any page where the cleaned body is under 80 words; those may need a decision
rather than a restore.

After the PR is merged and Vercel has deployed, run `verify.sh` again against
https://www.healthcheck.org and paste the result in the PR.
