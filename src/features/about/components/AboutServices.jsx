import React from 'react';
import { SERVICES_CONTENT } from '../data/aboutContent';

export default function AboutServices() {
  return (
    <section className="about-services-section" aria-labelledby="about-services-heading">
      <div className="about-services-glow" aria-hidden="true" />

      <div className="about-services-container">
        {/* Header Block */}
        <div className="about-services-header">
          <span className="about-services-eyebrow">WHAT WE HELP WITH</span>
          <h2 id="about-services-heading" className="about-services-heading">
            Travel services designed around your journey.
          </h2>
        </div>

        {/* Asymmetric Modular Grid (No 4-card generic symmetry) */}
        <div className="about-services-grid">
          {SERVICES_CONTENT.map((service) => (
            <div
              key={service.id}
              className={`about-service-card ${service.isFeatured ? 'is-featured-card' : ''}`}
            >
              <div className="card-top-row">
                <span className="service-number">{service.number}</span>
                {service.tag && <span className="service-tag">{service.tag}</span>}
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>

              <div className="service-bottom-accent" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
