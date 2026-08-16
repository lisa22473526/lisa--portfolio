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
  ["Community", "主播互動、聊天室、跟單與應援"]
];

const impactGroups = [
  {
    number: "01",
    kicker: "Feature impact",
    title: "讓跟單更容易被發現，也更值得信任。",
    body: "提高推單按鈕辨識度並加入即時推單彈窗，縮短使用者從看見內容到執行跟單的距離。",
    metrics: [["+9.48pt", "跟單勝率"], ["+70.4%", "跟單總額"], ["+47.5%", "互動成員數"]],
    placeholder: "推單按鈕與即時彈窗 / Before & After",
    ratio: "16:9"
  },
  {
    number: "02",
    kicker: "Immersive viewing",
    title: "少一點介面干擾，多一點觀看沉浸。",
    body: "全螢幕觀賽時，五秒未操作便自動淡出互動 UI；再次操作即可喚醒，讓內容成為畫面真正的主角。",
    metrics: [["+21%", "人均觀看時長"], ["+60.2%", "人均流水"], ["+535.7%", "乾淨流"]],
    placeholder: "橫屏五秒淡出與互動喚醒流程",
    ratio: "16:9"
  },
  {
    number: "03",
    kicker: "Event experience",
    title: "從流失數據，找到降低參與門檻的方法。",
    body: "67.5% 的 Phase 2 玩家停留在 1–10% 進度。將門檻改為累計投注每滿 RM20、進度增加 5%，用階梯式回饋降低單次決策壓力。",
    metrics: [["+14.67%", "聊天室訊息"], ["+14.12%", "人均送禮頻率"], ["+5.11%", "平均觀看時長"]],
    placeholder: "活動進度與獎勵 UI / Before & After",
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
          <Image src="/projects/live-entertainment-community-v2.png" alt="Live entertainment community app overview" fill priority sizes="100vw" />
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
          <div className={styles.problemCopy}><h3>痛點</h3><p>舊版／傳統體育 App 畫面切割混亂，使用者在「看直播」、「查比分／數據」與「社群聊天討論」之間切換成本極高，且直播時的聊天室洗版快速，導致重要賽事訊息被淹沒。</p></div>
          <div className={styles.problemImage}>
            <Image src="/projects/project01/P_01.png" alt="直播、賽事數據與聊天室整合為單一觀賽介面的架構示意" fill sizes="(max-width: 760px) 100vw, 64vw" />
          </div>
        </div>
        <div className={styles.architecture}>
          {architecture.map(([name, detail], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{detail}</p></article>)}
        </div>
        <ImageSlot title="直播 / 資訊 / 聊天三合一介面" ratio="21:9" light />
      </section>

      <section className={styles.decision}>
        <div className={styles.sectionHead}><p className={styles.label}>Key decision / 02</p><h2>Designing for<br /><em>the moment.</em></h2></div>
        <div className={styles.decisionGrid}>
          <div><span className={styles.index}>A</span><h3>高密度聊天室中的重要訊息</h3><p>這個區塊保留給聊天室資訊層級、重要訊息呈現方式，以及 Before / After 的設計說明。</p><span className={styles.pending}>Content to be added</span></div>
          <div><span className={styles.index}>B</span><h3>依橫豎屏重新分配資訊優先級</h3><p>橫屏優先直播內容與沉浸感；豎屏提供完整資訊與聊天頁籤。這不是單純改變排列方向，而是回應兩種不同的觀看情境。</p></div>
        </div>
        <div className={styles.twoImages}><ImageSlot title="橫屏：沉浸式觀看與彈幕浮層" ratio="16:10" /><ImageSlot title="豎屏：資訊與聊天頁籤" ratio="16:10" /></div>
      </section>

      <section className={styles.impacts}>
        {impactGroups.map((impact) => (
          <article className={styles.impact} key={impact.number}>
            <div className={styles.impactHeader}><span>[ {impact.number} ]</span><span>{impact.kicker}</span></div>
            <div className={styles.impactIntro}><h2>{impact.title}</h2><p>{impact.body}</p></div>
            <ImageSlot title={impact.placeholder} ratio={impact.ratio} />
            <div className={styles.metrics}>{impact.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
          </article>
        ))}
      </section>

      <section className={styles.tradeoff}>
        <p className={styles.label}>Trade-off / 03</p>
        <div><h2>Not every metric<br />moves <em>together.</em></h2><p>沉浸式介面讓人均觀看時長提升 21%、人均流水成長 60.2%，但聊天率下降 55.5%。這個結果提醒我：設計決策需要先明確定義主要目標，也要誠實呈現改善所帶來的取捨。</p></div>
        <ImageSlot title="觀看、營收與互動指標對照圖" ratio="21:9" />
      </section>

      <section className={styles.reflection}>
        <p className={styles.label}>Reflection / 04</p>
        <blockquote>好的產品設計，不是讓所有數字同時變漂亮；而是知道此刻最重要的是什麼。</blockquote>
        <p>下一步仍可探索不干擾直播內容、但能維持互動意願的設計方式，讓沉浸觀看與社群參與不必只能二選一。</p>
      </section>

      <footer className={styles.nextProject}>
        <span>Next project / 02</span><h2>Multi-brand<br /><em>design system.</em></h2><Link href="/work">Back to all work <span className="arrow-motion">↗︎</span></Link>
      </footer>
    </main>
  );
}

function ImageSlot({ title, ratio, light = false }: { title: string; ratio: string; light?: boolean }) {
  return <div className={`${styles.imageSlot} ${light ? styles.imageSlotLight : ""}`} style={{ aspectRatio: ratio.replace(":", " / ") }}><span>Image placeholder</span><p>{title}</p><small>{ratio}</small></div>;
}
