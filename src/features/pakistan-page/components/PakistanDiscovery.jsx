import React, { useState, useRef } from 'react';
import DestinationCardContent from './DestinationCardContent';
import DestinationSelector from './DestinationSelector';
import { pakistanDestinations } from '../data/pakistanDestinations';
import { usePakistanDiscoveryTransition } from '../animations/usePakistanDiscoveryTransition';
import '../styles/pakistan-discovery.css';

export default function PakistanDiscovery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pendingIndex, setPendingIndex] = useState(null);

  const currentBgRef = useRef(null);
  const incomingBgRef = useRef(null);
  const contentRef = useRef(null);
  const nodesRef = useRef([]);

  const { animateTransition, isTransitioningRef } = usePakistanDiscoveryTransition(
    pakistanDestinations,
    activeIndex,
    nodesRef
  );

  const handleSelectDestination = (newIndex) => {
    if (newIndex === activeIndex || isTransitioningRef.current) return;

    setPendingIndex(newIndex);

    const success = animateTransition({
      newIndex,
      currentBgRef,
      incomingBgRef,
      contentRef,
      onComplete: (idx) => {
        setActiveIndex(idx);
        setPendingIndex(null);
      }
    });

    if (!success) {
      setPendingIndex(null);
    }
  };

  const activeDest = pendingIndex !== null
    ? pakistanDestinations[pendingIndex]
    : (pakistanDestinations[activeIndex] || pakistanDestinations[0]);

  const displayIndex = pendingIndex !== null ? pendingIndex : activeIndex;

  return (
    <section className="pakistan-discovery-section" aria-label="Introducing Pakistan destination discovery">
      {/* Dual Background Layer Crossfade System */}
      <div className="discovery-bg-wrapper">
        <img
          ref={currentBgRef}
          src={pakistanDestinations[activeIndex]?.backgroundImage}
          alt=""
          className="discovery-bg-img bg-current"
          style={{ objectPosition: pakistanDestinations[activeIndex]?.backgroundPosition }}
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
          activeIndex={displayIndex}
          onSelectDestination={handleSelectDestination}
          nodesRef={nodesRef}
        />
      </div>
    </section>
  );
}
