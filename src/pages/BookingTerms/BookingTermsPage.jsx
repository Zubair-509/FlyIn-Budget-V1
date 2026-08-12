import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../features/footer';
import {
  BookingTermsHero,
  BookingTermsIntro,
  BookingTermsTOC,
  BookingTermsMobileNav,
  BookingTermsDocument,
  BookingTermsSupport,
  BOOKING_TERMS_SECTIONS
} from '../../features/booking-terms';

export default function BookingTermsPage() {
  const [activeId, setActiveId] = useState(BOOKING_TERMS_SECTIONS[0].id);

  // 1. Route SEO Metadata
  useEffect(() => {
    document.title = 'Booking Terms & Conditions | FlyInBudget';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Read the FlyInBudget Booking Terms & Conditions regarding flight bookings, cancellations, fare availability, and travel requirements.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://flyin-budget.vercel.app/booking-terms';

    window.scrollTo(0, 0);
  }, []);

  // 2. Active Legal Section Tracking via IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    BOOKING_TERMS_SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="booking-terms-page-wrapper">
      <Navbar isVisible={true} />

      <main id="main-content">
        <BookingTermsHero />
        <BookingTermsIntro />

        <section className="booking-terms-main-area" aria-label="Legal terms document">
          <div className="booking-terms-layout">
            <BookingTermsTOC activeId={activeId} />
            <div>
              <BookingTermsMobileNav activeId={activeId} />
              <BookingTermsDocument />
            </div>
          </div>
        </section>

        <BookingTermsSupport />
      </main>

      <Footer />
    </div>
  );
}
