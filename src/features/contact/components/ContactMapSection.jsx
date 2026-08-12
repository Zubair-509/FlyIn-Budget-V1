import React from 'react';

export default function ContactMapSection() {
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.2653473225782!2d-1.3510052000000001!3d53.4279637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487977035d43fcd3%3A0x93b3f76b4c9e5b30!2sFlyin%20Budget!5e0!3m2!1sen!2s!4v1786479941640!5m2!1sen!2s';

  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Flyin+Budget+133+Wellgate+Rotherham+England+S60+2NN';

  return (
    <section className="contact-map-section" aria-label="UK office location map">
      <div className="contact-map-container">
        <div className="contact-map-header">
          <span className="contact-map-eyebrow">FIND US</span>
          <h2 className="contact-map-title">Our UK office</h2>
          <p className="contact-map-subtitle">Find FlyInBudget in Rotherham, England.</p>
        </div>

        <div className="contact-map-grid">
          {/* Left Column: Office Details */}
          <div className="contact-glass-card contact-office-card">
            <h3 className="contact-office-name">FlyInBudget</h3>
            <address className="contact-office-address-block">
              133 Wellgate<br />
              Rotherham, England<br />
              S60 2NN
            </address>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-get-directions"
            >
              <span>Get directions</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>

          {/* Right Column: Google Maps Iframe */}
          <div className="contact-map-frame-box">
            <iframe
              src={mapEmbedUrl}
              className="contact-map-iframe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="FlyInBudget office location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
