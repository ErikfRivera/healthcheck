import type { CityMri } from '../types';

export const bocaRaton: CityMri = {
  slug: 'boca-raton',
  city: 'Boca Raton',
  county: 'Palm Beach County',
  nearby: [],
  updated: '2026-11-11',
  metaDescription:
    'MRI in Boca Raton, FL: bundled cash prices from $346, Stand Up MRI’s published prices, Baptist Health’s 3T MRI on Meadows Road, and hospital price ranges.',
  population: '101,582 residents (2025 Census estimate) [src:census-2025]',

  answer:
    'An MRI near Boca Raton costs $346 to $622 without contrast at the centers that sell bundled cash prices on MDsave, though the cheapest of them are elsewhere in South Florida. [src:mdsave-boca-wo] In Boca Raton itself, Stand Up MRI of Boca Raton on Kimberly Boulevard lists $621 without contrast. [src:mdsave-standup-boca] Baptist Health runs three MRI sites in the city, including a 3T MRI at the Lynn Women’s Health and Wellness Institute on Meadows Road, and West Boca Medical Center lists a brain MRI at $1,500 to $3,300. [src:baptist-lynn-womens] [src:nch-boca-brain]',
  takeaways: [
    'Bundled cash prices on MDsave near Boca Raton run $346 to $622 for an MRI without contrast and $406 to $976 with and without contrast. [src:mdsave-boca-wo] [src:mdsave-boca-wwo]',
    'Stand Up MRI of Boca Raton, 9080 Kimberly Blvd, lists $621 without contrast, $646 with contrast and $796 with and without contrast on MDsave. [src:mdsave-standup-boca]',
    'The Lynn Women’s Health and Wellness Institute, 690 Meadows Rd. in Boca Raton, offers 3T MRI alongside low-dose CT, ultrasound and bone densitometry. [src:baptist-lynn-womens]',
    'New Choice Health lists a brain MRI at West Boca Medical Center at $1,500 to $3,300, against a South Florida median of $1,091. [src:nch-boca-brain]',
    'Prenuvo lists a Boca Raton full-body MRI site at 201 Plaza Real as “Coming soon”; Ezra’s nearest sites are in Boynton Beach. [src:prenuvo-boca] [src:ezra-florida-south]',
  ],

  priceRange: '$346 to $622 without contrast; $406 to $976 with and without contrast [src:mdsave-boca-wo] [src:mdsave-boca-wwo]',
  priceSummary:
    'MRI prices around Boca Raton depend on where the scan is done. MDsave’s search near Boca Raton returns bundled cash prices of $346 to $622 for an MRI without contrast and $406 to $976 with and without contrast, but the cheapest listed centers are elsewhere in South Florida, and the range shifts with the ZIP code searched. [src:mdsave-boca-wo] [src:mdsave-boca-wwo] The one Boca Raton center with an MDsave price, Stand Up MRI of Boca Raton, sits near the top of that range at $621 without contrast. [src:mdsave-standup-boca] New Choice Health’s $1,091 brain MRI median, drawn from 144 providers, appears unchanged on its Miami and Fort Lauderdale pages, so read it as a South Florida figure, not a Boca Raton one. [src:nch-boca-brain]',
  prices: [
    { what: 'MRI without contrast, one body part, centers near Boca Raton', value: '$346 to $622 range', sourceId: 'mdsave-boca-wo' },
    { what: 'MRI with and without contrast, one body part, centers near Boca Raton', value: '$406 to $976 range', sourceId: 'mdsave-boca-wwo' },
    { what: 'MRI at Stand Up MRI of Boca Raton, 9080 Kimberly Blvd', value: '$621 without contrast; $646 with contrast; $796 with and without contrast', sourceId: 'mdsave-standup-boca' },
    { what: 'Brain MRI, South Florida median across 144 providers, hospitals included', value: '$1,091', sourceId: 'nch-boca-brain' },
  ],

  providersSummary:
    'Three of the Boca Raton MRI sites listed here belong to Baptist Health South Florida, which runs Boca Raton Regional Hospital. It lists MRI at its Boca Raton North center on Clint Moore Road, at the Sandler Pavilion on NW 13 Street and, with a 3T scanner, at the Lynn Women’s Health and Wellness Institute. [src:baptist-boca-clinic] [src:baptist-sandler] [src:baptist-lynn-womens] Among independent Boca Raton centers, only Stand Up MRI of Boca Raton publishes a self-pay price; University MRI on FAU Boulevard lists none. [src:mdsave-standup-boca] [src:mdsave-university-mri-boca]',
  providers: [
    { name: 'Baptist Health Diagnostic Imaging, Boca Raton North (Boca Clinic Imaging)', type: 'Hospital outpatient', location: '1601 Clint Moore Rd., Ste. 140, Boca Raton, FL 33487', features: 'MRI, CT, 3D mammography; scanner type not stated', sourceId: 'baptist-boca-clinic' },
    { name: 'Lynn Women’s Health and Wellness Institute (Boca Raton Regional Hospital)', type: 'Hospital outpatient', location: '690 Meadows Rd., Boca Raton, FL 33486', features: '3T MRI; low-dose CT', sourceId: 'baptist-lynn-womens' },
    { name: 'Baptist Health Diagnostic Imaging, Boca Raton (Sandler Pavilion)', type: 'Hospital outpatient', location: '701 NW 13 St., Boca Raton, FL 33486', features: 'MRI, CT, PET/CT; scanner type not stated', sourceId: 'baptist-sandler' },
    { name: 'Stand Up MRI of Boca Raton', type: 'Independent imaging center', location: '9080 Kimberly Blvd, Ste 14, Boca Raton, FL 33434', features: 'MRI; scanner type not stated', selfPayPrice: '$621 without contrast; $646 with contrast; $796 with and without (MDsave)', sourceId: 'mdsave-standup-boca' },
    { name: 'University MRI, Boca Raton', type: 'Independent imaging center', location: '3848 FAU Blvd, Ste 200, Boca Raton, FL 33431', features: 'MRI; scanner type not stated', sourceId: 'mdsave-university-mri-boca' },
    { name: 'Premier Medical Imaging', type: 'Independent imaging center', location: 'Boca Raton', features: 'MRI; scanner type not stated', sourceId: 'nch-boca-brain' },
  ],

  hospitals: [
    { name: 'Boca Raton Regional Hospital (Baptist Health South Florida), Boca Raton', note: 'At 800 Meadows Rd., the hospital lists advanced diagnostic imaging among its services; its 3T MRI is at the Lynn Women’s Health and Wellness Institute, 690 Meadows Rd. [src:baptist-lynn-womens]', sourceId: 'baptist-boca-regional' },
    { name: 'West Boca Medical Center, West Boca Raton', note: 'In unincorporated West Boca Raton, outside the city limits; performs brain MRI, with a listed price range of $1,500 to $3,300.', sourceId: 'nch-boca-brain' },
    { name: 'Boca Raton Regional Hospital Outpatient Center, Deerfield Beach', note: 'Baptist Health offers MRI, CT and 3D mammography at 3313 West Hillsboro Blvd., Suite 101, in Deerfield Beach, just south of Boca Raton.', sourceId: 'baptist-deerfield' },
  ],

  fullBody:
    'None of the Boca Raton centers listed here offers a full-body MRI, and we found no full-body MRI clinic open in the city. Prenuvo lists a Boca Raton site at 201 Plaza Real, Suite 1202, as “Coming soon”, with no price. [src:prenuvo-boca] Ezra, part of Function Health, has no Boca Raton site; its nearest are in Boynton Beach, at 1425 E Gateway Blvd and 6080 Boynton Beach Blvd, and it lists its Annual MRI at $999, or $899 with a Function membership, and its MRI with Spine at $1,699. [src:ezra-florida-south] [src:ezra-pricing]',

  quotes: [],
  faqs: [
    { q: 'How much does an MRI cost in Boca Raton without insurance?', a: 'Bundled cash prices near Boca Raton run $346 to $622 for an MRI without contrast and $406 to $976 with and without contrast. Inside the city, Stand Up MRI of Boca Raton lists $621 without contrast. [src:mdsave-boca-wo] [src:mdsave-boca-wwo] [src:mdsave-standup-boca]' },
    { q: 'Is a hospital MRI in Boca Raton more expensive?', a: 'Often. New Choice Health lists a brain MRI at West Boca Medical Center at $1,500 to $3,300, while MDsave’s bundled prices near Boca Raton run $346 to $622 without contrast. [src:nch-boca-brain] [src:mdsave-boca-wo]' },
    { q: 'Where can I get a 3T MRI in Boca Raton?', a: 'Baptist Health lists 3T MRI at the Lynn Women’s Health and Wellness Institute, 690 Meadows Rd., on the Boca Raton Regional Hospital campus. [src:baptist-lynn-womens]' },
    { q: 'Is there a stand-up MRI in Boca Raton?', a: 'Stand Up MRI of Boca Raton, 9080 Kimberly Blvd, lists MRI from $621 without contrast, but its listing does not describe its scanner, so ask the center which machine it uses. [src:mdsave-standup-boca]' },
    { q: 'Can I get a full-body MRI in Boca Raton?', a: 'Not at an open site we found. Prenuvo lists 201 Plaza Real as “Coming soon”, and Ezra’s nearest sites are in Boynton Beach, from $999. [src:prenuvo-boca] [src:ezra-florida-south] [src:ezra-pricing]' },
  ],
  sources: [
    { id: 'census-2025', title: 'Vintage 2025 Population Estimates: Florida cities and towns totals (sub-est2025_12.csv)', publisher: 'U.S. Census Bureau', url: 'https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025_12.csv', date: '2026-05-14' },
    { id: 'mdsave-boca-wo', title: 'MRI without Contrast Cost in Boca Raton, Florida', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-without-contrast/d781f5c9/florida/miami-fl/33432', date: '2026' },
    { id: 'mdsave-boca-wwo', title: 'MRI with and without Contrast Cost in Boca Raton, Florida', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/mri-with-and-without-contrast/d781f5cb/florida/miami-fl/33432', date: '2026' },
    { id: 'mdsave-standup-boca', title: 'Stand Up MRI Of Boca Raton Pa in Boca Raton, FL: Pre-pay and Save', publisher: 'MDsave', url: 'https://www.mdsave.com/p/stand-up-mri-of-boca-raton-pa-imaging-and-radiology', date: '2026' },
    { id: 'mdsave-university-mri-boca', title: 'University MRI - Boca Raton in Boca Raton, FL: Pre-pay and Save', publisher: 'MDsave', url: 'https://www.mdsave.com/p/university-mri-boca-raton-imaging-and-radiology', date: '2026' },
    { id: 'nch-boca-brain', title: 'Boca Raton, FL Brain MRI Cost Comparison', publisher: 'New Choice Health', url: 'https://www.newchoicehealth.com/places/florida/boca-raton/mri/brain-mri', date: '2026' },
    { id: 'baptist-boca-clinic', title: 'Diagnostic Imaging: Boca Raton North (Boca Clinic Imaging)', publisher: 'Baptist Health South Florida', url: 'https://baptisthealth.net/locations/diagnostic-imaging/boca-clinic', date: '2026' },
    { id: 'baptist-lynn-womens', title: 'Lynn Women’s Health and Wellness Institute', publisher: 'Baptist Health South Florida', url: 'https://baptisthealth.net/locations/diagnostic-imaging/boca-regional-imaging-lynn-womens-health-and-wellness-institute', date: '2026' },
    { id: 'baptist-sandler', title: 'Diagnostic Imaging: Boca Raton (Sandler Pavilion)', publisher: 'Baptist Health South Florida', url: 'https://baptisthealth.net/locations/diagnostic-imaging/boca-raton-sandler-pavillion-diagnostic-imaging', date: '2026' },
    { id: 'baptist-boca-regional', title: 'Boca Raton Regional Hospital', publisher: 'Baptist Health South Florida', url: 'https://baptisthealth.net/locations/hospitals/boca-raton-regional-hospital', date: '2026' },
    { id: 'baptist-deerfield', title: 'Diagnostic Imaging: Deerfield Beach (Hillsboro)', publisher: 'Baptist Health South Florida', url: 'https://baptisthealth.net/locations/diagnostic-imaging/deerfield-beach-outpatient-center', date: '2026' },
    { id: 'prenuvo-boca', title: 'Boca Raton, FL', publisher: 'Prenuvo', url: 'https://www.prenuvo.com/locations/boca-raton', date: '2026' },
    { id: 'ezra-florida-south', title: 'MRI Scans in Florida (South)', publisher: 'Ezra (Function Health)', url: 'https://ezra.com/locations/florida-south', date: '2026' },
    { id: 'ezra-pricing', title: 'Pricing: MRI Screening Service by Function', publisher: 'Ezra (Function Health)', url: 'https://ezra.com/pricing', date: '2026' },
  ],
};
