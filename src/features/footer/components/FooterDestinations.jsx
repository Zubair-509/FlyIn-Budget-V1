import React, { memo } from 'react';
import { footerDestinations } from '../data/footerDestinations';

export const FooterDestinations = memo(function FooterDestinations() {
  return (
    <div className="footer-col footer-col-destinations">
      <h4 className="footer-col-title">
        TOP DESTINATIONS
        <span className="footer-title-underline" aria-hidden="true" />
      </h4>

      <div className="footer-destinations-list">
        {footerDestinations.map((dest) => (
          <a key={dest.id} href={dest.href} className="footer-dest-card">
            <img src={dest.image} alt={dest.city} className="footer-dest-thumb" />
            <div className="footer-dest-info">
              <span className="footer-dest-name">{dest.city}</span>
              <span className="footer-dest-price">{dest.price}</span>
            </div>
            <svg className="footer-dest-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
});

export default FooterDestinations;
