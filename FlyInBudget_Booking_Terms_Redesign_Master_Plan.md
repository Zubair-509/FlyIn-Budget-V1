# FlyInBudget — Booking Terms Page Redesign Master Plan

**Project:** FlyInBudget Redesign  
**Target Route:** `/booking-terms`  
**Page Type:** Legal / Booking Terms & Conditions  
**Primary Goal:** Redesign the current Booking Terms page into a premium, highly readable, trustworthy legal-information experience that matches the new FlyInBudget design system without over-designing a contractual page.

---

## 1. Redesign Strategy

The Booking Terms page should **not** behave like a destination landing page.

This page needs to prioritize:

- legal readability
- trust
- clear hierarchy
- fast navigation through long content
- accessibility
- mobile usability
- low animation intensity
- consistency with the redesigned FlyInBudget website

The visual direction should feel like:

> **Premium FlyInBudget design system + professional legal document**

It should **not** feel like:

- another cinematic destination page
- a marketing-heavy landing page
- a card dashboard
- an interactive storytelling page
- a heavily animated legal document

---

## 2. Current Page — Main Problems to Solve

The existing live Booking Terms page currently has several visual and UX weaknesses:

1. The Hero is visually dated and oversized for a legal page.
2. The document begins immediately as a long uninterrupted reading block.
3. The legal content does not have a strong navigation system.
4. The body copy is visually small relative to the available desktop width.
5. The page has weak hierarchy between clauses.
6. Long-form scanning is difficult.
7. The old floating call / WhatsApp controls compete with legal content.
8. The old footer does not match the current redesigned FlyInBudget system.
9. The page does not provide a clear “Where am I in the document?” experience.
10. Mobile users must scroll a long legal document without convenient section navigation.

The redesign should solve these issues without changing approved legal meaning.

---

## 3. Content Safety Rule — Critical

### Do not rewrite legal wording automatically

The current Booking Terms content should be treated as **approved legal/business copy** unless the client explicitly authorizes wording changes.

During redesign:

- preserve existing legal meaning
- preserve approved clause structure
- preserve key disclaimers
- do not shorten clauses for visual convenience
- do not invent new legal promises or limitations
- do not automatically “improve” legal language
- do not silently change policy meaning

Layout, typography, navigation and presentation may be improved.

Legal wording should only change through explicit approval.

---

## 4. Final Page Architecture

The redesigned page should follow this structure:

1. **Legal Hero**
2. **Legal Intro / Reading Notice**
3. **Desktop Sticky Table of Contents + Main Terms Document**
4. **Mobile / Tablet Jump Navigation**
5. **Closing Contact / Questions Panel**
6. **Shared Global Footer**

This is intentionally much simpler than the Flights to Pakistan / India destination pages.

---

## 5. Section 1 — Legal Hero

### Purpose

Introduce the page clearly and establish a professional legal-information tone.

### Recommended Content

**Eyebrow**

`LEGAL INFORMATION`

**H1**

`Booking Terms & Conditions`

**Supporting copy**

`Please read these terms carefully before using FlyInBudget services or confirming a booking.`

**Optional metadata**

`Last updated: [verified date]`

Only show a “Last updated” date if a real approved date is available.

Do not invent one.

### Hero Visual Direction

Use a restrained aviation/travel background.

Possible visual direction:

- airport / wing / aircraft environment
- subtle blue-hour or muted travel imagery
- dark navy overlay
- soft atmospheric depth

Avoid:

- giant aircraft close-up
- full cinematic destination Hero treatment
- giant layered typography
- country landmarks
- animated routes
- flight paths
- excessive orange/gold
- giant gradients
- decorative cultural graphics

### Hero Height

Recommended desktop:

`45–55vh`

Short laptops:

`40–48vh`

Mobile:

use natural responsive height with enough breathing room.

Do not force `100vh`.

### Hero Animation

Low intensity only:

1. Background subtle opacity/scale settle
2. Eyebrow fade/up
3. Heading fade/up
4. Supporting copy fade/up

