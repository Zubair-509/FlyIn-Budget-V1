import React from 'react';
import ScrollStack from './ScrollStack';
import { pakistanFlightOptions } from '../data/pakistanFlightOptions';
import '../styles/pakistan-flight-options.css';

export default function PakistanFlightOptions() {
  return (
    <section className="pakistan-flight-options-section" aria-label="Flight options to Pakistan">
      <div className="pakistan-flight-options-container">
        {/* Section Introduction Row */}
        <div className="flight-options-intro-row">
          <div className="flight-options-intro-left">
            <span className="flight-options-eyebrow">FLIGHTS TO PAKISTAN</span>
            <h2 className="flight-options-heading">
              Affordable flights to Pakistan’s most connected cities.
            </h2>
            <p className="flight-options-copy">
              Compare popular routes, starting fares and travel options for major destinations across Pakistan.
            </p>
          </div>

          <a href="#main-content" className="btn-view-all-options">
            <span>View all Pakistan flights</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* ScrollStack Destination Panels */}
        <ScrollStack items={pakistanFlightOptions} />
      </div>
    </section>
  );
}
