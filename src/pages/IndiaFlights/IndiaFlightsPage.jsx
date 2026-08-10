import React, { useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../features/footer';
import IndiaHero from '../../features/india-page';
import './IndiaFlightsPage.css';

export default function IndiaFlightsPage() {
  // Route level SEO metadata
  useEffect(() => {
    document.title = 'Flights to India | Affordable Flight Options | FlyInBudget';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Explore flight options to India with personal fare guidance and booking support from FlyInBudget.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/flight-to-india`;

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="india-page-wrapper">
      {/* Shared Top Navbar */}
      <Navbar isVisible={true} />

      {/* Main Content Area — Hero Section Only */}
      <main id="main-content">
        <IndiaHero />
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  );
}
