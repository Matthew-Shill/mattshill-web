import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

interface WidgetPageLayoutProps {
  title: string;
  description: string;
  highlights?: readonly string[];
  children: React.ReactNode;
}

export function WidgetPageLayout({
  title,
  description,
  highlights,
  children,
}: WidgetPageLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
          <p className="mt-4 text-lg text-muted">{description}</p>

          {highlights && highlights.length > 0 && (
            <ul className="mt-6 space-y-2 rounded-xl border border-border bg-accent-subtle p-6">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted">
                  <span className="shrink-0 text-accent">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
