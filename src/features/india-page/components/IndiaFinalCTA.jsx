import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ftiBgImg from '../../../assets/Desktop Assets/BG/FTI v1.png';
import '../styles/india-final-cta.css';

gsap.registerPlugin(ScrollTrigger);

export default function IndiaFinalCTA() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Subtle background scale settle (1.04 -> 1)
      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { scale: 1.04 },
          {
            scale: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // 2. Content entrance stagger reveal
      gsap.from('.india-cta-animate-item', {
        y: 22,
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

  const handleQuoteClick = (e) => {
    e.preventDefault();
    const targetEl = document.querySelector('#india-flight-inquiry');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="india-final-cta-section"
      aria-label="Flights to India enquiry final call to action"
    >
      {/* Full-width India Scenic Background */}
      <img
        ref={bgRef}
        src={ftiBgImg}
        alt=""
        className="india-cta-bg-img"
        aria-hidden="true"
      />

      {/* Dark Navy Overlay for Readability */}
      <div className="india-cta-overlay" />

      {/* Main Container */}
      <div className="india-final-cta-container">
        <div className="india-cta-content-center">
          <span className="india-cta-eyebrow india-cta-animate-item">
            PLANNING A JOURNEY TO INDIA?
          </span>

          <h2 className="india-cta-heading india-cta-animate-item">
            Let’s find a flight that fits your plans.
          </h2>

          <p className="india-cta-supporting-copy india-cta-animate-item">
            Tell us your preferred destination, travel dates and passenger details and our travel team can help you explore suitable flight options.
          </p>

          <div className="india-cta-actions-row india-cta-animate-item">
            <a
              href="#india-flight-inquiry"
              onClick={handleQuoteClick}
              className="btn-india-cta-primary"
            >
              <span>Get a fare quote</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a href="tel:01143600079" className="btn-india-cta-secondary">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call now</span>
            </a>
          </div>

          <p className="india-cta-trust-line india-cta-animate-item">
            Human support • Clear fare guidance • Booking assistance
          </p>
        </div>
      </div>
    </section>
  );
}
