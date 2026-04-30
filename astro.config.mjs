import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({

  // ── Site URL — required for sitemap and canonical tags ──
  site: 'https://www.tecilsolar.com',

  // ── Integrations ──
  integrations: [
    sitemap({
      // Pages to exclude from sitemap (add more if needed)
      filter: (page) => !page.includes('/404'),
    }),
  ],

  // ── Vite plugins ──
  vite: {
    plugins: [tailwindcss()],
  },
});