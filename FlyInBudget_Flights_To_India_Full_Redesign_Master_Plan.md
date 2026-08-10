# FlyInBudget — Flights to India Full Redesign Master Plan

## Project
**Website:** FlyInBudget  
**Page:** Flights to India  
**Target route:** `/flight-to-india`  
**Repository:** `Zubair-509/FlyIn-Budget-V1`  
**Primary stack:** React + Vite + React Router + GSAP + ScrollTrigger + existing global Lenis + plain CSS

---

# 1. Purpose

This is the single master redesign document for the **Flights to India** page. It combines the user's preferred direction, the strongest architecture already proven on Flights to Pakistan, and India-specific recommendations for content, imagery, animation, responsiveness, accessibility, performance, implementation workflow and QA.

Use this file as **global context for Antigravity**, but continue implementing the page **section by section** rather than with one giant implementation prompt.

---

# 2. Locked High-Level Direction

The opening experience should deliberately reuse the successful Flights to Pakistan design language:

1. **Three-layer cinematic Hero**
2. **£25 Voucher Strip**
3. **ScrollStack Flight Options**
4. **Vertical curved Explore India carousel**

This reuse is intentional. The India page should still feel distinct through city choices, imagery, copy, regional travel guidance and lower-page content.

The page must not feel like a crude Pakistan clone where only country names and photos were replaced.

---

# 3. Current Live Page — Redesign Context

The current Flights to India page uses an older structure consisting broadly of:

- simple Hero + enquiry form;
- £25 voucher strip;
- small flight-deal cards;
- basic India introduction;
- airline logos;
- simple popular-city content;
- generic closing CTA/footer.

The redesign replaces that visual system while preserving useful business context such as route priorities, existing contact behaviour and destination relevance.

---

# 4. Final Recommended Page Order

1. **Cinematic Flights to India Hero**
2. **Reused £25 Voucher Strip**
3. **India Flight Options ScrollStack**
4. **Explore India Interactive Destination Selector**
5. **India Regional Arrival Guidance**
6. **India Travel Essentials**
7. **India Flights FAQ**
8. **Final India CTA Banner**
9. **Redesigned Global Footer**

---

# 5. Global Technical Rules

Use the existing project stack:

- React
- Vite
- React Router
- GSAP
- ScrollTrigger
- one existing app-level Lenis instance
- plain CSS

Do **not** add by default:

- Three.js
- Framer Motion / Motion for React
- Barba.js
- Swiper unless later explicitly justified
- another smooth-scroll library
- another Lenis instance
- unmanaged permanent RAF loops

## Lenis rule

There must remain **one global Lenis owner only**. No India page component may initialize Lenis locally.

## GSAP rule

Use `gsap.context()` and `gsap.matchMedia()` where appropriate. Clean all timelines, triggers and listeners on unmount.

Never let React and GSAP compete for the same runtime positional transform.

---

# 6. Animation Strategy

The page should have three major motion peaks:

### High intensity
- Hero
- ScrollStack
- Explore India

### Low intensity
- Regional Arrival Guidance
- Travel Essentials
- FAQ
- Final CTA

When the user is idle there should be no continuous orbit animation, auto-changing city carousel, spinning circles or extra decorative RAF loop.

---

# 7. Responsive Philosophy

The page must be deliberately adapted for:

- large desktops;
- standard desktops;
- short laptops;
- tablets;
- large phones;
- standard phones;
- small phones.

Do not simply shrink desktop layouts.

## Breakpoint strategy

- Large desktop: `>= 1440px`
- Standard desktop: `1200–1439px`
- Small desktop / tablet landscape: `1024–1199px`
- Tablet: `769–1023px`
- Mobile: `<= 768px`

## Required QA viewports

Desktop:
- 1920×1080
- 1600×900
- 1536×864
- 1440×900
- 1366×768
- 1280×800
- 1280×720
- 1024×768

Tablet/mobile:
- 820px
- 768px
- 430×932
- 430×844
- 414×896
- 390×844
- 375×812
- 375×667
- 360×800
- 360×640
- 320×568

At every tested viewport verify:

```js
document.documentElement.scrollWidth ===
document.documentElement.clientWidth
```

---

# 8. Section 01 — Cinematic Flights to India Hero

