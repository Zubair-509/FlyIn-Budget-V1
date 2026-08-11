import React, { useState } from 'react';

export default function IndiaTravelEssentialsAccordion({ items = [] }) {
  // Row 01 open by default
  const [openId, setOpenId] = useState(items[0]?.id || null);

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="india-essentials-accordion-wrapper">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const headerId = `india-essential-header-${item.id}`;
        const panelId = `india-essential-panel-${item.id}`;

        return (
          <div key={item.id} className={`india-essentials-row ${isOpen ? 'is-open' : ''}`}>
            <h3>
              <button
                id={headerId}
                type="button"
                className="india-essentials-row-btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => handleToggle(item.id)}
              >
                <div className="india-essentials-row-header-left">
                  <span className="india-essentials-seq">{item.sequence}</span>
                  <span className="india-essentials-row-title">{item.title}</span>
                </div>

                <div className="india-essentials-toggle-icon" aria-hidden="true">
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
              className="india-essentials-row-panel"
            >
              <div className="india-essentials-panel-inner">
                <p className="india-essentials-body-text">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
