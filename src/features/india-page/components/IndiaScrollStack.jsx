import React, { useRef, useState, useCallback } from 'react';
import IndiaScrollStackItem from './IndiaScrollStackItem';
import { useIndiaScrollStack } from '../animations/useIndiaScrollStack';

export default function IndiaScrollStack({ items = [] }) {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleActiveIndexChange = useCallback((index) => {
    setActiveCardIndex(index);
  }, []);

  useIndiaScrollStack(containerRef, cardsRef, handleActiveIndexChange);

  return (
    <div ref={containerRef} className="india-scroll-stack-wrapper">
      <div className="india-scroll-stack-cards-list">
        {items.map((card, idx) => (
          <div
            key={card.id || idx}
            ref={(el) => (cardsRef.current[idx] = el)}
          >
            <IndiaScrollStackItem
              card={card}
              index={idx}
              isCovered={idx < activeCardIndex}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
