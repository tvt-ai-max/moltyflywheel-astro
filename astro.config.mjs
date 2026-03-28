import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://moltyflywheel.com',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/newsletter') && !page.includes('/privacy'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
    mdx(),
  ],
});
