import React, { useState, useEffect, useRef } from 'react';
import IndiaFlightsCarousel from './IndiaFlightsCarousel';
import ftiBg from '../../../assets/FTI BI.png';
import '../styles/india-flights.css';

export default function IndiaFlightsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Restrained IntersectionObserver scroll entry animation
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`india-flights-section ${isVisible ? 'is-visible' : ''}`}
      style={{ backgroundImage: `url("${ftiBg}")` }}
      aria-labelledby="india-flights-heading"
    >
      {/* Deep Navy Atmosphere & Radial Glow */}
      <div className="india-section-bg" />

      {/* Decorative India Map Contour Outline Line Texture */}
      <svg className="india-map-bg-contour" viewBox="0 0 800 900" fill="none" aria-hidden="true">
        <path
          d="M 400 100 C 450 120, 520 180, 560 240 C 600 300, 620 380, 590 460 C 560 540, 480 650, 430 750 C 410 790, 390 820, 380 850 C 370 820, 350 790, 330 750 C 280 650, 200 540, 170 460 C 140 380, 160 300, 200 240 C 240 180, 350 120, 400 100 Z"
          stroke="rgba(59, 145, 207, 0.35)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
      </svg>

      <div className="india-flights-container">
        {/* Section Header */}
        <header className="india-header-row">
          <div className="india-title-block">
            <div className="india-eyebrow">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#EEB01D" strokeWidth="2.2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>EXPLORE INDIA</span>
            </div>
            <h2 id="india-flights-heading" className="india-main-heading">
              Best Flights in India<span className="heading-gold-dot">.</span>
            </h2>
            <p className="india-subtext">
              Discover iconic cities, stunning beaches, rich culture, and incredible fares across India.
            </p>
          </div>

          {/* Top Right View All CTA Button */}
          <button className="btn-view-india-cta" type="button">
            <span>View all India flights</span>
            <svg className="cta-arrow-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </header>

        {/* Cloned 3D Spatial Coverflow Carousel */}
        <IndiaFlightsCarousel />
      </div>
    </section>
  );
}
