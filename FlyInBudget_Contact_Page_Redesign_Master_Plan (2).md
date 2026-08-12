# FlyInBudget — Contact Page Redesign Master Plan

**Project:** FlyInBudget Redesign  
**Target Route:** `/get-in-touch`  
**Page Type:** Contact / Support / Business Location  
**Primary Goal:** Redesign the current Contact page into a premium, modern support hub using FlyInBudget’s deep-navy visual system, restrained glassmorphism, a real Google Map embed, and verified contact/social channels.

---

## 1. Redesign Strategy

The current Contact page should be treated as a **full redesign**, not a polish pass.

The new page should feel like:

> **Premium FlyInBudget support hub + deep navy atmosphere + controlled glassmorphism + real business location**

It should be:

- modern
- trustworthy
- responsive
- easy to use
- visually consistent with the redesigned site
- conversion-friendly without feeling sales-heavy
- optimized for desktop, tablet, mobile, and low-end devices

It should **not** feel like:

- a generic white contact template
- a collection of oversized cards
- a dashboard
- a second destination landing page
- a page overloaded with floating contact buttons
- a glassmorphism demo

---

## 2. Final Page Architecture

Recommended section order:

1. **Compact Contact Hero**
2. **Main Contact Hub — Message Form + Contact Information**
3. **UK Office / Google Map**
4. **Stay Connected — WhatsApp + Social Channels**
5. **Compact Support CTA**
6. **Shared Global Footer**

This page is straightforward enough to implement in **one full Antigravity prompt**, followed by one refinement pass after visual review.

---

## 3. Global Visual System

### Base Background
Use the established FlyInBudget deep navy / near-black navy system across the full page.

Avoid returning to a large white body area.

### Accent
Use the established FlyInBudget gold.

### Text
- Primary: warm white
- Secondary: muted soft white / blue-grey
- Labels: gold or muted white depending hierarchy

### Glass Surfaces
Use glass selectively for:
- contact form panel
- contact information panel
- map / office details panel
- compact social tiles

Do **not** make every element glass.

---

## 4. Glassmorphism Direction

Preferred visual territory:

```css
background: rgba(10, 22, 42, 0.55);
border: 1px solid rgba(255,255,255,0.10);
backdrop-filter: blur(14px);
```

Use existing project tokens where available.

Rules:
- keep blur controlled
- avoid frosted-white glass
- avoid heavy box shadows
- avoid nested glass inside glass
- reduce or disable expensive blur on weak/mobile devices if necessary

---

## 5. Section 1 — Contact Hero

### Eyebrow
`CONTACT FLYINBUDGET`

### H1
`Let’s talk about your journey.`

### Supporting Copy
`Questions about a flight, an existing booking or your travel plans? Our team is here to help.`

### Hero Direction
Use a restrained aviation/travel background:
- dark atmospheric aircraft / airport / travel imagery
- deep navy overlay
- strong negative space for copy
- subtle natural warmth where appropriate

Avoid:
- oversized generic aircraft dominating the frame
- giant “Get in Touch” template styling
- destination landmarks
- route lines
- dotted flight paths
- giant layered text
- heavy parallax

### Hero Height
Desktop: approximately `45–55vh`  
Short desktop: approximately `40–48vh`  
Mobile: natural responsive height

Do not force `100vh`.

---

## 6. Hero Animation

Low intensity only:
1. background subtle settle
2. eyebrow fade/up
3. heading fade/up
4. supporting copy fade/up

No:
- pinning
- scroll trap
- large parallax
- continuous motion
- text splitting

---

## 7. Section 2 — Main Contact Hub

Desktop structure:

```text
--------------------------------------------------------------
| SEND US A MESSAGE            CONTACT FLYINBUDGET          |
|                                                            |
| form fields                  Phone                         |
| message                      Email                         |
| send button                  WhatsApp                      |
|                              Address                       |
|                              support context               |
--------------------------------------------------------------
```

Use two coordinated glass panels inside a premium site container.

