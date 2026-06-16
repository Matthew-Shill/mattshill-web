"use client";

import { useEffect, useRef } from "react";

interface MmsWidgetProps {
  id: string;
  src: string;
  className?: string;
}

export function MmsWidget({ id, src, className }: MmsWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.dataset.initialized === "true") {
      return;
    }

    container.dataset.initialized = "true";

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    container.appendChild(script);
  }, [src]);

  return <div ref={containerRef} id={id} className={className} />;
}
