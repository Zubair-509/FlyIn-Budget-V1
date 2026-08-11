import React, { useState, useRef } from 'react';
import IndiaDestinationCardContent from './IndiaDestinationCardContent';
import IndiaDestinationSelector from './IndiaDestinationSelector';
import { indiaDiscoveryData } from '../data/indiaDiscoveryData';
import { useIndiaDiscoveryTransition } from '../animations/useIndiaDiscoveryTransition';
import '../styles/india-discovery.css';

export default function IndiaDiscovery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pendingIndex, setPendingIndex] = useState(null);

  const currentBgRef = useRef(null);
  const incomingBgRef = useRef(null);
  const contentRef = useRef(null);
  const nodesRef = useRef([]);

  const { animateTransition, isTransitioningRef } = useIndiaDiscoveryTransition(
    indiaDiscoveryData,
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
    ? indiaDiscoveryData[pendingIndex]
    : (indiaDiscoveryData[activeIndex] || indiaDiscoveryData[0]);

  const displayIndex = pendingIndex !== null ? pendingIndex : activeIndex;

  return (
    <section className="india-discovery-section" aria-label="Explore India destination discovery">
      {/* Dual Background Layer Crossfade System */}
      <div className="india-discovery-bg-wrapper">
        <img
          ref={currentBgRef}
          src={indiaDiscoveryData[activeIndex]?.backgroundImage}
          alt=""
          className="india-discovery-bg-img bg-current"
          style={{ objectPosition: indiaDiscoveryData[activeIndex]?.backgroundPosition }}
          aria-hidden="true"
        />
        <img
          ref={incomingBgRef}
          src=""
          alt=""
          className="india-discovery-bg-img bg-incoming"
          aria-hidden="true"
        />
        <div className="india-discovery-readability-overlay" />
      </div>

      {/* Main Grid Container */}
      <div className="india-discovery-container">
        {/* Left Column: Editorial Copy */}
        <IndiaDestinationCardContent
          activeDest={activeDest}
          contentRef={contentRef}
        />

        {/* Right Column: Curved Orbit Selector */}
        <IndiaDestinationSelector
          destinations={indiaDiscoveryData}
          activeIndex={displayIndex}
          onSelectDestination={handleSelectDestination}
          nodesRef={nodesRef}
        />
      </div>
    </section>
  );
}
