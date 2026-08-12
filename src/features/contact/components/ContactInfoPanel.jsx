import React from 'react';

export default function ContactInfoPanel() {
  return (
    <div className="contact-glass-card contact-info-card">
      <div className="contact-info-header">
        <h2 className="contact-info-title">Contact FlyInBudget</h2>
        <p className="contact-info-subtitle">
          For flight enquiries, booking questions and general travel support.
        </p>
      </div>

      <div className="contact-info-list">
        {/* Phone */}
        <div className="contact-info-item">
          <div className="contact-icon-bubble" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <div className="contact-info-text-group">
            <span className="contact-info-label">PHONE SUPPORT</span>
            <a href="tel:01143600079" className="contact-info-val-link">
              0114 360 0079
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="contact-info-item">
          <div className="contact-icon-bubble" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div className="contact-info-text-group">
            <span className="contact-info-label">EMAIL INQUIRIES</span>
            <a href="mailto:info@flyinbudget.co.uk" className="contact-info-val-link">
              info@flyinbudget.co.uk
            </a>
          </div>
        </div>

        {/* WhatsApp Business */}
        <div className="contact-info-item">
          <div className="contact-icon-bubble" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </div>
          <div className="contact-info-text-group">
            <span className="contact-info-label">WHATSAPP BUSINESS</span>
            <a href="https://wa.me/447383290467" target="_blank" rel="noopener noreferrer" className="contact-info-val-link">
              +44 7383 290467
            </a>
            <a href="https://wa.me/447383290467" target="_blank" rel="noopener noreferrer" className="contact-whatsapp-badge">
              <span>Chat on WhatsApp</span>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Office Address */}
        <div className="contact-info-item">
          <div className="contact-icon-bubble" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="contact-info-text-group">
            <span className="contact-info-label">UK OFFICE ADDRESS</span>
            <address className="contact-info-address">
              133 Wellgate, Rotherham, England, S60 2NN
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
