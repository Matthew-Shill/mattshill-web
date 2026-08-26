export type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalDocument = {
  slug: "privacy" | "terms";
  title: string;
  metaTitle: string;
  description: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export const LAST_UPDATED = "August 22, 2026";

export const privacyPolicy: LegalDocument = {
  slug: "privacy",
  title: "Privacy Policy",
  metaTitle: "Privacy Policy | Matt Shill Music",
  description:
    "How Matt Shill Music collects, uses, and shares information for online music lessons, scheduling, billing, and the student portal.",
  lastUpdated: LAST_UPDATED,
  intro:
    "This Privacy Policy explains how Matt Shill Music (“we,” “us,” or “our”) collects, uses, and shares information when you visit mattshill.com, book a free trial, subscribe to lessons, or use our student portal.",
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        "Matt Shill Music is my personal online teaching studio, offering one-on-one lessons in piano, guitar, voice, bass, drums, songwriting, and related musicianship. Billing is handled through Stripe. Scheduling and the student portal use tools on this site, including My Music Staff widgets.",
        "Questions about this policy or your information: [contact@mattshill.com](mailto:contact@mattshill.com).",
      ],
    },
    {
      heading: "Information we collect",
      paragraphs: [
        "We collect information you give us, information created while we teach, and limited technical data from your use of the site.",
      ],
      bullets: [
        "Account and contact details: name, email address, phone number, time zone, and messages you send us.",
        "Student details: instrument, age or grade, skill level, goals, and other information needed to plan lessons. For minors, we also collect parent or guardian contact information.",
        "Scheduling and portal data: lesson times, attendance, practice assignments, lesson notes, and in-portal messages.",
        "Lesson recordings: live lessons may be recorded, and Never Miss a Lesson™ makeup videos are recorded when a live session cannot happen.",
        "Payment information: subscriptions are processed by Stripe. We receive billing status, subscription plan, and limited payment metadata. We do not store full card numbers on our servers.",
        "Technical data: standard server logs such as IP address, browser type, device information, and pages visited. Third-party widgets (Stripe Checkout, My Music Staff, and our scheduling tool) may also collect data as described in their own policies.",
      ],
    },
    {
      heading: "How we use information",
      paragraphs: ["We use the information we collect to:"],
      bullets: [
        "Schedule, deliver, and manage online lessons, including free trials.",
        "Process subscriptions, invoices, and cancellations through Stripe.",
        "Send lesson confirmations, schedule changes, billing notices, and replies to your messages.",
        "Create lesson notes, assignments, and progress records in the student portal.",
        "Record lessons for instruction, review, and the Never Miss a Lesson™ guarantee, not for advertising."
        "Operate, secure, and improve the website and studio.",
        "Comply with law and enforce our [Terms of Service](/terms).",
      ],
    },
    {
      heading: "How we share information",
      paragraphs: [
        "We do not sell your personal information. We share it only as needed to run the studio:",
      ],
      bullets: [
        "Stripe, for checkout, recurring billing, and the billing portal.",
        "My Music Staff, for trial booking and the student portal.",
        "The scheduling tool embedded on this site for choosing a weekly lesson time.",
        "The video meeting service used for live lessons.",
        "Hosting and infrastructure providers that keep the website online.",
        "Professional advisors or authorities when required by law or to protect the studio, students, or others.",
      ],
    },
    {
      heading: "Children and family accounts",
      paragraphs: [
        "We teach children and teens. A parent or guardian must create and manage the account for any student under 13, and should supervise accounts for older minors as appropriate.",
        "We collect only what we need to provide lessons to that student. We do not use children’s information for marketing unrelated to the studio, and we do not sell it.",
        "A parent or guardian may request access to, correction of, or deletion of a child’s information by emailing [contact@mattshill.com](mailto:contact@mattshill.com).",
      ],
    },
    {
      heading: "Lesson recordings",
      paragraphs: [
        "Live lessons may be recorded, and custom Never Miss a Lesson™ videos are recorded when a student cannot attend live. Recordings exist so students can review material, so progress can continue after a conflict, and so teaching can stay consistent.",
        "We do not sell recordings or use them for advertising. We may share a recording with the student or parent on the account. Please do not post a lesson recording publicly without our written permission.",
      ],
    },
    {
      heading: "Cookies and similar technologies",
      paragraphs: [
        "The website uses cookies and similar technologies that are needed to operate the site. Embedded third-party tools, including Stripe, My Music Staff widgets, and the scheduling iframe, may set their own cookies or local storage. Those tools are governed by their own privacy policies."
        "This site does not currently run a separate first-party advertising or analytics pixel. Your browser settings can block some cookies, which may affect checkout, scheduling, or the portal.",
      ],
    },
    {
      heading: "How long we keep information",
      paragraphs: [
        "We keep student, billing, and lesson records for as long as you have an active account and for a reasonable period afterward, for example to complete a billing cycle, handle a question, or meet recordkeeping obligations. Recordings and portal notes are retained for instructional and studio-administration purposes unless you ask us to delete them and we are not required to keep them."
        "You can request deletion at [contact@mattshill.com](mailto:contact@mattshill.com). We may retain limited information when the law requires it or when we need it to resolve a dispute.",
      ],
    },
    {
      heading: "Your choices and rights",
      paragraphs: [
        "You can update contact or scheduling details through the portal, by email, or through the Stripe billing portal for payment methods and invoices.",
        "Depending on where you live, you may have the right to request access to, correction of, or deletion of your personal information, to ask for a copy of it, or to appeal our response. We will not discriminate against you for exercising those rights.",
        "To make a request, email [contact@mattshill.com](mailto:contact@mattshill.com). We may need to verify that you are the account holder or the parent or guardian on the account.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We use reasonable administrative and technical measures to protect information. No website, payment processor, or video tool is completely secure. Please use a unique password for your portal and billing accounts and contact us promptly if you think an account was accessed without permission.",
      ],
    },
    {
      heading: "International visitors",
      paragraphs: [
        "Matt Shill Music is based in the United States. If you access the site or take lessons from another country, your information may be processed in the United States, where privacy laws may differ from those in your location.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will change when we do. Continued use of the site or lessons after an update means you accept the revised policy.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "Matt Shill Music",
        "Email: [contact@mattshill.com](mailto:contact@mattshill.com)",
        "Website: [www.mattshill.com](https://www.mattshill.com)",
      ],
    },
  ],
};

