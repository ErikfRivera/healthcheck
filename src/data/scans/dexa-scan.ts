import type { Scan } from './types';

export const dexaScan: Scan = {
  num: '07',
  slug: 'dexa-scan',
  title: 'DEXA scan',
  noun: 'a DEXA scan',
  aka: [
    'DXA scan',
    'bone density test',
    'bone densitometry',
    'dual-energy X-ray absorptiometry',
    'body composition scan',
  ],
  modality: 'X-ray',
  price: 'From $99 · 20 minutes',
  avg: '$225',
  copy: 'Measures bone mineral density at the hip and spine to diagnose osteoporosis, and can measure body fat and lean mass. The lowest-dose X-ray test in medicine.',
  metaDescription:
    'DEXA scan: what it measures, who the USPSTF says to screen, T-score and Z-score thresholds, radiation dose, body composition accuracy and cost.',
  updated: '2026-11-06',

  answer:
    'A DEXA scan (dual-energy X-ray absorptiometry, also written DXA) is a low-dose X-ray test that measures bone mineral density, usually at the lower spine and hip, and is the reference standard for diagnosing osteoporosis. The same machine can also measure whole-body fat mass, lean mass and bone. A central scan takes 10 to 30 minutes and delivers less radiation than a day of natural background exposure.',
  takeaways: [
    'The U.S. Preventive Services Task Force recommends bone density screening for all women 65 and older and for younger postmenopausal women at increased fracture risk (both Grade B). Evidence for men is rated insufficient. [src:uspstf]',
    'Results are reported as a T-score. Minus 1.0 or higher is normal, between minus 1.0 and minus 2.5 is low bone mass (osteopenia), and minus 2.5 or lower is osteoporosis. [src:bhof]',
    'Radiation is about 0.001 millisieverts for a spine-and-hip scan, roughly one hundredth of a chest X-ray. [src:hps]',
    'For body composition, DEXA agrees with the four-compartment reference method within about 2 percentage points of body fat on average, but it underestimates fat in lean people and shifts with hydration and glycogen. [src:vanderploeg2003]',
    'Osteoporosis affects an estimated 12.6% of U.S. adults 50 and older, and 27.1% of women 65 and older. [src:uspstf]',
    'Stop calcium supplements 24 hours before the scan, and wait after any barium or contrast study. [src:radiologyinfo]',
  ],

  facts: {
    duration: '10 to 30 minutes for a spine-and-hip scan; about 7 to 12 minutes for body composition [src:radiologyinfo]',
    radiation: 'Very low: 0.001 mSv (spine and hip) to 0.003 mSv (whole body) [src:hps]',
    contrast: 'None',
    prep: 'No calcium supplements for 24 hours; no metal on clothing [src:radiologyinfo]',
    results: 'Radiologist report with T-score and Z-score, typically within a few days [src:radiologyinfo]',
    bestFor: 'Women 65+, postmenopausal women under 65 at increased risk (USPSTF Grade B); men 70+ (ISCD) [src:uspstf]',
  },

  detects: [
    {
      item: 'Osteoporosis and low bone mass',
      note: 'Bone mineral density at the lumbar spine, total hip and femoral neck, reported as a T-score against the World Health Organization reference standard. [src:iscd]',
    },
    {
      item: 'Fracture risk',
      note: 'Across 11 prospective cohorts, each one-standard-deviation drop in bone density raised fracture risk 1.5-fold, and hip bone density predicted hip fracture with a relative risk of 2.6. [src:marshall1996]',
    },
    {
      item: 'Response to osteoporosis treatment',
      note: 'Repeat scans, usually every two years on the same machine, show whether density is holding or falling. Medicare covers a bone mass measurement every 24 months for eligible people. [src:medicare]',
    },
    {
      item: 'Vertebral fractures',
      note: 'A low-dose lateral spine image called vertebral fracture assessment can be added on the same table for older patients with height loss of more than an inch, unexplained back pain or borderline readings. [src:radiologyinfo]',
    },
    {
      item: 'Body composition',
      note: 'Whole-body scans report percent body fat, fat mass, lean mass and bone mineral content by region, with visceral fat and appendicular lean mass available on newer software. [src:kelly2009]',
    },
  ],

  limits: [
    'A DEXA scan measures relative risk, not destiny. Bone density "cannot identify who will fracture", and the landmark 1996 meta-analysis found its predictive power comparable to blood pressure for stroke. [src:marshall1996]',
    'Spine readings are distorted by osteoarthritis, prior spinal surgery, compression fractures and spinal deformity, which can make density look falsely high; CT is sometimes more useful in those cases. [src:radiologyinfo]',
    'A DEXA scan says nothing about bone quality or microarchitecture, only quantity of mineral. [src:ros]',
    'Peripheral heel, wrist and finger devices are less sensitive and less standardized than central spine-and-hip DEXA and are not suitable for monitoring treatment. [src:radiologyinfo]',
    'Scans from different machines cannot be compared directly, so follow-up scans should be done on the same equipment at the same facility. [src:radiologyinfo]',
    'Body-composition readings move with water and glycogen. Drinking water equal to 1.5% of body mass two hours before a scan raised measured lean mass by about 0.8 kg, and glycogen loading raised it 2.0% in trained cyclists. [src:viken2025]',
  ],

  guidelines: [
    {
      body: 'U.S. Preventive Services Task Force',
      year: '2025',
      position: 'Screen all women 65 and older for osteoporosis with central DXA, with or without a fracture risk assessment.',
      grade: 'Grade B',
      sourceId: 'uspstf',
    },
    {
      body: 'U.S. Preventive Services Task Force',
      year: '2025',
      position: 'Screen postmenopausal women younger than 65 who are at increased risk for an osteoporotic fracture as estimated by clinical risk assessment.',
      grade: 'Grade B',
      sourceId: 'uspstf',
    },
    {
      body: 'U.S. Preventive Services Task Force',
      year: '2025',
      position: 'Evidence is insufficient to assess the balance of benefits and harms of screening men. This is not a recommendation against screening.',
      grade: 'Grade I',
      sourceId: 'uspstf',
    },
    {
      body: 'International Society for Clinical Densitometry',
      year: '2023',
      position: 'Test women 65 and older, men 70 and older, and younger postmenopausal women or men under 70 with a risk factor such as low body weight, prior fracture, high-risk medication or a disease associated with bone loss. Measure both the PA spine and hip.',
      sourceId: 'iscd',
    },
    {
      body: 'Bone Health & Osteoporosis Foundation',
      year: '2022',
      position: 'Test women 65 and older, men 70 and older, anyone who has broken a bone after 50, and women 50 to 64 or men 50 to 69 with risk factors such as a parent with a hip fracture, smoking, heavy alcohol use or prednisone.',
      sourceId: 'bhof',
    },
    {
      body: 'Medicare Part B',
      year: '2026',
      position: 'Covers one bone mass measurement every 24 months, or more often if medically necessary, for people who meet a qualifying condition such as estrogen deficiency with osteoporosis risk or long-term steroid treatment. No cost if the provider accepts assignment.',
      sourceId: 'medicare',
    },
  ],
  whoForSummary:
    'A DEXA scan is guideline-recommended for women 65 and older and for postmenopausal women under 65 whose clinical risk is elevated; both carry a Grade B from the U.S. Preventive Services Task Force, which found that screening prevents about 5 hip fractures and 6 major osteoporotic fractures per 1,000 people screened over roughly four to five years. [src:uspstf] Specialty bodies extend testing to men 70 and older and to anyone who has broken a bone after age 50. [src:bhof] No guideline body recommends body-composition DEXA as a screening test for the general public; it is an elective measurement.',
  notFor: [
    'People who are or might be pregnant. A DEXA scan uses X-rays, and Cleveland Clinic states plainly that you should not have a bone density test if you are pregnant. [src:cleveland]',
    'Anyone who has had a barium exam, or a contrast injection for CT or a nuclear medicine scan, in the past one to two weeks. RadiologyInfo advises waiting 10 to 14 days; other sources quote shorter waits, so follow the imaging center’s instruction. [src:radiologyinfo]',
    'People above the scanner table’s weight limit, for whom the International Society for Clinical Densitometry recommends measuring the forearm instead. [src:iscd]',
    'Men under 50 and premenopausal women cannot be diagnosed with osteoporosis on bone density alone; their results are reported as a Z-score compared with people of the same age. [src:iscd]',
  ],
  radiation:
    'A DEXA scan uses the lowest radiation dose of any X-ray examination in routine use. The Health Physics Society puts the effective dose at 0.001 millisieverts for a lumbar spine and hip scan and 0.003 millisieverts for a whole-body scan, against 0.1 millisieverts for a chest X-ray and roughly 3 millisieverts a year of natural background radiation in the United States. [src:hps] The International Society for Clinical Densitometry’s radiation safety paper puts a routine spine-plus-hip exam under 10 microsieverts, which is about one day of U.S. background exposure. [src:iscd-radiation] No contrast agent is used.',
  procedure: [
    'You complete a short questionnaire about fractures, medications and conditions that affect bone, then remove anything metal such as belts, zippers, jewelry and eyeglasses. [src:radiologyinfo]',
    'You lie on your back on a padded table. For the spine scan your legs rest on a padded box to flatten the lower back; for the hip scan your foot sits in a brace that rotates the hip inward. [src:radiologyinfo]',
    'A detector arm passes slowly over the area while the X-ray source below the table emits two low-energy beams. You hold still and may be asked to hold your breath for a few seconds. [src:radiologyinfo]',
    'A spine-and-hip scan takes 10 to 30 minutes; a body-composition scan of the whole body takes about 7 to 12 minutes. [src:cleveland]',
    'A radiologist interprets the scan and sends a signed report with your T-score, Z-score and, where relevant, body-composition values, usually within a few days. [src:radiologyinfo]',
  ],
  prep: [
    'Eat normally on the day of the scan, but do not take calcium supplements for at least 24 hours beforehand. [src:radiologyinfo]',
    'Wear loose, comfortable clothing without metal zippers, buttons or belts; you may be asked to change into a gown. [src:radiologyinfo]',
    'Tell the center if you have had a barium study or a contrast injection recently, or if you could be pregnant. [src:cleveland]',
    'For body composition, standardize food, fluids and exercise before every scan so repeat measurements are comparable; water and glycogen both shift lean-mass readings. [src:viken2025]',
  ],
  accuracy: [
    'For bone density, the question is how well a DEXA scan predicts fractures. A meta-analysis of 11 prospective cohorts covering about 90,000 person-years and more than 2,000 fractures found a relative risk of 1.5 for any fracture per standard deviation decrease in bone density, rising to 2.6 for hip fracture when hip density is measured, a predictive ability the authors judged similar to or better than blood pressure for stroke. [src:marshall1996] The U.S. Preventive Services Task Force concluded that centrally measured DXA "correlates with bone strength and clinical fracture outcomes". [src:uspstf]',
    'For body composition, DEXA is accurate on average and less so for any one person. Against the four-compartment reference model in 152 adults, DEXA read 18.9% body fat where the reference read 20.7%, with a standard error of 1.6 percentage points, individual errors from minus 2.6 to plus 7.3 points, and a systematic underestimate in leaner people. [src:vanderploeg2003] In 14 adults with obesity the mean difference disappeared (41.1% versus 41.5%) but individual errors still spanned about 4 percentage points either way, attributed to beam hardening in thicker tissue. [src:laforgia2009]',
    'Repeatability depends on the body’s water and fuel state. Glycogen loading raised DEXA lean body mass by 2.0% (3.0% with creatine) in trained cyclists, and glycogen depletion lowered leg lean mass by 1.4%. [src:bone2017] Drinking water equal to 1.5% of body mass two hours before a scan raised total lean mass from 60.0 to 60.8 kg. [src:viken2025] Vendors advertise precision of 1 to 2% or better, which reflects the machine’s repeatability under controlled conditions rather than its agreement with a reference method. [src:dexafit]',
  ],
  results: {
    title: 'Bone density scores on a DEXA report',
    columns: ['Score', 'Range', 'Meaning'],
    rows: [
      ['T-score', '−1.0 or higher', 'Normal bone density'],
      ['T-score', 'Between −1.0 and −2.5', 'Low bone mass (osteopenia)'],
      ['T-score', '−2.5 or lower', 'Osteoporosis (WHO reference standard, femoral neck, spine or total hip)'],
      ['Z-score', 'Above −2.0', 'Within the expected range for age (used for men under 50 and premenopausal women)'],
      ['Z-score', '−2.0 or lower', 'Below the expected range for age'],
      ['FRAX', '≥20% major fracture or ≥3% hip fracture over 10 years', 'Treatment threshold; supports an osteoporosis diagnosis even with a T-score above −2.5'],
    ],
    note: 'The T-score compares your density with a healthy 30-year-old of the same sex; the Z-score compares it with people your own age. FRAX combines femoral-neck density with clinical risk factors to give 10-year fracture probabilities. [src:iscd]',
    sourceId: 'bhof',
  },
  stats: [
    { value: '12.6%', label: 'of U.S. adults 50 and older have osteoporosis (age-adjusted); 27.1% of women and 5.7% of men 65 and older', sourceId: 'uspstf' },
    { value: '1.8 million', label: 'Medicare beneficiaries had a new osteoporotic fracture in 2016', sourceId: 'uspstf' },
    { value: '40 to 60%', label: 'of people regain their pre-fracture mobility after a hip fracture', sourceId: 'uspstf' },
    { value: '5 and 6', label: 'hip fractures and major osteoporotic fractures prevented per 1,000 people screened, over 3.7 to 5 years in pooled trials', sourceId: 'uspstf' },
    { value: '2.6×', label: 'relative risk of hip fracture per standard deviation decrease in hip bone density', sourceId: 'marshall1996' },
    { value: '0.001 mSv', label: 'effective dose of a spine-and-hip DEXA scan; a chest X-ray is 0.1 mSv', sourceId: 'hps' },
    { value: '1.8 points', label: 'average underestimate of percent body fat by DEXA versus the four-compartment model in 152 adults', sourceId: 'vanderploeg2003' },
    { value: '0.8 kg', label: 'rise in measured lean mass after drinking water equal to 1.5% of body weight before a scan', sourceId: 'viken2025' },
  ],
  quotes: [
    {
      text: 'The USPSTF recommends screening for osteoporosis to prevent osteoporotic fractures in women 65 years or older.',
      speaker: 'U.S. Preventive Services Task Force',
      role: 'final recommendation statement, January 2025',
      sourceId: 'uspstf',
    },
    {
      text: 'Centrally measured DXA correlates with bone strength and clinical fracture outcomes and uses low doses of radiation.',
      speaker: 'U.S. Preventive Services Task Force',
      role: 'final recommendation statement, January 2025',
      sourceId: 'uspstf',
    },
    {
      text: 'The WHO international reference standard for osteoporosis diagnosis is a T-score of -2.5 or less at the femoral neck.',
      speaker: 'International Society for Clinical Densitometry',
      role: 'Adult Official Positions, 2023',
      sourceId: 'iscd',
    },
    {
      text: 'Changes in muscle metabolites and water content alter DXA estimates of lean mass',
      speaker: 'Bone JL and colleagues',
      role: 'Medicine & Science in Sports & Exercise, 2017',
      sourceId: 'bone2017',
    },
    {
      text: 'The average annual natural background radiation level in the United States is approximately 3 mSv.',
      speaker: 'E. Russell Ritenour, PhD, FAAPM, FACR, DABR',
      role: 'Health Physics Society, Ask the Experts',
      sourceId: 'hps',
    },
  ],
  cost: 'Published self-pay prices for a bone density DEXA scan in the United States run from $64 to $432 on the MDsave marketplace, with a $145 average against an estimated $335 national average. [src:mdsave] Healthline puts out-of-pocket costs at $160 to $1,130 or more, with hospitals at the top of that range. [src:healthline] Body-composition DEXA from dedicated providers is cheaper: BodySpec lists scans from $39 and DexaFit Denver lists $99, noting that hospital and imaging-center body-composition scans typically run $250 to $435. [src:bodyspec] Medicare Part B covers a bone mass measurement at no cost every 24 months for eligible beneficiaries. [src:medicare]',
  faqs: [
    {
      q: 'Who needs a DEXA scan?',
      a: 'Women 65 and older and postmenopausal women under 65 at increased fracture risk, per the U.S. Preventive Services Task Force (both Grade B). Specialty bodies add men 70 and older, anyone who has broken a bone after age 50, and adults on long-term steroids or with a parent who fractured a hip. [src:uspstf]',
    },
    {
      q: 'How long does a DEXA scan take?',
      a: 'A central spine-and-hip scan takes 10 to 30 minutes including positioning, and the scanning itself is about 10 minutes. A whole-body composition scan takes about 7 to 12 minutes. [src:radiologyinfo]',
    },
    {
      q: 'What does a T-score of −2.5 mean?',
      a: 'A T-score of −2.5 or lower meets the World Health Organization definition of osteoporosis. Between −1.0 and −2.5 is low bone mass, often called osteopenia, and −1.0 or higher is normal. The score compares your bone density with a healthy young adult of the same sex. [src:bhof]',
    },
    {
      q: 'How much radiation is in a DEXA scan?',
      a: 'About 0.001 millisieverts for a spine-and-hip scan and 0.003 for a whole-body scan. A chest X-ray is about 0.1 millisieverts and a year of natural background radiation in the U.S. is about 3 millisieverts, so a DEXA scan is roughly a day of background exposure. [src:hps]',
    },
    {
      q: 'Can I take calcium before a DEXA scan?',
      a: 'No. Stop calcium supplements for at least 24 hours before the scan, because undissolved tablets in the gut can be read as bone. Food is otherwise fine. [src:radiologyinfo]',
    },
    {
      q: 'How often should you get a DEXA scan?',
      a: 'Routine follow-up is typically every two years, on the same machine so the numbers are comparable. Medicare covers a bone mass measurement once every 24 months, or more often when medically necessary, such as for people on high-dose steroids. [src:medicare]',
    },
    {
      q: 'Is a DEXA scan accurate for body fat?',
      a: 'On average, yes, within about 2 percentage points of the four-compartment reference method. For an individual the error can be 3 to 4 points either way, DEXA tends to underestimate fat in lean people, and hydration and glycogen move the lean-mass number, so compare repeat scans only under the same conditions. [src:vanderploeg2003]',
    },
    {
      q: 'Does hydration affect a DEXA scan?',
      a: 'Yes. Drinking water equal to 1.5% of body mass two hours before scanning raised measured lean mass by about 0.8 kg, and glycogen loading raised lean mass 2 to 3%. Bone density readings are not meaningfully affected. [src:viken2025]',
    },
    {
      q: 'Can I have a DEXA scan if I am pregnant?',
      a: 'No. Although the dose is tiny, Cleveland Clinic advises against a bone density test during pregnancy, and centers will ask you to confirm you are not pregnant before scanning. [src:cleveland]',
    },
    {
      q: 'What is a Z-score on a DEXA report?',
      a: 'The Z-score compares your bone density with people of your own age and sex. It is used instead of the T-score for men under 50 and premenopausal women; a Z-score of −2.0 or lower is "below the expected range for age" and prompts a search for a secondary cause of bone loss. [src:iscd]',
    },
    {
      q: 'Does Medicare cover a DEXA scan?',
      a: 'Medicare Part B covers a bone mass measurement every 24 months, at no cost when the provider accepts assignment, for people who meet a qualifying condition such as estrogen deficiency with osteoporosis risk, vertebral abnormalities on X-ray, or long-term steroid treatment. Body-composition scans are elective and generally self-pay. [src:medicare]',
    },
    {
      q: 'What is a vertebral fracture assessment?',
      a: 'A low-dose side-view image of the spine taken on the DEXA table to look for compression fractures. It is recommended for older patients who have lost more than an inch of height, have unexplained back pain, or whose density readings are borderline. [src:radiologyinfo]',
    },
  ],
  related: ['comprehensive-blood-panel', 'full-body-mri', 'abdominal-ultrasound'],
  sources: [
    { id: 'radiologyinfo', title: 'Bone Densitometry (DEXA, DXA)', publisher: 'RadiologyInfo.org, Radiological Society of North America and American College of Radiology', url: 'https://www.radiologyinfo.org/en/info/dexa', date: '2024-03-11' },
    { id: 'cleveland', title: 'DXA Scan (Bone Density Test)', publisher: 'Cleveland Clinic', url: 'https://my.clevelandclinic.org/health/diagnostics/10683-dexa-dxa-scan-bone-density-test', date: '2024-05-28' },
    { id: 'uspstf', title: 'Osteoporosis to Prevent Fractures: Screening. Final Recommendation Statement', publisher: 'U.S. Preventive Services Task Force', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening', date: '2025-01-14' },
    { id: 'iscd', title: 'Adult Official Positions', publisher: 'International Society for Clinical Densitometry', url: 'https://iscd.org/learn/official-positions/adult-positions/', date: '2023' },
    { id: 'bhof', title: 'Bone Density Exam/Testing', publisher: 'Bone Health & Osteoporosis Foundation', url: 'https://www.bonehealthandosteoporosis.org/patients/diagnosis-information/bone-density-examtesting/', date: '2022-03-08' },
    { id: 'hps', title: 'Ask the Experts: Radiation dose from DEXA (Q13693)', publisher: 'Health Physics Society', url: 'https://hps.org/publicinformation/ate/q13693/', date: '2020-11-20' },
    { id: 'iscd-radiation', title: 'Precision Assessment and Radiation Safety for Dual-Energy X-Ray Absorptiometry: Position Paper', publisher: 'International Society for Clinical Densitometry, Journal of Clinical Densitometry 8(4)', url: 'https://iscd.org/wp-content/uploads/2026/04/Radiation-Safety-White-Paper.pdf', date: '2005' },
    { id: 'medicare', title: 'Bone mass measurements', publisher: 'Medicare.gov', url: 'https://www.medicare.gov/coverage/bone-mass-measurements', date: 'accessed 2026-11' },
    { id: 'marshall1996', title: 'Meta-analysis of how well measures of bone mineral density predict occurrence of osteoporotic fractures', publisher: 'Marshall D, Johnell O, Wedel H. BMJ 312:1254', url: 'https://doi.org/10.1136/bmj.312.7041.1254', date: '1996' },
    { id: 'vanderploeg2003', title: 'Percent body fat via DEXA: comparison with a four-compartment model', publisher: 'Van Der Ploeg GE, Withers RT, Laforgia J. Journal of Applied Physiology 94(2):499', url: 'https://doi.org/10.1152/japplphysiol.00436.2002', date: '2003' },
    { id: 'laforgia2009', title: 'Validation of DXA body composition estimates in obese men and women', publisher: 'LaForgia J et al. Obesity 17(4):821', url: 'https://doi.org/10.1038/oby.2008.595', date: '2009' },
    { id: 'bone2017', title: 'Manipulation of Muscle Creatine and Glycogen Changes Dual X-ray Absorptiometry Estimates of Body Composition', publisher: 'Bone JL et al. Medicine & Science in Sports & Exercise 49(5):1029', url: 'https://doi.org/10.1249/MSS.0000000000001174', date: '2017' },
    { id: 'viken2025', title: 'Acute water intake alters DXA estimates of lean tissue mass', publisher: 'Viken JS et al. Frontiers in Physiology 16', url: 'https://doi.org/10.3389/fphys.2025.1724047', date: '2025' },
    { id: 'kelly2009', title: 'Dual Energy X-Ray Absorptiometry Body Composition Reference Values from NHANES', publisher: 'Kelly TL, Wilson KE, Heymsfield SB. PLoS One 4(9):e7038', url: 'https://doi.org/10.1371/journal.pone.0007038', date: '2009' },
    { id: 'ros', title: 'Bone density scan (DEXA/DXA)', publisher: 'Royal Osteoporosis Society', url: 'https://theros.org.uk/information-and-support/diagnosis-and-testing/bone-density-scan-dexa-dxa/', date: '2026-10-15' },
    { id: 'mdsave', title: 'DEXA Scan (Bone Density Scan) cost', publisher: 'MDsave', url: 'https://www.mdsave.com/procedures/dexa-scan-bone-density-scan/d48afd', date: '2025-10-01' },
    { id: 'healthline', title: 'DEXA Scan: Purpose, Procedure, Risks, Results', publisher: 'Healthline', url: 'https://www.healthline.com/health/dexa-scan', date: '2024-08-06' },
    { id: 'bodyspec', title: 'DEXA Scan San Francisco', publisher: 'BodySpec', url: 'https://www.bodyspec.com/dexa-scan-san-francisco', date: '2026' },
    { id: 'dexafit', title: 'DEXA Scan Cost in Denver', publisher: 'DexaFit Denver', url: 'https://www.denver.dexafit.com/dexa-scan-cost-denver', date: '2026' },
  ],
  schema: {
    type: 'ImagingTest',
    imagingTechnique: 'XRay',
    bodyLocation: ['Lumbar spine', 'Hip', 'Whole body'],
    usedToDiagnose: ['Osteoporosis', 'Osteopenia', 'Vertebral compression fracture'],
    sameAs: ['https://www.wikidata.org/wiki/Q1222163', 'https://meshb.nlm.nih.gov/record/ui?ui=D015519'],
  },
};
