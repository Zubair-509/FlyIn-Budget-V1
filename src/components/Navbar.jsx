import React, { useState } from 'react';
import logoImg from '../assets/l2.png';

export default function Navbar({ isVisible }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className={`navbar hero-transition-element ${isVisible ? 'is-visible' : ''}`}>
      <div className="nav-brand">
        <img src={logoImg} alt="FlyIn Budget" className="brand-logo-img" />
      </div>

      <nav className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
        <a href="#" className="nav-link active" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</a>
        <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Flights{' '}
          <svg className="dropdown-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
        <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Booking Terms</a>
        <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </nav>

      <div className="nav-actions">
        <button className="btn-manage">Umrah Inquiry</button>
        <button className="btn-menu" onClick={toggleMenu} aria-label="Toggle menu">
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
  );
}
