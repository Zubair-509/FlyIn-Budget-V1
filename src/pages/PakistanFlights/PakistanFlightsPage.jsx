import React, { useEffect, useRef } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../features/footer';
import FlowingMenu from '../../features/lowest-fares/components/FlowingMenu';
import {
  PakistanHero,
  PakistanFlightOptions,
  PakistanDiscovery,
  PakistanTravelEssentials,
  PakistanFAQ,
  PakistanCtaBanner,
  usePakistanHeroAnimation
} from '../../features/pakistan-page';

import dubaiImg from '../../assets/dubai.png';
import '../../features/lowest-fares/styles/flowing-menu.css';
import '../../features/pakistan-page/styles/pakistan-hero.css';
import './PakistanFlightsPage.css';

const VOUCHER_MENU_ITEMS = [
  {
    link: 'tel:01143600079',
    text: 'BOOK FLIGHT AND AVAIL £25 VOUCHER •',
    image: dubaiImg
  }
];

export default function PakistanFlightsPage() {
  const containerRef = useRef(null);

  // Route level SEO metadata
  useEffect(() => {
    document.title = 'Flights to Pakistan | Affordable Flight Options | FlyInBudget';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Explore flight options to Pakistan with personal fare guidance and booking support from FlyInBudget.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://flyin-budget.vercel.app/flight-to-pakistan';

    window.scrollTo(0, 0);
  }, []);

  // Bind GSAP Hero animations with scoped context cleanup
  usePakistanHeroAnimation(containerRef, true);

  return (
    <div ref={containerRef} className="pakistan-page-wrapper">
      {/* Shared Top Navbar */}
      <Navbar isVisible={true} />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Approved Cinematic Pakistan Hero */}
        <PakistanHero />

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

        {/* 3. ScrollStack Flight Options Section */}
        <PakistanFlightOptions />

        {/* 4. Interactive Introducing Pakistan / Popular Cities */}
        <PakistanDiscovery />

        {/* 5. Restrained Travel Essentials Accordion Section */}
        <PakistanTravelEssentials />

        {/* 6. Pakistan Flights FAQ Section */}
        <PakistanFAQ />

        {/* 7. Final Pakistan CTA Banner Section */}
        <PakistanCtaBanner />
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  );
}
