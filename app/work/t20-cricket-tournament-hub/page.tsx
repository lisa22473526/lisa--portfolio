import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import CaseStudyTopline from "../../components/case-study-topline";
import ExperienceVideo from "./experience-video";
import styles from "./t20-case-study.module.css";

export const metadata: Metadata = {
  title: "T20 Cricket Tournament Hub — Lisa Huang",
  description: "A responsive tournament hub that brings T20 matches, stories, standings, and deeper content into one destination."
};

const meta = [
  ["Role", "UI/UX Designer"],
  ["Platform", "Responsive Web"],
  ["Scope", "Information Architecture · UX · UI"],
  ["Year", "2022"]
];

const iaItems = ["Hero / Featured", "Matches", "News", "Standings", "Explore / Social Media"];

export default function T20CricketTournamentHub() {
  return (
    <main className={styles.page}>
      <SiteHeader alwaysVisible />

      <section className={styles.hero} aria-labelledby="t20-title">
        <CaseStudyTopline number="03" context="Sports platform · UI/UX design" />
        <div className={styles.heroTitle}>
          <h1 id="t20-title">T20 Cricket<br /><em>Tournament Hub</em></h1>
          <p>將賽事、新聞與 T20 重點內容集中在同一個入口，打造能持續探索的專屬賽事體驗。</p>
        </div>
        <dl className={styles.meta}>
          {meta.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
        <div className={styles.heroVisual}>
          <Image src="/projects/project02/t20-landing.webp" alt="T20 tournament landing page with a cricket hero image and match cards" width={1920} height={720} priority sizes="100vw" />
        </div>
      </section>

      <section className={styles.challenge} aria-labelledby="challenge-title">
        <div>
          <p className={styles.sectionLabel}>The challenge</p>
          <h2 id="challenge-title">將完整的 T20 賽事體驗，集中在同一個入口。</h2>
        </div>
        <div className={styles.challengeCopy}>
          <p>T20 賽事期間，使用者需要瀏覽賽事資訊、新聞與相關內容，但內容分散於不同入口，缺乏一個能快速掌握賽事全貌的集中體驗。</p>
          <p>因此，我將賽事、新聞、戰績與延伸內容重新整理成一個獨立的 T20 Tournament Hub，讓使用者能在單一入口中持續探索整個賽事。</p>
          <aside><span>Goal</span><strong>一站式 T20 賽事中心</strong><p>集中呈現賽事資訊、比賽內容與最新新聞，讓使用者更快掌握賽事全貌。</p></aside>
        </div>
      </section>

      <section className={styles.architecture} aria-labelledby="architecture-title">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>Information architecture</p>
          <h2 id="architecture-title">重新組織賽事內容，建立清楚的探索路徑。</h2>
          <p>我將賽事內容重新整理為五個核心區域，讓使用者能從比賽資訊開始，自然延伸至新聞與更深入的賽事內容。</p>
        </div>
        <div className={styles.iaMap} aria-label="T20 hub information architecture">
          <strong>T20 HUB</strong>
          <div>{iaItems.map((item, index) => <span key={item}><i>0{index + 1}</i>{item}</span>)}</div>
        </div>
        <div className={styles.wireframeStage}>
          <div className={styles.wireframeImage}><Image src="/projects/project02/t20-wireframe.webp" alt="Desktop wireframe showing the content hierarchy of the T20 tournament hub" fill sizes="(max-width: 760px) 94vw, 58vw" /></div>
          <div className={styles.notes}>
            <article><span>01</span><h3>賽事資訊優先</h3><p>將即時賽事與重要比賽資訊安排於前段，優先滿足進站後最直接的資訊需求。</p></article>
            <article><span>02</span><h3>引導內容探索</h3><p>賽事資訊之後接續新聞與精選內容，讓使用者自然從「看比賽」進入「探索賽事」。</p></article>
            <article><span>03</span><h3>延伸探索深度</h3><p>戰績、球隊、球員與社群內容作為延伸入口，增加專題頁的持續探索價值。</p></article>
          </div>
        </div>
      </section>

      <section className={styles.showcase} aria-labelledby="landing-title">
        <div className={styles.showcaseHead}>
          <p className={styles.sectionLabel}>01 · Tournament landing</p>
          <h2 id="landing-title">第一眼，就能感受到賽事正在發生。</h2>
          <p>透過鮮明的賽事識別與清楚的內容優先順序，讓使用者快速理解所在位置，以及當下最重要的資訊。</p>
        </div>
        <div className={styles.fullVisual}><Image src="/projects/project02/t20-landing.webp" alt="T20 tournament landing hero and live match cards" width={1920} height={720} sizes="100vw" /></div>
        <div className={styles.twoNotes}>
          <article><span>01</span><h3>建立賽事識別</h3><p>透過大型賽事主視覺、T20 品牌元素與高對比色彩，建立與一般體育內容不同的專題入口。</p></article>
          <article><span>02</span><h3>凸顯內容優先順序</h3><p>將即時賽事資訊安排在主視覺下方，讓使用者進入頁面後即可快速掌握當前與即將進行的比賽。</p></article>
        </div>
      </section>

      <section className={`${styles.showcase} ${styles.match}`} aria-labelledby="match-title">
        <div className={styles.showcaseHead}>
          <p className={styles.sectionLabel}>02 · Match discovery</p>
          <h2 id="match-title">從即時賽況，到完整賽事進程。</h2>
          <p>將比賽狀態、賽程與戰績建立清楚層級，幫助使用者快速理解現在正在發生什麼，以及接下來有哪些比賽。</p>
        </div>
        <div className={styles.matchVisual}><Image src="/projects/project02/t20-match-discovery.webp" alt="Live match cards, standings, video, and upcoming tournament content" fill sizes="(max-width: 760px) 100vw, 88vw" /></div>
        <div className={styles.threeNotes}>
          <article><span>即時賽事優先</span><p>透過狀態、時間與隊伍資訊，建立清楚的比賽卡片層級。</p></article>
          <article><span>精選內容與在地入口</span><p>提供精選賽事影片與預測文章（Tips），並加入印度隊專屬篩選入口，讓印度使用者能更快聚焦國家隊動態與最新賽況。</p></article>
          <article><span>理解賽事脈絡</span><p>透過戰績資訊，讓使用者不必離開專題頁即可理解目前賽事進程。</p></article>
        </div>
      </section>

      <section className={styles.editorial} aria-labelledby="editorial-title">
        <div className={styles.editorialHead}>
          <p className={styles.sectionLabel}>03 · Editorial content</p>
          <h2 id="editorial-title">不同內容，需要不同的視覺份量。</h2>
          <p>運用不同的圖片尺寸與版面比例，區分重要賽事故事與適合快速瀏覽的日常更新，建立清楚的編輯層級。</p>
        </div>
        <div className={styles.editorialVisual}><Image src="/projects/project02/t20-editorial.webp" alt="Latest tournament stories presented in an editorial red news section" fill sizes="100vw" /></div>
        <div className={styles.threeNotes}>
          <article><span>精選內容</span><p>以較大的圖片與版面比例承載重要賽事故事、影片或深度內容。</p></article>
          <article><span>最新消息</span><p>使用較緊湊的卡片編排支援快速掃讀，讓使用者掌握最新賽況。</p></article>
          <article><span>編輯層級</span><p>透過尺寸、圖片比例與文字編排，而不只依靠顏色，區分資訊的重要程度。</p></article>
        </div>
      </section>

      <section className={styles.explore} aria-labelledby="explore-title">
        <div className={styles.showcaseHead}>
          <p className={styles.sectionLabel}>04 · Content exploration</p>
          <h2 id="explore-title">比賽之外，還有更多探索入口。</h2>
          <p>體驗不只停留在比分與新聞，而是提供多種路徑，讓使用者能繼續深入探索整個賽事。</p>
        </div>
        <div className={styles.exploreGrid}>
          <div className={styles.exploreVisual}><Image src="/projects/project02/t20-explore-combined.webp" alt="Tournament overview tiles followed by the social media exploration section" fill sizes="(max-width: 760px) 100vw, 66vw" /></div>
          <div className={styles.exploreCopy}>
            <article><span>01</span><h3>多元探索入口</h3><p>不同使用者可能從球隊、球員、場館或紀錄開始探索，因此將延伸內容設計成清楚且具有視覺辨識度的入口。</p></article>
            <article><span>02</span><h3>延續內容探索</h3><p>頁面底部透過社群媒體與延伸內容，讓賽事中心不只是一個一次性的活動入口。</p></article>
          </div>
        </div>
      </section>

      <section className={styles.finalExperience} aria-labelledby="final-title">
        <div className={styles.finalCopy}>
          <p className={styles.sectionLabel}>Final experience</p>
          <h2 id="final-title">一場賽事，<br /><em>跨越每個螢幕。</em></h2>
          <p>在桌機與手機上維持一致的內容優先順序，讓使用者都能輕鬆探索比賽、新聞與更深入的賽事內容。</p>
        </div>

        <div className={styles.deviceStage} aria-label="桌機與手機操作影片">
          <div className={styles.desktopMockup}>
            <div className={styles.desktopBar}><i /><i /><i /></div>
            <ExperienceVideo src="/projects/project02/t20-desktop.mp4" poster="/projects/project02/t20-desktop-poster.webp" label="T20 桌機版操作展示" width={1512} height={736} />
          </div>

          <div className={styles.mobileMockup}>
            <div className={styles.mobileSpeaker} />
            <ExperienceVideo src="/projects/project02/t20-mobile.mp4" poster="/projects/project02/t20-mobile-poster.webp" label="T20 手機版操作展示" width={596} height={1298} />
          </div>
        </div>
      </section>

      <section className={styles.nextProject}>
        <span>Next project / 01</span>
        <h2>Live entertainment community</h2>
        <Link href="/work/live-entertainment-community">View next project <span className="arrow-motion">↗︎</span></Link>
      </section>
    </main>
  );
}
