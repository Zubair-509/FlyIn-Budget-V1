import React, { memo } from 'react';

export const FooterContact = memo(function FooterContact() {
  return (
    <div className="footer-col footer-col-contact">
      {/* Contact Section */}
      <h4 className="footer-col-title">
        CONTACT US
        <span className="footer-title-underline" aria-hidden="true" />
      </h4>

      <ul className="footer-contact-list">
        <li className="footer-contact-item">
          <div className="contact-icon-bubble" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#EEB01D" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <a href="mailto:info@flyinbudget.co.uk" className="contact-text-link">
            info@flyinbudget.co.uk
          </a>
        </li>

        <li className="footer-contact-item">
          <div className="contact-icon-bubble" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#EEB01D" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <a href="tel:01143600079" className="contact-text-link">
            01143600079
          </a>
        </li>

        <li className="footer-contact-item">
          <div className="contact-icon-bubble" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#EEB01D" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <address className="contact-address-text">
            133 Wellgate, Rotherham, England, S60 2NN
          </address>
        </li>
      </ul>

      {/* Divider Line */}
      <div className="footer-contact-divider" aria-hidden="true" />

      {/* Social Section */}
      <h4 className="footer-col-title footer-social-title">
        FOLLOW US
        <span className="footer-title-underline" aria-hidden="true" />
      </h4>

      <div className="footer-social-row">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          aria-label="Follow FlyInBudget on Facebook"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          aria-label="Follow FlyInBudget on Instagram"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>

        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          aria-label="Follow FlyInBudget on TikTok"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.29-2.67.75-5.43 2.76-7.14 1.43-1.24 3.32-1.92 5.21-1.9.15.01.29.02.44.04V12.4c-.93-.16-1.92.05-2.73.54-1.07.65-1.74 1.84-1.74 3.09.01 1.41.87 2.67 2.18 3.15.93.36 1.99.3 2.9-.14 1.09-.5 1.82-1.57 1.88-2.77.03-3.66.02-7.33.02-10.99z" />
          </svg>
        </a>

        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          aria-label="Follow FlyInBudget on X"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </div>
  );
});

export default FooterContact;
