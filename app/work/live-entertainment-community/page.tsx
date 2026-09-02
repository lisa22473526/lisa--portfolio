import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import styles from "./case-study.module.css";

export const metadata: Metadata = {
  title: "Live Entertainment Community — Lisa Huang",
  description: "如何整合體育直播、即時數據與社群互動，打造兼顧沉浸體驗與商業成長的娛樂平台。"
};

const roleItems = [
  ["Role", "Lead UI/UX Designer"],
  ["Design System", "重構元件架構、擴充元件庫"],
  ["Leadership", "帶領 Junior Designer、推進產品迭代"],
  ["Collaboration", "跨部門企劃提案、與開發團隊對接"]
];

const architecture = [
  ["Live", "不中斷、具沉浸感的賽事觀看"],
  ["Data", "不離開直播即可掌握比分與即時數據"],
  ["Community", "主播互動、聊天室、應援"]
];

const impactGroups = [
  {
    number: "01",
    kicker: "Feature impact",
    title: "讓推薦轉化為跟單與互動。",
    body: "提高推單按鈕辨識度並加入即時推單彈窗，縮短使用者從看見內容到執行跟單的距離。",
    metrics: [],
    placeholder: "推單按鈕與即時彈窗 / Before & After",
    image: "/projects/project01/follow-impact-v2.webp",
    imageAlt: "推多張單功能上線後的跟單總額與互動成員數成效",
    immersiveImage: null,
    ratio: "3:2"
  },
  {
    number: "02",
    kicker: "Immersive viewing",
    title: "讓 UI 退後，直播成為主角。",
    body: "重整橫屏聊天室與操作層級，並讓互動介面在閒置 5 秒後自動收合，降低畫面干擾，同時保留需要時即刻喚回的操作彈性。",
    metrics: [["+21%", "人均觀看時長"], ["+60.2%", "人均消費額"], ["+535.7%", "觀看直播人數"]],
    placeholder: "橫屏五秒淡出與互動喚醒流程",
    image: "/projects/project01/horizontal-version-v2.webp",
    imageAlt: "手機橫屏聊天室 UI 改版前後對照",
    immersiveImage: "/projects/project01/desktop-collapse-optimized.webp",
    ratio: "3:2"
  },
  {
    number: "03",
    kicker: "Event experience",
    title: "活動提案到疊代優化。",
    body: "熱門體育賽事多落在深夜時段，為炒熱直播氣氛並帶動主播互動，我提出活動企劃方案，推動商業營收與玩家互動成長。",
    metrics: [["+14.67%", "聊天室訊息"], ["+14.12%", "人均送禮頻率"], ["+5.11%", "平均觀看時長"]],
    placeholder: "活動進度與獎勵 UI / Before & After",
    image: null,
    imageAlt: null,
    immersiveImage: null,
    ratio: "16:9"
  }
];

