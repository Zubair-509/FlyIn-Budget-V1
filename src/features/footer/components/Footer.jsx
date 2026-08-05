import React, { useRef, useEffect, useState, memo } from 'react';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterDestinations from './FooterDestinations';
import FooterContact from './FooterContact';
import FooterBottomBar from './FooterBottomBar';
import footerBgImg from '../../../assets/Desktop Assets/BG/Footer.png';
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