## User decision

Use the same **three-layer Hero architecture** already proven on Flights to Pakistan.

## Layer architecture

### Layer 1 — Background scenic/city image
Wide cinematic India environment.

### Layer 2 — Real HTML typography
Eyebrow:

**AFFORDABLE FLIGHTS TO**

Large real HTML title:

# INDIA

Do not bake `INDIA` into the background image.

### Layer 3 — Transparent foreground landmark/city cutout
A foreground India landmark or city element should overlap the large INDIA typography and create depth.

### Layer 4 — Inquiry form
Reuse the Pakistan Hero form architecture and interaction model.

---

# 9. India Hero Visual Direction

Do not automatically make the Hero a generic Taj Mahal postcard.

## Preferred Option A — Delhi

Layer 1 could use an atmospheric Delhi city/historic environment.

Layer 3 could use a transparent India Gate, Red Fort-related architectural element, or another unmistakable Delhi subject if the silhouette works cleanly.

Advantages:
- capital-city clarity;
- strong route relevance;
- heritage + modern identity;
- natural link to Delhi card content.

## Preferred Option B — Mumbai

Layer 1 could use a cinematic Mumbai waterfront/skyline.

Layer 3 could use Gateway of India or another foreground waterfront architectural subject.

Advantages:
- metropolitan/international travel feeling;
- coastal identity;
- business + leisure relevance;
- strong visual contrast from Pakistan Hero.

## Avoid

- generic Taj Mahal close-up as the only concept;
- flag graphics;
- mandala overload;
- oversaturated orange/saffron treatment;
- fantasy architecture;
- baked-in text;
- overly busy text-safe areas.

---

# 10. Hero Content

Eyebrow:

**AFFORDABLE FLIGHTS TO**

Main title:

**INDIA**

Supporting copy:

> Explore flight options to India with personal fare guidance and booking support from FlyInBudget.

Form architecture should reuse:

- Round Trip / One Way
- From
- Destination
- Departure
- Return
- Travellers
- Phone or Email
- Inquire now

Use India-specific destination options.

Recommended stable form anchor:

```text
#india-flight-inquiry
```

---

# 11. Hero Animation

Reuse the successful Pakistan Hero motion system.

## Load sequence

1. background fades/scales into position;
2. eyebrow reveals;
3. INDIA rises upward from a masked region;
4. foreground landmark reveals;
5. inquiry form rises and fields stagger.

## Scroll behaviour

- INDIA moves slightly downward;
- background gets smaller differential parallax;
- foreground landmark remains dominant;
- no pinning;
- no scroll trap.

## Reduced motion

Use final static composition or a simple fade.

---

# 12. Section 02 — £25 Voucher Strip

Reuse the existing shared voucher-strip experience.

Do not create an India-specific visual redesign.

Flow:

```text
Hero
↓
£25 Voucher Strip
↓
India Flight Options
```

Preserve existing contact behaviour and responsive implementation.

---

# 13. Section 03 — India Flight Options ScrollStack

## User decision

Reuse the same ScrollStack concept used on Flights to Pakistan.

Use the **final corrected architecture**, not the earlier buggy implementation.

## Core implementation rules

- GSAP owns stack transforms;
- one global Lenis only;
- no nested scrolling;
- no internal Lenis;
- no giant artificial spacer;
- normal page scroll;
- covered-card interaction safety;
- mobile vertical-card fallback;
- reduced-motion normal-list fallback;
- no React/GSAP transform ownership conflict;
- final card releases naturally.

---

# 14. India ScrollStack Cities

Recommended four primary route cards:

1. **Delhi**
2. **Mumbai**
3. **Ahmedabad**
4. **Goa**

These are aligned with the existing India page's commercially visible city set.

Do not add a fifth ScrollStack card unless business priorities later justify it.

Recommended data structure:

```js
{
  id,
  city,
  routeLabel,
  subtitle,
  description,
  startingFare,
  currency,
  image,
  imagePosition,
  badge,
  bookTarget,
  callTarget
}
```

Do not invent fares. Antigravity must inspect current reliable project/business fare data before inserting numbers.

---

# 15. India ScrollStack Content Direction

## Delhi

Route label: **FLIGHTS TO DELHI**  
Subtitle: **Capital Gateway & Northern India**

