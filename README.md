# Koon Kitchen — Thai Fusion Restaurant Website

A premium, modern restaurant website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**. Features a dark cinematic design with Thai-English bilingual support, CMS-ready Sanity integration, and a full reservation system.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Playfair Display + Inter (next/font) |
| Icons | Material Symbols |
| CMS | Sanity (schemas ready, Studio configured) |
| Validation | Zod |
| Animation | CSS-only (Intersection Observer, transitions) |
| Design | Dark theme, glass panels, terracotta + gold accent |

## Features

- **Home** — Cinematic hero, animated stats, featured dishes, testimonials, info strip
- **Menu** — Category filter (All, Appetizers, Main, Fusion, Desserts, Drinks), 9 items with images, badges, descriptions
- **Gallery** — Masonry layout with category filter (Interior, Food, Atmosphere, Kitchen)
- **Reservation** — Full form with date/time/guests/contact fields, TH/EN toggle, floating labels, confirmation screen, API-backed submission
- **About** — Brand story, core values cards, bilingual Thai/English
- **Contact** — Bento grid info cards, Google Maps embed, opening hours, private events CTA
- **Error/404** — Styled error boundaries
- **Sanity Studio** — Ready at `/studio` for content management

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Deployment

Deploy to **Vercel** with zero configuration:

1. Push this repo to GitHub
2. Import into Vercel
3. Add `NEXT_PUBLIC_SANITY_PROJECT_ID` to Vercel environment variables
4. Deploy

## Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page + Google Maps
│   ├── gallery/        # Photo gallery with masonry layout
│   ├── menu/           # Menu with category filtering
│   ├── reservation/    # Reservation form + API submission
│   ├── studio/         # Sanity CMS Studio
│   ├── api/            # API routes (reservation)
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   ├── globals.css     # Design system
│   ├── not-found.tsx   # 404 page
│   └── error.tsx       # Error boundary
├── components/
│   ├── Navbar.tsx      # Sticky nav with mobile hamburger
│   ├── Footer.tsx      # Brand + legal + social
│   ├── FadeUp.tsx      # Scroll animation wrapper
│   └── MaterialIcon.tsx # Icon component
├── sanity/
│   ├── schemas/        # Sanity content models
│   ├── client.ts       # Sanity client
│   ├── env.ts          # Sanity env vars
│   └── sanity.config.ts # Studio config
└── components/
```

## Design

Dark theme with warm terracotta accent (`#C75B39`) and gold tertiary (`#E7C26F`):
- **Glass panels** — backdrop-blur surfaces for depth
- **Scroll animations** — FadeUp intersection observer
- **Bilingual** — Thai (primary) and English throughout
- **Responsive** — Mobile-first with full desktop layout
- **Typography** — Playfair Display (headlines, serif) + Inter (body, sans-serif)

## Portfolio

This is **Project #01** from a 10-project freelance portfolio by Gam.
