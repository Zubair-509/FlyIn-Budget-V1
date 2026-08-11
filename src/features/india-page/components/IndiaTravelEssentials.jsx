import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import IndiaTravelEssentialsAccordion from './IndiaTravelEssentialsAccordion';
import { indiaTravelEssentialsData } from '../data/indiaTravelEssentialsData';
import '../styles/india-travel-essentials.css';

gsap.registerPlugin(ScrollTrigger);

export default function IndiaTravelEssentials() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.india-essentials-animate-item', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
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
      className="india-travel-essentials-section"
      aria-label="India travel essentials and planning guide"
    >
      <div className="india-travel-essentials-container">
        {/* Left Column: Copy & Editorial Intro */}
        <div className="india-essentials-left-column">
          <span className="india-essentials-eyebrow india-essentials-animate-item">
            TRAVEL ESSENTIALS
          </span>
          <h2 className="india-essentials-heading india-essentials-animate-item">
            Planning your journey to India
          </h2>
          <p className="india-essentials-supporting-copy india-essentials-animate-item">
            Helpful information to consider before choosing your arrival city, travel dates and fare option.
          </p>
        </div>

        {/* Right Column: 6 Expandable Accordion Rows */}
        <div className="india-essentials-right-column india-essentials-animate-item">
          <IndiaTravelEssentialsAccordion items={indiaTravelEssentialsData} />
        </div>
      </div>
    </section>
  );
}
