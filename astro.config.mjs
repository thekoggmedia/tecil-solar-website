import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.tecilsolar.com',

  output: 'server',

  adapter: cloudflare({
    imageService: 'compile',
  }),

  compressHTML: true,

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],

    build: {
      cssMinify: true,

      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro'],
          },
        },
      },
    },
  },
});