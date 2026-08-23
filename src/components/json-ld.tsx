import { siteCopy } from "@/content/site-copy";
import { LESSON_LENGTHS, PRICING_TIERS, SINGLE_LESSON } from "@/lib/pricing";
import { SITE_NAME, SITE_URL } from "@/lib/site";

function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function HomeJsonLd() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteCopy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const teacherJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matt Shill",
    url: SITE_URL,
    image: `${SITE_URL}/Headshot.jpg`,
    jobTitle: "Music Teacher",
    description: siteCopy.about.bio[0],
    email: siteCopy.contact.email,
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Frost School of Music, University of Miami",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Eastman School of Music",
      },
    ],
    knowsAbout: [
      "Piano",
      "Guitar",
      "Voice",
      "Bass",
      "Drums",
      "Songwriting",
      "Music production",
      "Conservatory audition preparation",
    ],
    worksFor: {
      "@type": "MusicSchool",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const musicSchoolJsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicSchool",
    name: SITE_NAME,
    url: SITE_URL,
    description: siteCopy.seo.description,
    email: siteCopy.contact.email,
    image: [`${SITE_URL}/weddingpiano.jpg`, `${SITE_URL}/Headshot.jpg`],
    logo: `${SITE_URL}/logo.png`,
    founder: {
      "@type": "Person",
      name: "Matt Shill",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    availableLanguage: "English",
    teaches: [
      "Piano",
      "Guitar",
      "Voice",
      "Bass",
      "Drums",
      "Songwriting",
      "Music production",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      reviewCount: String(siteCopy.testimonials.items.length),
    },
    review: siteCopy.testimonials.items.map((item) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: item.name,
      },
      reviewBody: item.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
    offerCatalog: {
      "@type": "OfferCatalog",
      name: "Music lesson subscriptions and single lessons",
      itemListElement: [
        ...PRICING_TIERS.map((tier) => ({
          "@type": "Offer",
          name: `${tier.label} weekly lesson`,
          description: `Weekly one-on-one ${tier.length}-minute online music lesson`,
          price: tier.monthlyPrice.toFixed(2),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#pricing`,
        })),
        ...LESSON_LENGTHS.map((length) => ({
          "@type": "Offer",
          name: `${length} Min single lesson`,
          description: `One-time ${length}-minute online music lesson`,
          price: SINGLE_LESSON[length].price.toFixed(2),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#pricing`,
        })),
      ],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: siteCopy.seo.description,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(musicSchoolJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(teacherJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteJsonLd) }}
      />
    </>
  );
}

export function LessonJsonLd({
  name,
  description,
  url,
  faq,
}: {
  name: string;
  description: string;
  url: string;
  faq: readonly { question: string; answer: string }[];
}) {
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    provider: {
      "@type": "MusicSchool",
      name: SITE_NAME,
      url: SITE_URL,
    },
    instructor: {
      "@type": "Person",
      name: "Matt Shill",
    },
    educationalLevel: "Beginner to Advanced",
    inLanguage: "en",
    isAccessibleForFree: false,
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/free-trial`,
      category: "Free trial lesson available",
      availability: "https://schema.org/InStock",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
      />
    </>
  );
}
