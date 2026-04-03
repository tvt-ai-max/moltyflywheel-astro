# MoltyFlywheel_Launch_Priority_Plan_v1

Version: v1.0  
Status: DRAFT FOR EXECUTION  
Owner: TVT Agency  
Project: MoltyFlywheel.com  
Last updated: 2026-03-30

## 1) Mục tiêu asset

File này khóa thứ tự triển khai launch cho `MoltyFlywheel.com`.

Mục tiêu:
- tránh làm việc theo cảm tính
- xử lý đúng bottleneck trước launch
- ưu tiên dependency thật thay vì ưu tiên theo cảm giác
- đảm bảo content, conversion, deploy, và QA đi theo đúng trình tự

File này không thay thế:
- build log
- deployment checklist
- content brief chi tiết
- QA checklist cuối trước launch

---

## 2) Snapshot hiện tại

### Đã hoàn thành tương đối tốt
- Homepage: đầy đủ 10 sections
- Programs: 10/10
- Niches: 6/6
- Core pages: about, contact, blog, tools, v.v.
- Layouts & components nền:
  - BaseLayout
  - OfferLayout
  - Header
  - Footer
  - SEO
- GitHub Actions CI/CD (`.github/workflows/deploy.yml`)

### Còn thiếu / chưa khóa
- 9 bài blog còn thiếu
- 7 offer pages còn thiếu
- GitHub Actions run status (Build pass, nhưng Deploy fail do Authentication error 10000)
- GitHub Actions secrets config (Cần user check lại CLOUDFLARE_API_TOKEN & CLOUDFLARE_ACCOUNT_ID)
- `public/robots.txt`
- `public/assets/og-default.png`
- `src/pages/tools/[skill].astro`

### Nhận định nhanh
Khung site gần xong.  
Bottleneck launch không còn nằm ở homepage hay base pages.

Bottleneck thật đang nằm ở:
1. build stability
2. deploy readiness
3. conversion layer
4. SEO support layer
5. prelaunch technical hygiene

---

## 3) Nguyên tắc ưu tiên

### 3.1. Dependency trước volume
Không mở rộng thêm nhiều content nếu build chưa ổn.

### 3.2. Conversion trước SEO expansion
Không đẩy mạnh blog nếu offer pages chưa đủ.

### 3.3. Launch readiness trước cleanup
CI/CD, build pass, robots, OG image quan trọng hơn refactor đẹp code.

### 3.4. Asset phải nối được với nhau
Blog phải internal link về offer pages.  
Offer pages phải là đích CTA cho blog.  
Deploy phải chạy được trước khi chốt launch.

---

## 4) Launch order chuẩn

Thứ tự thực thi chuẩn:

1. Build validation
2. CI/CD deploy setup
3. Offer pages còn thiếu
4. Blog posts còn thiếu
5. Prelaunch SEO/UX patches
6. Post-launch cleanup / refactor

---

## 5) Bảng ưu tiên triển khai

| Priority | Task | Vì sao ưu tiên | Dependency | Definition of Done |
|---------|------|----------------|-----------|--------------------|
| P0 | Chạy build test + fix lỗi | Xác nhận site chạy được trước khi đổ thêm asset | Repo hiện tại | DONE (Build passes on GitHub) |
| P0 | Tạo GitHub Actions CI/CD cho Cloudflare Pages | Khóa đường deploy ổn định, tránh deploy tay | Build logic cơ bản rõ | DONE (Workflow fixed to Node 22) |
| P0 | Kiểm tra Cloudflare secrets | Đảm bảo CI/CD thực sự hoạt động trên GitHub | Đã có workflow file | Workflow chạy pass, secrets được cấu hình đúng |
| P1 | Tạo 7 offer pages còn thiếu | Đây là money pages, khóa conversion layer | Build ổn, site structure rõ | Đủ 7 page, đúng layout, có CTA, có chỗ nhận internal links từ blog |
| P1 | Viết 9 bài blog còn thiếu | Bổ sung traffic + SEO support sau khi đã có đích conversion | Offer pages đã có | Đủ 9 bài, dùng `seo-writer/`, có CTA và internal links hợp lý |
| P2 | Tạo `public/robots.txt` | Tối thiểu cho crawl/index control | Site structure rõ | File tồn tại, rule hợp lý cho public site |
| P2 | Tạo `public/assets/og-default.png` | Cải thiện share preview và brand consistency | Có asset direction | Ảnh đúng kích thước cơ bản, dùng được làm default OG |
| P2 | Tạo `src/pages/tools/[skill].astro` | Lấp khoảng trống UX/SEO cho tools detail | Tools index đã có | Route hoạt động, render được detail page theo skill |
| P3 | Tách reusable UI components | Giảm trùng lặp code | Sau launch hoặc khi có thời gian | Tách component an toàn, không phá giao diện |
| P3 | Tạo `BlogLayout.astro` | Chuẩn hóa template blog | Blog inventory đã đủ | Có layout riêng, blog dùng được ổn định |
| P3 | Tạo `src/data/nav.json` | Chuẩn hóa nav data | Sau khi IA đã ổn | Nav data được externalize, không phá flow hiện tại |

