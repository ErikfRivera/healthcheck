import type { CityMri } from '../types';

export const fortMyers: CityMri = {
  slug: 'fort-myers',
  city: 'Fort Myers',
  county: 'Lee County',
  nearby: ['Cape Coral'],
  updated: '2026-11-11',
  metaDescription:
    'MRI in Fort Myers and Cape Coral, FL: published cash prices from $396, 3T wide-bore and upright MRI centers, Lee Health hospital prices, and referral rules.',
  population: '101,581 residents; Cape Coral 236,264 (2025 Census estimates) [src:citypop-fort-myers] [src:citypop-cape-coral]',

  answer:
    'An MRI in Fort Myers costs $396 to $823 without contrast at the imaging centers that publish bundled cash prices on MDsave, with a regional average of $512. [src:mdsave-fm-no-contrast] Carefirst Imaging on Royal Gulf Circle lists an MRI without contrast at $421, including the radiologist’s read. [src:mdsave-carefirst-fm-no-contrast] Radiology Regional runs 3T wide-bore MRI at four sites in Fort Myers and Cape Coral, and Lee Health’s hospitals charge well over $1,000 for a brain MRI. [src:radnet-rr-locations] [src:nch-fm-brain]',
  takeaways: [
    'Bundled cash prices for an MRI without contrast near Fort Myers run $396 to $823 on MDsave, averaging $512; with contrast they run $371 to $1,274, averaging $600. [src:mdsave-fm-no-contrast] [src:mdsave-fm-with-contrast]',
    'Across 12 Fort Myers-area providers, hospitals included, New Choice Health puts the median MRI at $985 and the median brain MRI at $1,051. [src:nch-fm-mri] [src:nch-fm-brain]',
    'Lee Memorial Hospital lists a brain MRI at $1,300 to $2,850 and Cape Coral Hospital at $1,600 to $3,500, against $421 for an MRI without contrast at Carefirst Imaging. [src:nch-fm-brain] [src:mdsave-carefirst-fm-no-contrast]',
    'Radiology Regional offers 3T wide-bore MRI at its 6100 Winkler Road and Hope Preserve sites in Fort Myers and at two Del Prado Boulevard sites in Cape Coral. [src:radnet-rr-locations]',
    'Carefirst Imaging’s Fort Myers center offers upright MRI, an option for people who cannot lie flat or find a closed scanner too confining. [src:carefirst-home]',
  ],

  priceRange: '$396 to $823 without contrast; $371 to $1,274 with contrast [src:mdsave-fm-no-contrast]',
  priceSummary:
    'MRI prices in Fort Myers split cleanly by setting. Freestanding centers that sell bundled cash prices on MDsave charge $396 to $823 for an MRI without contrast, and those bundles include the radiologist’s interpretation fee. [src:mdsave-fm-no-contrast] New Choice Health’s Fort Myers medians, which take in hospital prices, sit higher: $985 for an MRI and $1,051 for a brain MRI. [src:nch-fm-mri] [src:nch-fm-brain] MDsave’s search around Fort Myers also draws in some providers elsewhere in Florida, so treat its range as regional.',
  prices: [
    { what: 'MRI without contrast, one body part, centers near Fort Myers', value: '$512 average; $396 to $823 range', sourceId: 'mdsave-fm-no-contrast' },
    { what: 'MRI with contrast, one body part, centers near Fort Myers', value: '$600 average; $371 to $1,274 range', sourceId: 'mdsave-fm-with-contrast' },
    { what: 'MRI without contrast at Carefirst Imaging, Royal Gulf Circle, including the radiologist’s read', value: '$421', sourceId: 'mdsave-carefirst-fm-no-contrast' },
    { what: 'MRI, median of 12 Fort Myers-area providers', value: '$985', sourceId: 'nch-fm-mri' },
    { what: 'Brain MRI, median of Fort Myers-area providers', value: '$1,051', sourceId: 'nch-fm-brain' },
  ],

  providersSummary:
    'Fort Myers and Cape Coral have three outpatient MRI operators that publish their equipment: Radiology Regional, part of RadNet, with 3T wide-bore scanners at four sites; Carefirst Imaging, with upright MRI in Fort Myers and high-field MRI in Cape Coral; and Millennium Physician Group’s radiology center on Metro Parkway. [src:radnet-rr-locations] [src:carefirst-home] [src:millennium-metro] Only Carefirst publishes a self-pay price.',
  providers: [
    { name: 'Radiology Regional, 6100 Winkler', type: 'Independent imaging center', location: '6100 Winkler Rd, Fort Myers, FL 33919', features: '3T wide-bore and 1.5T MRI; prostate MRI', sourceId: 'radnet-rr-6100-winkler' },
    { name: 'Radiology Regional, Hope Preserve', type: 'Independent imaging center', location: '14551 Hope Center Loop, Fort Myers, FL 33912', features: '3T wide-bore MRI; prostate MRI', sourceId: 'radnet-rr-locations' },
    { name: 'Carefirst Imaging, Fort Myers', type: 'Independent imaging center', location: '4984 Royal Gulf Circle, Fort Myers, FL 33966', features: 'Upright MRI', selfPayPrice: '$421 without contrast; $461 with contrast (MDsave)', sourceId: 'carefirst-home' },
    { name: 'Millennium Physician Group Radiology, Metro', type: 'Physician-group imaging center', location: '13813 Metro Pkwy, Fort Myers, FL 33912', features: 'MRI, CT, CT calcium scoring; scanner type not stated', sourceId: 'millennium-metro' },
    { name: 'Radiology Regional, Del Prado', type: 'Independent imaging center', location: '805 Del Prado Blvd S, Cape Coral, FL 33990', features: '3T wide-bore and 1.5T MRI', sourceId: 'radnet-rr-locations' },
    { name: 'Radiology Regional, Coralwood', type: 'Independent imaging center', location: '2301 Del Prado Blvd S, Ste 420, Cape Coral, FL 33990', features: '3T wide-bore MRI; prostate MRI', sourceId: 'radnet-rr-coralwood' },
    { name: 'Carefirst Imaging, Cape Coral', type: 'Independent imaging center', location: '1203 SE 8th Ave, Cape Coral, FL 33990', features: 'High-field MRI', selfPayPrice: '$421 without contrast; $461 with contrast (MDsave)', sourceId: 'carefirst-home' },
  ],

  hospitals: [
    { name: 'Lee Memorial Hospital (Lee Health), Fort Myers', note: 'Performs brain MRI, with a listed price range of $1,300 to $2,850.', sourceId: 'nch-fm-brain' },
    { name: 'Cape Coral Hospital (Lee Health), Cape Coral', note: 'Performs brain MRI, with a listed price range of $1,600 to $3,500.', sourceId: 'nch-fm-brain' },
    { name: 'HCA Florida Lehigh Hospital, Lehigh Acres', note: 'Lists MRI among its outpatient radiology services, at 1500 Lee Blvd, east of Fort Myers.', sourceId: 'hca-lehigh-imaging' },
  ],

  openMri:
    'For an MRI in Fort Myers without a closed tunnel, Carefirst Imaging’s Royal Gulf Circle center offers upright MRI, in which you sit or stand inside an open magnet; the company describes its scanners as “High-Field MRI and Upright Open MRI”. [src:carefirst-home] For a closed scanner with more room, Radiology Regional’s 3T scanners at 6100 Winkler Road, Hope Preserve and both Cape Coral sites are wide-bore. [src:radnet-rr-locations]',
  fullBody:
    'None of the Fort Myers or Cape Coral imaging centers listed here offers a full-body MRI, and no full-body MRI clinic publishes a location in either city; the nearest we found is SimonMed’s Sarasota Springs center, covered on the Sarasota page. Radiology Regional’s Fort Myers sites do list prostate MRI, a targeted scan. [src:radnet-rr-6100-winkler]',

  quotes: [],
  faqs: [
    { q: 'How much does an MRI cost in Fort Myers without insurance?', a: 'Bundled cash prices near Fort Myers run $396 to $823 for an MRI without contrast, averaging $512, and $371 to $1,274 with contrast. Carefirst Imaging lists $421 without contrast, including the radiologist’s read. [src:mdsave-fm-no-contrast] [src:mdsave-carefirst-fm-no-contrast]' },
    { q: 'Where can I get an open or upright MRI in Fort Myers?', a: 'Carefirst Imaging, 4984 Royal Gulf Circle, offers upright MRI. Radiology Regional’s 3T scanners in Fort Myers and Cape Coral are wide-bore, a closed design with a larger opening. [src:carefirst-home] [src:radnet-rr-locations]' },
    { q: 'Is a hospital MRI in Fort Myers more expensive?', a: 'Yes, by a wide margin. Lee Memorial Hospital lists a brain MRI at $1,300 to $2,850 and Cape Coral Hospital at $1,600 to $3,500, while freestanding centers sell an MRI without contrast for $396 to $823. [src:nch-fm-brain] [src:mdsave-fm-no-contrast]' },
    { q: 'Where can I get a 3T MRI in Fort Myers or Cape Coral?', a: 'Radiology Regional has 3T wide-bore MRI at 6100 Winkler Road and Hope Preserve in Fort Myers and at 805 and 2301 Del Prado Boulevard in Cape Coral. [src:radnet-rr-locations]' },
    { q: 'Can I get a full-body MRI in Fort Myers?', a: 'No full-body MRI clinic publishes a Fort Myers or Cape Coral location. The nearest listed is SimonMed in Sarasota. Radiology Regional’s Fort Myers sites offer prostate MRI. [src:radnet-rr-6100-winkler]' },
  ],
  sources: [
    { id: 'citypop-fort-myers', title: 'Fort Myers (City, USA): Population Statistics', publisher: 'City Population, from U.S. Census Bureau estimates', url: 'https://www.citypopulation.de/en/usa/florida/lee/1224125__fort_myers', date: '2025' },
    { id: 'citypop-cape-coral', title: 'Cape Coral (City, USA): Population Statistics', publisher: 'City Population, from U.S. Census Bureau estimates', url: 'https://www.citypopulation.de/en/usa/florida/lee/1210275__cape_coral', date: '2025' },
    { id: 'mdsave-fm-no-contrast', title: 'MRI without Contrast near Fort Myers, FL', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-without-contrast/d781f5c9/florida/cape-coral-fl/33994', date: '2026' },
    { id: 'mdsave-fm-with-contrast', title: 'MRI with Contrast near Fort Myers, FL', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-contrast/d781f5c8/florida/cape-coral-fl/33966', date: '2026' },
    { id: 'mdsave-carefirst-fm-no-contrast', title: 'MRI without Contrast: Carefirst Imaging, 4984 Royal Gulf Cir, Fort Myers', publisher: 'MDsave', url: 'https://www.mdsave.com/p/carefirst-imaging-imaging-and-radiology-9/mri-without-contrast/d585fbc562d8', date: '2026' },
    { id: 'nch-fm-mri', title: 'Fort Myers, FL MRI Cost Average', publisher: 'New Choice Health', url: 'https://www.newchoicehealth.com/places/florida/fort-myers/mri', date: '2026' },
    { id: 'nch-fm-brain', title: 'Fort Myers, FL Brain MRI Cost Comparison', publisher: 'New Choice Health', url: 'https://www.newchoicehealth.com/places/florida/fort-myers/mri/brain-mri', date: '2026' },
    { id: 'radnet-rr-6100-winkler', title: 'Radiology Regional: Fort Myers (6100 Winkler) Imaging Center', publisher: 'Radiology Regional (RadNet)', url: 'https://www.radnet.com/radiology-regional/locations/rr-fort-myers-6100-winkler/', date: '2026' },
    { id: 'radnet-rr-locations', title: 'Radiology Regional Locations in Southwest Florida', publisher: 'Radiology Regional (RadNet)', url: 'https://www.radnet.com/radiology-regional/locations', date: '2026' },
    { id: 'radnet-rr-coralwood', title: 'Radiology Regional: Cape Coral (Coralwood) Imaging Center', publisher: 'Radiology Regional (RadNet)', url: 'https://www.radnet.com/radiology-regional/locations/rr-cape-coral-coralwood/', date: '2026' },
    { id: 'carefirst-home', title: 'Carefirst Imaging', publisher: 'Carefirst Imaging', url: 'https://carefirstimaging.com', date: '2026' },
    { id: 'millennium-metro', title: 'Fort Myers Imaging Metro', publisher: 'Millennium Physician Group', url: 'https://millenniumphysician.com/location/fort-myers-imaging-metro/', date: '2026' },
    { id: 'hca-lehigh-imaging', title: 'Imaging services: HCA Florida Lehigh Hospital', publisher: 'HCA Florida Healthcare', url: 'https://www.hcafloridahealthcare.com/locations/lehigh-hospital/specialties/imaging-services', date: '2026' },
  ],
};
