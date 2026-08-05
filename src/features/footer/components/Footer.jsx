import React, { useRef, useEffect, useState, memo } from 'react';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterDestinations from './FooterDestinations';
import FooterContact from './FooterContact';
import FooterBottomBar from './FooterBottomBar';
import footerBgImg from '../../../assets/Desktop Assets/BG/Footer BG.png';
import '../styles/footer.css';

export const Footer = memo(function Footer() {
  const footerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className={`site-footer-wrapper ${isInView ? 'is-in-view' : ''}`}>
      <div className="site-footer-card" style={{ backgroundImage: `url("${footerBgImg}")` }}>
        {/* Background Overlay Atmosphere */}
        <div className="footer-card-overlay" aria-hidden="true" />

        {/* Top Right Decorative Flight Trail */}
        <div className="footer-flight-trail" aria-hidden="true">
          <svg viewBox="0 0 220 120" width="220" height="120" fill="none">
            <path
              d="M 10,110 C 60,110 90,60 140,40 C 170,25 200,35 210,15"
              stroke="#EEB01D"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              opacity="0.8"
            />
            <path
              d="M205,10 L215,15 L208,22 Z"
              fill="#EEB01D"
            />
          </svg>
        </div>

        {/* Main 4-Column Content Layout */}
        <div className="footer-main-grid">
          <FooterBrand />
          <FooterLinks />
          <FooterDestinations />
          <FooterContact />
        </div>

        {/* Bottom Bar */}
        <FooterBottomBar />
      </div>
    </footer>
  );
});

export default Footer;
