import React, { memo } from 'react';

const IndiaFlightCard = memo(function IndiaFlightCard({
  flight,
  isCenter,
  style,
  onSelect,
  onBook,
  onCall
}) {
  return (
    <div
      className={`india-card ${isCenter ? 'is-active-card' : 'is-side-card'}`}
      style={style}
      onClick={onSelect}
      role={isCenter ? 'article' : 'button'}
      tabIndex={0}
      aria-label={`Flights to ${flight.title}, starting from ${flight.price}`}
    >
      {/* Background Destination Media Photo */}
      <div className="india-card-media">
        <img
          src={flight.image}
          alt={flight.title}
          className="india-card-bg-img"
          loading="eager"
          decoding="async"
        />
        <div className="india-card-gradient-overlay" />
      </div>

      {/* Card Content Overlay Layer */}
      <div className="india-card-inner-content">
        {/* Top Location Pin: 📍 India */}
        <div className="india-card-country-tag">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#EEB01D" strokeWidth="2.2" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>India</span>
        </div>

        {/* City Title & Price Block */}
        <div className="india-card-body-block">
          <div className="india-card-title-group">
            <span className="india-card-prefix">Flights to</span>
            <h3 className="india-card-city-name">{flight.title}</h3>
          </div>

          <div className="india-card-price-group">
            <span className="india-card-price-label">Starting from</span>
            <span className="india-card-price-val">{flight.price}</span>
          </div>
        </div>

        {/* Active Card Action Bar & Tagline Pill (Active Center Card Only) */}
        {isCenter && (
          <div className="india-card-action-bar">
            <div className="india-card-buttons-row">
              <button
                type="button"
                className="btn-india-book"
                onClick={(e) => {
                  e.stopPropagation();
                  onBook ? onBook(flight) : document.getElementById('booking-widget')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Book now</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <button
                type="button"
                className="btn-india-call"
                onClick={(e) => {
                  e.stopPropagation();
                  onCall ? onCall(flight) : window.open('tel:01143600079');
                }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>Call now</span>
              </button>
            </div>

            {flight.tagline && (
              <div className="india-card-tagline-pill">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="#EEB01D" stroke="#EEB01D" strokeWidth="1" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>{flight.tagline}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
});

export default IndiaFlightCard;
