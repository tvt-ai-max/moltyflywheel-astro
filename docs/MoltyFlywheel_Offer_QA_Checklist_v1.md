# MoltyFlywheel_Offer_QA_Checklist_v1

Version: v1.1  
Status: ACTIVE INTERNAL QA CHECKLIST  
Owner: TVT Agency  
Project: MoltyFlywheel.com  
Last updated: 2026-04-03

## 1) Mục đích

File này là checklist review nhanh cho các offer pages của `MoltyFlywheel.com` trước khi publish.

Current implementation context:
- static offer pages now live under `src/pages/offers/*.astro`
- static offer pages use `src/layouts/OfferArticleLayout.astro`
- content-driven offer pages use `src/pages/p/[offer].astro`
- copy source of truth lives in `docs/MoltyFlywheel_Offer_Copy_Framework_v1.md`
- execution template lives in `src/content/_engine/offer-page-template-v1.md`

Mục tiêu:
- phát hiện lỗi copy, CTA, SEO, intent-fit, internal link trước khi lên live
- giảm tình trạng page viết “có vẻ ổn” nhưng không phục vụ đúng funnel
- giữ consistency giữa 7 offer pages
- chặn overclaim, vague promise, và CTA sai nhiệt độ traffic

File này không thay thế:
- build test
- render QA
- route QA
- legal/compliance review cuối nếu có claim nhạy cảm

---

## 2) Cách dùng

Mỗi offer page phải được review qua 2 lớp:

### Lớp 1 — Quick Pass
Dùng checklist này để đánh dấu:
- Pass
- Warn
- Fail

### Lớp 2 — Fix Pass
Nếu có mục Fail hoặc quá nhiều Warn:
- sửa page
- review lại
- chỉ publish khi không còn lỗi nghiêm trọng

---

## 3) Thang đánh giá

### PASS
- đạt yêu cầu
- không cần sửa hoặc chỉ cần polish nhẹ

### WARN
- dùng được nhưng còn lệch
- nên sửa trước publish nếu còn thời gian

### FAIL
- lỗi ảnh hưởng intent, CTA, clarity, SEO, hoặc trust
- không nên publish

---

## 4) Thông tin review cơ bản

### Page reviewed
- Slug:
- Title/H1:
- Reviewer:
- Date:
- Build status:
- Related offer cluster:
- CTA level target: Soft / Medium / Strong

---

## 5) Checklist QA chính

## A. Intent-Fit QA

### A1. Page có một vai trò rõ trong funnel không?
- Có đang rõ đây là beginner page / comparison page / recurring page / router page / creator tools page không?
- Có bị nói quá nhiều thứ cùng lúc không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### A2. Page có đúng audience slice đã định nghĩa không?
- Đọc hero + opening có thấy rõ dành cho ai không?
- Có bị generic quá mức không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### A3. Core pain có rõ và đúng không?
- Pain có thực tế không?
- Có nói đúng nỗi rối / lựa chọn / so sánh của audience không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### A4. Promise direction có hữu ích nhưng không overclaim không?
- Có thiên về decision support thay vì “kiếm tiền nhanh” không?
- Có hứa hẹn quá mức không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

---

## B. Hero QA

### B1. H1 có rõ category/decision angle không?
- Người đọc vào có hiểu page nói về cái gì ngay không?
- H1 có cụ thể hơn là chung chung không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### B2. Subheadline có giúp làm rõ pain + value không?
- Có nói vì sao nên xem tiếp không?
- Có practical không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### B3. Hero CTA có đúng mức nhiệt traffic không?
- Beginner/router page: không quá hard-sell
- Comparison/high-intent page: không quá nhạt

Rating:
- Pass / Warn / Fail

Notes:
- ...

### B4. Hero có tránh hype language không?
Kiểm tra các kiểu wording sau:
- guaranteed
- easiest
- fastest
- best ever
- make money fast
- passive income instantly

Rating:
- Pass / Warn / Fail

Notes:
- ...

---

