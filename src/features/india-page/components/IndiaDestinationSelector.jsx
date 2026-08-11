import React from 'react';

export default function IndiaDestinationSelector({
  destinations,
  activeIndex,
  onSelectDestination,
  nodesRef
}) {
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

  return (
    <div className="india-discovery-right-zone">
      {/* DESKTOP / TABLET CURVED ORBIT SELECTOR (Hidden on Mobile <=768px via CSS) */}
      <div
        className="india-orbit-selector-container"
        role="tablist"
        aria-label="India destinations orbit selector"
      >
        {destinations.map((dest, idx) => {
          const isActive = idx === activeIndex;

          return (
            <button
              key={dest.id}
              ref={(el) => {
                if (nodesRef && nodesRef.current) {
                  nodesRef.current[idx] = el;
                }
              }}
              type="button"
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              aria-controls={`india-dest-panel-${dest.id}`}
              id={`india-dest-tab-${dest.id}`}
              aria-label={`Explore ${dest.city}`}
              className={`india-orbit-node-btn ${isActive ? 'is-active' : ''}`}
              onClick={() => onSelectDestination(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            >
              {/* UPRIGHT CITY LABEL (SITS ON LEFT OF THUMBNAIL, NO ROTATION) */}
              <div className="india-orbit-node-label" aria-hidden="true">
                <span className="india-orbit-node-seq">{dest.sequence}</span>
                <span className="india-orbit-node-city">{dest.city}</span>
              </div>

              {/* CIRCULAR THUMBNAIL FRAME */}
              <div className="india-orbit-node-thumb-frame">
                <img
                  src={dest.backgroundImage}
                  alt={dest.imageAlt || `Thumbnail for ${dest.city}`}
                  className="india-orbit-node-thumb-img"
                  style={{ objectPosition: dest.thumbnailPosition || 'center center' }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* MOBILE HORIZONTAL DESTINATION RAIL (Hidden on Desktop >768px via CSS) */}
      <div className="india-mobile-dest-rail" role="tablist" aria-label="India destinations mobile rail">
        {destinations.map((dest, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={`mobile-${dest.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              aria-label={`Explore ${dest.city}`}
              className={`india-mobile-rail-node ${isActive ? 'is-active' : ''}`}
              onClick={() => onSelectDestination(idx)}
            >
              <div className="india-mobile-rail-thumb">
                <img
                  src={dest.backgroundImage}
                  alt={dest.imageAlt || dest.city}
                  className="india-mobile-rail-thumb-img"
                  style={{ objectPosition: dest.thumbnailPosition || 'center center' }}
                />
              </div>
              <span className="india-mobile-rail-label">{dest.city}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
