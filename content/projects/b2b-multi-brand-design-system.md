---
title: "B2B Multi-Brand Design System"
slug: "b2b-multi-brand-design-system"
projectNumber: "02"
projectType: "Design System"
category: "B2B"
coverImage: "/projects/b2b-multi-brand-design-system-v2.webp"
coverAlt: "B2B multi-brand design system project overview"
featured: true
status: "draft"
---

# B2B Multi-Brand Design System

## 專案摘要

從零建立可延展的 B2B Multi-Brand Design System，將品牌色彩、設計規則與介面元件系統化，打造廠商客製一鍵換色機制，同時提升設計與開發協作效率。

## 專案成果

- 建立從 0 到 1 的 Design System 與使用規範。
- 打造廠商品牌客製的一鍵換色機制。
- 統一跨品牌產品體驗。
- 降低設計 Handoff 與前端維護成本。

> 待補：實際節省工時、元件覆蓋率與採用團隊數量。

## 專案資訊

| 欄位 | 內容 |
| --- | --- |
| 產品類型 | B2B Platform / Multi-Brand Product |
| 我的角色 | Design System Lead / Product Designer |
| 負責範圍 | Audit、Foundation、Design Token、Component、Governance、Handoff |
| 合作對象 | Product、Engineering、品牌或營運團隊（待確認） |
| 使用工具 | Figma、前端技術與文件工具（待補） |

## 背景與挑戰

B2B 產品需要服務不同廠商與品牌。若每個品牌都以獨立樣式與元件開發，不僅容易造成體驗不一致，也會增加設計、開發及後續維護成本。

### 核心問題

- 不同品牌具有各自的顏色與視覺需求。
- 重複建立相似元件造成設計與開發成本增加。
- 缺乏一致命名、元件狀態與使用規範。
- 設計稿與實際產品之間容易出現落差。

> 待補：系統建立前的產品數量、元件數量與主要維護痛點。

## 專案目標

1. 建立可支援多品牌的共用設計基礎。
2. 讓品牌切換不需要重新製作整套 UI。
3. 提升設計與前端交付的一致性。
4. 建立能持續維護與擴充的治理方式。

## 系統架構

### 01. Foundations

- Color
- Typography
- Spacing
- Radius
- Elevation
- Iconography

### 02. Design Tokens

- Primitive tokens：定義原始色彩與尺寸值。
- Semantic tokens：依用途命名，例如背景、文字、邊框與互動狀態。
- Component tokens：處理特定元件的細部樣式。
- Brand themes：讓不同品牌對應至相同語意層。

### 03. Components

- 基礎元件與所有必要狀態。
- 組合型元件與常見產品模式。
- 元件規格、使用情境與限制。
- Figma 與前端元件的命名對應。

### 04. Governance

- 新增與修改元件的流程。
- 設計與工程 Review 機制。
- 版本管理與更新說明。
- 使用回饋與問題追蹤方式。

## 設計流程

### Audit — 盤點既有介面

- 蒐集跨產品、跨品牌的畫面與元件。
- 找出重複、不一致與難以維護的模式。
- 依使用頻率與影響範圍設定優先順序。

### Foundation — 建立共用語言

- 統一色彩、文字、間距與元件命名。
- 將視覺數值轉換成有語意的 Token。
- 定義跨品牌皆可沿用的產品結構。

### Scale — 支援多品牌

- 將品牌差異集中於 Theme 與 Token 層。
- 元件只讀取語意 Token，不綁定特定品牌色。
- 透過更換 Theme 達成品牌一鍵換色。

### Adoption — 推動落地

- 與工程端確認 Token 與元件架構。
- 建立文件、範例與使用規則。
- 透過實際產品逐步驗證與補齊元件。

## 關鍵設計決策

### 將品牌與元件邏輯分離

元件結構維持一致，品牌差異交由 Token 管理。這讓系統能在不重製元件的情況下快速切換不同品牌外觀。

### 使用語意命名取代色票命名

以 `text-primary`、`surface-brand` 等用途導向名稱取代特定色彩名稱，降低品牌切換與後續維護的複雜度。

### 規範不只描述外觀

除了視覺規格，也定義元件行為、狀態、使用時機與禁止用法，讓跨團隊合作有清楚的判斷依據。

## 成果與影響

設計系統讓多品牌產品共享相同的介面基礎，並透過一鍵換色機制回應廠商客製需求。設計與工程團隊可以重用既有元件，將時間投入真正需要解決的產品問題。

### 建議呈現內容

- Design Token 三層架構圖。
- 品牌切換前後對照。
- 核心元件與狀態展示。
- Figma 與前端元件對照。
- 導入前後工作流程比較。

## 回顧與學習

待補：推動系統採用時遇到的阻力、治理經驗，以及下一階段的系統規劃。

## 頁面 CTA

- 上一個作品：Live Entertainment Community App
- 聯絡我：hello@lisahuang.design
