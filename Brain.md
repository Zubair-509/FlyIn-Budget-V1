# FlyIn Budget (F2) — Project Brain & Knowledge Base

> **Project Version**: 2.0 (React 18 + Vite)  
> **Last Updated**: July 29, 2026  
> **Dev Server URL**: `http://localhost:5174/`

---

## 1. Project Overview & Technology Stack

**FlyIn Budget** is a modern, high-conversion flight booking web application designed with liquid glassmorphism, dynamic video transitions, high-contrast brand aesthetics, and responsive layout scaling.

### Core Tech Stack
- **Framework**: React 18 (Vite build tool)
- **Styling**: Vanilla CSS design tokens & CSS Custom Properties (`src/index.css`)
- **Glass Effects**: Custom SVG displacement map filter + CSS backdrop-filter (`GlassSurface.jsx`)
- **Assets Location**: All media files reside in `src/assets/`

---

## 2. Brand Identity & Design System

### Color Palette
- **Primary Navy**: `#1F2E4D`
- **Brand Gold**: `#EEB01D` / `#DDA73A`
- **Gold Hover**: `#E8B448` / `#F3B538`
- **Dark Accessible Gold**: `#C98500`
- **Secondary Text**: `#52637F`
- **White Typography**: `#FFFFFF`
- **Dark Background**: `#0b1329`

### Typography
- **Heading Font**: `'Playfair Display'`, Georgia, serif
- **Body Font**: `'Plus Jakarta Sans'`, -apple-system, sans-serif

### Glassmorphism Tokens
- **Hero Main Glass Surface**: `background: rgba(255, 255, 255, 0.12)`, `backdrop-filter: blur(24px) saturate(1.8) brightness(1.1)`, `border: 1px solid rgba(255, 255, 255, 0.25)`
- **Input Cards Glass Effect**: `background: rgba(255, 255, 255, 0.15)`, `backdrop-filter: blur(16px) saturate(160%)`, `border: 1px solid rgba(255, 255, 255, 0.28)`, `box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 24px rgba(0, 0, 0, 0.12)`

---

## 3. Component Architecture Map

```
src/
├── assets/
│   ├── 0729.mp4           # Hero background video (non-looping)
│   ├── BC-Hero.png        # Hero background image (preloaded layer)
│   ├── LFT Section.png    # "Lowest Fare" section background image
│   ├── l2.png             # FlyIn Budget brand header logo
│   ├── dubai.png          # Destination card asset
│   ├── seoul.png          # Destination card asset
│   └── logo.png           # General logo asset
├── components/
│   ├── HeroVideo.jsx      # Video & preloaded image layer with zero-latency switch
│   ├── Navbar.jsx         # Header bar with centered nav links & Umrah Inquiry button
│   ├── HeroHeadline.jsx   # Display headline & glass trust badges bar
│   ├── BookingWidget.jsx  # Flight booking card wrapped in <GlassSurface>
│   ├── GlassSurface.jsx   # Open-source ReactBits SVG displacement glass component
│   ├── GlassSurface.css   # GlassSurface backdrop filter styles
│   └── LowestFare.jsx     # "Lowest Fare" section with flight deal cards & LFT background
├── App.jsx                # Main application state controller (isUIRevealed)
├── main.jsx               # React entry point
└── index.css              # Design system, global layout, responsive media queries
```

---

## 4. Feature Implementation Summary

### A. Zero-Latency Hero Background Switch
- **Mechanism**: `BC-Hero.png` is eagerly preloaded in an `<img>` tag at `z-index: 0` underneath `0729.mp4` video (`z-index: 1`).
- **Video Completion**: On video `onEnded`, `isVideoEnded` state triggers an instant `0.05s` opacity fade, exposing `BC-Hero.png` in `<16ms` with zero flicker or blank canvas artifact.

### B. Navbar Centering & Action Button
- **Centered Nav Links**: `position: absolute; left: 50%; transform: translateX(-50%)` centers `Home | About Us | Flights ∨ | Booking Terms | Contact` horizontally.
- **Nav Hover Effect**: `background: linear-gradient(180deg, #F3B538 0%, #DF9D25 100%)` with `#1F2E4D` navy font color.
- **Umrah Inquiry Button**: Golden gradient pill button (`#EBAA2B` to `#D4921E`) with white text, transitioning to `#1F2E4D` text color on hover.

### C. Glassmorphism Flight Booking Form
- **Form Card**: Wrapped in `<GlassSurface />` component with SVG displacement filter map (`feDisplacementMap` + `edgeMode="duplicate"`).
- **Input Cards**: Applied glassmorphism effect across **From**, **To**, **Departure**, and **Passengers | Class** input cards with frosted glass blur, translucent fill, and inset highlights.

### D. Hero Left Headline & Trust Badges Bar
- **Headline**: "Fly farther. Spend smarter." in white & gold display typography with subtext.
- **Trust Badges Glass Bar**: Horizontal liquid glass pill bar displaying **600+ Airlines**, **Secure Booking Support**, and **Best Budget Options**.

### E. "Lowest Fare" Section
- **Location**: Rendered directly under the Hero section (`lowest-fare-wrapper`).
- **Background**: Uses `LFT Section.png` with a subtle dark gradient overlay for optimal text contrast.
- **Content**: Guaranteed lowest rates eyebrow badge, section title, and interactive glass flight deal cards (Dubai ✈ London, Seoul ✈ Bangkok, Dubai ✈ Paris, Seoul ✈ Tokyo) featuring flight types, original/discounted prices, and "Book Now" CTA buttons.

### F. Smooth Multi-Section Scrolling
- **Scroll Engine**: `html, body` configured with `overflow-x: hidden; overflow-y: auto; scroll-behavior: smooth;`.
- **Z-Index Stacking**: `.lowest-fare-wrapper` styled with `position: relative; z-index: 5;` to ensure smooth scrolling past the fixed background video container.

---

## 5. Development & Running Commands

```bash
# Start Vite Development Server
cmd /c npx vite
```

- Local URL: `http://localhost:5174/`
