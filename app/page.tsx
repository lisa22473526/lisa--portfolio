"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PortfolioFooter from "./components/portfolio-footer";
import SiteHeader from "./components/site-header";

const navigation = [
  { label: "Work", href: "/work" }
];

const featuredWork = [
  {
    number: "01",
    type: "Mobile product",
    title: "Live entertainment community app",
    result: "功能優化後，轉化率大幅提升",
    image: "/projects/live-entertainment-community-v2.png",
    imageAlt: "Jioo Live entertainment community app project overview",
    imageWidth: 1536,
    imageHeight: 1024,
    href: "/work/live-entertainment-community",
    className: "work-card--live"
  },
  {
    number: "02",
    type: "Design system",
    title: "B2B Multi-Brand Design System",
    result: "打造廠商客製一鍵換色的機制",
    image: "/projects/b2b-multi-brand-design-system-v2.png",
    imageAlt: "B2B multi-brand design system project overview",
    imageWidth: 1536,
    imageHeight: 1024,
    href: null,
    className: "work-card--system"
  }
];

const coreValues = [
  ["01", "數據與轉化率驅動", "透過數據洞察與 A/B 測試持續優化核心流程，大幅提升雙位數成長。"],
  ["02", "設計系統 0-1 規範", "主導主產品 Design System 建立與推動，統一品牌體驗並提升跨團隊開發效率。"],
  ["03", "跨團隊溝通能力", "具備網頁開發背景，能用工程思維溝通，大幅降低 Handoff 成本。"],
  ["04", "AI 輔助與高效疊代", "善用 AI 輔助前期研究、產品企劃與發想，提升產品競爭力與疊代效率。"]
];

const skills = [
  ["Figma", "90%", "/skills/figma.png"],
  ["Adobe Illustrator", "80%", "/skills/illustrator.png"],
  ["Adobe Photoshop", "90%", "/skills/photoshop.png"],
  ["After Effects", "50%", "/skills/after-effects.png"],
  ["HTML", "70%", "/skills/html.png"],
  ["CSS", "70%", "/skills/css.png"]
];

