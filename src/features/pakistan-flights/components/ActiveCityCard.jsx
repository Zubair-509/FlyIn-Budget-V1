import React, { memo } from 'react';

const ActiveCityCard = memo(function ActiveCityCard({ activeFlight }) {
  if (!activeFlight) return null;

  return (
    <div
      key={activeFlight.id}
      className="active-pakistan-card animate-card-swap"
      role="article"
      aria-label={`Featured route: ${activeFlight.title}`}
    >
      {/* Left Media Image Area */}
      <div className="active-card-media-box">
        <img
          key={activeFlight.image}
          src={activeFlight.image}
          alt={`Landmark view of ${activeFlight.city}`}
          className="active-card-hero-img animate-hero-zoom"
          loading="eager"
          width="480"
          height="420"
        />
      </div>

      {/* Right Content Area */}
      <div className="active-card-content-box animate-content-reveal">
        <div className="active-card-top-content">
          {/* Badge */}
          {activeFlight.badge && (
            <div className="active-badge-pill animate-stagger-1">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#EEB01D" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>{activeFlight.badge}</span>
            </div>
          )}

          {/* Title & Country */}
          <h3 className="active-city-heading animate-stagger-2">{activeFlight.title}</h3>

          <div className="active-country-row animate-stagger-2">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#EEB01D" strokeWidth="2.2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{activeFlight.country}</span>
          </div>

          {/* Description */}
          <p className="active-city-desc animate-stagger-3">{activeFlight.description}</p>
        </div>

        <div className="active-card-bottom-content animate-stagger-4">
          {/* Divider */}
          <div className="active-card-divider" />

          {/* Price Block */}
          <div className="active-price-block">
            <span className="active-price-label">Starting from</span>
            <span className="active-price-value">£{activeFlight.price}*</span>
          </div>

          {/* CTA Action Buttons */}
          <div className="active-action-buttons-row">
            <button
              className="btn-active-book"
              type="button"
              onClick={() => document.getElementById('booking-widget')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label={`Book now for flights to ${activeFlight.city}`}
            >
              <span>Book now</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <a
              href="tel:01143600079"
              className="btn-active-call"
              aria-label={`Call customer care now to book flight to ${activeFlight.city}`}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>Call now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ActiveCityCard;
