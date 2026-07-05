import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thegraymarket.net',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
