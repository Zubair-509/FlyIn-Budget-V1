import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/lowest-fares.css';
import { fareDeals } from '../data/fareDeals';

export default function FaresCarousel() {
  const [activeIndex, setActiveIndex] = useState(2); // Start at Dubai (center)
  const [favorites, setFavorites] = useState({});
  const [expandedCard, setExpandedCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const isDragging = useRef(false);

  const total = fareDeals.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 35) handleNext();
      if (diff < -35) handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // High-Precision 3D Deck Math - Sharp Vector Output with Responsive Deck Scaling
  const getCardStyle = (index) => {
    let offset = index - activeIndex;

    if (offset > Math.floor(total / 2)) offset -= total;
    if (offset < -Math.floor(total / 2)) offset += total;

    const isMobile = windowWidth <= 600;
    const isTablet = windowWidth > 600 && windowWidth <= 992;

    const stepX = isMobile ? 0 : isTablet ? 220 : 340;
    const rotateAngle = isTablet ? 26 : 32;

    if (offset === 0) {
      return {
        transform: 'translate3d(0px, 0px, 0px) scale(1)',
        zIndex: 25,
        opacity: 1,
        filter: 'none',
        pointerEvents: 'auto'
      };
    } else if (offset === 1) {
      return {
        transform: isMobile ? 'translate3d(120px, 0px, 0px) scale(0.8)' : `translate3d(${stepX}px, 0px, 0px) rotateY(-${rotateAngle}deg) scale(0.85)`,
        zIndex: 15,
        opacity: isMobile ? 0 : 0.82,
        filter: 'brightness(0.88)',
        pointerEvents: isMobile ? 'none' : 'auto'
      };
    } else if (offset === -1) {
      return {
        transform: isMobile ? 'translate3d(-120px, 0px, 0px) scale(0.8)' : `translate3d(-${stepX}px, 0px, 0px) rotateY(${rotateAngle}deg) scale(0.85)`,
        zIndex: 15,
        opacity: isMobile ? 0 : 0.82,
        filter: 'brightness(0.88)',
        pointerEvents: isMobile ? 'none' : 'auto'
      };
    } else if (offset === 2 || offset < -2) {
      return {
        transform: `translate3d(${stepX * 1.7}px, 0px, 0px) rotateY(-${rotateAngle * 1.35}deg) scale(0.68)`,
        zIndex: 5,
        opacity: isMobile ? 0 : 0.45,
        filter: 'brightness(0.72)',
        pointerEvents: 'none'
      };
    } else if (offset === -2 || offset > 2) {
      return {
        transform: `translate3d(-${stepX * 1.7}px, 0px, 0px) rotateY(${rotateAngle * 1.35}deg) scale(0.68)`,
        zIndex: 5,
        opacity: isMobile ? 0 : 0.45,
        filter: 'brightness(0.72)',
        pointerEvents: 'none'
      };
    }

    return {
      transform: `translate3d(${offset * stepX}px, 0px, 0px) scale(0.5)`,
      zIndex: 1,
      opacity: 0,
      pointerEvents: 'none'
    };
  };

  const activeDest = fareDeals[activeIndex];

  return (
    <div className="coverflow-carousel-wrapper">
      
      {/* 3D Perspective Stage Deck */}
      <div
        className="coverflow-stage"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
      >
        {fareDeals.map((dest, idx) => {
          const isCenter = idx === activeIndex;
          const style = getCardStyle(idx);

          return (
            <div
              key={dest.id}
              className={`coverflow-card ${isCenter ? 'is-active' : ''}`}
              style={style}
              onClick={() => setActiveIndex(idx)}
            >
              {/* Card Image Background Layer */}
              <div className="card-bg-layer">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="card-bg-img"
                  loading="eager"
                />
                <div className="card-gradient-overlay" />
              </div>

              {/* Top Glass Bar Controls */}
              <div className="card-top-glass-bar">
                <button
                  type="button"
                  className="card-glass-pill-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedCard(dest);
                  }}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  <span>Expand</span>
                </button>

                <button
                  type="button"
                  className="card-glass-icon-btn"
                  onClick={(e) => toggleFavorite(dest.id, e)}
                  title="Bookmark Destination"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill={favorites[dest.id] ? '#EEB01D' : 'none'}
                    stroke={favorites[dest.id] ? '#EEB01D' : '#FFFFFF'}
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>

              {/* Card Bottom Glass Panel (Sharp Live HTML Content) */}
              <div className="card-bottom-glass-panel">
                <div className="card-title-row">
                  <h3 className="card-main-title">{dest.title}</h3>
                  <span className="card-step-counter">
                    {dest.id} / {total}
                  </span>
                </div>

                <p className="card-description-text">{dest.description}</p>

                <div className="card-location-row">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#EEB01D" strokeWidth="2.2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="location-text">{dest.location}</span>
                </div>

                <div className="card-footer-action-row">
                  <div className="card-price-block">
                    <span className="price-label">Starting from</span>
                    <span className="price-value">{dest.price}</span>
                  </div>

                  <button
                    type="button"
                    className="btn-card-cta"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Booking flight to ${dest.title}`);
                    }}
                  >
                    <span>Book now</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Liquid Glass Bottom Controller Bar */}
      <div className="coverflow-controls-bar">
        <button
          type="button"
          className="control-nav-btn prev-btn"
          onClick={handlePrev}
          aria-label="Previous destination"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="control-center-info">
          <div className="control-thumb-box">
            <img src={activeDest.image} alt={activeDest.title} className="control-thumb-img" />
          </div>

          <div className="control-text-group">
            <h4 className="control-dest-title">{activeDest.title}</h4>
            <p className="control-dest-subtitle">{activeDest.subtitle}</p>
          </div>
        </div>

        <button
          type="button"
          className="control-fav-btn"
          onClick={(e) => toggleFavorite(activeDest.id, e)}
          aria-label="Favorite destination"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill={favorites[activeDest.id] ? '#EEB01D' : 'none'}
            stroke={favorites[activeDest.id] ? '#EEB01D' : '#FFFFFF'}
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>

        <button
          type="button"
          className="control-nav-btn next-btn"
          onClick={handleNext}
          aria-label="Next destination"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="coverflow-pagination-dots">
        {fareDeals.map((dest, idx) => (
          <button
            key={dest.id}
            type="button"
            className={`pagination-dot ${idx === activeIndex ? 'is-active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Expanded Modal Preview */}
      {expandedCard && (
        <div className="coverflow-modal-overlay" onClick={() => setExpandedCard(null)}>
          <div className="coverflow-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setExpandedCard(null)}>
              ✕
            </button>
            <img src={expandedCard.image} alt={expandedCard.title} className="modal-img" />
            <div className="modal-content-body">
              <span className="modal-country-badge">{expandedCard.country}</span>
              <h2>{expandedCard.title}</h2>
              <p className="modal-desc">{expandedCard.description}</p>
              <p className="modal-loc">{expandedCard.location}</p>
              <div className="modal-footer">
                <span className="modal-price">{expandedCard.price}</span>
                <button
                  className="btn-card-cta"
                  onClick={() => {
                    alert(`Booking flight to ${expandedCard.title}`);
                    setExpandedCard(null);
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
