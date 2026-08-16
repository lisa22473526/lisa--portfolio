"use client";

import { useEffect, useRef, useState } from "react";

const email = "lisa22473526@gmail.com";

export default function PortfolioFooter() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const input = document.createElement("textarea");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopied(true);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer className="portfolio-footer" id="contact">
      <p className="section-label">Available for selected collaborations</p>
      <h2>Let&apos;s make<br />something <em>real.</em></h2>
      <div className="portfolio-footer__cta">
        <span>Available for new opportunities</span>
        <p>尋找新的產品設計機會，歡迎聯繫。</p>
        <div className="portfolio-footer__actions">
          <a href="https://www.linkedin.com/in/huang-jing-ying-439549198" target="_blank" rel="noreferrer">LinkedIn <span className="arrow-motion" aria-hidden="true">→</span></a>
          <button type="button" onClick={copyEmail}>Mail <span aria-hidden="true">＋</span></button>
        </div>
      </div>
      <div className="portfolio-footer__bottom">
        <p>© 2026 Lisa Huang. All rights reserved.</p>
      </div>
      <div className={`copy-toast${copied ? " copy-toast--visible" : ""}`} role="status" aria-live="polite">已複製 Email：{email}</div>
    </footer>
  );
}
