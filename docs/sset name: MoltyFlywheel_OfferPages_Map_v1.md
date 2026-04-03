# MoltyFlywheel_OfferPages_Map_v1

Version: v1.1  
Status: IMPLEMENTED / MAINTENANCE REFERENCE  
Owner: TVT Agency  
Project: MoltyFlywheel.com  
Last updated: 2026-04-03

## 1) Mục đích

File này dùng để khóa map cho 7 offer pages của `MoltyFlywheel.com`.

Implementation note:
- the mapped static offer pages are now live in `src/pages/offers/*.astro`
- they currently render through `src/layouts/OfferArticleLayout.astro`
- future edits should treat this file as a reference map, not as an unbuilt draft plan

Mục tiêu:
- tránh viết offer pages theo cảm tính
- đảm bảo mỗi page có vai trò riêng trong funnel
- giảm trùng lặp headline / promise / CTA
- giúp Antigravity build đồng loạt theo cùng một framework
- tạo đích chuyển đổi rõ cho hệ blog SEO và internal linking

File này không thay thế:
- copywriting final
- legal/compliance review
- page QA trước launch

---

## 2) Nguyên tắc thiết kế offer pages

### 2.1. Mỗi page chỉ có 1 job chính
Không nhồi quá nhiều promise vào cùng một page.

### 2.2. Offer page phải gắn với intent rõ
Mỗi page phải phục vụ ít nhất 1 trong 3 intent:
- problem-aware
- solution-aware
- high-intent / ready-to-compare

### 2.3. CTA phải phù hợp với độ nóng của traffic
Không dùng cùng 1 mức CTA cho mọi page.

### 2.4. Blog phải có nơi để đổ về
Mỗi offer page phải là đích đến hợp lệ cho ít nhất 1–2 cluster blog.

### 2.5. Không để 7 page nói cùng một câu bằng 7 cách khác nhau
Mỗi page phải khác nhau ở:
- angle
- audience slice
- pain focus
- CTA goal
- proof direction

---

## 3) Khung chuẩn cho mỗi offer page

Mỗi page nên có tối thiểu các block sau:
1. Hero
2. Core problem
3. Why this solution
4. What you get
5. Who this is for
6. Benefits / transformation
7. Proof / trust / rationale
8. FAQ / objections
9. CTA block
10. Related resources / internal links

---

## 4) CTA Levels

### Soft CTA
Dùng cho traffic lạnh hoặc educational intent  
Ví dụ:
- Explore programs
- Read the guide
- Compare options
- Start with the basics

### Medium CTA
Dùng cho audience đã rõ pain nhưng chưa chốt  
Ví dụ:
- Find the right program
- See matching tools
- Explore recommended path
- View best-fit options

### Strong CTA
Dùng cho page có intent cao / gần quyết định  
Ví dụ:
- Start now
- Get your best-fit recommendation
- Compare top options
- View the offer details

---

## 5) Offer pages map

## Offer Page 01
### Slug
`/offers/best-affiliate-programs-for-beginners`

### Working Title
Best Affiliate Programs for Beginners

### Funnel Role
Entry conversion page for beginner traffic

### Audience
- người mới làm affiliate
- chưa biết bắt đầu từ niche nào
- muốn chọn chương trình dễ bắt đầu, ít rủi ro

### Primary Intent
Solution-aware

### Core Pain
- quá nhiều chương trình, không biết chọn cái nào
- sợ chọn sai network / sai niche
- thiếu hướng dẫn bước đầu

### Core Promise Direction
Giúp người mới rút ngắn thời gian chọn chương trình phù hợp để bắt đầu dễ hơn.

### CTA Goal
Medium

### CTA Direction
- Explore beginner-friendly programs
- Compare beginner options
- Find your starting path

### Supporting Proof Direction
- tiêu chí chọn program cho người mới
- lý do vì sao một số program phù hợp hơn cho first-time affiliate
- clarity hơn là hype

### Internal Links In
- blog về “how to start affiliate marketing”
- blog về “common beginner mistakes”
- blog về “best niches for new affiliates”

### Internal Links Out
- `/programs`
- `/niches`
- blog cluster cho beginner affiliate

---

## Offer Page 02
### Slug
`/offers/high-ticket-affiliate-programs`

### Working Title
High-Ticket Affiliate Programs Worth Considering

### Funnel Role
Money-intent page for users muốn commission cao

### Audience
- affiliate đã có chút kinh nghiệm
- người muốn tăng commission / sale
- người đang tìm high-value offers

### Primary Intent
Commercial / high-intent

### Core Pain
- traffic có nhưng commission thấp
- đang promote nhiều nhưng thu nhập không scale
- khó phân biệt high-ticket thật vs hype

### Core Promise Direction
Giúp người đọc khám phá nhóm chương trình high-ticket có logic chọn lọc rõ hơn.

### CTA Goal
Strong

### CTA Direction
- Compare high-ticket options
- Explore top-value programs
- Find higher-commission opportunities

