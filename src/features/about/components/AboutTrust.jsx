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

        {/* 3-Panel Service Standards Grid */}
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
                <span className="panel-principle-badge">
                  {panel.principleLabel}
                </span>
              </div>

              <h3 className="panel-title">{panel.title}</h3>
              <span className="panel-subtitle">{panel.subtitle}</span>

              <p className="panel-desc">{panel.description}</p>

              <div className="panel-footer-badge">
                <span>{panel.footerLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
