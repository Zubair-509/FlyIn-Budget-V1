import React from 'react';

export default function ContactSupportCTA() {
  const handleEnquiryClick = (e) => {
    e.preventDefault();
    const targetEl = document.querySelector('#contact-enquiry');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const firstInput = targetEl.querySelector('input');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 500);
      }
    }
  };

  return (
    <section className="contact-support-cta-section" aria-label="Flight enquiry call to action">
      <div className="contact-support-cta-container">
        <div className="contact-support-cta-card">
          <div className="contact-support-cta-content">
            <span className="contact-support-cta-eyebrow">NEED HELP CHOOSING A FLIGHT?</span>
            <h2 className="contact-support-cta-heading">Tell us where you want to go.</h2>
            <p className="contact-support-cta-copy">
              Share your destination, travel dates and passenger details and our team can help you explore suitable flight options.
            </p>
          </div>

          <div className="contact-support-cta-actions">
            <a
              href="#contact-enquiry"
              onClick={handleEnquiryClick}
              className="btn-contact-cta-primary"
            >
              <span>Start an enquiry</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a href="tel:01143600079" className="btn-contact-cta-secondary">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
