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
5. **Language Rule**: For `moltyflywheel.com`, blog content must be written in English by default. Do not output Vietnamese unless the task explicitly asks for Vietnamese or a bilingual rollout has been implemented.

## Blog Writing Rule

All production blog posts must follow the internal writing workflow before drafting begins.

Required source files to read first:
- `seo-writer/SKILL.md`
- `seo-writer/references/blog-template.md`
- `seo-writer/references/cta-blocks.md`
- `seo-writer/references/internal-linking-rules.md`
- `docs/Blog_Writing_Prompt_Template_v1.md`

Default language rule:
- Blog content must be written in English by default.
- Do not output Vietnamese unless the task explicitly asks for Vietnamese or a bilingual rollout has been implemented.

Execution rule:
- A blog task is not complete until the final file is created, build validation passes, and Git push succeeds.

## Program Page Writing Rule

All production program pages must follow the current Programs system before drafting begins.

Required source files to read first:
- `src/content.config.ts`
- `src/pages/programs/index.astro`
- `src/pages/programs/[program].astro`
- `docs/Program_Page_Writing_Prompt_Template_v1.md`

Execution rule:
- A program-page task is not complete until the content file is created or updated, build validation passes, and Git push succeeds.

## Offer Page Writing Rule

All production offer pages must follow the current offer framework and execution layer before drafting begins.

Required source files to read first:
- `docs/MoltyFlywheel_Offer_Copy_Framework_v1.md`
- `src/content/_engine/offer-page-template-v1.md`
- `docs/Offer_Page_Writing_Prompt_Template_v1.md`

Execution rule:
- An offer-page task is not complete until the content file is created or updated, build validation passes, and Git push succeeds.

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

---

## 🧠 Codebase Memory

To avoid re-reading the entire repository on every session, this project maintains a local codebase memory file at:

- `docs/CODEBASE_MEMORY.md`
- `docs/MoltyFlywheel_System_Snapshot_v1.md`

For future analysis, review this file first, then scan only the files changed since the last log entry or the files directly relevant to the current task. Update the memory file after major codebase reads, architecture changes, or significant implementation work.

---

## 🗂️ AI Tools Taxonomy Assets

The approved AI tools taxonomy has been operationalized into tracked repo assets for future directory and CMS work:

- `src/data/tools/directory-schema-v1.md`
- `src/data/tools/migration-map-v1.json`

Use these as the source of truth before refactoring the current tools dataset, building category pages, or implementing new filters/search for the tools directory.

---

## 🧭 Current Site Snapshot

As of the latest implementation sweep, the public site now has:

- a decision-hub homepage in `src/pages/index.astro`
- a redesigned `/blog` index with image-aware editorial cards
- blog detail pages using `src/layouts/BlogLayout.astro`
- a redesigned `/programs` directory plus richer program detail pages
- a local logo system for program cards and program detail heroes
- a full `/offers/` hub plus article-style offer detail pages
- one content-driven offer route at `/p/[offer]`

Current tracked content inventory:

- `18` blog posts in `src/content/blog/`
- `20` program entries in `src/content/programs/`
- `7` static offer pages in `src/pages/offers/`
- `1` content-driven offer entry in `src/content/offers/`
- `6` niche pages in `src/content/niches/`
- `21` blog cover assets in `public/images/blog/`
- `10` program logo assets in `public/images/programs/logos/`

If you are continuing work on this repo, review these files first:

- `docs/CODEBASE_MEMORY.md`
- `docs/MoltyFlywheel_System_Snapshot_v1.md`
- `src/content.config.ts`
- `src/pages/index.astro`
- `src/pages/blog/index.astro`
- `src/layouts/BlogLayout.astro`
- `src/pages/programs/index.astro`
- `src/pages/programs/[program].astro`
- `src/layouts/OfferArticleLayout.astro`
- `src/pages/offers/index.astro`

---

## 🎯 Offer System Assets

The offer layer is now split into three levels:

1. Framework
   - `docs/MoltyFlywheel_Offer_Copy_Framework_v1.md`

2. Execution Template
   - `src/content/_engine/offer-page-template-v1.md`

3. QA / Mapping Docs
   - `docs/MoltyFlywheel_Offer_QA_Checklist_v1.md`
   - `docs/sset name: MoltyFlywheel_OfferPages_Map_v1.md`

Use this order whenever new offer pages or content-driven offers are added:

1. framework
2. execution template
3. real page/content implementation
4. QA checklist
