import React, { memo } from 'react';

const StepCard = memo(function StepCard({ stepNumber, title, description, icon, isLast }) {
  return (
    <div className="how-step-card-wrapper">
      <div className="how-step-card" role="article" aria-label={`Step ${stepNumber}: ${title}`}>
        {/* Step Badge (1), (2), (3) */}
        <div className="step-number-badge" aria-label={`Step ${stepNumber}`}>
          <span>{stepNumber}</span>
        </div>

        {/* Step Line Icon */}
        <div className="step-icon-box" aria-hidden="true">
          {icon}
        </div>

        {/* Step Text Content */}
        <div className="step-card-body">
          <div className="step-gold-line" aria-hidden="true" />
          <h3 className="step-card-title">{title}</h3>
          <p className="step-card-desc">{description}</p>
        </div>
      </div>

      {/* Desktop Dotted Route Line Connector between cards */}
      {!isLast && (
        <div className="step-route-connector" aria-hidden="true">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      )}
    </div>
  );
});

export default StepCard;
