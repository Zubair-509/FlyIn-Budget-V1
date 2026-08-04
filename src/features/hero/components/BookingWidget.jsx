import React, { useState } from 'react';
import GlassSurface from '../../../components/ui/GlassSurface/GlassSurface.jsx';

export default function BookingWidget() {
  const [tripType, setTripType] = useState('oneway');
  const [fromCode, setFromCode] = useState('DXB');
  const [fromCity, setFromCity] = useState('Dubai , UAE');
  const [toCode, setToCode] = useState('SEO');
  const [toCity, setToCity] = useState('Seoul , Korea');

  const handleSwap = () => {
    setFromCode(toCode);
    setFromCity(toCity);
    setToCode(fromCode);
    setToCity(fromCity);
  };

  return (
    <div className="booking-widget-container">
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={32}
        backgroundOpacity={0.12}
        saturation={1.4}
        distortionScale={-35}
        blur={11}
        className="booking-card-glass"
      >
        <div className="booking-header">
          <h2 className="booking-title">Where to go?</h2>
          <p className="booking-subtitle">
            Explore and travel to any destination you want! Enjoy competitive pricing and choose from over 600 airlines.
          </p>
        </div>

        {/* Trip Type Tabs */}
        <div className="trip-type-selector">
          <button
            type="button"
            className={`trip-tab ${tripType === 'oneway' ? 'active' : ''}`}
            onClick={() => setTripType('oneway')}
          >
            <span className={tripType === 'oneway' ? 'radio-dot' : 'radio-circle'}></span> One way
          </button>
          <button
            type="button"
            className={`trip-tab ${tripType === 'roundway' ? 'active' : ''}`}
            onClick={() => setTripType('roundway')}
          >
            <span className={tripType === 'roundway' ? 'radio-dot' : 'radio-circle'}></span> Round way
          </button>
          <button
            type="button"
            className={`trip-tab ${tripType === 'multicity' ? 'active' : ''}`}
            onClick={() => setTripType('multicity')}
          >
            <span className={tripType === 'multicity' ? 'radio-dot' : 'radio-circle'}></span> Multicity
          </button>
        </div>

        {/* Flight Booking Form */}
        <form className="flight-form" onSubmit={(e) => e.preventDefault()}>
          
          {/* Location Group */}
          <div className="location-inputs-group">
            
            {/* From Input */}
            <div className="input-card">
              <div className="input-icon-box">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M2.5 19h19v2h-19v-2zm16.84-3.15c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-3.12-8.5-1.92.51 2.05 6.78-4.52-1.21-1.57-2.1-1.42.38 1.4 3.99-4.23-1.13-.77.77 4.29 4.39 14.54 3.84z"/>
                </svg>
              </div>
              <div className="input-details">
                <span className="input-label">From</span>
                <div className="input-value-row">
                  <span className="airport-code">{fromCode}</span>
                  <span className="city-name">{fromCity}</span>
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <button type="button" className="swap-btn" onClick={handleSwap} title="Swap locations">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none">
                <path d="M7 16V4M7 4L3 8M7 4L11 8M17 8v12M17 20l4-4M17 20l-4-4"/>
              </svg>
            </button>

            {/* To Input */}
            <div className="input-card">
              <div className="input-icon-box">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M2.5 19h19v2h-19v-2zm16.84-12.84c.8-.21 1.62.26 1.84 1.06.21.8-.26 1.62-1.06 1.84l-5.31 1.42-3.12 8.5-1.92-.51 2.05-6.78-4.52 1.21-1.57 2.1-1.42-.38 1.4-3.99-4.23 1.13-.77-.77 4.29-4.39 14.54-3.84z"/>
                </svg>
              </div>
              <div className="input-details">
                <span className="input-label">To</span>
                <div className="input-value-row">
                  <span className="airport-code">{toCode}</span>
                  <span className="city-name">{toCity}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Departure Date */}
          <div className="input-card">
            <div className="input-details">
              <span className="input-label">Departure</span>
              <span className="date-value">Mon , 06 Oct 2025</span>
            </div>
          </div>

          {/* Passengers & Class Dual Card */}
          <div className="input-card dual-input-card">
            <div className="input-sub-col">
              <span className="input-label">Passengers</span>
              <span className="select-value">2 Adults</span>
            </div>
            <div className="divider-line"></div>
            <div className="input-sub-col">
              <span className="input-label">Class</span>
              <span className="select-value">Economy</span>
            </div>
          </div>

          {/* CTA Search Button */}
          <button type="submit" className="btn-search-flights">
            Search flights
          </button>

        </form>
      </GlassSurface>
    </div>
  );
}
