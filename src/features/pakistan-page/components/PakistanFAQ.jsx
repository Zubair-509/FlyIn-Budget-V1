import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PakistanFAQAccordion from './PakistanFAQAccordion';
import { pakistanFaqData } from '../data/pakistanFaqData';
import '../styles/pakistan-faq.css';

gsap.registerPlugin(ScrollTrigger);

export default function PakistanFAQ() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.faq-animate-item', {
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
      className="pakistan-faq-section"
      aria-label="Pakistan flights frequently asked questions"
    >
      <div className="pakistan-faq-container">
        {/* Left Column: Copy & Support Contact Prompt */}
        <div className="faq-left-column">
          <span className="faq-eyebrow faq-animate-item">
            PAKISTAN FLIGHTS FAQ
          </span>
          <h2 className="faq-heading faq-animate-item">
            Questions about flights to Pakistan
          </h2>
          <p className="faq-supporting-copy faq-animate-item">
            Clear answers about routes, fares and booking support.
          </p>

          <div className="faq-support-card faq-animate-item">
            <h3 className="faq-support-title">
              Still need help planning your journey?
            </h3>
            <a href="tel:01143600079" className="faq-support-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Speak to our travel team
            </a>
          </div>
        </div>

        {/* Right Column: 6 Expandable Accordion Questions */}
        <div className="faq-right-column faq-animate-item">
          <PakistanFAQAccordion items={pakistanFaqData} />
        </div>
      </div>
    </section>
  );
}
