// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kiape.co',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/gracias'),
    }),
  ],
  build: { inlineStylesheets: 'always' },
});
