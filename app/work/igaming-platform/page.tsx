import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import CaseStudyTopline from "../../components/case-study-topline";
import PortfolioFooter from "../../components/portfolio-footer";
import styles from "./igaming.module.css";

export const metadata: Metadata = {
  title: "iGaming Platform — Multi-brand UI · Lisa Huang",
  description: "同一博彩產品，三套客製化介面。以紅、綠、紫三種品牌風格，展示桌機與手機的遊戲大廳、優惠及會員介面設計。",
};
const base = "/projects/igaming/";
function Screen({ name, alt, width = 428, height = 926, priority = false }: { name: string; alt: string; width?: number; height?: number; priority?: boolean }) {
  // These screenshots are already compressed WebP assets; serve them directly.
  return <Image unoptimized src={`${base}${name}.webp`} alt={alt} width={width} height={height} priority={priority} sizes={width > 1000 ? "(max-width: 760px) 94vw, 85vw" : "(max-width: 760px) 44vw, 24vw"} />;
}
function Phone({ name, alt }: { name: string; alt: string }) {
  return <div className={styles.phone}><Screen name={name} alt={alt} /></div>;
}
const themes = [
  { id: "red", number: "01", title: "Red / Structured & bold", subtitle: "清楚的層級，鮮明的操作。", copy: "紅色主要操作搭配深藍灰底色，讓活動、遊戲推薦與會員入口各有位置。桌機保留完整側欄，手機以卡片與底部導覽整理核心功能。", desktop: "desktop-home", height: 2500,
    phones: [["mobile-member", "會員首頁"], ["mobile-games", "遊戲列表"], ["mobile-promotion", "優惠列表"]],
    extras: [["desktop-games", "桌機遊戲大廳", 1920, 1703], ["desktop-promotion", "桌機優惠詳情", 1920, 2127]] },
  { id: "green", number: "02", title: "Green / Vivid & expressive", subtitle: "以圖像建立鮮明的品牌個性。", copy: "綠色識別搭配紫色輔助操作，用大幅人物主視覺、活動輪播與插畫分類卡片，呈現更強烈的內容層次。相同產品功能，延伸出不同的首頁節奏。", desktop: "green/desktop-home", height: 1125,
    phones: [["green/mobile-home", "會員首頁"], ["green/mobile-promotion", "優惠列表"], ["green/mobile-login", "登入介面"]],
    extras: [["green/mobile-casino", "完整手機遊戲大廳", 428, 4056]] },
  { id: "purple", number: "03", title: "Purple / Playful & compact", subtitle: "緊湊的編排，完整的探索入口。", copy: "紫色漸層與圖像導覽建立另一套品牌語言。遊戲分類、收藏與搜尋集中於內容前段，並延伸至會員資料、優惠及登入介面。", desktop: "purple/desktop-home", height: 1246,
    phones: [["purple/mobile-games", "遊戲分類"], ["purple/mobile-favorite", "收藏與搜尋"], ["purple/mobile-info", "會員資訊"]],
    extras: [["purple/desktop-promotion", "桌機優惠列表", 1920, 900], ["purple/desktop-login", "桌機登入視窗", 1920, 1246]] },
] as const;