---

## 6) Kế hoạch thực thi theo phase

## Phase 1 — Build Stability

### Mục tiêu
Xác nhận project có thể build sạch và biết rõ blocker thực tế.

### Việc cần làm
- chạy `npm run build`
- ghi lại lỗi blocking
- fix lỗi theo thứ tự:
  - import lỗi
  - frontmatter lỗi
  - missing routes
  - broken collection/data issues
  - build config issues

### Output bắt buộc
- build status summary
- issue log
- danh sách file đã sửa

### Done khi
- build pass
- không còn lỗi blocking
- có ghi chú rõ nếu còn warning chấp nhận tạm

---

## Phase 2 — Deployment Readiness

### Mục tiêu
Khóa khả năng deploy có thể lặp lại được.

### Việc cần làm
- tạo `.github/workflows/deploy.yml`
- cấu hình theo Astro + Cloudflare Pages
- ghi rõ:
  - branch trigger
  - build command
  - output directory
  - secrets/env assumptions
- tránh hard-code thông tin nhạy cảm

### Output bắt buộc
- workflow file
- deployment note ngắn
- assumptions list

### Done khi
- file workflow hợp lệ
- logic deploy rõ
- team biết cần secret gì để bật

---

## Phase 3 — Conversion Layer Completion

### Mục tiêu
Bổ sung đủ offer pages để site có khả năng chuyển đổi tốt hơn.

### Việc cần làm
- xác định 7 offer pages còn thiếu
- map từng page với:
  - audience
  - offer angle
  - CTA goal
  - internal links in/out
- dùng layout nhất quán
- tránh trùng lặp headline / CTA / promise giữa các pages

### Output bắt buộc
- 7 offer pages hoàn chỉnh
- slug rõ
- CTA rõ
- internal linking opportunity rõ

### Done khi
- đủ 7 page
- render đúng
- có thể làm đích cho blog CTA/internal links

---

## Phase 4 — SEO Support Layer Completion

### Mục tiêu
Điền đủ blog inventory để hỗ trợ SEO và đẩy traffic về offer pages.

### Rule bắt buộc
Phải dùng local skill pack:
- `seo-writer/SKILL.md`
- `seo-writer/references/blog-template.md`
- `seo-writer/references/cta-blocks.md`
- `seo-writer/references/internal-linking-rules.md`

### Việc cần làm
- xác định 9 topic còn thiếu
- map mỗi bài với:
  - primary keyword
  - intent
  - target offer page
  - CTA level
  - internal links 2 chiều
- viết theo answer-first / practical format
- không viết generic mode

### Output bắt buộc
- 9 bài blog
- slug đề xuất
- meta description
- internal linking notes

### Done khi
- đủ 9 bài
- mỗi bài có CTA phù hợp
- mỗi bài nối được với offer pages liên quan

---

## Phase 5 — Prelaunch Technical / SEO Hygiene

### Mục tiêu
Vá các hạng mục nhỏ nhưng ảnh hưởng launch readiness.