export default function HomePage() {
  const [wordStage, setWordStage] = useState(0);
  const [showGlobalNav, setShowGlobalNav] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const displacementImageRef = useRef<SVGFEImageElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const cyclingWord = wordStage === 0 ? "Product" : "Ideas → Real";

  const updateHeroGlow = (event: React.PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - bounds.left;
    const pointerY = event.clientY - bounds.top;
    event.currentTarget.style.setProperty("--glow-x", `${pointerX}px`);
    event.currentTarget.style.setProperty("--glow-y", `${pointerY}px`);
    event.currentTarget.style.setProperty("--tilt-x", `${((pointerY / bounds.height) - .5) * -2.2}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${((pointerX / bounds.width) - .5) * 2.2}deg`);
    displacementImageRef.current?.setAttribute("x", `${pointerX - 160}`);
    displacementImageRef.current?.setAttribute("y", `${pointerY - 160}`);
  };

  useEffect(() => {
    const delay = 2600;
    const timer = window.setTimeout(() => {
      setWordStage((currentStage) => (currentStage + 1) % 2);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [wordStage]);

  useEffect(() => {
    const updateNavigation = () => setShowGlobalNav(window.scrollY > window.innerHeight * .72);
    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    window.addEventListener("resize", updateNavigation);
    return () => {
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, []);

  useEffect(() => {
    const section = skillsRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSkillsVisible(true);
        observer.disconnect();
      }
    }, { threshold: .25 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const image = displacementImageRef.current;
    if (!image) return;
    const size = 320;
    const map = document.createElement("canvas");
    map.width = size;
    map.height = size;
    const context = map.getContext("2d");
    if (!context) return;
    const pixels = context.createImageData(size, size);
    const radius = size / 2;
    for (let y = 0; y < size; y += 1) {
      for (let x = 0; x < size; x += 1) {
        const deltaX = x - radius;
        const deltaY = y - radius;
        const distance = Math.hypot(deltaX, deltaY);
        const influence = distance < radius ? Math.pow(1 - distance / radius, 2) : 0;
        const index = (y * size + x) * 4;
        pixels.data[index] = 128 + (deltaX / radius) * influence * 127;
        pixels.data[index + 1] = 128 + (deltaY / radius) * influence * 127;
        pixels.data[index + 2] = 128;
        pixels.data[index + 3] = 255;
      }
    }
    context.putImageData(pixels, 0, 0);
    image.setAttribute("href", map.toDataURL());
  }, []);

  return (
    <main>
      <SiteHeader onHome visible={showGlobalNav} />
      <section className="hero" id="about" ref={heroRef} onPointerMove={updateHeroGlow}>
      <div className="hero__fx" aria-hidden="true">
        <div className="hero__cursor-glow"></div>
        <span className="hero__orbit hero__orbit--one"></span>
        <span className="hero__orbit hero__orbit--two"></span>
        <span className="hero__orbit hero__orbit--three"></span>
      </div>
      <div className="hero__custom-cursor" aria-hidden="true"><span></span></div>
      <svg className="hero__filter-defs" aria-hidden="true">
        <defs>
          <filter id="hero-bulge-filter" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
            <feImage ref={displacementImageRef} x="0" y="0" width="320" height="320" preserveAspectRatio="none" result="bulge-map" />
            <feFlood floodColor="rgb(128,128,128)" result="neutral-map" />
            <feComposite in="bulge-map" in2="neutral-map" operator="over" result="displacement-map" />
            <feDisplacementMap in="SourceGraphic" in2="displacement-map" scale="46" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <nav className="hero__nav" aria-label="Primary navigation">
        <div className="hero__roles" aria-label="Professional roles">
          <span>Human-centered</span>
          <span className="hero__sparkles" aria-hidden="true">✺✺</span>
          <span>Product Design</span>
          <span>Creative Direction</span>
          <span className="hero__sparkles" aria-hidden="true">✺✺</span>
          <button className="hero__ai-label" type="button" aria-label="AI Builder: Business value">
            <span>AI Builder</span>
            <span className="hero__ai-detail">Business value</span>
          </button>
        </div>
        <div className="hero__links">
          <span>About</span>
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
          <a className="hero__contact" href="https://www.linkedin.com/in/huang-jing-ying-439549198" target="_blank" rel="noreferrer">Let&apos;s talk <span className="arrow-motion">→</span></a>
        </div>
      </nav>
      <div className="hero__scene">

      <motion.div
        className="hero__word hero__word--design"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        Design
      </motion.div>

      <section className="hero__bio" aria-labelledby="experience-title">
        <h1 id="experience-title">10+ Years</h1>
        <p>具備前端網頁開發背景。善用數據分析與 AI 工具輔助設計迭代，專注於 0-1 打造直覺、高效且具備商業價值的 B2B / B2C 產品。</p>
      </section>

      <div className="hero__statement-position">
        <motion.section
          className="hero__statement"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Design philosophy"
        >
          <span className="hero__bracket" aria-hidden="true">(</span>
          <div>
            <p className="hero__statement-title">Designing what&apos;s <span className="hero__next">next.</span></p>
            <p>結合產品策略、UX 設計與 AI 實作，讓好想法更快發生。</p>
          </div>
          <span className="hero__bracket" aria-hidden="true">)</span>
        </motion.section>
      </div>

      <CyclingLetters text={cyclingWord} />
      <div className="hero__specialisms">
        <span>B2B · B2C</span>
        <span>0–1 Product</span>
      </div>
      <a className="hero__scroll-cue" href="#featured-work" aria-label="Scroll to featured work">
        <span className="hero__mouse-icon"><i></i></span>
        <span>Scroll</span>
      </a>
      </div>
      </section>

      <section className="portfolio-section portfolio-section--work" id="featured-work" aria-labelledby="work-title">
        <div className="work-orbits" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <div className="section-intro">
          <p className="section-label">Selected work / 2023–2026</p>
          <h2 id="work-title">Products<br />built<br />to matter.</h2>
          <p className="section-copy"><span>深耕台中的 UI/UX 設計師，從平面設計基礎出發，</span><span>打造不僅只有視覺外觀、更能放大產品價值的體驗。</span></p>
        </div>
        <div className="work-list">
          {featuredWork.map((work) => (
            <article className={`work-card ${work.className}`} key={work.number}>
              {work.href && <Link className="work-card__link" href={work.href} aria-label={`View ${work.title} case study`} />}
              <div className="work-card__top"><span>[ {work.number} ]</span><span>{work.type}</span></div>
              <div className="work-card__media">
                <Image
                  src={work.image}
                  alt={work.imageAlt}
                  width={work.imageWidth}
                  height={work.imageHeight}
                  sizes="(max-width: 840px) 100vw, 88vw"
                  unoptimized
                />
              </div>
              <div className="work-card__content"><h3>{work.title}</h3><p>{work.result} <span className="arrow-motion" aria-hidden="true">→</span></p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section ai-lab" aria-labelledby="ai-title">
        <div className="section-intro section-intro--ai">
          <p className="section-label">AI product lab</p>
          <h2 id="ai-title">Beyond<br />the <em>canvas.</em></h2>
          <p className="section-copy ai-copy"><span>AI 不取代設計判斷；它讓我能更快將研究洞察、</span><span>產品概念與視覺想法，推進成可測試、可溝通的網站原型。</span></p>
        </div>
        <div className="ai-stage">
          <div className="ai-stage__prompt">Create a clear, high-converting product experience.</div>
          <div className="ai-stage__output"><span>RESEARCH</span><i><span className="arrow-motion">→</span></i><span>PROTOTYPE</span><i><span className="arrow-motion">→</span></i><span>BUILD</span></div>
          <p>Idea to interaction / faster</p>
        </div>
      </section>

      <section className="portfolio-section values-section" aria-labelledby="value-title">
        <div className="section-intro section-intro--values"><p className="section-label">Core value & impact</p><h2 id="value-title">Built on<br /><em>real impact.</em></h2></div>
        <div className="value-grid">
          {coreValues.map(([number, title, description]) => (
            <article className="value-card" key={number}><span>[ {number} ]</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className={`portfolio-section skills-section${skillsVisible ? " skills-section--visible" : ""}`} ref={skillsRef} aria-labelledby="skills-title">
        <div className="section-intro section-intro--skills"><p className="section-label">My skill stack</p><h2 id="skills-title">Craft meets<br /><em>systems.</em></h2></div>
        <div className="skills-grid">
          {skills.map(([name, level, icon]) => (
            <div className="skill-row" key={name}>
              <div className="skill-row__title"><Image src={icon} alt="" width={22} height={22} unoptimized /><span>{name}</span></div>
              <div className="skill-row__track" aria-hidden="true"><span style={{ "--skill-level": level } as React.CSSProperties}></span></div>
              <span className="skill-row__level">{level}</span>
            </div>
          ))}
        </div>
      </section>

      <PortfolioFooter />
    </main>
  );
}

function CyclingLetters({ text }: { text: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero__word hero__word--product" aria-live="polite" aria-label={text}>
      <span className="sr-only">{text}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span className="hero__word-line" key={text} aria-hidden="true">
          {Array.from(text).map((character, index) => (
            <span className="hero__letter-clip" key={`${character}-${index}`}>
              <motion.span
                className="hero__cycle-letter"
                initial={reduceMotion ? false : { y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={reduceMotion ? undefined : { y: "-110%", opacity: 0 }}
                transition={reduceMotion ? { duration: 0 } : {
                  duration: 0.42,
                  delay: index * 0.075,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {character === " " ? "\u00A0" : character}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
