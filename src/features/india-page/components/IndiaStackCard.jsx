import React from 'react';

export default function IndiaStackCard({ card, index, isLast }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('india-flight-inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <article
      className="india-stack-card"
      data-card-index={index}
      aria-label={`Flight destination: ${card.city}`}
    >
      {/* Background Image Layer */}
      <div className="india-card-bg-layer">
        <img
          src={card.image}
          alt={`Scenic view of ${card.city}, India`}
          className="india-card-bg-img"
          style={{ objectPosition: card.imagePosition }}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
        <div className="india-card-gradient-overlay" />
      </div>

      {/* Card Content Layer */}
      <div className="india-card-content">
        {/* Header Badges Row */}
        <div className="india-card-top-bar">
          <span className="india-card-number">{card.number}</span>
          <span className="india-card-code-badge">{card.code}</span>
        </div>

        {/* Middle Details Block */}
        <div className="india-card-body">
          <span className="india-card-positioning">{card.positioning}</span>
          <h3 className="india-card-city-name">{card.city}</h3>
          <p className="india-card-desc">{card.description}</p>
        </div>

        {/* Bottom Actions & Fare Row */}
        <div className="india-card-bottom-bar">
          {card.startingFare && (
            <div className="india-card-fare-block">
              <span className="india-fare-label">Starting from</span>
              <span className="india-fare-value">{card.startingFare}</span>
            </div>
          )}

          <button
            type="button"
            className="india-card-cta-btn"
            onClick={handleCtaClick}
            aria-label={`Explore flight options for ${card.city}`}
          >
            <span>Explore flight options</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
