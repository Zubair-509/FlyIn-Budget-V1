import React from 'react';
import FlowingMenu from './FlowingMenu.jsx';
import FaresCarousel from './FaresCarousel.jsx';
import AirlineLogoLoop from '../../airline-partners/components/AirlineLogoLoop.jsx';
import lftBg from '../../../assets/Desktop Assets/BG/LFT v3.png';
import dubaiImg from '../../../assets/dubai.png';

const FLOWING_MENU_ITEMS = [
  {
    link: 'tel:+18005550199',
    text: 'BOOK FLIGHT AND AVAIL $25 VOUCHER •',
    image: dubaiImg
  }
];

export default function LowestFares() {
  return (
    <div className="lowest-fare-root">
      {/* Transparent Marquee Banner Strip */}
      <div className="flowing-menu-strip">
        <FlowingMenu
          items={FLOWING_MENU_ITEMS}
          speed={18}
          textColor="#FFFFFF"
          bgColor="transparent"
          marqueeBgColor="#EEB01D"
          marqueeTextColor="#1F2E4D"
          borderColor="rgba(255, 255, 255, 0.15)"
        />
      </div>

      {/* Today’s Lowest Fares Section */}
      <section className="lowest-fares-deals-section" style={{ backgroundImage: `url("${lftBg}")` }}>
        <div className="lowest-fares-overlay" />

        <div className="lowest-fares-content-container">

          {/* Top Header Block & View All Deals CTA */}
          <div className="lowest-fares-top-row">
            <div className="lowest-fares-header-block">
              <div className="offers-label-tag">
                <svg className="gold-ticket-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#EEB01D" strokeWidth="2.2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
                <span>LIMITED-TIME OFFERS</span>
              </div>
              <h2 className="lowest-fares-main-heading">Today’s Lowest Fares<span style={{ color: '#EEB01D' }}>.</span></h2>
              <p className="lowest-fares-support-text">
                Handpicked deals to the world’s most-loved destinations.<br />
                Book now and save big on our most popular routes.
              </p>
            </div>

            <button className="btn-view-all-deals" type="button">
              <svg className="gold-btn-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#EEB01D" strokeWidth="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
              </svg>
              <span>View all deals</span>
              <svg className="btn-right-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* 3D Liquid Glass Coverflow Carousel */}
          <FaresCarousel />

          {/* Airline Partner Logo Loop */}
          <AirlineLogoLoop />

        </div>
      </section>
    </div>
  );
}
