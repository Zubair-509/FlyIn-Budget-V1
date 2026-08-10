import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/pakistan-cta-banner.css';

gsap.registerPlugin(ScrollTrigger);

export default function PakistanCtaBanner() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Gentle background scale animation (1.05 -> 1)
      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { scale: 1.05 },
          {
            scale: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // 2. Content entrance animation
      gsap.from('.cta-animate-item', {
        y: 20,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const handleQuoteClick = (e) => {
    e.preventDefault();
    const targetEl = document.getElementById('pakistan-flight-inquiry');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = '#pakistan-flight-inquiry';
    }
  };

  return (
    <section
      ref={sectionRef}
      className="pakistan-cta-banner-section"
      aria-label="FlyInBudget Pakistan flight enquiry call to action"
    >
      <div className="pakistan-cta-banner-panel">
        {/* Aviation Background Image Layer */}
        <div ref={bgRef} className="cta-bg-layer" />

        {/* Localized Dark Navy Gradient Overlay */}
        <div className="cta-gradient-overlay" />

        {/* Content Container */}
        <div className="cta-content-wrapper">
          <span className="cta-eyebrow cta-animate-item">
            READY TO FLY TO PAKISTAN?
          </span>

          <h2 className="cta-heading cta-animate-item">
            Let’s find a journey that fits your plans.
          </h2>

          <p className="cta-body cta-animate-item">
            Share your preferred city, dates and passenger details with our travel team and we’ll help you explore suitable flight options.
          </p>

          <div className="cta-actions-row cta-animate-item">
            <a
              href="#pakistan-flight-inquiry"
              className="btn-cta-primary"
              onClick={handleQuoteClick}
            >
              Get a fare quote
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a href="tel:01143600079" className="btn-cta-secondary">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call now
            </a>
          </div>

          <p className="cta-trust-line cta-animate-item">
            Human support • Clear fare guidance • Booking assistance
          </p>
        </div>
      </div>
    </section>
  );
}
