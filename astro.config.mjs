import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindv4 from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.moltyflywheel.com',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindv4()],
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/newsletter') &&
        !page.includes('/privacy') &&
        !page.includes('/search') &&
        !page.includes('/tools/link-tracking') &&
        !page.includes('/tools/seo/') &&
        !page.includes('/tools/email-marketing') &&
        !page.includes('/tools/funnel-building'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
    mdx(),
  ],
});
