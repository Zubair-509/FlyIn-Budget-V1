import React, { memo } from 'react';

const BENEFITS = [
  {
    id: 'secure-bookings',
    title: 'Secure Bookings',
    description: 'Your data is safe with us',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  {
    id: 'travel-experts',
    title: 'Travel Experts',
    description: 'Real people. Real support.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    )
  },
  {
    id: 'budget-options',
    title: 'Budget-Friendly Options',
    description: 'We help you find suitable fares',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    )
  }
];

export const FAQBenefits = memo(function FAQBenefits() {
  return (
    <div className="faq-benefits-row">
      {BENEFITS.map((item, index) => (
        <React.Fragment key={item.id}>
          {index > 0 && <div className="faq-benefit-divider" aria-hidden="true" />}
          <div className="faq-benefit-item">
            <div className="faq-benefit-icon-circle">
              {item.icon}
            </div>
            <div className="faq-benefit-text">
              <span className="faq-benefit-title">{item.title}</span>
              <span className="faq-benefit-desc">{item.description}</span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
});

export default FAQBenefits;
