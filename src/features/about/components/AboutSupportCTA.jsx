import React from 'react';
import ctaImg from '../../../assets/about_cta_terminal.png';
import { SUPPORT_CTA_CONTENT } from '../data/aboutContent';

export default function AboutSupportCTA({ onQuoteClick }) {
  return (
    <section className="about-support-cta-section" aria-label="Get in touch with FlyInBudget">
      <div className="about-support-cta-container">
        <div className="about-cta-card">
          {/* Background Runway Photography Layer */}
          <div className="about-cta-bg-wrapper">
            <img
              src={ctaImg}
              alt="Modern airport runway illuminated at twilight with airplane silhouette"
              className="about-cta-bg-img"
              loading="lazy"
              width="1440"
              height="600"
            />
            <div className="about-cta-gradient-overlay" />
          </div>

          {/* Foreground Readable Content */}
          <div className="about-cta-content">
            <span className="about-cta-eyebrow">{SUPPORT_CTA_CONTENT.eyebrow}</span>
            <h2 className="about-cta-heading">{SUPPORT_CTA_CONTENT.heading}</h2>
            <p className="about-cta-subtext">{SUPPORT_CTA_CONTENT.subtext}</p>

            <div className="about-cta-actions">
              <button
                type="button"
                className="btn-about-cta-primary"
                onClick={onQuoteClick}
              >
                <span>Get in touch</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <a
                href={SUPPORT_CTA_CONTENT.phoneTel}
                className="btn-about-cta-secondary"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>Call now (01143600079)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
