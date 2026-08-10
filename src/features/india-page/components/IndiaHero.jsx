import React, { useRef } from 'react';
import IndiaInquiryForm from './IndiaInquiryForm';
import { useIndiaHeroAnimation } from '../animations/useIndiaHeroAnimation';
import heroBgL1 from '../../../assets/Desktop Assets/Flight To India/Hero_BG_L1.png';
import heroBgL3 from '../../../assets/Desktop Assets/Flight To India/Hero_BG_L3.png';

export default function IndiaHero() {
  const containerRef = useRef(null);

  // Initialize GSAP animation hook
  useIndiaHeroAnimation(containerRef);

  return (
    <section ref={containerRef} className="india-hero" aria-label="Flights to India Hero">
      {/* LAYER 1 — BACKGROUND ATMOSPHERE (z-index: 1) */}
      <div className="india-hero__bg-layer" aria-hidden="true">
        <img
          src={heroBgL1}
          alt=""
          className="india-hero__bg-img"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="india-hero__bg-overlay" />
      </div>

      {/* LAYER 2 — REAL HTML TYPOGRAPHY (z-index: 2) */}
      {/* Placed in front of background atmosphere, but physically BEHIND Taj Mahal */}
      <div className="india-hero__title-layer">
        <h1 className="india-hero__heading">
          <span className="india-hero__eyebrow">AFFORDABLE FLIGHTS TO</span>
          <span className="india-hero__country-mask">
            <span className="india-hero__country">INDIA</span>
          </span>
        </h1>
      </div>

      {/* LAYER 3 — TAJ MAHAL FOREGROUND SCENIC LAYER (z-index: 3) */}
      {/* Overlaps the giant INDIA text through PNG alpha transparency */}
      <div className="india-hero__fg-layer" aria-hidden="true">
        <img
          src={heroBgL3}
          alt="Taj Mahal Agra foreground scenic layer"
          className="india-hero__fg-img"
          loading="eager"
          width="1920"
          height="1080"
        />
      </div>

      {/* LAYER 4 — GLASSMORPHISM FLIGHT INQUIRY FORM (z-index: 5) */}
      <div className="india-hero__form-layer">
        <IndiaInquiryForm />
      </div>
    </section>
  );
}
