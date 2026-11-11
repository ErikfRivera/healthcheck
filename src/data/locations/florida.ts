import type { FloridaMri } from './types';

/**
 * Statewide content for /fl/mri/ and the two passages every city page shares.
 * Source ids here all start with `fl-` so they can never collide with a
 * city's own ids (the build checks).
 */
export const florida: FloridaMri = {
  updated: '2026-11-11',
  metaDescription:
    'What an MRI costs in Florida, by city: published cash prices, hospital vs imaging-center gaps, referral and prior-authorization rules, and your price rights.',
  headline: 'How much does an MRI cost in Florida, and where can you get one?',
  answer:
    'A self-pay MRI in Florida costs $346 to $1,274 at the imaging centers that publish bundled cash prices on MDsave, depending on whether contrast is used: $346 to $853 without contrast and $371 to $1,274 with it. [src:fl-mdsave-wo] [src:fl-mdsave-w] Hospital outpatient departments usually charge several times more for the same scan, so where you book matters more than which city you are in. [src:fl-hcci] An MRI needs an order from a licensed clinician; insured patients usually also need prior authorization, while self-pay centers can arrange the order themselves. [src:fl-acr-mri] [src:fl-blue-prior-auth]',
  takeaways: [
    'Bundled cash prices for an MRI in Florida on MDsave run $346 to $853 without contrast, $371 to $1,274 with contrast, and $406 to $1,271 with and without contrast. [src:fl-mdsave-wo] [src:fl-mdsave-w] [src:fl-mdsave-wwo]',
    'Across all providers, not just cash-price listings, New Choice Health puts the median MRI at $1,024 in Miami, $1,041 in Orlando and $853 in Tampa. [src:fl-nch-miami] [src:fl-nch-orlando] [src:fl-nch-tampa]',
    'Hospital outpatient imaging costs 2 to 4 times what the same imaging costs in a physician office, according to the Health Care Cost Institute; at the most complex level the gap was $1,416 versus $387. [src:fl-hcci]',
    'Florida hospitals must post prices for at least 300 shoppable services and give a written good faith estimate within 3 business days of a request. [src:fl-stat-395-301]',
    'If you pay without insurance and the bill is at least $400 over your good faith estimate, you can dispute it through the federal process, within 120 days of the bill. [src:fl-cms-dispute]',
    'Florida Blue requires prior authorization for an MRI in an outpatient hospital or office, but not in an emergency room or during an inpatient stay. [src:fl-blue-prior-auth]',
  ],
  priceHeading: 'What does an MRI cost in Florida without insurance?',
  priceSummary:
    'Florida MRI prices depend on three things: the body part, whether contrast is used, and above all the kind of facility. MDsave’s Florida ranges are bundled cash prices from centers that sell directly to patients, so they sit low: $346 to $853 for an MRI without contrast. [src:fl-mdsave-wo] New Choice Health’s city medians take in every provider, hospitals included, so they run higher, at $1,024 in Miami across 150 providers. [src:fl-nch-miami] Sidecar Health puts the average Florida cash price for a brain MRI at $852. [src:fl-sidecar-brain] Each city page lists the prices published by that city’s own imaging centers.',
  prices: [
    { what: 'MRI without contrast, Florida, bundled cash price', value: '$346 to $853', sourceId: 'fl-mdsave-wo' },
    { what: 'MRI with contrast, Florida, bundled cash price', value: '$371 to $1,274', sourceId: 'fl-mdsave-w' },
    { what: 'MRI with and without contrast, Florida, bundled cash price', value: '$406 to $1,271', sourceId: 'fl-mdsave-wwo' },
    { what: 'Brain MRI, Florida, average cash price', value: '$852', sourceId: 'fl-sidecar-brain' },
    { what: 'MRI, Miami, median of 150 providers', value: '$1,024', sourceId: 'fl-nch-miami' },
    { what: 'Brain MRI, Miami', value: '$775 to $2,025', sourceId: 'fl-nch-miami' },
    { what: 'MRI, Orlando, median of 52 providers', value: '$1,041', sourceId: 'fl-nch-orlando' },
    { what: 'MRI of the foot, ankle, leg or hip, Orlando', value: '$410 to $1,100', sourceId: 'fl-nch-orlando' },
    { what: 'MRI, Tampa, median of 70 providers', value: '$853', sourceId: 'fl-nch-tampa' },
    { what: 'Brain MRI, Tampa', value: '$700 to $1,850', sourceId: 'fl-nch-tampa' },
  ],
  sections: [
    {
      heading: 'Why does an MRI cost more at a Florida hospital?',
      paragraphs: [
        'An MRI costs more in a hospital outpatient department than at a freestanding imaging center because hospitals bill a facility fee and negotiate higher rates, not because the scan is different. The Health Care Cost Institute found hospital outpatient imaging prices 2 to 4 times higher than physician-office prices, with the most complex imaging at $1,416 in a hospital versus $387 in an office in 2022; commercial MRI prices averaged 307% of what Medicare pays. [src:fl-hcci]',
        'UnitedHealth Group found routine imaging in hospital outpatient departments averaged $1,855 in 2019, 165% more than at stand-alone imaging centers or physician offices, and estimated that moving those tests would save consumers $312 per test on average. [src:fl-uhg] Florida Blue tells its members that an MRI “will generally cost you less” at an independent, freestanding imaging center than at an outpatient hospital facility. [src:fl-blue-imaging] A Healthcare Financial Management Association analysis reported by KFF Health News found hospital MRI and CT prices 70% to 149% higher. [src:fl-kff-anthem]',
      ],
    },
    {
      heading: 'Do you need a referral for an MRI in Florida?',
      paragraphs: [
        'You need an order for an MRI in Florida, but not always a referral from your own doctor. The American College of Radiology’s practice standard says the request for an MRI “must be originated by a physician or other appropriately licensed health care provider” and should carry enough clinical information to show it is medically necessary. [src:fl-acr-mri] Florida statute does not set a separate rule for patients; the Patient Self-Referral Act, which governs financial arrangements between providers, states that an order “by a radiologist for diagnostic-imaging services” is not a referral under that law. [src:fl-stat-456-053]',
        'Self-pay and direct-to-consumer centers handle the order themselves. Prenuvo says “For US clinics, we do not require a referral” and can arrange one from an independent practitioner at no cost. [src:fl-prenuvo-faq] Advanced Medical Imaging, a Florida self-pay center, says it uses an internal physician review “so your scan is ordered appropriately and reviewed before imaging is performed.” [src:fl-ami]',
        'Insurance adds its own requirement. Medicare pays for a diagnostic test only when it is ordered by the physician treating you. [src:fl-cfr-410-32] Florida Blue requires prior authorization before an MRI in an outpatient hospital or office, though not in an emergency room, an observation stay or an inpatient admission. [src:fl-blue-prior-auth] For Florida Medicaid, the state’s review contractor performs prior authorization for outpatient MRI, CT and PET scans. [src:fl-medicaid-adi]',
      ],
    },
    {
      heading: 'What price information do Florida patients have a right to?',
      paragraphs: [
        'Florida patients have a right to a price before a scheduled MRI. Under Florida Statutes section 395.301, every licensed hospital must post a consumer-friendly list of standard charges for at least 300 shoppable services, meaning services that “can be scheduled by a health care consumer in advance”, or a price estimator, and must give a written good faith estimate of its charges within 3 business days of a request. [src:fl-stat-395-301] Since January 1, 2021, federal rules have also required every U.S. hospital to publish a machine-readable file of all its prices. [src:fl-cms-hpt]',
        'If you are not using insurance, a provider usually must give you a good faith estimate if you ask or book at least 3 business days ahead. [src:fl-cms-gfe] If a provider then charges at least $400 more than its estimate, you can start a federal dispute, provided the initial bill is dated within the last 120 days. [src:fl-cms-dispute]',
        'To compare what insurers actually pay, the state’s Florida Health Price Finder reports prices estimated from paid claims, including the patient’s deductible, coinsurance and copayments, at national, state and county level. [src:fl-price-finder] The Agency for Health Care Administration says the tool draws on more than 15 million lines of claims data from Florida insurers, organised into 291 care bundles. [src:fl-ahca-transparency]',
      ],
    },
  ],
  quotes: [
    {
      text: 'There are huge cost disparities for imaging services, depending on where members receive their diagnostic tests,',
      speaker: 'Lori McLaughlin',
      role: 'communications director, Anthem, to KFF Health News',
      sourceId: 'fl-kff-anthem',
    },
    {
      text: 'To achieve true value, you have to have high-quality care at a good price,',
      speaker: 'Leah Binder',
      role: 'president and CEO, The Leapfrog Group, to KFF Health News',
      sourceId: 'fl-kff-anthem',
    },
  ],
  faqs: [
    {
      q: 'How much is an MRI without insurance in Florida?',
      a: 'Bundled cash prices on MDsave run $346 to $853 for an MRI without contrast and $371 to $1,274 with contrast. Hospital prices run higher: the Health Care Cost Institute found hospital outpatient imaging costs 2 to 4 times office prices. [src:fl-mdsave-wo] [src:fl-mdsave-w] [src:fl-hcci]',
    },
    {
      q: 'Can I get an MRI in Florida without a doctor’s referral?',
      a: 'Yes, if you pay yourself and use a center that arranges the order. Every MRI still needs an order from a licensed clinician, but self-pay centers such as Advanced Medical Imaging have their own physician review the request, and Prenuvo says its U.S. clinics do not require a referral. If you use insurance, expect prior authorization. [src:fl-ami] [src:fl-prenuvo-faq] [src:fl-blue-prior-auth]',
    },
    {
      q: 'Is an MRI cheaper at an imaging center than at a hospital in Florida?',
      a: 'Usually, and by a wide margin. Florida Blue tells members an MRI will generally cost less at a freestanding imaging center, and UnitedHealth Group found hospital outpatient imaging averaged 165% more than stand-alone centers. [src:fl-blue-imaging] [src:fl-uhg]',
    },
    {
      q: 'Does Florida Blue require prior authorization for an MRI?',
      a: 'Yes, for an MRI in an outpatient hospital or office. Prior authorization is not required for advanced imaging in an emergency room, an observation stay or an inpatient admission. [src:fl-blue-prior-auth]',
    },
    {
      q: 'How do I get a price estimate for an MRI in Florida?',
      a: 'Ask the facility for a good faith estimate. Florida hospitals must provide one within 3 business days of a request, and providers serving patients without insurance usually must provide one if you book at least 3 business days ahead. [src:fl-stat-395-301] [src:fl-cms-gfe]',
    },
    {
      q: 'What can I do if my MRI bill is higher than the estimate?',
      a: 'If you paid without insurance and the bill is at least $400 over the good faith estimate, you can start the federal patient-provider dispute process, as long as the initial bill is dated within the last 120 days. [src:fl-cms-dispute]',
    },
  ],
  sources: [
    { id: 'fl-mdsave-wo', title: 'MRI without Contrast Cost in Florida', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-without-contrast/d781f5c9/florida', date: '2026' },
    { id: 'fl-mdsave-w', title: 'MRI with Contrast Cost in Florida', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-contrast/d781f5c8/florida', date: '2026' },
    { id: 'fl-mdsave-wwo', title: 'MRI with and without Contrast Cost in Florida', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-and-without-contrast/d781f5cb/florida', date: '2026' },
    { id: 'fl-sidecar-brain', title: 'Cost of brain MRI in Florida', publisher: 'Sidecar Health', url: 'https://cost.sidecarhealth.com/cs/brain-mri-cost-in-florida', date: '2026' },
    { id: 'fl-nch-miami', title: 'Miami, FL MRI Cost Average', publisher: 'New Choice Health', url: 'https://www.newchoicehealth.com/places/florida/miami/mri', date: '2026' },
    { id: 'fl-nch-orlando', title: 'Orlando, FL MRI Cost Average', publisher: 'New Choice Health', url: 'https://www.newchoicehealth.com/places/florida/orlando/mri', date: '2026' },
    { id: 'fl-nch-tampa', title: 'Tampa, FL MRI Cost Average', publisher: 'New Choice Health', url: 'https://www.newchoicehealth.com/places/florida/tampa/mri', date: '2026' },
    { id: 'fl-hcci', title: 'Imaging Services are the Second Most Common Outpatient Service (issue brief)', publisher: 'Health Care Cost Institute', url: 'https://healthcostinstitute.org/wp-content/uploads/2026/03/Imaging-Brief_Final.pdf', date: '2026-04' },
    { id: 'fl-uhg', title: 'Consumers Can Save More than $300 per Diagnostic Imaging Test', publisher: 'UnitedHealth Group', url: 'https://www.unitedhealthgroup.com/content/dam/UHG/PDF/2020/Diagnostic-Testing-Costs-Brief.pdf', date: '2020-11' },
    { id: 'fl-blue-imaging', title: 'Saving on Imaging Costs', publisher: 'Florida Blue', url: 'https://www.floridablue.com/answers/money-saving-tips/saving-on-imaging-services', date: '2026' },
    { id: 'fl-kff-anthem', title: 'Need An MRI? Anthem Directs Most Outpatients To Independent Centers', publisher: 'KFF Health News', url: 'https://kffhealthnews.org/news/need-an-mri-anthem-directs-most-outpatients-to-independent-centers/', date: '2017-09-26' },
    { id: 'fl-acr-mri', title: 'ACR Practice Parameter for Performing and Interpreting Magnetic Resonance Imaging (MRI)', publisher: 'American College of Radiology', url: 'https://gravitas.acr.org/PPTS/DownloadPreviewDocument?DocId=146', date: '2023' },
    { id: 'fl-stat-456-053', title: 'Florida Statutes s. 456.053: Financial arrangements between referring health care providers and providers of health care services', publisher: 'The Florida Legislature', url: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0456/Sections/0456.053.html', date: '2026' },
    { id: 'fl-prenuvo-faq', title: 'FAQ', publisher: 'Prenuvo', url: 'https://prenuvo.com/faq', date: '2026' },
    { id: 'fl-ami', title: 'MRI Without a Referral in Florida', publisher: 'Advanced Medical Imaging', url: 'https://www.advancedimg.com/services/no-referral-mri', date: '2026' },
    { id: 'fl-cfr-410-32', title: '42 CFR § 410.32: Diagnostic x-ray tests, diagnostic laboratory tests, and other diagnostic tests: Conditions', publisher: 'Code of Federal Regulations, via Legal Information Institute, Cornell Law School', url: 'https://www.law.cornell.edu/cfr/text/42/410.32', date: '2026' },
    { id: 'fl-blue-prior-auth', title: 'Provider Prior Authorization', publisher: 'Florida Blue', url: 'https://www.floridablue.com/providers/medical-pharmacy-info/prior-authorization', date: '2026' },
    { id: 'fl-medicaid-adi', title: 'Advanced Diagnostic Imaging Services: Provider Manual', publisher: 'eQHealth Solutions (Acentra Health) for the Florida Agency for Health Care Administration', url: 'https://fl.acentra.com/wp-content/uploads/sites/14/2026/05/ADI-Provider-Manual-2026.pdf', date: '2026' },
    { id: 'fl-stat-395-301', title: 'Florida Statutes s. 395.301: Price transparency; itemized patient statement or bill', publisher: 'The Florida Legislature', url: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0395/Sections/0395.301.html', date: '2026' },
    { id: 'fl-cms-hpt', title: 'Hospital Price Transparency', publisher: 'Centers for Medicare & Medicaid Services', url: 'https://www.cms.gov/priorities/key-initiatives/hospital-price-transparency', date: '2026-09-16' },
    { id: 'fl-cms-gfe', title: 'What is a good faith estimate?', publisher: 'Centers for Medicare & Medicaid Services', url: 'https://www.cms.gov/medical-bill-rights/help/guides/good-faith-estimate', date: '2026-10-05' },
    { id: 'fl-cms-dispute', title: 'Dispute a medical bill', publisher: 'Centers for Medicare & Medicaid Services', url: 'https://www.cms.gov/medical-bill-rights/help/dispute-a-bill', date: '2026-10-02' },
    { id: 'fl-price-finder', title: 'Florida Health Price Finder', publisher: 'Florida Agency for Health Care Administration', url: 'https://price.healthfinder.fl.gov/', date: '2026' },
    { id: 'fl-ahca-transparency', title: 'Office of Data Dissemination and Transparency', publisher: 'Florida Agency for Health Care Administration', url: 'https://ahca.myflorida.com/agency-administration/florida-center-for-health-information-and-transparency/office-of-data-dissemination-and-transparency.html', date: '2026' },
  ],
  city: {
    referral: (city) =>
      `In ${city}, as everywhere in Florida, an MRI needs an order from a licensed clinician, but not necessarily a referral from your own doctor. The American College of Radiology standard says the request “must be originated by a physician or other appropriately licensed health care provider.” [src:fl-acr-mri] If you use insurance, Florida Blue requires prior authorization before an MRI in an outpatient hospital or office [src:fl-blue-prior-auth], and Medicare pays only when the physician treating you orders the test. [src:fl-cfr-410-32] If you pay yourself, self-pay centers and full-body MRI clinics can have their own physician review the request and write the order; Prenuvo, for one, says “For US clinics, we do not require a referral.” [src:fl-prenuvo-faq]`,
    payLess: (city) =>
      `The biggest saving on an MRI in ${city} comes from booking a freestanding imaging center rather than a hospital outpatient department: hospital outpatient imaging prices run 2 to 4 times physician-office prices nationally [src:fl-hcci], and Florida Blue tells members an MRI “will generally cost you less” at a freestanding center. [src:fl-blue-imaging] If you are paying without insurance, ask for a good faith estimate, which providers usually must give if you request one or book at least 3 business days ahead [src:fl-cms-gfe]; if the bill comes in at least $400 above it, you can dispute it. [src:fl-cms-dispute] Florida hospitals must also give a written estimate within 3 business days of a request [src:fl-stat-395-301], and the state’s Florida Health Price Finder shows what insurers actually paid, by county. [src:fl-price-finder]`,
  },
};
