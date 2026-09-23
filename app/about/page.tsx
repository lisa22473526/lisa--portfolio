import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import PortfolioFooter from "../components/portfolio-footer";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About — Lisa Huang",
  description: "10 年以上設計經驗，結合前端背景、數據分析與 AI，從 B2C 產品體驗到 B2B 設計系統，讓複雜問題成為清楚、可落地的解決方案。",
};

const experience = [
  { period: "2021.10 — 至今", role: "UI Designer", company: "英屬維京群島商瑞嘉耐思科技有限公司台灣分公司", current: true, points: ["參與產品提案與企劃，從使用者需求與產品目標出發，整理功能構想、使用情境與流程，與跨部門團隊溝通並推進方案。", "負責行動裝置與 Web 產品的 UI/UX 設計，與 PM、工程師共同釐清需求，優化使用者流程。", "以 Figma 建立與維護 Design System，讓介面規範與元件成為團隊協作的共用語言。", "結合數據、使用者行為與問卷回饋推進設計優化，並運用 ChatGPT、Gemini 輔助工作。"], focus: "Product Planning / App & Web / Design System / Data-informed Design" },
  { period: "2020.04 — 2021.04", role: "UI Designer", company: "微程式資訊股份有限公司・自行車部門", current: false, points: ["參與前期產品規劃，從目標使用者、需求確認與競品分析，延伸至資訊架構、Wireframe、UI Flow 與 Prototype。", "訂定產品 Guideline，與 PM、RD、QA 協作，回應市場回饋並改善微互動與操作體驗。"], focus: "Product Planning / Interaction Design / Prototyping" },
  { period: "2019.06 — 2020.02", role: "UI/UX Designer", company: "中佑資訊／凡谷興業", current: false, points: ["與 PM、SA 及開發人員規劃 Wireframe 與 UI Flow，優化介面與操作流程。", "透過資料蒐集與競品分析建立視覺方向，製作原型並訂定 Guideline。"], focus: "User Flows / Competitive Analysis / UI Guidelines" },
  { period: "2017.03 — 2019.03", role: "網頁設計師 → 設計組長", company: "兆威數位公司", current: false, points: ["從網站視覺規劃、網頁製作與切版，延伸至娛樂遊戲產品的介面改版，與 UI/UX、RD、F2E 協作。", "後續擔任設計組長，負責視覺方向、設計項目審核與團隊溝通。"], focus: "Web Design / Front-end Collaboration / Design Leadership" },
  { period: "2016.02 — 2017.02", role: "網頁設計師", company: "NAWI 納威設計", current: false, points: ["與 PM、客戶討論網站風格及版面，獨立完成 WordPress 架站、視覺設計與網頁切版，累積從設計到實作的完整經驗。"], focus: "WordPress / Visual Design / HTML & CSS" },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <SiteHeader alwaysVisible />
      <div className={styles.container}>
        <section className={styles.overview} aria-labelledby="about-title">
          <div className={styles.intro}>
            <p className={styles.label}>About / Taichung, Taiwan</p>
            <h1 id="about-title">Lisa Huang <span>黃菁盈</span></h1>
            <p className={styles.role}>Senior UI/UX Designer</p>
            <h2>從產品提案到設計落地，<br />讓複雜的體驗變得清楚。</h2>
            <p>擁有 10 年以上設計經驗，結合視覺設計與前端開發背景，專注 B2B／B2C 產品。擅長產品企劃、流程優化與設計系統，與 PM、工程師一起把需求轉化為可落地的方案。</p>
            <div className={styles.actions}><Link href="/work">看作品 ↗</Link><a href="https://www.linkedin.com/in/huang-jing-ying-439549198" target="_blank" rel="noreferrer">聯絡我 ↗</a></div>
          </div>
          <aside className={styles.summary} aria-label="專業摘要">
            <p className={styles.label}>Expertise at a glance</p>
            <div className={styles.facts}><div><strong>10+</strong><span>年設計經驗</span></div><div><strong>B2B / B2C</strong><span>跨平台產品設計</span></div></div>
            <ul className={styles.strengths}>
              <li><strong>產品提案與 UX 規劃</strong><span>需求釐清、功能構想、Wireframe 與流程設計</span></li>
              <li><strong>Design System 0 → 1</strong><span>元件規範、Design Token 與多品牌客製</span></li>
              <li><strong>數據優化與跨團隊落地</strong><span>使用者回饋、前端協作與 AI 輔助迭代</span></li>
            </ul>
            <p className={styles.current}>現職｜瑞嘉耐思科技 UI Designer · 2021.10 至今</p>
          </aside>
        </section>
        <nav className={styles.sectionNav} aria-label="About 頁面章節">
          <span className={styles.navCaption}>Explore my story</span>
          <div className={styles.navItems}>
            <a href="#impact"><span className={styles.navNumber}>01</span><span>代表成果</span><span className={styles.navArrow} aria-hidden="true">↘</span></a>
            <a href="#experience"><span className={styles.navNumber}>02</span><span>工作經歷</span><span className={styles.navArrow} aria-hidden="true">↘</span></a>
            <a href="#background"><span className={styles.navNumber}>03</span><span>學歷與關於我</span><span className={styles.navArrow} aria-hidden="true">↘</span></a>
          </div>
        </nav>

        <section className={styles.proof} id="impact" aria-labelledby="proof-title">
          <div className={styles.sectionHeading}><h2 id="proof-title">代表成果</h2><span>Selected impact</span></div>
          <div className={styles.projects}>
            <Link className={styles.project} href="/work/live-entertainment-community"><div><span className={styles.label}>B2C / 直播互動產品</span><strong>+21% <small>人均觀看時長</small></strong></div><p>優化沉浸式觀賽體驗，並檢視互動下降的設計取捨。</p><span className={styles.projectLink}>閱讀案例 ↗</span></Link>
            <article className={styles.project}><div><span className={styles.label}>B2B / 多品牌設計系統</span><strong>0 → 1 <small>設計系統建立</small></strong></div><p>建立共用元件與品牌換色機制，提升設計、開發協作效率。</p><span className={styles.projectLink}>Design Tokens / Brand Themes</span></article>
          </div>
        </section>

        <section className={styles.experience} id="experience" aria-labelledby="experience-title">
          <div className={styles.sectionHeading}><h2 id="experience-title">工作經歷</h2><span>Experience</span></div>
          <ol className={styles.timeline}>{experience.map((job) => (
            <li key={job.company} className={job.current ? styles.currentJob : undefined}>
              <div className={styles.jobMeta}>
                <div className={styles.jobDate}>{job.current && <span className={styles.currentBadge}>Current</span>}<span>{job.period}</span></div>
                <h3>{job.role}</h3><p className={styles.company}>{job.company}</p>
              </div>
              <div className={styles.jobContent}><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
            </li>
          ))}</ol>
        <details className={styles.earlyCareer}><summary>更早的設計經歷 <span>2014 — 2015</span></summary><div>
          <article><span>2015.08 — 2015.12</span><h3>雅詩娜服飾 ＆ 王品威秀婚紗</h3><p>美編設計：圖文編輯、粉絲團經營、婚紗相冊編排，以及客戶溝通與校稿。</p></article>
          <article><span>2014 — 2015.07</span><h3>潑墨數位出版・兼職</h3><p>電子書圖文排版與互動效果製作，累積數位內容的閱讀與互動設計經驗。</p></article>
          <article><span>2014.07 — 2014.08</span><h3>愛點科技 iClick・實習</h3><p>於環景部門參與場地平面地圖製作與行銷網站設計。</p></article>
        </div></details>

        </section>

        <section className={styles.background} id="background" aria-labelledby="background-title">
          <div className={styles.sectionHeading}><h2 id="background-title">學歷與關於我</h2><span>Background</span></div>
          <div className={styles.backgroundGrid}>
            <article><p className={styles.label}>Education</p><h3>景文科技大學</h3><p>視覺傳達設計系・學士</p></article>
            <article><p className={styles.label}>Recognition / 2015</p><h3>新一代設計獎・包裝設計組入圍</h3><p>「四秀堂」：傳統零食包裝、書籍編輯與插畫設計。</p></article>
            <article><p className={styles.label}>Beyond work</p><h3>保持好奇，持續學習。</h3><p>喜歡自由行、玩具收藏與狗狗，也透過 UX、Design Thinking 講座與工作坊拓展視野。</p></article>
          </div>
          <div className={styles.skillsGrid}>
            <article aria-labelledby="soft-skills-title">
              <p className={styles.label}>Soft skills</p><h3 id="soft-skills-title">軟實力</h3>
              <ul>
                <li><strong>跨團隊溝通</strong><span>與 PM、工程師、QA 對齊需求與限制，讓設計決策形成共識。</span></li>
                <li><strong>產品提案與邏輯思考</strong><span>整理使用者需求、功能構想與流程，清楚傳達方案與取捨。</span></li>
                <li><strong>設計協作與帶領</strong><span>具設計組長與 Junior 設計師協作經驗，協助掌握方向與交付品質。</span></li>
                <li><strong>主動學習與整合執行</strong><span>持續探索 UX 方法與 AI 工具，將新方法應用於實際產品迭代。</span></li>
              </ul>
            </article>
            <article aria-labelledby="hard-skills-title">
              <p className={styles.label}>Hard skills</p><h3 id="hard-skills-title">硬實力</h3>
              <ul>
                <li><strong>UI/UX 與原型設計</strong><span>Figma、Wireframe、UI Flow、Prototype，以及 App／RWD 網頁設計。</span></li>
                <li><strong>設計系統與視覺表達</strong><span>Design Token、元件規範與多品牌設計；Illustrator、Photoshop、After Effects。</span></li>
                <li><strong>前端與網站實作</strong><span>HTML、CSS、網頁切版與 WordPress 架站，理解設計到開發的銜接。</span></li>
                <li><strong>研究分析與 AI 應用</strong><span>競品分析、問卷與行為數據；運用 ChatGPT、Gemini 輔助企劃與發想。</span></li>
              </ul>
            </article>
          </div>
        </section>
      </div>
      <PortfolioFooter />
    </main>
  );
}
