# MoltyFlywheel Offer Page Template v1

Use this template only after reviewing:
- `docs/MoltyFlywheel_Offer_Copy_Framework_v1.md`

This is an execution template for drafting offer pages.
It is not a copywriting theory document.
It is not a one-size-fits-all sales page.

Use it for:
- recurring offer pages
- beginner recommendation pages
- comparison-led money pages
- high-ticket / best-fit offer pages
- general affiliate offer pages

---

## 1. Before You Draft

Fill this planning layer first.

- Offer page type:
  - beginner
  - recurring
  - high-ticket
  - by-category
  - comparison-led
  - best-fit

- Primary audience:
  - who is the page for?

- Decision intent:
  - what choice is the reader trying to make?

- Lead angle:
  - ease
  - recurring value
  - buyer quality
  - workflow fit
  - category fit
  - best-fit recommendation

- CTA strength plan:
  - soft
  - medium
  - strong

- Known facts only:
  - commission model
  - cookie duration
  - plan/pricing context
  - core use case
  - trade-offs

- Unknowns to avoid fabricating:
  - [list them here before writing]

---

## 2. Frontmatter Guidance

Match the current `offers` schema exactly unless the schema changes later.

Current schema fields:

```yaml
---
title: "[Offer Page Name]"
headline: "[Primary page promise]"
targetProgram: "[program-slug]"
cta: "[Primary CTA label]"
ctaUrl: "[Affiliate or target URL]"
draft: true
---
```

### Frontmatter notes

- `title`
  - internal content title
  - should be clean and reusable

- `headline`
  - should reflect the page's lead angle
  - should not be vague or hype-heavy

- `targetProgram`
  - must map to a real program slug when the page centers on one program

- `cta`
  - should match the strongest intended CTA on the page

- `ctaUrl`
  - use verified destination only

- `draft`
  - keep `true` until page QA is complete

---

## 3. Offer Page Block Structure

Use the following block order by default.

Adjust emphasis by offer type, but do not break the logic.

### Block 1 — Headline

Purpose:
- define the page promise clearly

Prompt:
- What is the page helping the reader decide?
- What specific outcome or fit is being promised?

Write:
- one direct headline
- no vague “grow faster” wording
- no unsupported superlatives

### Block 2 — Subheadline

Purpose:
- narrow the promise to the right audience or use case

Prompt:
- Who is this page for?
- What kind of choice is the reader making?

Write:
- 1–2 sentences
- clarify context, not filler

### Block 3 — Quick Decision Summary

Purpose:
- give the answer fast

Prompt:
- Is this offer worth considering?
- For whom?
- Under what conditions?

Write:
- one short paragraph
- editorial tone
- useful, not dramatic

### Block 4 — Who This Is For

Purpose:
- define fit clearly

Prompt:
- Who gets the most value?
- Who is likely to benefit?
- Who may need another option?

Write:
- audience-fit paragraph or bullets
- include “not ideal for” where helpful

### Block 5 — Why It Stands Out

Purpose:
- explain why this offer deserves attention

Prompt:
- What meaningfully differentiates it?
- Why is it relevant in this category?
- What makes it worth featuring?

Write:
- 1–3 short paragraphs or structured bullets
- translate features into real relevance

### Block 6 — Benefits / Fit Block

Purpose:
- connect product strengths to practical outcomes

Prompt:
- What gets easier, faster, safer, or more scalable?
- Why does that matter for this reader?

Write:
- benefit-first explanation
- avoid raw feature dumping

### Block 7 — Commission / Value Angle

Purpose:
- explain economic or value logic where relevant

Prompt:
- Why is this commercially meaningful?
- Is the value in recurring revenue, high payout, accessibility, or fit?
- What should the reader understand about the economics?

Write:
- only with source-backed facts
- if data is incomplete, say so plainly

### Block 8 — Pros / Constraints

Purpose:
- improve trust through realistic trade-offs

Prompt:
- What are the strongest reasons to choose it?
- What are the real limitations?

Write:
- 3–5 useful pros
- 2–4 real constraints
- no fake cons

### Block 9 — CTA Block

Purpose:
- present a clear next step

Prompt:
- What should the reader do now?
- Why does that next step make sense after the copy above?

Write:
- one clear CTA block
- no competing primary actions

### Block 10 — Alternatives / Related Links

Purpose:
- keep the decision system useful even if the current offer is not a fit

Prompt:
- What should the reader review next if uncertain?
- What adjacent programs or pages belong here?

Write:
- short transition + internal links

### Block 11 — FAQ

Purpose:
- resolve final hesitation

Prompt:
- What would a careful reader still ask at this point?
- What fit, value, or use-case question remains?

Write:
- only real questions
- concise, useful answers

### Block 12 — Closing Recommendation

Purpose:
- restate the recommendation with conditions

Prompt:
- What is the final recommendation?
- For what audience or scenario?
- What expectation should the reader have?

