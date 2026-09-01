# HealthCheck.org — Brand & Design Guide

The system is **modernist**: a light paper ground, near-black ink, one crimson
accent, square corners, and structure drawn with rules rather than boxes. It
should feel like a well-set clinical document — calm, plain, and confident —
not like a wellness app.

Every value below exists as a token in `src/styles/tokens.css`. **That file is
the source of truth; this document explains the rules for using it.** If you
find yourself typing a raw hex value or a one-off pixel size into a component,
that is the signal you have left the system.

---

## 1. Voice

The product sells calm, not fear. Proactive imaging is easy to market with
dread; we don't.

**Write like this**

- Short declaratives. "Find it early. Or rule it out."
- Name the reassurance directly: "Knowing is calmer than wondering."
- Concrete over abstract: "read by a board-certified radiologist within 72
  hours", not "clinician-backed insights".
- Say the price, the wait, and the catch in plain words.

**Avoid**

- Scare framing ("Don't wait until it's too late"), countdowns, urgency badges.
- Hedged medical over-claiming. We are a marketplace, not a provider — the
  footer disclaimer is load-bearing and must stay on every page.
- Wellness-adjacent vagueness: "optimize", "unlock", "journey", "biohacking".
- Exclamation marks.

**Audience.** Health-conscious 30–50s and longevity-minded readers who are
paying out of pocket and comparing prices. They respond to transparency, not
to enthusiasm.

---

## 2. Color

### Roles

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | `#f3f2f2` | The page ground. Also the "ink" color on crimson fields. |
| `--color-surface` | `#eae9e9` | Inset surfaces. Used sparingly — this system prefers rules to fills. |
| `--color-text` | `#201e1d` | All body and heading type. |
| `--color-divider` | `#201e1d` @ 40% | Every rule, border, and grid line. |
| `--color-accent` | `#c8102e` | The brand crimson. |

The crimson is drawn from the founding reference screenshot. It carries the
brand alone — there is no secondary brand color.

### The accent ramp

`--color-accent-100` … `--color-accent-900`, from `#fce9ec` to `#4c0611`, with
`-500` equal to the base `#c8102e`. Two steps do real work:

- **`--color-accent`** — fills. The primary button, the closing band, the 10px
  mark, and the large stat numerals.
- **`--color-accent-700` (`#8a0b20`)** — crimson *type* on the light ground:
  section kickers, prices, links. It reads as the same brand red while holding
  8.74:1 against the ground, against the base crimson's 5.27:1.

**Rule: crimson at text sizes is always `-700`. Crimson as a fill is always the
base.** The one deliberate exception is the stat numerals, which use the base
crimson — at 34–48px they are display type, and the brighter red is the point.

### Ink at reduced weight

Body copy hierarchy is built by lowering the ink, not by switching color.
Three steps, all tokenized, **all of which clear WCAG AA on the page ground**:

| Token | Contrast on `--color-bg` | Use |
| --- | --- | --- |
| `--ink-78` | 7.55:1 | Supporting body copy — the paragraph under a heading. |
| `--ink-70` | 5.79:1 | Captions, labels, the footer, the hero reassurance line. |
| `--ink-64` | 4.81:1 | The quietest legible step — struck-through averages, placeholder captions. |

**64% is the floor, not a stylistic choice.** Ink at 62% measures 4.49:1 and
fails AA; 63% is the true threshold and 64% carries a little headroom. Do not
add a quieter step — if a piece of text feels like it needs one, it is either
not important enough to be on the page or it wants a smaller size instead.

### Proportion

Crimson is punctuation, not a field. On a normal screen it should appear only
as the nav button, the kickers, the 10px marks, and the stat numerals — a few
percent of the surface. The one exception is the closing band, which is
full-bleed crimson precisely because it is the only one. If a second crimson
field appears on the page, the band stops landing.

### Accessibility

Measured, not estimated:

| Pair | Ratio |
| --- | --- |
| `--color-text` on `--color-bg` | 14.86:1 |
| `--color-accent-700` on `--color-bg` | 8.74:1 |
| `--color-bg` on `--color-accent` (the band, reversed) | 5.27:1 |
| `--color-accent` on `--color-bg` | 5.27:1 |

