import React, { useState, useMemo } from 'react';
import { indiaDestinations } from '../data/indiaDestinations';

export default function IndiaInquiryForm() {
  const [tripType, setTripType] = useState('round-trip'); // 'round-trip' | 'one-way'
  const [fromOrigin, setFromOrigin] = useState('London (LHR)');
  const [destination, setDestination] = useState('Delhi (DEL)');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travellers, setTravellers] = useState('1 Adult');
  const [contactInfo, setContactInfo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Today ISO date string for min date attributes
  const todayDate = useMemo(() => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  }, []);

  const handleTripTypeChange = (type) => {
    setTripType(type);
    if (type === 'one-way') {
      setReturnDate('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fromOrigin.trim()) {
      setErrorMessage('Please enter a departure origin.');
      return;
    }

    if (!contactInfo.trim()) {
      setErrorMessage('Please enter your phone number or email address.');
      return;
    }

    setIsSubmitting(true);

    // Build prefilled mailto string
    const subject = encodeURIComponent(`Flight to India Inquiry — ${destination}`);
    const bodyLines = [
      `Trip Type: ${tripType === 'round-trip' ? 'Round Trip' : 'One Way'}`,
      `From: ${fromOrigin}`,
      `Destination: ${destination}`,
      `Departure Date: ${departureDate || 'Flexible'}`,
      tripType === 'round-trip' ? `Return Date: ${returnDate || 'Flexible'}` : null,
      `Travellers: ${travellers}`,
      `Customer Contact: ${contactInfo}`
    ]
      .filter(Boolean)
      .join('\n');

    const mailtoUrl = `mailto:info@flyinbudget.co.uk?subject=${subject}&body=${encodeURIComponent(bodyLines)}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <div id="india-flight-inquiry" className="india-inquiry-form-container">
      {/* Top Segmented Controls Row */}
      <div className="india-form-header-row">
        <div className="india-trip-type-segmented-control" role="radiogroup" aria-label="Flight trip type">
          <button
            type="button"
            role="radio"
            aria-checked={tripType === 'round-trip'}
            className={`india-btn-segment-option ${tripType === 'round-trip' ? 'is-active' : ''}`}
            onClick={() => handleTripTypeChange('round-trip')}
          >
            Round Trip
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={tripType === 'one-way'}
            className={`india-btn-segment-option ${tripType === 'one-way' ? 'is-active' : ''}`}
            onClick={() => handleTripTypeChange('one-way')}
          >
            One Way
          </button>
        </div>

        <p className="india-form-sub-note">
          Share your route, dates and passenger details to explore suitable flight options.
        </p>
      </div>

      {/* Main Fields Form */}
      <form onSubmit={handleSubmit} noValidate>
        <div className="india-form-fields-grid">
          {/* From Origin */}
          <div className="india-form-field-group">
            <label htmlFor="india-from" className="india-field-label">From</label>
            <input
              id="india-from"
              type="text"
              className="india-field-input-box"
              placeholder="Departure city or airport"
              value={fromOrigin}
              onChange={(e) => setFromOrigin(e.target.value)}
              required
            />
          </div>

          {/* Destination */}
          <div className="india-form-field-group">
            <label htmlFor="india-destination" className="india-field-label">Destination</label>
            <select
              id="india-destination"
              className="india-field-input-box"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              {indiaDestinations.map((item) => (
                <option key={item.id} value={`${item.city} (${item.code})`}>
                  {item.city} ({item.code})
                </option>
              ))}
            </select>
          </div>

          {/* Departure Date */}
          <div className="india-form-field-group">
            <label htmlFor="india-dep-date" className="india-field-label">Departure</label>
            <input
              id="india-dep-date"
              type="date"
              className="india-field-input-box"
              min={todayDate}
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>

          {/* Return Date */}
          <div className="india-form-field-group">
            <label htmlFor="india-ret-date" className="india-field-label">Return</label>
            <input
              id="india-ret-date"
              type="date"
              className="india-field-input-box"
              min={departureDate || todayDate}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              disabled={tripType === 'one-way'}
            />
          </div>

          {/* Travellers */}
          <div className="india-form-field-group">
            <label htmlFor="india-travellers" className="india-field-label">Travellers</label>
            <select
              id="india-travellers"
              className="india-field-input-box"
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
            >
              <option value="1 Adult">1 Adult</option>
              <option value="2 Adults">2 Adults</option>
              <option value="3 Adults">3 Adults</option>
              <option value="Family (2A + 2C)">Family (2A + 2C)</option>
              <option value="Group (5+ Passengers)">Group (5+ Passengers)</option>
            </select>
          </div>

          {/* Contact Detail */}
          <div className="india-form-field-group">
            <label htmlFor="india-contact" className="india-field-label">Phone or Email</label>
            <input
              id="india-contact"
              type="text"
              className="india-field-input-box"
              placeholder="e.g. 07123456789 or email"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="india-btn-submit-inquiry"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? 'Opening...' : 'INQUIRE NOW'}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {errorMessage && (
          <div className="india-field-error-msg" role="alert">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
