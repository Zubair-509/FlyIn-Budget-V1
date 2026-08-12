import React from 'react';

const SOCIAL_CHANNELS = [
  {
    name: 'WhatsApp',
    handle: '+44 7383 290467',
    url: 'https://wa.me/447383290467',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    handle: '@Flyinbudgetltd',
    url: 'https://www.facebook.com/Flyinbudgetltd?rdid=z51OzEzus57PbPDU&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F1CtUnZyvqq%252F&checkpoint_src=any#',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    handle: '@flyin_budget',
    url: 'https://www.instagram.com/flyin_budget?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  },
  {
    name: 'TikTok',
    handle: '@flyinbudget',
    url: 'https://www.tiktok.com/@flyinbudget?_t=ZS-8zo1s2I4NrL&_r=1',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.29-2.67.75-5.43 2.76-7.14 1.43-1.24 3.32-1.92 5.21-1.9.15.01.29.02.44.04V12.4c-.93-.16-1.92.05-2.73.54-1.07.65-1.74 1.84-1.74 3.09.01 1.41.87 2.67 2.18 3.15.93.36 1.99.3 2.9-.14 1.09-.5 1.82-1.57 1.88-2.77.03-3.66.02-7.33.02-10.99z" />
      </svg>
    )
  }
];

export default function ContactSocialSection() {
  return (
    <section className="contact-social-section" aria-label="Social media channels">
      <div className="contact-social-container">
        <div className="contact-social-header">
          <span className="contact-social-eyebrow">STAY CONNECTED</span>
          <h2 className="contact-social-title">Connect with FlyInBudget</h2>
          <p className="contact-social-subtitle">
            Follow FlyInBudget for travel updates, offers and destination inspiration.
          </p>
        </div>

        <div className="contact-social-grid">
          {SOCIAL_CHANNELS.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-tile"
              aria-label={`Open FlyInBudget on ${item.name}`}
            >
              <div className="contact-social-tile-icon" aria-hidden="true">
                {item.icon}
              </div>
              <div className="contact-social-tile-info">
                <span className="social-tile-name">{item.name}</span>
                <span className="social-tile-handle">{item.handle}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