Suggested desktop balance:
- Form: 60–65%
- Contact Information: 35–40%

---

## 8. Contact Form

### Recommended Fields
1. Full Name
2. Email Address
3. Phone Number
4. Enquiry Type
5. Message

### Enquiry Type Options
- Flight enquiry
- Existing booking
- Payment question
- General support

Use the current project’s actual form/backend architecture if one already exists.

Do not replace working submission logic with a fake UI.

### Primary CTA
`Send message`

Avoid `Submit Now`.

---

## 9. Form Styling

Inputs should use dark translucent surfaces.

Recommended characteristics:
- visible label above input
- subtle border
- 48–54px minimum input height
- gold focus border / glow
- readable placeholder
- comfortable internal padding
- rounded corners consistent with redesign

Textarea should have sufficient height without becoming oversized.

---

## 10. Form Accessibility

Every control must have:
- real `<label>`
- appropriate `name`
- accessible validation/error text
- keyboard focus state
- logical tab order
- minimum touch height around 44px

Do not rely on placeholder-only labels.

---

## 11. Contact Information Panel

### Phone
Use the current verified FlyInBudget phone number from the project.

### Email
`info@flyinbudget.co.uk`

### WhatsApp Business
`+44 7383 290467`

### Address
Use the current verified FlyInBudget UK office address from the project / supplied map location.

### Supporting Context
`For flight enquiries, booking questions and general travel support.`

---

## 12. WhatsApp Business

Use `+44 7383 290467` with a clear CTA:

`Chat on WhatsApp`

Use an appropriate `wa.me` link derived from the supplied number.

Do not add a duplicate floating WhatsApp control unless it is already part of the redesigned global site system.

---

## 13. Section 3 — UK Office / Google Map

### Eyebrow
`FIND US`

### Heading
`Our UK office`

### Supporting Copy
`Find FlyInBudget in Rotherham, England.`

### Layout
Desktop:
- Office details: 35–40%
- Google Map: 60–65%

Tablet/mobile: stack vertically.

---

## 14. Google Map — Exact Supplied Embed

Use the supplied FlyInBudget Google Maps embed source:

```text
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.2653473225782!2d-1.3510052000000001!3d53.4279637!2m3!1f0!2f0!3f0!3m2!1i1024!1i768!4f13.1!3m3!1m2!1s0x487977035d43fcd3%3A0x93b3f76b4c9e5b30!2sFlyin%20Budget!5e0!3m2!1sen!2s!4v1786479941640!5m2!1sen!2s
```

Iframe requirements:
- width: 100%
- responsive height
- border: 0
- `allowFullScreen`
- `loading="lazy"`
- `referrerPolicy="strict-origin-when-cross-origin"`
- meaningful title such as `FlyInBudget office location`

Do not use fixed 400×300 dimensions.

---

## 15. Map Visual Treatment

Frame the map inside a premium restrained glass container.

Use:
- subtle border
- controlled radius
- dark surrounding panel
- optional thin gold accent

Do not heavily darken or filter the map itself.

The map must remain readable and interactive.

---

## 16. Office Details

Include:
- FlyInBudget name
- verified office address
- phone
- email
- optional `Get directions` CTA

Do not invent opening hours unless verified.

---

## 17. Section 4 — Stay Connected

### Eyebrow
`STAY CONNECTED`

### Heading
`Connect with FlyInBudget`

### Supporting Copy
`Follow FlyInBudget for travel updates, offers and destination inspiration.`

Use compact social/contact tiles.

Do not make them giant cards.

---

## 18. Verified Social Channels

### WhatsApp
`+44 7383 290467`

### Facebook
`https://www.facebook.com/Flyinbudgetltd?rdid=z51OzEzus57PbPDU&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F1CtUnZyvqq%252F&checkpoint_src=any#`

### Instagram
`https://www.instagram.com/flyin_budget?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`

### TikTok
`https://www.tiktok.com/@flyinbudget?_t=ZS-8zo1s2I4NrL&_r=1`

