import React, { useState } from 'react';

export default function PakistanFAQAccordion({ items = [] }) {
  const [openId, setOpenId] = useState(items[0]?.id || null);

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="faq-accordion-wrapper">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const headerId = `faq-header-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div key={item.id} className={`faq-row ${isOpen ? 'is-open' : ''}`}>
            <h3>
              <button
                id={headerId}
                type="button"
                className="faq-row-btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => handleToggle(item.id)}
              >
                <span className="faq-question-text">{item.question}</span>

                <div className="faq-toggle-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="faq-row-panel"
            >
              <div className="faq-panel-inner">
                <p className="faq-answer-text">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
