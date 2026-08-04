# FlyIn Budget (F2) — Project Brain & Knowledge Base

> **Project Version**: 2.1 (Hybrid Feature-Based Architecture • React 18 + Vite)  
> **Last Updated**: July 30, 2026  
> **Dev Server URL**: `http://localhost:5174/`

---

## 1. Project Overview & Technology Stack

**FlyIn Budget** is a modern, high-conversion flight booking web application built with liquid glassmorphism, persistent video transitions, 3D coverflow destination decks, infinite airline partner loops, and a maintainable hybrid feature-based architecture.

### Core Tech Stack
- **Framework**: React 18 (Vite build tool)
- **Architecture**: Hybrid Feature-Based Architecture (`src/features/`, `src/components/`, `src/pages/`, `src/app/`)
- **Styling**: Centralized CSS Design Tokens (`src/styles/tokens.css`) + Feature & UI Component CSS
- **Animation**: GSAP + Native GPU 3D CSS Transforms + `requestAnimationFrame`
- **Assets Location**: Media in `src/assets/`, Static airline SVG logos in `public/logos/airlines/`

---

## 2. Brand Identity & Design Tokens

### Color Palette
- **Primary Navy**: `#0b1329` / `#071a33`
- **Brand Gold**: `#EEB01D` / `#DDA73A`
- **Gold Hover**: `#E8B448` / `#F3B538`
- **Secondary Text**: `rgba(255, 255, 255, 0.82)`
- **White Typography**: `#FFFFFF`

### Typography
- **Heading Font**: `'Playfair Display'`, Georgia, serif
- **Body Font**: `'Plus Jakarta Sans'`, -apple-system, sans-serif

### Glassmorphism System
- **Navbar Glass**: `background: rgba(11, 19, 41, 0.65)`, `backdrop-filter: blur(24px) saturate(1.8)`
- **Booking Card Glass**: `background: rgba(255, 255, 255, 0.12)`, `backdrop-filter: blur(24px) saturate(1.6)`
- **Trust Badges Bar**: `background: rgba(255, 255, 255, 0.12)`, `backdrop-filter: blur(16px)`

---

## 3. Hybrid Feature-Based Directory Architecture

```
F2/
├── public/
│   └── logos/
│       └── airlines/               # 12 official transparent airline SVG logos
├── src/
│   ├── app/
│   │   └── App.jsx                 # Minimal root application wrapper
│   ├── pages/
│   │   └── Home/
│   │       └── HomePage.jsx        # Home page composition & session state
│   ├── features/
│   │   ├── hero/
│   │   │   ├── components/
│   │   │   │   ├── HeroSection.jsx # Hero feature composition
│   │   │   │   ├── HeroHeading.jsx # Headline, subtitle & trust badges bar
│   │   │   │   ├── HeroVideo.jsx   # Single-play background video intro
│   │   │   │   └── BookingWidget.jsx # Flight booking card
│   │   │   └── index.js            # Hero feature barrel export
│   │   ├── lowest-fares/
│   │   │   ├── components/
│   │   │   │   ├── LowestFares.jsx # Deals section wrapper & header
│   │   │   │   ├── FaresCarousel.jsx # 3D Coverflow card deck
│   │   │   │   └── FlowingMenu.jsx # Marquee banner strip
│   │   │   ├── data/
│   │   │   │   └── fareDeals.js    # Flight deal dataset
│   │   │   ├── styles/
│   │   │   │   ├── lowest-fares.css # 3D coverflow carousel styles
│   │   │   │   └── flowing-menu.css # Marquee banner styles
│   │   │   └── index.js            # Lowest Fares barrel export
│   │   ├── airline-partners/
│   │   │   ├── components/
│   │   │   │   └── AirlineLogoLoop.jsx # FlyInBudget airline loop wrapper
│   │   │   ├── data/
│   │   │   │   └── airlines.js     # Airline partners metadata
│   │   │   └── index.js            # Airline Partners barrel export
│   │   └── popular-destinations/
│   │       ├── components/
│   │       │   └── PopularDestinations.jsx
│   │       ├── data/
│   │       │   └── destinations.js # Popular destinations dataset
│   │       └── index.js            # Popular Destinations barrel export
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.jsx          # Scroll-detecting navbar header
│   │   └── ui/
│   │       ├── GlassSurface/
│   │       │   ├── GlassSurface.jsx # Reusable glass surface component
│   │       │   └── GlassSurface.css
│   │       └── LogoLoop/
│   │           ├── LogoLoop.jsx    # Reusable infinite logo marquee
│   │           └── LogoLoop.css
│   ├── styles/
│   │   └── tokens.css              # Centralized CSS design tokens
│   ├── main.jsx                    # React entry point importing ./app/App.jsx
│   └── index.css                   # Global styles & token imports
```