Description direction:
Delhi combines major international connectivity with access to northern India, historic districts and a large metropolitan travel network.

## Mumbai

Route label: **FLIGHTS TO MUMBAI**  
Subtitle: **Coastal Metropolis & Commercial Hub**

Description direction:
Mumbai is a major international gateway to western India with strong business, family and leisure travel demand.

## Ahmedabad

Route label: **FLIGHTS TO AHMEDABAD**  
Subtitle: **Gujarat Gateway & Commercial Centre**

Description direction:
Ahmedabad is an important arrival point for travellers visiting Gujarat, combining family, cultural and business travel demand.

## Goa

Route label: **FLIGHTS TO GOA**  
Subtitle: **Coastal Leisure Gateway**

Description direction:
Goa serves travellers seeking India’s western coastline, leisure destinations and onward regional connections.

---

# 16. ScrollStack Visual Design

Use premium editorial travel panels.

Desktop guideline:
- image around 46–50%;
- content around 50–54%;
- deep navy card surface;
- restrained gold accents;
- thin border;
- subtle elevation;
- no heavy glassmorphism.

Suggested responsive active-card height:

roughly `430–520px` depending viewport.

Content hierarchy:

- sequence number;
- route label;
- city;
- subtitle;
- concise description;
- starting fare;
- availability disclaimer;
- primary CTA;
- secondary call CTA.

Use:

**Starting from**

and:

**Subject to availability**

Never use guaranteed cheapest/best fare claims unless verified.

---

# 17. ScrollStack Mobile Behaviour

At `<=768px` disable the desktop stack and render normal vertical destination cards.

Recommended order:

```text
image
city
subtitle
description
fare
CTA row
```

Minimum touch target: 44px.

---

# 18. Section 04 — Explore India

## User decision

Reuse the **vertical curved destination-carousel principle** from the final corrected Explore Pakistan section.

Use the final architecture:

```text
FULL-BLEED ACTIVE CITY BACKGROUND

LEFT:
editorial city content

RIGHT:
curved circular destination selector
```

---

# 19. Explore India Cities

Recommended five:

1. **Delhi**
2. **Mumbai**
3. **Ahmedabad**
4. **Goa**
5. **Hyderabad**

Hyderabad adds southern-India representation and strong visual/content diversity.

---

# 20. Explore India Content

## Delhi

Headline:
**Where history and modern India meet.**

Description:
Explore India’s capital region through monumental architecture, historic districts, modern neighbourhoods and a gateway to northern India.

Tags:
Capital • Heritage • Culture

CTA:
**Explore flights to Delhi**

## Mumbai

Headline:
**India’s coastal metropolis of energy and ambition.**

Description:
Discover a city shaped by the Arabian Sea, film, commerce, neighbourhood culture and one of India’s busiest international gateways.

Tags:
Coastal • Urban • Culture

CTA:
**Explore flights to Mumbai**

## Ahmedabad

Headline:
**Architecture, enterprise and the character of Gujarat.**

Description:
Explore a city known for distinctive architecture, commercial energy, traditional neighbourhoods and a strong Gujarati cultural identity.

Tags:
Architecture • Commerce • Culture

CTA:
**Explore flights to Ahmedabad**

## Goa

Headline:
**Coastal India with a distinct cultural rhythm.**

Description:
Discover beaches, historic neighbourhoods, Portuguese-influenced architecture and a relaxed western-coast travel experience.

Tags:
Coastal • Leisure • Heritage

CTA:
**Explore flights to Goa**

## Hyderabad

Headline:
**Heritage, food and a modern southern metropolis.**

Description:
Explore historic landmarks, celebrated cuisine and a fast-growing city that combines cultural identity with technology and business.

Tags:
Heritage • Food • Modern India

CTA:
**Explore flights to Hyderabad**

---

# 21. Explore India Selector Architecture

Desktop:
- shallow vertical curve;
- active circle largest;
- adjacent circles smaller;
- outer circles smallest;
- city labels remain upright;
- circles never spin.

## Absolute motion rule

No circle/image rotation.

GSAP owns:
- x;
- y;
- scale;
- opacity.

React owns:
- activeIndex;
- pendingIndex;
- labels/content;
- aria state;
- classes.

