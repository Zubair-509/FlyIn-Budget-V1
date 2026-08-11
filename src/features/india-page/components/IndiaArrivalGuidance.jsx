import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IndiaArrivalRegionRow from './IndiaArrivalRegionRow';
import { indiaArrivalGuidanceData } from '../data/indiaArrivalGuidanceData';
import '../styles/india-arrival-guidance.css';

gsap.registerPlugin(ScrollTrigger);

export default function IndiaArrivalGuidance() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Gentle reveal animation for left content
      gsap.fromTo(
        '.india-arrival-intro-col',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );

      // Staggered reveal for regional guidance rows
      gsap.fromTo(
        '.india-arrival-region-row',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.india-arrival-rows-list',
            start: 'top 82%'
          }
        }
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const handleCtaClick = (e) => {
    e.preventDefault();
    const targetEl = document.querySelector('#india-flight-inquiry');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderSupportCard = () => (
    <div className="india-arrival-support-card">
      <div className="india-arrival-support-text">
        <span className="india-arrival-support-title">Not sure which airport suits your journey?</span>
        <p className="india-arrival-support-desc">
          Our travel team can help you compare suitable arrival options based on your destination and travel dates.
        </p>
      </div>

      <a
        href="#india-flight-inquiry"
        onClick={handleCtaClick}
        className="btn-india-arrival-cta"
      >
        <span>Ask about your route</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="india-arrival-guidance-section"
      aria-labelledby="india-arrival-heading"
    >
      <div className="india-arrival-bg-glow" aria-hidden="true" />

      <div className="india-arrival-container">
        {/* Main 2-Column Grid */}
        <div className="india-arrival-grid">
          {/* Left Editorial Intro Column */}
          <div className="india-arrival-intro-col">
            <span className="india-arrival-eyebrow">PLAN YOUR ARRIVAL</span>
            <h2 id="india-arrival-heading" className="india-arrival-heading">
              India is more than one destination.
            </h2>
            <p className="india-arrival-copy">
              Your ideal arrival city can depend on where your journey continues after landing.
            </p>

            {/* Support Card on Desktop (under left text section) */}
            <div className="support-card-desktop-wrapper">
              {renderSupportCard()}
            </div>
          </div>

          {/* Right Regional Rows Column */}
          <div className="india-arrival-rows-col">
            <div className="india-arrival-rows-list">
              {indiaArrivalGuidanceData.map((region, idx) => (
                <IndiaArrivalRegionRow
                  key={region.id}
                  region={region}
                  index={idx}
                />
              ))}
            </div>

            {/* Support Card on Mobile/Tablet (at bottom of section) */}
            <div className="support-card-mobile-wrapper">
              {renderSupportCard()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
