"use client";

import { useState } from "react";
import { instagramReels } from "../_content";

function embedSrc(reel: (typeof instagramReels)[number]) {
  return `https://www.instagram.com/${reel.kind}/${reel.shortcode}/embed/`;
}

function reelHref(reel: (typeof instagramReels)[number]) {
  return `https://www.instagram.com/${reel.kind}/${reel.shortcode}/`;
}

export function InstagramCarousel() {
  const [index, setIndex] = useState(0);
  const reel = instagramReels[index];
  const total = instagramReels.length;

  function goTo(next: number) {
    setIndex((next + total) % total);
  }

  return (
    <div
      className="artist-ig-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Instagram reels"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goTo(index - 1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goTo(index + 1);
        }
      }}
    >
      <div className="artist-ig-toolbar">
        <button
          type="button"
          className="artist-ig-nav"
          aria-label="Previous reel"
          onClick={() => goTo(index - 1)}
        >
          ←
        </button>
        <p className="artist-ig-status" aria-live="polite">
          <span className="text-[var(--artist-fg)]">{reel.title}</span>
          <span className="ml-2 tabular-nums text-[var(--artist-muted)]">
            {index + 1} / {total}
          </span>
        </p>
        <button
          type="button"
          className="artist-ig-nav"
          aria-label="Next reel"
          onClick={() => goTo(index + 1)}
        >
          →
        </button>
      </div>

      <div className="artist-ig-slide">
        <iframe
          key={reel.shortcode}
          className="artist-ig-frame"
          src={embedSrc(reel)}
          title={reel.title}
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <p className="text-center text-sm text-[var(--artist-muted)]">
        <a
          href={reelHref(reel)}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-[var(--artist-border)] underline-offset-4 hover:text-[var(--artist-accent)] hover:decoration-[var(--artist-accent)]"
        >
          Watch on Instagram
        </a>
      </p>

      <div className="artist-ig-dots" role="tablist" aria-label="Choose a reel">
        {instagramReels.map((item, itemIndex) => (
          <button
            key={item.shortcode}
            type="button"
            role="tab"
            aria-selected={itemIndex === index}
            aria-label={`${item.title}, ${itemIndex + 1} of ${total}`}
            className="artist-ig-dot"
            onClick={() => setIndex(itemIndex)}
          />
        ))}
      </div>
    </div>
  );
}
