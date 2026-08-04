import React, { memo } from 'react';

const IndiaCarouselControls = memo(function IndiaCarouselControls({
  flights = [],
  activeIndex = 0,
  activeFlight,
  favorites = {},
  onToggleFavorite,
  onPrev,
  onNext,
  onSelectCity
}) {
  const currentFlight = activeFlight || flights[activeIndex] || flights[0];

  if (!currentFlight) return null;

  const isFavorite = !!favorites[currentFlight.id];

  return (
    <div className="india-controls-wrapper">
      {/* Translucent Liquid Glass Bottom Controller Bar */}
      <nav className="india-controls-bar" aria-label="India flight destinations carousel navigation">
        {/* Previous Arrow Button */}
        <button
          className="control-nav-btn prev-btn"
          onClick={onPrev}
          type="button"
          aria-label="Show previous India destination"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Active Destination Thumbnail & Info Box */}
        <div className="control-center-info">
          <div className="control-thumb-box">
            <img
              src={currentFlight.image}
              alt={currentFlight.city}
              className="control-thumb-img"
            />
          </div>

          <div className="control-text-group">
            <h4 className="control-dest-title">{currentFlight.city}</h4>
            <span className="control-dest-subtitle">{currentFlight.country || 'India'}</span>
          </div>
        </div>

        {/* Favorite Heart Toggle Button */}
        <button
          type="button"
          className={`control-fav-btn ${isFavorite ? 'is-favorited' : ''}`}
          onClick={(e) => onToggleFavorite && onToggleFavorite(currentFlight.id, e)}
          aria-label={`Favorite ${currentFlight.city}`}
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill={isFavorite ? '#EEB01D' : 'none'}
            stroke={isFavorite ? '#EEB01D' : '#FFFFFF'}
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>

        {/* Next Arrow Button */}
        <button
          className="control-nav-btn next-btn"
          onClick={onNext}
          type="button"
          aria-label="Show next India destination"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </nav>

      {/* Pagination Indicator Dots */}
      <div className="india-pagination-dots" role="tablist" aria-label="India flight slides pagination">
        {flights.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${idx + 1}: ${item.city}`}
              className={`pagination-dot ${isActive ? 'is-active' : ''}`}
              onClick={() => onSelectCity(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
});

export default IndiaCarouselControls;
