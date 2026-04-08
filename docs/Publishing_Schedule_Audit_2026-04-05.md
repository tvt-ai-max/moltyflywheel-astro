# Publishing Schedule Audit — 2026-04-05

Project: `moltyflywheel.com`  
Planning source: `docs/lich_xuat_ban_moltyflywheel.xlsx`  
Audit scope: compare the publishing spreadsheet against the current blog content in `src/content/blog/`

## Summary

- Current date at audit time: `2026-04-05`
- Current blog post count in repo: `21`
- Scheduled items in the spreadsheet: `20`
- Entries clearly already present in the repo: `2`
- Entries not yet present in the repo: `18`
- Entries whose spreadsheet status should be updated now: `2`
- Overdue scheduled posts with no repo file yet: `0`

## Status legend

- `In repo` = a matching or clearly corresponding article already exists in `src/content/blog/`
- `Not started in repo` = no corresponding article file found yet
- `Update sheet status` = spreadsheet currently says not written, but repo already has the article

## Audit table

| ID | Publish date | Planned title | Repo status | Matching repo file | Action |
|---|---|---|---|---|---|
| A0 | 2026-04-06 | Agentic AI overview pillar | In repo | `src/content/blog/what-is-agentic-ai-2026.md` | Update sheet status from `⬜ Chưa viết` |
| A1 | 2026-04-15 | 5 agentic AI business applications | In repo | `src/content/blog/5-agentic-ai-business-applications-2026.md` | Update sheet status from `⬜ Chưa viết` |
| A2 | 2026-04-24 | AI Agent vs AI Assistant | Not started in repo | — | Keep planned |
| A3 | 2026-04-27 | Build your first AI agent for content marketing | Not started in repo | — | Keep planned |
| A4 | 2026-05-08 | Can Agentic AI replace employees? | Not started in repo | — | Keep planned |
| B0 | 2026-04-13 | Claude AI full guide | Not started in repo | — | Keep planned |
| B1 | 2026-05-06 | Claude Code for non-developers | Not started in repo | — | Keep planned |
| B2 | 2026-04-22 | Claude vs ChatGPT vs Gemini | Not started in repo | — | Keep planned |
| B3 | 2026-04-29 | Best Claude prompts for content marketing | Not started in repo | — | Keep planned |
| B4 | 2026-05-13 | Claude API workflow guide | Not started in repo | — | Keep planned |
| C0 | 2026-04-08 | What is AI Flywheel? | Not started in repo | — | Next scheduled article not yet in repo |
| C1 | 2026-04-20 | 5 ways to make money with Agentic AI | Not started in repo | — | Keep planned |
| C2 | 2026-05-04 | Can AI tools run a company? | Not started in repo | — | Keep planned |
| C3 | 2026-05-11 | AI Agency 2026 business model | Not started in repo | — | Keep planned |
| D1 | 2026-04-17 | Claude / AGI / Claude Code monthly roundup | Not started in repo | — | Keep planned |
| D2 | 2026-05-01 | Qwen3 analysis | Not started in repo | — | Keep planned |
| D3 | 2026-04-10 | Claude Code leaked source-code newsjack | Not started in repo | — | Keep planned |
| D-Flex | 2026-05-15 | Flexible weekly AI news article | Not started in repo | — | Keep planned |

## Notes on matching

- `A0` is not a title-perfect match, but it is clearly the same pillar topic and publish slot:
  - planned: Agentic AI overview pillar
  - repo: `What Is Agentic AI? The Complete 2026 Overview`
- `A1` is also a clear content match:
  - planned: 5 business applications / case study
  - repo: `5 Agentic AI Applications for Small Businesses: Practical Case Studies 2026`

## Immediate schedule actions

1. Update spreadsheet status for `A0` to reflect that the article already exists in the repo.
2. Update spreadsheet status for `A1` to reflect that the article already exists in the repo.
3. Keep `C0` as the next production target if the team is following the spreadsheet strictly.
4. Treat the spreadsheet as partially out of sync until the `📝 Danh Sách Bài` tab is refreshed against repo reality.

## Operational takeaway

As of `2026-04-05`, there is no scheduled post that is already past due and still missing from the repo.

The main issue is not missed publishing. The main issue is spreadsheet status drift.

---

## Update — 2026-04-08

- `C0` is now present in the repo and already pushed to `main`.
- Matching repo file:
  - `src/content/blog/what-is-ai-flywheel-2026.md`
- Current frontmatter state:
  - `pubDate: 2026-04-08`
  - `draft: false`
- Matching content commit:
  - `c5c9e10` — `content(blog): add C0 AI Flywheel article — Cluster C, pubDate 2026-04-08`

### Updated status note for `C0`

| ID | Publish date | Planned title | Repo status | Matching repo file | Action |
|---|---|---|---|---|---|
| C0 | 2026-04-08 | What is AI Flywheel? | In repo and pushed | `src/content/blog/what-is-ai-flywheel-2026.md` | Update sheet status from `⬜ Chưa viết` |
