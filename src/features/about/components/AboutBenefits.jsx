import React from 'react';
import { BENEFITS_CONTENT } from '../data/aboutContent';

export default function AboutBenefits() {
  return (
    <section className="about-benefits-section" aria-labelledby="about-benefits-heading">
      <div className="about-benefits-container">
        {/* Left Column: Heading */}
        <div className="about-benefits-left">
          <span className="about-benefits-eyebrow">WHY TRAVELLERS CHOOSE US</span>
          <h2 id="about-benefits-heading" className="about-benefits-heading">
            {BENEFITS_CONTENT.heading}
          </h2>
        </div>

        {/* Right Column: Editorial Divided List */}
        <div className="about-benefits-list">
          {BENEFITS_CONTENT.items.map((item) => (
            <div key={item.number} className="about-benefit-row">
              <div className="benefit-row-line" aria-hidden="true" />
              <div className="benefit-row-content">
                <span className="benefit-num">{item.number}</span>
                <div className="benefit-text-block">
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-desc">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
