import type { CityMri } from '../types';

export const miami: CityMri = {
  slug: 'miami',
  city: 'Miami',
  county: 'Miami-Dade County',
  nearby: [],
  updated: '2026-11-11',
  metaDescription:
    'MRI in Miami, FL: bundled cash prices from $346, Jackson and Baptist hospital price ranges, UHealth’s 3T scanners, and full-body MRI in South Miami.',
  population: '489,812 residents (2025 Census estimate) [src:census-2025]',

  answer:
    'An MRI in Miami costs $346 to $621 without contrast at the imaging centers that sell bundled cash prices on MDsave in the Miami region. [src:mdsave-miami-wo] Miami Open MRI on SW 48th lists $346 without contrast, and Life Radiology on NW 82nd Avenue lists $481 with and without contrast. [src:mdsave-miami-open-mri] [src:mdsave-miami-wwo] Hospital prices in Miami run far higher: New Choice Health lists a brain MRI at Jackson Health System at $2,100 to $4,500 and at Baptist Hospital of Miami at $1,650 to $3,600. [src:nch-miami-brain]',
  takeaways: [
    'Bundled cash prices on MDsave in the Miami region run $346 to $621 for an MRI without contrast and $406 to $796 for an MRI with and without contrast. [src:mdsave-miami-wo] [src:mdsave-miami-wwo]',
    'Miami Open MRI, 7404 SW 48th, lists $346 without contrast, $396 with contrast and $456 with and without contrast on MDsave. [src:mdsave-miami-open-mri]',
    'New Choice Health lists a brain MRI at Jackson Health System in Miami at $2,100 to $4,500 and at Baptist Hospital of Miami at $1,650 to $3,600, against a South Florida median of $1,091. [src:nch-miami-brain]',
    'The University of Miami’s neuroradiology division reports “20 MR machines, including eleven 3T and nine 1.5T units” across Jackson Memorial Hospital, UHealth and its affiliated centers. [src:um-neuroradiology]',
    'Ezra, part of Function Health, runs full-body MRI at 6262 Sunset Dr in South Miami and lists its Annual MRI at $999, or $899 with a Function membership. [src:ezra-florida-south] [src:ezra-pricing]',
  ],

  priceRange: '$346 to $621 without contrast; $406 to $796 with and without contrast [src:mdsave-miami-wo] [src:mdsave-miami-wwo]',
  priceSummary:
    'MRI prices in Miami depend mostly on where the scan is done. Freestanding centers that sell bundled cash prices on MDsave charge $346 to $621 for an MRI without contrast and $406 to $796 with and without contrast; MDsave says those prices are “bundled to include all related fees for your procedure”. [src:mdsave-miami-wo] [src:mdsave-miami-wwo] Hospital prices in Miami sit well above that: New Choice Health lists a brain MRI at $2,100 to $4,500 at Jackson Health System and $1,650 to $3,600 at Baptist Hospital of Miami. [src:nch-miami-brain] New Choice Health’s $1,091 brain MRI median is drawn from 144 providers and appears unchanged on its Fort Lauderdale and Boca Raton pages, so read it as a South Florida figure, not a Miami-only one. [src:nch-miami-brain] MDsave’s ranges likewise cover the Miami region, not the city alone.',
  prices: [
    { what: 'MRI without contrast, one body part, centers in the Miami region', value: '$346 to $621 range', sourceId: 'mdsave-miami-wo' },
    { what: 'MRI with and without contrast, one body part, centers in the Miami region', value: '$406 to $796 range', sourceId: 'mdsave-miami-wwo' },
    { what: 'MRI at Miami Open MRI, 7404 SW 48th', value: '$346 without contrast; $396 with contrast; $456 with and without contrast', sourceId: 'mdsave-miami-open-mri' },
    { what: 'MRI with and without contrast at Life Radiology, 3470 NW 82nd Avenue', value: '$481', sourceId: 'mdsave-miami-wwo' },
    { what: 'Brain MRI, South Florida median across 144 providers, hospitals included', value: '$1,091', sourceId: 'nch-miami-brain' },
  ],

  providersSummary:
    'Outpatient MRI in Miami is spread across hospital-run imaging centers and independent ones. Baptist Health runs an imaging center on Bird Road in Westchester, and two independent centers, Miami Open MRI and Life Radiology, publish self-pay prices on MDsave. [src:baptist-westchester] [src:mdsave-miami-open-mri] [src:mdsave-miami-wwo] In neighboring Miami Beach, outside the city limits, Akumin’s center on Arthur Godfrey Road lists 1.5T high-field MRI. [src:akumin-miami-beach] Despite its name, Miami Open MRI’s listing does not describe its scanner.',
  providers: [
    { name: 'Baptist Health Diagnostic Imaging, Westchester', type: 'Hospital outpatient', location: '8840 Bird Rd., Ste. 300, Miami, FL 33165', features: 'MRI; scanner type not stated', sourceId: 'baptist-westchester' },
    { name: 'Miami Open MRI', type: 'Independent imaging center', location: '7404 SW 48th, Miami, FL 33155', features: 'MRI; scanner type not stated', selfPayPrice: '$346 without contrast; $396 with contrast; $456 with and without (MDsave)', sourceId: 'mdsave-miami-open-mri' },
    { name: 'Life Radiology', type: 'Independent imaging center', location: '3470 NW 82nd Avenue, Suite 119, Miami, FL 33122', features: 'MRI; scanner type not stated', selfPayPrice: '$481 with and without contrast (MDsave)', sourceId: 'mdsave-miami-wwo' },
    { name: 'Dadeland MRI and CT', type: 'Independent imaging center', location: 'Miami', features: 'MRI; scanner type not stated', sourceId: 'nch-miami-brain' },
    { name: 'Akumin Miami Beach', type: 'Independent imaging center', location: '400 Arthur Godfrey Rd, Ste 104, Miami Beach, FL 33140', features: '1.5T high-field MRI', sourceId: 'akumin-miami-beach' },
  ],

  hospitals: [
    { name: 'Jackson Memorial Hospital (Jackson Health System), Miami', note: 'At 1611 N.W. 12th Avenue, Jackson Memorial Hospital says it “uses state-of-the-art MRI scanners”; New Choice Health lists Jackson Health System’s brain MRI at $2,100 to $4,500. [src:nch-miami-brain]', sourceId: 'jackson-radiology' },
    { name: 'Baptist Hospital of Miami (Baptist Health South Florida)', note: 'Performs brain MRI, with a listed price range of $1,650 to $3,600.', sourceId: 'nch-miami-brain' },
    { name: 'University of Miami Health System (UHealth), Miller School of Medicine Radiology', note: 'Its neuroradiology division reports “20 MR machines, including eleven 3T and nine 1.5T units” across Jackson Memorial Hospital, University of Miami Hospitals and Clinics with Sylvester Comprehensive Cancer Center, Applebaum Diagnostic Imaging Center and Bascom Palmer Eye Institute.', sourceId: 'um-neuroradiology' },
  ],

  fullBody:
    'Full-body MRI near Miami is offered just outside the city. Ezra, part of Function Health, scans at 6262 Sunset Dr, Suite 102, in South Miami, a separate city that adjoins Miami, and lists its Annual MRI at $999, or $899 with a Function membership, and its MRI with Spine at $1,699. [src:ezra-florida-south] [src:ezra-pricing] Instalab lists a full-body MRI at 3T Radiology and Research, 310 W 41st St in Miami Beach, for $2,599, and Instalab may add a $49 to $99 concierge fee. [src:instalab-3t-miami-beach] Prenuvo lists its Miami location, 550 Biltmore Way in Coral Gables, as “Coming soon”, with no price. [src:prenuvo-miami]',

  quotes: [],
  faqs: [
    { q: 'How much does an MRI cost in Miami without insurance?', a: 'Bundled cash prices in the Miami region run $346 to $621 for an MRI without contrast and $406 to $796 with and without contrast. Miami Open MRI lists $346 without contrast. [src:mdsave-miami-wo] [src:mdsave-miami-wwo] [src:mdsave-miami-open-mri]' },
    { q: 'Is a hospital MRI in Miami more expensive?', a: 'Usually, by a wide margin. New Choice Health lists a brain MRI at Jackson Health System at $2,100 to $4,500 and at Baptist Hospital of Miami at $1,650 to $3,600, while freestanding centers sell an MRI without contrast for $346 to $621. [src:nch-miami-brain] [src:mdsave-miami-wo]' },
    { q: 'Where can I get a 3T MRI in Miami?', a: 'The University of Miami’s radiology department reports eleven 3T MRI units across Jackson Memorial Hospital, UHealth’s hospitals and clinics, Applebaum Diagnostic Imaging Center and Bascom Palmer Eye Institute. [src:um-neuroradiology]' },
    { q: 'Is there an open MRI in Miami?', a: 'None of the Miami centers listed here publishes open, upright or wide-bore equipment. Miami Open MRI’s listing gives prices from $346 but does not describe its scanner, so ask the center directly. [src:mdsave-miami-open-mri]' },
    { q: 'Can I get a full-body MRI in Miami?', a: 'Ezra scans at 6262 Sunset Dr in South Miami, from $999, or $899 with a Function membership. Instalab lists 3T Radiology and Research in Miami Beach at $2,599, and Prenuvo lists its Coral Gables site as “Coming soon”. [src:ezra-florida-south] [src:ezra-pricing] [src:instalab-3t-miami-beach] [src:prenuvo-miami]' },
  ],
  sources: [
    { id: 'census-2025', title: 'Vintage 2025 Population Estimates: Florida cities and towns totals (sub-est2025_12.csv)', publisher: 'U.S. Census Bureau', url: 'https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025_12.csv', date: '2026-05-14' },
    { id: 'mdsave-miami-wo', title: 'MRI without Contrast in the Miami Region', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-without-contrast/d781f5c9/florida/miami-fl', date: '2026' },
    { id: 'mdsave-miami-wwo', title: 'MRI with and without Contrast in the Miami Region', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-and-without-contrast/d781f5cb/florida/miami-fl', date: '2026' },
    { id: 'mdsave-miami-open-mri', title: 'Miami Open MRI in Miami, FL: Pre-pay and Save', publisher: 'MDsave', url: 'https://www.mdsave.com/p/miami-open-mri-imaging-and-radiology', date: '2026' },
    { id: 'nch-miami-brain', title: 'Miami, FL Brain MRI Cost Comparison', publisher: 'New Choice Health', url: 'https://www.newchoicehealth.com/places/florida/miami/mri/brain-mri', date: '2026' },
    { id: 'baptist-westchester', title: 'Diagnostic Imaging: Westchester', publisher: 'Baptist Health South Florida', url: 'https://baptisthealth.net/locations/diagnostic-imaging/westchester-diagnostic-imaging', date: '2026' },
    { id: 'jackson-radiology', title: 'Radiology Services in Miami', publisher: 'Jackson Health System', url: 'https://jacksonhealth.org/services/radiology/', date: '2026' },
    { id: 'um-neuroradiology', title: 'Neuroradiology: Department of Radiology', publisher: 'University of Miami Miller School of Medicine', url: 'https://med.miami.edu/departments/radiology/divisions/neuroradiology', date: '2026' },
    { id: 'akumin-miami-beach', title: 'Miami Beach: Diagnostic Imaging Services', publisher: 'Akumin', url: 'https://akumin.com/miami-beach', date: '2026' },
    { id: 'ezra-florida-south', title: 'MRI Scans in Florida (South)', publisher: 'Ezra (Function Health)', url: 'https://ezra.com/locations/florida-south', date: '2026' },
    { id: 'ezra-pricing', title: 'Pricing: MRI Screening Service by Function', publisher: 'Ezra (Function Health)', url: 'https://ezra.com/pricing', date: '2026' },
    { id: 'instalab-3t-miami-beach', title: 'Full-Body MRI in Miami Beach, FL: 3T Radiology and Research', publisher: 'Instalab', url: 'https://instalab.com/locations/fl/miami-beach/3t-radiology-and-research', date: '2026' },
    { id: 'prenuvo-miami', title: 'Miami, FL', publisher: 'Prenuvo', url: 'https://www.prenuvo.com/locations/miami', date: '2026' },
  ],
};
