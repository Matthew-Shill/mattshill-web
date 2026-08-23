import { siteCopy } from "@/content/site-copy";
import { SignatureStroke } from "@/components/signature-stroke";

export function Credibility() {
  return (
    <div className="px-4 pb-6 pt-2 sm:px-6 md:pb-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-lg font-semibold text-foreground sm:text-xl">
          {siteCopy.credibility.line}
        </p>
        <SignatureStroke className="mx-auto mt-2 h-4 w-40 text-coral" />
      </div>
    </div>
  );
}
