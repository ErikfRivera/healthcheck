# healthcheck.org

Astro 7 static site on Vercel. Read `README.md` for layout and `BRAND.md` before touching
styles or copy. All copy lives in `src/data/site.ts`, except each scan's full content, which
lives in `src/data/scans/<slug>.ts` (shape in `src/data/scans/types.ts`). Every statistic and
quote on a scan page must cite a source in that scan's `sources` list; the build fails on a
citation that points nowhere or a source nothing cites.

`legacy/` holds the old site's crawl, the Ahrefs backlink export, and the plan for restoring
backlinked pages at their original URLs. Start with `legacy/README.md`; the task prompt is
`legacy/REBUILD_PROMPT.md`.
