import React, { useRef, useEffect, useState, memo } from 'react';
import FAQAccordion from './FAQAccordion';
import FAQBenefits from './FAQBenefits';
import faqBgImg from '../../../assets/Desktop Assets/BG/FAQ.png';
import '../styles/faq.css';

export const FAQSection = memo(function FAQSection() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`faq-section ${isInView ? 'is-in-view' : ''}`}
      aria-labelledby="faq-main-title"
      style={{ '--faq-bg-img': `url("${faqBgImg}")` }}
    >
      <div className="faq-bg-overlay" aria-hidden="true" />

      <div className="faq-container">
        {/* Left Column: Help Center Information */}
        <div className="faq-left-col">
          {/* Eyebrow */}
          <div className="faq-eyebrow">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#EEB01D" strokeWidth="2.2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>HELP CENTER</span>
          </div>

          {/* Main Heading */}
          <h2 id="faq-main-title" className="faq-main-heading">
            Have a question?<br />
            We’re here to help<span className="faq-gold-dot">.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="faq-supporting-copy">
            Get quick answers to common questions about flights, bookings, cancellations and more. Still need help? Our travel experts are just a call or message away.
          </p>

          <div className="faq-gold-divider" aria-hidden="true" />

          {/* CTA Action Buttons */}
          <div className="faq-actions-row">
            <button
              className="faq-btn-primary"
              type="button"
              onClick={() => alert('Getting in touch with FlyInBudget travel support...')}
              aria-label="Get in touch with FlyInBudget travel support"
            >
              <svg className="faq-btn-headset-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M3 18v-6a9 9 0 0118 0v6" />
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
              </svg>
              <span>Get in touch</span>
              <svg className="faq-btn-arrow-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <a
              href="tel:+18005550199"
              className="faq-btn-secondary"
              aria-label="Call FlyInBudget customer service now"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#EEB01D" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>Call now</span>
            </a>
          </div>

          {/* Supporting Benefits Row */}
          <FAQBenefits />
        </div>

        {/* Right Column: FAQ Accordion Group */}
        <div className="faq-right-col">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
});

export default FAQSection;
