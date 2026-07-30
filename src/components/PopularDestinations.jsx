import React from 'react';
import seoulImg from '../assets/seoul.png';
import dubaiImg from '../assets/dubai.png';

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
        {/* Destination Card 1 */}
        <div className="destination-card">
          <img src={seoulImg} alt="Seoul, Korea" className="card-bg" />
          <div className="card-overlay">
            <span className="card-location">Seoul , Korea</span>
            <div className="card-price-tag">$324</div>
          </div>
        </div>

        {/* Destination Card 2 */}
        <div className="destination-card">
          <img src={dubaiImg} alt="Dubai, UAE" className="card-bg" />
          <div className="card-overlay">
            <span className="card-location">Dubai , UAE</span>
            <div className="card-price-tag">$264</div>
          </div>
        </div>
      </div>
    </div>
  );
}
