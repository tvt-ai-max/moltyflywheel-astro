# Blog Style Reference — MoltyFlywheel.com

Version: v1 | Updated: 2026-05-03
Purpose: Condensed style guide for agent use. Replaces reading 3 full blog posts.

---

## Tone and Voice

- Direct, practical, non-hype
- Write for an operator evaluating tools or making a workflow decision
- Never: "game-changer", "revolutionary", "unlock your potential", "harness the power"
- Always: specific, honest about trade-offs, decision-supportive
- Reader is assumed to be intermediate — knows what affiliate marketing is, doesn't need definitions of basic terms

## Opening Pattern

First paragraph: State the core tension or problem without preamble. No "In today's fast-paced world."

```
If you look at [X] only as [shallow framing], you will miss the part that actually matters.

The real question is [the actual decision the reader needs to make].
```

Then immediately: Quick Answer blockquote.

```markdown
> **Quick Answer:** [2-3 sentences. Direct answer. No hedging. Covers who, what, and when it matters.]
```

## Section Structure

```
H2 — Why [X] Matters (or: What [X] Actually Is)
H2 — Where [X] Has the Advantage
H2 — Where [X] Is Less Ideal
H2 — The Key Decision Dimensions  (or: A Practical Framework)
H2 — What to Avoid (or: Who It's For)
H2 — Frequently Asked Questions
--- CTA Block ---
```

Comparison posts (category: comparison) use:
```
H2 — What the Comparison Actually Is
H2 — Where [Option A] Has the Advantage
H2 — Where [Option B] Has the Advantage
H2 — The Key Decision Dimensions
H2 — A Practical Routing Framework
H2 — Frequently Asked Questions
--- CTA Block ---
```

## H2/H3 Patterns

- H2: Topic-first, lowercase after first word. "Why Abacus AI is worth a closer look" not "Why You Should Look At Abacus AI Today"
- H3: Used for sub-dimensions within a section. Short noun phrases. "1. Infrastructure tolerance" not "Infrastructure Tolerance Is Important"
- No orphan H3s — always 2+ under a H2

## Paragraphs

- 2-4 sentences max per paragraph
- One idea per paragraph
- Short sentences preferred. Long compound sentences only when contrast is the point.
- Blank line between every paragraph

## Lists

Use bullet lists for: parallel items, feature sets, decision criteria
Use numbered lists for: sequential steps, ordered priority
Never use lists with single items

```markdown
Abacus AI is more useful when:

- you want broad access to leading models
- your team values a stronger agent layer
- you want a managed Claw path
```

## Internal Link Style

Anchor text = descriptive noun phrase, not "click here" or "learn more"

```markdown
[Abacus AI tool page](/tools/abacus-ai/?utm_source=blog&utm_medium=internal&utm_campaign=[slug])
[what Topview AI is and when it fits](/blog/what-is-topview-ai-2026)
```

Always include UTM on links to /tools/, /offers/, /programs/.
Cross-blog links: no UTM needed, just the /blog/ path.

## FAQ Pattern

4-6 questions. Short answers (3-6 sentences). Decision-focused.

```markdown
## Frequently Asked Questions

**What is the difference between X and Y?**

[Direct answer in 2-3 sentences. No "Great question!"]

**Can I skip X and go directly to Y?**

[Yes or No first. Then the qualifying condition.]
```

## CTA Block Pattern

Placed at the end, after FAQ. Use H3 with emoji or bold. Match CTA target to Primary CTA Target in content plan.

```markdown
---

### Not Sure Where You Fit Yet?

The [Offer Page Title](/offers/[slug]/?utm_source=blog&utm_medium=internal&utm_campaign=[slug]) is built for exactly this moment.

**It helps you:**
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]

[CTA text →](/offers/[slug]/?utm_source=blog&utm_medium=internal&utm_campaign=[slug])
```

## What NOT to Write

- No introductory meta-commentary ("In this article, we will explore...")
- No unsupported benchmarks or price claims ("Saves 10 hours per week")
- No unqualified superlatives ("the best", "the only", "the most powerful")
- No fabricated quotes or case study numbers
- No padded transitions ("Having said that", "With that in mind", "Now that we've covered X")
- No summaries that restate the intro
- No "Final Verdict" section that just repeats the Quick Answer

## Frontmatter Checklist

```yaml
title:        # Under 70 chars preferred. Include year if evergreen.
description:  # MUST be ≤160 characters. Count every character.
pubDate:      # YYYY-MM-DD format
category:     # guide | review | comparison | case-study | tutorial (ONLY)
tags:         # 4-6 lowercase slugs, no spaces
keyword:      # primary target keyword, lowercase
cluster:      # cluster-[letter]-[topic]
ogImage:      # /images/blog/[slug]-cover.webp
draft:        # true (always for new posts)
featured:     # false (unless explicitly set)
```

## Cluster → Category Mapping

| Track | cluster prefix | Typical category |
|---|---|---|
| A — Abacus AI | cluster-a-abacus-ai | guide / comparison |
| T — Topview AI | cluster-t-topview-ai | guide / comparison |
| O — Offer/decision | cluster-o-offer-decision | guide |
| P — Program/workflow | cluster-p-affiliate-programs | guide / comparison |
| N — News | cluster-d-ai-news | guide / case-study |

## Word Count Targets

| Post type | Target |
|---|---|
| Guide (ToF) | 1,200–1,600 words |
| Comparison (MoF) | 1,400–1,800 words |
| Framework (ToF/MoF) | 1,000–1,400 words |
| Use-case (MoF) | 1,000–1,300 words |
| Roundup (ToF) | 900–1,200 words |