No:

- parallax-heavy Hero
- pinning
- text splitting
- looping animation
- large object motion

---

## 6. Section 2 — Legal Intro / Reading Notice

Immediately below the Hero, add a short introduction explaining that continued use of the site/services indicates agreement with the terms.

Use the current approved wording as the source.

Possible visual structure:

- slim legal-information block
- subtle navy or soft-neutral surface
- thin gold accent line
- no large card treatment

This section should visually bridge the Hero and the legal document.

---

## 7. Section 3 — Main Legal Reading Experience

### Desktop Architecture

Use a two-column layout:

**Left Column:** Sticky Terms Navigation / Table of Contents  
**Right Column:** Full legal document in normal page flow

Concept:

```text
---------------------------------------------------------------
| TERMS NAVIGATION        | 01 Acceptance of Terms            |
|                         |                                    |
| 01 Acceptance           | legal text...                     |
| 02 Use of the Site      |                                    |
| 03 Booking & Payments   | 02 Use of the Site                |
| 04 Cancellations        | legal text...                     |
| 05 Travel Requirements  |                                    |
| 06 Liability            | 03 Booking and Payments           |
| 07 Third-Party Links    | legal text...                     |
| 08 Intellectual Property|                                    |
| 09 Changes to Terms     | ...                                |
| 10 Contact Us           |                                    |
---------------------------------------------------------------
```

---

## 8. Table of Contents / Terms Navigation

### Desktop

Create a restrained sticky left navigation.

Suggested label:

`ON THIS PAGE`

or

`TERMS NAVIGATION`

Recommended clause links:

1. Acceptance of Terms
2. Use of the Site
3. Booking and Payments
4. Cancellations and Refunds
5. Travel Requirements
6. Limitation of Liability
7. Third-Party Links
8. Intellectual Property
9. Changes to Terms
10. Contact Us

Use the exact clause titles from the approved legal document.

### Sticky Behavior

Desktop:

- sticky inside the document section
- top offset must account for Navbar
- normal document scroll continues
- no pinning via giant ScrollTrigger sections
- no nested scrolling
- no scroll trap

Suggested:

```css
position: sticky;
top: calc(var(--navbar-height) + 32px);
```

Tune to the actual project.

### Active Section Highlighting

As the user scrolls through the legal document, highlight the corresponding TOC item.

Use restrained active styling:

- gold text / small gold indicator
- slightly stronger opacity
- no big animated pills

Implementation may use:

- IntersectionObserver
- lightweight ScrollTrigger
- existing project utilities

Prefer the simplest reliable method.

### Smooth Anchor Navigation

Clicking a TOC item should smoothly navigate to the corresponding clause.

Reuse the website’s existing global smooth-scroll architecture.

Do not create another Lenis instance.

Each legal section should have a stable ID.

Example:

- `#acceptance-of-terms`
- `#use-of-site`
- `#booking-and-payments`
- `#cancellations-and-refunds`
- etc.

---

## 9. Main Legal Document Styling

The legal document should remain fully visible in normal document flow.

### Do NOT use accordions

Legal terms should remain:

- searchable
- printable
- scannable
- accessible
- visible without requiring repeated expansion

### Content Width

Target legal reading width:

approximately `720–820px`

The page container may still be larger because the TOC occupies the left side.

Recommended full content container:

approximately `1280–1420px`

depending on existing FlyInBudget layout tokens.

### Body Typography

Desktop target:

- font size: approximately `16–18px`
- line-height: approximately `1.65–1.8`
- comfortable paragraph spacing
- strong contrast

Mobile:

- approximately `15–17px`
- line-height around `1.6–1.75`

Avoid tiny legal text.

### Clause Styling

Each clause should include:

- small gold section number
- clear heading
- legal body copy
- natural lists where needed
- subtle divider between clauses

Concept:

```text
03

Booking and Payments
────────────────────────

All flight bookings made through FlyInBudget...
```

### Clause Spacing

Use generous but controlled rhythm.

