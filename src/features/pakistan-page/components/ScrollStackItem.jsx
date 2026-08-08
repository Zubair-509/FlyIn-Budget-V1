import React from 'react';

export default function ScrollStackItem({ card, index, isCovered }) {
  const {
    sequence,
    city,
    routeLabel,
    subtitle,
    description,
    startingFare,
    currency,
    availabilityNote,
    image,
    badge,
    bookTarget,
    callTarget
  } = card;

  // Interaction safety: disable focusable controls on covered cards
  const interactiveAttr = isCovered
    ? { tabIndex: -1, 'aria-hidden': true }
    : {};

  return (
    <div
      className={`scroll-stack-card ${isCovered ? 'is-covered' : ''}`}
      data-card-index={index}
    >
      {/* Dark tint overlay applied when covered in stack */}
      <div className="scroll-stack-card__dark-overlay" aria-hidden="true" />

      <div className="scroll-stack-card__grid">
        {/* Left Column: Photography */}
        <div className="scroll-stack-card__image-wrap">
          <img
            src={image}
            alt={`Flight destination to ${city}`}
            className="scroll-stack-card__img"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="scroll-stack-card__img-gradient" />
          {badge && <span className="scroll-stack-card__badge">{badge}</span>}
        </div>

        {/* Right Column: Content */}
        <div className="scroll-stack-card__content">
          <div>
            <div className="scroll-stack-card__top-meta">
              <span className="scroll-stack-card__seq">{sequence}</span>
              <span className="scroll-stack-card__route-tag">{routeLabel}</span>
            </div>

            <h3 className="scroll-stack-card__city-title">{city}</h3>
            {subtitle && <p className="scroll-stack-card__subtitle">{subtitle}</p>}
            <p className="scroll-stack-card__desc">{description}</p>
          </div>

          {/* Pricing & CTAs */}
          <div className="scroll-stack-card__price-row">
            <div className="scroll-stack-card__fare-block">
              <span className="scroll-stack-card__fare-label">STARTING FROM</span>
              <div className="scroll-stack-card__fare-amount">
                {currency}{startingFare}
              </div>
              <span className="scroll-stack-card__fare-note">{availabilityNote}</span>
            </div>

            <div className="scroll-stack-card__cta-group">
              <a
                href={bookTarget}
                className="btn-card-book"
                {...interactiveAttr}
              >
                INQUIRE NOW
              </a>
              <a
                href={callTarget}
                className="btn-card-call"
                {...interactiveAttr}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>CALL NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