---

## 4. Key Architectural Features

### A. Single-Play Hero Video Persistence
- **Storage Strategy**: Dual `localStorage` + `sessionStorage` check (`hasSeenIntro`).
- **Zero-Flicker Reload**: When intro has been seen, the `<video>` element is unmounted from the DOM entirely and `.app-container.intro-seen` applies `transition: none` to render the UI instantly.

### B. 3D Coverflow Destination Carousel (`FaresCarousel`)
- **Stage Deck**: 3D spatial perspective deck (`perspective: 1200px`) with `overflow: visible` and increased vertical card height (`525px` card height, `570px` stage height).
- **Liquid Glass Control Bar**: Translucent liquid glass controller (`background: rgba(255, 255, 255, 0.14); backdrop-filter: blur(20px)`).
- **Single Active Card on Mobile**: Displays only the active center card on mobile viewports (`<= 600px`) for zero clutter.
- **Pakistan Flights Feature (`src/features/pakistan-flights/`)**: Pixel-perfect implementation of "Discover Pakistan for less" section placed directly after Lowest Fares. Features full-bleed 3D satellite terrain map graphic (`Pakistan_Map.png`, `object-fit: cover`, `padding: 0`) with interactive city hotspots (**Peshawar** `65.5% / 19%`, **Lahore** `73.5% / 36.5%`, **Multan** `54.5% / 48.5%`, **Karachi** `31.5% / 74%`), animated flight path arcs, featured active route card (*Lahore* £460* by default), and 3 small city cards grid (*Karachi* £304*, *Multan* £682*, *Peshawar* £469*).
- **Vector-Sharp Content Rendering**: Zero `filter: blur()` and zero `backdrop-filter` applied on content layers or active cards. Live HTML text, coordinates, prices, and CTA buttons are hardware-accelerated with `-webkit-font-smoothing: antialiased` for crisp subpixel clarity.
- **Card Deck**: 5 destination cards (Istanbul, Karachi, Dubai, Delhi, Seoul) featuring starting prices, location tags, detail modals, and bookmarking interactions.

### C. Full-Width Airline Partner Logo Loop (`AirlineLogoLoop`)
- **Component**: Powered by open-source React Bits `<LogoLoop />` using `requestAnimationFrame`.
- **Layout**: 100vw edge-to-edge full-bleed span with soft linear gradient edge mask fading.
- **Interactions**: Grayscale default (`filter: grayscale(1); opacity: 0.65;`) revealing original brand colors on individual logo hover (`filter: grayscale(0); opacity: 1; transform: scale(1.08);`).
- **Asset Storage**: 12 high-resolution SVG logos stored in `public/logos/airlines/`.

### D. Scroll-Activated Liquid Glass Navbar
- **Scroll Detection**: Listens to `window.scrollY > 30` to toggle `.is-scrolled`.
- **Glassmorphism**: Morphs into a translucent dark glass header (`background: rgba(11, 19, 41, 0.65); backdrop-filter: blur(24px)`).

---

## 5. Development & Build Commands

```bash
# Start Vite Development Server
npm run dev

# Test Production Build
npm run build
```

- **Local URL**: `http://localhost:5174/`
- **Build Output**: `dist/` (0 compilation errors, ~3.1s build time)
