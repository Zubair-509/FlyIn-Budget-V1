import React from 'react';
import AirlineLogoLoop from '../../airline-partners/components/AirlineLogoLoop';

export default function AboutAirlines() {
  return (
    <section className="about-airlines-section" aria-labelledby="about-airlines-heading">
      <div className="about-airlines-container">
        <div className="about-airlines-header">
          <span className="about-airlines-eyebrow">GLOBAL CONNECTIONS</span>
          <h2 id="about-airlines-heading" className="about-airlines-heading">
            Explore options across leading airlines.
          </h2>
          <p className="about-airlines-subtext">
            Our team helps customers review flight options across a broad range of international and regional airlines.
          </p>
        </div>

        {/* Existing Reusable Airline Logo Loop */}
        <div className="about-airlines-loop-wrapper">
          <AirlineLogoLoop />
        </div>
      </div>
    </section>
  );
}
