import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import IndiaFAQAccordion from './IndiaFAQAccordion';
import { indiaFaqData } from '../data/indiaFaqData';
import '../styles/india-faq.css';

gsap.registerPlugin(ScrollTrigger);

export default function IndiaFAQ() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.india-faq-animate-item', {
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

  const handleCtaClick = (e) => {
    e.preventDefault();
    const targetEl = document.querySelector('#india-flight-inquiry');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="india-faq-section"
      aria-label="India flights frequently asked questions"
    >
      <div className="india-faq-container">
        {/* Left Column: Editorial Copy & Support Panel */}
        <div className="india-faq-left-column">
          <span className="india-faq-eyebrow india-faq-animate-item">
            INDIA FLIGHTS FAQ
          </span>
          <h2 className="india-faq-heading india-faq-animate-item">
            Questions about flights to India
          </h2>
          <p className="india-faq-supporting-copy india-faq-animate-item">
            Clear answers about destinations, fares and booking support.
          </p>

          {/* Left Support Panel */}
          <div className="india-faq-support-panel india-faq-animate-item">
            <span className="india-faq-support-eyebrow">NEED HELP PLANNING?</span>
            <h3 className="india-faq-support-heading">Tell us where you want to travel.</h3>
            <p className="india-faq-support-copy">
              Share your destination, dates and passenger details and our travel team can help you explore suitable flight options.
            </p>
            <div className="india-faq-support-actions">
              <a
                href="#india-flight-inquiry"
                onClick={handleCtaClick}
                className="btn-india-faq-quote"
              >
                <span>Get a fare quote</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="tel:01143600079" className="btn-india-faq-call">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>0114 360 0079</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 7 Expandable Accordion Questions */}
        <div className="india-faq-right-column india-faq-animate-item">
          <IndiaFAQAccordion items={indiaFaqData} />
        </div>
      </div>
    </section>
  );
}
