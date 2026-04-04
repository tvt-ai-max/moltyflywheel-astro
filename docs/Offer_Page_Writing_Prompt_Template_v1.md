# Offer Page Writing Prompt Template v1

## Purpose
This template is the default writing prompt for production offer pages in this project.

Use it when creating or updating:
- recurring offer pages
- beginner recommendation pages
- comparison-led decision pages
- high-ticket recommendation pages
- best-fit offer pages
- general affiliate offer pages

This template is designed to keep offer pages:
- decision-supportive
- practical
- structured
- conversion-aware without hype
- aligned with the current offer framework and execution system

---

## Prompt Template

```txt
Task: Write and publish a production-ready offer page for this project.

Project:
`[PROJECT_PATH_OR_NAME]`

## Source of truth to read first
Before writing:
1. Read `README.md`
2. Read `CODEBASE_MEMORY.md` if present
3. Read `docs/MoltyFlywheel_Offer_Copy_Framework_v1.md`
4. Read `src/content/_engine/offer-page-template-v1.md`
5. Read the current offers schema in `src/content.config.ts`
6. Inspect:
   - `src/content/offers/`
   - `src/pages/p/[offer].astro`
   - `src/layouts/OfferArticleLayout.astro` if the task targets static offer-style UX
7. Run `git status`

Do not skip this step.

## Writing objective
Write one real production offer page that is:
- clear
- useful
- practical
- decision-supportive
- non-hype
- written in English by default
- aligned with the current MoltyFlywheel offer system

## Offer page type
`[INSERT OFFER TYPE HERE]`

Examples:
- beginner
- recurring
- high-ticket
- by-category
- comparison-led
- best-fit

## Topic / page target
`[INSERT OFFER PAGE TOPIC HERE]`

## Primary angle
`[INSERT OFFER ANGLE HERE]`

Examples:
- help beginners choose the safest first option
- explain why a recurring path makes sense
- guide readers toward the best-fit route by use case
- compare practical decision paths without hype

## Source requirements
Use:
- official source first
- verified affiliate source when relevant
- current internal program and offer pages where useful
- trustworthy factual sources only
- no invented claims
- no unsupported payout, pricing, or conversion language

List the real sources used in the final report.

## Schema requirement
Follow the current `offers` collection schema exactly.

Current required fields:
- `title`
- `headline`
- `targetProgram`
- `cta`
- `ctaUrl`
- `draft`

If data is incomplete:
- use the cleanest honest fallback
- do not invent unsupported fields

## Page requirements

### Frontmatter
Use the current schema and create:
- title
- headline
- targetProgram
- cta
- ctaUrl
- draft

### Structure
Follow the current offer framework and execution template.

The page should include:

1. Headline
   Define the decision clearly.

2. Subheadline
   Clarify audience and use case.

3. Quick Decision Summary
   Give the answer fast.

4. Who This Is For
   Explain fit and non-fit.

5. Why It Stands Out
   Clarify relevance and differentiation.

6. Benefits / Fit
   Translate strengths into practical outcomes.

7. Commission or Value Angle
   Explain the economic or value logic only when supported.

8. Pros / Constraints
   Build trust through realistic trade-offs.

9. CTA Block
   Present one clear next step.

10. Alternatives / Related Links
   Keep the decision system useful even if this offer is not the right fit.

11. FAQ
   Resolve final hesitation.

12. Closing Recommendation
   Restate the recommendation with conditions.

## CTA rules
- Match CTA strength to page intent
- Do not use multiple competing strong CTAs
- Do not place a strong CTA before the page has earned trust
- Make sure the CTA fits the page type:
  - beginner pages: safe and clear
  - recurring pages: value-aware
  - high-ticket pages: trust-first
  - comparison pages: decision-first

## Trust and proof rules
Trust should come from:
- clarity
- fit logic
- realistic trade-offs
- comparison context
- source-backed facts
- editorial judgment

Do not rely on:
- hype wording
- generic authority claims
- fake proof blocks
- income promises without support

## Tone rules
- Write in English by default
- Do not write hype copy
- Do not write like a generic sales page
- Do not write like a blog tutorial unless the page type truly requires explanation
- Keep the page practical, calm, and decision-oriented

## Internal linking
Add internal links naturally using the current site logic.

Prefer links to:
- related programs
- related offer pages
- comparisons
- supporting reviews

Do not force links unnaturally.

## Image rules
If the task includes an image and the current offer system supports it cleanly:
- use a real local asset
- keep it decision-page appropriate

If no image is requested or supported:
- do not invent one

## Quality rules
- Do not fabricate commission details, cookie duration, pricing, or product capabilities
- Do not write false certainty
- Do not pad with filler sections
- Make every section help the reader decide what to do next

## Validation
After writing:
1. Save the file in the correct offer content location
2. Verify frontmatter matches schema
3. Verify the offer page renders correctly
4. Run `npm run build`
5. Fix any schema or rendering issues

## Git rule
When the offer page is complete:
1. Stage only the relevant file(s)
2. Commit with a clear message
3. Push to `main`

Only report `done` after Git push succeeds.

## Return format
- Status: done / push failed / blocked
- File created:
- Offer page:
- Page type:
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
- `[INSERT OFFER TYPE HERE]`
- `[INSERT OFFER PAGE TOPIC HERE]`
- `[INSERT OFFER ANGLE HERE]`

---

## Recommended usage

Use this template for:
- new offer pages
- normalizing older offer pages
- decision-first recommendation pages
- recurring and beginner offer variants
- comparison-led commercial pages

Do not use this template for:
- blog posts
- program entries
- internal memos
- tools library content
