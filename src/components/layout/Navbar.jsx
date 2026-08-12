import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import StaggeredMenu from '../navigation/StaggeredMenu';
import logoImg from '../../assets/Desktop Assets/l2.png';

const mobileMenuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About Us', ariaLabel: 'Learn about FlyInBudget', link: '/about-us' },
  { label: 'Flights to Pakistan', ariaLabel: 'View flights to Pakistan', link: '/flight-to-pakistan' },
  { label: 'Flights to India', ariaLabel: 'View flights to India', link: '/flight-to-india' },
  { label: 'Booking Terms', ariaLabel: 'View booking terms and conditions', link: '/booking-terms' },
  { label: 'Contact', ariaLabel: 'Get in touch with support', link: '/get-in-touch' }
];

const mobileSocialItems = [
  { label: 'WhatsApp', link: 'https://wa.me/447383290467' },
  { label: 'Facebook', link: 'https://www.facebook.com/Flyinbudgetltd' },
  { label: 'Instagram', link: 'https://www.instagram.com/flyin_budget' },
  { label: 'TikTok', link: 'https://www.tiktok.com/@flyinbudget' }
];

export default function Navbar({ isVisible }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about-us';
  const isPakistan = location.pathname === '/flight-to-pakistan';
  const isIndia = location.pathname === '/flight-to-india';
  const isTerms = location.pathname === '/booking-terms';
  const isContact = location.pathname === '/get-in-touch';

  return (
    <>
      {/* Mobile-Exclusive Staggered Menu Component */}
      <StaggeredMenu
        position="right"
        items={mobileMenuItems}
        socialItems={mobileSocialItems}
        displaySocials={true}
        displayItemNumbering={true}
        colors={['#071a33', '#EEB01D']}
        logoUrl={logoImg}
        accentColor="#EEB01D"
        menuButtonColor="#ffffff"
        openMenuButtonColor="#EEB01D"
        changeMenuColorOnOpen={true}
        isScrolled={isScrolled}
      />

      {/* Desktop Navigation Header */}
      <header className={`navbar hero-transition-element ${isVisible ? 'is-visible' : ''} ${isScrolled ? 'is-scrolled' : ''}`}>
        <Link to="/" className="nav-brand" aria-label="FlyIn Budget Home">
          <img src={logoImg} alt="FlyIn Budget" className="brand-logo-img" />
        </Link>

        <nav className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
          <Link to="/" className={`nav-link ${isHome ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about-us" className={`nav-link ${isAbout ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>About Us</Link>
          
          <div className="nav-dropdown-wrapper">
            <Link
              to="/flight-to-pakistan"
              className={`nav-link ${isPakistan || isIndia ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Flights{' '}
              <svg className="dropdown-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </Link>
            <div className="nav-dropdown-menu">
              <Link
                to="/flight-to-pakistan"
                className={`dropdown-item ${isPakistan ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Flights to Pakistan
              </Link>
              <Link
                to="/flight-to-india"
                className={`dropdown-item ${isIndia ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Flights to India
              </Link>
            </div>
          </div>

          <Link to="/booking-terms" className={`nav-link ${isTerms ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Booking Terms</Link>
          <Link to="/get-in-touch" className={`nav-link ${isContact ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <button className="btn-manage mobile-nav-btn" onClick={() => setIsMenuOpen(false)}>
            Umrah Inquiry
          </button>
        </nav>

        <div className="nav-actions">
          <button className="btn-manage desktop-only-btn">Umrah Inquiry</button>
          <button className="btn-menu" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
                <line x1="4" y1="7" x2="20" y2="7"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="17" x2="20" y2="17"></line>
              </svg>
            )}
          </button>
        </div>
      </header>
    </>
  );
}
