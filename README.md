# Maya Reynolds, PsyD — Therapy Website

> Professional therapy website for Dr. Maya Reynolds, Licensed Clinical Psychologist based in Santa Monica, California.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://maya-reynolds-therapy-five.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)

---

## 🌐 Live Site

| Environment | URL |
|---|---|
| **Production** | [maya-reynolds-therapy-five.vercel.app](https://maya-reynolds-therapy-five.vercel.app) |
| **Vercel Dashboard** | [vercel.com/disha-65d5/maya-reynolds-therapy](https://vercel.com/disha-65d5/maya-reynolds-therapy) |
| **Inspect Last Deployment** | [Deployment Inspector](https://vercel.com/disha-65d5/maya-reynolds-therapy/FRUxmDSCsbErYqrAyyGu8PJo5oRz) |

---

## 📋 Project Overview

A fully static, production-ready therapy practice website built with **Next.js 16 App Router**. Designed to be calm, professional, and accessible — matching the tone of a private clinical psychology practice.

### Pages & Sections
- **Hero** — Headline, CTA, hero image with floating quote card
- **Who I Work With** — Description of ideal clients
- **Services** — Anxiety & Panic · Trauma & EMDR · Burnout & Perfectionism
- **How I Work** — Therapeutic approach and methods
- **Our Office** — Location info, in-person + telehealth details, dual office photos
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

## 🔒 Security

HTTP security headers configured in [`next.config.ts`](./next.config.ts) and applied to every route:

| Header | Value |
|---|---|
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Content-Security-Policy` | Restricts scripts, styles, fonts, images to trusted origins |

---

## 🔍 SEO

- **Title & description** — Per-page metadata via Next.js `Metadata` API
- **Open Graph** — Title, description, image for social sharing
- **Twitter Card** — `summary_large_image` format
- **Robots** — Auto-generated at `/robots.txt` via `app/robots.ts`
- **Sitemap** — Auto-generated at `/sitemap.xml` via `app/sitemap.ts`
- **Structured Data** — `LocalBusiness` + `Person` JSON-LD schema for Google rich results
- **Semantic HTML** — `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<address>`, `<footer>`

---

## ♿ Accessibility

- All images have descriptive `alt` text, explicit `width` / `height`, and `loading` attributes
- Interactive elements have `aria-label`, `aria-expanded`, `aria-controls`
- Mobile menu toggle is fully keyboard accessible
- FAQ accordion uses native `<details>` / `<summary>` (no JavaScript required)
- Smooth scroll via `scroll-behavior: smooth` in CSS
- Colour contrast ratios meet WCAG AA

---

## 🚀 Getting Started (Local Development)

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The main page is [`app/page.tsx`](./app/page.tsx) — the browser hot-reloads on every save.

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

## 📦 Build & Deploy

### Production Build (local verification)
```bash
npm run build
```

Expected output:
```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /robots.txt
└ ○ /sitemap.xml

○  (Static)  prerendered as static content
```

### Deploy to Vercel
```bash
vercel --prod
```

All routes are fully **static** — served instantly from Vercel's global Edge Network with zero cold starts.

---

## ✅ Pre-Launch Checklist

Before pointing a real domain to this project, update the following placeholders:

- [ ] Replace `https://mayareynoldspsyd.com` with the real domain in [`app/layout.tsx`](./app/layout.tsx) and [`app/sitemap.ts`](./app/sitemap.ts)
- [ ] Replace `maya@mayareynoldspsyd.com` with the real contact email in [`app/page.tsx`](./app/page.tsx)
- [ ] Replace `123th Street 45 W` with the real office address in [`app/page.tsx`](./app/page.tsx)
- [ ] Add the real domain in Vercel Dashboard → Settings → Domains
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)

---

## 📄 License

Private project — all rights reserved. © 2026 Maya Reynolds, PsyD.
