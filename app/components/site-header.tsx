"use client";

import Link from "next/link";
import { useState } from "react";

type SiteHeaderProps = { alwaysVisible?: boolean; visible?: boolean; onHome?: boolean };

export default function SiteHeader({ alwaysVisible = false, visible = false, onHome = false }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`global-nav${alwaysVisible || visible ? " global-nav--visible" : ""}`}>
      <Link className="global-nav__brand" href={onHome ? "#about" : "/"} aria-label="Lisa Huang, back to home">LISA<br />HUANG</Link>
      <nav className="global-nav__links" aria-label="Global navigation">
        <span>About</span>
        <Link href="/work">Work</Link>
        <a className="global-nav__contact" href="https://www.linkedin.com/in/huang-jing-ying-439549198" target="_blank" rel="noreferrer">Let&apos;s talk <span className="arrow-motion">→</span></a>
      </nav>
      <div className="global-nav__mobile-actions">
        <button className={`global-nav__menu-button${mobileMenuOpen ? " is-open" : ""}`} type="button" aria-label="Toggle menu" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}>
          <span></span><span></span><span></span>
        </button>
        <a className="global-nav__contact" href="https://www.linkedin.com/in/huang-jing-ying-439549198" target="_blank" rel="noreferrer">Contact <span className="arrow-motion">→</span></a>
      </div>
      <nav className={`mobile-drawer${mobileMenuOpen ? " mobile-drawer--open" : ""}`} aria-label="Mobile navigation">
        <div className="mobile-drawer__placeholder" aria-disabled="true">About</div>
        <Link href="/work" onClick={() => setMobileMenuOpen(false)}>Work</Link>
        <span>Lisa Huang / Senior UI·UX Designer</span>
      </nav>
    </header>
  );
}
