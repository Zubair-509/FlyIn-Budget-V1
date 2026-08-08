import React, { useState, useMemo } from 'react';

export default function PakistanInquiryForm() {
  const [tripType, setTripType] = useState('round-trip'); // 'round-trip' | 'one-way'
  const [fromOrigin, setFromOrigin] = useState('London (LHR)');
  const [destination, setDestination] = useState('Islamabad (ISB)');
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
    const subject = encodeURIComponent(`Flight to Pakistan Inquiry — ${destination}`);
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
    <div className="pakistan-inquiry-form-container">
      {/* Top Segmented Controls Row */}
      <div className="form-header-row">
        <div className="trip-type-segmented-control" role="radiogroup" aria-label="Flight trip type">
          <button
            type="button"
            role="radio"
            aria-checked={tripType === 'round-trip'}
            className={`btn-segment-option ${tripType === 'round-trip' ? 'is-active' : ''}`}
            onClick={() => handleTripTypeChange('round-trip')}
          >
            Round Trip
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={tripType === 'one-way'}
            className={`btn-segment-option ${tripType === 'one-way' ? 'is-active' : ''}`}
            onClick={() => handleTripTypeChange('one-way')}
          >
            One Way
          </button>
        </div>

        <p className="form-sub-note">
          Share your route, dates and passenger details to explore suitable flight options.
        </p>
      </div>

      {/* Main Fields Form */}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-fields-grid">
          {/* From Origin */}
          <div className="form-field-group">
            <label htmlFor="paki-from" className="field-label">From</label>
            <input
              id="paki-from"
              type="text"
              className="field-input-box"
              placeholder="Departure city or airport"
              value={fromOrigin}
              onChange={(e) => setFromOrigin(e.target.value)}
              required
            />
          </div>

          {/* Destination */}
          <div className="form-field-group">
            <label htmlFor="paki-destination" className="field-label">Destination</label>
            <select
              id="paki-destination"
              className="field-input-box"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="Islamabad (ISB)">Islamabad (ISB)</option>
              <option value="Lahore (LHE)">Lahore (LHE)</option>
              <option value="Karachi (KHI)">Karachi (KHI)</option>
              <option value="Peshawar (PEW)">Peshawar (PEW)</option>
              <option value="Multan (MUX)">Multan (MUX)</option>
              <option value="Sialkot (SKT)">Sialkot (SKT)</option>
              <option value="Faisalabad (LYP)">Faisalabad (LYP)</option>
              <option value="Any Pakistan Airport">Any Pakistan Airport</option>
            </select>
          </div>

          {/* Departure Date */}
          <div className="form-field-group">
            <label htmlFor="paki-dep-date" className="field-label">Departure</label>
            <input
              id="paki-dep-date"
              type="date"
              className="field-input-box"
              min={todayDate}
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>

          {/* Return Date */}
          <div className="form-field-group">
            <label htmlFor="paki-ret-date" className="field-label">Return</label>
            <input
              id="paki-ret-date"
              type="date"
              className="field-input-box"
              min={departureDate || todayDate}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              disabled={tripType === 'one-way'}
            />
          </div>

          {/* Travellers */}
          <div className="form-field-group">
            <label htmlFor="paki-travellers" className="field-label">Travellers</label>
            <select
              id="paki-travellers"
              className="field-input-box"
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
          <div className="form-field-group">
            <label htmlFor="paki-contact" className="field-label">Phone or Email</label>
            <input
              id="paki-contact"
              type="text"
              className="field-input-box"
              placeholder="e.g. 07123456789 or email"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="btn-submit-inquiry"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? 'Opening...' : 'INQUIRE NOW'}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {errorMessage && (
          <div className="field-error-msg" role="alert">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