### Supporting Proof Direction
- cách đánh giá high-ticket offer
- rủi ro khi chỉ nhìn commission rate
- fit theo audience và funnel

### Internal Links In
- blog “high-ticket affiliate marketing”
- blog “best affiliate commissions”
- comparison posts theo niche

### Internal Links Out
- `/programs`
- `/tools`
- related comparison blog posts

---

## Offer Page 03
### Slug
`/offers/recurring-commission-affiliate-programs`

### Working Title
Recurring Commission Affiliate Programs for Long-Term Income

### Funnel Role
Retention/value-focused offer page

### Audience
- người muốn thu nhập ổn định hơn
- content creator / blogger
- affiliate quan tâm long-term revenue thay vì one-off sale

### Primary Intent
Commercial

### Core Pain
- doanh thu thất thường
- bán được nhưng không có recurring income
- khó đánh giá tính bền vững của chương trình

### Core Promise Direction
Giúp người đọc hiểu và chọn nhóm recurring programs có tiềm năng doanh thu dài hạn hơn.

### CTA Goal
Medium → Strong

### CTA Direction
- Discover recurring programs
- Compare long-term earning options
- Explore sustainable affiliate models

### Supporting Proof Direction
- recurring model hoạt động thế nào
- recurring không đồng nghĩa “dễ kiếm”
- cần fit với content + audience lifecycle

### Internal Links In
- blog về recurring affiliate programs
- blog về affiliate income models
- blog về SaaS affiliate opportunities

### Internal Links Out
- `/programs`
- `/blog`
- niche pages liên quan SaaS / software / B2B

---

## Offer Page 04
### Slug
`/offers/affiliate-programs-by-niche`

### Working Title
Affiliate Programs by Niche: Find the Right Fit Faster

### Funnel Role
Bridge page between niche research and program selection

### Audience
- người đã có niche nhưng chưa chọn program
- người đang so sánh niche để vào thị trường
- người cần route nhanh từ niche → offer

### Primary Intent
Solution-aware / commercial

### Core Pain
- biết niche rồi nhưng chưa biết chương trình nào phù hợp
- bị rời rạc giữa content research và program selection
- thiếu “map” từ niche sang offer

### Core Promise Direction
Giúp người dùng đi từ niche sang program nhanh hơn, có logic hơn.

### CTA Goal
Medium

### CTA Direction
- Find programs by niche
- Match your niche to the right offers
- Explore niche-based opportunities

### Supporting Proof Direction
- cách nối niche với demand và commission model
- mỗi niche phù hợp loại offer khác nhau

### Internal Links In
- niche pages
- blog cluster theo niche
- beginner guide về chọn niche

### Internal Links Out
- `/niches`
- `/programs`
- relevant niche pages
- relevant program list pages

---

## Offer Page 05
### Slug
`/offers/affiliate-tools-for-content-creators`

### Working Title
Affiliate Tools for Content Creators

### Funnel Role
Tool-oriented offer page for creator segment

### Audience
- blogger
- YouTuber
- niche site owner
- newsletter creator
- social content creator

### Primary Intent
Commercial

### Core Pain
- có nội dung nhưng thiếu stack công cụ hỗ trợ affiliate
- không biết tool nào thực sự giúp tăng hiệu quả
- khó kết nối content workflow với conversion workflow

### Core Promise Direction
Giúp content creators khám phá nhóm tools/support offers phù hợp để vận hành affiliate hiệu quả hơn.

### CTA Goal
Medium

### CTA Direction
- Explore creator-friendly tools
- Compare tools for affiliate growth
- Find the right content stack

### Supporting Proof Direction
- tool theo use case, không theo hype
- tool phục vụ workflow nào
- fit giữa creator model và monetization model

### Internal Links In
- tools index
- blog về SEO workflow
- blog về content systems
- blog về conversion workflow

### Internal Links Out
- `/tools`
- related blog tutorials
- high-ticket / recurring program pages nếu phù hợp

---

## Offer Page 06
### Slug
`/offers/compare-affiliate-platforms`

### Working Title
Compare Affiliate Platforms Before You Commit

### Funnel Role
Comparison / decision-stage page

### Audience
- người đang so sánh network / platform
- người chuẩn bị chọn hệ sinh thái để gắn lâu dài
- người muốn ra quyết định ít rủi ro hơn

### Primary Intent
High-intent / comparison

### Core Pain
- khó phân biệt network tốt với network chỉ marketing giỏi
- sợ commit sai platform
- thiếu tiêu chí so sánh thực tế

### Core Promise Direction
Giúp người dùng so sánh platform theo tiêu chí thực tế hơn trước khi commit.

### CTA Goal
Strong

### CTA Direction
- Compare platforms now
- Review key differences
- Choose your best-fit platform

### Supporting Proof Direction
- tiêu chí: niche fit, payout logic, support, usability, trust
- không claim tuyệt đối “best”, ưu tiên framed comparison

