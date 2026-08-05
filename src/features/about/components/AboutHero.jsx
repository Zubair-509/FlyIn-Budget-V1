import React from 'react';
import heroImg from '../../../assets/about_hero_runway.png';
import { HERO_CONTENT } from '../data/aboutContent';

export default function AboutHero({ onQuoteClick }) {
  return (
    <section className="about-hero-section" aria-label="About FlyInBudget Hero">
      {/* Background Photography Field */}
      <div className="about-hero-bg-container">
        <img
          src={heroImg}
          alt="Aerial aircraft wing soaring over soft sky blue horizon"
          className="about-hero-bg-img"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="about-hero-gradient-overlay" />
      </div>

      {/* Hero Editorial Composition */}
      <div className="about-hero-container">
        <div className="about-hero-content-block">
          <span className="about-hero-eyebrow">{HERO_CONTENT.eyebrow}</span>

          <h1 className="about-hero-headline">
            <span className="about-hero-headline-1">{HERO_CONTENT.headlineLine1}</span>
            <span className="about-hero-headline-2">{HERO_CONTENT.headlineLine2}</span>
          </h1>

          <p className="about-hero-subtext">{HERO_CONTENT.description}</p>

          <div className="about-hero-actions">
            <button
              type="button"
              className="btn-about-hero-primary"
              onClick={onQuoteClick}
            >
              <span>{HERO_CONTENT.primaryCTA}</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <a
              href={HERO_CONTENT.phoneTel}
              className="btn-about-hero-secondary"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>{HERO_CONTENT.secondaryCTA}</span>
            </a>
          </div>
        </div>

        {/* Scroll Cue Indicator */}
        <div className="about-hero-scroll-cue" aria-hidden="true">
          <span className="scroll-cue-text">SCROLL TO EXPLORE</span>
          <div className="scroll-cue-line" />
        </div>
      </div>
    </section>
  );
}
