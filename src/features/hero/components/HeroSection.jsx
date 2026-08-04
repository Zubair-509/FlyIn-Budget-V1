import React from 'react';
import HeroVideo from './HeroVideo';
import HeroHeading from './HeroHeading';
import BookingWidget from './BookingWidget';

export default function HeroSection({ isVideoEnded, onVideoEnded, onInstantView }) {
  return (
    <>
      {/* Background Video / Image Layer */}
      <HeroVideo onVideoEnded={onVideoEnded} isVideoEnded={isVideoEnded} />

      {/* Hero Content Section */}
      <main className={`hero-content hero-transition-element ${isVideoEnded ? 'is-visible' : ''}`}>
        <HeroHeading />
        <BookingWidget />
      </main>

      {/* Instant View Button */}
      {!isVideoEnded && (
        <button
          className="skip-intro-btn"
          onClick={onInstantView}
          title="Click to reveal UI immediately"
        >
          Instant View
        </button>
      )}
    </>
  );
}
