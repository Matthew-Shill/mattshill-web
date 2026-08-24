"use client";

import { useEffect, useRef, useState } from "react";
import { siteCopy } from "@/content/site-copy";
import { getMmsWidgetIframeSrc } from "@/lib/pricing";

const IFRAME_WAIT_MS = 8_000;

interface MmsWidgetProps {
  id: string;
  src: string;
  title?: string;
  className?: string;
}

export function MmsWidget({
  id,
  src,
  title,
  className = "min-h-[500px]",
}: MmsWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeSrc = getMmsWidgetIframeSrc(src);
  const [needsHelp, setNeedsHelp] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.dataset.initialized === "true") {
      return;
    }

    container.dataset.initialized = "true";

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onerror = () => setNeedsHelp(true);
    container.appendChild(script);

    const timeoutId = window.setTimeout(() => {
      if (!container.querySelector("iframe")) {
        setNeedsHelp(true);
      }
    }, IFRAME_WAIT_MS);

    return () => window.clearTimeout(timeoutId);
  }, [src]);

  return (
    <div>
      <div ref={containerRef} id={id} className={className} aria-label={title} />

      {needsHelp ? (
        <div className="mt-4 rounded-xl border border-border bg-surface px-4 py-5 text-center">
          <p className="text-sm text-muted">{siteCopy.mmsWidget.fallback}</p>
          <a
            href={iframeSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {siteCopy.mmsWidget.openNewTab}
          </a>
          <p className="mt-3">
            <a
              href={`mailto:${siteCopy.contact.email}`}
              className="text-sm font-semibold text-accent hover:text-accent-hover"
            >
              {siteCopy.contact.email}
            </a>
          </p>
        </div>
      ) : (
        <p className="mt-4 text-center text-sm text-muted">
          {siteCopy.mmsWidget.fallback}{" "}
          <a
            href={iframeSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:text-accent-hover"
          >
            {siteCopy.mmsWidget.openNewTab}
          </a>
          {" · "}
          <a
            href={`mailto:${siteCopy.contact.email}`}
            className="font-semibold text-accent hover:text-accent-hover"
          >
            {siteCopy.contact.email}
          </a>
        </p>
      )}
    </div>
  );
}
