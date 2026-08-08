# FlyInBudget — Flights to Pakistan Page Redesign Master Plan

## Document purpose

This document is the final design, content, interaction, animation, technical, accessibility, performance, and implementation plan for the redesigned **Flights to Pakistan** page of the FlyInBudget website.

The page should feel:

- premium and cinematic
- distinctly Pakistani without becoming decorative or cliché
- useful for travellers comparing routes and fares
- consistent with the redesigned FlyInBudget Home and About pages
- visually rich without looking AI-generated
- animated without becoming difficult to use
- responsive and performant across desktop, tablet, and mobile

This is the approved planning document to follow before implementation begins.

---

# 1. Project context

## Existing project stack

The current FlyInBudget project already uses:

- React
- Vite
- React Router
- GSAP
- GSAP ScrollTrigger
- Lenis
- plain CSS
- reusable shared Navbar and Footer components
- reusable airline Logo Loop
- redesigned Home and About pages

## Animation ownership

### GSAP + ScrollTrigger

Use for:

- page-load Hero sequencing
- scroll-linked Hero depth motion
- Scroll Stack behaviour
- city-selector transitions
- background image transitions
- section entrances
- CTA reveals
- desktop-only sticky or pinned experiences

### Lenis

Use only as the existing global smooth-scroll engine.

Do not create another Lenis instance inside:

- React Bits ScrollStack
- the Pakistan page
- any section component

The website should continue using the single existing app-level Lenis provider.

### Motion for React

Do not add it by default.

It may be considered later only for isolated React state transitions, dropdowns, or modal interactions that are not already handled cleanly by GSAP or CSS.

Do not animate the same element with both GSAP and Motion.

### Three.js

Do not use Three.js for this page.

The required depth effects can be built more efficiently with:

- layered images
- CSS masks
- CSS 3D transforms
- GSAP timelines
- ScrollTrigger

---

# 2. Overall page objective

The redesigned page should guide the visitor through this journey:

1. Become emotionally interested in travelling to Pakistan.
2. Submit or begin a flight enquiry.
3. Discover available city routes and starting fares.
4. See airlines associated with available travel options.
5. Explore Pakistan’s cities and destinations interactively.
6. Understand practical travel considerations.
7. Resolve common route and fare questions.
8. Contact FlyInBudget for a personalised fare quote.

The page must not behave like a repeated homepage.

It should combine:

- one strong Hero
- one practical fare-discovery interaction
- one emotional destination-discovery interaction
- practical travel guidance
- route-specific FAQ
- a final conversion CTA

---

# 3. Approved page structure

The final page order is:

1. **Cinematic Flights to Pakistan Hero**
2. **Reused £25 Voucher Strip**
3. **Flight Options Scroll Stack**
4. **Reused Airline Logo Loop**
5. **Interactive Introducing Pakistan / Popular Cities**
6. **Pakistan Travel Essentials**
7. **Pakistan Flights FAQ**
8. **Final Pakistan CTA Banner**
9. **Redesigned Global Footer**

This order should remain unchanged unless a technical issue makes a small structural adjustment necessary.

---

# 4. Global visual direction

## Brand character

The page should feel like a premium editorial travel experience rather than a generic booking template.

Use:

- deep FlyInBudget navy
- medium atmospheric blues
- warm sunrise or sunset highlights
- restrained FlyInBudget gold
- realistic Pakistan travel photography
- strong typography
- asymmetric composition
- cinematic spacing
- carefully limited glassmorphism

Avoid:

- excessive glass cards
- repeated map outlines
- dotted flight paths in every section
- repeated airplanes
- clouds in every section
- mountains in every section
- glowing borders everywhere
- fake statistics
- unverified claims
- AI-looking stock imagery
- identical card layouts in multiple sections
- excessive particle effects
- scroll-jacking
- animation on every element

## Decorative ownership

| Section | Main visual idea |
|---|---|
| Hero | Landmark depth + giant masked typography |
| Voucher strip | Existing simple promotional strip |
| Flight Options | Stacked destination cards |
| Airline Loop | Brand logos only |
| Introducing Pakistan | Full-background destination selector |
| Travel Essentials | Editorial image + practical rows |
| FAQ | Clean information architecture |
| Final CTA | Pakistan-related aviation scene |
| Footer | Existing global footer identity |

