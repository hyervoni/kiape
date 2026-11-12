// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages preview (https://hyervoni.github.io/kiape/) vs production (www.kiape.co).
const isPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: isPages ? 'https://hyervoni.github.io' : 'https://www.kiape.co',
  base: isPages ? '/kiape' : undefined,
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/gracias'),
    }),
  ],
  build: { inlineStylesheets: 'always' },
});
