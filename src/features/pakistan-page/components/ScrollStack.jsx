import React, { useRef, useState, useCallback } from 'react';
import ScrollStackItem from './ScrollStackItem';
import { usePakistanScrollStack } from '../animations/usePakistanScrollStack';

export default function ScrollStack({ items = [] }) {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleActiveIndexChange = useCallback((index) => {
    setActiveCardIndex(index);
  }, []);

  usePakistanScrollStack(containerRef, cardsRef, handleActiveIndexChange);

  return (
    <div ref={containerRef} className="scroll-stack-wrapper">
      <div className="scroll-stack-cards-list">
        {items.map((card, idx) => (
          <div
            key={card.id || idx}
            ref={(el) => (cardsRef.current[idx] = el)}
          >
            <ScrollStackItem
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