---

# 5. Section 1 — Cinematic Flights to Pakistan Hero

## Status

The Hero concept is approved and should be treated as final.

## Core concept

The Hero should be inspired by large destination typography placed behind a landmark.

The visitor should see:

- a cinematic Pakistan landscape covering the full Hero
- a large foreground Pakistani landmark or scenic subject
- giant `PAKISTAN` typography behind the foreground subject
- a small supporting line above the giant word
- a horizontal flight-enquiry form near the lower Hero area
- the shared FlyInBudget Navbar above the scene

## Recommended text hierarchy

### Eyebrow

`AFFORDABLE FLIGHTS TO`

### Main word

`PAKISTAN`

The main word should be extremely large and serve as the visual identity of the page.

Do not use the entire phrase “Flights to Pakistan” as one giant line.

## Layer architecture

The Hero must be built as separate visual layers:

1. background sky and distant scenery
2. giant `PAKISTAN` text
3. transparent foreground landmark or landscape subject
4. atmosphere or mist layer
5. readable Hero overlay
6. enquiry form
7. Navbar

The foreground subject should be prepared as a transparent PNG or WebP so the typography can genuinely appear behind it.

Do not fake the depth using a flat image containing baked-in text.

## Visual subject

Use one dominant Pakistani landmark or destination subject.

Good options include:

- Minar-e-Pakistan
- Faisal Mosque
- Badshahi Mosque
- a carefully chosen northern valley landmark

Use only one dominant focal point.

Avoid a collage of multiple cities and landmarks.

## Hero size

Desktop:

- approximately `92–100svh`
- enough height for the full scene, title, form, and Navbar
- no hard fixed height that clips content

Tablet and mobile:

- allow the Hero to grow naturally
- preserve the visual focal point
- move the form below the main title if necessary

## Page-load animation

Recommended sequence:

1. Hero background fades in and settles from approximately `scale(1.04)` to `scale(1)`.
2. Foreground landmark receives a subtle upward depth reveal.
3. `PAKISTAN` rises from below.
4. The bottom of the word remains masked behind the landmark.
5. The eyebrow appears slightly before or with the large word.
6. The flight form rises from the lower Hero area.
7. Form fields reveal with a restrained stagger.
8. Navbar remains stable and readable.

Total duration:

- approximately `1.4–2.0 seconds`
- do not turn it into a loader
- content should become usable quickly

## Scroll behaviour

As the user scrolls down:

- the giant word moves slowly downward
- its lower portion appears to disappear further behind the foreground landmark
- the word fades slightly
- the background shifts minimally
- the foreground subject moves at a slightly different rate
- the form stays readable and usable
- the scene transitions naturally into the Voucher Strip

Recommended title movement:

- approximately `8–14%` of Hero height

Do not let the title fall dramatically out of the viewport.

## Enquiry form

### Desktop layout

Use a horizontal glass form containing:

- trip type
- from
- destination
- departure
- return
- travellers
- phone or email
- `Inquire now`

### Form styling

Use:

- dark navy translucent surface
- moderate backdrop blur
- thin light or gold border
- readable labels
- strong yellow CTA
- clear focused and error states
- enough opacity to remain usable over photography

Avoid extremely transparent fields.

### Responsive behaviour

Tablet:

- two-row grid

Mobile:

- two-column or single-column layout
- natural scrolling
- no horizontal overflow
- minimum 44px touch targets

---

# 6. Section 2 — Reused £25 Voucher Strip

## Purpose

Provide continuity with the redesigned homepage and reinforce the existing offer.

## Implementation

Reuse the existing Home page component and its code.

Do not duplicate the component.

The strip should sit directly below the Hero and read as a clear transition between:

- emotional Hero
- practical flight discovery

Preserve:

- existing content
- existing button
- existing responsiveness
- existing accessibility

Do not add new animation beyond its current behaviour.

---

# 7. Section 3 — Flight Options Scroll Stack

## Purpose

