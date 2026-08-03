// Pure math functions shared by the calculator pages and the regression tests
// in scripts/test-calc.mjs. Keep these free of DOM access so both sides can
// import the exact same logic.

export function reconstitution(vialMg, waterMl, doseMg) {
  const concentration = waterMl > 0 ? vialMg / waterMl : 0; // mg/mL
  const volumeToDrawMl = concentration > 0 ? doseMg / concentration : 0;
  const units = volumeToDrawMl * 100; // U-100 syringe
  const dosesPerVial = doseMg > 0 ? vialMg / doseMg : 0;
  return { concentration, volumeToDrawMl, units, dosesPerVial };
}

export function blendDose(mgInVial, waterMl, drawMl) {
  const concentration = waterMl > 0 ? mgInVial / waterMl : 0; // mg/mL
  const doseMg = concentration * drawMl;
  return { concentration, doseMg, doseMcg: doseMg * 1000 };
}

export function nasal(totalMg, liquidMl, sprayMl, doseMg) {
  const concentration = liquidMl > 0 ? totalMg / liquidMl : 0; // mg/mL
  const mgPerSpray = concentration * sprayMl;
  const spraysNeeded = mgPerSpray > 0 ? doseMg / mgPerSpray : 0;
  const totalSprays = sprayMl > 0 ? liquidMl / sprayMl : 0;
  return { concentration, mgPerSpray, mcgPerSpray: mgPerSpray * 1000, spraysNeeded, totalSprays };
}

export function tdee(weightKg, heightCm, age, sex, activityFactor) {
  const sexOffset = sex === 'male' ? 5 : -161;
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + sexOffset;
  const total = bmr * activityFactor;
  return { bmr, tdee: total, cut: total - 500, maintain: total, bulk: total + 300 };
}

export function lbToKg(lb) {
  return lb * 0.453592;
}

export function inToCm(inches) {
  return inches * 2.54;
}