Never let React and GSAP both own the runtime node transform.

---

# 22. Explore India Slot Logic

Use deterministic five-slot positions:

1. outer top;
2. upper adjacent;
3. active;
4. lower adjacent;
5. outer bottom.

Maintain visible non-overlap.

Recommended minimum visible edge gap:

`14–24px`.

Use separate geometry profiles for large desktop, standard desktop, short desktop and tablet.

---

# 23. Explore India Background Transition

Use two full-section layers:

- current background;
- incoming background.

Recommended transition:

Outgoing:
- scale `1 → 1.02`;
- opacity `1 → 0`.

Incoming:
- scale `1.035 → 1`;
- opacity `0 → 1`.

Duration: roughly `0.65–0.8s`.

No rotation and no dramatic parallax.

---

# 24. Explore India Mobile Behaviour

At `<=768px` hide the desktop orbit completely.

Use horizontal destination rail:

```text
○   ○   ●   ○   ○
```

The city image remains the full-section background.

Do not leave desktop GSAP orbit transforms attached to the mobile selector.

---

# 25. Explore India Assets

Generate one high-quality 16:9 or wider image per city.

The same asset can serve as full background + circular crop initially.

Recommended filenames:

```text
India_Discovery_Delhi_BG.png
India_Discovery_Mumbai_BG.png
India_Discovery_Ahmedabad_BG.png
India_Discovery_Goa_BG.png
India_Discovery_Hyderabad_BG.png
```

Recommended directory:

```text
src/assets/Desktop Assets/Flights To India/
```

Follow the actual project asset convention if different.

---

# 26. Section 05 — India Regional Arrival Guidance

This is a recommended India-specific section that differentiates the page from Pakistan.

## Eyebrow

**PLAN YOUR ARRIVAL**

## Heading

**India is more than one destination.**

## Supporting copy

> Your ideal arrival city can depend on where your journey continues after landing.

Purpose: help travellers understand that choosing the correct gateway can matter for onward travel.

---

# 27. Regional Guidance Content

## 01 — North India

**Delhi • Amritsar**

Useful for travellers continuing through Delhi, Punjab, northern India and surrounding regions.

## 02 — West India

**Mumbai • Ahmedabad**

Useful for Maharashtra, Gujarat and western India travel.

## 03 — South / Central Connections

**Hyderabad**

A major southern gateway with onward domestic connectivity.

## Optional 04 — Coastal Leisure

**Goa**

Useful for western-coast leisure journeys.

---

# 28. Regional Guidance Design

Do not use an interactive map unless later explicitly requested.

Preferred treatment:
- editorial numbered rows/blocks;
- gold numbering;
- thin dividers;
- large region title;
- destination names;
- concise supporting copy.

No heavy cards, no pin, no scroll trap and no high-intensity animation.

---

# 29. Section 06 — India Travel Essentials

Eyebrow:

**TRAVEL ESSENTIALS**

Heading:

**Planning your journey to India**

Supporting copy:

> Helpful information to consider before choosing your route, arrival city, dates and fare option.

Recommended accordion topics:

1. Main arrival airports
2. Choosing your arrival city
3. Choosing travel dates
4. Baggage and fare conditions
5. Documents and travel support
6. Connecting onward within India

---

# 30. Travel Essentials Content Direction

## Main arrival airports

Mention major gateways such as Delhi (DEL), Mumbai (BOM), Hyderabad (HYD), Ahmedabad (AMD) and relevant Goa airport options.

Do not imply every airline or route serves every airport.

## Choosing your arrival city

Explain that the final destination within India can affect which international gateway is most practical.

## Choosing travel dates

Explain that availability and fares can vary with season, school holidays, festival/religious periods, demand and how early the enquiry is made.

Do not promise a cheapest booking window.

## Baggage and fare conditions

Explain that baggage, change and refund conditions vary by airline and ticket type.

## Documents and travel support

FlyInBudget may explain itinerary/booking information. Official entry requirements should be confirmed through appropriate authorities.

Do not imply visa eligibility decisions.

## Connecting onward within India

Explain that some travellers continue using domestic flights, rail or road after arriving internationally.

---

# 31. Travel Essentials Layout

Desktop:
- left editorial intro/image;
- right expandable rows.

