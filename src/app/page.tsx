import { HomeJsonLd } from "@/components/json-ld";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowWeTeach } from "@/components/how-we-teach";
import { NmlSection } from "@/components/nml-section";
import { PricingSection } from "@/components/pricing-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Testimonials } from "@/components/testimonials";
import { WhoItsFor } from "@/components/who-its-for";

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Testimonials />
        <WhoItsFor />
        <HowWeTeach />
        <NmlSection />
        <PricingSection />
        <About />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