Write:
- calm and decisive
- no hard-sell closing tone

---

## 4. CTA Placement Guidance

### Soft CTA

Use when:
- the page is still orienting the reader
- the reader is still evaluating

Placement:
- near the top after summary
- after “who it is for”
- before alternatives

Examples:
- read the review
- compare alternatives
- see how it fits your use case

### Medium CTA

Use when:
- the page has established fit
- the reader likely understands the offer

Placement:
- after benefits
- after commission/value logic
- after comparison criteria

Examples:
- explore the program
- view the official offer
- check the pricing or product page

### Strong CTA

Use when:
- the page has already done the decision work
- page intent is high commercial intent

Placement:
- hero only if page intent is already strong
- mid-page after explanation
- final recommendation block

Examples:
- get started with [tool]
- visit [program]
- open the offer

### CTA rules

- Do not lead with a strong CTA before clarity.
- Do not place multiple strong CTAs with different actions.
- Every strong CTA must be earned by the page logic above it.

---

## 5. Trust / Proof Placement Guidance

Trust should appear across the page, not in one isolated “proof” block.

### Place trust early through:
- clear audience fit
- direct explanation of what the offer is
- fast decision summary

### Place trust mid-page through:
- feature-to-benefit translation
- honest trade-offs
- contextual recommendation logic
- economic/value clarity

### Place trust late through:
- FAQ
- alternatives
- closing recommendation with conditions

### Use these proof types

- practical use-case clarity
- fit for a specific audience
- known commission/cookie/value details
- editorial judgment
- comparison context
- explicit unknowns where needed

### Avoid these proof substitutes

- “best ever”
- vague authority claims
- generic testimonial-style language with no source
- income claims without support

---

## 6. Adaptation Rules by Offer Type

### Beginner page

Emphasize:
- ease
- clarity
- low friction
- simple recommendation

Reduce:
- technical detail
- dense comparison logic

CTA pattern:
- soft or medium early
- strong later

### Recurring page

Emphasize:
- retention
- repeatable value
- long-term economics
- audience quality

CTA pattern:
- medium after economics
- strong after fit and trade-offs

### High-ticket page

Emphasize:
- buyer seriousness
- value justification
- use-case specificity
- what makes the payout defensible

CTA pattern:
- medium first
- strong only after enough trust is built

### Comparison-led page

Emphasize:
- differences
- decision criteria
- best-fit outcome

Reduce:
- standalone hero hype

CTA pattern:
- soft early
- medium after comparison
- strong after final recommendation

### Best-fit page

Emphasize:
- audience segmentation
- “best for / not for” logic
- recommendation clarity

CTA pattern:
- medium throughout
- strong at the close

### General affiliate offer page

Emphasize:
- what the offer is
- who it fits
- why it stands out
- how to act next

CTA pattern:
- standard medium + final strong

---

## 7. Drafting Prompts for Writers

Use these prompts before finalizing copy:

- What exact decision does this page help make?
- Why would the reader trust this page?
- What makes this offer worth attention in this category?
- What kind of reader should not choose this offer?
- Where is the strongest trust-building paragraph?
- Is the CTA earned, or is it premature?
- If key details are unknown, have they been handled honestly?

---

## 8. Final QA Before Publishing

Check all of the following:

- The page type is explicit.
- The lead angle matches the page type.
- The headline is specific.
- The subheadline clarifies audience or use case.
- The decision summary is useful.
- The page defines who it is for.
- Benefits are translated, not dumped.
- Trade-offs are real.
- CTA strength matches the page intent.
- Alternatives are present if relevant.
- FAQ answers real questions.
- Closing recommendation takes a position.
- No unsupported claims remain.

---

## 9. Reusable Draft Skeleton

Use this skeleton as the base draft:

```md
---
title: "[Offer Page Name]"
headline: "[Specific page promise]"
targetProgram: "[program-slug]"
cta: "[Primary CTA label]"
ctaUrl: "[Verified destination]"
draft: true
---

# [Headline]

[Subheadline]

## Quick Decision Summary
[Short answer with recommendation conditions]

## Who This Is For
[Audience-fit explanation]

## Why It Stands Out
[Differentiation and relevance]

## Benefits / Fit
[Practical outcomes and why they matter]

## Commission or Value Angle
[Only source-backed value logic]

## Pros
- [Real strength]
- [Real strength]
- [Real strength]

## Constraints
- [Real trade-off]
- [Real trade-off]

## CTA
[Primary action and why it makes sense now]

## Alternatives
[Related internal links and adjacent options]

## FAQ
### [Question]
[Answer]

### [Question]
[Answer]

## Final Recommendation
[Measured closing recommendation]
```

---

## 10. Operating Note

If the page reads like:
- a generic SaaS landing page
- a payout-first affiliate pitch
- a feature dump with a CTA attached

then it is off-template.

If the page helps the reader:
- understand the offer
- understand the fit
- understand the trade-offs
- understand the next action

then it is on-template.
