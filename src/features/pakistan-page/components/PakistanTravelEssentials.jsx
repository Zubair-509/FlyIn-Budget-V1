import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TravelEssentialsAccordion from './TravelEssentialsAccordion';
import { pakistanTravelEssentials } from '../data/pakistanTravelEssentials';
import '../styles/pakistan-travel-essentials.css';

gsap.registerPlugin(ScrollTrigger);

export default function PakistanTravelEssentials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.essentials-animate-item', {
        y: 16,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pakistan-travel-essentials-section"
      aria-label="Pakistan travel essentials and planning guide"
    >
      <div className="pakistan-travel-essentials-container">
        {/* Left Column: Copy & Airport Terminal Photo */}
        <div className="essentials-left-column">
          <span className="essentials-eyebrow essentials-animate-item">
            TRAVEL ESSENTIALS
          </span>
          <h2 className="essentials-heading essentials-animate-item">
            Planning your journey to Pakistan
          </h2>
          <p className="essentials-supporting-copy essentials-animate-item">
            Helpful information to consider before choosing your route, dates and fare option.
          </p>
        </div>

        {/* Right Column: 4 Expandable Accordion Rows */}
        <div className="essentials-right-column essentials-animate-item">
          <TravelEssentialsAccordion items={pakistanTravelEssentials} />
        </div>
      </div>
    </section>
  );
}
