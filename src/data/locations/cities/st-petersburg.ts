import type { CityMri } from '../types';

export const stPetersburg: CityMri = {
  slug: 'st-petersburg',
  city: 'St. Petersburg',
  county: 'Pinellas County',
  nearby: ['Clearwater'],
  updated: '2026-11-11',
  metaDescription:
    'MRI in St. Petersburg and Clearwater, FL: published cash prices from $396, BayCare and HCA hospital imaging, and Prenuvo’s whole-body MRI in downtown St. Pete.',
  population: '264,033 residents (July 2025 Census estimate) [src:census-qf-stpete]',

  answer:
    'An MRI in St. Petersburg costs $396 to $646 without contrast at the imaging centers that sell bundled cash prices on MDsave near the city. [src:mdsave-stp-wo] Elite Imaging lists $396 at 3451 66th Street North and 4551 4th Street North, and Alexander Medical Group on Dr. Martin Luther King Jr. Street North lists $596. [src:mdsave-stp-wo] [src:mdsave-alexander] BayCare says imaging at St. Anthony’s Hospital is billed as a hospital department, and Prenuvo runs a whole-body MRI clinic downtown. [src:baycare-st-anthonys] [src:prenuvo-locations]',
  takeaways: [
    'Bundled cash prices for an MRI without contrast near St. Petersburg run $396 to $646 on MDsave; with contrast they run $446 to $671. [src:mdsave-stp-wo] [src:mdsave-stp-w]',
    'Elite Imaging lists an MRI without contrast at $396 at two St. Petersburg centers and at 501 South Lincoln Avenue in Clearwater. [src:mdsave-stp-wo]',
    'Alexander Medical Group, 2438 Dr. Martin Luther King Jr. Street North, lists $596 without contrast, $621 with contrast and $671 with and without. [src:mdsave-alexander]',
    'HCA Florida Northside Hospital in St. Petersburg announced a new MRI with “a wider opening” in March 2025. [src:hca-northside-mri]',
    'Prenuvo’s St. Petersburg clinic is at 139 2nd Avenue North, and Prenuvo lists its whole-body scan at $2,499. [src:prenuvo-locations] [src:prenuvo-pricing]',
  ],

  priceRange: '$396 to $646 without contrast; $446 to $671 with contrast [src:mdsave-stp-wo] [src:mdsave-stp-w]',
  priceSummary:
    'MRI prices in St. Petersburg depend on the setting. Freestanding centers that sell bundled cash prices on MDsave near the city charge $396 to $646 for an MRI without contrast and $496 to $846 for a scan with and without contrast. [src:mdsave-stp-wo] [src:mdsave-stp-wwo] BayCare notes that imaging at St. Anthony’s Hospital is billed as a hospital department, where higher copays and deductibles may apply. [src:baycare-st-anthonys] MDsave’s list near St. Petersburg also takes in centers in other Pinellas towns, such as Elite Imaging in Clearwater, so treat its range as regional. [src:mdsave-stp-wo]',
  prices: [
    { what: 'MRI without contrast, one body part, centers near St. Petersburg', value: '$396 to $646 range', sourceId: 'mdsave-stp-wo' },
    { what: 'MRI with contrast, one body part, centers near St. Petersburg', value: '$446 to $671 range', sourceId: 'mdsave-stp-w' },
    { what: 'MRI with and without contrast, one body part, centers near St. Petersburg', value: '$496 to $846 range', sourceId: 'mdsave-stp-wwo' },
    { what: 'MRI without contrast at Alexander Medical Group, Dr. Martin Luther King Jr. Street North', value: '$596; $621 with contrast; $671 with and without', sourceId: 'mdsave-alexander' },
  ],

  providersSummary:
    'St. Petersburg’s outpatient MRI centers that publish cash prices are Elite Imaging, part of Akumin, at two sites, and Alexander Medical Group, all on MDsave. [src:mdsave-stp-wo] [src:mdsave-alexander] BayCare runs outpatient imaging at Carillon in St. Petersburg and at the Carlisle Imaging Center on the Morton Plant campus in Clearwater, both ACR accredited in all modalities. [src:baycare-carillon] [src:baycare-carlisle] None of these centers states its scanner’s field strength.',
  providers: [
    { name: 'Elite Imaging, 66th St N', type: 'Independent imaging center', location: '3451 66th St N, St. Petersburg, FL 33710', features: 'MRI; scanner type not stated', selfPayPrice: '$396 without contrast (MDsave)', sourceId: 'mdsave-stp-wo' },
    { name: 'Elite Imaging (Akumin), 4th Street N', type: 'Independent imaging center', location: '4551 4th St N, St. Petersburg, FL 33703', features: 'MRI; scanner type not stated', selfPayPrice: '$396 without contrast (MDsave)', sourceId: 'mdsave-stp-wo' },
    { name: 'Alexander Medical Group', type: 'Independent imaging center', location: '2438 Dr. Martin Luther King Jr. St N, St. Petersburg, FL 33704', features: 'MRI and MRA; breast MRI; scanner type not stated', selfPayPrice: '$596 without contrast; $621 with contrast; $671 with and without contrast (MDsave)', sourceId: 'mdsave-alexander' },
    { name: 'BayCare Outpatient Imaging, Carillon', type: 'Hospital outpatient', location: '900 Carillon Pkwy, Ste 105, St. Petersburg, FL 33716', features: 'MRI, CT; ACR accredited in all modalities; scanner type not stated', sourceId: 'baycare-carillon' },
    { name: 'Elite Imaging, Clearwater', type: 'Independent imaging center', location: '501 S Lincoln Ave, Ste 15, Clearwater, FL 33756', features: 'MRI; scanner type not stated', selfPayPrice: '$396 without contrast (MDsave)', sourceId: 'mdsave-stp-wo' },
    { name: 'Carlisle Imaging Center (BayCare), Morton Plant campus', type: 'Hospital outpatient', location: '400 Pinellas St, Ste 101, Clearwater, FL 33756', features: 'MRI, CT, PET/CT; ACR accredited in all modalities; scanner type not stated', sourceId: 'baycare-carlisle' },
  ],

  hospitals: [
    { name: 'St. Anthony’s Hospital (BayCare), St. Petersburg', note: 'Lists MRI at its imaging services, 1200 Seventh Ave N, which BayCare says is billed as a hospital department with possibly higher copays and deductibles.', sourceId: 'baycare-st-anthonys' },
    { name: 'HCA Florida St. Petersburg Hospital, St. Petersburg', note: 'Lists MRI among its imaging services at 6500 38th Ave N.', sourceId: 'hca-stpete-imaging' },
    { name: 'HCA Florida Northside Hospital, St. Petersburg', note: 'Announced in March 2025 a new MRI with a wider opening; no field strength was stated.', sourceId: 'hca-northside-mri' },
    { name: 'Morton Plant Hospital (BayCare), Clearwater', note: 'Lists MRI at its imaging services, 300 Pinellas St, which BayCare says is billed as a hospital department.', sourceId: 'baycare-morton-plant' },
  ],

  openMri:
    'For a roomier MRI in St. Petersburg, HCA Florida Northside Hospital announced in March 2025 a new scanner with “a wider opening and revolutionary lightweight comfort technology that wraps around patients like a blanket”; the announcement does not state its field strength. [src:hca-northside-mri] None of the outpatient centers listed here describes an open, upright or wide-bore scanner in St. Petersburg or Clearwater.',
  fullBody:
    'Two full-body MRI clinics have St. Petersburg addresses. Prenuvo’s clinic is at 139 2nd Avenue North, Suite C201, and Prenuvo’s US pricing page lists its whole-body scan at $2,499, a national price rather than one set for this location. [src:prenuvo-locations] [src:prenuvo-pricing] TrueScan MRI opened at 5015 4th Street North, Suite B, in January 2025, according to the local site I Love the Burg; we found no published price. [src:ilovetheburg-truescan]',

  quotes: [
    {
      text: 'This design dramatically reduces anxiety and claustrophobia',
      speaker: 'Dr. Jabr Hadid',
      role: 'chief medical officer, HCA Florida Northside Hospital, St. Petersburg, on the hospital’s wider-opening MRI',
      sourceId: 'hca-northside-mri',
    },
  ],
  faqs: [
    { q: 'How much does an MRI cost in St. Petersburg without insurance?', a: 'Bundled cash prices near St. Petersburg run $396 to $646 for an MRI without contrast and $446 to $671 with contrast. Elite Imaging lists $396 without contrast at its 66th Street North and 4th Street North centers. [src:mdsave-stp-wo] [src:mdsave-stp-w]' },
    { q: 'Where can I get an MRI with a wider opening in St. Petersburg?', a: 'HCA Florida Northside Hospital announced a new MRI with a wider opening in March 2025. None of the outpatient centers listed here describes an open or wide-bore scanner. [src:hca-northside-mri]' },
    { q: 'Is a hospital MRI in St. Petersburg more expensive?', a: 'It can be. BayCare says imaging at St. Anthony’s Hospital is billed as a hospital department, where higher copays and deductibles may apply, while freestanding centers near the city sell an MRI without contrast for $396 to $646 on MDsave. [src:baycare-st-anthonys] [src:mdsave-stp-wo]' },
    { q: 'Where can I get an MRI in Clearwater?', a: 'Elite Imaging, 501 South Lincoln Avenue, lists an MRI without contrast at $396 on MDsave, and BayCare’s Carlisle Imaging Center and Morton Plant Hospital on Pinellas Street both list MRI. [src:mdsave-stp-wo] [src:baycare-carlisle] [src:baycare-morton-plant]' },
    { q: 'Can I get a full-body MRI in St. Petersburg?', a: 'Prenuvo has a clinic at 139 2nd Avenue North and lists its whole-body scan at $2,499 nationally. TrueScan MRI opened at 5015 4th Street North in January 2025. [src:prenuvo-locations] [src:prenuvo-pricing] [src:ilovetheburg-truescan]' },
  ],
  sources: [
    { id: 'census-qf-stpete', title: 'QuickFacts: St. Petersburg city, Florida', publisher: 'U.S. Census Bureau', url: 'https://www.census.gov/quickfacts/fact/table/stpetersburgcityflorida/POP060210', date: '2026' },
    { id: 'mdsave-stp-wo', title: 'MRI without Contrast near Saint Petersburg, FL', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-without-contrast/d781f5c9/florida/tampa-fl/33701', date: '2026' },
    { id: 'mdsave-stp-w', title: 'MRI with Contrast near Saint Petersburg, FL', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-contrast/d781f5c8/florida/tampa-fl/33701', date: '2026' },
    { id: 'mdsave-stp-wwo', title: 'MRI with and without Contrast near Saint Petersburg, FL', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-and-without-contrast/d781f5cb/florida/tampa-fl/33701', date: '2026' },
    { id: 'mdsave-alexander', title: 'Alexander Medical Group in Saint Petersburg, FL', publisher: 'MDsave', url: 'https://www.mdsave.com/p/alexander-medical-group-imaging-and-radiology-2', date: '2026' },
    { id: 'baycare-carillon', title: 'BayCare Outpatient Imaging (Carillon)', publisher: 'BayCare Health System', url: 'https://baycare.org/locations/b/baycare-outpatient-imaging-carillon', date: '2026' },
    { id: 'baycare-carlisle', title: 'Carlisle Imaging Center', publisher: 'BayCare Health System', url: 'https://baycare.org/locations/c/carlisle-imaging-center', date: '2026' },
    { id: 'baycare-st-anthonys', title: 'Imaging Services at St. Anthony’s Hospital', publisher: 'BayCare Health System', url: 'https://www.baycare.org/locations/i/imaging-services-at-st-anthonys-hospital', date: '2026' },
    { id: 'hca-stpete-imaging', title: 'Imaging services: HCA Florida St. Petersburg Hospital', publisher: 'HCA Florida Healthcare', url: 'https://hcafloridahealthcare.com/locations/st-petersburg-hospital/specialties/imaging-services', date: '2026' },
    { id: 'hca-northside-mri', title: 'Northside Hospital improves comfort during MRI', publisher: 'HCA Florida Healthcare', url: 'https://www.hcafloridahealthcare.com/about-us/newsroom/northside-hospital-improves-comfort-during-mri', date: '2025-03-03' },
    { id: 'baycare-morton-plant', title: 'Imaging Services at Morton Plant Hospital', publisher: 'BayCare Health System', url: 'https://baycare.org/locations/i/imaging-services-at-morton-plant-hospital', date: '2026' },
    { id: 'prenuvo-locations', title: 'Prenuvo locations', publisher: 'Prenuvo', url: 'https://prenuvo.com/locations', date: '2026' },
    { id: 'prenuvo-pricing', title: 'Proactive health memberships and MRI scans', publisher: 'Prenuvo', url: 'https://prenuvo.com/pricing', date: '2026' },
    { id: 'ilovetheburg-truescan', title: 'Tampa Bay’s first and only full body MRI center arrives in St. Pete', publisher: 'I Love the Burg', url: 'https://ilovetheburg.com/?p=154605', date: '2025-01-13' },
  ],
};
