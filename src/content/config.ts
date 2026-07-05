import { defineCollection, z } from 'astro:content';

const articleSchema = z.object({
  title: z.string(),
  group: z.string(),
  date: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

const compounds = defineCollection({ type: 'content', schema: articleSchema });
const guides = defineCollection({ type: 'content', schema: articleSchema });
const vendors = defineCollection({ type: 'content', schema: articleSchema });
const legal = defineCollection({ type: 'content', schema: articleSchema });

export const collections = { compounds, guides, vendors, legal };