External links should use:
- `target="_blank"`
- `rel="noopener noreferrer"`

---

## 19. Social Tile Style

Each compact tile may include:
- icon
- platform name
- short handle/context
- small external-link cue

Hover:
- tiny lift
- subtle border/gold emphasis
- no exaggerated motion

Grid suggestion:
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 or 2 columns depending width

---

## 20. Section 5 — Compact Support CTA

### Eyebrow
`NEED HELP CHOOSING A FLIGHT?`

### Heading
`Tell us where you want to go.`

### Supporting Copy
`Share your destination, travel dates and passenger details and our team can help you explore suitable flight options.`

### CTAs
Primary: `Start an enquiry`  
Secondary: `Call now`

Keep this compact and restrained.

Do not create another full-height CTA.

---

## 21. Footer

Reuse the redesigned global FlyInBudget footer unchanged.

Do not recreate the old footer shown in the live screenshot.

Verify contact details and legal links remain consistent.

---

## 22. Floating Contact Controls

Do not blindly preserve the old floating WhatsApp and call buttons.

Decision rule:
- reuse only if current redesigned global architecture already uses them consistently
- otherwise omit them

Phone and WhatsApp are already prominently available in the new Contact Hub.

---

## 23. Animation Philosophy

Animation intensity: **Low to Medium**

Use:
- Hero fade/up
- form + info panel small entrance stagger
- map subtle fade/scale-in
- social tiles small fade/up
- restrained hover lift

Do not use:
- ScrollStack
- pinning
- parallax-heavy sequences
- continuous animations
- animated blur
- scroll-jacking

---

## 24. GSAP / Scroll Architecture

Use the existing app-level smooth-scroll system.

Do not create:
- another Lenis instance
- another RAF loop
- nested scrolling

If GSAP is used:
- use `gsap.context()`
- scope animations to Contact page
- use `gsap.matchMedia()` when needed
- clean up only page-owned animations

---

## 25. Reduced Motion

Under `prefers-reduced-motion: reduce`:
- disable entrance movement
- disable hover lift animation where appropriate
- disable map scale reveal

Keep all functionality available.

---

## 26. Low-End Performance

Keep the page lightweight.

Avoid:
- animated backdrop blur
- permanent `will-change`
- canvas
- WebGL
- continuous effects

Reduce glass blur strength on weaker/mobile devices where appropriate.

---

## 27. Responsive Strategy

### Large / Standard Desktop
Test:
- 1920×1080
- 1600×900
- 1536×864
- 1440×900
- 1366×768
- 1280×800
- 1280×720

Ensure:
- Hero remains compact
- form/info panels remain balanced
- map is substantial
- social tiles do not become oversized

### Tablet
Test:
- 1024×768
- 820×1180
- 768×1024

Preferred:
- stack form above contact panel if two columns become cramped
- office details above map
- social tiles in two columns

### Mobile
Test:
- 430×932
- 414×896
- 390×844
- 375×812
- 375×667
- 360×800
- 360×640
- 320×568

Recommended flow:

```text
Hero

Send us a message
Form

Contact FlyInBudget
Phone
Email
WhatsApp
Address

Find us
Office details
Google Map

Stay connected
WhatsApp
Facebook
Instagram
TikTok

Support CTA

Footer
```

All interactive controls should be at least 44px tall.

---

## 28. Mobile Map

Map should be full width.

Responsive height target: approximately `280–360px`.

Avoid an overly tall map.

---

## 29. Mobile Form

On mobile:
- one field per row
- full-width inputs
- prominent/full-width submit CTA where helpful
- comfortable vertical rhythm
- no horizontal overflow

---

## 30. Accessibility

Use:
- one H1
- semantic H2/H3 hierarchy
- proper labels
- proper links
- visible focus states
- semantic address where appropriate
- iframe title
- accessible form errors

Social icons must have text labels or `aria-label`s.

---

## 31. SEO

Preserve route `/get-in-touch`.

Use existing site SEO architecture.