Replace the existing ordinary four-card row with an immersive practical route-discovery experience.

This section should communicate:

- cities
- route information
- starting fares
- booking actions
- practical reasons to enquire

## Section introduction

### Eyebrow

`FLIGHTS TO PAKISTAN`

### Heading

`Affordable flights to Pakistan’s most connected cities.`

### Supporting copy

`Compare popular routes, starting fares and travel options for major destinations across Pakistan.`

### Optional supporting CTA

Use one:

- `View all Pakistan flights`
- `Speak to our travel team`

Do not add both unless the layout remains clean.

## Scroll Stack source

Use the React Bits ScrollStack component as a source and interaction reference.

Variant:

- JS-CSS
- JavaScript
- plain CSS

Do not install and use the stock version unchanged.

## Critical Lenis rule

The website already uses one app-level Lenis instance.

Therefore, remove from the copied ScrollStack source:

- internal `new Lenis()`
- internal RAF loop
- nested scroll-container ownership
- internal scroll engine
- fixed oversized bottom spacer

The ScrollStack effect should be driven by:

- existing global Lenis page scroll
- GSAP ScrollTrigger
- window scrolling

Do not remove Lenis from the website.

Only remove the duplicate Lenis instance from the React Bits component.

## Component API

Preserve a clean reusable API:

```jsx
<ScrollStack>
  <ScrollStackItem>
    ...
  </ScrollStackItem>
</ScrollStack>
```

## Recommended destinations

Use four cards:

1. Karachi
2. Lahore
3. Islamabad
4. Peshawar or Multan

The final fourth destination should be chosen according to:

- verified route availability
- business priority
- current fare data
- content readiness

Four cards are preferred because more cards would make the section too long.

## Card content

Each card should include:

- sequence number
- city name
- route label, such as `Flights to Karachi`
- concise city description
- starting fare
- optional `Popular route` badge
- practical route or airport detail only if verified
- `Book now`
- `Call now`

Use careful fare language:

- `Starting from`
- `Subject to availability`

Do not imply guaranteed pricing.

## Card visual layout

Desktop:

- large city image on one side
- content on the other
- image width approximately `48–55%`
- content width approximately `45–52%`
- card height approximately `460–560px`

Use a consistent layout for all four cards.

The cards should feel like premium editorial travel panels, not product tiles.

## Card imagery

Use:

- real Pakistan city photography
- consistent color grading
- strong focal point
- dark localized overlay where needed
- responsive image crops
- no embedded text inside images

## Stack animation

Use restrained depth.

Recommended behaviour:

- current card remains full-size
- previous cards scale down slightly
- previous cards remain partly visible
- cards collect near the upper-middle viewport
- shadows and darkening create depth
- no large rotation
- no strong blur
- no springy movement

Suggested values:

- base scale: `0.92–0.95`
- scale step: `0.015–0.025`
- stack distance: `24–38px`
- spacing between cards: `70–100px`
- rotation: `0–0.5deg`
- blur: `0`

Use opacity and tonal darkening instead of blur.

## Interaction safety

During overlap:

- hidden cards must not leave invisible buttons clickable
- only the active visible card should accept pointer input
- keyboard users must not tab into covered controls
- DOM order must remain logical
- all content must remain available under reduced motion

## Responsive behaviour

### Desktop

- full sticky/stack effect
- large image-led cards
- smooth scale changes
- natural release into the next section

### Tablet

- reduce stack distance
- reduce card height
- reduce overlap
- preserve light scaling

### Mobile

Use one of these:

- standard vertical cards
- very light sticky stacking

Do not reproduce the full desktop effect if it harms usability.

Recommended mobile layout:

- image above content
- no blur
- minimal scale
- normal page scroll
- accessible buttons

## Reduced motion

Render a normal vertical card list:

- no stacking
- no pinning
- no scale transitions
- all cards fully visible

---

# 8. Section 4 — Reused Airline Logo Loop

## Purpose

Provide a visual and conceptual transition between:

- practical fare cards
- emotional destination discovery

## Implementation

Reuse the existing airline logo loop component.

Do not rebuild or duplicate it.

## Content direction

Use a concise heading such as:

`Explore options across leading airlines.`