All pass WCAG AA for body text. The base `--color-accent` clears AA at 5.27:1,
but `-700` is still the rule for small crimson type — the extra weight is what
keeps 13px kickers and prices comfortable rather than merely compliant.

Never encode meaning in color alone. The scan cards pair the accent mark with
a number; the guarantee items pair it with a bolded lead-in.

---

## 3. Typography

**One family: Archivo**, at weights 400, 600 and 800. Headings are always 800.
Body is 400. 600 exists for the rare inline emphasis and is barely used.

```
--font-heading: 'Archivo', system-ui, sans-serif;
--font-body:    'Archivo', system-ui, sans-serif;
```

### The scale as built

| Role | Size | Line height | Tracking |
| --- | --- | --- | --- |
| Hero | `clamp(42px, 6.2vw, 84px)` | 1.06 | −0.02em |
| Closing band | `clamp(34px, 4.2vw, 56px)` | 1.06 | −0.015em |
| Stat numeral | `clamp(34px, 3.4vw, 48px)` | 56px | — |
| Pull quote | `clamp(24px, 2.6vw, 34px)` | 1.25 | −0.015em |
| Section head (`h2`) | 32px | 42px | −0.015em |
| Card title | 22px | 26px | −0.01em |
| Step title | 20px | 28px | — |
| FAQ question | 19px | 26px | — |
| Hero body | 17px | 28px | — |
| Body | 15.5px | 26–28px | — |
| Card body | 15px | 24px | — |
| Kicker / label | 13px | 14–18px | +0.08em, uppercase |

Two rules govern the display sizes:

**Negative tracking scales with size.** Large type gets −0.015em to −0.02em;
body type gets none. Never track body copy.

**Optical alignment.** Display headings carry a negative left margin
(`-0.058em` on the hero and band, `-0.045em` on stat numerals) so the *cap
edge* aligns to the gutter rather than the glyph's side bearing. Keep it when
you add a new display heading; it is why the page looks set rather than typed.

### Measure

Body copy is capped in `ch`, not pixels: 58ch for the hero, 48ch for section
body, 72ch for the footer, 32ch for the pull quote. Long lines are the fastest
way to make this system feel cheap.

### Numerals

Anything numeric — prices, scan indices, stat values — gets
`font-feature-settings: 'tnum' 1` (the `.tnum` class). Tabular figures keep
prices in a grid aligned to each other.

---

## 4. Space and structure

The spacing tokens (`--space-1` … `--space-8`, a 4px base) govern *component*
spacing. Section rhythm is set in explicit multiples of 14: sections are padded
56, 70, 84, 98 or 112px vertically. The hero is the tallest at `112px 0 84px`;
the standard section is `84px 0`.

Page frame:

```
--page-max:    1200px;
--page-gutter: clamp(20px, 5vw, 72px);
```

`.page` applies both. Only the closing band breaks out of it, and it re-applies
`.page` inside itself so its type stays on the same measure.

### Rules, not cards

**`--rule: 2px` is the system's structural line.** Sections are divided by a
2px `<hr class="rule">` in `--color-divider`. Nothing on this page has a drop
shadow, and `--radius-*` is `0` everywhere. Elevation tokens exist in
`tokens.css` but are unused by design; if a future component needs one,
question it first.

The scan grid is the clearest expression of the idea: the grid container is
painted `--color-divider` with a 2px gap, and each card paints the page ground
back in. The lines between cards *are* the gaps. When the grid is filtered to a
single card the shared ground would read as a slab of grey, so the lone card
takes its own 2px border instead — same line, different mechanism.

### The mark

A 10px solid crimson square (`.mark`). It is the only ornament in the system.
It appears at the top-right of each scan card, above each how-it-works step,
and beside each guarantee line. **There are no icons.** Do not introduce an
icon set; if something needs marking, it gets the square.

---

## 5. Components

### Buttons

