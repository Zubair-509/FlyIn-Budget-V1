import React, { memo } from 'react';
import StepCard from './StepCard';
import TravelSupportBanner from './TravelSupportBanner';
import '../styles/how-it-works.css';

const STEPS = [
  {
    stepNumber: 1,
    title: 'Choose your destination',
    description: 'Select your route, travel dates, and passenger details.',
    icon: (
      <svg viewBox="0 0 100 100" width="92" height="92" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="globeBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#70A6FF" />
            <stop offset="100%" stopColor="#3B72D9" />
          </linearGradient>
        </defs>

        {/* Wireframe Globe Grid (Left Aligned) */}
        <g transform="translate(6, 6)">
          <circle cx="36" cy="36" r="26" stroke="url(#globeBlueGrad)" strokeWidth="2.2" fill="none" />
          <line x1="36" y1="10" x2="36" y2="62" stroke="url(#globeBlueGrad)" strokeWidth="1.8" />
          <ellipse cx="36" cy="36" rx="13" ry="26" stroke="url(#globeBlueGrad)" strokeWidth="1.8" fill="none" />
          <line x1="10" y1="36" x2="62" y2="36" stroke="url(#globeBlueGrad)" strokeWidth="1.8" />
          <path d="M 14 23 C 24 28, 48 28, 58 23" stroke="url(#globeBlueGrad)" strokeWidth="1.5" fill="none" />
          <path d="M 14 49 C 24 44, 48 44, 58 49" stroke="url(#globeBlueGrad)" strokeWidth="1.5" fill="none" />
        </g>

        {/* Gold Location Pin (Overlapping Lower-Right) */}
        <g transform="translate(46, 26)">
          <path
            d="M 22 4 C 11 4, 3 12, 3 23 C 3 35, 22 52, 22 52 C 22 52, 41 35, 41 23 C 41 12, 33 4, 22 4 Z"
            fill="#06162D"
            stroke="#EEB01D"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <circle cx="22" cy="22" r="5" stroke="#EEB01D" strokeWidth="2.4" fill="none" />
        </g>
      </svg>
    )
  },
  {
    stepNumber: 2,
    title: 'Get the best fare options',
    description: 'Our team compares available choices and shortlists the most suitable fares.',
    icon: (
      <svg viewBox="0 0 80 80" width="84" height="84" fill="none" aria-hidden="true">
        {/* Document Sheet */}
        <path d="M22 12 H48 L62 26 V66 C62 69 59 72 56 72 H22 C19 72 16 69 16 66 V18 C16 15 19 12 22 12 Z" stroke="#3B82F6" strokeWidth="2.5" fill="rgba(59, 130, 246, 0.08)" />
        <path d="M48 12 V26 H62" stroke="#3B82F6" strokeWidth="2.2" />
        {/* Rupee Symbol */}
        <text x="28" y="48" fill="#3B82F6" fontSize="22" fontWeight="bold" fontFamily="sans-serif">₹</text>
        {/* Magnifying Glass */}
        <circle cx="52" cy="52" r="11" stroke="#EEB01D" strokeWidth="2.5" fill="#06162D" />
        <line x1="60" y1="60" x2="70" y2="70" stroke="#EEB01D" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    stepNumber: 3,
    title: 'Confirm and fly',
    description: 'Approve your preferred option and we help you complete your booking smoothly.',
    icon: (
      <svg viewBox="0 0 80 80" width="84" height="84" fill="none" aria-hidden="true">
        {/* Boarding Pass Ticket */}
        <rect x="12" y="24" width="56" height="34" rx="4" stroke="#3B82F6" strokeWidth="2.2" fill="rgba(59, 130, 246, 0.08)" />
        <line x1="52" y1="24" x2="52" y2="58" stroke="#3B82F6" strokeWidth="1.8" strokeDasharray="3 3" />
        {/* Airplane outline */}
        <path d="M16 38 L30 29 L34 31 L28 38 L40 39 L44 36 L46 37 L43 42 L46 44 L44 45 L39 42 L28 43 L34 49 L30 51 L16 38 Z" fill="#3B82F6" />
        {/* Gold Checkmark Circle */}
        <circle cx="58" cy="46" r="10" fill="#EEB01D" stroke="#06162D" strokeWidth="1.8" />
        <path d="M53 46 L57 50 L63 43" stroke="#06162D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

const HowItWorksSection = memo(function HowItWorksSection() {
  return (
    <section
      className="how-it-works-section"
      aria-labelledby="how-it-works-heading"
    >
      {/* Deep Navy Responsive Overlay */}
      <div className="how-section-bg-overlay" aria-hidden="true" />

      {/* Flight Route Dotted Curve Texture */}
      <svg className="how-bg-route-svg" viewBox="0 0 1200 400" fill="none" aria-hidden="true">
        <path
          d="M 100 150 C 350 40, 650 350, 1100 80"
          stroke="rgba(238, 176, 29, 0.22)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <path d="M 1095 72 l 12 10 -15 4 z" fill="#EEB01D" opacity="0.6" />
      </svg>

      <div className="how-it-works-container">
        {/* PART A: HOW IT WORKS INTRO & 3 STEP CARDS */}
        <div className="how-part-a-grid">

          {/* Left Content Column */}
          <div className="how-intro-block">
            <div className="how-eyebrow">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#EEB01D" strokeWidth="2.2" aria-hidden="true">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
              <span>HOW IT WORKS</span>
            </div>

            <h2 id="how-it-works-heading" className="how-main-heading">
              Book your journey in three simple steps<span className="heading-gold-dot">.</span>
            </h2>

            <p className="how-subtext">
              Tell us where you want to go and our travel team will help you find the best available options quickly and confidently.
            </p>

            <div className="how-intro-actions">
              <button
                className="btn-how-primary"
                type="button"
                onClick={() => alert('Requesting fare quote...')}
                aria-label="Get my fare quote from FlyInBudget"
              >
                <span>Get my fare quote</span>
                <svg className="btn-arrow-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              <a
                href="tel:+18005550199"
                className="btn-how-secondary"
                aria-label="Call FlyInBudget team now"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#EEB01D" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>Call now</span>
              </a>
            </div>
          </div>

          {/* Right Side: 3 Step Cards */}
          <div className="how-cards-row">
            {STEPS.map((step, idx) => (
              <StepCard
                key={step.stepNumber}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={idx === STEPS.length - 1}
              />
            ))}
          </div>

        </div>

        {/* PART B: SCENIC TRAVEL SUPPORT BANNER */}
        <TravelSupportBanner />

      </div>
    </section>
  );
});

export default HowItWorksSection;
