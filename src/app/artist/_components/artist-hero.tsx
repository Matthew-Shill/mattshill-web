"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { artistCopy } from "../_content";

export function ArtistHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyStatic = () => {
      root.classList.toggle("artist-hero--static", motion.matches);
      if (motion.matches) {
        root.style.removeProperty("--hero-progress");
      }
    };

    applyStatic();
    motion.addEventListener("change", applyStatic);

    let frame = 0;
    const update = () => {
      if (motion.matches) return;
      const rect = root.getBoundingClientRect();
      const travel = Math.max(root.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / travel, 0), 1);
      root.style.setProperty("--hero-progress", progress.toFixed(4));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      motion.removeEventListener("change", applyStatic);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={rootRef} className="artist-hero">
      <div className="artist-hero-stage mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <p className="artist-hero-eyebrow text-xs font-medium uppercase tracking-[0.22em] text-[var(--artist-muted)]">
          {artistCopy.hero.eyebrow}
        </p>
        <h1 className="artist-hero-title mt-4 text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
          {artistCopy.hero.headline}
        </h1>
        <div className="artist-hero-portrait artist-portrait relative mx-auto mt-4 w-full max-w-sm">
          <Image
            src="/artist-hero.png"
            alt="Portrait of Matt Shill"
            width={470}
            height={597}
            priority
            className="h-auto w-full"
          />
        </div>
        <p className="artist-hero-copy relative z-10 -mt-6 max-w-md text-lg leading-relaxed text-[var(--artist-accent)] sm:text-xl">
          {artistCopy.tagline}
        </p>
        <p className="artist-hero-copy mt-2 max-w-md text-base leading-relaxed text-[var(--artist-muted)]">
          {artistCopy.hero.subline}
        </p>
        <div className="artist-hero-copy mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#listen" className="artist-btn">
            {artistCopy.hero.ctaListen}
          </a>
          <a href="#book" className="artist-btn artist-btn-ghost">
            {artistCopy.hero.ctaBook}
          </a>
        </div>
        <ul className="artist-hero-copy mt-8 flex flex-wrap justify-center gap-2">
          {artistCopy.hero.proof.map((item) => (
            <li
              key={item}
              className="border border-[var(--artist-border)] px-3 py-1 text-xs tracking-wide text-[var(--artist-muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
