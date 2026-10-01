"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

type SiteHeaderProps = { alwaysVisible?: boolean; visible?: boolean; onHome?: boolean };

export default function SiteHeader({ alwaysVisible = false, visible = false, onHome = false }: SiteHeaderProps) {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => menuRef.current?.removeAttribute("open");
  const pathname = usePathname();
  const workCurrent = pathname === "/work" ? "page" : pathname.startsWith("/work/") ? "location" : undefined;

  return (
    <header className={`global-nav${alwaysVisible || visible ? " global-nav--visible" : ""}`}>
      <Link className="global-nav__brand" href={onHome ? "#about" : "/"} aria-label="Lisa Huang, back to home">LISA<br />HUANG</Link>
      <nav className="global-nav__links" aria-label="Global navigation">
        <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}>About</Link>
        <Link href="/work" aria-current={workCurrent}>Work</Link>
        <a className="global-nav__contact" href="https://www.linkedin.com/in/huang-jing-ying-439549198" target="_blank" rel="noreferrer">Let&apos;s talk <span className="arrow-motion">→</span></a>
      </nav>
      <div className="global-nav__mobile-actions">
        <details className="mobile-menu" ref={menuRef} onKeyDown={(event) => {
          if (event.key === "Escape") {
            closeMenu();
            menuRef.current?.querySelector("summary")?.focus();
          }
        }}>
          <summary className="global-nav__menu-button" aria-label="Toggle menu" aria-controls="mobile-navigation">
            <span></span><span></span><span></span>
          </summary>
          <nav id="mobile-navigation" className="mobile-drawer" aria-label="Mobile navigation">
            <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined} onClick={closeMenu}>About</Link>
            <Link href="/work" aria-current={workCurrent} onClick={closeMenu}>Work</Link>
            <span>Lisa Huang / Senior UI·UX Designer</span>
          </nav>
        </details>
        <a className="global-nav__contact" href="https://www.linkedin.com/in/huang-jing-ying-439549198" target="_blank" rel="noreferrer">Contact <span className="arrow-motion">→</span></a>
      </div>
    </header>
  );
}
