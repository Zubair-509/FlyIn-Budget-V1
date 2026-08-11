import React from 'react';

export default function IndiaDestinationCardContent({ activeDest, contentRef }) {
  if (!activeDest) return null;

  const { id, city, headline, description, tags, ctaLabel, ctaTarget, preselectCity } = activeDest;

  const handleCtaClick = (e) => {
    e.preventDefault();
    const inquirySelect = document.getElementById('india-destination');
    if (inquirySelect && preselectCity) {
      inquirySelect.value = preselectCity;
      inquirySelect.dispatchEvent(new Event('change', { bubbles: true }));
    }

    const targetEl = document.querySelector(ctaTarget || '#india-flight-inquiry');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      id={`india-dest-panel-${id}`}
      role="tabpanel"
      aria-labelledby={`india-dest-tab-${id}`}
      className="india-discovery-left-content"
      ref={contentRef}
    >
      <span className="india-discovery-eyebrow">EXPLORE INDIA</span>
      <h2 className="india-discovery-main-heading">
        One country.<br />Endless unforgettable gateways.
      </h2>

      <div className="india-discovery-city-block">
        <h3 className="india-discovery-city-name">{city}</h3>
        <p className="india-discovery-city-headline">{headline}</p>
        <p className="india-discovery-city-desc">{description}</p>
      </div>

      {tags && tags.length > 0 && (
        <div className="india-discovery-tags-row">
          {tags.map((tag, idx) => (
            <span key={idx} className="india-discovery-tag-pill">
              {tag}
            </span>
          ))}
        </div>
      )}

      <a
        href={ctaTarget || '#india-flight-inquiry'}
        className="btn-india-discovery-cta"
        onClick={handleCtaClick}
      >
        <span>{ctaLabel || `Explore flight options`}</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
