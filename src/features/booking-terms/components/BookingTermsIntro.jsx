import React from 'react';

export default function BookingTermsIntro() {
  return (
    <section className="booking-terms-intro-section" aria-label="Terms reading introduction">
      <div className="booking-terms-intro-container">
        <div className="booking-terms-intro-card">
          <svg
            className="booking-terms-intro-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <p className="booking-terms-intro-text">
            By using our website and services, you agree to the following terms and conditions. Please read them carefully.
          </p>
        </div>
      </div>
    </section>
  );
}
