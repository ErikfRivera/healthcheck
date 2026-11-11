import type { CityMri } from '../types';

export const orlando: CityMri = {
  slug: 'orlando',
  city: 'Orlando',
  county: 'Orange County',
  nearby: [],
  updated: '2026-11-11',
  metaDescription:
    'MRI in Orlando, FL: published cash prices from $396, 3T wide-bore and open MRI centers, a stand-up MRI center, and SimonMed whole-body MRI prices.',
  population: '334,854 residents (July 2024 Census estimate); 307,573 at the 2020 Census [src:census-qf-orlando]',

  answer:
    'An MRI in Orlando costs $396 to $646 without contrast at the imaging centers that sell bundled cash prices on MDsave, with a regional average of $498. [src:mdsave-orl-wo] Akumin on Forest City Road and Advanced Diagnostic Group on South Kirkman Road list the low end, $396, and Stand Up MRI of Orlando lists $621. [src:mdsave-orl-wo] [src:mdsave-standup-orlando] SimonMed runs 3T wide-bore MRI at its Kaley II and Waterford Lakes centers in Orlando, and Kaley II also lists open MRI. [src:simonmed-kaley] [src:simonmed-waterford]',
  takeaways: [
    'Bundled cash prices for an MRI without contrast in the Orlando region run $396 to $646 on MDsave, averaging $498; with contrast they run $446 to $653, averaging $607. [src:mdsave-orl-wo] [src:mdsave-orl-w]',
    'New Choice Health puts the average MRI in Orlando at $1,041, about double the MDsave regional average of $498 for an MRI without contrast. [src:nch-orlando] [src:mdsave-orl-wo]',
    'Akumin, 7960 Forest City Road, lists 3T high-field MRI and an MRI without contrast at $396 on MDsave. [src:akumin-orlando] [src:mdsave-orl-wo]',
    'SimonMed lists 3T wide-bore MRI at Kaley II on South Orange Avenue and at Waterford Lakes in east Orlando, and 1.5T wide-bore MRI at Delaney Park. [src:simonmed-kaley] [src:simonmed-waterford] [src:simonmed-delaney-park]',
    'SimonMed’s whole-body MRI packages are listed at $999 to $2,499, and its Kaley II and Waterford Lakes centers in Orlando list whole-body MRI. [src:simonmed-wbmri] [src:simonmed-kaley] [src:simonmed-waterford]',
  ],

  priceRange: '$396 to $646 without contrast; $446 to $653 with contrast [src:mdsave-orl-wo] [src:mdsave-orl-w]',
  priceSummary:
    'MRI prices in Orlando depend on where the scan is done. Freestanding centers that sell bundled cash prices on MDsave charge $396 to $646 for an MRI without contrast and $546 to $796 for a scan with and without contrast. [src:mdsave-orl-wo] [src:mdsave-orl-wwo] New Choice Health’s Orlando average, $1,041, is roughly twice the MDsave figures. [src:nch-orlando] MDsave groups prices by region, so its Orlando list can include centers outside the city limits; Akumin’s Forest City Road center, for example, appears there as “Akumin - Maitland”. [src:mdsave-orl-wo]',
  prices: [
    { what: 'MRI without contrast, one body part, Orlando region', value: '$498 average; $396 to $646 range', sourceId: 'mdsave-orl-wo' },
    { what: 'MRI with contrast, one body part, Orlando region', value: '$607 average; $446 to $653 range', sourceId: 'mdsave-orl-w' },
    { what: 'MRI with and without contrast, one body part, Orlando region', value: '$655 average; $546 to $796 range', sourceId: 'mdsave-orl-wwo' },
    { what: 'MRI without contrast at Stand Up MRI of Orlando, South Orange Avenue, including the radiologist’s read', value: '$621', sourceId: 'mdsave-standup-orlando' },
    { what: 'MRI, Orlando average', value: '$1,041', sourceId: 'nch-orlando' },
  ],

  providersSummary:
    'Orlando’s outpatient MRI centers include three SimonMed sites, two of them with 3T wide-bore scanners; Akumin’s 3T center on Forest City Road; RAYUS Radiology’s 3T center on Turkey Lake Road; Advanced Diagnostic Group on South Kirkman Road; and Stand Up MRI of Orlando. [src:simonmed-kaley] [src:simonmed-waterford] [src:akumin-orlando] [src:rayus-turkey-lake] [src:mdsave-orl-wo] Only Akumin, Advanced Diagnostic Group and Stand Up MRI publish self-pay prices for a standard MRI, all on MDsave. [src:mdsave-standup-orlando]',
  providers: [
    { name: 'SimonMed Imaging, Delaney Park', type: 'Independent imaging center', location: '1315 S Orange Ave, Ste 1B, Orlando, FL 32806', features: '1.5T wide-bore and 3T MRI; breast MRI', sourceId: 'simonmed-delaney-park' },
    { name: 'SimonMed Imaging, Kaley II', type: 'Independent imaging center', location: '2121 S Orange Ave, Orlando, FL 32806', features: '3T wide-bore MRI; open MRI; whole-body MRI', sourceId: 'simonmed-kaley' },
    { name: 'SimonMed Imaging, Waterford Lakes', type: 'Independent imaging center', location: '775 N Alafaya Trail, Orlando, FL 32828', features: '3T wide-bore MRI; whole-body MRI', sourceId: 'simonmed-waterford' },
    { name: 'Akumin Orlando', type: 'Independent imaging center', location: '7960 Forest City Rd, Ste 102, Orlando, FL 32810', features: '3T high-field MRI; MRA', selfPayPrice: '$396 without contrast (MDsave)', sourceId: 'akumin-orlando' },
    { name: 'Advanced Diagnostic Group (Akumin), Kirkman', type: 'Independent imaging center', location: '882 S Kirkman Rd, Ste 103-104, Orlando, FL 32811', features: 'MRI; scanner type not stated', selfPayPrice: '$396 without contrast (MDsave)', sourceId: 'mdsave-orl-wo' },
    { name: 'RAYUS Radiology, Turkey Lake', type: 'Independent imaging center', location: '9350 Turkey Lake Rd, Ste 100, Orlando, FL 32819', features: '3T MRI; breast MRI', sourceId: 'rayus-turkey-lake' },
    { name: 'Stand Up MRI of Orlando', type: 'Independent imaging center', location: '2010 S Orange Ave, Orlando, FL 32806', features: 'MRI; scanner type not stated', selfPayPrice: '$621 without contrast; $646 with contrast; $796 with and without contrast (MDsave)', sourceId: 'mdsave-standup-orlando' },
  ],

  hospitals: [
    { name: 'Orlando Regional Medical Center (Orlando Health), Orlando', note: 'Orlando Health’s radiology page states that ORMC has a 1.5 Tesla Siemens Sonata open MRI scanner.', sourceId: 'ormc-radiology' },
  ],

  openMri:
    'For an open MRI in Orlando, SimonMed’s Kaley II center at 2121 South Orange Avenue lists open MRI, and Orlando Health’s radiology page says Orlando Regional Medical Center has a 1.5 Tesla open MRI scanner. [src:simonmed-kaley] [src:ormc-radiology] For a closed scanner with a larger opening, SimonMed lists 3T wide-bore MRI at Kaley II and Waterford Lakes and 1.5T wide-bore MRI at Delaney Park. [src:simonmed-waterford] [src:simonmed-delaney-park] Stand Up MRI of Orlando, also on South Orange Avenue, publishes cash prices on MDsave, but its listing does not describe its scanner. [src:mdsave-standup-orlando]',
  fullBody:
    'Full-body MRI in Orlando is offered by SimonMed, whose Kaley II (2121 South Orange Avenue) and Waterford Lakes (775 North Alafaya Trail) centers list whole-body MRI. [src:simonmed-kaley] [src:simonmed-waterford] SimonMed’s whole-body MRI page lists a Core MRI at $999 (introductory offer $899), Core MRI Plus Head and Neck at $1,799 ($1,599) and Core MRI Plus Head, Neck and Spine at $2,499 ($2,199), read by a board-certified radiologist. [src:simonmed-wbmri] Instalab sells the head, neck and spine package for $2,298, including the physician order and results review, at SimonMed’s Kaley II, Waterford Lakes, Lake Nona (10105 Clear Vista Street) and Sand Lake (6000 Turkey Lake Road) centers. [src:instalab-orlando-fullbody]',

  quotes: [],
  faqs: [
    { q: 'How much does an MRI cost in Orlando without insurance?', a: 'Bundled cash prices in the Orlando region run $396 to $646 for an MRI without contrast, averaging $498, and $446 to $653 with contrast. Akumin and Advanced Diagnostic Group list $396 without contrast. [src:mdsave-orl-wo] [src:mdsave-orl-w]' },
    { q: 'Where can I get an open MRI in Orlando?', a: 'SimonMed’s Kaley II center, 2121 South Orange Avenue, lists open MRI, and Orlando Health says Orlando Regional Medical Center has a 1.5 Tesla open scanner. SimonMed’s Kaley II, Waterford Lakes and Delaney Park centers also have wide-bore scanners. [src:simonmed-kaley] [src:ormc-radiology] [src:simonmed-delaney-park]' },
    { q: 'Where can I get a 3T MRI in Orlando?', a: 'SimonMed lists 3T MRI at Delaney Park, Kaley II and Waterford Lakes, Akumin at 7960 Forest City Road, and RAYUS Radiology at 9350 Turkey Lake Road. [src:simonmed-delaney-park] [src:simonmed-kaley] [src:simonmed-waterford] [src:akumin-orlando] [src:rayus-turkey-lake]' },
    { q: 'Is an MRI cheaper at an Orlando imaging center than the area average?', a: 'Usually. New Choice Health puts the average Orlando MRI at $1,041, while centers on MDsave sell an MRI without contrast for $396 to $646. [src:nch-orlando] [src:mdsave-orl-wo]' },
    { q: 'How much is a full-body MRI in Orlando?', a: 'SimonMed lists whole-body MRI packages from $999 to $2,499, with introductory prices of $899 to $2,199, and Instalab sells its head, neck and spine package at SimonMed’s Orlando centers for $2,298. [src:simonmed-wbmri] [src:instalab-orlando-fullbody]' },
  ],
  sources: [
    { id: 'census-qf-orlando', title: 'QuickFacts: Orlando city, Florida', publisher: 'U.S. Census Bureau', url: 'https://www.census.gov/quickfacts/fact/table/orlandocityflorida/PST045225', date: '2026' },
    { id: 'mdsave-orl-wo', title: 'MRI without Contrast in the Orlando Region', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-without-contrast/d781f5c9/florida/orlando-fl', date: '2026' },
    { id: 'mdsave-orl-w', title: 'MRI with Contrast in the Orlando Region', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-contrast/d781f5c8/florida/orlando-fl', date: '2026' },
    { id: 'mdsave-orl-wwo', title: 'MRI with and without Contrast in the Orlando Region', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-and-without-contrast/d781f5cb/florida/orlando-fl', date: '2026' },
    { id: 'mdsave-standup-orlando', title: 'MRI without Contrast: Stand Up MRI of Orlando', publisher: 'MDsave', url: 'https://www.mdsave.com/p/stand-up-mri-of-orlando-imaging-and-radiology/mri-without-contrast/d485f9ce64dd', date: '2026' },
    { id: 'nch-orlando', title: 'Orlando, FL MRI Cost Comparison', publisher: 'New Choice Health', url: 'https://www.newchoicehealth.com/places/florida/orlando/mri', date: '2026' },
    { id: 'simonmed-delaney-park', title: 'SimonMed: Delaney Park', publisher: 'SimonMed Imaging', url: 'https://simonmed.com/locations/fl/delaney-park/', date: '2026' },
    { id: 'simonmed-kaley', title: 'SimonMed: Kaley II', publisher: 'SimonMed Imaging', url: 'https://simonmed.com/locations/fl/kaley-ii/', date: '2026' },
    { id: 'simonmed-waterford', title: 'SimonMed: Waterford Lakes', publisher: 'SimonMed Imaging', url: 'https://simonmed.com/locations/fl/waterford-lakes/', date: '2026' },
    { id: 'akumin-orlando', title: 'Akumin Orlando', publisher: 'Akumin', url: 'https://akumin.com/locations/florida-central/orlando/', date: '2026' },
    { id: 'rayus-turkey-lake', title: 'RAYUS Radiology: Orlando, FL, Turkey Lake', publisher: 'RAYUS Radiology', url: 'https://rayusradiology.com/locations/rayus-orlando-fl-turkey-lake/', date: '2026' },
    { id: 'ormc-radiology', title: 'ORMC Radiology and Diagnostic Imaging', publisher: 'Orlando Health', url: 'https://www.orlandohealth.com/facilities/orlando-regional-medical-center/patient-care/radiology-and-diagnostic-imaging', date: '2026' },
    { id: 'simonmed-wbmri', title: 'Whole-body MRI: SimonMed Longevity', publisher: 'SimonMed Imaging', url: 'https://simonmed.com/whole-body-mri/', date: '2026' },
    { id: 'instalab-orlando-fullbody', title: 'Full-body MRI in Orlando, FL', publisher: 'Instalab', url: 'https://instalab.com/locations/fl/orlando/full-body-mri', date: '2026' },
  ],
};