export const termsOfService: LegalDocument = {
  slug: "terms",
  title: "Terms of Service",
  metaTitle: "Terms of Service | Matt Shill Music",
  description:
    "Terms for Matt Shill Music online lessons, free trials, weekly subscriptions, scheduling, and the student portal.",
  lastUpdated: LAST_UPDATED,
  intro:
    "These Terms of Service (“Terms”) govern your use of mattshill.com and the online music lessons offered by Matt Shill Music (“we,” “us,” or “our”). By booking a trial, subscribing, or using the site, you agree to these Terms.",
  sections: [
    {
      heading: "The studio",
      paragraphs: [
        "Matt Shill Music provides one-on-one online music lessons and related studio tools: scheduling, a student portal, lesson notes, and the Never Miss a Lesson™ guarantee. Subscriptions are billed through Stripe. Booking and portal features currently run on My Music Staff.",
        "If you have questions: [contact@mattshill.com](mailto:contact@mattshill.com).",
      ],
    },
    {
      heading: "Who may use the studio",
      paragraphs: [
        "You must be at least 18 years old to create an account, subscribe, or accept these Terms. If a student is under 18, a parent or guardian must enter the agreement, manage billing, and is responsible for the student’s use of lessons and the portal.",
        "We may decline a trial or subscription, or discontinue lessons, if we determine the studio is not the right fit or these Terms are not being followed.",
      ],
    },
    {
      heading: "Free trial",
      paragraphs: [
        "A free trial is a short, no-commitment online session so we can talk through goals, assess level, and see whether weekly lessons are a good fit. A trial does not create a paid subscription. After the trial, you may subscribe through this site if we both want to continue.",
      ],
    },
    {
      heading: "Subscriptions, billing, and cancellation",
      paragraphs: [
        "Paid lessons are sold as a weekly subscription. You choose a lesson length and pay monthly or yearly through Stripe. Current prices are listed on the website and may change for future billing periods; we will not change the rate of an already-paid period without notice.",
        "Yearly billing is discounted relative to monthly billing, as shown at checkout. After you subscribe, you choose a weekly lesson time. Confirmations and account updates come from me.",
        "You may cancel anytime before your next billing cycle through the Stripe billing portal or by emailing us. Cancellation stops future charges. Unless required by law or we agree otherwise in writing, we do not refund a billing period that has already started, including unused lessons in that period.",
        "Failed payments may pause scheduling until the account is current. We may suspend or end lessons for nonpayment.",
      ],
    },
    {
      heading: "Scheduling and attendance",
      paragraphs: [
        "Lessons are live, one-on-one video sessions at the weekly time you select, in the time zone you choose. You are responsible for a reliable internet connection, a device with a camera and microphone, a reasonably quiet space, and your instrument (or a keyboard for beginning piano).",
        "If you need to change a regular time, contact us as early as you can. We will do our best to find another slot, but a preferred time is not guaranteed.",
      ],
    },
    {
      heading: "Never Miss a Lesson™",
      paragraphs: [
        "Every subscription includes the Never Miss a Lesson™ guarantee. If a student cannot attend the live lesson, you may request a custom recorded lesson with updated notes so that week’s progress is not lost. Live lessons may also be recorded for review.",
        "A Never Miss a Lesson™ video is a makeup for that week. It is not a refund, a credit, or an extra lesson. If I need to cancel a live lesson, I will reschedule or provide a recorded lesson so you still receive instruction for that week."
      ],
    },
    {
      heading: "Student and family responsibilities",
      paragraphs: [
        "Students and parents agree to treat lessons, recordings, and studio communication with basic professionalism: show up on time or request a makeup, keep the session appropriate for a teaching environment, and avoid sharing portal logins.",
        "Parents are welcome to observe younger students, especially early on. We will agree on what works for your family. Parents remain responsible for supervision of minors on video calls and for any equipment in the home.",
        "We may end a lesson or the subscription if conduct is abusive, unsafe, repeatedly disruptive, or otherwise incompatible with teaching.",
      ],
    },
    {
      heading: "Recordings and materials",
      paragraphs: [
        "By taking lessons, you consent to instructional recording of live sessions and Never Miss a Lesson™ videos, as described in our [Privacy Policy](/privacy). Recordings are for teaching and review, not for public posting or sale.",
        "Lesson plans, method materials, recordings I create, and studio content remain the property of Matt Shill Music. You may use them for the student’s personal practice. You may not copy, resell, or publish them as your own teaching product.",
        "Original music a student writes or records as their own work remains the student’s (or the family’s) property. If we later want to share a student performance publicly, we will ask first.",
      ],
    },
    {
      heading: "No guaranteed outcomes",
      paragraphs: [
        "Lessons are designed to help students make real progress. Conservatory acceptances, exam results, performance opportunities, and creative outcomes depend on many factors outside the studio. We do not guarantee a specific result, admission, score, or timeline.",
      ],
    },
    {
      heading: "Third-party services",
      paragraphs: [
        "Checkout, billing, scheduling, and the portal rely on third parties, including Stripe and My Music Staff. Their sites and widgets have their own terms and privacy policies. We are not responsible for a third-party service we do not control, including an outage that delays checkout or login.",
      ],
    },
    {
      heading: "Website use",
      paragraphs: [
        "You may use mattshill.com to learn about the studio, book a trial, subscribe, and reach the portal. You may not misuse the site, including attempting to break security, scrape the site in a way that harms its operation, or use it for anything unlawful."
      ],
    },
    {
      heading: "Disclaimers and limitation of liability",
      paragraphs: [
        "Lessons and the website are provided “as is.” To the fullest extent allowed by law, we disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Online lessons depend on your internet, device, and environment; we are not responsible for problems on your side of the call.",
        "To the fullest extent allowed by law, Matt Shill Music’s total liability for any claim arising out of the site or lessons is limited to the amount you paid us in the three months before the claim. We are not liable for indirect, incidental, special, consequential, or lost-profit damages. Some places do not allow these limits; in those places, our liability is limited to the maximum extent permitted.",
      ],
    },
    {
      heading: "Indemnity",
      paragraphs: [
        "You agree to indemnify and hold harmless Matt Shill Music and Matt Shill from claims, damages, and reasonable legal fees arising from your (or the student’s) misuse of the site or lessons, or from your breach of these Terms, except to the extent we caused the problem."
      ],
    },
    {
      heading: "Ending the relationship",
      paragraphs: [
        "You may cancel as described in the billing section. We may suspend or end access if you breach these Terms, fail to pay, or if we discontinue the studio. Sections that should survive, including payment already due, intellectual property, disclaimers, limitation of liability, and indemnity, will survive cancellation."
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "We may update these Terms from time to time. The “Last updated” date on this page will change when we do. If you continue lessons or use the site after an update, you accept the revised Terms. If you do not agree, cancel before your next billing cycle and stop using the site.",
      ],
    },
    {
      heading: "General",
      paragraphs: [
        "These Terms, together with the [Privacy Policy](/privacy) and the plan you select at checkout, are the entire agreement between you and Matt Shill Music for the website and lessons. They replace any prior informal promises about the same subject.",
        "These Terms are governed by the laws of the United States, without regard to conflict-of-law rules. If a court finds a part of these Terms unenforceable, the rest remains in effect.",
        "Matt Shill Music: [contact@mattshill.com](mailto:contact@mattshill.com).",
      ],
    },
  ],
};
