# moltyflywheel.com

A high-performance Astro-based project integrated with a local SEO and GEO (Generative Engine Optimization) writing workflow.

---

## 🚀 Local SEO Writing Workflow

This project features a dedicated local skill pack for content creation, located in the `seo-writer/` directory. This system is designed to produce high-quality, "Answer-first" content that is optimized for both traditional search engines (Google) and AI-powered search (GEO/SGE).

### **Workflow Rules for AI Agents**

Whenever a request is made for **blog posts, SEO articles, GEO articles, tutorials, comparisons, or answer-first content**, the following files **MUST** be read and applied in order before drafting:

1. **`seo-writer/SKILL.md`**: The primary workflow source and content framework.
2. **`seo-writer/references/blog-template.md`**: The standard structure for long-form content.
3. **`seo-writer/references/cta-blocks.md`**: Rules for UTM tracking and CTA levels (Soft/Medium/Strong).
4. **`seo-writer/references/internal-linking-rules.md`**: Guidelines for building topical authority through internal links.

---

## 🛠️ Project Setup & Commands

This project is built using [Astro](https://astro.build).

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

---

## 🔒 Local-Only Skills

The `seo-writer/` folder contains proprietary writing rules and is configured to be **local-only**. It is ignored by Git and should not be pushed to the public repository.
