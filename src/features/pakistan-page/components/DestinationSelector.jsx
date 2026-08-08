import React from 'react';

export default function DestinationSelector({
  destinations,
  activeIndex,
  onSelectDestination,
  thumbsRef
}) {
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

  const handleKeyDown = (e, index) => {
    let nextIdx = index;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextIdx = (index + 1) % destinations.length;
      onSelectDestination(nextIdx);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIdx = (index - 1 + destinations.length) % destinations.length;
      onSelectDestination(nextIdx);
    } else if (e.key === 'Home') {
      e.preventDefault();
      onSelectDestination(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      onSelectDestination(destinations.length - 1);
    }
  };

  // Helper to calculate circular thumbnail sizes & curve positions relative to active index
  const getOrbitPositionStyle = (idx) => {
    const total = destinations.length;
    let diff = idx - activeIndex;

    // Normalize diff to -2 .. +2
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) {
      // ACTIVE CIRCLE (furthest right, dominant size)
      return {
        top: '50%',
        transform: 'translateY(-50%)',
        right: '0px',
        width: 'clamp(128px, 9vw, 148px)',
        height: 'clamp(128px, 9vw, 148px)',
        opacity: 1
      };
    } else if (diff === -1) {
      // ADJACENT UPPER
      return {
        top: '26%',
        transform: 'translateY(-50%)',
        right: '55px',
        width: 'clamp(88px, 6.3vw, 104px)',
        height: 'clamp(88px, 6.3vw, 104px)',
        opacity: 0.85
      };
    } else if (diff === 1) {
      // ADJACENT LOWER
      return {
        top: '74%',
        transform: 'translateY(-50%)',
        right: '55px',
        width: 'clamp(88px, 6.3vw, 104px)',
        height: 'clamp(88px, 6.3vw, 104px)',
        opacity: 0.85
      };
    } else if (diff === -2) {
      // OUTER TOP
      return {
        top: '6%',
        transform: 'translateY(-50%)',
        right: '120px',
        width: 'clamp(62px, 4.7vw, 78px)',
        height: 'clamp(62px, 4.7vw, 78px)',
        opacity: 0.7
      };
    } else {
      // OUTER BOTTOM
      return {
        top: '94%',
        transform: 'translateY(-50%)',
        right: '120px',
        width: 'clamp(62px, 4.7vw, 78px)',
        height: 'clamp(62px, 4.7vw, 78px)',
        opacity: 0.7
      };
    }
  };

  return (
    <div className="discovery-right-zone">
      {/* DESKTOP / TABLET CURVED ORBIT SELECTOR */}
      <div
        className="orbit-selector-container"
        role="tablist"
        aria-label="Pakistan destinations orbit selector"
      >
        {destinations.map((dest, idx) => {
          const isActive = idx === activeIndex;
          const frameStyle = getOrbitPositionStyle(idx);

          return (
            <button
              key={dest.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`dest-panel-${dest.id}`}
              id={`dest-tab-${dest.id}`}
              className={`orbit-node-btn ${isActive ? 'is-active' : ''}`}
              style={{ top: frameStyle.top, right: frameStyle.right, transform: frameStyle.transform, opacity: frameStyle.opacity }}
              onClick={() => onSelectDestination(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            >
              {/* UPRIGHT CITY LABEL (NEVER ROTATES) */}
              <div className="orbit-node-label" aria-hidden="true">
                <span className="orbit-node-seq">{dest.sequence}</span>
                <span className="orbit-node-city">{dest.city}</span>
              </div>

              {/* CIRCULAR THUMBNAIL FRAME */}
              <div
                className="orbit-node-thumb-frame"
                style={{ width: frameStyle.width, height: frameStyle.height }}
              >
                <img
                  ref={(el) => (thumbsRef.current[idx] = el)}
                  src={dest.backgroundImage}
                  alt={dest.imageAlt || `Thumbnail for ${dest.city}`}
                  className="orbit-node-thumb-img"
                  style={{ objectPosition: dest.thumbnailPosition || 'center center' }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* MOBILE HORIZONTAL DESTINATION RAIL (<= 768px) */}
      <div className="mobile-dest-rail" role="tablist" aria-label="Pakistan destinations mobile rail">
        {destinations.map((dest, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={`mobile-${dest.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`mobile-rail-node ${isActive ? 'is-active' : ''}`}
              onClick={() => onSelectDestination(idx)}
            >
              <div className="mobile-rail-thumb">
                <img
                  src={dest.backgroundImage}
                  alt={dest.imageAlt || dest.city}
                  className="mobile-rail-thumb-img"
                  style={{ objectPosition: dest.thumbnailPosition || 'center center' }}
                />
              </div>
              <span className="mobile-rail-label">{dest.city}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
