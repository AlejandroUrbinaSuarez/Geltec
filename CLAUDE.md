# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Geltec Consultores — a professional services marketing website for a Colombian consulting firm (risk management, compliance, accounting). Spanish-language content throughout.

## Commands

- **Dev server**: `npm run dev`
- **Build**: `npm run build` (Next.js build + copies static files for standalone deployment)
- **Start (production)**: `npm start` → runs `node server.js` (custom server for Hostinger/Passenger)
- **Lint**: `npx eslint .`

## Architecture

**Stack**: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Nodemailer

**Deployment**: Standalone output (`output: "standalone"` in next.config.ts) with a custom `server.js` entry point required by Hostinger's Phusion Passenger. Do not remove or rename `server.js`.

### Routing & Pages

All pages are in `src/app/` using Next.js App Router conventions:
- `/` — Homepage (server component with hero, services overview, differentiators, CTA)
- `/contacto` — Contact form (client component) with email API integration
- `/servicios` — Detailed service descriptions
- `/nosotros` — About page with mission, vision, objectives, team
- `/privacidad` — Privacy policy (static)

### Layout Structure

Root layout (`src/app/layout.tsx`) wraps all pages with:
- `<Navbar />` (client, fixed header with mobile menu)
- `<main className="pt-20 md:pt-28">` (accounts for fixed nav)
- `<Footer />`
- `<WhatsAppButton />` (floating FAB)

Font: Poppins (400, 500, 600, 700) loaded via `next/font/google`.

### Components

All in `src/components/`. Client components: `Navbar`, `WhatsAppButton`, `ObjectiveCard`. Everything else is server-rendered.

### API

Single endpoint: `POST /api/contact` (`src/app/api/contact/route.ts`)
- Sends form submissions via Nodemailer SMTP
- Validates required fields and email format server-side
- HTML-escapes user input before embedding in email template

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. No CSS modules. Theme colors defined in `src/app/globals.css` using `@theme inline`:
- `primary` (#432818, dark brown) with `-light` and `-dark` variants
- `secondary` (#d2bdac, warm taupe) with `-light`
- `tertiary` (#e1dcd5, light beige) with `-light`
- `cream`, `warm-white`, `dark`

Custom animations: `animate-fade-in-up` with delay utilities (`animation-delay-100` through `animation-delay-600`).

### Shared Utilities

`src/lib/socialLinks.tsx` — Centralized social media link definitions using `NEXT_PUBLIC_*` env vars. Used by TopBar and Footer.

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).

## Environment Variables

Defined in `.env.example`. Two groups:

**SMTP (server-only, for contact form)**:
`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`

**Public (exposed to client via `NEXT_PUBLIC_` prefix)**:
`NEXT_PUBLIC_PHONE_NUMBER`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_FACEBOOK_URL`, `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_TWITTER_URL`, `NEXT_PUBLIC_TIKTOK_URL`
