import React, { useState } from 'react';

export default function IndiaFAQAccordion({ items = [] }) {
  // FAQ 01 open by default
  const [openId, setOpenId] = useState(items[0]?.id || null);

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="india-faq-accordion-wrapper">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const headerId = `india-faq-header-${item.id}`;
        const panelId = `india-faq-panel-${item.id}`;

        return (
          <div key={item.id} className={`india-faq-row ${isOpen ? 'is-open' : ''}`}>
            <h3>
              <button
                id={headerId}
                type="button"
                className="india-faq-row-btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => handleToggle(item.id)}
              >
                <div className="india-faq-row-header-left">
                  <span className="india-faq-seq">{item.number}</span>
                  <span className="india-faq-question-text">{item.question}</span>
                </div>

                <div className="india-faq-toggle-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19" className="icon-v-line" />
                    <line x1="5" y1="12" x2="19" y2="12" className="icon-h-line" />
                  </svg>
                </div>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="india-faq-row-panel"
            >
              <div className="india-faq-panel-inner">
                <p className="india-faq-answer-text">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
