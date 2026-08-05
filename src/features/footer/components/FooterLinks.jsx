import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { quickLinks } from '../data/footerLinks';

export const FooterLinks = memo(function FooterLinks() {
  return (
    <div className="footer-col footer-col-links">
      <h4 className="footer-col-title">
        QUICK LINKS
        <span className="footer-title-underline" aria-hidden="true" />
      </h4>

      <ul className="footer-links-list">
        {quickLinks.map((link, idx) => (
          <li key={idx} className="footer-link-item">
            {link.href.startsWith('/') ? (
              <Link to={link.href} className="footer-link">
                <svg className="footer-link-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#EEB01D" strokeWidth="2.5" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <span>{link.label}</span>
              </Link>
            ) : (
              <a href={link.href} className="footer-link">
                <svg className="footer-link-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#EEB01D" strokeWidth="2.5" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <span>{link.label}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default FooterLinks;