Suggested desktop:

- 56–80px between legal sections
- 16–24px between heading and body
- 14–20px paragraph spacing

Short laptops:

slightly reduce vertical spacing.

---

## 10. Existing Legal Sections to Preserve

The current page includes the following major sections and these should be preserved unless the approved content source differs:

1. Acceptance of Terms
2. Use of the Site
3. Booking and Payments
4. Cancellations and Refunds
5. Travel Requirements
6. Limitation of Liability
7. Third-Party Links
8. Intellectual Property
9. Changes to Terms
10. Contact Us

Do not merge or rename legal sections unless explicitly approved.

---

## 11. Lists and Legal Bullet Styling

Where the current content uses bullet points:

- preserve list meaning
- use semantic `<ul>` / `<li>`
- use restrained custom bullet styling if desired
- maintain comfortable indentation
- keep bullets aligned with text
- ensure mobile wrapping remains correct

Do not replace legal lists with decorative cards.

---

## 12. Important Clause Callouts

Certain legal points may receive **very subtle emphasis**, only if this helps readability.

Suitable candidates may include:

- fare / availability conditions
- cancellations / refunds
- travel-document responsibility

Preferred treatment:

- thin gold left border
- slightly differentiated surface
- compact padding

Avoid:

- warning-red boxes unless legally necessary
- large alert banners
- icons everywhere
- high-contrast attention blocks

Do not change wording inside callouts.

---

## 13. Section 4 — Mobile / Tablet Navigation

The desktop sticky TOC should not be forced onto narrow screens.

### Tablet

At medium widths:

Option A: keep a compact sidebar if space remains comfortable.  
Option B: move navigation above document.

Choose based on testing.

### Mobile

Use a compact jump-navigation control near the start of the document.

Recommended:

`Jump to section`

Possible implementation:

- accessible `<select>`
- disclosure menu
- compact dropdown
- horizontal anchor rail only if readability remains strong

Preferred simple approach:

**Accessible dropdown / select**

Example:

```text
Jump to section ▾
```

Selecting a clause smoothly scrolls to it.

Do not build an elaborate mobile drawer just for legal navigation.

---

## 14. Section 5 — Closing Contact / Questions Panel

After the legal clauses, add a compact support block.

### Suggested Content

**Eyebrow / label**

`NEED HELP?`

**Heading**

`Questions about these terms?`

**Supporting copy**

`Our team can help with questions relating to your booking or the information shown on this page.`

Buttons:

- `Contact us`
- `Call now`

Use verified existing FlyInBudget contact information.

Do not hardcode a new phone number.

### Visual Style

Use:

- subtle navy surface
- restrained border
- modest radius
- premium spacing
- gold primary CTA
- secondary outline CTA

Do not turn this into a giant cinematic CTA.

This is a legal-support block, not a sales banner.

---

## 15. Section 6 — Global Footer

Reuse the current redesigned global FlyInBudget footer.

Do not recreate the old live-site footer.

Do not build a Booking Terms-specific footer.

Only ensure:

- legal links work
- Booking Terms route is correct
- Refund Policy route is correct
- contact information is consistent

---

## 16. Floating Contact Controls

The old page includes floating WhatsApp / call buttons.

During redesign:

- inspect whether floating controls are still part of the new global site architecture
- do not blindly preserve old controls
- avoid duplicating contact actions already present in Navbar / footer / support panel
- ensure floating controls do not cover legal content on mobile

If the redesigned site no longer uses these controls globally, omit them.

---

## 17. Visual System

Use the established FlyInBudget redesign palette:

- deep navy
- near-black navy
- white / soft white
- restrained gold accent
- muted neutral text

Avoid introducing a separate legal-page brand system.

---

## 18. Background Strategy

Recommended page rhythm:

**Hero**  
dark cinematic aviation background

↓  

**Legal Intro**  
subtle differentiated navy / soft neutral

↓  

**Main Document**  
clean light or very lightly tinted reading surface

↓  

**Contact Panel**  
dark navy support block

