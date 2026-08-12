import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { legalLinks } from '../data/footerLinks';

export const FooterBottomBar = memo(function FooterBottomBar() {
  return (
    <div className="footer-bottom-bar">
      {/* Left: Copyright */}
      <div className="footer-copyright">
        © 2025 <span className="copyright-gold">Flyinbudget.</span> All Rights Reserved.
      </div>

      {/* Center: Legal Links */}
      <nav className="footer-legal-nav" aria-label="Legal links">
        {legalLinks.map((link, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <span className="legal-divider" aria-hidden="true">|</span>}
            {link.href.startsWith('/') ? (
              <Link to={link.href} className="legal-link">
                {link.label}
              </Link>
            ) : (
              <a href={link.href} className="legal-link">
                {link.label}
              </a>
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Right: Payment Chips */}
      <div className="footer-payment-strip" aria-label="Accepted payment methods">
        <div className="payment-chip chip-visa" title="Visa">
          <span className="visa-text">VISA</span>
        </div>
        <div className="payment-chip chip-mastercard" title="Mastercard">
          <div className="mc-circles">
            <span className="mc-red" />
            <span className="mc-orange" />
          </div>
          <span className="mc-text">mastercard</span>
        </div>
        <div className="payment-chip chip-amex" title="American Express">
          <span className="amex-text">AMERICAN EXPRESS</span>
        </div>
        <div className="payment-chip chip-discover" title="Discover">
          <span className="discover-text">DISCOVER</span>
        </div>
        <div className="payment-chip chip-paypal" title="PayPal">
          <span className="paypal-p1">Pay</span>
          <span className="paypal-p2">Pal</span>
        </div>
      </div>
    </div>
  );
});

export default FooterBottomBar;