Supporting copy:

`Our team helps customers review flight options across a broad range of international and regional airlines.`

Avoid the phrase `official partners` unless verified.

## Visual treatment

Keep the section:

- compact
- clean
- slightly atmospheric
- visually quieter than the Scroll Stack and Discovery section

The background may use a heavily subdued airport-terminal atmosphere if the existing shared component supports it, but the logos must remain the focus.

## Motion

Use:

- existing slow loop
- subtle entrance
- pause on hover or focus if supported
- reduced-motion fallback

---

# 9. Section 5 — Interactive Introducing Pakistan / Popular Cities

## Purpose

Merge the existing:

- Introducing Pakistan
- Popular Cities in Pakistan

into one immersive destination-discovery experience.

This section should be emotional and visual, while the Scroll Stack above remains practical and fare-focused.

## Section identity

### Eyebrow

`INTRODUCING PAKISTAN`

### Country-level heading

`One country. Many unforgettable journeys.`

### Active city content

Each state should show:

- city name
- short destination headline
- concise description
- two or three tags
- city-specific CTA

Example:

### City

`Lahore`

### Headline

`Where history, food and culture come alive.`

### Description

`Discover Mughal landmarks, energetic food streets and a city shaped by centuries of culture.`

### Tags

- Heritage
- Food
- Architecture

### CTA

`Explore flights to Lahore`

Do not repeat fares in this section.

## Recommended destinations

Use:

1. Islamabad
2. Lahore
3. Karachi
4. Peshawar
5. Multan

These destinations align with practical flight routes and the rest of the page.

## Desktop composition

Use a full-width immersive section approximately `90–100svh`.

### Left area

Use approximately `40–45%` of the layout for:

- eyebrow
- country-level heading
- active city name
- city headline
- description
- tags
- CTA

### Right area

Use a curved vertical selector containing circular city thumbnails.

Each selector should include:

- circular city image
- city label beside the circle
- destination index
- clear active state

Suggested sizes:

- active circle: `128–148px`
- adjacent circles: `88–104px`
- outer circles: `64–76px`

Inactive circles should be:

- slightly darker
- slightly desaturated
- smaller
- still recognizable

The active circle should sit near the vertical center.

## Background system

Use two full-bleed image layers:

1. current destination background
2. incoming destination background

Each city should have:

- one wide cinematic image
- consistent premium grading
- no baked-in text
- clean negative space on the left
- responsive focal-point control

Apply:

- left-side readability gradient
- subtle lower vignette
- restrained atmospheric haze
- no full-image heavy blur

## Initial section entrance

When the section enters:

1. background fades in and settles from `scale(1.04)` to `scale(1)`
2. eyebrow appears
3. country heading rises
4. active city content appears in a short stagger
5. selector circles enter from the lower-right
6. active circle gently expands

Total duration:

- approximately `1.0–1.3 seconds`

Do not pin the section only for its entrance.

## Destination transition

### Moving to the next destination

Outgoing active circle:

- moves upward along the curved track
- rotates from `0deg` to approximately `-90deg`
- scales down
- reduces saturation and opacity

Incoming circle:

- begins below
- starts around `270deg`
- moves upward to center
- rotates from `270deg` to `360deg`
- visually finishes at `0deg`
- scales up
- becomes fully illuminated

Keep city labels upright outside the rotating circles.

### Moving to the previous destination

Reverse the direction:

- circles move downward
- outgoing circle rotates clockwise
- incoming circle enters from above

### Non-adjacent selections

Animate in the shortest logical direction.

Do not jump instantly.

## Background transition

Do not rotate the full background.

Use:

1. outgoing background scales from `1` to approximately `1.035`
2. outgoing image fades and moves slightly upward
3. incoming image reveals from below using a soft vertical mask
4. incoming image settles from `scale(1.06)` to `scale(1)`
5. a temporary overlay smooths color differences

The vertical background reveal should echo the upward circle movement.

## Content transition

Outgoing content:

- moves upward `20–28px`
- fades out

Incoming content:

- begins slightly below
- rises into place
- reveals in this order:
  - city name
  - headline
  - description
  - tags
  - CTA

