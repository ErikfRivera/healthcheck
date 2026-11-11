import type { CityMri } from '../types';

export const fortLauderdale: CityMri = {
  slug: 'fort-lauderdale',
  city: 'Fort Lauderdale',
  county: 'Broward County',
  nearby: [],
  updated: '2026-11-11',
  metaDescription:
    'MRI in Fort Lauderdale, FL: published cash prices from $396 in the city, Holy Cross’s 3T and 70cm open-bore scanners, and Ezra full-body MRI pricing.',
  population: '188,677 residents (2025 Census estimate) [src:census-2025]',

  answer:
    'An MRI near Fort Lauderdale costs $346 to $823 without contrast at the centers that sell bundled cash prices on MDsave, though the cheapest of them are elsewhere in South Florida. [src:mdsave-ftl-wo] In Fort Lauderdale itself, Akumin Ft Lauderdale West lists an MRI without contrast at $396 and Windsor Imaging at $471. [src:mdsave-miami-region-wo] [src:mdsave-windsor] Holy Cross Health runs a Siemens 3T scanner and a 1.5T scanner with a 70cm open bore, and Akumin’s 3T wide-bore center on North Federal Highway is also Ezra’s Fort Lauderdale full-body MRI site. [src:holy-cross-mri] [src:akumin-ftl] [src:ezra-florida-south]',
  takeaways: [
    'Bundled cash prices on MDsave near Fort Lauderdale run $346 to $823 for an MRI without contrast and $406 to $1,271 with and without contrast. [src:mdsave-ftl-wo] [src:mdsave-ftl-wwo]',
    'Within Fort Lauderdale, MDsave lists $396 without contrast at Akumin Ft Lauderdale West on West Oakland Park Boulevard and $471 at Windsor Imaging on North Dixie Highway. [src:mdsave-miami-region-wo] [src:mdsave-windsor]',
    'New Choice Health lists a brain MRI at Broward Health Medical Center at $1,600 to $3,500 and at Broward Health Imperial Point at $1,550 to $3,400, against a South Florida median of $1,091. [src:nch-ftl-brain]',
    'Holy Cross Health’s Mangurian Diagnostic Imaging Center in Fort Lauderdale runs a Siemens MAGNETOM Skyra 3T and a 1.5 Tesla MRI with a 70cm open bore. [src:holy-cross-mri]',
    'Ezra, part of Function Health, runs full-body MRI at 4461 N. Federal Highway, Fort Lauderdale, and lists its Annual MRI at $999, or $899 with a Function membership. [src:ezra-florida-south] [src:ezra-pricing]',
  ],

  priceRange: '$346 to $823 without contrast; $406 to $1,271 with and without contrast [src:mdsave-ftl-wo] [src:mdsave-ftl-wwo]',
  priceSummary:
    'MRI prices around Fort Lauderdale span a wide range. MDsave’s search near Fort Lauderdale returns bundled cash prices of $346 to $823 for an MRI without contrast and $406 to $1,271 with and without contrast, but most of the cheapest listed centers are elsewhere in South Florida. [src:mdsave-ftl-wo] [src:mdsave-ftl-wwo] Centers inside Fort Lauderdale list $396 to $471 without contrast. [src:mdsave-miami-region-wo] [src:mdsave-windsor] Fort Lauderdale’s hospitals sit far higher: New Choice Health lists a brain MRI at $1,600 to $3,500 at Broward Health Medical Center. [src:nch-ftl-brain] Its $1,091 brain MRI median, drawn from 144 providers, appears unchanged on its Miami and Boca Raton pages, so read it as a South Florida figure. [src:nch-ftl-brain]',
  prices: [
    { what: 'MRI without contrast, one body part, centers near Fort Lauderdale', value: '$346 to $823 range', sourceId: 'mdsave-ftl-wo' },
    { what: 'MRI with and without contrast, one body part, centers near Fort Lauderdale', value: '$406 to $1,271 range', sourceId: 'mdsave-ftl-wwo' },
    { what: 'MRI without contrast at Akumin Ft Lauderdale West, 1799 W Oakland Park Blvd', value: '$396', sourceId: 'mdsave-miami-region-wo' },
    { what: 'MRI at Windsor Imaging, 4805 North Dixie Hwy', value: '$471 without contrast; $521 with contrast; $571 with and without contrast', sourceId: 'mdsave-windsor' },
    { what: 'MRI with and without contrast at Total MD, 2700 W Cypress Creek Rd', value: '$496', sourceId: 'mdsave-miami-region-wwo' },
    { what: 'Brain MRI, South Florida median across 144 providers, hospitals included', value: '$1,091', sourceId: 'nch-ftl-brain' },
  ],

  providersSummary:
    'Three Fort Lauderdale MRI providers publish their equipment: Holy Cross Health, with a Siemens 3T and a 70cm open-bore 1.5T scanner; Akumin’s North Federal Highway center, with 3T wide-bore MRI; and MRI Scan & Imaging Center on East Commercial Boulevard, which describes a GE 3.0 Tesla system on a page dated 2022. [src:holy-cross-mri] [src:akumin-ftl] [src:mri-scan-center] Three other Fort Lauderdale centers, Windsor Imaging, Akumin Ft Lauderdale West and Total MD, publish self-pay prices on MDsave but not their equipment. [src:mdsave-windsor] [src:mdsave-miami-region-wo] [src:mdsave-miami-region-wwo]',
  providers: [
    { name: 'Akumin Fort Lauderdale', type: 'Independent imaging center', location: '4461 N. Federal Hwy, Fort Lauderdale, FL 33308', features: '3T wide-bore MRI; prostate MRI', sourceId: 'akumin-ftl' },
    { name: 'MRI Scan & Imaging Center', type: 'Independent imaging center', location: '3122 East Commercial Boulevard, Fort Lauderdale, FL 33308', features: 'GE Discovery MR750 3.0T MRI (equipment page dated 2022)', sourceId: 'mri-scan-center' },
    { name: 'Holy Cross Health, Harry T. Mangurian, Jr. Diagnostic Imaging Center', type: 'Hospital outpatient', location: 'Beside the main entrance of Holy Cross Hospital, Fort Lauderdale', features: 'Siemens MAGNETOM Skyra 3T; 1.5T MRI with 70cm open bore', sourceId: 'holy-cross-mri' },
    { name: 'Windsor Imaging, Ft Lauderdale', type: 'Independent imaging center', location: '4805 North Dixie Hwy, Fort Lauderdale, FL 33334', features: 'MRI; scanner type not stated', selfPayPrice: '$471 without contrast; $521 with contrast; $571 with and without (MDsave)', sourceId: 'mdsave-windsor' },
    { name: 'Akumin Ft Lauderdale West', type: 'Independent imaging center', location: '1799 W Oakland Park Blvd, Ste 105, Fort Lauderdale, FL 33311', features: 'MRI; scanner type not stated', selfPayPrice: '$396 without contrast (MDsave)', sourceId: 'mdsave-miami-region-wo' },
    { name: 'Total MD, Ft Lauderdale', type: 'Independent imaging center', location: '2700 W Cypress Creek Rd, Ste C-100, Fort Lauderdale, FL 33309', features: 'MRI; scanner type not stated', selfPayPrice: '$496 with and without contrast (MDsave)', sourceId: 'mdsave-miami-region-wwo' },
  ],

  hospitals: [
    { name: 'Holy Cross Hospital (Holy Cross Health), Fort Lauderdale', note: 'Its Harry T. Mangurian, Jr. Diagnostic Imaging Center is “steps away from the main entrance of Holy Cross Hospital in Fort Lauderdale” and runs a 3T and a 1.5T MRI. [src:holy-cross-mri]', sourceId: 'holy-cross-imaging' },
    { name: 'Broward Health Medical Center, Fort Lauderdale', note: 'Performs brain MRI, with a listed price range of $1,600 to $3,500.', sourceId: 'nch-ftl-brain' },
    { name: 'Broward Health Imperial Point, Fort Lauderdale', note: 'Performs brain MRI, with a listed price range of $1,550 to $3,400.', sourceId: 'nch-ftl-brain' },
  ],

  openMri:
    'None of the Fort Lauderdale centers listed here publishes upright or stand-up MRI. Two describe a larger bore: Holy Cross Health offers a 1.5 Tesla MRI with a “70cm open bore design”, and Akumin Fort Lauderdale, 4461 N. Federal Highway, lists 3T wide-bore MRI. [src:holy-cross-mri] [src:akumin-ftl]',
  fullBody:
    'Ezra, part of Function Health, lists a Fort Lauderdale full-body MRI site at 4461 N. Federal Highway, the same address as Akumin Fort Lauderdale, and prices its Annual MRI at $999, or $899 with a Function membership, and its MRI with Spine at $1,699. [src:ezra-florida-south] [src:ezra-pricing] None of the other Fort Lauderdale centers listed here publishes a full-body MRI; Akumin Fort Lauderdale lists prostate MRI, a targeted scan. [src:akumin-ftl]',

  quotes: [],
  faqs: [
    { q: 'How much does an MRI cost in Fort Lauderdale without insurance?', a: 'Bundled cash prices near Fort Lauderdale run $346 to $823 for an MRI without contrast. Inside the city, Akumin Ft Lauderdale West lists $396 and Windsor Imaging $471. [src:mdsave-ftl-wo] [src:mdsave-miami-region-wo] [src:mdsave-windsor]' },
    { q: 'Is a hospital MRI in Fort Lauderdale more expensive?', a: 'Yes, by a wide margin. New Choice Health lists a brain MRI at Broward Health Medical Center at $1,600 to $3,500 and at Broward Health Imperial Point at $1,550 to $3,400, while Windsor Imaging sells an MRI without contrast for $471. [src:nch-ftl-brain] [src:mdsave-windsor]' },
    { q: 'Where can I get a wide-bore or open-bore MRI in Fort Lauderdale?', a: 'Holy Cross Health has a 1.5T MRI with a 70cm open bore, and Akumin Fort Lauderdale on North Federal Highway lists 3T wide-bore MRI. [src:holy-cross-mri] [src:akumin-ftl]' },
    { q: 'Where can I get a 3T MRI in Fort Lauderdale?', a: 'Holy Cross Health runs a Siemens MAGNETOM Skyra 3T, Akumin Fort Lauderdale lists 3T wide-bore MRI, and MRI Scan & Imaging Center on East Commercial Boulevard describes a GE 3.0 Tesla system on a page dated 2022. [src:holy-cross-mri] [src:akumin-ftl] [src:mri-scan-center]' },
    { q: 'Can I get a full-body MRI in Fort Lauderdale?', a: 'Ezra lists a site at 4461 N. Federal Highway, with its Annual MRI at $999, or $899 with a Function membership. [src:ezra-florida-south] [src:ezra-pricing]' },
  ],
  sources: [
    { id: 'census-2025', title: 'Vintage 2025 Population Estimates: Florida cities and towns totals (sub-est2025_12.csv)', publisher: 'U.S. Census Bureau', url: 'https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025_12.csv', date: '2026-05-14' },
    { id: 'mdsave-ftl-wo', title: 'MRI without Contrast Cost in Fort Lauderdale, Florida', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-without-contrast/d781f5c9/florida/miami-fl/33301', date: '2026' },
    { id: 'mdsave-ftl-wwo', title: 'MRI with and without Contrast Cost in Fort Lauderdale, Florida', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-and-without-contrast/d781f5cb/florida/miami-fl/33301', date: '2026' },
    { id: 'mdsave-miami-region-wo', title: 'MRI without Contrast in the Miami Region', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-without-contrast/d781f5c9/florida/miami-fl', date: '2026' },
    { id: 'mdsave-miami-region-wwo', title: 'MRI with and without Contrast in the Miami Region', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-and-without-contrast/d781f5cb/florida/miami-fl', date: '2026' },
    { id: 'mdsave-windsor', title: 'Windsor Imaging - Ft Lauderdale in Fort Lauderdale, FL: Pre-pay and Save', publisher: 'MDsave', url: 'https://www.mdsave.com/p/windsor-imaging-ft-lauderdale-imaging-and-radiology', date: '2026' },
    { id: 'nch-ftl-brain', title: 'Fort Lauderdale, FL Brain MRI Cost Comparison', publisher: 'New Choice Health', url: 'https://www.newchoicehealth.com/places/florida/fort-lauderdale/mri/brain-mri', date: '2026' },
    { id: 'akumin-ftl', title: 'Fort Lauderdale: Diagnostic Imaging Center', publisher: 'Akumin', url: 'https://akumin.com/locations/florida-south/fort-lauderdale/', date: '2026' },
    { id: 'mri-scan-center', title: 'MRI Scan', publisher: 'MRI Scan & Imaging Center', url: 'https://mriscancenter.com/mri-scan/', date: '2022' },
    { id: 'holy-cross-mri', title: 'MRI: Diagnostic Imaging', publisher: 'Holy Cross Health', url: 'https://holy-cross.com/services/diagnostic-imaging/mri', date: '2026' },
    { id: 'holy-cross-imaging', title: 'Diagnostic Imaging', publisher: 'Holy Cross Health', url: 'https://holy-cross.com/services/diagnostic-imaging', date: '2026' },
    { id: 'ezra-florida-south', title: 'MRI Scans in Florida (South)', publisher: 'Ezra (Function Health)', url: 'https://ezra.com/locations/florida-south', date: '2026' },
    { id: 'ezra-pricing', title: 'Pricing: MRI Screening Service by Function', publisher: 'Ezra (Function Health)', url: 'https://ezra.com/pricing', date: '2026' },
  ],
};
