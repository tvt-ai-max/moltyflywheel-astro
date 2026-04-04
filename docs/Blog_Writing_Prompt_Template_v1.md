# Blog Writing Prompt Template v1

## Purpose
This template is the default writing prompt for production blog posts in this project.

Use it when creating a new article for:
- reviews
- comparisons
- guides
- tutorials
- explainers
- launch/feature breakdowns

This template is designed to keep articles:
- useful
- structured
- decision-supportive
- SEO-aware
- consistent with the site system

---

## Prompt Template

```txt
Task: Write and publish a production-ready blog post for this project.

Project:
`[PROJECT_PATH_OR_NAME]`

## Source of truth to read first
Before writing:
1. Read `README.md`
2. Read `CODEBASE_MEMORY.md` if present
3. Read the local writing workflow files:
   - `seo-writer/SKILL.md`
   - `seo-writer/references/blog-template.md`
   - `seo-writer/references/cta-blocks.md`
   - `seo-writer/references/internal-linking-rules.md`
4. Inspect recent posts in `src/content/blog/`
5. Run `git status`

Do not skip this step.

## Writing objective
Write one real production blog post that is:
- clear
- useful
- practical
- non-hype
- aligned with the current site system
- written in English by default unless the task explicitly requires another language

## Topic
`[INSERT TOPIC HERE]`

## Primary angle
`[INSERT ARTICLE ANGLE HERE]`

Examples:
- explain what this is and why it matters
- compare two tools or approaches
- help beginners choose the right option
- break down a new release or capability
- turn a technical topic into practical guidance

## Source requirements
Use:
- official sources first
- primary documentation if available
- trustworthy factual sources only
- no invented claims
- no unsupported benchmarking language

List the real sources used in the final report.

## Article requirements

### Frontmatter
Use the project’s current schema and create:
- title
- description
- pubDate
- category
- tags
- image field if the system supports it

### Structure
The article must include:

1. Answer-first opening
   Start with a concise explanation of what the topic is and why it matters.

2. Core explanation
   Explain the subject clearly.

3. Practical implications
   Show what changes for the reader in practice.

4. Best use cases / fit
   Explain who should care and when it matters.

5. Strengths
   Explain what is notably strong.

6. Trade-offs / constraints
   Be honest about limitations.

7. FAQ
   Add useful reader questions.

8. Final verdict
   Give a practical conclusion.

9. CTA block
   Use the local CTA framework and site logic.

## Internal linking
Add internal links naturally using the project’s internal-linking rules.

Prefer links to:
- related reviews
- comparisons
- programs
- offers
- adjacent blog content

Do not force links unnaturally.

## Image rules
If the task includes image generation:
- create a cover image that is image-led, not text-heavy
- keep it crop-safe
- save it using the project naming convention
- attach it using the currently supported image field
- verify that every `.webp` is a real WebP before commit
- do not rename JPG or PNG files to `.webp` manually
- validate dimensions and render compatibility for article hero and card usage
- if a live blog cover had a broken format or severe cache/render issue, regenerate to a new filename/path instead of overwriting the old file in place

If no image is requested, do not invent one.

## Quality rules
- Write in English by default
- Do not write hype copy
- Do not write like a generic SaaS sales page
- Do not pad the article with fluff
- Do not fabricate pricing, ratings, benchmarks, or unsupported claims
- Be useful before being impressive

## Validation
After writing:
1. Save the file in the correct blog content location
2. Verify frontmatter matches schema
3. Run `npm run build`
4. Fix any schema or rendering issues

## Git rule
When the article is complete:
1. Stage only the relevant file(s)
2. Commit with a clear message
3. Push to `main`

Only report `done` after Git push succeeds.

## Return format
- Status: done / push failed / blocked
- File created:
- Title:
- Slug:
- Sources used:
- Internal links added:
- Build result:
- Commit:
- Message:
- Git push:
- Error if any:
```

---

## Required placeholders to fill before use
- `[PROJECT_PATH_OR_NAME]`
- `[INSERT TOPIC HERE]`
- `[INSERT ARTICLE ANGLE HERE]`

---

## Recommended usage

Use this template for:
- new blog production
- scheduled content writing
- research-to-article handoff
- source-grounded explainer posts

Do not use this template for:
- sales pages
- offer pages
- internal memos
- program directory entries