Set:
- page title
- meta description
- canonical
- one H1
- crawlable business contact content

---

## 32. Contact Data Consistency

Explicit user-supplied requirements:
- WhatsApp Business: `+44 7383 290467`
- Email: `info@flyinbudget.co.uk`
- supplied Google Map location
- supplied Facebook URL
- supplied Instagram URL
- supplied TikTok URL

For office phone/address, verify against current project data and map/location data before rendering.

Do not create conflicting contact values across page and footer.

---

## 33. Suggested Component Architecture

Follow actual repository conventions.

Possible:

```text
src/features/contact/
  components/
    ContactHero.jsx
    ContactHub.jsx
    ContactForm.jsx
    ContactInfo.jsx
    ContactMap.jsx
    SocialChannels.jsx
    ContactSupportCTA.jsx
  styles/
    contact-page.css
```

Do not over-engineer.

---

## 34. Implementation Order

1. Inspect current `/get-in-touch` page.
2. Inspect existing form submission logic.
3. Inspect shared Navbar/Footer.
4. Inspect current contact constants.
5. Verify phone/email/address.
6. Add supplied WhatsApp/social/map data.
7. Build static Hero.
8. Build static Contact Hub.
9. Verify form functionality.
10. Build Contact Information panel.
11. Build UK Office + Google Map section.
12. Build social tiles.
13. Build compact support CTA.
14. Integrate shared Footer.
15. Build tablet layout.
16. Build mobile layout.
17. Add restrained animations.
18. Add reduced-motion behavior.
19. Verify external links.
20. Verify form validation.
21. Verify map responsiveness.
22. Verify horizontal overflow.
23. Run build/lint/tests.

Static layout and contact functionality must be correct before animation.

---

## 35. QA — Form

Verify:
- Full Name
- Email
- Phone
- Enquiry Type
- Message
- submit CTA

Test:
- empty required fields
- valid input
- invalid email
- keyboard navigation
- success behavior
- failure behavior

Do not claim backend submission works unless actually tested.

---

## 36. QA — Contact Information

Verify:
- phone
- email
- WhatsApp
- address
- support text

No conflicting contact values.

---

## 37. QA — Map

Verify:
- exact supplied FlyInBudget location appears
- iframe loads
- map is interactive
- responsive width
- appropriate height
- iframe has title
- lazy loading works
- no horizontal overflow

---

## 38. QA — Social Channels

Verify each link:
- WhatsApp
- Facebook
- Instagram
- TikTok

Ensure external links open safely.

---

## 39. Horizontal Overflow

At every breakpoint verify:

```js
document.documentElement.scrollWidth === document.documentElement.clientWidth
```

Pay attention to:
- form rows
- phone inputs
- social tiles
- map
- CTA buttons
- Footer

Do not mask structural overflow with a global `overflow-x: hidden` patch.

---

## 40. Production Build

Run:

```bash
npm run build
```

Run configured lint/tests where applicable.

Do not report success unless commands actually complete.

---

## 41. Final Success Criteria

The Contact page is complete only when:
- full page uses deep navy visual system
- Hero is compact and premium
- form uses restrained glassmorphism
- form remains functional
- contact information is accurate
- WhatsApp Business uses `+44 7383 290467`
- supplied Google Map is integrated responsively
- supplied Facebook link works
- supplied Instagram link works
- supplied TikTok link works
- map is accessible and interactive
- duplicate floating controls are not added unnecessarily
- desktop is balanced
- tablet is deliberately adapted
- mobile is deliberately adapted
- 320px works
- reduced motion works
- low-end devices remain smooth
- no second Lenis exists
- no new RAF loop exists
- no horizontal overflow exists
- shared redesigned Footer is reused
- production build succeeds

---

## 42. Recommended Build Strategy

This page can be implemented in **one full Antigravity prompt**.

Recommended workflow:

> **Full implementation prompt → full-page screenshot review → focused refinement prompt → final QA**

Section-by-section prompting is not necessary unless the first implementation produces architectural problems.
