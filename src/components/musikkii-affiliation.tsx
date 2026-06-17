import { siteCopy } from "@/content/site-copy";

type MusikkiiAffiliationProps = {
  variant?: "header" | "footer";
  showFooterNote?: boolean;
};

export function MusikkiiAffiliation({
  variant = "header",
  showFooterNote = false,
}: MusikkiiAffiliationProps) {
  const isFooter = variant === "footer";
  const { musikkii } = siteCopy;

  return (
    <span
      className={`inline-flex max-w-sm flex-wrap items-center gap-x-1 gap-y-0.5 ${
        isFooter ? "text-xs" : "text-[10px] leading-none sm:text-[11px]"
      }`}
    >
      <span
        className={`font-medium ${isFooter ? "text-white/80" : "text-[#0331bd]"}`}
      >
        {musikkii.teacherAffiliation}
      </span>
      {showFooterNote && (
        <>
          <span className="text-white/40">·</span>
          <span className="text-white/50">{musikkii.footerNote}</span>
        </>
      )}
    </span>
  );
}
