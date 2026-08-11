import React, { useRef } from 'react';
import PakistanInquiryForm from './PakistanInquiryForm';
import { usePakistanHeroAnimation } from '../animations/usePakistanHeroAnimation';
import heroBgL1 from '../../../assets/Desktop Assets/Flights To Pakistan/BG_Hero_L1.png';
import heroBgL3 from '../../../assets/Desktop Assets/Flights To Pakistan/BG_Hero_L3.png';

export default function PakistanHero() {
  const containerRef = useRef(null);

  // Initialize GSAP animation hook scoped to this Hero section
  usePakistanHeroAnimation(containerRef);

  return (
    <section ref={containerRef} className="pakistan-hero" aria-label="Flights to Pakistan Hero">
      {/* LAYER 1 — MARGALLA HILLS FULL BACKGROUND (z-index: 1) */}
      <div className="pakistan-hero__bg-layer" aria-hidden="true">
        <img
          src={heroBgL1}
          alt=""
          className="pakistan-hero__bg-img"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="pakistan-hero__bg-overlay" />
      </div>

      {/* LAYER 2 — REAL HTML TYPOGRAPHY (z-index: 2) */}
      {/* Sitting in front of Margalla Hills, but physically BEHIND Faisal Mosque */}
      <div className="pakistan-hero__title-layer">
        <h1 className="pakistan-hero__heading">
          <span className="pakistan-hero__eyebrow">AFFORDABLE FLIGHTS TO</span>
          <span className="pakistan-hero__country-mask">
            <span className="pakistan-hero__country">PAKISTAN</span>
          </span>
        </h1>
      </div>

      {/* LAYER 3 — FAISAL MOSQUE FOREGROUND CUTOUT (z-index: 3) */}
      {/* Overlaps the giant PAKISTAN text through PNG alpha transparency */}
      <div className="pakistan-hero__fg-layer" aria-hidden="true">
        <img
          src={heroBgL3}
          alt="Faisal Mosque Islamabad foreground cutout"
          className="pakistan-hero__fg-img"
          loading="eager"
          width="850"
          height="580"
        />
      </div>

      {/* LAYER 4 — GLASSMORPHISM FLIGHT INQUIRY FORM (z-index: 5) */}
      <div className="pakistan-hero__form-layer">
        <PakistanInquiryForm />
      </div>
    </section>
  );
}
