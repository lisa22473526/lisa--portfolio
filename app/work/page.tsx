import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PortfolioFooter from "../components/portfolio-footer";
import SiteHeader from "../components/site-header";
import ApproachRail from "./approach-rail";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work — Lisa Huang",
  description: "Selected product design work across B2C experiences and B2B design systems."
};

const projects = [
  {
    number: "01",
    discipline: "Product design · B2C",
    title: "Live entertainment community",
    summary: "重新梳理內容探索與互動路徑，讓使用者更快找到喜愛的活動，也讓核心轉化率獲得雙位數成長。",
    tags: ["Research", "UX Strategy", "UI Design", "A/B Test"],
    image: "/projects/live-entertainment-community-v2.png",
    alt: "Live entertainment community app interface overview",
    tone: "blue",
    href: "/work/live-entertainment-community"
  },
  {
    number: "02",
    discipline: "Design system · B2B",
    title: "Multi-brand design system",
    summary: "從零建立可延展的品牌系統與元件規範，打造廠商客製一鍵換色機制，提升設計與開發協作效率。",
    tags: ["Design System", "Token", "Governance", "Handoff"],
    image: "/projects/b2b-multi-brand-design-system-v2.png",
    alt: "B2B multi-brand design system interface overview",
    tone: "coral",
    href: null
  }
] as const;

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <SiteHeader alwaysVisible />

      <section className={styles.hero} aria-labelledby="work-heading">
        <div className={styles.eyebrow}>
          <span>Selected projects</span>
          <span>2020—2026</span>
        </div>
        <h1 id="work-heading">Work<span className={styles.period}>.</span></h1>
        <div className={styles.heroFooter}>
          <p>把複雜問題轉化為清楚、可執行，<br />並能創造商業價值的數位體驗。</p>
          <span className={styles.scrollCue}>Scroll to explore <i>↓</i></span>
        </div>
      </section>

      <section className={styles.projects} aria-label="Selected case studies">
        {projects.map((project) => (
          <article className={styles.project} key={project.number}>
            <div className={styles.projectMeta}>
              <span>[ {project.number} ]</span>
              <span>{project.discipline}</span>
            </div>

            {project.href ? <Link className={`${styles.visual} ${styles[project.tone]}`} href={project.href} aria-label={`View ${project.title} case study`}>
              <Image
                src={project.image}
                alt={project.alt}
                fill
                priority={project.number === "01"}
                sizes="(max-width: 760px) 100vw, 70vw"
              />
              <span className={styles.viewLabel}>View case study <span className="arrow-motion">↗︎</span></span>
            </Link> : <div className={`${styles.visual} ${styles[project.tone]}`}>
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 760px) 100vw, 70vw" />
              <span className={styles.viewLabel}>Coming soon</span>
            </div>}

            <div className={styles.projectInfo}>
              <h2>{project.title}</h2>
              <div className={styles.projectDetails}>
                <p>{project.summary}</p>
                <ul aria-label={`${project.title} capabilities`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.approach} aria-labelledby="approach-heading">
        <p className={styles.sectionLabel}>How I work / 01—04</p>
        <h2 id="approach-heading">Strategy, craft<br />&amp; <em>momentum.</em></h2>
        <ApproachRail />
      </section>

      <PortfolioFooter />
    </main>
  );
}
