import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import heroBgImg from '../../../assets/about_hero_runway.png';

export default function BookingTermsHero() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.terms-hero-anim', {
        y: 16,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="booking-terms-hero" aria-label="Booking terms hero">
      <img
        src={heroBgImg}
        alt=""
        className="booking-terms-hero__bg-img"
        aria-hidden="true"
        loading="eager"
      />
      <div className="booking-terms-hero__overlay" aria-hidden="true" />

      <div className="booking-terms-hero__container">
        <div className="booking-terms-hero__content">
          <span className="booking-terms-hero__eyebrow terms-hero-anim">
            LEGAL INFORMATION
          </span>
          <h1 className="booking-terms-hero__title terms-hero-anim">
            Booking Terms &amp; Conditions
          </h1>
          <p className="booking-terms-hero__subtitle terms-hero-anim">
            Please read these terms carefully before using FlyInBudget services or confirming a booking.
          </p>
        </div>
      </div>
    </section>
  );
}