↓  

**Footer**  
existing global footer

---

## 19. Light vs Dark Main Document Decision

The existing live page uses a white reading surface.

For the redesign, both approaches are possible.

### Option A — Light Reading Surface

Recommended for maximum legal readability.

- warm white / soft off-white
- dark navy headings
- dark grey body text
- gold numbering/accent
- dark sticky TOC panel or restrained light sidebar

Advantages:

- highly readable
- familiar legal-document feel
- strong visual separation from dark Hero/footer

### Option B — Dark Reading Surface

More visually consistent with destination redesign.

Disadvantages:

- long legal reading can become more tiring
- requires careful contrast tuning

### Recommended Decision

**Use a light / soft-neutral main document surface.**

This creates a strong professional reading experience and separates legal content from the more cinematic site sections.

---

## 20. Recommended Main Document Colors

Example direction only — use actual project tokens where available:

- Background: soft off-white
- Main text: deep navy / charcoal
- Headings: FlyInBudget navy
- Numbers: brand gold
- Dividers: subtle neutral
- Links: navy/gold with accessible hover/focus

Do not create low-contrast grey-on-grey legal text.

---

## 21. Interaction / Animation Philosophy

Animation intensity:

**Very Low**

Use only:

- Hero entrance
- subtle legal section reveal if desired
- active TOC state change
- smooth anchor navigation
- small Contact Panel entrance

Do not use:

- ScrollStack
- parallax-heavy sections
- pinning
- continuous motion
- animated cards
- large text motion
- WebGL
- canvas
- looping gradients
- decorative aircraft animation

The legal content must remain the focus.

---

## 22. Legal Section Entrance Animation

Optional.

If used:

- opacity: 0 → 1
- y: 12–24px → 0
- very short duration
- trigger once
- no stagger inside paragraphs

On mobile / low-end / reduced-motion:

render immediately or use minimal fade.

---

## 23. Global Lenis / Scroll Architecture

The application already owns the global smooth-scroll architecture.

Do not create:

- another Lenis instance
- another RAF loop
- nested scrolling
- document-specific scroll engine

TOC anchor navigation should integrate with the existing app-level scrolling system.

---

## 24. Performance Requirements

This page should be one of the lightest pages in the redesigned site.

Avoid:

- multiple heavy images
- large video assets
- animated blur
- backdrop-filter over large areas
- canvas
- WebGL
- continuous ScrollTrigger timelines
- many active observers
- permanent `will-change`

Use the Hero image as the primary visual asset.

The rest of the page should be mostly typography and layout.

---

## 25. Reduced Motion

Under:

`prefers-reduced-motion: reduce`

Disable:

- Hero motion
- section reveal movement
- animated active-indicator movement if unnecessary

Keep:

- instant / simple navigation
- TOC functionality
- legal content visibility

---

## 26. Accessibility Requirements

This page must be highly accessible.

### Semantic structure

Use:

- `<main>`
- one H1
- proper H2/H3 clause hierarchy
- semantic lists
- semantic links
- proper buttons

### TOC

Use a semantic:

`<nav aria-label="Booking terms sections">`

Links should point to real section anchors.

### Skip / Anchor Behavior

Account for sticky Navbar so anchored sections are not hidden underneath it.

Use:

`scroll-margin-top`

on legal sections.

### Focus States

All TOC links, dropdowns, contact links and buttons need visible focus styles.

### Contrast

Legal text must meet strong readability requirements.

Avoid weak grey text.

---

## 27. SEO

Preserve the existing route:

`/booking-terms`

Use proper:

- page title
- meta description
- canonical architecture already used by project
- semantic H1
- crawlable legal text

Do not hide terms inside JavaScript-only collapsed content.

---

## 28. Responsive Strategy

### Large Desktop

Test:

- 1920×1080
- 1600×900
- 1536×864
- 1440×900

Expected:

- short premium Hero
- sticky TOC
- readable ~720–820px document column
- comfortable whitespace

### Standard / Short Desktop

Test:

