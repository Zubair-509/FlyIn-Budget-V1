import React from 'react';

export default function HeroHeadline() {
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

      {/* Trust Badges Glass Pill Bar */}
      <div className="trust-badges-bar">
        {/* Badge 1 */}
        <div className="trust-badge-item">
          <div className="badge-icon-circle">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </div>
          <div className="badge-text-group">
            <span className="badge-title">600+ Airlines</span>
            <span className="badge-subtitle">Global coverage</span>
          </div>
        </div>

        <div className="badge-divider"></div>

        {/* Badge 2 */}
        <div className="trust-badge-item">
          <div className="badge-icon-circle">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <div className="badge-text-group">
            <span className="badge-title">Secure Booking Support</span>
            <span className="badge-subtitle">24/7 customer care</span>
          </div>
        </div>

        <div className="badge-divider"></div>

        {/* Badge 3 */}
        <div className="trust-badge-item">
          <div className="badge-icon-circle">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6"/>
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
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
