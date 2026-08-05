import React, { useState, useCallback, memo } from 'react';

export const FooterNewsletter = memo(function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 4000);
    }
  }, [email]);

  return (
    <div className="footer-newsletter-card">
      <div className="footer-newsletter-header">
        <div className="newsletter-icon-circle" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#EEB01D" strokeWidth="2">
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
        </div>
        <div className="newsletter-header-text">
          <h4 className="newsletter-title">Get exclusive deals &amp; offers</h4>
          <p className="newsletter-subtext">Subscribe to our newsletter</p>
        </div>
      </div>

      <form className="footer-newsletter-form" onSubmit={handleSubmit}>
        <label htmlFor="footer-newsletter-email" className="sr-only">
          Enter your email address
        </label>
        <div className="newsletter-input-wrapper">
          <input
            id="footer-newsletter-email"
            type="email"
            className="newsletter-email-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
          />
          <button
            type="submit"
            className="newsletter-submit-btn"
            aria-label="Subscribe to FlyInBudget newsletter"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#05152d" strokeWidth="2.5" aria-hidden="true">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </div>
        {submitted && (
          <div className="newsletter-success-toast" role="status" aria-live="polite">
            ✓ Thank you for subscribing!
          </div>
        )}
      </form>
    </div>
  );
});

export default FooterNewsletter;