Total transition:

- approximately `0.8–1.0 seconds`

Disable additional destination changes while the main transition is running.

## Interaction model

Support:

- click
- tap
- arrow keys
- Enter
- Space
- visible focus state
- optional previous/next buttons

Do not capture the mouse wheel to change cities.

Do not trap scrolling.

Do not auto-advance by default.

## Mobile behaviour

Replace the vertical orbit with:

- full background
- content near lower-left
- horizontal thumbnail rail near the bottom
- active thumbnail larger than neighbours
- tap or swipe selection

Reduce:

- circle rotation to `45–60deg`
- background movement
- transition distance

Do not pin the section on mobile.

## Reduced motion

Use:

- short opacity crossfade
- no rolling rotation
- no background scale
- fully usable controls

## Data architecture

Store city data in a dedicated file:

```js
{
  id,
  city,
  headline,
  description,
  tags,
  image,
  imagePosition,
  thumbnail,
  ctaLabel,
  ctaTarget
}
```

Preload:

- current image
- next image
- previous image

This prevents flashing during transitions.

---

# 10. Section 6 — Pakistan Travel Essentials

## Purpose

Move the page from inspiration into practical travel confidence.

This section should answer common planning considerations before a customer enquires.

## Heading

`Planning your journey to Pakistan`

## Supporting copy

`Helpful information to consider before choosing your route, dates and fare option.`

## Layout

Use an editorial split layout.

### Left column

Include:

- heading
- short introduction
- one restrained airport or traveller image
- optional note: `Travel guidance from our team`

Recommended image subjects:

- airport departure lounge
- traveller viewing a departure board
- passport and luggage near an airport window

Avoid generic call-centre photography.

### Right column

Use four expandable information rows.

#### 01 — Main arrival airports

`Explore routes to major destinations including Islamabad, Lahore, Karachi, Peshawar and Multan, subject to current airline availability.`

#### 02 — Choosing travel dates

`Flight prices can vary depending on season, travel dates, route demand and how early you enquire.`

#### 03 — Baggage and fare conditions

`Baggage allowance, changes and refund conditions differ by airline and fare type. These should be confirmed before booking.`

#### 04 — Documents and travel support

`Travellers should confirm current passport, visa and entry requirements before departure. FlyInBudget can assist with available travel-support services.`

Do not imply legal, immigration, or regulatory advice.

## Visual style

Use:

- medium navy
- restrained gold numbering
- thin dividers
- editorial spacing
- minimal surface styling

Do not use:

- another large card grid
- country map
- flight path
- large scenic background
- glassmorphism

## Animation

Use:

- subtle left-image depth reveal
- heading fade-up
- divider line reveal
- staggered row entrance
- simple accordion expansion

Do not pin this section.

---

# 11. Section 7 — Pakistan Flights FAQ

## Purpose

Answer route-specific questions, improve clarity, and support search intent.

Do not reuse the general homepage FAQ questions.

## Heading

`Questions about flights to Pakistan`

## Supporting copy

`Clear answers about routes, fares and booking support.`

## Recommended questions

### Which cities in Pakistan can I enquire about?

Mention the destinations actually displayed on the page and state that routes remain subject to availability.

### Can I enquire about direct and connecting flights?

Explain that available options depend on:

- departure airport
- airline
- travel dates
- current schedule

### When should I enquire for a better fare?

Use:

`Earlier enquiries usually provide more options, although fares remain subject to airline availability and demand.`

### What information is needed for a flight enquiry?

Mention:

- route
- travel dates
- number of passengers
- contact information
- baggage requirements
- flexibility preferences

### Can FlyInBudget help with changes or baggage questions?

Explain that guidance depends on the selected airline and fare rules.

### Are displayed prices guaranteed?

State clearly:

`Starting fares are indicative and remain subject to availability when the customer enquires.`

## Layout

Desktop:

- left column: heading, short copy, support CTA
- right column: accordion

Mobile:

- stacked layout
- heading first
- accordion below

## Visual direction

Use:

- deep navy
- clean accordion area
- subtle warm light or architectural texture on the left
- no mountains
- no city collage
- no dotted route path