export default function LiveEntertainmentCaseStudy() {
  return (
    <main className={styles.page}>
      <SiteHeader alwaysVisible />

      <section className={styles.hero}>
        <div className={styles.heroMeta}><span>[ 01 ]</span><span>Mobile product · B2C</span></div>
        <h1>Live entertainment<br /><em>community.</em></h1>
        <div className={styles.heroIntro}>
          <p>結合體育賽事直播、即時數據資訊與主播社群互動的一站式平台。</p>
          <span>Lead UI/UX Designer</span>
        </div>
        <div className={styles.cover}>
          <Image src="/projects/live-entertainment-community-v2.webp" alt="Live entertainment community app overview" fill priority sizes="100vw" />
        </div>
      </section>

      <section className={styles.overview}>
        <p className={styles.label}>Overview / 00</p>
        <h2>把觀賽、查數據與聊天，<br />放回同一個<span className={styles.accentText}>體驗裡。</span></h2>
        <p className={styles.lead}>舊有體育產品讓使用者不斷在直播、比分資訊與聊天室之間切換；高密度訊息又容易淹沒重要賽事內容。我重新規劃資訊架構，建立能依觀看情境切換的三合一介面。</p>
      </section>

      <section className={styles.roles} aria-label="Role and responsibilities">
        {roleItems.map(([title, value], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{value}</p></article>)}
      </section>

      <section className={styles.lightSection}>
        <div className={styles.sectionHead}><p className={styles.label}>Problem & architecture / 01</p><h2>核心問題與<br /><span className={styles.accentText}>總體架構。</span></h2></div>
        <div className={styles.problemGrid}>
          <div className={styles.problemCopy}>
            <h3>痛點</h3>
            <p>舊版／傳統體育 App 畫面切割混亂，使用者在「看直播」、「查比分／數據」與「社群聊天討論」之間切換成本極高，且直播時的聊天室洗版快速，導致重要賽事訊息被淹沒。</p>
            <div className={styles.solutionCopy}>
              <h3>解決方案</h3>
              <p>重新規劃資訊架構（Information Architecture），打造可彈性切換的直播／資訊／聊天三合一介面。</p>
            </div>
          </div>
          <div className={styles.problemImage}>
            <Image src="/projects/project01/P_01.webp" alt="直播、賽事數據與聊天室整合為單一觀賽介面的架構示意" fill sizes="(max-width: 760px) 100vw, 64vw" />
          </div>
        </div>
        <div className={styles.architecture}>
          {architecture.map(([name, detail], index) => <article key={name} data-step={`0${index + 1}`}><span>0{index + 1}</span><h3>{name}</h3><p>{detail}</p></article>)}
        </div>
      </section>

      <section className={styles.decision}>
        <div className={styles.sectionHead}><p className={styles.label}>Design highlights / 02</p><h2>設計<br /><span className={styles.accentText}>亮點。</span></h2></div>
        <div className={styles.decisionGrid}>
          <div><span className={styles.index}>A</span><h3>透過吉祥物將原本枯燥的「空白狀態」轉化為具親和力的互動。</h3><p>除了傳遞訊息，加入擬人化 IP 角色帶來溫暖陪伴感，減少用戶離線與冷漠感。</p></div>
          <div className={styles.emptyHighlightCopy} aria-hidden="true" />
        </div>
        <div className={styles.twoImages}>
          <div className={styles.highlightImage}>
            <Image src="/projects/project01/design-highlight-mascot.webp" alt="以吉祥物強化通知中心空白狀態與訊息互動的介面設計" fill sizes="(max-width: 760px) 100vw, 50vw" />
          </div>
          <div className={styles.emptyHighlight} aria-label="第二個設計亮點，內容待補" />
        </div>
      </section>

      <section className={styles.microInteraction}>
        <div className={styles.microLayout}>
          <div className={styles.microContent}>
            <div className={styles.microHeader}>
              <p className={styles.label}>Motion & interaction</p>
              <h2>UI 微互動與<br /><span>細節設計。</span></h2>
            </div>
            <div className={styles.microList}>
              <p className={styles.microCategory}>主播個人頁</p>
              <article>
                <span>01</span>
                <h3>畫面動態收合</h3>
                <p><strong>設計重點：</strong>解決內容被大 Header 遮擋的痛點。上滑時大頭貼縮小移至頂列，大幅釋放瀏覽區域，同時保持「追蹤／送禮」核心 CTA 常駐。</p>
              </article>
              <article>
                <span>02</span>
                <h3>Follow 按鈕動態回饋</h3>
                <p><strong>設計重點：</strong>透過微動態（Micro-animation）提升點擊反饋質感與儀式感，增加用戶追蹤轉化率。</p>
              </article>
            </div>
          </div>
          <div className={styles.phoneDemo}>
            <video autoPlay loop muted playsInline aria-label="主播個人頁 UI 微互動展示">
              <source src="/projects/project01/profile-micro-interaction-v2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className={styles.impacts}>
        <div className={styles.impactsHead}>
          <p className={styles.label}>Outcomes & contribution</p>
          <h2>成果與<br /><span>貢獻。</span></h2>
        </div>
        {impactGroups.map((impact) => (
          <article className={`${styles.impact} ${impact.number === "01" ? styles.followImpact : ""}`} key={impact.number}>
            <div className={styles.impactHeader}><span>[ {impact.number} ]</span><span>{impact.kicker}</span></div>
            <div className={`${styles.impactIntro} ${impact.body ? "" : styles.impactIntroSolo}`}>
              <h2>{impact.title}</h2>
              {impact.body && <p className={styles.impactSummary}>{impact.body}</p>}
            </div>
            {impact.number === "03" ? (
              <div className={styles.activityDetail}>
                <div className={styles.activityAnalysis}>
                  <div className={styles.activityPain}>
                    <h3>痛點 ➔ 數據發現</h3>
                    <article>
                      <h4>痛點一：難度斷層，起跑即流失</h4>
                      <p><strong>數據發現：</strong>進入 Phase 2 的玩家中，67.5%（537 筆）卡在 1–10% 進度（中位數 10%），顯示用戶體驗 10 分鐘後，因目標過遠、門檻過高而集體放棄。</p>
                    </article>
                    <article>
                      <h4>痛點二：獎勵樣式相似，造成認知混淆</h4>
                      <p><strong>用戶回饋：</strong>活動獎勵與打賞主播的禮物採用相似的 UI 樣式，導致用戶誤以為完成打賞即可獲得活動獎勵。</p>
                    </article>
                  </div>
                  <div className={styles.activityOptimization}>
                    <h3>優化項目</h3>
                    <ul>
                      <li><strong>門檻階梯化：</strong>降低單次消費壓力，活化卡在 10% 區間的 500+ 位潛在用戶。</li>
                      <li><strong>區分禮物 UI：</strong>強化打賞禮物與活動贈禮的視覺差異，降低辨識與理解成本。</li>
                    </ul>
                  </div>
                </div>
                <ImageSlot title="活動機制與 UI 優化 / Before & After" ratio="4:5" />
              </div>
            ) : impact.immersiveImage && impact.image ? (
              <div className={styles.impactMediaGrid}>
                <div className={`${styles.impactMediaItem} ${styles.impactUiRedesign}`}>
                  <span>UI 改版</span>
                <Image src={impact.image} alt={impact.imageAlt ?? "作品成果畫面"} fill sizes="(max-width: 760px) 100vw, 48vw" />
                </div>
                <div className={`${styles.impactMediaItem} ${styles.impactImmersive}`}>
                  <span>沉浸式觀看體驗</span>
                  <div className={styles.landscapePhone}>
                    <div className={styles.landscapeScreen}>
                      <Image src={impact.immersiveImage} alt="手機橫屏沉浸式觀看與介面自動收合動畫" fill unoptimized sizes="(max-width: 760px) 90vw, 44vw" />
                    </div>
                  </div>
                </div>
              </div>
            ) : impact.image ? (
              <div className={styles.impactImage} style={{ aspectRatio: impact.ratio.replace(":", " / ") }}>
                <Image src={impact.image} alt={impact.imageAlt ?? "作品成果畫面"} fill sizes="(max-width: 760px) 100vw, 94vw" />
              </div>
            ) : <ImageSlot title={impact.placeholder} ratio={impact.ratio} />}
            {impact.metrics.length > 0 && <div className={styles.metrics}>{impact.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>}
          </article>
        ))}
      </section>

      <section className={styles.reflection}>
        <p className={styles.label}>Reflection / 04</p>
        <blockquote>好的產品設計，不可能一次就讓所有數字同時變漂亮；而是透過真實的回饋與反覆疊代，讓產品變得更好。</blockquote>
      </section>

      <footer className={styles.nextProject}>
        <span>Next project / 02</span><h2>Multi-brand design system</h2><Link href="/work">Back to all work <span className="arrow-motion">↗︎</span></Link>
      </footer>
    </main>
  );
}

function ImageSlot({ title, ratio, light = false }: { title: string; ratio: string; light?: boolean }) {
  return <div className={`${styles.imageSlot} ${light ? styles.imageSlotLight : ""}`} style={{ aspectRatio: ratio.replace(":", " / ") }}><span>Image placeholder</span><p>{title}</p><small>{ratio}</small></div>;
}
