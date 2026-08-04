import React, { useState, useCallback } from 'react';
import Navbar from '../../components/layout/Navbar';
import HeroSection from '../../features/hero';
import LowestFares from '../../features/lowest-fares';
import PakistanFlights from '../../features/pakistan-flights';
import IndiaFlightsSection from '../../features/india-flights';

export default function HomePage() {
  // Synchronously check if user has already seen the intro video
  const [isUIRevealed, setIsUIRevealed] = useState(() => {
    try {
      return (
        localStorage.getItem('hasSeenIntro') === 'true' ||
        sessionStorage.getItem('hasSeenIntro') === 'true'
      );
    } catch {
      return false;
    }
  });

  const markIntroSeen = useCallback(() => {
    setIsUIRevealed(true);
    try {
      localStorage.setItem('hasSeenIntro', 'true');
      sessionStorage.setItem('hasSeenIntro', 'true');
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, []);

  const handleVideoEnded = useCallback(() => {
    markIntroSeen();
  }, [markIntroSeen]);

  return (
    <div className={`app-container ${isUIRevealed ? 'intro-seen' : ''}`}>
      {/* Top Shared Navbar */}
      <Navbar isVisible={isUIRevealed} />

      {/* Hero Feature */}
      <HeroSection
        isVideoEnded={isUIRevealed}
        onVideoEnded={handleVideoEnded}
        onInstantView={markIntroSeen}
      />

      {/* Lowest Fares, Pakistan Flights & India Flights Features */}
      <div className={`lowest-fare-wrapper hero-transition-element ${isUIRevealed ? 'is-visible' : ''}`}>
        <LowestFares />
        <PakistanFlights />
        <IndiaFlightsSection />
      </div>
    </div>
  );
}
