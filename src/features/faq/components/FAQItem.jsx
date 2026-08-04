import React, { memo } from 'react';

export const FAQItem = memo(function FAQItem({ item, isOpen, onToggle }) {
  const questionId = `faq-question-${item.id}`;
  const answerId = `faq-answer-${item.id}`;

  return (
    <div className={`faq-item-card ${isOpen ? 'is-expanded' : ''}`}>
      <button
        type="button"
        id={questionId}
        className="faq-question-btn"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span className="faq-badge badge-q" aria-hidden="true">Q</span>
        <span className="faq-question-text">{item.question}</span>
        <span className={`faq-chevron-icon ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={`faq-answer-wrapper ${isOpen ? 'is-open' : ''}`}
      >
        <div className="faq-answer-inner">
          <div className="faq-answer-content">
            <span className="faq-badge badge-a" aria-hidden="true">A</span>
            <p className="faq-answer-text">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FAQItem;
