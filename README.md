# Shridhar Technologies website

Marketing site for Shridhar Technologies, an AI-accelerated software studio. Built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and MDX.

> This project runs a Next.js version with breaking changes. Before editing routing, metadata, fonts, images or route handlers, read the matching guide in `node_modules/next/dist/docs/` (see `AGENTS.md`).

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static export to out/ (native Next.js build on Vercel)
```

## Environment variables

Set these in the hosting dashboard (and in `.env.local` for local testing).

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical domain used for canonical tags, the sitemap, robots, JSON-LD and Open Graph URLs. Falls back to the Vercel subdomain. |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms access key for the contact form. Without it the form shows an error with the fallback email. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Enables Plausible analytics and the `cta_click`, `form_submit_success`, `call_click`, `whatsapp_click` and `booking_opened` events. Leave unset to disable analytics. |

## Editing content

Copy lives in data files, not in components.

| What | Where |
|---|---|
| Company details, phone, email, WhatsApp, booking link, offices, social links | `data/siteConfig.ts` |
| Homepage hero, proof points, delivery timeline | `data/hero.ts` |
| "How we ship faster" section | `data/aiDelivery.ts` |
| "What we build" cards | `data/outcomes.ts` |
| Services and categories (copy, SEO descriptions, AI bullets) | `data/services.ts` |
| Case studies | `data/portfolio.ts` |
| Numbers shown anywhere on the site | `data/stats.ts` |
| FAQs, process steps, differentiators, values, engagement models, careers | `data/*.ts` |
| Testimonials (hidden until `showTestimonials` is true) | `data/testimonials.ts` |
| Legal pages | `data/legal.ts` |
| Blog posts | `content/blog/*.mdx`, registered in `data/blogIndex.ts` |

Writing rules: no em dashes or en dashes in copy, and no spaced hyphen used as a dash. Use a period, comma, colon or parentheses instead.

### Blog posts

Each MDX file exports `metadata` (title, excerpt, date, tags, readingTime, and optional `image` and `author`). Add `<InlineCta />` after the second section. The table of contents is built from `## ` headings.

### Images

Photos live in `public/images` as `<name>-800.webp` and `<name>-1600.webp` (under 150KB each). Reference them by base path, for example `/images/team`, through `components/shared/ResponsiveImage.tsx`. To add one, export a 1600px wide WebP and an 800px version with the same name.

## Owner checklist

Facts that still need confirming are marked in code comments with `[OWNER TO CONFIRM]`:

```bash
grep -rn "OWNER TO CONFIRM" app components data content lib
```

These include the company email domain, booking link, WhatsApp number, real testimonials, leadership profiles, AI tools and data policy, prices, domain, and confirmation that the case studies are publishable.

## Deploying

The site deploys on Vercel, which builds Next.js natively. Outside Vercel, `npm run build` produces a static export in `out/` that any static host can serve. The contact form (Web3Forms) and analytics (Plausible) are client side, so both builds behave the same.

Before launch, set `NEXT_PUBLIC_SITE_URL` to the real domain and redirect the Vercel subdomain to it.