Mobile:
- single column;
- natural section height;
- 44px minimum interaction targets.

No pinning, no heavy glass and no signature animation.

---

# 32. Section 07 — India Flights FAQ

Eyebrow:

**INDIA FLIGHTS FAQ**

Heading:

**Questions about flights to India**

Supporting copy:

> Clear answers about destinations, fares and booking support.

Recommended questions:

1. Which cities in India can I enquire about flights to?
2. Are direct flights from the UK to India available?
3. Which Indian airport should I fly into?
4. When should I enquire about flights to India?
5. What information should I provide when requesting a fare?
6. Can FlyInBudget help with baggage or ticket-change questions?
7. Can I enquire about connecting journeys within India?
8. Are displayed India fares guaranteed?

Use around 6–8 depending layout height.

---

# 33. Mandatory Fare Disclaimer

The FAQ must clearly include:

> Starting fares are indicative and remain subject to availability when the customer enquires.

Explain that final price may vary by travel date, departure airport, destination, airline, availability and fare conditions.

No unsupported guaranteed cheapest-price claims.

---

# 34. FAQ Layout

Reuse the proven Pakistan FAQ component architecture.

Desktop:
- left 35–40%;
- right 60–65%.

Left:
- eyebrow;
- heading;
- copy;
- optional support CTA.

Right:
- restrained accordion rows.

Reuse architecture, not Pakistan-specific text.

---

# 35. Section 08 — Final India CTA

Eyebrow:

**PLANNING A JOURNEY TO INDIA?**

Heading:

**Let’s find a flight that fits your plans.**

Body:

> Tell us your preferred destination, travel dates and passenger details and our travel team can help you explore suitable flight options.

Primary CTA:

**Get a fare quote**

Secondary CTA:

**Call now**

Optional trust line:

**Human support • Clear fare guidance • Booking assistance**

---

# 36. CTA Visual Direction

Use one cinematic India aviation background such as:

- Mumbai or Delhi city lights;
- runway/airport atmosphere;
- aircraft approach;
- terminal-window scene;
- blue-hour skyline.

Avoid another giant landmark, repeated Taj Mahal imagery, multiple planes, dotted flight paths and orange-overloaded sunsets.

---

# 37. CTA Animation

Medium-low intensity only.

On entrance:
- background scale `1.04 → 1`;
- content fade/up;
- buttons stagger slightly.

No pinning, continuous parallax or auto-moving aircraft.

---

# 38. Section 09 — Global Footer

Reuse the redesigned shared global Footer exactly.

Do not create `IndiaFooter.jsx` or a country-specific footer variation.

Final flow:

```text
India FAQ
↓
Final India CTA
↓
Global Footer
```

---

# 39. India Visual Identity

Keep FlyInBudget’s:

- deep navy;
- gold;
- white typography;
- cinematic photography.

India-specific imagery may naturally introduce:

- sandstone;
- muted saffron;
- burgundy;
- metropolitan charcoal;
- warm stone;
- coastal blue;
- restrained teal/green.

Do not make the entire page orange and do not rely on flag-colour clichés.

---

# 40. Typography

Reuse project typography.

Maintain:
- small gold uppercase eyebrow;
- strong white section headings;
- large destination names where needed;
- concise supporting text;
- restrained gold subtitle/accent.

Do not introduce decorative Indian/script fonts.

---

# 41. Accessibility Requirements

Across the entire page:

- semantic headings;
- logical H1/H2/H3 hierarchy;
- real links/buttons;
- visible focus styles;
- minimum 44px touch targets;
- descriptive alt text when images are meaningful;
- decorative backgrounds should not create redundant alt text;
- accordions use `aria-expanded` and `aria-controls`;
- Explore India selector uses valid group/tab semantics;
- keyboard navigation works;
- reduced-motion fallback is available.

---

# 42. Low-End Device Performance

Follow the established FlyInBudget performance direction:

- one global Lenis only;
- no extra permanent RAF loop;
- avoid heavy animated blur;
- prefer transform + opacity;
- simplify scrub/pin effects in reduced/low mode;
- avoid permanent `will-change` on large elements;
- pause continuous shared loops when offscreen;
- use responsive image sizing;
- strategically preload only necessary images.

---

# 43. Hero Performance

In reduced/low mode:

