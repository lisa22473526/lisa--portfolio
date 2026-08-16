"use client";

import { useEffect, useState } from "react";

export default function GoTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > Math.min(window.innerHeight * 0.72, 640));
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <button className={`go-top${visible ? " go-top--visible" : ""}`} type="button" aria-label="Go back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <span>Go top</span><i aria-hidden="true">↑</i>
    </button>
  );
}
