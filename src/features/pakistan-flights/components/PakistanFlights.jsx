import React, { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PakistanMap from './PakistanMap';
import ActiveCityCard from './ActiveCityCard';
import CityCard from './CityCard';
import { pakistanFlights } from '../data/pakistanFlights';
import pkBg from '../../../assets/Desktop Assets/BG/Discover Pakistan.png';
import '../styles/pakistan-flights.css';

export default function PakistanFlights() {
  const [activeCityId, setActiveCityId] = useState('lahore');
  const navigate = useNavigate();

  const handleSelectCity = useCallback((id) => {
    setActiveCityId(id);
  }, []);

  const activeFlight = useMemo(() => {
    return pakistanFlights.find((f) => f.id === activeCityId) || pakistanFlights[0];
  }, [activeCityId]);

  const subFlights = useMemo(() => {
    return pakistanFlights.filter((f) => f.id !== activeCityId).slice(0, 3);
  }, [activeCityId]);

  return (
    <section
      className="pakistan-flights-section"
      style={{ '--pk-bg-img': `url("${pkBg}")` }}
      aria-labelledby="pakistan-flights-title"
    >
      <div className="pakistan-section-bg-overlay" />

      <div className="pakistan-flights-container">
        
        {/* Top Header Block */}
        <header className="pakistan-header-row">
          <div className="pakistan-title-block">
            <div className="pakistan-eyebrow">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#EEB01D" strokeWidth="2.2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>EXPLORE PAKISTAN</span>
            </div>
            <h2 id="pakistan-flights-title" className="pakistan-main-heading">
              Discover Pakistan for less.
            </h2>
            <p className="pakistan-subtext">
              Find affordable flights to Pakistan’s most iconic cities,<br />
              from vibrant coastlines to historic cultural centres.
            </p>
          </div>

          <button
            className="btn-view-pakistan-cta"
            type="button"
            onClick={() => navigate('/flight-to-pakistan')}
          >
            <span>View all Pakistan flights</span>
            <svg className="cta-arrow-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </header>

        {/* Mobile City Selector Chips */}
        <div className="mobile-city-chips-bar" aria-label="Select Pakistan destination">
          {pakistanFlights.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`mobile-city-chip ${item.id === activeCityId ? 'is-active' : ''}`}
              onClick={() => handleSelectCity(item.id)}
              aria-pressed={item.id === activeCityId}
              aria-label={`View flights for ${item.city}`}
            >
              {item.city}
            </button>
          ))}
        </div>

        {/* Main 2-Column Desktop Grid */}
        <div className="pakistan-main-grid">
          
          {/* Left Column: Interactive Map */}
          <PakistanMap
            flights={pakistanFlights}
            activeCityId={activeCityId}
            onSelectCity={handleSelectCity}
          />

          {/* Right Column: Active Card + 3 Small City Cards */}
          <div className="pakistan-right-col">
            
            {/* Top Active Featured City Card */}
            <ActiveCityCard activeFlight={activeFlight} />

            {/* Bottom 3 City Cards Grid */}
            <div className="small-city-cards-grid">
              {subFlights.map((item) => (
                <CityCard
                  key={item.id}
                  flight={item}
                  isActive={item.id === activeCityId}
                  onSelect={handleSelectCity}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