- simplify entrance;
- reduce deep parallax;
- avoid unnecessary scroll-scrub complexity.

If video is ever introduced later, it must have a static fallback and should not automatically run for weak devices/Save Data/reduced motion.

---

# 44. ScrollStack Performance

Desktop:
full refined stack.

Mobile:
normal vertical cards.

Reduced motion:
normal vertical cards.

No nested scroll and no duplicated smooth-scroll engine.

---

# 45. Explore India Performance

No continuous motion.

Transition only on click/tap/keyboard.

Preload:
- current city;
- previous city;
- next city.

Update neighbours after each completed transition.

---

# 46. Asset Generation Workflow

Use ChatGPT Image generation for important visual assets whenever possible.

Antigravity should focus on:

- implementation;
- layout;
- responsiveness;
- GSAP;
- interaction;
- code quality.

Do not rely on Antigravity/Nano Banana for critical landmark imagery unless explicitly requested.

## Hero assets

Generate:
- Layer 1 background;
- Layer 3 transparent landmark/cutout.

## Explore India

Generate five wide city backgrounds.

Use the same image as the circular crop initially.

## CTA

Generate a dedicated aviation/city background only if no suitable project asset exists.

---

# 47. Suggested Asset Directory

Recommended:

```text
src/assets/Desktop Assets/Flights To India/
```

Suggested files:

```text
Hero_BG_L1.png
Hero_BG_L3.png

DelhiC.png
MumbaiC.png
AhmedabadC.png
GoaC.png
HyderabadC.png

India_CTA_BG.png
```

Follow the actual project directory convention if different.

---

# 48. Implementation Workflow

Do **not** give Antigravity one giant implementation prompt for the whole page.

Use this `.md` as master context and implement section by section.

Recommended sequence:

### Phase 1 — India Hero
Plan assets → generate assets → implement → review.

### Phase 2 — Voucher Strip
Reuse existing component.

### Phase 3 — India ScrollStack
Implement data + cards + stack → test desktop/mobile/reduced motion.

### Phase 4 — Explore India
Build static composition first → approve → add GSAP → responsive QA.

### Phase 5 — Regional Arrival Guidance

### Phase 6 — India Travel Essentials

### Phase 7 — India FAQ

### Phase 8 — Final India CTA

### Phase 9 — Global Footer integration

### Phase 10 — Full-page refinement pass

---

# 49. Static-Before-Animation Rule

For each animated custom section:

1. build static desktop composition;
2. verify layout;
3. verify responsive layout;
4. only then add GSAP.

Animation must never be used to hide an incorrect layout.

---

# 50. Full-Page Final Refinement Pass

After every section is individually approved, perform one final page-wide pass covering:

- section transitions;
- vertical rhythm;
- heading scale consistency;
- background tone progression;
- gold-accent consistency;
- CTA hierarchy;
- navigation state;
- image crop consistency;
- desktop/laptop responsiveness;
- tablet responsiveness;
- mobile responsiveness;
- reduced motion;
- low-end performance;
- ScrollTrigger cleanup;
- Lenis compatibility;
- horizontal overflow;
- route transitions;
- production build.

---

# 51. Full-Page Visual Rhythm

Recommended intensity flow:

```text
Cinematic Hero
        ↓
Compact Voucher
        ↓
Premium ScrollStack
        ↓
Cinematic Explore India
        ↓
Calm Regional Guidance
        ↓
Calm Travel Essentials
        ↓
Very Calm FAQ
        ↓
Medium-Low Final CTA
        ↓
Global Footer
```

This deliberately prevents animation fatigue.

---

# 52. SEO / Content Safety

Do not make unsupported claims such as:

- guaranteed cheapest flights;
- guaranteed direct routes;
- guaranteed baggage allowance;
- guaranteed visa eligibility;
- guaranteed availability;
- official airline partnerships unless verified.

Use safe fare wording:

**Starting from**

**Subject to availability**

and:

> Starting fares are indicative and remain subject to availability when the customer enquires.

---

# 53. CTA / Contact Behaviour

Reuse the existing business mechanisms.

Primary inquiry CTAs should target:

```text
#india-flight-inquiry
```

Where a clean React implementation allows, city CTAs may preselect destination.

Suggested mappings:

