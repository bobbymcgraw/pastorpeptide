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

export const COMPOUND_GROUP_COLORS: Record<string, string> = {
  'Growth Hormone Secretagogues & Analogues': 'var(--deep-blue)',
  'GLP1s': 'var(--amber-red)',
  'Metabolic & Weight Management': 'var(--clay)',
  'Healing, Recovery & Anti-Inflammatory': 'var(--moss)',
  'Cognitive and Neurological': 'var(--sky)',
  'Anti-Aging, Longevity, and Cellular Health': 'var(--grit)',
  'Antimicrobial and Immune Support': 'var(--green)',
  "Reproductive, Sexual & Libido-Enhancing": 'color-mix(in srgb, var(--amber-red) 60%, var(--clay))',
  'Hair, Skin, & Nails': 'color-mix(in srgb, var(--sky) 55%, var(--sand))',
  "Other Peptides & Amino's": 'var(--warm-gray)',
  'Bioregulators': 'color-mix(in srgb, var(--moss) 60%, var(--deep-blue))',
};

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
