import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    category: z.enum(['guide', 'review', 'comparison', 'case-study', 'tutorial']),
    tags: z.array(z.string()),
    affiliatePrograms: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    ogImage: z.string().optional(),
    // legacy aliases — tolerated, not rendered
    og_image: z.string().optional(),
    keyword: z.string().optional(),
    cluster: z.string().optional(),
    canonical: z.string().optional(),
    primary_keyword: z.string().optional(),
    secondary_keywords: z.array(z.string()).optional(),
    search_intent: z.string().optional(),
    target_word_count: z.number().optional(),
    keyword_cluster: z.string().optional(),
    author: z.string().optional(),
  }),
});

const programs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/programs" }),
  schema: z.object({
    name: z.string(),
    description: z.string().max(160),
    logo: z.string().optional(),
    affiliateUrl: z.string().url(),
    commission: z.object({
      type: z.enum(['cps', 'cpl', 'recurring', 'hybrid']),
      rate: z.string(),
      cookieDuration: z.string(),
    }),
    category: z.enum(['ai-writing', 'seo', 'email', 'general-ai', 'productivity']),
    rating: z.number().min(1).max(5),
    featured: z.boolean().default(false),
  }),
});

const offers = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/offers" }),
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    targetProgram: z.string(),
    cta: z.string(),
    ctaUrl: z.string(),
    draft: z.boolean().default(false),
  }),
});

const niches = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/niches" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    keywords: z.array(z.string()),
    programs: z.array(z.string()),
  }),
});

export const collections = { blog, programs, offers, niches };