export default function IGamingPlatform() {
  return <main className={styles.page}>
    <SiteHeader alwaysVisible />
    <header className={styles.hero}>
      <CaseStudyTopline number="04" context="One product · Three visual identities" />
      <p className={styles.kicker}>iGaming platform / Client customization</p>
      <h1>One platform.<span>Three expressions.</span></h1>
      <div className={styles.heroBottom}><p>同一博彩產品，三套客製化介面。<br />從品牌視覺到畫面編排，延伸不同客戶的產品樣貌。</p><span>RED / GREEN / PURPLE</span></div>
      <div className={styles.cover}><Screen name="cover-multi-brand" alt="紅、綠、紫三套博彩平台客製化介面的桌機與手機組合" width={1536} height={1024} priority /></div>
    </header>
    <section className={styles.intro}>
      <p className={styles.kicker}>iGaming is my expertise</p>
      <h2>熟悉產品，<br /><em>延伸品牌。</em></h2>
      <div className={styles.introCopy}><p>這三套設計來自同一個博彩產品，針對不同客戶提供客製化皮膚。在共用的產品功能架構下，調整品牌色彩、主視覺、導覽樣式與內容配置。</p><p>博彩是我熟悉的設計領域。從遊戲大廳、活動優惠到會員操作，我將產業經驗落實在各套介面的細節中，並延伸至桌機與手機。</p><div className={styles.tags}><span>iGaming</span><span>Multi-brand UI</span><span>Desktop & mobile</span></div></div>
    </section>
    <nav className={styles.themeNav} aria-label="客製化風格導覽">{themes.map(theme => <a key={theme.id} href={`#${theme.id}`}><i className={styles[theme.id]}/><span>{theme.number} / {theme.id.toUpperCase()}</span><span>↘</span></a>)}</nav>
    {themes.map(theme => <section id={theme.id} key={theme.id} className={`${styles.themeSection} ${styles[theme.id]}`} aria-labelledby={`${theme.id}-title`}>
      <div className={styles.sectionHead}><div><p className={styles.kicker}>CUSTOM SKIN / {theme.number}</p><h2 id={`${theme.id}-title`}>{theme.title.split(" / ")[0]}<br /><em>{theme.title.split(" / ")[1]}</em></h2></div><div className={styles.themeCopy}><h3>{theme.subtitle}</h3><p>{theme.copy}</p></div></div>
      <div className={styles.desktopShowcase}><div className={styles.browser}><div className={styles.browserBar}><i/><i/><i/><span>{theme.id.toUpperCase()} / DESKTOP</span></div><div className={theme.id === "red" ? styles.desktopViewport : undefined}><Screen name={theme.desktop} alt={`${theme.id} 客製化版本桌機首頁`} width={1920} height={theme.height}/></div></div></div>
      <div className={styles.phoneTrio}>{theme.phones.map(([name,label]) => <figure key={name}><Phone name={name} alt={`${theme.id} 版本${label}`}/><figcaption>{label}</figcaption></figure>)}</div>
      <details className={styles.moreScreens}><summary>查看 {theme.id.toUpperCase()} 更多介面 <span>＋</span></summary><div className={styles.extraScreens}>{theme.extras.map(([name,alt,width,height]) => <figure className={width < 1000 ? styles.longMobile : undefined} key={name}><Screen name={name} alt={alt} width={width} height={height}/><figcaption>{alt}</figcaption></figure>)}</div></details>
    </section>)}
    <section className={styles.comparison}>
      <div className={styles.sectionHead}><div><p className={styles.kicker}>Shared feature / Different expressions</p><h2>同一功能，<br /><em>不同品牌表情。</em></h2></div><p>以優惠彈窗為例，三套介面保留活動曝光、關閉與不再顯示的操作，再透過色彩、容器和按鈕配置呈現各自的風格。</p></div>
      <div className={styles.phoneTrio}>{[["mobile-popup","RED"],["green/mobile-popup","GREEN"],["purple/mobile-popup","PURPLE"]].map(([name,label]) => <figure key={name}><Phone name={name} alt={`${label} 版本優惠彈窗`}/><figcaption>{label} / Promotion</figcaption></figure>)}</div>
    </section>
    <section className={styles.registration}>
      <div className={styles.sectionHead}><div><p className={styles.kicker}>Shared product foundation</p><h2>從品牌風格，<br /><em>延伸到操作細節。</em></h2></div><p>客製化也涵蓋登入與註冊等功能畫面。紅色版的桌機雙欄與手機單欄配置，呈現同一流程在不同裝置上的設計。</p></div>
      <div className={styles.registerGrid}><div><Screen name="desktop-register" alt="紅色版桌機註冊視窗" width={1920} height={1192}/></div><Phone name="mobile-register" alt="紅色版手機註冊表單"/></div>
    </section>
    <section className={styles.closing}><p className={styles.kicker}>One product. Multiple identities.</p><h2>以產業經驗，<br />打造<span>多樣的品牌介面。</span></h2><p>共用產品架構 × 客製化視覺 × 跨裝置設計</p><Link href="/work">探索其他作品 <span>↗</span></Link></section>
    <PortfolioFooter />
  </main>;
}
