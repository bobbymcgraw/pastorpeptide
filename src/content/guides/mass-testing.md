---
title: "Mass Testing"
group: "COAs & Lab Testing"
date: "2025-09-17 22:00:17"
tags: []
---
Mass and Purity

## **1. Mass Testing (Identity Confirmation)**

**Purpose:**

- To confirm the molecular weight matches the intended peptide sequence.
- Ensures the compound isn’t mislabeled, mis-synthesized, or degraded.

**How it’s done:**

- **LC-MS** (*Liquid Chromatography–Mass Spectrometry*) is the gold standard.
  - **Liquid Chromatography (LC):** Separates the sample into individual components.
  - **Mass Spectrometry (MS):** Measures the molecular mass of each component.
- The resulting spectrum shows a **peak at the expected mass** (± a small error margin).
- Example: A 1,295.6 Da peptide should have a dominant peak at ~1,295.6, confirming it’s correct.

**What to look for in a COA:**

- “Observed mass” should match the “Theoretical mass” within 0.1–0.5 Da.
- Sometimes shown as a % “Mass Match” score.

---

## **2. Purity Testing**

**Purpose:**

- Measures **how much of your sample is the target peptide** versus impurities.
- Impurities can include:
  - Truncated sequences (shorter peptides from incomplete synthesis)
  - Side products from incorrect amino acid coupling
  - Residual solvents or synthesis reagents

**How it’s done:**

- **HPLC** (*High-Performance Liquid Chromatography*) is most common.
  - Separates components by polarity and retention time on a chromatography column.
  - The output chromatogram shows peaks for each substance.
  - The area under the main peak vs. all peaks combined = purity %.

**What to look for in a COA:**

- Purity is usually given as a percentage:
  - ≥ 98% = Pharmaceutical grade
  - 95–98% = High research grade
  - < 95% = Lower research quality (may be fine for some *in vitro* work but not *in vivo*)
- Example: “Purity (HPLC): 98.4%” means 98.4% of the sample is the intended peptide.

---

## **Why this matters for peptides**

- **Mass testing** makes sure you have the **right molecule**.
- **Purity testing** makes sure you have **mostly that molecule** and not a bunch of byproducts.
- Without both tests, you could have:
  - Wrong sequence entirely (wasted research)
  - Impurities that affect biological results
  - Dangerous contaminants if injected
