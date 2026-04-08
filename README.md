# Sahaba — Companions of the Prophet

A premium, searchable Islamic history website focused on the Companions of the Prophet Muhammad (peace be upon him). Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
# Production build
npm run build && npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── companions/         # Directory + [slug] profiles
│   ├── battles/            # Explorer + [slug] details
│   ├── caliphs/            # Four Caliphs page
│   ├── ten-promised/       # Ten Promised Jannah page
│   ├── timeline/           # Visual timeline
│   ├── topics/             # Topic exploration
│   ├── about/              # About & Methodology
│   └── search/             # Search results
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── layout/             # Navbar, Footer, ThemeProvider
│   ├── shared/             # Reusable components (cards, tabs, etc.)
│   └── motion/             # Animation wrappers
├── data/
│   ├── companions/         # One JSON file per companion
│   ├── battles/            # One JSON file per battle
│   ├── topics.json         # Topic categories
│   └── timeline-events.json
├── lib/                    # Data loading, search, constants, SEO
├── types/                  # TypeScript interfaces
└── hooks/                  # Client-side hooks
```

## Where Content Lives

- **Companions**: `src/data/companions/*.json` — one file per companion
- **Battles**: `src/data/battles/*.json` — one file per battle
- **Timeline**: `src/data/timeline-events.json`
- **Topics**: `src/data/topics.json`

## Adding a New Companion

1. Create a new JSON file in `src/data/companions/` (e.g., `bilal-ibn-rabah.json`)
2. Follow the schema in `src/types/companion.ts` — key fields:
   - `id`, `slug`, `nameArabic`, `nameEnglish`, `fullName`
   - `isCaliph`, `isAsharaMubasharah`, `isEarlyConvert`, `isBadrVeteran`, `isMuhajir`
   - `tabs` — 11 content sections, each with `ContentBlock[]`
   - `battleParticipation` — links to battle slugs
   - `sortOrder` — controls display order
3. Each `ContentBlock` has a `status`: `"verified"`, `"reported"`, or `"pending"`
4. The companion automatically appears in directory, search, and related sections

## Adding a New Battle

1. Create a new JSON file in `src/data/battles/` (e.g., `yarmouk.json`)
2. Follow the schema in `src/types/battle.ts`
3. Link companions via `companionSlugs` and `notableParticipants`
4. The battle automatically appears in the explorer and search

## Content Status System

Every piece of content carries a verification status:

- **`verified`** — Sourced from reliable, widely-accepted references
- **`reported`** — Mentioned in some sources; displayed with a note
- **`pending`** — Not yet fully sourced; shown with placeholder text

## Tech Stack

- **Next.js 16** with App Router (full static generation)
- **TypeScript** for type safety
- **Tailwind CSS v4** with custom cream/green Islamic theme
- **shadcn/ui** component library
- **Fuse.js** for client-side fuzzy search
- **Motion** (Framer Motion) for subtle animations
- **Lucide** icons
- **next-themes** for dark/light mode

## Seeded Content

**10 Companions** (The Ten Promised Paradise):
Abu Bakr, Umar, Uthman, Ali, Talha, Al-Zubayr, Abdur-Rahman ibn Awf, Sa'd ibn Abi Waqqas, Sa'id ibn Zayd, Abu Ubayda ibn Al-Jarrah

**6 Battles**: Badr, Uhud, Khandaq, Khaybar, Hunayn, Tabuk

**22 Timeline Events**: From the first revelation (610 CE) through the Caliphate of Ali (656 CE)

## Deploy

The site is fully statically generated. Deploy to Vercel, Netlify, or any static hosting:

```bash
npm run build
# Output in .next/ — or use `next export` for static HTML
```
