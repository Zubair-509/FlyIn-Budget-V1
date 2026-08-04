import React, { useState, useEffect, useRef, useCallback } from 'react';
import IndiaFlightCard from './IndiaFlightCard';
import { indiaFlights } from '../data/indiaFlights';
import '../styles/india-flights.css';

export default function IndiaFlightsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0); // Start at Mumbai (first card)
  const [favorites, setFavorites] = useState({});
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const isDragging = useRef(false);

  const total = indiaFlights.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const toggleFavorite = (id, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
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

  // High-Precision 3D Deck Math (Sharp Vector Output + Fluid Animation Timing)
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

  const activeFlight = indiaFlights[activeIndex];

  return (
    <div className="india-carousel-wrapper">
      {/* 3D Spatial Stage Deck */}
      <div
        className="india-stage-deck"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
      >
        {indiaFlights.map((flight, idx) => {
          const isCenter = idx === activeIndex;
          const style = getCardStyle(idx);

          return (
            <IndiaFlightCard
              key={flight.id}
              flight={flight}
              isCenter={isCenter}
              style={style}
              onSelect={() => setActiveIndex(idx)}
            />
          );
        })}
      </div>

      {/* Floating Liquid Glass Bottom Controller Bar */}
      <div className="india-controls-wrapper">
        <div className="india-controls-bar">
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
              <img src={activeFlight.image} alt={activeFlight.title} className="control-thumb-img" />
            </div>

            <div className="control-text-group">
              <h4 className="control-dest-title">{activeFlight.title}</h4>
              <p className="control-dest-subtitle">{activeFlight.country}</p>
            </div>
          </div>

          <button
            type="button"
            className={`control-fav-btn ${favorites[activeFlight.id] ? 'is-favorited' : ''}`}
            onClick={(e) => toggleFavorite(activeFlight.id, e)}
            aria-label="Favorite destination"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill={favorites[activeFlight.id] ? '#EEB01D' : 'none'}
              stroke={favorites[activeFlight.id] ? '#EEB01D' : '#FFFFFF'}
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
        <div className="india-pagination-dots">
          {indiaFlights.map((flight, idx) => (
            <button
              key={flight.id}
              type="button"
              className={`pagination-dot ${idx === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
