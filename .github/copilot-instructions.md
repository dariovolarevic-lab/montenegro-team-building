# Montenegro Team Building — Project Context

## Overview
A Next.js website for a Montenegro-based team-building activities company, modeled after [dubrovnikteambuilding.com](https://www.dubrovnikteambuilding.com/) but localized for Montenegro.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Icons:** react-icons (HeroIcons, FontAwesome)
- **Package Manager:** npm

## Project Structure
```
montenegro-team-building/
├── public/
│   └── images/
│       ├── activities/       # 12 activity placeholder images (SVG as .jpg)
│       ├── gallery/          # 12 gallery placeholder images
│       ├── team/             # 3 team member placeholder images
│       └── hero.jpg          # Landing page hero background
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout — Inter font, Header + Footer
│   │   ├── globals.css       # Tailwind import + base styles
│   │   ├── page.tsx          # Landing page (hero, stats, activity grid, CTA)
│   │   ├── not-found.tsx     # Custom 404 page
│   │   ├── about/
│   │   │   └── page.tsx      # About Us (intro, team members, values)
│   │   ├── gallery/
│   │   │   └── page.tsx      # Gallery with lightbox
│   │   ├── contact/
│   │   │   └── page.tsx      # Contact form + map + info
│   │   ├── activity/
│   │   │   └── [slug]/
│   │   │       └── page.tsx  # Dynamic activity detail page (SSG)
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts  # POST handler for contact form
│   ├── components/
│   │   ├── Header.tsx        # Fixed navbar, mobile hamburger menu (client)
│   │   ├── Footer.tsx        # 3-column footer with brand, links, contact
│   │   ├── HeroSection.tsx   # Reusable hero banner (bg image + overlay)
│   │   ├── ActivityCard.tsx  # Card with image, title, description, meta
│   │   ├── ContactForm.tsx   # Form with validation + API submission (client)
│   │   └── GalleryGrid.tsx   # Responsive image grid + lightbox modal (client)
│   └── data/
│       └── activities.ts     # Activity data model + 12 sample activities
├── scripts/
│   └── generate-placeholders.js  # Script to regenerate placeholder SVGs
├── next.config.mjs
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Pages & Routes
| Route | Type | Description |
|---|---|---|
| `/` | Static | Landing page — hero, "Why Montenegro" section, 12 activity cards grid, CTA |
| `/activity/[slug]` | SSG (generateStaticParams) | Activity detail — hero image, description, sidebar with details + enquiry CTA |
| `/about` | Static | Company intro, 3 team members, 3 company values |
| `/gallery` | Static | 12-image grid with click-to-open lightbox (prev/next navigation) |
| `/contact` | Static | Contact form (name, email, subject, message) + Google Maps embed |
| `/api/contact` | Dynamic (POST) | Form handler — validates fields, logs to console (email integration TODO) |

## Data Model
Activities are defined in `src/data/activities.ts` as a TypeScript array:
```ts
interface Activity {
  slug: string;           // URL-friendly ID, e.g. "bay-of-kotor-kayaking"
  title: string;          // Display name
  subtitle: string;       // Short tagline
  description: string;    // Full text (paragraphs separated by \n\n)
  shortDescription: string; // Card preview text
  image: string;          // Path in /public/images/activities/
  duration: string;       // e.g. "2 - 4 hours"
  numberOfPeople: string; // e.g. "10 - 80"
  category: string;       // e.g. "Water Activities", "Adventure", etc.
}
```

Helper functions: `getActivityBySlug(slug)`, `getAllSlugs()`

## 12 Sample Activities
1. Bay of Kotor Kayaking (Water Activities)
2. Lovćen Mountain Hiking Challenge (Adventure)
3. Budva Old Town Rally (City Challenges)
4. Tara River Rafting Race (Adventure)
5. Kotor Fortress Treasure Hunt (City Challenges)
6. Wine Tasting in Crmnica Valley (Food & Culture)
7. Sailing Regatta — Boka Bay (Water Activities)
8. Beach Games — Jaz Beach (Outdoor Fun)
9. Speed Boat Challenge — Herceg Novi (Water Activities)
10. Durmitor Off-Road Adventure (Adventure)
11. Giant SUP Race — Sveti Stefan (Water Activities)
12. Montenegrin Cooking Competition (Food & Culture)

## Design System
- **Color palette:** Slate-900 (dark navy) for header/footer/accents, Amber-400/500 (gold) for CTAs and highlights, Gray-50 backgrounds, White cards
- **Typography:** Inter (Google Font via next/font), clean sans-serif
- **Layout:** Max-width 7xl container, responsive grid (1 col mobile → 2 col tablet → 3 col desktop)
- **Components:** Rounded-xl cards with shadow, hover lift effects, amber accent badges

## Key Patterns
- **Client components** are marked with `"use client"`: Header (mobile menu state), ContactForm (form state), GalleryGrid (lightbox state)
- **Server components** are default: all pages, Footer, HeroSection, ActivityCard
- Activity detail pages use `generateStaticParams()` for build-time SSG and `generateMetadata()` for per-page SEO
- Root layout sets template-based `<title>`: `"%s | Montenegro Team Building"`

## Placeholder Content
All images are SVG files saved as `.jpg` — gradient backgrounds with centered text labels. Replace with real Montenegro photography before production.

## Contact Info (Placeholder)
- **Company:** Montenegro Team Building
- **Address:** Stari Grad bb, 85330 Kotor, Montenegro
- **Phone:** +382 69 123 456
- **Email:** info@montenegroteambuilding.com

## TODOs
- [ ] Replace placeholder images with real Montenegro photos
- [ ] Update contact info with real company details
- [ ] Integrate contact form API with email service (SendGrid/Resend)
- [ ] Add real social media links (Facebook, Instagram, LinkedIn)
- [ ] Add `metadataBase` to root layout for proper OG image URLs
- [ ] Consider adding a CMS (Contentful/Sanity) for activity management
- [ ] Add analytics (Google Analytics / Plausible)
- [ ] Add cookie consent banner if required
