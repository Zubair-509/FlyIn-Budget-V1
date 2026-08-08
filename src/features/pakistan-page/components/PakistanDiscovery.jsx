import React, { useState, useRef } from 'react';
import DestinationCardContent from './DestinationCardContent';
import DestinationSelector from './DestinationSelector';
import { pakistanDestinations } from '../data/pakistanDestinations';
import { usePakistanDiscoveryTransition } from '../animations/usePakistanDiscoveryTransition';
import '../styles/pakistan-discovery.css';

export default function PakistanDiscovery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentBgRef = useRef(null);
  const incomingBgRef = useRef(null);
  const contentRef = useRef(null);
  const thumbsRef = useRef([]);

  const { animateTransition, isTransitioningRef } = usePakistanDiscoveryTransition(pakistanDestinations);

  const handleSelectDestination = (newIndex) => {
    if (newIndex === activeIndex || isTransitioningRef.current) return;

    // Determine direction ('next' vs 'prev')
    const total = pakistanDestinations.length;
    let diff = newIndex - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    const direction = diff >= 0 ? 'next' : 'prev';

    const success = animateTransition({
      newIndex,
      direction,
      currentBgRef,
      incomingBgRef,
      contentRef,
      thumbsRef,
      onComplete: (idx) => {
        setActiveIndex(idx);
      }
    });

    if (success) {
      setActiveIndex(newIndex);
    }
  };

  const activeDest = pakistanDestinations[activeIndex] || pakistanDestinations[0];

  return (
    <section className="pakistan-discovery-section" aria-label="Introducing Pakistan destination discovery">
      {/* Dual Background Layer Crossfade System */}
      <div className="discovery-bg-wrapper">
        <img
          ref={currentBgRef}
          src={activeDest.backgroundImage}
          alt=""
          className="discovery-bg-img bg-current"
          style={{ objectPosition: activeDest.backgroundPosition }}
          aria-hidden="true"
        />
        <img
          ref={incomingBgRef}
          src=""
          alt=""
          className="discovery-bg-img bg-incoming"
          aria-hidden="true"
        />
        <div className="discovery-readability-overlay" />
      </div>

      {/* Main Grid Container */}
      <div className="pakistan-discovery-container">
        {/* Left Column: Editorial Copy */}
        <DestinationCardContent
          activeDest={activeDest}
          contentRef={contentRef}
        />

        {/* Right Column: Curved Orbit Selector */}
        <DestinationSelector
          destinations={pakistanDestinations}
          activeIndex={activeIndex}
          onSelectDestination={handleSelectDestination}
          thumbsRef={thumbsRef}
        />
      </div>
    </section>
  );
}
