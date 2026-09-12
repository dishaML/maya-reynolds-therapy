# Maya Reynolds, PsyD — Therapy Website

> Professional therapy website for Dr. Maya Reynolds, Licensed Clinical Psychologist in Santa Monica, California.

---

## 🌐 Live Links

| | Link |
|---|---|
| **🚀 Production Site** | **https://maya-reynolds-therapy-five.vercel.app** |
| **🔍 Vercel Dashboard** | https://vercel.com/disha-65d5/maya-reynolds-therapy |
| **📦 Last Deployment** | https://vercel.com/disha-65d5/maya-reynolds-therapy/FRUxmDSCsbErYqrAyyGu8PJo5oRz |
| **🤖 Robots.txt** | https://maya-reynolds-therapy-five.vercel.app/robots.txt |
| **🗺️ Sitemap** | https://maya-reynolds-therapy-five.vercel.app/sitemap.xml |

---

## 📋 Project Overview

A fully static, production-ready therapy practice website built with **Next.js 16 App Router**. Designed to be calm, professional, and accessible — matching the tone of a private clinical psychology practice.

### Sections
- **Hero** — Headline, CTA, hero image with floating quote card
- **Who I Work With** — Description of ideal clients
- **Services** — Anxiety & Panic · Trauma & EMDR · Burnout & Perfectionism
- **How I Work** — Therapeutic approach and methods
- **Our Office** — Location, in-person + telehealth details, dual office photos
- **About Dr. Maya** — Bio, portrait, therapy modality tags
- **FAQ** — Accessible accordion (`<details>` / `<summary>`)
- **Contact CTA** — Book an appointment section
- **Footer** — Address, availability, copyright

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.3.4 | Framework (App Router) |
| [React](https://react.dev) | 19.2.8 | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Styling |
| [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) | — | Serif font (headings) |
| [Geist Sans](https://vercel.com/font) | — | Sans-serif font (body) |

---

## 🔒 Security Headers

Configured in `next.config.ts` and applied to every route:

| Header | Value |
|---|---|
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Content-Security-Policy` | Scripts, styles, fonts, images restricted to trusted origins |

---

## 🔍 SEO

- Full title, description, Open Graph, and Twitter Card metadata
- `/robots.txt` → https://maya-reynolds-therapy-five.vercel.app/robots.txt
- `/sitemap.xml` → https://maya-reynolds-therapy-five.vercel.app/sitemap.xml
- `LocalBusiness` + `Person` JSON-LD schema for Google rich results
- Semantic HTML throughout (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<address>`, `<footer>`)

---

## 📁 Project Structure

```
maya-reynolds-therapy/
├── app/
│   ├── globals.css       # Tailwind v4 import, font-serif wiring, base styles
│   ├── layout.tsx        # Root layout — fonts, full SEO metadata
│   ├── page.tsx          # Main single-page site (Client Component)
│   ├── robots.ts         # /robots.txt generator
│   └── sitemap.ts        # /sitemap.xml generator
├── public/
│   └── images/
│       ├── maya-portrait.jpg
│       ├── office-1.jpg
│       └── office-2.jpg
├── next.config.ts        # Security headers + image optimisation
├── tsconfig.json
└── package.json
```

---

## 🚀 Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 📦 Build & Deploy

```bash
# Verify production build locally
npm run build

# Deploy to Vercel production
vercel --prod
```

All 4 routes are fully **static** — served from Vercel's global Edge Network with zero cold starts.

```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /robots.txt
└ ○ /sitemap.xml
```

---

## ✅ Pre-Launch Checklist

Before pointing a real custom domain to this project:

- [ ] Update canonical domain — replace `https://mayareynoldspsyd.com` in:
  - `app/layout.tsx` (metadataBase + OG URLs)
  - `app/sitemap.ts` (sitemap URL)
- [ ] Update contact email — replace `maya@mayareynoldspsyd.com` in `app/page.tsx`
- [ ] Update office address — replace `123th Street 45 W` in `app/page.tsx` (Office section + Footer)
- [ ] Add custom domain → https://vercel.com/disha-65d5/maya-reynolds-therapy/settings/domains
- [ ] Submit sitemap to Google Search Console → https://search.google.com/search-console

---

## 📄 License

Private project — all rights reserved. © 2026 Maya Reynolds, PsyD.
