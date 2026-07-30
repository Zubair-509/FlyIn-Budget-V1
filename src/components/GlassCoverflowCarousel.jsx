import React, { useState, useEffect, useRef, useCallback } from 'react';
import './GlassCoverflowCarousel.css';

import istanbulImg from '../assets/istanbul.png';
import karachiImg from '../assets/karachi.png';
import dubaiImg from '../assets/dubai.png';
import delhiImg from '../assets/delhi.png';
import seoulImg from '../assets/seoul.png';

const DESTINATIONS = [
  {
    id: 1,
    title: 'Istanbul',
    country: 'Turkey',
    subtitle: 'Where East Meets West & History Lives',
    description: 'An ancient citadel of architecture, grand bazaars, and mesmerizing Bosporus sunsets bridging two continents.',
    location: 'Istanbul, Turkey • 41.0082° N, 28.9784° E',
    price: '£115*',
    image: istanbulImg
  },
  {
    id: 2,
    title: 'Karachi',
    country: 'Pakistan',
    subtitle: 'Historic Architecture & Coastal Charm',
    description: 'Home to majestic marble monuments, bustling seaside promenades, and vibrant cultural heritage.',
    location: 'Karachi, Pakistan • 24.8607° N, 67.0011° E',
    price: '£304*',
    image: karachiImg
  },
  {
    id: 3,
    title: 'Dubai',
    country: 'UAE',
    subtitle: 'Future Skyline & Luxury Oasis',
    description: 'Witness architectural wonders, world-class desert safaris, and ultra-modern luxury in the heart of the Gulf.',
    location: 'Dubai, UAE • 25.2048° N, 55.2708° E',
    price: '£275*',
    image: dubaiImg
  },
  {
    id: 4,
    title: 'Delhi',
    country: 'India',
    subtitle: 'Vibrant Heritage & Timeless Culture',
    description: 'Explore magnificent red fortresses, ancient spice markets, and centuries of rich imperial history.',
    location: 'New Delhi, India • 28.6139° N, 77.2090° E',
    price: '£418*',
    image: delhiImg
  },
  {
    id: 5,
    title: 'Seoul',
    country: 'South Korea',
    subtitle: 'Modern Metropolis & Royal Palaces',
    description: 'A captivating fusion of high-tech futuristic skyline, ancient royal dynasties, and world-famous cuisine.',
    location: 'Seoul, South Korea • 37.5665° N, 126.9780° E',
    price: '£389*',
    image: seoulImg
  }
];

export default function GlassCoverflowCarousel() {
  const [activeIndex, setActiveIndex] = useState(2); // Start at Dubai (center)
  const [favorites, setFavorites] = useState({});
  const [expandedCard, setExpandedCard] = useState(null);
  
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const isDragging = useRef(false);

  const total = DESTINATIONS.length;

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch / Drag Handlers
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
      if (diff > 40) handleNext();
      if (diff < -40) handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Calculate 3D Offset & Transform Properties
  const getCardStyle = (index) => {
    let offset = index - activeIndex;

    // Handle wrap-around math for circular deck
    if (offset > Math.floor(total / 2)) offset -= total;
    if (offset < -Math.floor(total / 2)) offset += total;

    if (offset === 0) {
      return {
        transform: 'translateX(0px) translateZ(100px) rotateY(0deg) scale(1)',
        zIndex: 20,
        opacity: 1,
        filter: 'blur(0px) brightness(1.05)',
        pointerEvents: 'auto'
      };
    } else if (offset === 1) {
      return {
        transform: 'translateX(340px) translateZ(-80px) rotateY(-32deg) scale(0.85)',
        zIndex: 10,
        opacity: 0.8,
        filter: 'blur(0.5px) brightness(0.85)',
        pointerEvents: 'auto'
      };
    } else if (offset === -1) {
      return {
        transform: 'translateX(-340px) translateZ(-80px) rotateY(32deg) scale(0.85)',
        zIndex: 10,
        opacity: 0.8,
        filter: 'blur(0.5px) brightness(0.85)',
        pointerEvents: 'auto'
      };
    } else if (offset === 2 || offset < -2) {
      return {
        transform: 'translateX(580px) translateZ(-220px) rotateY(-48deg) scale(0.68)',
        zIndex: 5,
        opacity: 0.45,
        filter: 'blur(2px) brightness(0.7)',
        pointerEvents: 'auto'
      };
    } else if (offset === -2 || offset > 2) {
      return {
        transform: 'translateX(-580px) translateZ(-220px) rotateY(48deg) scale(0.68)',
        zIndex: 5,
        opacity: 0.45,
        filter: 'blur(2px) brightness(0.7)',
        pointerEvents: 'auto'
      };
    }

    return {
      transform: `translateX(${offset * 300}px) translateZ(-300px) rotateY(${offset > 0 ? -50 : 50}deg) scale(0.5)`,
      zIndex: 1,
      opacity: 0
    };
  };

  const activeDest = DESTINATIONS[activeIndex];

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
        {DESTINATIONS.map((dest, idx) => {
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
                <img src={dest.image} alt={dest.title} className="card-bg-img" />
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

              {/* Card Bottom Liquid Glass Panel */}
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
        {DESTINATIONS.map((dest, idx) => (
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
