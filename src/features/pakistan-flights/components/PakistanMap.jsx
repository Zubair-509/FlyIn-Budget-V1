import React, { memo } from 'react';
import pakistanMapImg from '../../../assets/images/pakistan/Pakistan_Map.png';

const PakistanMap = memo(function PakistanMap({ flights = [], activeCityId, onSelectCity }) {
  // Preserved interactive node percentage coordinates matching Pakistan_Map.png (600x640 ratio)
  const cityNodes = [
    { id: 'peshawar', name: 'Peshawar', left: '66.88%', top: '19.418%' },
    { id: 'lahore', name: 'Lahore', left: '74.78%', top: '36.484%' },
    { id: 'multan', name: 'Multan', left: '54.3%', top: '47.658%' },
    { id: 'karachi', name: 'Karachi', left: '30.011%', top: '72.7%' }
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
