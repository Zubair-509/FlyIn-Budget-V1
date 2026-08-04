import React, { useState, useCallback } from 'react';
import Navbar from '../../components/layout/Navbar';
import HeroSection from '../../features/hero';
import LowestFares from '../../features/lowest-fares';
import PakistanFlights from '../../features/pakistan-flights';
import IndiaFlightsSection from '../../features/india-flights';
import HowItWorksSection from '../../features/how-it-works';
import FAQSection from '../../features/faq';

export default function HomePage() {
  // Check if user has already seen the intro video during this browser session
  const [isUIRevealed, setIsUIRevealed] = useState(() => {
    try {
      // Clear legacy persistent localStorage lock if present so intro plays on new sessions
      localStorage.removeItem('hasSeenIntro');
      return sessionStorage.getItem('hasSeenIntro') === 'true';
    } catch {
      return false;
    }
  });

  const markIntroSeen = useCallback(() => {
    setIsUIRevealed(true);
    try {
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

      {/* Lowest Fares, Pakistan Flights, India Flights, How It Works & FAQ Features */}
      <div className={`lowest-fare-wrapper hero-transition-element ${isUIRevealed ? 'is-visible' : ''}`}>
        <LowestFares />
        <PakistanFlights />
        <IndiaFlightsSection />
        <HowItWorksSection />
        <FAQSection />
      </div>
    </div>
  );
}
