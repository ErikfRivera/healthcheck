import type { CityMri } from '../types';

export const westPalmBeach: CityMri = {
  slug: 'west-palm-beach',
  city: 'West Palm Beach',
  county: 'Palm Beach County',
  nearby: [],
  updated: '2026-11-11',
  metaDescription:
    'MRI in West Palm Beach, FL: published cash prices from $346, an 80 cm wide-bore scanner at RAYUS, open MRI on Forest Hill Blvd, and hospital MRI services.',
  population: '117,415 residents (2020 Census) [src:census-wpb]',

  answer:
    'An MRI in West Palm Beach costs $346 to $622 without contrast at the imaging centers that publish bundled cash prices on MDsave near the city, with a regional average of $470. [src:mdsave-wpb-wo] Next Generation MRI on Palm Beach Lakes Boulevard lists $391 without contrast, and The Imaging Centers on Metrocentre Boulevard lists $496. [src:mdsave-nextgen] [src:mdsave-imaging-centers] RAYUS Radiology’s West Palm Beach center runs a wide-bore MRI with an 80 cm opening, the largest cylindrical opening when it was added in 2022. [src:rayus-freemax-2022]',
  takeaways: [
    'Bundled cash prices for an MRI without contrast near West Palm Beach run $346 to $622 on MDsave, averaging $470 against an estimated national average of $900; with and without contrast they run $406 to $976. [src:mdsave-wpb-wo] [src:mdsave-wpb-wwo]',
    'Across 150 West Palm Beach providers, New Choice Health puts the average MRI at $1,024. [src:nch-wpb-mri]',
    'RAYUS Radiology, 1572 Palm Beach Lakes Boulevard, runs a Siemens MAGNETOM Free.Max: a 0.55T wide-bore MRI with an 80 cm opening. [src:rayus-freemax-2022]',
    'Instalab lists a breast MRI without and with contrast at RAYUS West Palm Beach at $699, including the physician order and reviewed results. [src:instalab-rayus-wpb]',
    'The nearest full-body MRI clinics are in Boca Raton, not West Palm Beach: Prenuvo at 201 Plaza Real, and an Instalab partner location from $2,299. [src:prenuvo-locations] [src:instalab-fl-full-body]',
  ],

  priceRange: '$346 to $622 without contrast; $406 to $976 with and without contrast [src:mdsave-wpb-wo] [src:mdsave-wpb-wwo]',
  priceSummary:
    'MRI prices in West Palm Beach are lowest at freestanding centers that sell bundled cash prices on MDsave: $346 to $622 for an MRI without contrast, averaging $470. [src:mdsave-wpb-wo] Within the city, Next Generation MRI lists $391, The Imaging Centers $496 and The Open MRI Guys of Palm Beach $546 for the same scan. [src:mdsave-nextgen] [src:mdsave-imaging-centers] [src:mdsave-open-mri-guys] New Choice Health’s average across 150 West Palm Beach providers, hospitals included, is $1,024. [src:nch-wpb-mri] MDsave’s ranges cover centers near West Palm Beach, so some may sit outside the city.',
  prices: [
    { what: 'MRI without contrast, one body part, centers near West Palm Beach', value: '$470 average; $346 to $622 range; estimated national average $900', sourceId: 'mdsave-wpb-wo' },
    { what: 'MRI with and without contrast, one body part, centers near West Palm Beach', value: '$406 to $976 range', sourceId: 'mdsave-wpb-wwo' },
    { what: 'MRI without contrast at Next Generation MRI, Palm Beach Lakes Blvd', value: '$391', sourceId: 'mdsave-nextgen' },
    { what: 'MRI without contrast at The Imaging Centers, Metrocentre Blvd', value: '$496', sourceId: 'mdsave-imaging-centers' },
    { what: 'MRI, average of 150 West Palm Beach providers', value: '$1,024', sourceId: 'nch-wpb-mri' },
    { what: 'Breast MRI without and with contrast at RAYUS Radiology West Palm Beach, booked through Instalab, including physician order and reviewed results', value: '$699', sourceId: 'instalab-rayus-wpb' },
  ],

  providersSummary:
    'West Palm Beach has five independent MRI centers with published details. Four list cash prices on MDsave: Next Generation MRI, The Imaging Centers, The Open MRI Guys of Palm Beach and Total MD. [src:mdsave-nextgen] [src:mdsave-imaging-centers] [src:mdsave-open-mri-guys] [src:mdsave-wpb-wwo] RAYUS Radiology publishes its scanner, a 0.55T wide-bore MRI, and its breast MRI price through Instalab. [src:rayus-freemax-2022] [src:instalab-rayus-wpb]',
  providers: [
    { name: 'Next Generation MRI', type: 'Independent imaging center', location: '1700 Palm Beach Lakes Blvd, Ste 150, West Palm Beach, FL 33401', features: 'MRI; scanner type not stated', selfPayPrice: '$391 without contrast; $421 with contrast; $496 with and without contrast (MDsave)', sourceId: 'mdsave-nextgen' },
    { name: 'The Imaging Centers', type: 'Independent imaging center', location: '2450 Metrocentre Blvd, West Palm Beach, FL 33407', features: 'MRI; scanner type not stated', selfPayPrice: '$496 without contrast; $541 with contrast; $621 with and without contrast (MDsave)', sourceId: 'mdsave-imaging-centers' },
    { name: 'The Open MRI Guys of Palm Beach', type: 'Independent imaging center', location: '1441 Forest Hill Blvd, Ste 200, West Palm Beach, FL 33406', features: 'MRI; scanner type not stated', selfPayPrice: '$546 without contrast; $546 with contrast; $671 with and without contrast (MDsave)', sourceId: 'mdsave-open-mri-guys' },
    { name: 'RAYUS Radiology – West Palm Beach', type: 'Independent imaging center', location: '1572 Palm Beach Lakes Blvd, West Palm Beach, FL 33401', features: 'Siemens MAGNETOM Free.Max wide-bore MRI, 0.55T, 80 cm opening', selfPayPrice: '$699 breast MRI without and with contrast (Instalab)', sourceId: 'rayus-freemax-2022' },
    { name: 'Total MD – West Palm Beach', type: 'Independent imaging center', location: '4623 Forest Hill Blvd, Ste 110, West Palm Beach, FL 33415', features: 'MRI; scanner type not stated', selfPayPrice: '$496 with and without contrast (MDsave)', sourceId: 'mdsave-wpb-wwo' },
  ],

  hospitals: [
    { name: 'HCA Florida JFK North Hospital, West Palm Beach', note: 'At 2201 45th Street, JFK North lists MRI among its imaging services, used to view injuries and detect disease.', sourceId: 'hca-jfk-north-imaging' },
    { name: 'St. Mary’s Medical Center, West Palm Beach', note: 'In July 2023 it became the first hospital in Florida to adopt the Swoop portable MRI, a 64-millitesla unit for bedside brain imaging of ICU patients.', sourceId: 'sfhn-st-marys' },
  ],

  openMri:
    'For a roomier MRI in West Palm Beach, RAYUS Radiology on Palm Beach Lakes Boulevard runs a Siemens MAGNETOM Free.Max, a 0.55T wide-bore scanner whose 80 cm opening was the largest cylindrical MRI opening when RAYUS added it in 2022. [src:rayus-freemax-2022] The Open MRI Guys of Palm Beach, at 1441 Forest Hill Boulevard, takes its name from open MRI, though its MDsave listing does not describe the scanner. [src:mdsave-open-mri-guys]',
  fullBody:
    'No full-body MRI clinic we found publishes a West Palm Beach location; the nearest are in Boca Raton, covered on the Boca Raton page. Prenuvo lists a Boca Raton clinic at 201 Plaza Real, Suite 1202, without a price on its locations page, and Instalab lists one Boca Raton full-body MRI location from $2,299. [src:prenuvo-locations] [src:instalab-fl-full-body]',

  quotes: [
    {
      text: 'Radiologists want freedom of choice when selecting the best MRI approach for their patients.',
      speaker: 'Jonathan Wiener, MD',
      role: 'director of MRI for RAYUS Radiology in Southeast Florida, on the West Palm Beach wide-bore scanner, 2022',
      sourceId: 'rayus-freemax-2022',
    },
  ],
  faqs: [
    { q: 'How much does an MRI cost in West Palm Beach without insurance?', a: 'Bundled cash prices near West Palm Beach run $346 to $622 for an MRI without contrast, averaging $470, and $406 to $976 with and without contrast. Next Generation MRI lists $391 without contrast. [src:mdsave-wpb-wo] [src:mdsave-wpb-wwo] [src:mdsave-nextgen]' },
    { q: 'Where can I get an open or wide-bore MRI in West Palm Beach?', a: 'RAYUS Radiology, 1572 Palm Beach Lakes Boulevard, runs a wide-bore MRI with an 80 cm opening. The Open MRI Guys of Palm Beach is at 1441 Forest Hill Boulevard. [src:rayus-freemax-2022] [src:mdsave-open-mri-guys]' },
    { q: 'How much is a breast MRI in West Palm Beach?', a: 'Instalab lists a breast MRI without and with contrast at RAYUS Radiology West Palm Beach at $699, including the physician order, scheduling and reviewed results. [src:instalab-rayus-wpb]' },
    { q: 'Is a hospital MRI in West Palm Beach more expensive?', a: 'New Choice Health’s average across 150 West Palm Beach providers, hospitals included, is $1,024, about twice MDsave’s $470 average for an MRI without contrast at freestanding centers. [src:nch-wpb-mri] [src:mdsave-wpb-wo]' },
    { q: 'Can I get a full-body MRI in West Palm Beach?', a: 'Not in the city itself. The nearest full-body MRI clinics are in Boca Raton: Prenuvo at 201 Plaza Real, and an Instalab partner location from $2,299. [src:prenuvo-locations] [src:instalab-fl-full-body]' },
  ],
  sources: [
    { id: 'census-wpb', title: 'QuickFacts: West Palm Beach city, Florida (Census, April 1, 2020)', publisher: 'U.S. Census Bureau', url: 'https://www.census.gov/quickfacts/fact/table/westpalmbeachcityflorida/PST045224', date: '2020' },
    { id: 'mdsave-wpb-wo', title: 'MRI without Contrast near West Palm Beach, FL', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-without-contrast/d781f5c9/florida/miami-fl/33415', date: '2026' },
    { id: 'mdsave-wpb-wwo', title: 'MRI with and without Contrast near West Palm Beach, FL', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-and-without-contrast/d781f5cb/florida/miami-fl/33415', date: '2026' },
    { id: 'nch-wpb-mri', title: 'West Palm Beach, FL MRI Cost Comparison', publisher: 'New Choice Health', url: 'https://www.newchoicehealth.com/places/florida/west-palm-beach/mri', date: '2026' },
    { id: 'mdsave-nextgen', title: 'Next Generation MRI', publisher: 'MDsave', url: 'https://www.mdsave.com/p/next-generation-mri-imaging-and-radiology', date: '2026' },
    { id: 'mdsave-imaging-centers', title: 'The Imaging Centers', publisher: 'MDsave', url: 'https://www.mdsave.com/p/the-imaging-centers-imaging-and-radiology', date: '2026' },
    { id: 'mdsave-open-mri-guys', title: 'The Open MRI Guys Of Palm Beach', publisher: 'MDsave', url: 'https://www.mdsave.com/p/the-open-mri-guys-of-palm-beach-imaging-and-radiology', date: '2026' },
    { id: 'rayus-freemax-2022', title: 'RAYUS Radiology Adds New Cutting Edge, Wide-bore MRI Scanner to its Imaging Service Line', publisher: 'RAYUS Radiology', url: 'https://rayusradiology.com/location-news/florida-southeast/sefl2', date: '2022-04-12' },
    { id: 'instalab-rayus-wpb', title: 'RAYUS Radiology – West Palm Beach', publisher: 'Instalab', url: 'https://instalab.com/locations/fl/west-palm-beach/rayus-radiology-west-palm-beach', date: '2026' },
    { id: 'hca-jfk-north-imaging', title: 'Our diagnostic imaging services: HCA Florida JFK North Hospital', publisher: 'HCA Florida Healthcare', url: 'https://www.hcafloridahealthcare.com/locations/jfk-north-hospital/specialties/imaging-services', date: '2026' },
    { id: 'sfhn-st-marys', title: 'St. Mary’s Medical Center First Hospital in Florida to Adopt Portable MRI Technology', publisher: 'South Florida Hospital News', url: 'https://southfloridahospitalnews.com/st-marys-medical-center-first-hospital-in-florida-to-adopt-portable-mri-technology/', date: '2023-07-27' },
    { id: 'prenuvo-locations', title: 'Prenuvo Locations', publisher: 'Prenuvo', url: 'https://prenuvo.com/locations', date: '2026' },
    { id: 'instalab-fl-full-body', title: 'Full-body MRI in Florida', publisher: 'Instalab', url: 'https://instalab.com/locations/fl/full-body-mri', date: '2026' },
  ],
};
