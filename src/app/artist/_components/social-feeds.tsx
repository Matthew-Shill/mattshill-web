"use client";

import { useEffect, useId, useState } from "react";
import {
  instagramReels,
  socialLinks,
  tiktokUsername,
  youtubeUploadsEmbedSrc,
} from "../_content";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "./brand-icons";

type Feed = "youtube" | "tiktok" | "instagram";

const feeds: {
  id: Feed;
  label: string;
  href: string;
  icon: typeof YouTubeIcon;
}[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: socialLinks.find((link) => link.id === "instagram")?.href ?? "",
    icon: InstagramIcon,
  },
  {
    id: "youtube",
    label: "YouTube",
    href: socialLinks.find((link) => link.id === "youtube")?.href ?? "",
    icon: YouTubeIcon,
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: socialLinks.find((link) => link.id === "tiktok")?.href ?? "",
    icon: TikTokIcon,
  },
];

export function SocialFeeds({
  youtubeTitle,
  tiktokTitle,
  instagramTitle,
}: {
  youtubeTitle: string;
  tiktokTitle: string;
  instagramTitle: string;
}) {
  const [feed, setFeed] = useState<Feed>("instagram");
  const tablistId = useId();

  useEffect(() => {
    if (feed === "tiktok") {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      script.dataset.artistEmbed = "tiktok";
      document.body.appendChild(script);
      return () => {
        script.remove();
      };
    }

    if (feed === "instagram") {
      const process = () => {
        window.instgrm?.Embeds.process();
      };
      const existing = document.querySelector<HTMLScriptElement>(
        'script[data-artist-embed="instagram"]',
      );
      if (existing && window.instgrm) {
        process();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.dataset.artistEmbed = "instagram";
      script.onload = process;
      document.body.appendChild(script);
    }
  }, [feed]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Social feeds"
        className="flex flex-wrap gap-2"
      >
        {feeds.map((item) => {
          const selected = feed === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${tablistId}-${item.id}`}
              aria-selected={selected}
              aria-controls={`${tablistId}-panel`}
              className="artist-feed-tab inline-flex items-center gap-2 border border-[var(--artist-border)] bg-[var(--artist-cream)] px-3.5 py-2 text-sm text-[var(--artist-fg)] transition-colors hover:border-[var(--artist-accent)] hover:text-[var(--artist-accent)]"
              onClick={() => setFeed(item.id)}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${tablistId}-panel`}
        aria-labelledby={`${tablistId}-${feed}`}
        className="mt-6"
      >
        {feed === "youtube" ? (
          <div className="artist-embed">
            <iframe
              src={youtubeUploadsEmbedSrc}
              title={youtubeTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : null}

        {feed === "tiktok" ? (
          <div className="artist-tiktok">
            <blockquote
              key={feed}
              className="tiktok-embed"
              cite={`https://www.tiktok.com/@${tiktokUsername}`}
              data-unique-id={tiktokUsername}
              data-embed-type="creator"
              style={{ maxWidth: 780, minWidth: 288 }}
            >
              <section>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.tiktok.com/@${tiktokUsername}?refer=creator_embed`}
                >
                  @{tiktokUsername}
                </a>
              </section>
            </blockquote>
          </div>
        ) : null}

        {feed === "instagram" ? (
          <div className="artist-ig-grid">
            {instagramReels.map((reel) => (
              <blockquote
                key={reel.shortcode}
                className="instagram-media"
                data-instgrm-permalink={`https://www.instagram.com/reel/${reel.shortcode}/`}
                data-instgrm-version="14"
              >
                <a
                  href={`https://www.instagram.com/reel/${reel.shortcode}/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {reel.title}
                </a>
              </blockquote>
            ))}
          </div>
        ) : null}

        <p className="mt-4 text-sm text-[var(--artist-muted)]">
          <a
            href={feeds.find((item) => item.id === feed)?.href}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-[var(--artist-border)] underline-offset-4 hover:text-[var(--artist-accent)] hover:decoration-[var(--artist-accent)]"
          >
            Open {feeds.find((item) => item.id === feed)?.label}
          </a>
          {feed === "youtube"
            ? ` — ${youtubeTitle.toLowerCase()}.`
            : feed === "tiktok"
              ? ` — ${tiktokTitle.toLowerCase()}.`
              : ` — ${instagramTitle.toLowerCase()}.`}
        </p>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}
