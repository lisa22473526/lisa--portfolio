# Lisa Huang Portfolio Design System

網站共用視覺 Token 定義於 `app/globals.css` 的 `:root`。新增頁面或元件時，優先使用 Token，不直接寫入重複色碼、字體堆疊、圓角或動畫曲線。

## Typography

| Token | 用途 |
| --- | --- |
| `--font-display` | 大標題、Logo、作品標題 |
| `--font-body` | 中文與英文內文、選單、標籤 |
| `--font-serif` | Editorial 斜體標題 |
| `--font-editorial` | Hero `next.` 特殊字樣 |
| `--text-body` | 一般介紹與說明文字，固定 `14px` |
| `--leading-body` | 一般內文行高，固定 `1.55` |

### Font Size Scale

| 層級 | Desktop | Mobile | 用途 |
| --- | --- | --- | --- |
| Hero display | `64–145px` | `34–68px` | `DESIGN`、`PRODUCT / IDEAS → REAL` |
| Section display | `58–124px` | `58–70px` | Products、Beyond the canvas、Core Value、Skills、Footer |
| Work card title | `25–38px` | `31–34px` | 首頁兩張精選作品名稱 |
| Hero statement | `32–48px` | `25–32px` | Designing what’s next |
| Specialism | `30–44px` | `16–20px` | B2B · B2C、0–1 Product |
| Value title | `24px` | `24px` | Core Value 卡片標題 |
| Navigation | `13px` | `10px` | 桌面與手機導覽 |
| Body | `14px` | `14px` | 介紹、成果、描述、價值說明 |
| Label | `10–12px` | `9–12px` | Section label、編號、輔助資訊 |

字體大小若使用 `clamp()`，表格中的數值代表目前設計允許的最小與最大範圍。

## Core Colors

| Token | 用途 |
| --- | --- |
| `--color-accent` | 系統螢光黃綠、CTA、進度條、重點文字 |
| `--color-bg` | 全站主要黑色背景 |
| `--color-bg-soft` | Work 與案例頁柔黑背景 |
| `--color-surface-light` | 作品區淺色背景 |
| `--color-text` | 主要白色文字 |
| `--color-text-soft` | 次要說明文字 |
| `--color-text-muted` | 版權與弱化資訊 |
| `--color-ink` | 淺色背景上的主要黑色文字 |
| `--color-ink-soft` | 淺色背景上的次要黑色文字 |
| `--color-line` | 深色背景上的主要分隔線 |
| `--color-line-soft` | 深色背景上的弱分隔線 |

### Color Palette

| 色彩 | Token | 色碼 | 用途 |
| --- | --- | --- | --- |
| Fluorescent Lime | `--color-accent` | `#E8FF47` | 品牌重點色、CTA、Hover、進度條 |
| Black | `--color-bg` | `#000000` | 首頁與主要深色背景 |
| Soft Black | `--color-bg-soft` | `#050505` | Work 與案例頁背景 |
| Dark Surface | `--color-surface-dark` | `#171717` | 深色內容區塊與方法區背景 |
| Off White | `--color-surface-light` | `#F4F4F2` | 首頁作品展示區背景 |
| White | `--color-text` | `#FFFFFF` | 深色背景主要文字 |
| Soft White | `--color-text-soft` | `#DCDCDC` | 深色背景介紹與說明文字 |
| Muted Gray | `--color-text-muted` | `#999999` | 版權、弱化資訊 |
| Ink | `--color-ink` | `#000000` | 淺色背景主要文字 |
| Soft Ink | `--color-ink-soft` | `#111111` | 淺色背景次要文字 |
| Live Surface | `--color-project-live` | `#F3F0FA` | Live entertainment 作品圖片底色 |
| System Surface | `--color-project-system` | `#FFEBC9` | B2B Design System 作品圖片底色 |

### Opacity Colors

| Token | 色值 | 用途 |
| --- | --- | --- |
| `--color-line` | `rgba(255,255,255,.45)` | 深色背景主要分隔線 |
| `--color-line-soft` | `rgba(255,255,255,.20)` | 圖片框線與弱分隔線 |
| `--color-line-dark` | `rgba(0,0,0,.35)` | 淺色背景分隔線 |
| `--color-nav-bg` | `rgba(0,0,0,.82)` | Sticky Nav 玻璃黑背景 |

## Project Colors

- `--color-project-live`：Live entertainment project image surface。
- `--color-project-system`：B2B design system image surface。
- Case Study 使用頁面層級的 `--case-accent`、`--case-accent-text`、`--case-bg`、`--case-surface`，避免影響全站品牌色。
- Work 頁使用 `--work-accent`、`--work-bg`、`--work-text` 作為語意別名。

### Live Entertainment Case Theme

| Token | 色碼 |
| --- | --- |
| `--case-accent` | `#8B6CFF` |
| `--case-accent-text` | `#9A80FF` |
| `--case-bg` | `#08070D` |
| `--case-surface` | `#EEE9FF` |

## Shape & Motion

| Token | 用途 |
| --- | --- |
| `--radius-pill` | CTA、標籤、進度條的膠囊圓角 |
| `--ease-out` | 主要進場與展開動畫曲線 |
| `--motion-fast` | Hover 與小型回饋 |
| `--motion-medium` | 選單、標籤展開 |
| `--motion-slow` | 進度條與大型元件動畫 |

## Usage Rules

1. 一般介紹、成果與描述文字固定使用 `var(--text-body)`。
2. 品牌黃綠色統一使用 `var(--color-accent)`。
3. 新增膠囊元件時使用 `var(--radius-pill)`。
4. 專案主題色先建立頁面層級語意變數，不直接覆蓋全域品牌色。
5. 動畫必須提供 `prefers-reduced-motion` 對應樣式。
