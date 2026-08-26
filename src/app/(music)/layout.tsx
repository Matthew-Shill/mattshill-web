import { SiteChrome } from "@/components/site-chrome";

export default function MusicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteChrome>{children}</SiteChrome>;
}
