import React from 'react';
import storyImg from '../../../assets/about_story_journey.png';
import { STORY_CONTENT } from '../data/aboutContent';

export default function AboutStory() {
  return (
    <section className="about-story-section" aria-labelledby="about-story-heading">
      <div className="about-story-container">
        {/* Left Column: Art-Directed Editorial Image & Caption */}
        <div className="about-story-media-col">
          <div className="about-story-media-box">
            <img
              src={storyImg}
              alt="Traveler in a modern airport terminal overlooking airplane runways"
              className="about-story-img"
              loading="lazy"
              width="600"
              height="750"
            />
            <div className="about-story-image-overlay" />
          </div>
          <p className="about-story-caption">
            <span className="caption-dot" aria-hidden="true" />
            {STORY_CONTENT.caption}
          </p>
        </div>

        {/* Right Column: Editorial Text & Pull Quote */}
        <div className="about-story-text-content">
          <span className="about-story-eyebrow">{STORY_CONTENT.eyebrow}</span>
          <h2 id="about-story-heading" className="about-story-heading">
            {STORY_CONTENT.heading}
          </h2>

          <div className="about-story-body">
            <p>{STORY_CONTENT.paragraph1}</p>
            <p>{STORY_CONTENT.paragraph2}</p>
          </div>

          <blockquote className="about-story-quote">
            <p>“{STORY_CONTENT.pullQuote}”</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
