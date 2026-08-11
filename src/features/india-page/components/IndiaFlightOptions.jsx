import React from 'react';
import IndiaScrollStack from './IndiaScrollStack';
import { indiaFlightOptions } from '../data/indiaFlightOptions';
import '../styles/india-flight-options.css';

export default function IndiaFlightOptions() {
  const handleViewAllClick = (e) => {
    e.preventDefault();
    const targetEl = document.querySelector('#india-flight-inquiry');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="india-flight-options-section" aria-label="Flight options to India">
      <div className="india-flight-options-container">
        {/* Section Introduction Header */}
        <div className="india-flight-options-intro-row">
          <div className="india-flight-options-intro-left">
            <span className="india-flight-options-eyebrow">FLIGHT OPTIONS TO INDIA</span>
            <h2 className="india-flight-options-heading">
              Explore flights to India’s leading destinations.
            </h2>
            <p className="india-flight-options-copy">
              Discover major gateways across India and find a route that works for your travel plans.
            </p>
          </div>

          <a href="#india-flight-inquiry" onClick={handleViewAllClick} className="btn-india-view-all-options">
            <span>View all India flights</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* ScrollStack Destination Panels */}
        <IndiaScrollStack items={indiaFlightOptions} />
      </div>
    </section>
  );
}
