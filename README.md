# CoolUI Component Library

A modern React component library built with **Next.js 15** and **Tailwind CSS**. CoolUI provides a collection of beautiful, reusable UI components and ready-to-use page templates for building fast, accessible web applications.

## Features

- 🎨 **10+ Basic Components**: Buttons, cards, badges, inputs, alerts, avatars, hero sections, features grids, testimonials, and CTAs.
- 📄 **Page Templates**: Landing pages (SaaS, Product, Modern, Minimal), dashboards, authentication, e-commerce, pricing, and blog layouts.
- ⚡ **Built with Next.js 15**: App Router, Server Components, and optimized fonts.
- 🎯 **Tailwind CSS**: Utility-first styling for rapid customization.
- ♿ **Accessible**: Semantic HTML and keyboard-friendly components.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the component library.

The home page (`app/page.tsx`) displays all available components and templates. Each component has its own demo page showing usage examples.

## Routes Overview

### Home

- `/` — Library home with two sections: Basic Components and Templates.

### Basic Components

- `/components/hero` — Shared Hero section used in landing pages.
- `/components/features` — Feature grid (2–3 columns).
- `/components/testimonials` — Quotes with author and optional role.
- `/components/cta` — Call-to-action banner.
- `/components/buttons` — Button styles and states.
- `/components/cards` — Card layouts and designs.
- `/components/badges` — Status and label badges.
- `/components/inputs` — Form input variations.
- `/components/alerts` — Notification and alert messages.
- `/components/avatars` — User avatar components.

### Templates

- `/templates/landing-pages` — Landing pages hub and details.
  - Variations:
    - `/templates/landing-pages/saas`
    - `/templates/landing-pages/product`
    - `/templates/landing-pages/modern`
    - `/templates/landing-pages/minimal`
- `/templates/dashboards` — Admin and analytics dashboards.
- `/templates/authentication` — Login and signup pages.
- `/templates/ecommerce` — Product and checkout pages.
- `/templates/pricing` — Pricing tables.
- `/templates/blog` — Blog and article layouts.

## Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Language**: TypeScript
- **Fonts**: [Geist](https://vercel.com/font) optimized with `next/font`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
