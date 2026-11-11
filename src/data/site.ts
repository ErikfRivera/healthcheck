/**
 * All site copy and configuration in one place.
 *
 * Every price and every statistic below is a PLACEHOLDER carried over from
 * the design. Swap them for real network numbers before launch — see the
 * `PLACEHOLDER` markers.
 */

export const site = {
  name: 'HealthCheck.org',
  /** The single call to action, used in the nav and the closing band. */
  ctaLabel: 'Book a scan',
  /** Where the CTA points. A booking flow does not exist yet. Root-relative
   *  so it also works from subpages like /scans/<slug>. */
  ctaHref: '/#scans',
  /** Show per-scan pricing. Prices are placeholders while this is true. */
  showPricing: true,
} as const;

/** Root-relative anchors so the nav works from subpages too. */
export const nav = [
  { label: 'Scans', href: '/#scans' },
  { label: 'How it works', href: '/#how' },
  { label: 'Why proactive', href: '/#why' },
] as const;

export const hero = {
  /** Rendered as two stacked lines. */
  headline: ['Find it early.', 'Or rule it out.'],
  body: 'HealthCheck connects you with trusted imaging centers near you for full-body MRI, heart CT, DEXA and other preventive scans. No referral needed, and a board-certified radiologist walks you through your results within days. Knowing is calmer than wondering.',
  searchCta: 'Compare prices near you',
  reassurance: 'Upfront prices. No membership fees. No surprise bills.',
} as const;

/** PLACEHOLDER — all four figures need real numbers. */
export const stats = [
  { value: '0', label: 'Referrals needed' },
  { value: '50%', label: 'Avg. savings vs. hospital list price' },
  { value: '500+', label: 'Partner imaging centers' },
  { value: '72hr', label: 'Radiologist-read results' },
] as const;

/**
 * The twelve scans. Each one's full content — the answer-first summary,
 * guideline table, sourced statistics, verbatim quotes, FAQ and sources —
 * lives in its own file under src/data/scans/ because a single entry runs to
 * several hundred lines. The shape is documented in src/data/scans/types.ts.
 * Keep the total divisible by 4 (see BRAND.md §7).
 */
export type { Scan } from './scans/types';
export { scans } from './scans';

/**
 * Shared copy for the scan pages. Section headings are question-shaped and
 * templated on each scan's `noun` ("a DEXA scan") so every H2 names the
 * entity and matches how people actually ask.
 */
export const scanPage = {
  kicker: 'Preventive scan',
  breadcrumb: { home: 'Home', scans: 'Scans' },
  alsoCalled: 'Also called',
  updatedLabel: 'Updated',
  reviewLabel: 'Sources reviewed',
  takeawaysLabel: 'Key takeaways',
  factsLabel: 'At a glance',
  factLabels: {
    duration: 'Time in the scanner',
    radiation: 'Radiation',
    contrast: 'Contrast',
    prep: 'Preparation',
    results: 'Results',
    bestFor: 'Guideline-backed for',
  },
  headings: {
    detects: (noun: string) => `What does ${noun} detect?`,
    limits: (noun: string) => `What does ${noun} not detect?`,
    whoFor: (noun: string) => `Who should get ${noun}?`,
    notFor: (noun: string) => `Who should not get ${noun}?`,
    radiation: (noun: string) => `How much radiation does ${noun} involve?`,
    procedure: (noun: string) => `What happens during ${noun}?`,
    prep: (noun: string) => `How do you prepare for ${noun}?`,
    accuracy: (noun: string) => `How accurate is ${noun}?`,
    results: (noun: string) => `How are the results of ${noun} reported?`,
    stats: (noun: string) => `Key statistics on ${noun.replace(/^(a|an) /, '')} screening`,
    quotes: 'What the guidelines and experts say',
    cost: (noun: string) => `How much does ${noun} cost?`,
    faq: (noun: string) => `Common questions about ${noun}`,
    related: 'Related scans',
    sources: 'Sources',
  },
  guidelineColumns: ['Body', 'Year', 'Position', 'Grade'],
  /** Line under the cost paragraph, pointing at the network price above it. */
  costNote:
    'HealthCheck prices are "from" prices for the scan and the radiologist read at partner imaging centers, and vary by center and location.',
  ctaLabel: 'Compare prices near you',
  /** Shown when `site.showPricing` is on; the figures are placeholders. */
  avgLabel: 'Est. national average',
} as const;

