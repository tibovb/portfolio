// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Custom domain via GitHub Pages
  site: 'https://tibovanbrabandt.com',
  integrations: [icon(), sitemap()],
});