- 1366×768
- 1280×800
- 1280×720

Adjust:

- Hero height
- document top padding
- sticky offset
- content gap
- heading scale

Do not let the sticky TOC collide with Navbar.

### Tablet

Test:

- 1024×768
- 820×1180
- 768×1024

Decide intentionally whether to:

- keep a compact sidebar
- or move TOC above the document

Do not squeeze legal text into an overly narrow column.

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

Mobile layout:

```text
Legal Hero

Legal Intro

Jump to section

01 Acceptance of Terms
content

02 Use of the Site
content

...

10 Contact Us

Questions about these terms?

Global Footer
```

No sidebar on narrow mobile.

---

## 29. Mobile Typography

H1:

responsive clamp

Legal section heading:

approximately `1.35–1.7rem`

Body:

approximately `15–17px`

Line-height:

approximately `1.6–1.75`

Ensure:

- no tiny legal text
- no horizontal overflow
- long links wrap
- lists remain readable

---

## 30. Horizontal Overflow

At every breakpoint verify:

```js
document.documentElement.scrollWidth ===
document.documentElement.clientWidth
```

Pay attention to:

- sticky TOC
- long legal links
- phone/email text
- dropdown navigation
- lists
- footer

Do not hide real structural overflow with a global `overflow-x: hidden` patch.

---

## 31. Suggested Component Architecture

Follow actual repository conventions after inspection.

Possible:

```text
src/features/booking-terms/
  components/
    BookingTermsHero.jsx
    BookingTermsTOC.jsx
    BookingTermsDocument.jsx
    BookingTermsSection.jsx
    BookingTermsMobileNav.jsx
    BookingTermsSupport.jsx
  data/
    bookingTermsContent.js
  styles/
    booking-terms.css
```

Do not over-engineer.

If the page is simple enough, fewer components are acceptable.

---

## 32. Data-Driven Legal Content

Prefer storing clause metadata in a structured data source:

```js
[
  {
    id: 'acceptance-of-terms',
    number: '01',
    title: 'Acceptance of Terms',
    content: ...
  },
  ...
]
```

However:

Do not convert complex approved legal markup into a data format that risks changing semantics.

Preserve:

- paragraphs
- lists
- links
- emphasized wording

Use structured JSX/content where necessary.

---

## 33. Implementation Order

1. Inspect current `/booking-terms` route.
2. Inspect current legal content source.
3. Confirm exact approved terms wording.
4. Inspect shared Navbar.
5. Inspect redesigned Footer.
6. Inspect global Lenis / scroll architecture.
7. Inspect design tokens.
8. Build static Legal Hero.
9. Build Legal Intro.
10. Build complete legal document in normal flow.
11. Add semantic section IDs.
12. Build desktop TOC.
13. Add sticky behavior.
14. Add active-section highlighting.
15. Add mobile jump navigation.
16. Add closing support panel.
17. Integrate global footer.
18. Add very restrained motion.
19. Add reduced-motion behavior.
20. Test anchor navigation.
21. Test short desktop.
22. Test tablet.
23. Test mobile.
24. Test keyboard/focus.
25. Test horizontal overflow.
26. Run build/lint/tests.

**Static legal content and navigation must be correct before animation.**

---

## 34. QA — Legal Content

Verify every approved clause is present.

Confirm:

- Acceptance of Terms
- Use of the Site
- Booking and Payments
- Cancellations and Refunds
- Travel Requirements
- Limitation of Liability
- Third-Party Links
- Intellectual Property
- Changes to Terms
- Contact Us

Check:

- paragraphs
- bullet points
- email
- phone
- policy links
- external/internal links

No clause should disappear during redesign.

---

## 35. QA — TOC

Test every TOC link.

Verify:

- correct section selected
- correct anchor destination
- heading not hidden behind Navbar
- URL/hash behavior acceptable
- back/forward behavior remains reasonable
- active state changes while scrolling
- reverse scrolling updates active state

---

## 36. QA — Mobile Jump Navigation

Verify:

