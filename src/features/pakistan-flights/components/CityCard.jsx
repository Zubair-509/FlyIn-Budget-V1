import React, { memo } from 'react';

const CityCard = memo(function CityCard({ flight, isActive, onSelect }) {
  return (
    <div
      key={flight.id}
      className={`small-city-card animate-subcard-reassemble ${isActive ? 'is-active' : ''}`}
      onClick={() => onSelect(flight.id)}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      aria-label={`Select ${flight.title}, price from £${flight.price}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(flight.id);
        }
      }}
    >
      <img
        src={flight.image}
        alt={`Historic landmark of ${flight.city}`}
        className="small-card-bg-img"
        loading="lazy"
        width="300"
        height="240"
      />
      <div className="small-card-overlay-gradient" />

      <div className="small-card-content-wrap">
        <div className="small-card-text-block">
          <h4 className="small-card-title">{flight.title}</h4>
          <span className="small-card-country-row">📍 {flight.country}</span>
          <span className="small-card-price-label">Starting from</span>
          <span className="small-card-price-val">£{flight.price}*</span>
        </div>

        <div className="small-card-arrow-circle" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
});

export default CityCard;