## C. Structure QA

### C1. Page có đủ các block cốt lõi không?
Tối thiểu nên có:
- Hero
- Problem / confusion
- Good fit criteria
- What you’ll find here
- Who this is for
- Benefits / decision value
- Comparison / guidance block
- Trust / rationale
- FAQ
- CTA
- Related resources

Rating:
- Pass / Warn / Fail

Notes:
- ...

### C2. Section order có logic không?
- Có flow từ clarity → guidance → decision → CTA không?
- Có section nào đặt sai làm page khó đọc không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### C3. Có section nào dài, loãng, lặp ý không?
- Có đoạn nào giống blog hơn là offer page không?
- Có đoạn nào nên cắt bớt không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

---

## D. Copy Quality QA

### D1. Copy có rõ, practical, usable không?
- Có nói thẳng, dễ hiểu không?
- Có tránh jargon hoặc “AI-sounding” không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### D2. Copy có quá generic không?
- Có thể áp cho bất kỳ site nào khác không?
- Có đủ specificity theo angle page không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### D3. Copy có bị lặp wording với page khác không?
- Hero có trùng khung câu quá nhiều không?
- CTA có bị copy/paste giữa các page không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### D4. Benefit block có thực tế không?
- Benefit có nói về clarity, fit, decision quality, workflow, comparison không?
- Có tránh miracle/outcome claim không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

---

## E. CTA QA

### E1. CTA level có đúng theo map không?
- Soft / Medium / Strong có khớp với page role không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### E2. CTA text có rõ next step không?
- Sau khi bấm thì user kỳ vọng làm gì?
- CTA có actionable không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### E3. CTA có bị hard-sell quá mức không?
- Có đẩy user quá sớm không?
- Có dùng false urgency không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### E4. CTA block có secondary path hợp lý không?
- Ngoài primary CTA, có link phụ sang resource phù hợp không nếu user chưa sẵn sàng?

Rating:
- Pass / Warn / Fail

Notes:
- ...

---

## F. Comparison / Guidance QA

### F1. Page có thực sự giúp người đọc ra quyết định tốt hơn không?
- Có đưa tiêu chí chọn / so sánh / phân luồng không?
- Hay chỉ là “giới thiệu hay ho” chung chung?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### F2. Comparison/guidance block có đúng format phù hợp không?
- Comparison page: comparison grid
- Router/beginner page: path selector
- Creator/tools page: use-case segmentation

Rating:
- Pass / Warn / Fail

Notes:
- ...

### F3. Các tiêu chí so sánh có hữu ích không?
Ví dụ:
- niche fit
- audience fit
- monetization fit
- workflow fit
- ease of getting started
- long-term viability

Rating:
- Pass / Warn / Fail

Notes:
- ...

---

## G. FAQ / Objection QA

### G1. FAQ có giải quyết objection thật không?
- Người đọc có thể đang hỏi những câu này thật không?
- Hay FAQ chỉ đang lặp lại copy của page?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### G2. FAQ có practical và ngắn gọn không?
- Câu trả lời có 2–4 câu rõ nghĩa không?
- Có tránh lan man không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### G3. FAQ có chặn overclaim tốt không?
- Có nhắc fit matters more than hype không khi cần?
- Có làm rõ trade-off không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

---

## H. SEO QA

### H1. Slug có rõ, sạch, đúng intent không?
- Ngắn, dễ hiểu, không keyword stuffing
- Không trùng / quá giống page khác

Rating:
- Pass / Warn / Fail

Notes:
- ...

### H2. Meta description có usable không?
- Có nói rõ page giúp ai, giúp gì
- Có practical tone
- Không hứa hẹn tài chính quá đà

Rating:
- Pass / Warn / Fail

Notes:
- ...

### H3. H1 / title / meta có cannibalize với page khác không?
- Có 2 page cùng target gần như một intent không?
- Có cần đổi angle để tách rõ hơn không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### H4. Heading structure có rõ không?
- H2/H3 có hỗ trợ skimmability không?
- Không bị nhảy cấp vô lý