- all sections listed
- selecting item scrolls correctly
- no duplicate page scroll engine
- dropdown remains accessible
- keyboard works
- screen-reader label exists

---

## 37. QA — Responsive

Actually test as many as environment permits:

- 1920×1080
- 1600×900
- 1536×864
- 1440×900
- 1366×768
- 1280×800
- 1280×720
- 1024×768
- 820×1180
- 768×1024
- 430×932
- 414×896
- 390×844
- 375×812
- 375×667
- 360×800
- 360×640
- 320×568

Do not claim a viewport was tested unless it actually was.

---

## 38. QA — Accessibility

Verify:

- one H1
- correct heading hierarchy
- semantic `<nav>`
- semantic legal lists
- keyboard TOC
- visible focus
- accessible mobile jump control
- readable contrast
- anchor focus behavior
- no hidden legal content

---

## 39. QA — Performance

Confirm:

- one global Lenis only
- no page-specific RAF
- no nested vertical scroller
- no large continuous animation
- no unnecessary image downloads
- no giant JS dependency added just for legal navigation
- Hero asset optimized
- rest of page remains lightweight

---

## 40. Production Build

Run:

```bash
npm run build
```

Run configured lint/tests where applicable.

Do not report success unless commands actually complete successfully.

---

## 41. Final Report Requirements

After implementation report:

1. Branch used
2. Booking Terms files inspected
3. Exact legal-content source used
4. Files created
5. Files modified
6. Hero implementation
7. Main document surface choice
8. TOC implementation
9. Sticky behavior
10. Active-section highlighting method
11. Mobile jump-navigation strategy
12. Legal section IDs
13. Reading-column width
14. Desktop typography
15. Mobile typography
16. Contact panel implementation
17. Shared footer integration
18. Global Lenis status
19. Reduced-motion behavior
20. Accessibility checks
21. Horizontal-overflow result
22. Viewports actually tested
23. Build result
24. Any unresolved issue

---

## 42. Final Success Criteria

The Booking Terms redesign is complete only when:

- all approved legal wording is preserved
- Hero feels premium but restrained
- legal content remains fully visible
- desktop has useful sticky section navigation
- mobile has convenient jump navigation
- active legal section is clear
- legal text is highly readable
- body text is not too small
- main document is not presented as giant cards
- no accordions hide legal clauses
- no nested scrolling exists
- no duplicate Lenis exists
- no page-specific RAF exists
- animation remains minimal
- reduced motion works
- keyboard navigation works
- 320px mobile works
- short laptops work
- no horizontal overflow exists
- redesigned global footer is reused
- production build succeeds

---

## 43. Recommended Build Strategy

### Can this page be built with one single Antigravity prompt?

**Yes.**

Unlike the Flights to Pakistan / Flights to India destination pages, the Booking Terms page has:

- no ScrollStack
- no destination carousel
- no layered Hero architecture
- no complex image transitions
- no multiple cinematic sections
- no heavy GSAP sequencing
- no custom interactive discovery system

Therefore a **single well-structured implementation prompt is practical and recommended**.

### Recommended Workflow

**Prompt 1 — Full Page Implementation**

Use one detailed Antigravity prompt to implement:

- Legal Hero
- Legal Intro
- complete legal document
- desktop sticky TOC
- active-section navigation
- mobile jump navigation
- closing support panel
- global footer
- responsive behavior
- accessibility
- minimal animation
- performance constraints

**Prompt 2 — Final Refinement / QA**

After reviewing screenshots, use a second targeted prompt only for:

- spacing
- type scale
- TOC alignment
- mobile wrapping
- short-laptop behavior
- section rhythm
- any discovered implementation bugs

### Final Recommendation

**Do NOT build this page section-by-section unless the first implementation goes badly.**

For Booking Terms, section-by-section prompting would create unnecessary fragmentation.

Best approach:

> **One complete implementation prompt → visual review → one focused refinement prompt → final QA.**

This is simpler, faster and safer for a legal page with relatively low interaction complexity.
