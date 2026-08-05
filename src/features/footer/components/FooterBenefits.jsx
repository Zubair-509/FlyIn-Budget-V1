import React, { memo } from 'react';

const FOOTER_BENEFITS = [
  {
    id: 'secure-booking',
    title: 'Secure Booking',
    desc: 'Your data is 100% safe',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#EEB01D" strokeWidth="2.2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    id: 'support-247',
    title: '24/7 Support',
    desc: 'We’re here anytime',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#EEB01D" strokeWidth="2.2" aria-hidden="true">
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
      </svg>
    )
  },
  {
    id: 'best-prices',
    title: 'Best Prices',
    desc: 'Get the most value',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#EEB01D" strokeWidth="2.2" aria-hidden="true">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    )
  },
  {
    id: 'trusted-thousands',
    title: 'Trusted by Thousands',
    desc: 'Happy travelers worldwide',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#EEB01D" strokeWidth="2.2" aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    )
  }
];

export const FooterBenefits = memo(function FooterBenefits() {
  return (
    <div className="footer-benefits-row">
      {FOOTER_BENEFITS.map((item, index) => (
        <React.Fragment key={item.id}>
          {index > 0 && <div className="footer-benefit-divider" aria-hidden="true" />}
          <div className="footer-benefit-chip">
            <div className="footer-benefit-icon">{item.icon}</div>
            <div className="footer-benefit-info">
              <span className="footer-benefit-title">{item.title}</span>
              <span className="footer-benefit-desc">{item.desc}</span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
});

export default FooterBenefits;
