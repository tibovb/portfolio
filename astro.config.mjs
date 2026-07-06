// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: https://tibovb.github.io/portfolio/
  site: 'https://tibovb.github.io',
  base: '/portfolio',
  integrations: [icon()],
});
