import React from 'react';
import { BOOKING_TERMS_SECTIONS } from '../data/bookingTermsContent';

export default function BookingTermsDocument() {
  return (
    <article className="booking-terms-document-column">
      {BOOKING_TERMS_SECTIONS.map((sec) => (
        <section key={sec.id} id={sec.id} className="booking-terms-clause">
          <header className="booking-terms-clause-header">
            <span className="booking-terms-clause-number">{sec.number}</span>
            <h2 className="booking-terms-clause-title">{sec.title}</h2>
            <div className="booking-terms-clause-divider" aria-hidden="true" />
          </header>

          <div className="booking-terms-clause-body">
            {sec.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            {sec.bullets && (
              <ul className="booking-terms-list">
                {sec.bullets.map((item, bIdx) => (
                  <li key={bIdx}>{item}</li>
                ))}
              </ul>
            )}

            {sec.emphasisCallout && (
              <div className="booking-terms-callout">
                {sec.emphasisCallout}
              </div>
            )}
          </div>
        </section>
      ))}
    </article>
  );
}
