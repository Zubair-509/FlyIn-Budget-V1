import React, { useEffect, useRef, useCallback } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../features/footer';
import {
  AboutHero,
  AboutStory,
  AboutServices,
  AboutApproach,
  AboutBenefits,
  AboutTrust,
  AboutAirlines,
  AboutSupportCTA
} from '../../features/about';
import { useAboutHeroAnimation } from '../../features/about/animations/useAboutHeroAnimation';
import { useAboutSectionAnimations } from '../../features/about/animations/useAboutSectionAnimations';
import '../../features/about/styles/about.css';

export default function AboutPage() {
  const containerRef = useRef(null);

  // Update SEO Page Title & Meta Description
  useEffect(() => {
    document.title = 'About FlyInBudget | Personal Travel & Flight Support';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Learn how FlyInBudget helps travellers explore suitable flights, holidays and travel options with clear guidance and personal support.';

    window.scrollTo(0, 0);
  }, []);

  // Bind GSAP animations with scoped context cleanup
  useAboutHeroAnimation(containerRef, true);
  useAboutSectionAnimations(containerRef, true);

  const handleQuoteClick = useCallback(() => {
    window.location.href = 'mailto:info@flyinbudget.co.uk?subject=Travel%20Quote%20Inquiry';
  }, []);

  return (
    <div ref={containerRef} className="about-page-wrapper">
      {/* Top Navbar */}
      <Navbar isVisible={true} />

      {/* Main Page Content */}
      <main id="main-content">
        <AboutHero onQuoteClick={handleQuoteClick} />
        <AboutStory />
        <AboutServices />
        <AboutApproach />
        <AboutBenefits />
        <AboutTrust />
        <AboutAirlines />
        <AboutSupportCTA onQuoteClick={handleQuoteClick} />
      </main>

      {/* Global Shared Redesigned Footer */}
      <Footer />
    </div>
  );
}
