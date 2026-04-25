# Tools Route and CTA Rules v1

## Purpose

This file locks the current route and CTA logic for the `/tools/` system so future additions do not drift.

## Current route model

The tools layer currently has three different entity behaviors:

### 1. Program-backed internal tools

These are tools sourced from the `programs` collection.

Route:
- `/programs/[slug]/`

CTA on `/tools/`:
- `View program review →`

Use this path when:
- the tool is already a program review
- affiliate/program metadata exists
- the real detail page belongs in the programs system

### 2. External tools with internal detail pages

These are tools that are not part of the `programs` collection but still deserve a MoltyFlywheel decision page.

Route:
- `/tools/[slug]/`

CTA on `/tools/`:
- `View tool page →`

CTA on the tool detail page:
- external vendor/product link such as `Open [Tool] →`

Use this path when:
- the tool is relevant to the operating library
- it should be discoverable and searchable inside the site
- it does not fit the program review schema cleanly

Current examples:
- `/tools/higgsfield/`
- `/tools/abacus-ai/`
- `/tools/topview-ai/`

### 3. Skills

Skills are not tool detail pages.

Route behavior:
- anchor link to the relevant job family section on `/tools/`

CTA on `/tools/`:
- `View job family →`

Use this path when:
- the entity is a workflow capability
- the entity is not a standalone product/platform review

## Search behavior

Search should not treat only `Skills` as the tool-layer content type.

When a tool has a real internal detail page under `/tools/[slug]/`, it should be searchable as:
- `Tool`

This keeps search honest and aligned with the visible IA.

## Rule for future additions

Before adding a new tool, decide which bucket it belongs to:

1. program-backed internal tool
2. external tool with internal detail page
3. skill / workflow capability

Do not:
- send users to `/tools/` with a CTA that implies a detail page when none exists
- label a program-backed route as if it were a tool detail page
- add external tools directly into the programs schema unless they truly fit that system

## Default decision rule

If a new tool does not belong in `programs` but is important enough to be featured in the tools library:
- create `/tools/[slug]/`
- use `View tool page →` on `/tools/`
- put the external vendor CTA inside the tool detail page

This is the current SOP-safe default.
