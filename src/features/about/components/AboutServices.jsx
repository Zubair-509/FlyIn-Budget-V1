import React from 'react';
import { SERVICES_CONTENT } from '../data/aboutContent';
import flightImg from '../../../assets/service_flight_options.png';
import holidayImg from '../../../assets/service_holiday_planning.png';
import bookingImg from '../../../assets/service_booking_assistance.png';
import visaImg from '../../../assets/service_visa_guidance.png';

const SERVICE_IMAGES = {
  'flight-options': flightImg,
  'holiday-planning': holidayImg,
  'booking-assistance': bookingImg,
  'visa-travel-guidance': visaImg,
};

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

        {/* Asymmetric Modular Grid */}
        <div className="about-services-grid">
          {SERVICES_CONTENT.map((service) => (
            <div
              key={service.id}
              className={`about-service-card ${service.isFeatured ? 'is-featured-card' : ''} card-${service.id}`}
            >
              {/* Embedded Visual Image Panel */}
              <div className="service-card-media-panel" aria-hidden="true">
                <img
                  src={SERVICE_IMAGES[service.id]}
                  alt=""
                  className="service-card-bg-img"
                  loading="lazy"
                  width="800"
                  height="500"
                />
                <div className="service-card-img-overlay" />
              </div>

              <div className="service-card-content">
                <div className="card-top-row">
                  <span className="service-number">{service.number}</span>
                  {service.tag && <span className="service-tag">{service.tag}</span>}
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <div className="service-bottom-accent" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
