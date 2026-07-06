// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // Custom domain via GitHub Pages
  site: 'https://tibovanbrabandt.com',
  integrations: [icon()],
});
