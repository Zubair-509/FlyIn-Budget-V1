import React from 'react';
import { BOOKING_TERMS_SECTIONS } from '../data/bookingTermsContent';

export default function BookingTermsMobileNav({ activeId }) {
  const handleChange = (e) => {
    const targetId = e.target.value;
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="booking-terms-mobile-nav-wrapper">
      <div className="booking-terms-mobile-nav-box">
        <label htmlFor="terms-jump-select" className="booking-terms-mobile-nav-label">
          JUMP TO SECTION
        </label>
        <select
          id="terms-jump-select"
          className="booking-terms-mobile-nav-select"
          value={activeId || ''}
          onChange={handleChange}
          aria-label="Jump to a legal clause"
        >
          {BOOKING_TERMS_SECTIONS.map((sec) => (
            <option key={sec.id} value={sec.id}>
              {sec.number} — {sec.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
