export const COMPOUND_GROUP_ORDER = [
  'Growth Hormone Secretagogues & Analogues',
  'GLP1s',
  'Metabolic & Weight Management',
  'Healing, Recovery & Anti-Inflammatory',
  'Cognitive and Neurological',
  'Anti-Aging, Longevity, and Cellular Health',
  'Antimicrobial and Immune Support',
  "Reproductive, Sexual & Libido-Enhancing",
  'Hair, Skin, & Nails',
  "Other Peptides & Amino's",
  'Bioregulators',
];

export const GUIDE_GROUP_ORDER = [
  'Peptide 101',
  'Seminary 101',
  'Peptide Stacks',
  'COAs & Lab Testing',
  'Paying With Crypto',
  'Pens & Supplies',
  'Community Guidelines',
  'Videos & Interviews',
  'Other Guides',
];

export const VENDOR_GROUP_ORDER = [
  'US Vendors (Light Gray)',
  'Overseas Vendors (Dark Gray)',
  'Vendor Reviews',
];

export function groupBy<T extends { data: { group: string } }>(
  items: T[],
  order: string[]
): { group: string; items: T[] }[] {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const g = item.data.group;
    if (!map.has(g)) map.set(g, []);
    map.get(g)!.push(item);
  }
  const ordered = order.filter((g) => map.has(g)).map((g) => ({ group: g, items: map.get(g)! }));
  const rest = [...map.keys()]
    .filter((g) => !order.includes(g))
    .map((g) => ({ group: g, items: map.get(g)! }));
  return [...ordered, ...rest];
}
