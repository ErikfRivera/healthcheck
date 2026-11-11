import type { CityMri } from '../types';

export const tampa: CityMri = {
  slug: 'tampa',
  city: 'Tampa',
  county: 'Hillsborough County',
  nearby: [],
  updated: '2026-11-11',
  metaDescription:
    'MRI in Tampa, FL: published cash prices from $396, 3T and open MRI centers, TGH Imaging’s weight-bearing open MRI, and SimonMed whole-body MRI prices.',
  population: '413,554 residents (July 2025 Census estimate); 384,959 at the 2020 Census [src:census-qf-tampa]',

  answer:
    'An MRI in Tampa costs $396 to $596 without contrast at the imaging centers that sell bundled cash prices on MDsave, with a regional average of $511. [src:mdsave-tpa-wo] Akumin’s Tampa Imaging Center on North Armenia Avenue lists the low end, $396, and runs a 3T high-field scanner. [src:mdsave-tpa-wo] [src:akumin-tampa] Tampa General’s outpatient network, TGH Imaging, lists wide-bore MRI and weight-bearing open MRI, and BayCare says imaging at St. Joseph’s Hospital is billed as a hospital department. [src:tghimaging-home] [src:baycare-sjh-imaging]',
  takeaways: [
    'Bundled cash prices for an MRI without contrast in the Tampa region run $396 to $596 on MDsave, averaging $511; with contrast they run $446 to $653, averaging $577. [src:mdsave-tpa-wo] [src:mdsave-tpa-w]',
    'Across 70 Tampa providers, New Choice Health puts the median MRI at $853. [src:nch-tampa]',
    'Akumin Tampa Imaging Center, 5107 North Armenia Avenue, lists 3T high-field MRI and an MRI without contrast at $396 on MDsave. [src:akumin-tampa] [src:mdsave-tpa-wo]',
    'TGH Imaging powered by Tower, the outpatient network Tampa General Hospital formed in 2022, lists wide-bore MRI, extremity open MRI and weight-bearing open MRI. [src:tgh-pr-2022] [src:tghimaging-home]',
    'SimonMed’s Tampa center on Bruce B. Downs Boulevard lists 3T MRI, open MRI and whole-body MRI; SimonMed’s whole-body packages are listed at $999 to $2,499. [src:simonmed-tampa] [src:simonmed-wbmri]',
  ],

  priceRange: '$396 to $596 without contrast; $446 to $653 with contrast [src:mdsave-tpa-wo] [src:mdsave-tpa-w]',
  priceSummary:
    'MRI prices in Tampa depend on the setting. Freestanding centers that sell bundled cash prices on MDsave charge $396 to $596 for an MRI without contrast and $521 to $721 for a scan with and without contrast. [src:mdsave-tpa-wo] [src:mdsave-tpa-wwo] New Choice Health’s Tampa median, taken across 70 providers, is $853. [src:nch-tampa] BayCare notes that its imaging at St. Joseph’s Hospital is billed as a hospital department, where higher copays and deductibles may apply. [src:baycare-sjh-imaging] MDsave groups prices by region, so its Tampa list can include centers outside the city limits.',
  prices: [
    { what: 'MRI without contrast, one body part, Tampa region', value: '$511 average; $396 to $596 range', sourceId: 'mdsave-tpa-wo' },
    { what: 'MRI with contrast, one body part, Tampa region', value: '$577 average; $446 to $653 range', sourceId: 'mdsave-tpa-w' },
    { what: 'MRI with and without contrast, one body part, Tampa region', value: '$641 average; $521 to $721 range', sourceId: 'mdsave-tpa-wwo' },
    { what: 'MRI without contrast at Akumin Tampa Imaging Center, North Armenia Avenue', value: '$396', sourceId: 'mdsave-tpa-wo' },
    { what: 'MRI, median of 70 Tampa providers', value: '$853', sourceId: 'nch-tampa' },
  ],

  providersSummary:
    'Tampa’s outpatient MRI centers include two SimonMed sites with 3T scanners, Akumin’s 3T center on North Armenia Avenue, BayCare’s outpatient imaging center at St. Joseph’s Medical Arts Building, and Tampa General’s TGH Imaging network, which in 2022 had 21 locations across Hillsborough, Pasco, Pinellas and Palm Beach counties. [src:simonmed-tampa] [src:simonmed-macdill] [src:akumin-tampa] [src:baycare-sjh-mab] [src:tgh-pr-2022] Akumin publishes a self-pay MRI price on MDsave, and TGH Imaging’s Habana Avenue center sells a breast MRI through Instalab. [src:mdsave-tpa-wo] [src:instalab-tgh-habana]',
  providers: [
    { name: 'SimonMed Imaging, Tampa', type: 'Independent imaging center', location: '14302 Bruce B Downs Blvd, Tampa, FL 33613', features: '3T MRI; open MRI; whole-body MRI', sourceId: 'simonmed-tampa' },
    { name: 'SimonMed Imaging, MacDill', type: 'Independent imaging center', location: '110 S MacDill Ave, Ste 203, Tampa, FL 33609', features: '3T MRI', sourceId: 'simonmed-macdill' },
    { name: 'Akumin Tampa Imaging Center', type: 'Independent imaging center', location: '5107 N Armenia Ave, Bldg B, Tampa, FL 33603', features: '3T high-field MRI; breast MRI', selfPayPrice: '$396 without contrast (MDsave)', sourceId: 'akumin-tampa' },
    { name: 'BayCare Outpatient Imaging, St. Joseph’s Medical Arts Building', type: 'Hospital outpatient', location: '3003 W Dr. Martin Luther King Jr. Blvd, Tampa, FL 33607', features: 'MRI, CT, PET/CT; scanner type not stated', sourceId: 'baycare-sjh-mab' },
    { name: 'TGH Imaging, Habana Ave', type: 'Hospital outpatient', location: '4719 N Habana Ave, Tampa, FL 33614', features: 'Breast MRI; scanner type not stated', selfPayPrice: '$699 breast MRI without and with contrast, plus a $49 to $99 Instalab fee for non-members (Instalab)', sourceId: 'instalab-tgh-habana' },
  ],

  hospitals: [
    { name: 'Tampa General Hospital, Tampa', note: 'Formed TGH Imaging powered by Tower in 2022 after acquiring Tower Radiology, listing high-field wide-bore, weight-bearing open, extremity open and cardiac MRI.', sourceId: 'tgh-pr-2022' },
    { name: 'St. Joseph’s Hospital (BayCare), Tampa', note: 'Lists MRI at its imaging services, 3001 W Dr. Martin Luther King Jr. Blvd, which BayCare says is billed as a hospital department with possibly higher copays and deductibles.', sourceId: 'baycare-sjh-imaging' },
  ],

  openMri:
    'For an open MRI in Tampa, SimonMed’s Tampa center at 14302 Bruce B. Downs Boulevard lists open MRI, and Tampa General’s TGH Imaging network lists extremity open MRI and weight-bearing open MRI. [src:simonmed-tampa] [src:tghimaging-home] For a closed scanner with a larger opening, TGH Imaging also lists wide-bore MRI; SimonMed’s Tampa pages list 3T MRI without describing it as wide-bore. [src:tghimaging-home] [src:simonmed-macdill]',
  fullBody:
    'Full-body MRI in Tampa is offered at SimonMed’s Tampa center, 14302 Bruce B. Downs Boulevard, which lists whole-body MRI. [src:simonmed-tampa] SimonMed’s whole-body MRI page lists a Core MRI at $999 (introductory offer $899), Core MRI Plus Head and Neck at $1,799 ($1,599) and Core MRI Plus Head, Neck and Spine at $2,499 ($2,199), read by a board-certified radiologist. [src:simonmed-wbmri] Instalab sells the head, neck and spine package at the same Tampa center for $2,298. [src:instalab-tampa-fullbody]',

  quotes: [
    {
      text: 'Tampa General patients can get the care and diagnostics they need closer to home.',
      speaker: 'Sherri Lewman',
      role: 'senior vice president of enterprise imaging, Tampa General Hospital, on the creation of TGH Imaging',
      sourceId: 'tgh-pr-2022',
    },
  ],
  faqs: [
    { q: 'How much does an MRI cost in Tampa without insurance?', a: 'Bundled cash prices in the Tampa region run $396 to $596 for an MRI without contrast, averaging $511, and $446 to $653 with contrast. Akumin Tampa Imaging Center lists $396 without contrast. [src:mdsave-tpa-wo] [src:mdsave-tpa-w]' },
    { q: 'Where can I get an open MRI in Tampa?', a: 'SimonMed’s Tampa center on Bruce B. Downs Boulevard lists open MRI, and Tampa General’s TGH Imaging network lists extremity and weight-bearing open MRI as well as wide-bore MRI. [src:simonmed-tampa] [src:tghimaging-home]' },
    { q: 'Is a hospital MRI in Tampa more expensive?', a: 'It can be. BayCare says imaging at St. Joseph’s Hospital is billed as a hospital department, where higher copays and deductibles may apply, while freestanding centers on MDsave sell an MRI without contrast for $396 to $596. [src:baycare-sjh-imaging] [src:mdsave-tpa-wo]' },
    { q: 'Where can I get a 3T MRI in Tampa?', a: 'SimonMed lists 3T MRI at 14302 Bruce B. Downs Boulevard and 110 South MacDill Avenue, and Akumin at 5107 North Armenia Avenue. [src:simonmed-tampa] [src:simonmed-macdill] [src:akumin-tampa]' },
    { q: 'How much is a full-body MRI in Tampa?', a: 'SimonMed lists whole-body MRI packages from $999 to $2,499, with introductory prices of $899 to $2,199, and Instalab sells its head, neck and spine package at SimonMed’s Tampa center for $2,298. [src:simonmed-wbmri] [src:instalab-tampa-fullbody]' },
  ],
  sources: [
    { id: 'census-qf-tampa', title: 'QuickFacts: Tampa city, Florida', publisher: 'U.S. Census Bureau', url: 'https://www.census.gov/quickfacts/fact/table/tampacityflorida/PST045225', date: '2026' },
    { id: 'mdsave-tpa-wo', title: 'MRI without Contrast in the Tampa Region', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-without-contrast/d781f5c9/florida/tampa-fl', date: '2026' },
    { id: 'mdsave-tpa-w', title: 'MRI with Contrast in the Tampa Region', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-contrast/d781f5c8/florida/tampa-fl', date: '2026' },
    { id: 'mdsave-tpa-wwo', title: 'MRI with and without Contrast in the Tampa Region', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-and-without-contrast/d781f5cb/florida/tampa-fl', date: '2026' },
    { id: 'nch-tampa', title: 'Tampa, FL MRI Cost Comparison', publisher: 'New Choice Health', url: 'https://www.newchoicehealth.com/places/florida/tampa/mri', date: '2026' },
    { id: 'simonmed-tampa', title: 'SimonMed: Tampa', publisher: 'SimonMed Imaging', url: 'https://simonmed.com/locations/fl/tampa/', date: '2026' },
    { id: 'simonmed-macdill', title: 'SimonMed: MacDill', publisher: 'SimonMed Imaging', url: 'https://simonmed.com/locations/fl/macdill/', date: '2026' },
    { id: 'akumin-tampa', title: 'Diagnostic Imaging in Tampa, FL', publisher: 'Akumin', url: 'https://akumin.com/locations/florida-west/tampa/', date: '2026' },
    { id: 'baycare-sjh-mab', title: 'BayCare Outpatient Imaging (St. Joseph’s Medical Arts Building)', publisher: 'BayCare Health System', url: 'https://baycare.org/locations/b/baycare-outpatient-imaging-st-josephs-medical-arts-building', date: '2026' },
    { id: 'instalab-tgh-habana', title: 'TGH Imaging: Habana Ave', publisher: 'Instalab', url: 'https://instalab.com/locations/fl/tampa/tgh-imaging-habana-ave', date: '2026' },
    { id: 'tghimaging-home', title: 'TGH Imaging powered by Tower: Locations', publisher: 'TGH Imaging', url: 'https://www.tghimaging.com/locations/', date: '2026' },
    { id: 'tgh-pr-2022', title: 'Tampa General Hospital and Tower Radiology Create TGH Imaging powered by Tower', publisher: 'Tampa General Hospital', url: 'https://tgh.org/news/tgh-press-releases/2022/tampa-general-hospital-and-tower-radiology-create-tgh-imaging-powered-by-tower', date: '2022-07-11' },
    { id: 'baycare-sjh-imaging', title: 'Imaging Services at St. Joseph’s Hospital', publisher: 'BayCare Health System', url: 'https://baycare.org/locations/i/imaging-services-at-st-josephs-hospital', date: '2026' },
    { id: 'simonmed-wbmri', title: 'Whole-body MRI: SimonMed Longevity', publisher: 'SimonMed Imaging', url: 'https://simonmed.com/whole-body-mri/', date: '2026' },
    { id: 'instalab-tampa-fullbody', title: 'Full-body MRI in Tampa, FL', publisher: 'Instalab', url: 'https://instalab.com/locations/fl/tampa/full-body-mri', date: '2026' },
  ],
};
