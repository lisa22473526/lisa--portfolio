"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./work.module.css";

const steps = [
  ["01", "Strategy", "Define", "從商業目標與使用者需求定義真正值得解決的問題。"],
  ["02", "Research", "Validate", "用研究、資料與快速驗證，降低產品決策的不確定性。"],
  ["03", "Experience", "Systemize", "建立一致且可延展的體驗，讓設計能夠隨產品成長。"],
  ["04", "AI + Build", "Accelerate", "結合 AI 與前端思維，加速從想法到可測試產品的距離。"]
] as const;

export default function ApproachRail() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number((entry.target as HTMLElement).dataset.step);
          setActiveStep(index);
        }
      });
    }, { rootMargin: "-38% 0px -42% 0px", threshold: 0 });

    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.approachGrid} style={{ "--rail-progress": `${(activeStep + 1) * 25}%` } as React.CSSProperties}>
      {steps.map(([number, label, title, description], index) => (
        <article
          className={`${styles.approachStep}${activeStep === index ? ` ${styles.approachStepActive}` : ""}`}
          data-step={index}
          key={number}
          ref={(element) => { stepRefs.current[index] = element; }}
        >
          <span>{number}</span>
          <div><small>{label}</small><h3>{title}</h3><p>{description}</p></div>
        </article>
      ))}
    </div>
  );
}
