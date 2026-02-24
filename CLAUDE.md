# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application (runs `prep` script first)
- `npm run prep` - Pre-build step: inlines markdown into JSON content files (run before `next build`)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js configuration

## Project Architecture

This is a Next.js 15 App Router site for **Codevibe**, a developer training company. TypeScript strict mode, Tailwind CSS v4.

### Directory Layout

```
src/
├── app/          # App Router pages
├── components/   # Reusable UI components
├── layouts/      # Page wrappers (DefaultLayout, BlankPageLayout, BodyContainer)
├── lib/          # Data services and utilities
├── types/        # TypeScript interfaces and enums
└── content/      # Static JSON data files (served in lieu of CMS)
    └── blog/     # One JSON file per blog post
```

### Data Flow

All page data lives in `src/content/*.json` and `src/content/blog/*.json`. Two services abstract access:

- **`PageDataService`** (`src/lib/PageDataService.ts`) — loads homepage, courses page, and static pages (imprint, privacy, T&Cs). Acts as a singleton; merges common nav/footer from `commonPageData.json` with page-specific content.
- **`BlogService`** (`src/lib/BlogService.ts`) — reads all JSON files from `src/content/blog/`, returns sorted post list and individual posts by slug.
- **`PricingService`** (`src/lib/PricingService.ts`) — pricing is a lookup table keyed by `PricingLevel × durationHours`; prices are NOT stored directly on course objects.
- **`courses.ts`** (`src/lib/courses.ts`) — `getFeaturedCourses()`, `getCourseById()` helpers.

### Routes

| URL | File | Notes |
|-----|------|-------|
| `/` | `app/page.tsx` | Hero, featured courses, illustrated text |
| `/seminare` | `app/seminare/page.tsx` | `'use client'` — live search/filter by title & description |
| `/seminare/[slug]` | `app/seminare/[slug]/page.tsx` | Slug format: `g01-golang-grundlagen` (ID + title) |
| `/blog` | `app/blog/page.tsx` | Blog listing, newest first |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Static params from `BlogService.getAllSlugs()` |
| `/impressum`, `/datenschutz`, `/agb` | respective `page.tsx` files | Data from JSON |

### Key Types

- **`Course`** (`src/types/Course.ts`) — includes `TextBlock` fields for description/goal/outline, `PricingLevel` enum, `CourseType` (Seminar | Rave), `DurationUnit` (Hours | Days).
- **`BlogPost`** (`src/types/BlogPost.ts`) — content is a typed `sections[]` array (`HeadingSection | ParagraphSection | CodeSection | ImageSection`), not flat markdown.
- **`TextBlock`** — flexible content type `{ type, content?, file?, classes? }` used throughout; designed to swap to CMS later.

### Client vs Server Components

Most pages and components are server components. Client components (with `'use client'`):
- `app/seminare/page.tsx` — search/filter state
- `components/CodeBlock.tsx` — copy-to-clipboard

### Layouts

Pages use one of two layout wrappers:
- `DefaultLayout` — includes Header (with transparent nav option) + Footer
- `BlankPageLayout` — Header + Footer without hero section

### Build Scripts (`/scripts/`)

Run automatically via `npm run prep` before builds:
- `inline-markdown.js` — inlines external `.md` files referenced in JSON
- `parse-course-markdown.js` — converts course markdown fields to structured data
- `parse-blog-markdown.js` — converts blog markdown to typed sections

## Style Guide

### Colors

- Page Background: `#ffffff`
- Section Background: `#37306B` (dark purple)
- Text: `#2A2557`
- Headings & Links: `#66347F`

### Fonts (CSS variables)

- `--font-outfit` — primary body font
- `--font-inter` — secondary
- `--font-hero` — Rock Salt, display/hero use only

### Logo

- `public/codevibe-logo.png`

## Content Management

The site is designed for future **Contentful** CMS integration. Currently, data is loaded from local JSON. When migrating:
- Replace service methods in `PageDataService` and `BlogService`
- `TextBlock` and typed section arrays are already designed for CMS field mapping
- Course slugs are generated from `id + title`; blog slugs come from the `slug` field in JSON

## Course Entity Reference

```typescript
interface Course {
  id: string           // e.g. "K-01"
  rank: number         // sort order on listings
  title: string
  summary: string
  description, goal, targetAudience, outline: TextBlock
  priceSingle, priceInhouse: number
  duration: number
  durationUnit?: DurationUnit   // Hours | Days
  featured: boolean
  type: CourseType              // Seminar | Rave
  backgroundImageUrl?: string
  pricing?: PricingLevel        // Low | Medium | High — used by PricingService
}
```

## Email CTA

Course detail pages include a mailto link to `sales@codevibe.de` with the course ID and title in the subject line.