### Internal Links In
- comparison articles
- blog về chọn affiliate platform
- beginner pages và high-ticket pages

### Internal Links Out
- `/programs`
- `/tools`
- blog comparison cluster

---

## Offer Page 07
### Slug
`/offers/find-your-best-affiliate-fit`

### Working Title
Find Your Best Affiliate Fit

### Funnel Role
Catch-all guided decision page

### Audience
- người chưa biết nên vào niche nào
- chưa biết chọn program, tool, hay model nào
- cần một trang điều hướng thông minh

### Primary Intent
Problem-aware → solution-aware

### Core Pain
- rối giữa quá nhiều lựa chọn
- không biết bắt đầu ở niche, platform, hay offer
- cần một điểm bắt đầu đơn giản

### Core Promise Direction
Giúp người đọc tự định hướng nhanh hơn để chọn con đường affiliate phù hợp.

### CTA Goal
Medium

### CTA Direction
- Find your best-fit path
- Explore your options
- Start with the right direction

### Supporting Proof Direction
- decision helper page
- gợi lộ trình theo experience level / niche / content style
- đóng vai trò router hơn là hard-sell page

### Internal Links In
- homepage
- beginner blogs
- tools page
- niches page

### Internal Links Out
- `/programs`
- `/niches`
- `/tools`
- 6 offer pages còn lại

---

## 6) Map theo funnel logic

| Offer Page | Funnel Stage | Traffic Type | CTA Strength | Vai trò |
|-----------|--------------|--------------|--------------|--------|
| best-affiliate-programs-for-beginners | Entry | Cold / early | Medium | Chuyển beginner traffic thành exploration |
| high-ticket-affiliate-programs | Decision | Warm / commercial | Strong | Money-intent page |
| recurring-commission-affiliate-programs | Consideration | Warm | Medium-Strong | Long-term income angle |
| affiliate-programs-by-niche | Mid-funnel | Mixed | Medium | Cầu nối niche → program |
| affiliate-tools-for-content-creators | Mid-funnel | Creator / workflow | Medium | Tool + creator angle |
| compare-affiliate-platforms | Decision | High-intent | Strong | Comparison stage |
| find-your-best-affiliate-fit | Router | Cold / mixed | Medium | Điều hướng người dùng chưa rõ nhu cầu |

---

## 7) Headline direction rules

### Không dùng headline kiểu:
- Best ever
- Guaranteed success
- Make money fast
- No effort needed
- Passive income instantly

### Ưu tiên headline kiểu:
- clarity-first
- fit-first
- comparison-first
- decision-support
- long-term value
- practical selection guidance

---

## 8) Internal linking rules cho offer pages

### Mỗi offer page phải có:
- 2–4 link ra blog liên quan
- 1–2 link sang `/programs`
- 1–2 link sang `/niches` hoặc `/tools` nếu phù hợp
- related offers block nếu user chưa đúng fit

### Mỗi offer page nên nhận link từ:
- ít nhất 1 bài top-of-funnel
- ít nhất 1 bài mid-funnel
- ít nhất 1 page index hoặc hub page

---

## 9) Notes cho Antigravity khi build

### Layout
- dùng layout nhất quán với offer page hiện có
- giữ pattern section tương tự để site đồng bộ

### Copy
- không hard sell quá đà
- không overclaim
- viết theo kiểu decision-support, practical, usable

### CTA
- không dùng cùng một CTA sentence cho tất cả pages
- phải khớp với traffic temperature

### SEO
- slug rõ
- H1 rõ
- meta description định hướng intent
- tránh cannibalization giữa 7 page

### Routing
- page nào có overlap mạnh phải có related links để chuyển hướng mềm
- `find-your-best-affiliate-fit` đóng vai trò router page

---

## 10) Definition of Done

Map này được xem là hoàn tất khi:
- đủ 7 page còn thiếu
- mỗi page có slug riêng
- mỗi page có audience riêng
- mỗi page có angle riêng
- mỗi page có CTA goal riêng
- có internal link direction vào/ra
- Antigravity có thể build page mà không cần đoán logic funnel

---

## 11) Next sync assets

- `/moltyflywheel.com/docs/MoltyFlywheel_BlogCluster_Map_v1.md`
- `/moltyflywheel.com/docs/MoltyFlywheel_InternalLinking_Map_v1.md`
- `/moltyflywheel.com/docs/MoltyFlywheel_Offer_Copy_Framework_v1.md`

---

## 12) Kết luận

7 offer pages còn thiếu không phải 7 trang “viết thêm cho đủ”.

Chúng là 7 điểm chốt khác nhau trong funnel:
- page cho beginner
- page cho high-ticket intent
- page cho recurring-income intent
- page nối niche với program
- page cho content creator tool-stack
- page comparison platform
- page router cho người chưa rõ hướng

Nếu build đúng, đây sẽ là conversion layer để 9 bài blog còn thiếu có nơi đổ traffic về đúng chỗ.
