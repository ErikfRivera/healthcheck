# HealthCheck.org

Landing page for HealthCheck.org — a marketplace connecting people with imaging
centers for proactive scans (full-body MRI, coronary calcium CT, DEXA, and
more) at upfront, comparable prices.

Built with [Astro](https://astro.build). Static output, no UI framework, one
small inline script.

## Getting started

```sh
npm install
npm run dev      # http://localhost:4321
```

| Command | Action |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run check` | Astro + TypeScript diagnostics |

## Project layout

```
src/
  data/site.ts          All copy and configuration — edit content here
  layouts/Base.astro    Document shell, fonts, metadata
  components/           One component per page section
  scripts/finder.ts     Hero search → scan-grid filter
  styles/tokens.css     Design tokens — the source of truth for the look
  styles/global.css     Base elements and shared classes
public/                 Static assets
BRAND.md                Brand and design guide — read before changing styles
```

**All copy lives in `src/data/site.ts`.** Text should not be edited inside
component markup.

**Design changes start in `BRAND.md`.** It documents the color roles, type
scale, spacing rhythm, and the rules that keep the system coherent — including
which values are accessibility floors rather than taste.

## The scan finder

The hero's scan + ZIP search filters the scan grid client-side and scrolls to
it. There is no provider network behind it yet, so it says so plainly rather
than implying local results exist.

State lives in the query string (`?scan=07&zip=94110#scans`), which makes a
filtered view shareable and means the no-JavaScript fallback works: the form is
a plain GET, and the page reads those parameters back on load and applies the
same filter.

## Before launch

Every number on the site is a placeholder, marked `PLACEHOLDER` in
`src/data/site.ts`:

- [ ] Twelve scan prices and twelve national-average comparisons — each average
      must be sourced and datable
- [ ] Four headline statistics, including the basis for "50% average savings"
- [ ] The testimonial — replace with a real, consented member story
- [ ] A real photograph for the "Why proactive" section (set `why.photo`)
- [ ] Wire the "Book a scan" CTA to an actual booking flow
- [ ] Legal review of the medical disclaimer in the footer

The footer disclaimer is load-bearing: HealthCheck is a marketplace, not a
medical provider.

## Design source

This implementation follows a Claude Design prototype built on the Modernist
design system, retuned to the brand crimson `#c8102e`. `BRAND.md` is the
authority going forward.
