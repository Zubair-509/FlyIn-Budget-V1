import React, { useRef } from 'react';
import { APPROACH_STAGES } from '../data/aboutContent';
import { useAboutApproachTimeline } from '../animations/useAboutApproachTimeline';

export default function AboutApproach() {
  const sectionRef = useRef(null);

  // Bind 3D Pinned Scroll Storytelling Sequence
  useAboutApproachTimeline(sectionRef);

  return (
    <section ref={sectionRef} className="about-approach-section" aria-labelledby="about-approach-heading">
      <div className="about-approach-container">
        {/* Section Header */}
        <div className="about-approach-header">
          <span className="about-approach-eyebrow">HOW WE SUPPORT YOUR JOURNEY</span>
          <h2 id="about-approach-heading" className="about-approach-heading">
            Travel support built around you.
          </h2>

          {/* Interactive Progress Indicator Bar */}
          <div className="about-approach-progress-bar" aria-hidden="true">
            <div className="approach-progress-bar-fill" />
            <div className="approach-nodes-row">
              <span className="approach-node node-1">1</span>
              <span className="approach-node node-2">2</span>
              <span className="approach-node node-3">3</span>
            </div>
          </div>
        </div>

        {/* 3D Pinned Perspective Stage Deck */}
        <div className="about-approach-stage-deck">
          {APPROACH_STAGES.map((stage) => (
            <article key={stage.id} className={`approach-stage-panel panel-${stage.number}`}>
              <div className="panel-header-badge">
                <span className="panel-stage-number">{stage.number}</span>
                <span className="panel-stage-label">{stage.label}</span>
              </div>

              <h3 className="panel-title">{stage.title}</h3>
              <p className="panel-desc">{stage.description}</p>

              <ul className="panel-details-list">
                {stage.details.map((detail, idx) => (
                  <li key={idx} className="panel-detail-item">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#EEB01D" strokeWidth="2.5" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="panel-glow-accent" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