## Animation

Keep it low intensity:

- left content fade-up
- accordion-row stagger
- natural expansion

No 3D effect.

---

# 12. Section 8 — Final Pakistan CTA Banner

## Purpose

Replace the old generic banner with a premium Pakistan-specific conversion point.

## Eyebrow

`READY TO FLY TO PAKISTAN?`

## Heading

`Let’s find a journey that fits your plans.`

## Supporting copy

`Share your preferred city, dates and passenger details with our travel team and we’ll help you explore suitable flight options.`

## CTAs

Primary:

`Get a fare quote`

Secondary:

`Call now`

Optional trust note:

`Human support • Clear fare guidance • Booking assistance`

Keep the trust note subtle.

## Visual direction

Use a cinematic Pakistan-related aviation image.

Good options:

- aircraft approaching a Pakistani city at dusk
- airport runway with distant city lights
- terminal window looking toward an aircraft
- subtle Islamabad or Lahore skyline
- blue-hour aviation atmosphere

Avoid:

- generic foreign mountains
- another landmark close-up
- another destination collage
- multiple aircraft
- smiling stock travellers
- large map graphics

## Layout

Use a wide rounded banner similar in quality and proportion to the About page CTA.

- image fills the banner
- text centered or slightly left of center
- localized dark overlay
- two buttons
- enough spacing above the Footer

## Animation

Use:

- background scale from approximately `1.05` to `1`
- subtle overlay shift
- heading and buttons reveal upward
- no pinning
- no continuous animation

---

# 13. Section 9 — Redesigned Global Footer

Reuse the existing redesigned global Footer exactly.

Do not reuse the old live footer.

Ensure links work correctly:

- Home → `/`
- About → `/about-us`
- Flights to Pakistan → redesigned Pakistan route
- relevant city or destination links
- contact actions
- newsletter
- social links
- payment marks

Do not create a page-specific Footer.

---

# 14. Full-page animation map

The page should have three memorable high-intensity moments:

1. Hero
2. Scroll Stack
3. Interactive Pakistan Discovery

The remaining sections should be calmer.

| Section | Animation intensity |
|---|---:|
| Hero | High |
| Voucher strip | Existing / minimal |
| Flight Options Scroll Stack | High |
| Airline Logo Loop | Low |
| Introducing Pakistan | High |
| Travel Essentials | Low–medium |
| Pakistan FAQ | Low |
| Final CTA | Medium |
| Footer | Very low |

Do not add high-intensity animation to every section.

---

# 15. Section transition plan

## Hero → Voucher Strip

- Hero lower overlay darkens slightly
- giant typography continues moving behind the foreground
- Voucher Strip appears as a clean functional break

## Voucher Strip → Scroll Stack

- move from promotion into practical route discovery
- section introduction should have generous spacing
- no harsh dark-to-light jump

## Scroll Stack → Airline Logo Loop

- final card releases naturally
- use a calm compact section
- avoid excessive blank space

## Airline Loop → Introducing Pakistan

- transition from practical airline choice to destination emotion
- deepen the background gradually
- allow the Discovery section image to become the next visual anchor

## Introducing Pakistan → Travel Essentials

- Discovery image darkens and fades into medium navy
- reduce motion intensity
- move from emotional exploration to practical guidance

## Travel Essentials → FAQ

- retain calm navy continuity
- avoid inserting a strong scenic image between them

## FAQ → Final CTA

- close the informational phase
- introduce the final cinematic banner as the conversion moment

## Final CTA → Footer

- darken naturally into the global Footer
- avoid another large transition animation

---

# 16. Content rules

## Fares

Use:

- `Starting from`
- `Subject to availability`
- `Indicative fare`

Do not claim guaranteed prices.

## Airlines

Use:

- `available options`
- `regional and international airlines`
- `subject to schedule and availability`

Do not use:

- `official partner`
- `exclusive partner`

unless verified.

## Visa and entry information

Use careful language.

Do not present:

- legal advice
- immigration advice
- guaranteed visa outcomes
- guaranteed entry eligibility

## Statistics and certifications

Do not invent:

- customer numbers
- route counts
- airline network size
- accreditation numbers
- satisfaction rates
- guaranteed savings

---

# 17. Responsive behaviour

## Desktop — 1200px and above

Use:

- full Hero depth composition
- horizontal enquiry form
- full Scroll Stack
- vertical rolling city selector
- split Travel Essentials
- two-column FAQ
- cinematic CTA

## Tablet — 769px to 1199px

Use:

- reduced Hero typography scale
- two-row enquiry form
- shallower Scroll Stack
- smaller city circles
- shorter movement distances
- simplified section transitions
- stacked Travel Essentials if necessary

## Mobile — 768px and below

Use:

- intentional mobile Hero composition
- form in one or two columns
- standard destination cards or light sticky effect
- horizontal city selector
- no desktop-only pinning
- no deep 3D
- natural page scrolling
- stacked CTA actions
- minimum 44px touch targets

Do not shrink desktop layouts blindly.

---

# 18. Accessibility

Implement:

- one `h1`
- logical heading order
- semantic `main`
- accessible forms
- explicit labels
- keyboard-accessible city selector
- keyboard-accessible accordions
- visible focus states
- appropriate button and link semantics
- correct alt text for meaningful images
- `aria-hidden="true"` for decorative visuals
- no focus traps
- no hidden clickable controls behind stacked cards
- no content available only through hover

## Pinned and stacked content

The DOM order must remain logical.

The page must remain understandable when animations are disabled.

---

# 19. Reduced motion

Under `prefers-reduced-motion: reduce`:

- disable Hero scrubbed parallax
- disable title depth movement
- disable Scroll Stack effect
- render destination cards vertically
- disable rolling city rotation
- replace background motion with crossfade
- disable CTA zoom
- preserve simple opacity reveals only where appropriate
- keep all content visible and usable

Do not hide sections in reduced-motion mode.

---

# 20. Performance

## Image handling

Use:

- WebP or AVIF where practical
- responsive image sizes
- correct width and height attributes
- lazy loading below the fold
- Hero preload only
- next/previous city image preloading
- controlled object-position values
- no remote hotlinked images

## Animation performance

Animate primarily:

- transform
- opacity
- CSS variables

Avoid:

- large blur animations
- width and height animation
- permanent `will-change`
- multiple RAF loops
- duplicate Lenis instances
- expensive full-screen filters
- multiple pinned sections
- simultaneous animation of many large images

## Scroll systems

Use:

- one app-level Lenis instance
- GSAP ticker synchronization
- ScrollTrigger cleanup
- route-change refresh
- resize refresh
- image-load refresh

---

# 21. Recommended component architecture

```text
src/
├── pages/
│   └── PakistanFlights/
│       ├── PakistanFlightsPage.jsx
│       └── PakistanFlightsPage.css
│
├── features/
│   └── pakistan-page/
│       ├── components/
│       │   ├── PakistanHero.jsx
│       │   ├── PakistanInquiryForm.jsx
│       │   ├── PakistanVoucherStrip.jsx
│       │   ├── PakistanFlightOptions.jsx
│       │   ├── ScrollStack.jsx
│       │   ├── ScrollStackItem.jsx
│       │   ├── PakistanAirlines.jsx
│       │   ├── PakistanDiscovery.jsx
│       │   ├── DestinationSelector.jsx
│       │   ├── PakistanTravelEssentials.jsx
│       │   ├── PakistanFlightsFAQ.jsx
│       │   └── PakistanFinalCTA.jsx
│       │
│       ├── data/
│       │   ├── pakistanFlightOptions.js
│       │   ├── pakistanDestinations.js
│       │   ├── pakistanTravelEssentials.js
│       │   └── pakistanFAQ.js
│       │
│       ├── animations/
│       │   ├── usePakistanHeroAnimation.js
│       │   ├── usePakistanScrollStack.js
│       │   ├── usePakistanDiscoveryTransition.js
│       │   └── usePakistanSectionReveals.js
│       │
│       ├── styles/
│       │   └── pakistan-page.css
│       │
│       └── index.js
```

Follow the project’s actual existing structure and naming conventions where different.

Do not create unnecessary abstractions.

---

# 22. Data architecture

