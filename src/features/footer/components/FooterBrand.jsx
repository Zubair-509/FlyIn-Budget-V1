import React, { memo } from 'react';
import logoImg from '../../../assets/Desktop Assets/l2.png';
import FooterNewsletter from './FooterNewsletter';
import FooterBenefits from './FooterBenefits';

export const FooterBrand = memo(function FooterBrand() {
  return (
    <div className="footer-col footer-col-brand">
      {/* Brand Logo */}
      <div className="footer-brand-logo-wrap">
        <img src={logoImg} alt="FlyIn Budget" className="footer-brand-logo" />
      </div>

      {/* Main Brand Slogan */}
      <h3 className="footer-brand-slogan">
        Fly more. Spend <span className="slogan-gold">less.</span>
      </h3>

      {/* Brand Description */}
      <p className="footer-brand-description">
        We offer flexible and refundable tickets, exciting holiday packages, hassle-free visa assistance, and much more — all at the best prices to make your travel smooth, affordable, and worry-free.
      </p>

      {/* Compact Newsletter Card */}
      <FooterNewsletter />

      {/* Horizontal Trust Benefits Bar */}
      <FooterBenefits />
    </div>
  );
});

export default FooterBrand;
