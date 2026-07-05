import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pastorpeptide.com',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
