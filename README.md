<div align="center">
  <img src="public/green-logo.webp" alt="Cookly Logo" height="60" />
  <h1>Cookly – Landing Page</h1>
  <p>Alle deine Rezepte. Ein Ort.</p>

  ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&style=flat-square)
  ![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white&style=flat-square)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)
</div>

---

Marketing landing page for **Cookly** – the Android recipe management app available on Google Play.

## Tech Stack

| Tool | Version |
|---|---|
| React | 19 |
| TypeScript | 5 |
| Vite | 6 |
| Tailwind CSS | v4 |
| Framer Motion | latest |
| shadcn/ui | latest |

## Features

- Animated hero with rotating text loop (TextLoop)
- Scroll-triggered section animations via Framer Motion
- Floating pill navbar with active section tracking
- SVG wave transitions between colored sections
- Responsive ingredient pill grid
- Interactive pricing toggle (Free / Monthly / Annual)
- Mobile-first layout with full desktop support

## Sections

1. **Hero** – Headline, animated import sources, Google Play CTA
2. **Features** – 3-step social import guide (Instagram, TikTok, Facebook, ...)
3. **Photo Feature** – Photo-to-recipe via OCR/AI
4. **Ingredient Search** – Find recipes by available ingredients
5. **Meal Planner** – Weekly planning & favorites
6. **Shopping List** – Auto-categorized grocery lists
7. **Pricing** – Basic (free) vs. Premium (3,99 €/mo · 34,99 €/yr)
8. **Download CTA** – Final Google Play download prompt

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server (localhost:3000)
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
  App.tsx                        # Root component
  index.css                      # Global styles, theme vars
  components/
    layout/
      Navbar.tsx                 # Floating pill navbar
      Footer.tsx
    sections/
      Hero.tsx
      Features.tsx
      PhotoFeature.tsx
      IngredientSearch.tsx
      MealPlanner.tsx
      ShoppingList.tsx
      Pricing.tsx
      DownloadCTA.tsx
    ui/
      PhoneMockup.tsx
      motion-button.tsx
      text-loop.tsx
public/                          # Static assets (images, badges)
```

## Design System

- **Brand color:** `#b2c8ba` (sage green)
- **Font:** Fredoka
- **Container:** `.site-container` — `max-w-6xl` with responsive `clamp()` padding
- **Green sections:** Features + PhotoFeature with SVG wave transitions

---

<div align="center">
  <p>© 2025 Cookly · <a href="mailto:support@cookly.app">support@cookly.app</a></p>
</div>