`.btn` is the base: Archivo 800 at 14px, square, `8px 14.4px` padding.

- **`.btn-primary`** — crimson fill, ground-colored text. The booking action.
  There is one primary action on the page and it always says the same thing.
- **`.btn-secondary`** — divider-colored border. Not currently used.
- **`.btn-ghost`** — crimson text, minimal inline padding. For text-level
  actions such as "Show all 12 scans".
- **`.btn-ghost--invert`** — the outlined button on the crimson band. Inverts
  to a solid ground fill with crimson text on hover, so it stays legible where
  a translucent hover would vanish.

### The call to action

One label — **"Book a scan"** — in the nav and in the closing band. It is set
once in `src/data/site.ts` and must not vary by section. Mixing "Get started",
"Book now" and "Find a location" across a page reads as three different offers.

### Form controls

The hero finder is three controls sharing one 2px frame with 2px gaps, so it
reads as a single ruled instrument rather than three inputs. Controls are 52px
tall, square, with the page ground as their fill. Any future form should follow
this: one bounding rule, internal divisions drawn by the gap.

### Photography

Always desaturated: `filter: grayscale(1) contrast(1.08)`. Color photography
would compete with the crimson, which is the only color the brand has. Subject
matter is clinical and calm — imaging suites, consults, hands, equipment — and
never stock-smiling patients or stethoscope close-ups.

---

## 6. Prices, statistics, and claims

**Every number currently on the site is a placeholder.** They are marked
`PLACEHOLDER` in `src/data/site.ts`: the twelve scan prices, the twelve
national averages, all four statistics, and the testimonial.

Rules for when the real numbers arrive:

- Prices are shown as "From $X · duration". The "From" is not decorative — it
  must be a genuine floor across the network.
- The struck-through national average must be sourced and datable. A
  struck-through price you cannot defend is the fastest way to lose the trust
  the whole page is built on.
- "50% average savings" needs a stated basis (against what, measured how).
- The testimonial must be a real, consented member story before launch. Do not
  ship the placeholder.
- The footer disclaimer stays on every page. HealthCheck is a marketplace; it
  does not diagnose, treat, or provide care.

---

## 7. Responsive behavior

Every grid is `repeat(auto-fit|auto-fill, minmax(<floor>, 1fr))`, so columns
resolve from available width and no breakpoint list is maintained. Floors:
300px for scan cards and FAQ, 320px for the why-proactive split, 260px for
guarantees, 240px for steps, 200px for stats.

The twelve scan cards are deliberately twelve: the count divides evenly by 1,
2, 3 and 4, so the ruled grid never ends in a partial row at any column count
the 1200px frame allows. **If you add or remove a scan, keep the total
divisible by 4** or the grid will show an orphaned grey cell.

There is one media query in the whole system — at 720px the nav's text links
fold away and the brand and CTA carry the bar. The section anchors remain
reachable from the page body.

---

## 8. Adding to the system

Before adding anything, check in this order:

1. **Can an existing token express it?** Almost always yes.
2. **Is it drawn with a rule?** If you are reaching for a border radius, a
   shadow, or a filled card, you are probably fighting the system.
3. **Does it add a color?** It shouldn't. There is one accent.
4. **Does it add an icon?** It shouldn't. There is one mark.
5. **Does it add a font weight?** It shouldn't. 400 and 800.

New copy goes in `src/data/site.ts`, never inline in a component — that file is
the single place a writer can work without touching markup.

---

## 9. Known follow-ups

- **Self-host Archivo.** It currently loads from Google Fonts, which costs a
  third-party connection on first paint. Self-hosted `woff2` in `public/fonts/`
  with `font-display: swap` would be faster and avoids the third-party request.
- **The closing band's button padding.** `.btn-ghost` sets `padding-inline:
  var(--space-1)` (4px), which was designed for a borderless text button. With
  the inverted border applied, the outline sits tight against the label. This
  is faithful to the source design; widening it to `var(--space-4)` is a
  one-line change if you want more room.
- **Replace the why-proactive placeholder** with a real photograph (see
  `why.photo` in `src/data/site.ts`).
