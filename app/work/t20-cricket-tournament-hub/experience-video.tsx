"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  label: string;
  width: number;
  height: number;
};

export default function ExperienceVideo({ src, poster, label, width, height }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const syncPlayback = () => {
      if (visible && !document.hidden && !reducedMotion.matches) {
        void video.play().catch(() => { /* Native controls remain available. */ });
      } else {
        video.pause();
      }
    };
    const loadObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.src = src;
        video.load();
        loadObserver.disconnect();
      }
    }, { rootMargin: "300px" });
    const playObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.1 });
    loadObserver.observe(video);
    playObserver.observe(video);
    video.addEventListener("loadeddata", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    reducedMotion.addEventListener("change", syncPlayback);
    return () => {
      loadObserver.disconnect();
      playObserver.disconnect();
      video.pause();
      video.removeEventListener("loadeddata", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      reducedMotion.removeEventListener("change", syncPlayback);
    };
  }, [src]);

  return (
    <video ref={ref} poster={poster} width={width} height={height}
      loop muted playsInline controls preload="none" aria-label={label}>
      您的瀏覽器不支援影片播放。<a href={src}>下載影片</a>
    </video>
  );
}
