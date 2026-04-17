import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindv4 from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.moltyflywheel.com',
  output: 'static',
  vite: {
    plugins: [tailwindv4()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/newsletter') && !page.includes('/privacy'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
    mdx(),
  ],
});
