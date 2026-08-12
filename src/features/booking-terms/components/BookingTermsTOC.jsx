import React from 'react';
import { BOOKING_TERMS_SECTIONS } from '../data/bookingTermsContent';

export default function BookingTermsTOC({ activeId }) {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="booking-terms-toc-column">
      <div className="booking-terms-toc-card">
        <div className="booking-terms-toc-title">
          TERMS NAVIGATION
        </div>
        <nav className="booking-terms-toc-nav" aria-label="Booking terms sections">
          {BOOKING_TERMS_SECTIONS.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => handleNavClick(e, sec.id)}
                className={`booking-terms-toc-link ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'location' : undefined}
              >
                <span className="toc-number">{sec.number}</span>
                <span className="toc-title-text">{sec.title}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
