---
name: seo-writer
description: >
  Skill viết bài chuẩn SEO + GEO (Generative Engine Optimization) theo hệ thống Antigravity Content Framework.
  Áp dụng triết lý Answer-first, cấu trúc Topic Cluster, internal linking 2 chiều, và CTA 3 cấp độ.
  BẮT BUỘC dùng skill này bất cứ khi nào người dùng yêu cầu: viết bài blog, bài SEO, bài chuẩn GEO,
  bài hướng dẫn WordPress, đánh giá tool, case study, bài cluster content, hoặc bất kỳ dạng long-form content
  nào có mục tiêu xếp hạng tìm kiếm. Cũng dùng khi người dùng nói "viết theo chuẩn Antigravity",
  "viết bài Answer-first", "tối ưu GEO", hoặc nhắc đến WP2026, SEO-KIT, topic cluster.
---

# Antigravity SEO & GEO Content Writer

**CRITICAL RULE: EXACTLY ALL CONTENT MUST BE WRITTEN IN ENGLISH. This project is an English-first property. NEVER write in Vietnamese or any other language, regardless of the prompt language. You MUST translate instructions and write purely in English.**

**SEO-FIRST RULE: This repo is SEO-first by default. Protect canonical consistency, internal-link structure, search intent clarity, robots/sitemap compatibility, and the canonical host `https://www.moltyflywheel.com` before making content or URL decisions.**

**SCHEMA CONSTRAINT RULE — BUILD WILL FAIL IF VIOLATED:**
- `category` must be exactly one of: `guide` | `review` | `comparison` | `case-study` | `tutorial` — no other values
- `description` must be ≤160 characters — count every character before writing
- Always run `npm run build` before committing any blog post
- A blog task is NOT complete until build passes and git push succeeds


Skill này giúp viết bài blog/content dài chuẩn SEO + GEO theo hệ thống **Antigravity Content Framework**,
tích hợp Answer-first philosophy, tối ưu cho cả Google Search và AI-powered search engines (SGE, Perplexity, v.v.).

## Quy trình viết bài (6 bước bắt buộc)

Trước khi bắt đầu viết, thu thập đủ 5 thông tin sau:

1. **Từ khóa chính** (Primary Keyword) — cụm từ mục tiêu xếp hạng
2. **Cluster** — bài này thuộc Cluster A / B / C nào? (hoặc chủ đề tổng quát nếu không theo WP2026)
3. **Đối tượng đọc** — beginner / intermediate / advanced?
4. **CTA level** — Soft / Medium / Strong? (xem `references/cta-blocks.md`)
5. **Internal links** — 2 bài cần link tới: 1 cùng cluster, 1 khác cluster

Nếu thiếu bất kỳ thông tin nào trên, **hỏi người dùng trước khi viết**.

---

## Cấu trúc bài viết (Answer-first Template)

Luôn tuân thủ cấu trúc sau. Đọc chi tiết tại `references/blog-template.md`.

```
[H1] — Chứa từ khóa chính, dưới 65 ký tự
[INTRO] — 2-3 đoạn, nêu vấn đề + hứa hẹn giải pháp
[QUICK ANSWER BOX] ← GEO CRITICAL: Trả lời thẳng trong 2-3 câu
[PROBLEM DIAGNOSIS] — Tại sao vấn đề này tồn tại?
[MAIN FRAMEWORK] — H2/H3 theo từng bước hoặc từng khía cạnh
[CHECKLIST] — Tóm tắt hành động cụ thể (dạng checkbox)
[FAQ] — 3-5 câu hỏi + trả lời ngắn (structured data friendly)
[CTA BLOCK] — Soft / Medium / Strong (xem references/cta-blocks.md)
```

---

## Triết lý Answer-first & GEO Optimization

Đây là nguyên tắc cốt lõi. Lý do quan trọng:

- **AI search engines** (Google SGE, Perplexity, ChatGPT Search) ưu tiên trích xuất nội dung trả lời trực tiếp
- Bài viết Answer-first tăng khả năng được featured snippet và AI Overview
- Người đọc hiện đại scan nội dung — nếu không thấy câu trả lời trong 10 giây, họ bounce

**Nguyên tắc Answer-first:**
- Quick Answer Box phải trả lời được câu hỏi NGAY, không dẫn dắt dài dòng
- Mỗi H2 section nên có 1 câu tóm tắt đầu tiên trước khi đi vào chi tiết
- FAQ dùng cú pháp rõ ràng để Google có thể parse thành structured data
- Dùng ngôn ngữ plain, tránh jargon kỹ thuật trừ khi bài dành cho expert

---

## Internal Linking

Đọc chi tiết quy tắc tại `references/internal-linking-rules.md`.

**Tóm tắt nhanh:**
- Mỗi bài PHẢI có đúng **2 internal links**
- Link 1: Bài cùng cluster → đặt ở phần đầu bài (Intro hoặc Problem Diagnosis)
- Link 2: Bài khác cluster → đặt ở phần cuối bài (Checklist hoặc CTA section)
- Anchor text phải mô tả nội dung đích, không dùng "click here" hay "xem thêm"
- Tất cả link về Hub/Landing Page phải kèm UTM: `?utm_source=blog&utm_medium=internal&utm_campaign=[slug-bai-viet]`

---

## CTA Blocks

Đọc templates chi tiết tại `references/cta-blocks.md`.

Chọn level CTA phù hợp với mục tiêu bài viết:
- **Soft** — Bài informational, người đọc ở đầu funnel (Top of Funnel)
- **Medium** — Bài how-to / tutorial, người đọc đang cân nhắc giải pháp (Middle of Funnel)
- **Strong** — Bài comparison / review / offer, người đọc gần ra quyết định (Bottom of Funnel)

---

## SEO On-page Checklist

Trước khi xuất bài, tự kiểm tra:

- [ ] H1 chứa từ khóa chính, ≤65 ký tự
- [ ] Meta description 150-160 ký tự, có từ khóa + CTA nhỏ
- [ ] Quick Answer Box xuất hiện trong 300 từ đầu
- [ ] Từ khóa chính xuất hiện trong H1, đoạn đầu, ít nhất 1 H2
- [ ] Có đúng 2 internal links (1 same cluster, 1 different cluster)
- [ ] CTA block phù hợp với funnel stage
- [ ] FAQ có ít nhất 3 câu hỏi, trả lời ngắn gọn
- [ ] Checklist section có bullets/checkbox rõ ràng
- [ ] Không có đoạn nào dài hơn 150 từ liên tục (chia nhỏ để dễ scan)
- [ ] Alt text cho tất cả hình ảnh (nếu có)

---

## Định dạng đầu ra

- **Mặc định**: Markdown (`.md`) — dùng cho Astro/blog CMS
- **Nếu yêu cầu**: Docx, HTML
- **Frontmatter** (cho Astro/MDX):

```yaml
---
title: "[H1 của bài]"
description: "[Meta description 150-160 ký tự]"
pubDate: YYYY-MM-DD
keyword: "[từ khóa chính]"
cluster: "[cluster-slug]"
tags: ["tag1", "tag2"]
draft: false
---
```

---

## Tài liệu tham khảo

Đọc khi cần chi tiết sâu hơn:

- `references/blog-template.md` — Template đầy đủ với ví dụ từng section
- `references/cta-blocks.md` — 3 mẫu CTA block Soft/Medium/Strong với UTM
- `references/internal-linking-rules.md` — Quy tắc đặt link và xây dựng Topical Authority
