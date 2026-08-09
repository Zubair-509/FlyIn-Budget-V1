import React from 'react';

export default function DestinationCardContent({ activeDest, contentRef }) {
  if (!activeDest) return null;

  const { id, city, headline, description, tags, ctaLabel, ctaTarget, preselectCity } = activeDest;

  const handleCtaClick = () => {
    // If inquiry form exists on page, preselect the city in the form dropdown
    const inquirySelect = document.getElementById('paki-destination');
    if (inquirySelect && preselectCity) {
      inquirySelect.value = preselectCity;
      inquirySelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <div
      id={`dest-panel-${id}`}
      role="tabpanel"
      aria-labelledby={`dest-tab-${id}`}
      className="discovery-left-content"
      ref={contentRef}
    >
      <span className="discovery-eyebrow">INTRODUCING PAKISTAN</span>
      <h2 className="discovery-main-heading">
        One country.<br />Many unforgettable journeys.
      </h2>

      <div className="discovery-city-block">
        <h3 className="discovery-city-name">{city}</h3>
        <p className="discovery-city-headline">{headline}</p>
        <p className="discovery-city-desc">{description}</p>
      </div>

      {tags && tags.length > 0 && (
        <div className="discovery-tags-row">
          {tags.map((tag, idx) => (
            <span key={idx} className="discovery-tag-pill">
              {tag}
            </span>
          ))}
        </div>
      )}

      <a
        href={ctaTarget || '#pakistan-flight-inquiry'}
        className="btn-discovery-cta"
        onClick={handleCtaClick}
      >
        <span>{ctaLabel || `Explore flights to ${city}`}</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
