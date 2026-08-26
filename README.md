# Matt Shill Music Website

Personal teaching site for [Matt Shill Music](https://www.mattshill.com): online music lessons with subscription billing via Stripe and student management via My Music Staff.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Site structure

| Route | Purpose |
|-------|---------|
| `/` | Homepage: hero, what/who, how, pricing, about, contact |
| `/free-trial` | My Music Staff free trial signup widget |
| `/portal` | My Music Staff student portal widget |
| `/schedule` | Availability iframe for weekly lesson time requests |

## Configuration

- **Pricing & Stripe links:** [`src/lib/pricing.ts`](src/lib/pricing.ts)
- **Site copy:** [`src/content/site-copy.ts`](src/content/site-copy.ts)
- **Contact email:** Update `siteCopy.contact.email` in site-copy.ts
- **Photos:** Replace placeholder blocks in `hero.tsx` and `about.tsx` when assets are ready

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Deploy with default Next.js settings (no env vars required for initial launch).

## Connect mattshill.com

After deploying to Vercel:

1. In the Vercel project, go to **Settings → Domains** and add `mattshill.com` and `www.mattshill.com`.
2. At your domain registrar, update DNS:

   **Option A: Vercel nameservers (recommended)**

   Point your domain to Vercel's nameservers shown in the Vercel dashboard.

   **Option B: CNAME**

   | Type | Name | Value |
   |------|------|-------|
   | A | `@` | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns.com` |

3. Wait for DNS propagation (usually minutes, up to 48 hours).
4. Vercel will provision SSL automatically.

## External integrations

- **Stripe Payment Links:** subscription checkout (monthly/yearly)
- **Stripe Billing Portal:** linked from nav
- **My Music Staff:** student portal and free trial widgets
- **Scheduling:** embedded availability iframe at `/schedule`