Rating:
- Pass / Warn / Fail

Notes:
- ...

---

## I. Internal Linking QA

### I1. Page có đủ internal links điều hướng không?
Tối thiểu nên có:
- `/programs`
- `/niches` hoặc `/tools`
- 2–4 related blog links
- 1–3 related offer links nếu hợp lý

Rating:
- Pass / Warn / Fail

Notes:
- ...

### I2. Internal links có đúng context không?
- Link có đặt ở đoạn hợp lý không?
- Anchor có tự nhiên không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### I3. Page có đóng vai trò đích CTA cho blog tốt không?
- Nếu blog trỏ về đây, người đọc có hiểu ngay tại sao họ đến đây không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

---

## J. Anti-Overclaim QA

### J1. Có claim nào quá mức không?
Kiểm tra các dạng:
- guaranteed results
- income promise
- easiest / fastest without context
- universal “best”
- certainty phrasing without framing

Rating:
- Pass / Warn / Fail

Notes:
- ...

### J2. Có “best” thì có framed đúng không?
- Có nói rõ “worth considering”, “compare”, “fit”, “practical criteria” không?
- Hay dùng như absolute claim?

Rating:
- Pass / Warn / Fail

Notes:
- ...

### J3. Page có trung thực về trade-off không?
- Có thừa nhận mỗi option có fit và trade-off khác nhau không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

---

## K. UX / Readability QA

### K1. Page có dễ scan không?
- đoạn văn không quá dày
- bullets hợp lý
- subheadings rõ

Rating:
- Pass / Warn / Fail

Notes:
- ...

### K2. CTA có xuất hiện đúng lúc không?
- không quá sớm
- không quá muộn
- không bị chìm

Rating:
- Pass / Warn / Fail

Notes:
- ...

### K3. Related resources block có hữu ích không?
- Có giúp người dùng đi tiếp nếu page chưa đúng fit không?

Rating:
- Pass / Warn / Fail

Notes:
- ...

---

## 6) Quick scoring

### Pass count:
- ...

### Warn count:
- ...

### Fail count:
- ...

### Kết luận:
- Publish-ready
- Fix minor issues
- Hold for revision

---

## 7) Red flags phải hold ngay

Nếu gặp 1 trong các lỗi sau, page phải HOLD:

- H1 mơ hồ, không rõ page nói về cái gì
- CTA sai nhiệt độ traffic
- copy hype hoặc overclaim rõ
- thiếu comparison/guidance logic
- internal links thiếu hoặc sai context
- slug/meta dễ cannibalize page khác
- page quá generic, không có angle riêng
- FAQ chỉ lặp lại nội dung, không gỡ objection thật

---

## 8) Quick pass checklist 30 giây

Dùng khi cần review cực nhanh:

- H1 có rõ không?
- Audience có rõ không?
- Pain có đúng không?
- CTA có đúng mức nhiệt không?
- Có guidance/comparison logic không?
- Có overclaim không?
- Có internal links đủ chưa?
- Có meta/slugs sạch chưa?

Nếu có từ 2 câu “không” trở lên:
- không publish

---

## 9) Definition of Done

Một offer page được xem là QA-pass khi:

- role trong funnel rõ
- audience rõ
- hero rõ
- CTA đúng nhiệt độ
- copy practical, không hype
- guidance/comparison block hữu ích
- FAQ xử lý objection thật
- SEO cơ bản sạch
- internal links đủ
- không có red flag overclaim hoặc cannibalization nghiêm trọng

---

## 10) Kết luận

Offer page tốt không chỉ là “viết hay”.

Nó phải:
- đúng người
- đúng intent
- đúng CTA
- đúng vai trò trong funnel
- và đủ rõ để blog traffic đổ về không bị hụt ý nghĩa

Checklist này dùng để chặn lỗi trước publish, không để 7 offer pages lên live trong trạng thái “trông có vẻ ổn” nhưng thực ra chưa đúng việc.
