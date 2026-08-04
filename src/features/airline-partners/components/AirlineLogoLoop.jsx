import React, { useMemo } from 'react';
import LogoLoop from '../../../components/ui/LogoLoop/LogoLoop.jsx';
import { airlines } from '../data/airlines';

export default function AirlineLogoLoop() {
  const airlineData = useMemo(() => airlines, []);

  return (
    <div className="airline-logo-loop-container">
      <LogoLoop
        logos={airlineData}
        speed={80}
        direction="left"
        logoHeight={64}
        gap={84}
        hoverSpeed={0}
        fadeOut={true}
        ariaLabel="FlyInBudget airline partners"
      />
    </div>
  );
}
