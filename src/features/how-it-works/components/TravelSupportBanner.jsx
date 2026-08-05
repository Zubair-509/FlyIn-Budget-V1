import React, { memo } from 'react';
import supportBgImg from '../../../assets/Desktop Assets/BG/HIW v1.png';

const TravelSupportBanner = memo(function TravelSupportBanner() {
  return (
    <section className="travel-support-banner" aria-labelledby="travel-support-heading">
      {/* Center-Aligned Content Container */}
      <div className="support-banner-content">
        {/* Eyebrow with Headset Icon */}
        <div className="support-eyebrow">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#EEB01D" strokeWidth="2.2" aria-hidden="true">
            <path d="M3 18v-6a9 9 0 0118 0v6" />
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
          </svg>
          <span>TRAVEL SUPPORT</span>
        </div>

        {/* Headline */}
        <h3 id="travel-support-heading" className="support-main-heading">
          Need help planning your next trip<span className="heading-gold-dot">.</span>
        </h3>

        {/* Supporting Text */}
        <p className="support-subtext">
          Speak with FlyInBudget for personalised flight assistance, route advice, and budget-friendly travel options.
        </p>

        {/* Action Buttons Row */}
        <div className="support-actions-row">
          <button
            className="btn-support-primary"
            type="button"
            onClick={() => alert('Getting in touch with FlyInBudget travel support...')}
            aria-label="Get in touch with FlyInBudget travel support"
          >
            <span>Get in touch</span>
            <svg className="btn-arrow-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <a
            href="tel:+18005550199"
            className="btn-support-secondary"
            aria-label="Call FlyInBudget travel support team now"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#EEB01D" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span>Call now</span>
          </a>
        </div>
      </div>
    </section>
  );
});

export default TravelSupportBanner;
