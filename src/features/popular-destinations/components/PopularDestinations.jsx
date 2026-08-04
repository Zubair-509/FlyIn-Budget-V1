import React from 'react';
import { popularDestinations } from '../data/destinations';

export default function PopularDestinations() {
  return (
    <div className="hero-left-panel">
      <div className="destinations-header">
        <h3 className="destinations-title">Popular destinations</h3>
        <div className="slider-arrows">
          <button type="button" className="arrow-btn" aria-label="Previous">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button type="button" className="arrow-btn" aria-label="Next">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="destinations-cards">
        {popularDestinations.map((dest) => (
          <div key={dest.id} className="destination-card">
            <img src={dest.image} alt={dest.name} className="card-bg" />
            <div className="card-overlay">
              <span className="card-location">{dest.name}</span>
              <div className="card-price-tag">{dest.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
