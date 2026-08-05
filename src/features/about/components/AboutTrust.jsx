import React from 'react';
import { TRUST_CONTENT } from '../data/aboutContent';

export default function AboutTrust() {
  return (
    <section className="about-trust-section" aria-labelledby="about-trust-heading">
      <div className="about-trust-container">
        {/* Section Header */}
        <div className="about-trust-header">
          <span className="about-trust-eyebrow">{TRUST_CONTENT.eyebrow}</span>
          <h2 id="about-trust-heading" className="about-trust-heading">
            {TRUST_CONTENT.heading}
          </h2>
          <p className="about-trust-subtext">{TRUST_CONTENT.subtext}</p>
        </div>

        {/* Verifiable Credentials Document Folder Grid */}
        <div className="about-trust-panels-grid">
          {TRUST_CONTENT.panels.map((panel) => (
            <article key={panel.id} className="about-trust-panel">
              <div className="panel-credential-header">
                <div className="credential-seal-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#EEB01D" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span className={`status-pill ${panel.status === 'VERIFIED ACTIVE' ? 'is-verified' : 'is-pending'}`}>
                  {panel.status}
                </span>
              </div>

              <h3 className="panel-title">{panel.title}</h3>
              <span className="panel-subtitle">{panel.subtitle}</span>

              <p className="panel-desc">{panel.description}</p>

              {panel.placeholderNote && (
                <div className="panel-placeholder-notice">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>{panel.placeholderNote}</span>
                </div>
              )}

              <div className="panel-footer-badge">
                <span>{panel.badgeText}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