/** The /scans/ comparison page. */
export const scansIndex = {
  path: '/scans/',
  title: 'Preventive scans compared',
  metaDescription:
    'Compare the 12 preventive scans and screening tests on HealthCheck.org: what each one detects, radiation dose, time, preparation, and which guidelines recommend it.',
  kicker: 'The scans',
  headline: 'Which preventive scan is right for you?',
  answer:
    'The preventive scan with the strongest evidence depends on your age, sex and risk factors, not on which scan sees the most. Guideline bodies recommend low-dose lung CT for heavy current and former smokers aged 50 to 80, bone density testing for women 65 and older, an abdominal aortic ultrasound for men 65 to 75 who have ever smoked, and a coronary calcium scan when a statin decision is uncertain. Whole-body MRI and multi-cancer blood tests are not recommended by any major guideline body for people without symptoms, although they are sold to them. The table compares all twelve.',
  columns: ['Scan', 'Looks for', 'Radiation', 'Time', 'Guideline-backed for'],
  updatedLabel: 'Updated',
} as const;

/**
 * Shared copy for the "MRI in <city>, Florida" pages at /fl/mri/<slug>/.
 * Headings are question-shaped and name the city, so each passage matches
 * how people ask ("How much does an MRI cost in Tampa?") and stands alone
 * when an answer engine quotes it. Each city's own content lives in
 * src/data/locations/<slug>.ts.
 */
export const mriCityPage = {
  kicker: 'MRI in Florida',
  breadcrumb: { home: 'Home', hub: 'MRI in Florida' },
  title: (city: string) => `MRI in ${city}, Florida`,
  /** <title>: the page's question in the words people search with. */
  docTitle: (city: string) => `MRI in ${city}, FL: prices, imaging centers and open MRI — ${site.name}`,
  alsoCovers: 'Also covers',
  updatedLabel: 'Updated',
  sourcesLabel: 'sources',
  takeawaysLabel: 'Key takeaways',
  headings: {
    cost: (city: string) => `How much does an MRI cost in ${city}?`,
    where: (city: string) => `Where can you get an MRI in ${city}?`,
    hospitals: (city: string) => `Which hospitals in ${city} offer MRI?`,
    open: (city: string) => `Where can you get an open or wide-bore MRI in ${city}?`,
    fullBody: (city: string) => `Can you get a full-body MRI in ${city}?`,
    referral: (city: string) => `Do you need a referral for an MRI in ${city}?`,
    payLess: (city: string) => `How can you pay less for an MRI in ${city}?`,
    quotes: 'What local experts say',
    faq: (city: string) => `Common questions about getting an MRI in ${city}`,
    otherCities: 'MRI in other Florida cities',
    scans: 'MRI scans explained',
    sources: 'Sources',
  },
  priceColumns: ['What the price covers', 'Published price', 'Source'],
  providerColumns: ['Imaging center', 'Type', 'Location', 'MRI equipment and services', 'Published self-pay price'],
  noPrice: 'Not published',
  /** Shown under the provider table. HealthCheck has no partners here yet. */
  providerNote:
    'Listed from each center’s own published pages, in no particular order. HealthCheck is not affiliated with these centers and does not rank them. Call ahead to confirm equipment, hours and the current self-pay price.',
  fullBodyLink: 'What a full-body MRI finds, and what the guidelines say',
  ctaLabel: 'Compare preventive MRI scans',
  ctaHref: '/scans/',
  /** Scan pages linked from every city page. */
  relatedScans: ['full-body-mri', 'brain-mri', 'cardiac-mri'],
} as const;

/** The /fl/mri/ hub. Its statewide content lives in src/data/locations/florida.ts. */
export const mriFloridaHub = {
  path: '/fl/mri/',
  title: 'MRI in Florida',
  docTitle: `MRI in Florida: prices by city, referrals and your price rights — ${site.name}`,
  kicker: 'MRI in Florida',
  cityColumns: ['City', 'County', 'Published MRI prices', 'Imaging centers listed'],
  cityTableCaption: 'Florida cities with an MRI guide',
  quotesHeading: 'What experts say about shopping for an MRI',
  /** Sitewide footer link to the hub. */
  footerLink: 'MRI in Florida',
} as const;

export const steps = [
  {
    title: '1 — Choose your scan',
    copy: 'Pick from full-body MRI, heart CT, DEXA and more. A short health questionnaire confirms the scan is right for you — reviewed by a physician, at no charge.',
  },
  {
    title: '2 — Book near you',
    copy: "Choose a partner imaging center from our network. Transparent, upfront pricing — most scans cost less than a month of the average family's health insurance premium.",
  },
  {
    title: '3 — Own your results',
    copy: 'A board-certified radiologist reads your scan within 72 hours. You get the full report and images — yours to keep, share with your doctor, or compare year over year.',
  },
] as const;