```text
Delhi → Delhi (DEL)
Mumbai → Mumbai (BOM)
Ahmedabad → Ahmedabad (AMD)
Goa → Goa
Hyderabad → Hyderabad (HYD)
```

Use actual project form values.

Avoid brittle DOM manipulation if shared React state is practical.

Call CTAs should reuse the verified project phone number/constant.

---

# 54. Explore India State Architecture

Recommended state:

```text
activeIndex
pendingIndex
isTransitioning
```

React owns:
- content;
- semantic active state;
- indexes;
- accessibility state.

GSAP owns:
- x/y node transforms;
- scale;
- opacity.

No competing inline positional transform from React.

---

# 55. Explore India Transition Lock

While a destination transition runs:

- ignore new requests;
- do not queue repeated transitions;
- unlock after completion.

Rapid click testing is mandatory.

---

# 56. Route / Navigation Cleanup

Test navigation such as:

```text
Home
→ India
→ About
→ Pakistan
→ India
```

No duplicate timelines, stale ScrollTriggers, duplicated Lenis or leaked city state.

---

# 57. Build Requirements

For every major phase:

```bash
npm run build
```

Run lint/tests where configured.

Do not claim a viewport/test passed unless actually tested.

---

# 58. Final QA Checklist

## Visual

- Hero clearly communicates India;
- INDIA typography layers correctly;
- foreground landmark depth works;
- ScrollStack feels premium;
- Explore India is stable and collision-free;
- no circle spinning;
- lower sections intentionally calm;
- CTA feels like the conclusion.

## Functional

- inquiry works;
- city preselection works if implemented;
- call links work;
- accordions work;
- selector works by click/touch/keyboard;
- no dead CTAs.

## Responsive

- no horizontal overflow;
- no text clipping;
- landmark identity survives crop;
- ScrollStack mobile fallback works;
- Explore India mobile rail works;
- CTA buttons remain usable;
- Footer remains clean.

## Performance

- one Lenis;
- no extra RAF;
- no scroll traps;
- no infinite destination animation;
- no excessive backdrop blur;
- no permanent heavy compositor layers;
- animations clean up.

---

# 59. Final Acceptance Standard

The completed Flights to India page should feel like a premium sibling to Flights to Pakistan.

It should preserve FlyInBudget’s recognizable destination-page language:

- layered Hero;
- voucher transition;
- premium ScrollStack;
- cinematic destination discovery;
- practical planning content;
- clear FAQ;
- strong final CTA.

It must feel specifically like India through:

- Delhi;
- Mumbai;
- Ahmedabad;
- Goa;
- Hyderabad;
- regional travel context;
- India-specific imagery;
- metropolitan + heritage contrast.

It must never feel like a generic template with only the country name swapped.

---

# 60. Locked Decisions Summary

## Reuse from Pakistan

- Three-layer Hero architecture
- £25 Voucher Strip
- ScrollStack interaction architecture
- Vertical curved Explore destination architecture
- FAQ component pattern
- Travel Essentials pattern
- global Footer
- single global Lenis
- GSAP conventions
- mobile/reduced-motion strategy

## India-specific

- Hero imagery
- Hero copy
- Delhi / Mumbai / Ahmedabad / Goa ScrollStack data
- Delhi / Mumbai / Ahmedabad / Goa / Hyderabad Explore India data
- Regional Arrival Guidance
- India Travel Essentials
- India FAQ
- Final India CTA imagery/copy

## Do not repeat old implementation mistakes

- no internal Lenis;
- no nested scroll;
- no giant ScrollStack spacer;
- no React + GSAP transform conflict;
- no circle spin;
- no desktop/mobile selector collision;
- no full-size thumbnail leakage;
- no uncontrolled overlapping timelines;
- no desktop-only responsiveness;
- no unsupported fare/route claims.

---

# 61. Immediate Next Step

Start with **India Hero planning and asset generation**.

Before implementation finalize:

1. Delhi vs Mumbai Hero direction;
2. Layer 1 background composition;
3. Layer 3 transparent foreground landmark;
4. desktop focal positions;
5. mobile crop/focal strategy;
6. India Hero form destinations;
7. entrance/scroll animation values.

Once the Hero is approved, continue section by section using this document as the master global context.
