// Regression tests for the calculator math in src/lib/calc.js.
// Run with: node scripts/test-calc.mjs

import { reconstitution, blendDose, nasal, tdee, lbToKg, inToCm } from '../src/lib/calc.js';

let failures = 0;

function assertClose(actual, expected, label, tolerance = 0.01) {
  const diff = Math.abs(actual - expected);
  if (diff > tolerance) {
    console.error(`FAIL: ${label} — expected ${expected}, got ${actual}`);
    failures += 1;
  } else {
    console.log(`ok   ${label}`);
  }
}

// reconstitution: 5mg vial in 2mL water, 0.25mg dose
{
  const r = reconstitution(5, 2, 0.25);
  assertClose(r.concentration, 2.5, 'reconstitution concentration');
  assertClose(r.volumeToDrawMl, 0.1, 'reconstitution volume');
  assertClose(r.units, 10, 'reconstitution units');
  assertClose(r.dosesPerVial, 20, 'reconstitution doses per vial');
}

// reconstitution: 10mg vial in 5mL water, 1mg dose (site's default single-tab values)
{
  const r = reconstitution(10, 5, 0.25);
  assertClose(r.concentration, 2, 'reconstitution#2 concentration');
  assertClose(r.units, 12.5, 'reconstitution#2 units');
}

// blend: 5mg in 3mL water, drawing 0.2mL (20 units)
{
  const b = blendDose(5, 3, 0.2);
  assertClose(b.concentration, 1.6667, 'blend concentration', 0.001);
  assertClose(b.doseMg, 0.3333, 'blend doseMg', 0.001);
  assertClose(b.doseMcg, 333.33, 'blend doseMcg', 0.1);
}

// nasal: 10mg in 5mL bottle, 0.1mL spray, 250mcg (0.25mg) dose
{
  const n = nasal(10, 5, 0.1, 0.25);
  assertClose(n.concentration, 2, 'nasal concentration');
  assertClose(n.mgPerSpray, 0.2, 'nasal mgPerSpray');
  assertClose(n.mcgPerSpray, 200, 'nasal mcgPerSpray');
  assertClose(n.spraysNeeded, 1.25, 'nasal spraysNeeded');
  assertClose(n.totalSprays, 50, 'nasal totalSprays');
}

// tdee: male, 84kg, 178cm, 35yo, moderate activity (1.55)
{
  const t = tdee(84, 178, 35, 'male', 1.55);
  assertClose(t.bmr, 1782.5, 'tdee bmr');
  assertClose(t.tdee, 2762.875, 'tdee total');
  assertClose(t.cut, 2262.875, 'tdee cut');
  assertClose(t.bulk, 3062.875, 'tdee bulk');
}

// tdee: female offset differs from male
{
  const male = tdee(70, 170, 30, 'male', 1.2);
  const female = tdee(70, 170, 30, 'female', 1.2);
  if (male.bmr <= female.bmr) {
    console.error('FAIL: male BMR should exceed female BMR at identical stats (offset +5 vs -161)');
    failures += 1;
  } else {
    console.log('ok   tdee sex offset direction');
  }
}

// unit conversions
{
  assertClose(lbToKg(185), 83.914, 'lbToKg', 0.01);
  assertClose(inToCm(70), 177.8, 'inToCm', 0.01);
}

if (failures > 0) {
  console.error(`\n${failures} test(s) failed.`);
  process.exit(1);
} else {
  console.log('\nAll calculator tests passed.');
}
