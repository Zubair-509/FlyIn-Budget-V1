import React from 'react';

export default function HeroHeading() {
  return (
    <div className="hero-left-panel">
      <div className="hero-typography">
        <h1 className="hero-title">
          <span className="title-white">Fly farther.</span>
          <span className="title-gold">Spend smarter.</span>
        </h1>

        <p className="hero-description">
          Explore amazing destinations worldwide with affordable flights from 600+ trusted airlines.
        </p>
      </div>

      {/* Horizontal Trust Badges Glass Pill Bar */}
      <div className="trust-badges-bar">
        <div className="trust-badge-item">
          <div className="badge-icon-circle">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0b1329" strokeWidth="2.5">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </div>
          <div className="badge-text-group">
            <span className="badge-title">600+ Airlines</span>
            <span className="badge-subtitle">Global coverage</span>
          </div>
        </div>

        <div className="badge-divider" />

        <div className="trust-badge-item">
          <div className="badge-icon-circle">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0b1329" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="badge-text-group">
            <span className="badge-title">Secure Booking Support</span>
            <span className="badge-subtitle">24/7 customer care</span>
          </div>
        </div>

        <div className="badge-divider" />

        <div className="trust-badge-item">
          <div className="badge-icon-circle">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0b1329" strokeWidth="2.5">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
          </div>
          <div className="badge-text-group">
            <span className="badge-title">Best Budget Options</span>
            <span className="badge-subtitle">Unbeatable prices</span>
          </div>
        </div>
      </div>
    </div>
  );
}
