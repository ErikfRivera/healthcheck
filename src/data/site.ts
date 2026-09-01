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
  /** Where the CTA points. A booking flow does not exist yet. */
  ctaHref: '#scans',
  /** Show per-scan pricing. Prices are placeholders while this is true. */
  showPricing: true,
} as const;

export const nav = [
  { label: 'Scans', href: '#scans' },
  { label: 'How it works', href: '#how' },
  { label: 'Why proactive', href: '#why' },
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

export interface Scan {
  /** Two-digit index, shown on the card and used as the filter key. */
  num: string;
  title: string;
  /** PLACEHOLDER price and duration. */
  price: string;
  /** PLACEHOLDER estimated national average, shown struck through. */
  avg: string;
  copy: string;
}

export const scans: Scan[] = [
  {
    num: '01',
    title: 'Full-body MRI',
    price: 'From $1,950 · 60 minutes',
    avg: '$3,200',
    copy: 'A head-to-pelvis MRI screening for tumors, aneurysms, and abnormalities across the major organs. No radiation, no contrast for standard protocols.',
  },
  {
    num: '02',
    title: 'Brain MRI',
    price: 'From $650 · 30 minutes',
    avg: '$1,600',
    copy: 'A dedicated look at the brain: aneurysms, tumors, and early signs of neurodegenerative change. A standalone baseline or a follow-up focus.',
  },
  {
    num: '03',
    title: 'Coronary calcium CT',
    price: 'From $149 · 15 minutes',
    avg: '$450',
    copy: 'A fast, low-dose CT that measures calcified plaque in your coronary arteries — the strongest predictor of future heart attack risk.',
  },
  {
    num: '04',
    title: 'Low-dose lung CT',
    price: 'From $299 · 15 minutes',
    avg: '$650',
    copy: 'Screening for current and former smokers, and for people with family history or exposure. Catches lung cancer at stage one, when it is most treatable.',
  },
  {
    num: '05',
    title: 'Cardiac MRI',
    price: 'From $850 · 45 minutes',
    avg: '$2,100',
    copy: 'Detailed imaging of heart structure and function: chamber size, valve performance, and scarring — without radiation.',
  },
  {
    num: '06',
    title: 'CT angiography',
    price: 'From $750 · 30 minutes',
    avg: '$1,800',
    copy: 'Contrast CT that maps soft plaque and narrowing in the coronary arteries — the step beyond a calcium score when risk runs in the family.',
  },
  {
    num: '07',
    title: 'DEXA scan',
    price: 'From $99 · 20 minutes',
    avg: '$225',
    copy: 'The gold standard for bone density and body composition: lean mass, fat distribution, and osteoporosis risk in one low-dose scan.',
  },
  {
    num: '08',
    title: 'Abdominal ultrasound',
    price: 'From $199 · 30 minutes',
    avg: '$400',
    copy: 'Radiation-free imaging of the liver, kidneys, gallbladder, pancreas and aorta — including aortic aneurysm screening.',
  },
  {
    num: '09',
    title: 'Thyroid ultrasound',
    price: 'From $149 · 20 minutes',
    avg: '$375',
    copy: 'A quick, radiation-free check for nodules and enlargement in a gland that quietly drives energy, weight and mood.',
  },
  {
    num: '10',
    title: 'Skin cancer screening',
    price: 'From $129 · 20 minutes',
    avg: '$240',
    copy: 'Full-body dermatologic exam with dermoscopy. Melanoma found early is highly curable; found late, it is not.',
  },
  {
    num: '11',
    title: 'Comprehensive blood panel',
    price: 'From $199 · Results in 3 days',
    avg: '$460',
    copy: 'Over 60 biomarkers covering heart, hormones, metabolic health, inflammation, and key cancer markers — tracked over time.',
  },
  {
    num: '12',
    title: 'Multi-cancer blood test',
    price: 'From $749 · Results in 2 weeks',
    avg: '$949',
    copy: 'A single blood draw screened for signals from dozens of cancer types — an early-detection layer alongside imaging.',
  },
];

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
