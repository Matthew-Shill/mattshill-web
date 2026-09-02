export type DeveloperLink = {
  label: string;
  href: string;
};

export type DeveloperProject = {
  name: string;
  role: string;
  status?: string;
  summary: string;
  tags: readonly string[];
  links: readonly DeveloperLink[];
  repoPrivate?: boolean;
  clients?: readonly string[];
};

export const developerCopy = {
  name: "Matt Shill",
  role: "Software developer",
  location: "Colorado, US",
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  intro: {
    headline: "I build focused, real products.",
    lede:
      "Software developer and founder based in the US. I build focused, real products — from an AI-driven music education platform to production systems for two other businesses I run.",
    body: [
      "My background is in music, which shapes how I approach product: I care about craft, usability, and shipping things people actually use.",
    ],
  },
  skills: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
    },
    {
      label: "Product",
      items: ["React", "React Native", "Next.js", "Vite", "Tailwind"],
    },
    {
      label: "Platform",
      items: ["Supabase", "Stripe", "LiveKit", "Docker", "Vercel"],
    },
    {
      label: "Music",
      items: [
        "Composition",
        "Music Theory",
        "Audio Engineering",
        "Web Audio/DSP",
      ],
    },
  ],
  certifications: [
    "Meta Front-End Developer Professional Certificate",
    "Meta Back-End Developer Professional Certificate",
    "Google UX Design Professional Certificate",
  ],
  languages: [
    {
      name: "Spanish",
      level: "Conversational; reading and writing fluent",
    },
  ],
  projects: [
    {
      name: "Musikkii",
      role: "Founder & CEO",
      status: "In development",
      summary:
        "Full-stack web and mobile platform reimagining music education: AI-driven adaptive lesson paths, an in-app DAW with agentic AI song-creation workflows, live video lessons, and integrated practice tools. Leading a small team across product, design, and engineering.",
      tags: [
        "pnpm monorepo",
        "React",
        "Vite",
        "TypeScript",
        "Tailwind",
        "Radix UI",
        "Supabase",
        "Stripe",
        "LiveKit",
        "Kiki (Go / Anthropic)",
        "Docker",
      ],
      links: [
        { label: "Live site", href: "https://www.musikkii.com/" },
        { label: "Demo", href: "https://www.musikkii.com/demo" },
      ],
      repoPrivate: true,
    },
    {
      name: "Matt Shill Music",
      role: "Founder, Full-Stack Developer",
      summary:
        "Production website and business system for my music teaching business — built and maintain all client-facing flows (booking, scheduling, payments) and backend systems solo, currently serving 25–50 active students.",
      tags: [],
      links: [
        { label: "Live site", href: "https://www.mattshill.com/" },
        {
          label: "GitHub",
          href: "https://github.com/Matthew-Shill/mattshill-web",
        },
      ],
    },
    {
      name: "Trinity Web Guys, LLC",
      role: "Co-Founder & CTO",
      summary:
        "Web development agency building sites and business systems for small businesses. Built the company's own site and internal systems, plus client sites including the work listed below.",
      tags: [],
      links: [{ label: "Live site", href: "https://trinitywebguys.com/" }],
      repoPrivate: true,
      clients: [
        "Summit & Shore Hospitality",
        "Cornerstone Investment Properties",
        "Dewey's Stump Grinding",
        "Hollie Nicholson Wellness",
        "Artful Aesthetic Medicine",
        "Two Brothers Presents",
      ],
    },
  ] satisfies readonly DeveloperProject[],
  checkr: {
    href: "https://checkr.com/profiles/u/4bd662f8-4d58-406e-8aa7-4dc5621a57e8?_ref=embed_badge",
    badgeSrc:
      "https://checkr.com/profiles/u/4bd662f8-4d58-406e-8aa7-4dc5621a57e8/verified_badge?_ref=embed_badge",
    alt: "Checkr Profile",
  },
  contact: {
    note: "The fastest way to reach me is email.",
    links: [
      {
        label: "Email",
        href: "mailto:contact@mattshill.com",
        display: "contact@mattshill.com",
      },
      {
        label: "Phone",
        href: "tel:+15857941114",
        display: "(585) 794-1114",
      },
      {
        label: "GitHub",
        href: "https://github.com/Matthew-Shill",
        display: "github.com/Matthew-Shill",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/matthew-shill/",
        display: "linkedin.com/in/matthew-shill",
      },
      {
        label: "Resume",
        href: "/resume",
        display: "Download PDF",
      },
    ],
  },
} as const;
