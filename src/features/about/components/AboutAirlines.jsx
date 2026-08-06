import React from 'react';
import AirlineLogoLoop from '../../airline-partners/components/AirlineLogoLoop';
import airlinesBg from '../../../assets/about_airlines_terminal.png';

export default function AboutAirlines() {
  return (
    <section className="about-airlines-section" aria-labelledby="about-airlines-heading">
      {/* Soft Atmospheric Terminal Background */}
      <div className="about-airlines-bg-wrapper" aria-hidden="true">
        <img
          src={airlinesBg}
          alt=""
          className="about-airlines-bg-img"
          loading="lazy"
          width="1920"
          height="1080"
        />
        <div className="about-airlines-overlay" />
      </div>

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
