import type { CityMri } from '../types';

export const jacksonville: CityMri = {
  slug: 'jacksonville',
  city: 'Jacksonville',
  county: 'Duval County',
  nearby: [],
  updated: '2026-11-11',
  metaDescription:
    'MRI in Jacksonville, FL: published cash prices from $396, Baptist Health’s 3T and open MRI sites, Akumin and SimonMed centers, and hospital price gaps.',
  population: '949,611 residents (2020 Census) [src:census-jax]',

  answer:
    'An MRI in Jacksonville costs $396 to $621 without contrast at the imaging centers that publish bundled cash prices on MDsave, and $496 to $821 with and without contrast. [src:mdsave-jax-wo] [src:mdsave-jax-wwo] Akumin’s Northside and Riverside centers and Global Diagnostic Imaging Centers on Beach Boulevard list $396 without contrast, and SimonMed on Kennerly Road lists $478. [src:mdsave-jax-wo] Baptist Health runs 3T MRI at Baptist Jacksonville and Baptist South, and a high-field open MRI on Prudential Drive. [src:baptist-mri-locations]',
  takeaways: [
    'Bundled cash prices for an MRI without contrast in the Jacksonville region run $396 to $621 on MDsave; with and without contrast they run $496 to $821. [src:mdsave-jax-wo] [src:mdsave-jax-wwo]',
    'Across 35 Jacksonville providers, hospitals included, New Choice Health puts the median MRI at $978. [src:nch-jax-mri]',
    'Advanced Diagnostic Group on University Boulevard West lists an MRI with and without contrast at $646, including the radiologist’s read, against an estimated national average of $1,334. [src:mdsave-adg-jax-wwo]',
    'Baptist Health lists 11 MRI locations in the Jacksonville region, with 3T scanners at Baptist Jacksonville, Baptist South and Baptist MD Anderson Cancer Center. [src:baptist-mri-locations]',
    'Baptist’s Premier Open site, 1660 Prudential Drive, runs a Hitachi Oasis XP high-field open MRI. [src:baptist-mri-locations]',
  ],

  priceRange: '$396 to $621 without contrast; $496 to $821 with and without contrast [src:mdsave-jax-wo] [src:mdsave-jax-wwo]',
  priceSummary:
    'MRI prices in Jacksonville depend mostly on where the scan is done. Freestanding centers that sell bundled cash prices on MDsave charge $396 to $621 for an MRI without contrast, and their bundles include the facility fee and the radiologist’s interpretation. [src:mdsave-jax-wo] [src:mdsave-adg-jax-wwo] New Choice Health’s Jacksonville median, which takes in hospital prices across 35 providers, sits higher at $978. [src:nch-jax-mri] At the top of the market, Instalab lists a self-pay breast MRI at Mayo Clinic Florida at $6,195, a price that includes Instalab’s $99 fee. [src:instalab-mayo-florida]',
  prices: [
    { what: 'MRI without contrast, one body part, Jacksonville region', value: '$396 to $621 range', sourceId: 'mdsave-jax-wo' },
    { what: 'MRI with and without contrast, one body part, Jacksonville region', value: '$496 to $821 range', sourceId: 'mdsave-jax-wwo' },
    { what: 'MRI with and without contrast at Advanced Diagnostic Group, University Blvd W, including facility fee and radiologist’s read', value: '$646; estimated national average $1,334', sourceId: 'mdsave-adg-jax-wwo' },
    { what: 'MRI, median of 35 Jacksonville providers', value: '$978', sourceId: 'nch-jax-mri' },
    { what: 'Breast MRI without and with contrast at Mayo Clinic Florida, booked through Instalab', value: '$6,195, including Instalab’s $99 fee', sourceId: 'instalab-mayo-florida' },
  ],

  providersSummary:
    'Jacksonville’s MRI providers split between Baptist Health’s hospital-run sites, which publish their scanners but not prices, and independent centers that sell cash prices on MDsave. [src:baptist-mri-locations] [src:mdsave-jax-wo] Akumin runs 1.5T MRI at its Northside and Riverside centers; Advanced Diagnostic Group, SimonMed and Global Diagnostic Imaging Centers list prices but not their equipment. [src:akumin-northside] [src:akumin-riverside] [src:mdsave-adg-jax]',
  providers: [
    { name: 'MRI – Baptist Jacksonville', type: 'Hospital outpatient', location: '800 Prudential Dr, Jacksonville, FL 32207', features: '3T and 1.5T high-field MRI', sourceId: 'baptist-mri-locations' },
    { name: 'MRI – Premier Open (Baptist)', type: 'Hospital outpatient', location: '1660 Prudential Dr, Ste 102, Jacksonville, FL 32207', features: 'High-field open MRI (Hitachi Oasis XP)', sourceId: 'baptist-mri-locations' },
    { name: 'MRI – Baptist South', type: 'Hospital outpatient', location: '14550 Old St Augustine Rd, Jacksonville, FL 32258', features: '3T and 1.5T MRI', sourceId: 'baptist-mri-locations' },
    { name: 'Akumin Northside', type: 'Independent imaging center', location: '1215-4 Dunn Ave, Jacksonville, FL 32218', features: '1.5T high-field MRI', selfPayPrice: '$396 without contrast (MDsave)', sourceId: 'akumin-northside' },
    { name: 'Akumin Riverside', type: 'Independent imaging center', location: '4171 Roosevelt Blvd, Jacksonville, FL 32210', features: '1.5T high-field MRI', selfPayPrice: '$396 without contrast (MDsave)', sourceId: 'akumin-riverside' },
    { name: 'Advanced Diagnostic Group – Jacksonville', type: 'Independent imaging center', location: '4933 University Blvd W, Ste 1, Jacksonville, FL 32216', features: 'MRI; scanner type not stated', selfPayPrice: '$521 without contrast; $596 with contrast; $646 with and without contrast (MDsave)', sourceId: 'mdsave-adg-jax' },
    { name: 'SimonMed Imaging – Jacksonville', type: 'Independent imaging center', location: '6138 Kennerly Rd, Ste 100, Jacksonville, FL 32216', features: 'MRI; scanner type not stated', selfPayPrice: '$478 without contrast (MDsave)', sourceId: 'mdsave-jax-wo' },
    { name: 'Global Diagnostic Imaging Centers', type: 'Independent imaging center', location: '6349 Beach Blvd, Ste 2, Jacksonville, FL 32216', features: 'MRI; scanner type not stated', selfPayPrice: '$396 without contrast; $496 with and without contrast (MDsave)', sourceId: 'mdsave-jax-wwo' },
  ],

  hospitals: [
    { name: 'Baptist Medical Center Jacksonville (Baptist Health)', note: 'Baptist Health lists 11 MRI locations in the Jacksonville region, including 3T scanners at Baptist Jacksonville, Baptist South and Baptist MD Anderson Cancer Center, and an open MRI at 1660 Prudential Drive.', sourceId: 'baptist-mri-locations' },
    { name: 'Mayo Clinic Florida, Jacksonville', note: 'At 4500 San Pablo Road South; Instalab lists a self-pay breast MRI without and with contrast here at $6,195, including Instalab’s $99 fee.', sourceId: 'instalab-mayo-florida' },
    { name: 'HCA Florida Memorial Hospital, Jacksonville', note: 'Lists MRI among its imaging services, at 3625 University Blvd S.', sourceId: 'hca-memorial-imaging' },
  ],

  openMri:
    'For an open MRI in Jacksonville, Baptist Health’s Premier Open site at 1660 Prudential Drive, Suite 102, runs a Hitachi Oasis XP, a high-field open scanner. [src:baptist-mri-locations] None of the independent Jacksonville centers listed here states whether its scanner is open or wide-bore.',
  fullBody:
    'None of the Jacksonville imaging centers listed here advertises a full-body MRI, and we found no full-body MRI clinic that publishes a Jacksonville location. Instalab does list one targeted self-pay scan in Jacksonville: a breast MRI at Mayo Clinic Florida, at $6,195 including Instalab’s $99 fee. [src:instalab-mayo-florida]',

  quotes: [],
  faqs: [
    { q: 'How much does an MRI cost in Jacksonville without insurance?', a: 'Bundled cash prices in the Jacksonville region run $396 to $621 for an MRI without contrast and $496 to $821 with and without contrast. Akumin’s Northside and Riverside centers list $396 without contrast. [src:mdsave-jax-wo] [src:mdsave-jax-wwo]' },
    { q: 'Where can I get an open MRI in Jacksonville?', a: 'Baptist Health’s Premier Open site, 1660 Prudential Drive, Suite 102, runs a Hitachi Oasis XP high-field open MRI. [src:baptist-mri-locations]' },
    { q: 'Where can I get a 3T MRI in Jacksonville?', a: 'Baptist Health lists 3T MRI at Baptist Jacksonville, 800 Prudential Drive, at Baptist South, 14550 Old St Augustine Road, and at Baptist MD Anderson Cancer Center. [src:baptist-mri-locations]' },
    { q: 'Is an MRI in Jacksonville cheaper at an independent center?', a: 'Usually. Independent centers on MDsave sell an MRI without contrast for $396 to $621, while New Choice Health’s median across 35 Jacksonville providers, hospitals included, is $978. [src:mdsave-jax-wo] [src:nch-jax-mri]' },
    { q: 'Can I get a full-body MRI in Jacksonville?', a: 'We found no full-body MRI clinic that publishes a Jacksonville location. Instalab lists a self-pay breast MRI at Mayo Clinic Florida at $6,195, including its $99 fee. [src:instalab-mayo-florida]' },
  ],
  sources: [
    { id: 'census-jax', title: 'QuickFacts: Jacksonville city, Florida (Census, April 1, 2020)', publisher: 'U.S. Census Bureau', url: 'https://www.census.gov/quickfacts/jacksonvillecityflorida', date: '2020' },
    { id: 'mdsave-jax-wo', title: 'MRI without Contrast in the Jacksonville Region', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-without-contrast/d781f5c9/florida/jacksonville-fl', date: '2026' },
    { id: 'mdsave-jax-wwo', title: 'MRI with and without Contrast in the Jacksonville Region', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-and-without-contrast/d781f5cb/florida/jacksonville-fl', date: '2026' },
    { id: 'mdsave-adg-jax', title: 'Advanced Diagnostic Group – Jacksonville', publisher: 'MDsave', url: 'https://www.mdsave.com/p/advanced-diagnostic-group-jacksonville-imaging-and-radiology', date: '2026' },
    { id: 'mdsave-adg-jax-wwo', title: 'MRI with and without Contrast: Advanced Diagnostic Group – Jacksonville', publisher: 'MDsave', url: 'https://www.mdsave.com/p/advanced-diagnostic-group-jacksonville-imaging-and-radiology/mri-with-and-without-contrast/d583ffc564df', date: '2026' },
    { id: 'nch-jax-mri', title: 'Jacksonville, FL MRI Cost Comparison', publisher: 'New Choice Health', url: 'https://www.newchoicehealth.com/places/florida/jacksonville/mri', date: '2026' },
    { id: 'baptist-mri-locations', title: 'MRI Locations', publisher: 'Baptist Health', url: 'https://www.baptistjax.com/locations/mri', date: '2026' },
    { id: 'akumin-northside', title: 'Akumin Northside', publisher: 'Akumin', url: 'https://akumin.com/locations/florida-north/northside/', date: '2026' },
    { id: 'akumin-riverside', title: 'Riverside Imaging Center Jacksonville', publisher: 'Akumin', url: 'https://akumin.com/riverside', date: '2026' },
    { id: 'instalab-mayo-florida', title: 'Mayo Clinic Florida', publisher: 'Instalab', url: 'https://instalab.com/locations/fl/jacksonville/mayo-clinic-florida', date: '2026' },
    { id: 'hca-memorial-imaging', title: 'Imaging services: HCA Florida Memorial Hospital', publisher: 'HCA Florida Healthcare', url: 'https://www.hcafloridahealthcare.com/locations/memorial-hospital/specialties/imaging-services', date: '2026' },
  ],
};
