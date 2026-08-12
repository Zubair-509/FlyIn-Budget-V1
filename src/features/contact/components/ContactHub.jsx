import React from 'react';
import ContactForm from './ContactForm';
import ContactInfoPanel from './ContactInfoPanel';

export default function ContactHub() {
  return (
    <section className="contact-hub-section" aria-label="Main contact options and form">
      <div className="contact-hub-container">
        <div className="contact-hub-grid">
          <ContactForm />
          <ContactInfoPanel />
        </div>
      </div>
    </section>
  );
}
