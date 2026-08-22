import Link from "next/link";
import { siteCopy } from "@/content/site-copy";

export function TrialCta({
  align = "center",
  light = false,
}: {
  align?: "left" | "center";
  light?: boolean;
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`mt-10 flex flex-col gap-3 ${alignment}`}>
      <Link
        href="/free-trial"
        className={`inline-flex rounded-full px-8 py-3 text-base font-semibold transition-colors ${
          light
            ? "bg-white text-accent hover:bg-white/90"
            : "bg-accent text-white hover:bg-accent-hover"
        }`}
      >
        {siteCopy.hero.cta}
      </Link>
      <p className={`text-sm ${light ? "text-white/70" : "text-muted"}`}>
        {siteCopy.hero.ctaNote}
      </p>
    </div>
  );
}