export const why = {
  kicker: 'Why proactive',
  headline: "Most serious conditions are silent until they aren't.",
  body: 'The healthcare system is built to react to symptoms. Proactive imaging flips the order: look first, so that if something is growing, you find it while it’s small, treatable, and on your terms.',
  /**
   * Drop a real photo at `public/why.jpg` (or point this at any path under
   * public/) and the placeholder below is replaced automatically. Set to
   * null to keep the placeholder.
   */
  photo: null as { src: string; alt: string } | null,
  photoPlaceholder: 'Photo — an MRI suite or a patient consult',
} as const;

export const guarantees = [
  {
    title: 'Money-back guarantee.',
    copy: "Full refund if you don't receive care. No questions, no fees.",
  },
  {
    title: 'The price is the price.',
    copy: 'One upfront number covers the scan and the radiologist read. No bill arrives later.',
  },
  {
    title: 'HSA / FSA eligible.',
    copy: 'Most scans qualify, and purchases may count toward a high-deductible plan.',
  },
] as const;

/** PLACEHOLDER — replace with a real, consented member story. */
export const testimonial = {
  quote:
    "My calcium score came back high at 44. No symptoms, no warning. Two stents later, I'm here because I looked.",
  attribution: 'Placeholder testimonial — replace with a real member story',
} as const;

export const faqs = [
  {
    q: 'Who can use HealthCheck?',
    a: 'Anyone. You do not need a referral, a diagnosis, or insurance. A short health questionnaire, reviewed by a physician at no charge, confirms each scan is appropriate for you.',
  },
  {
    q: 'Does it work with insurance, HSA or FSA?',
    a: 'Scans are self-pay at transparent prices, and most are HSA/FSA eligible. If you have a high-deductible plan, your purchase may count toward your deductible — we provide the itemized receipt to submit.',
  },
  {
    q: 'What if something is found?',
    a: 'Your radiologist report flags anything that needs follow-up, in plain language. We help you share images and results with your own doctor — they are yours to keep.',
  },
  {
    q: 'What if I change my mind?',
    a: 'Full refund if you have not received care. No questions, no fees.',
  },
] as const;

export const closing = {
  headline: 'Peace of mind is bookable.',
} as const;

export const footer = {
  disclaimer:
    'HealthCheck.org is not a medical provider and does not diagnose or treat conditions. Scans are performed by licensed imaging centers and read by board-certified radiologists. Screening is not a substitute for care from your physician.',
  copyright: `© ${new Date().getFullYear()} HealthCheck.org`,
} as const;

/**
 * The archive of pages restored from the former Health Check nutrition
 * program site (Heart & Stroke Foundation of Canada, 1999–2014). They live at
 * their original URLs because other sites still link to them. Content is in
 * src/content/legacy/; see legacy/README.md.
 */
export const legacyNotice =
  "An archived page from the former Health Check nutrition program site. Kept because other sites still link here. Not part of HealthCheck.org's imaging services.";

export const archive = {
  kicker: 'Archive',
  /** Appended to each archived page's <title>. */
  titleSuffix: `Archive — ${site.name}`,
  /** Kicker label per section of the old site, e.g. "Archive · Press release". */
  sectionLabels: {
    page: 'Nutrition',
    story: 'Press release',
    content: 'Blog post',
    blog: 'Blog',
    faq: 'FAQ',
    recipe: 'Recipe',
    other: 'Program',
  },
  /** Section order and headings on the /archive index. */
  sectionHeadings: {
    page: 'Nutrition and program pages',
    story: 'Press releases',
    content: 'Blog posts',
    blog: 'Blog indexes',
    faq: 'FAQ',
    recipe: 'Recipes',
    other: 'Program listings',
  },
  index: {
    path: '/archive',
    title: 'Archive',
    headline: 'Archived pages',
    body: 'Pages from the former Health Check nutrition program site, restored at their original addresses because other sites still link to them. They are kept as they were and are not part of HealthCheck.org’s imaging services.',
  },
  /** Prefix for a press release's date line, e.g. "Released 06-18-2014". */
  releasedLabel: 'Released',
  /** Label for the footer link to the archive index. */
  footerLink: 'Archive',
} as const;

export type LegacySection = keyof typeof archive.sectionLabels;