## Flight options data

```js
{
  id,
  city,
  routeLabel,
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

## Discovery destination data

```js
{
  id,
  city,
  headline,
  description,
  tags,
  backgroundImage,
  thumbnail,
  imagePosition,
  ctaLabel,
  ctaTarget
}
```

## Travel Essentials data

```js
{
  id,
  number,
  title,
  description
}
```

## FAQ data

```js
{
  id,
  question,
  answer
}
```

Keep business content separate from component markup.

---

# 23. Implementation phases

## Phase 1 — Foundation

- inspect current repository
- identify current Pakistan route
- reuse Navbar
- reuse Footer
- reuse Voucher Strip
- reuse Airline Logo Loop
- create page and feature architecture
- move content into data files

## Phase 2 — Hero

- prepare layered Hero assets
- build Hero layout
- implement enquiry form
- implement page-load timeline
- implement scroll depth
- test responsiveness

## Phase 3 — Scroll Stack

- fetch React Bits source
- remove internal Lenis
- remove nested scrolling
- adapt to global page scroll
- create destination cards
- implement GSAP ScrollTrigger
- create reduced-motion and mobile fallbacks

## Phase 4 — Airline Loop

- reuse existing component
- integrate as a calm transition section
- verify logo readability

## Phase 5 — Interactive Introducing Pakistan

- create destination data
- prepare backgrounds and thumbnails
- build selector
- implement direction-aware rolling animation
- preload adjacent images
- create keyboard support
- create mobile horizontal selector

## Phase 6 — Practical ending

- build Travel Essentials
- build Pakistan FAQ
- build final CTA
- reuse global Footer

## Phase 7 — Page flow

- tune section spacing
- tune transitions
- remove repeated motifs
- verify animation intensity
- test real scrolling

## Phase 8 — QA and deployment

- responsive testing
- reduced-motion testing
- keyboard testing
- performance profiling
- content verification
- production build
- deployment review

---

# 24. QA checklist

## Functional

- Pakistan route loads directly
- Navbar route works
- form fields are usable
- city cards CTAs work
- phone links work
- discovery selector works
- FAQ works
- final CTA works
- Footer links work

## Animation

- Hero timeline runs once
- Scroll Stack releases naturally
- no nested scroll area
- no duplicate Lenis
- city transition cannot overlap itself
- selector direction is correct
- reduced motion works
- route changes clean up timelines

## Responsive

Test at:

- 1920 × 1080
- 1440 × 900
- 1366 × 768
- 1280 × 800
- 1024 × 768
- 820px width
- 768px width
- 430px width
- 390px width
- 375px width
- 360px width
- 320px width

Check:

- no horizontal overflow
- no clipped Hero text
- form remains usable
- stack cards remain readable
- no hidden buttons
- city selector remains usable
- FAQ does not overflow
- CTA remains readable

## Performance

- no duplicate RAF loops
- no duplicate Lenis instances
- no large layout shifts
- Hero image preloads correctly
- below-fold images lazy load
- adjacent discovery images preload
- no console warnings
- no memory leaks after route changes

## Accessibility

- keyboard navigation works
- focus states visible
- one `h1`
- form labels present
- city selector announced correctly
- accordions announced correctly
- hidden stacked controls are not tabbable
- reduced-motion mode exposes all content

## Build

Run:

```bash
npm run build
```

Run lint or tests if configured.

Do not report a test as passed unless it was actually performed.

---

# 25. Final success criteria

The redesigned Flights to Pakistan page should:

- feel significantly more premium than the current live page
- clearly communicate fares, routes, cities, and support
- contain three memorable interactions without overwhelming the user
- use Pakistan-specific photography and storytelling
- avoid repeated homepage patterns
- preserve strong FlyInBudget brand consistency
- remain accessible and performant
- use the existing global Lenis correctly
- adapt React Bits ScrollStack instead of installing it unchanged
- work naturally across desktop, tablet, mobile, and reduced-motion modes

The final experience should feel like:

> A cinematic Pakistan travel story that begins with destination emotion, moves into practical flight discovery, expands into city exploration, and ends with clear travel guidance and a confident enquiry path.