### Việc cần làm
- tạo `public/robots.txt`
- tạo `public/assets/og-default.png`
- tạo `src/pages/tools/[skill].astro`

### Output bắt buộc
- 3 hạng mục tồn tại và dùng được

### Done khi
- route tools detail hoạt động
- robots usable
- OG default usable

---

## Phase 6 — Post-launch Cleanup

### Mục tiêu
Refactor sau khi launch core flow đã ổn.

### Việc cần làm
- tách reusable UI components
- tạo `BlogLayout.astro`
- tạo `src/data/nav.json`

### Rule
Không ưu tiên trước launch trừ khi đang chặn tốc độ build hoặc chặn page creation.

---

## 7) Decision matrix

| Nếu xảy ra | Quyết định |
|-----------|------------|
| Build fail | Dừng content expansion, fix build trước |
| CI/CD chưa có | Không xem là launch-ready |
| Offer pages chưa đủ | Không ưu tiên blog trước |
| Blog chưa đủ nhưng offer đã xong | Viết blog theo cluster + internal link plan |
| Robots/OG chưa có | Vẫn có thể test nội bộ, chưa nên coi là prelaunch complete |
| Refactor đẹp code nhưng không giúp launch | Đẩy xuống sau launch |

---

## 8) Definition of Done cho launch-ready bản đầu

MoltyFlywheel.com được xem là đủ điều kiện launch v1 khi đạt đủ:

- build pass
- có CI/CD workflow cơ bản
- đủ 8/8 offer pages
- đủ 15/15 blog posts mục tiêu
- có `robots.txt`
- có default OG image
- có tools detail route cơ bản
- CTA và internal links giữa blog ↔ offer pages đã được map tối thiểu
- không có blocker nghiêm trọng ở navigation, rendering, hoặc broken pages

---

## 9) Working rules cho AI agents

### Antigravity
- ưu tiên làm theo dependency order
- không nhảy sang blog expansion nếu build chưa ổn
- với blog tasks phải đọc local `seo-writer/` trước
- phải log blocker rõ, không tự bỏ qua blocker

### ChatGPT / Strategic layer
- dùng để chốt order, brief, governance, content architecture
- không thay cho build validation thực tế trong repo

---

## 10) Deliverables bắt buộc theo từng chặng

### Sau Phase 1
- `build-validation-summary.md`

### Sau Phase 2
- `.github/workflows/deploy.yml`
- `deploy-assumptions.md`

### Sau Phase 3
- 7 file offer pages
- `offer-pages-map.md`

### Sau Phase 4
- 9 file blog
- `blog-internal-link-map.md`

### Sau Phase 5
- `public/robots.txt`
- `public/assets/og-default.png`
- `src/pages/tools/[skill].astro`

---

## 11) Không được làm

- Không viết tiếp 9 blog trước khi biết build có pass hay không
- Không launch khi chưa có deploy path rõ
- Không để blog CTA trỏ mơ hồ khi offer pages chưa hoàn tất
- Không ưu tiên refactor đẹp code trước launch blockers
- Không viết blog bằng generic writing mode nếu local `seo-writer/` đã được khóa làm workflow mặc định

---

## 12) Next action

Thứ tự hành động ngay bây giờ:

1. fix Node version in `.github/workflows/deploy.yml` (DONE - Build passes)
2. verify GitHub Actions run status (DONE - Build OK, Deploy needs Secrets)
3. verify Cloudflare secrets in GitHub (WAITING - Error 10000)
4. xác định và tạo 7 offer pages còn thiếu
5. viết 9 blog còn thiếu bằng `seo-writer/`
6. vá robots / OG / tools detail route

---

## 13) Kết luận

MoltyFlywheel.com không còn ở giai đoạn “thiếu website”.

Dự án đang ở giai đoạn:
- khóa khả năng chạy
- khóa khả năng deploy
- khóa conversion layer
- rồi mới mở rộng SEO layer

Ưu tiên đúng lúc này là:
**Build → Deploy → Offer Pages → Blog → Prelaunch patches → Cleanup**

Không phải:
**Blog trước rồi tính sau**.