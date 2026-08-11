import React, { useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../features/footer';
import IndiaHero, { IndiaFlightOptions, IndiaDiscovery, IndiaArrivalGuidance, IndiaTravelEssentials, IndiaFAQ, IndiaFinalCTA } from '../../features/india-page';
import FlowingMenu from '../../features/lowest-fares/components/FlowingMenu';
import dubaiImg from '../../assets/dubai.png';
import '../../features/lowest-fares/styles/flowing-menu.css';
import './IndiaFlightsPage.css';

const VOUCHER_MENU_ITEMS = [
  {
    link: 'tel:01143600079',
    text: 'BOOK FLIGHT AND AVAIL £25 VOUCHER •',
    image: dubaiImg
  }
];

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

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Cinematic India Hero */}
        <IndiaHero />

        {/* 2. Reused £25 Voucher Strip */}
        <div className="flowing-menu-strip" style={{ position: 'relative', zIndex: 10 }}>
          <FlowingMenu
            items={VOUCHER_MENU_ITEMS}
            speed={18}
            textColor="#FFFFFF"
            bgColor="transparent"
            marqueeBgColor="#EEB01D"
            marqueeTextColor="#1F2E4D"
            borderColor="rgba(255, 255, 255, 0.15)"
          />
        </div>

        {/* 3. India Flight Options ScrollStack */}
        <IndiaFlightOptions />

        {/* 4. Explore India Destination Discovery */}
        <IndiaDiscovery />

        {/* 5. Regional Arrival Guidance */}
        <IndiaArrivalGuidance />

        {/* 6. India Travel Essentials */}
        <IndiaTravelEssentials />

        {/* 7. India Flights FAQ */}
        <IndiaFAQ />

        {/* 8. Final Flights to India CTA */}
        <IndiaFinalCTA />
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  );
}
