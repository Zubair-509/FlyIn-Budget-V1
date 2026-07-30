import React, { useState, useCallback } from 'react';
import HeroVideo from './components/HeroVideo.jsx';
import Navbar from './components/Navbar.jsx';
import BookingWidget from './components/BookingWidget.jsx';
import HeroHeadline from './components/HeroHeadline.jsx';
import LowestFare from './components/LowestFare.jsx';

export default function App() {
  const [isUIRevealed, setIsUIRevealed] = useState(false);

  const handleVideoEnded = useCallback(() => {
    setIsUIRevealed(true);
  }, []);

  return (
    <div className="app-container">
      {/* Background Video / Image Layer */}
      <HeroVideo onVideoEnded={handleVideoEnded} isVideoEnded={isUIRevealed} />

      {/* Top Navbar */}
      <Navbar isVisible={isUIRevealed} />

      {/* Hero Content Section */}
      <main className={`hero-content hero-transition-element ${isUIRevealed ? 'is-visible' : ''}`}>
        <HeroHeadline />
        <BookingWidget />
      </main>

      {/* Lowest Fare Section */}
      <div className={`lowest-fare-wrapper hero-transition-element ${isUIRevealed ? 'is-visible' : ''}`}>
        <LowestFare />
      </div>

      {/* Optional Manual View Button */}
      {!isUIRevealed && (
        <button
          className="skip-intro-btn"
          onClick={() => setIsUIRevealed(true)}
          title="Click to reveal UI immediately"
        >
          Instant View
        </button>
      )}
    </div>
  );
}
