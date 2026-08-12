import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    enquiryType: 'Flight enquiry',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    error: '',
    success: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, error: '', success: '' });

    if (!formData.fullName.trim()) {
      setStatus({ submitting: false, error: 'Please enter your full name.', success: '' });
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus({ submitting: false, error: 'Please enter a valid email address.', success: '' });
      return;
    }

    if (!formData.phone.trim()) {
      setStatus({ submitting: false, error: 'Please enter your phone number.', success: '' });
      return;
    }

    if (!formData.message.trim()) {
      setStatus({ submitting: false, error: 'Please enter your message or inquiry details.', success: '' });
      return;
    }

    // Build prefilled mailto string matching project support setup
    const subject = encodeURIComponent(`Contact Inquiry — ${formData.enquiryType}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEnquiry Type: ${formData.enquiryType}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:info@flyinbudget.co.uk?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus({
        submitting: false,
        error: '',
        success: 'Thank you! Your email client has been opened to send your message directly to our travel team.'
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        enquiryType: 'Flight enquiry',
        message: ''
      });
    }, 400);
  };

  return (
    <div id="contact-enquiry" className="contact-glass-card contact-form-card">
      <div className="contact-form-header">
        <span className="contact-form-eyebrow">SEND US A MESSAGE</span>
        <h2 className="contact-form-title">How can we help?</h2>
        <p className="contact-form-subtitle">
          Share a few details with our team and we’ll help with your flight enquiry, booking question or general support request.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="contact-form-grid">
          {/* Full Name */}
          <div className="contact-field-group">
            <label htmlFor="c-name" className="contact-field-label">Full Name</label>
            <input
              id="c-name"
              name="fullName"
              type="text"
              className="contact-input-box"
              placeholder="e.g. John Smith"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Address */}
          <div className="contact-field-group">
            <label htmlFor="c-email" className="contact-field-label">Email Address</label>
            <input
              id="c-email"
              name="email"
              type="email"
              className="contact-input-box"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="contact-field-group">
            <label htmlFor="c-phone" className="contact-field-label">Phone Number</label>
            <input
              id="c-phone"
              name="phone"
              type="tel"
              className="contact-input-box"
              placeholder="e.g. 07123456789"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Enquiry Type */}
          <div className="contact-field-group">
            <label htmlFor="c-type" className="contact-field-label">Enquiry Type</label>
            <select
              id="c-type"
              name="enquiryType"
              className="contact-input-box"
              value={formData.enquiryType}
              onChange={handleChange}
            >
              <option value="Flight enquiry">Flight enquiry</option>
              <option value="Existing booking">Existing booking</option>
              <option value="Payment question">Payment question</option>
              <option value="General support">General support</option>
            </select>
          </div>

          {/* Message */}
          <div className="contact-field-group contact-field-full">
            <label htmlFor="c-message" className="contact-field-label">Message</label>
            <textarea
              id="c-message"
              name="message"
              className="contact-input-box"
              placeholder="Tell us about your flight dates, preferred destination or booking query..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Alert Messages */}
          {status.error && (
            <div className="contact-form-alert is-error" role="alert">
              {status.error}
            </div>
          )}

          {status.success && (
            <div className="contact-form-alert is-success" role="status">
              {status.success}
            </div>
          )}

          {/* Submit CTA */}
          <div className="contact-form-actions">
            <button
              type="submit"
              className="btn-contact-submit"
              disabled={status.submitting}
            >
              <span>{status.submitting ? 'Sending...' : 'Send message'}</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
