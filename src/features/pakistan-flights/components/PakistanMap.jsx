import React, { memo } from 'react';
import pakistanMapImg from '../../../assets/images/pakistan/Pakistan_Map.png';

const PakistanMap = memo(function PakistanMap({ flights = [], activeCityId, onSelectCity }) {
  // Interactive node percentage coordinates matching Pakistan_Map.png
  const cityNodes = [
    { id: 'peshawar', name: 'Peshawar', left: '66%', top: '19.4%' },
    { id: 'lahore', name: 'Lahore', left: '73.7%', top: '36.5%' },
    { id: 'multan', name: 'Multan', left: '54.1%', top: '47.7%' },
    { id: 'karachi', name: 'Karachi', left: '30.9%', top: '72.6%' }
  ];

  return (
    <div className="pakistan-map-panel" role="region" aria-label="Interactive Pakistan Route Map">
      <div className="map-bg-texture" />

      {/* 3D Satellite Terrain Graphic Map */}
      <div className="pakistan-map-img-wrapper">
        <div className="pakistan-map-aspect-box">
          <img
            src={pakistanMapImg}
            alt="3D Interactive Map of Pakistan showing flight routes"
            className="pakistan-3d-map-img"
            loading="eager"
            width="600"
            height="640"
          />

          {/* Interactive Clickable Node Hotspots & Active Pulsing Indicators */}
          <div className="map-interactive-layer">
            {cityNodes.map((city) => {
              const isActive = activeCityId === city.id;
              const flightInfo = flights.find((f) => f.id === city.id);

              return (
                <button
                  key={city.id}
                  type="button"
                  className={`interactive-map-node ${isActive ? 'is-active' : ''}`}
                  style={{ left: city.left, top: city.top }}
                  onClick={() => onSelectCity(city.id)}
                  aria-pressed={isActive}
                  aria-label={`Select ${city.name} route, starting from £${flightInfo ? flightInfo.price : ''}`}
                >
                  <span className="node-pulse-aura" />
                  <span className="node-core-dot" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

export default PakistanMap;
