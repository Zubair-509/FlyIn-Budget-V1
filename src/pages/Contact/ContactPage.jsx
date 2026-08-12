import React, { useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../features/footer';
import {
  ContactHero,
  ContactHub,
  ContactMapSection,
  ContactSocialSection,
  ContactSupportCTA
} from '../../features/contact';

export default function ContactPage() {
  // Route SEO Metadata
  useEffect(() => {
    document.title = 'Contact FlyInBudget | Flight Inquiries & Travel Support';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Get in touch with FlyInBudget for flight inquiries, booking questions, and personal travel support. Reach us by phone, email, WhatsApp or visit our UK office.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://flyin-budget.vercel.app/get-in-touch';

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page-wrapper">
      <Navbar isVisible={true} />

      <main id="main-content">
        <ContactHero />
        <ContactHub />
        <ContactMapSection />
        <ContactSocialSection />
        <ContactSupportCTA />
      </main>

      <Footer />
    </div>
  );
}
