# Program Page Writing Prompt Template v1

## Purpose
This template is the default writing prompt for production program pages in this project.

Use it when creating or updating:
- affiliate program review pages
- tool/program decision pages
- program evaluation pages
- category-fit review pages
- comparison-adjacent program entries

This template is designed to keep program pages:
- practical
- structured
- decision-oriented
- honest about fit and trade-offs
- aligned with the current Programs system

---

## Prompt Template

```txt
Task: Write and publish a production-ready program page for this project.

Project:
`[PROJECT_PATH_OR_NAME]`

## Source of truth to read first
Before writing:
1. Read `README.md`
2. Read `CODEBASE_MEMORY.md` if present
3. Read the current Programs schema in `src/content.config.ts`
4. Read the current Programs directory and detail template files:
   - `src/pages/programs/index.astro`
   - `src/pages/programs/[program].astro`
5. Inspect recent files in `src/content/programs/`
6. Run `git status`

Do not skip this step.

## Writing objective
Write one real production program page that is:
- clear
- useful
- practical
- decision-supportive
- written in English by default
- aligned with the current MoltyFlywheel Programs system

## Target program
`[INSERT PROGRAM NAME OR SLUG HERE]`

## Primary angle
`[INSERT PROGRAM PAGE ANGLE HERE]`

Examples:
- explain what this affiliate program is and who it fits
- evaluate whether the tool is worth promoting
- highlight recurring value or buyer quality
- clarify where this program fits inside a category
- give a practical review for creators, operators, or affiliate publishers

## Source requirements
Use:
- official program/product source first
- verified affiliate source if available
- trustworthy factual sources only
- no invented claims
- no fabricated payout logic
- no unsupported benchmark or conversion language

List the real sources used in the final report.

## Schema requirement
Follow the current `programs` collection schema exactly.

Current required fields:
- `name`
- `description`
- `affiliateUrl`
- `commission.type`
- `commission.rate`
- `commission.cookieDuration`
- `category`
- `rating`
- `featured`

If a field is unknown:
- do not invent it
- use only source-backed information
- if the page cannot be written honestly within the current schema, report the blocker

## Page requirements

### Frontmatter
Use the current schema and create:
- name
- description
- affiliateUrl
- commission object
- category
- rating
- featured

### Structure
The page must support the current program detail layout and include content that can feed:

1. Intro summary
   Explain what the program/tool is and why it matters.

2. What Is This Program?
   Define the tool and category clearly.

3. Who Is It For?
   Explain audience fit and likely promoter fit.

4. Commission Details
   Explain the payout model using only verified facts.

5. Pros
   Add useful, real strengths.

6. Cons
   Add useful, real constraints.

7. MoltyFlywheel Verdict
   Give a practical final evaluation.

Optional:
- include a `Key features:` bullet list inside the body if it helps the current detail template render a stronger feature block

## Tone rules
- Write in English by default
- Do not write hype copy
- Do not write like a generic SaaS landing page
- Do not oversell payout alone
- Focus on fit, clarity, use case, and decision quality
- Be useful before being persuasive

## Decision-support rules
The page should help the reader understand:
- what the product is
- who should promote it
- why it fits or does not fit
- how the commission model works
- what trade-offs matter before clicking through

## Internal linking
Add internal links naturally where useful.

Prefer links to:
- related blog reviews
- comparisons
- alternative programs
- offers when decision help is useful

Do not force links unnaturally.

## Image and logo rules
If the current Programs system already supports local logos and a clean local asset exists:
- attach the verified local logo path

If no reliable logo is available:
- do not block the page
- rely on the current fallback visual system

Do not fabricate screenshots.

## Quality rules
- Do not fabricate pricing, cookie duration, commission rates, or retention claims
- Do not use false certainty
- Do not write generic feature dumping
- Translate features into actual decision value
- Be explicit about fit and non-fit

## Validation
After writing:
1. Save the file in `src/content/programs/`
2. Verify frontmatter matches schema
3. Verify the program detail page renders correctly
4. Run `npm run build`
5. Fix any schema or rendering issues

## Git rule
When the program page is complete:
1. Stage only the relevant file(s)
2. Commit with a clear message
3. Push to `main`

Only report `done` after Git push succeeds.

## Return format
- Status: done / push failed / blocked
- File created:
- Program:
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
- `[INSERT PROGRAM NAME OR SLUG HERE]`
- `[INSERT PROGRAM PAGE ANGLE HERE]`

---

## Recommended usage

Use this template for:
- new program imports
- updating existing program pages
- recurring-friendly program reviews
- best-fit program entries
- category-aligned program evaluations

Do not use this template for:
- blog posts
- offer pages
- internal ops notes
- tools taxonomy records
