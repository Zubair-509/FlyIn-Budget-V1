import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import heroBgImg from '../../../assets/about_hero_runway.png';

export default function ContactHero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.contact-hero-anim', {
        y: 16,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, heroRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="contact-hero" aria-label="Contact FlyInBudget hero">
      <img
        src={heroBgImg}
        alt=""
        className="contact-hero__bg-img"
        aria-hidden="true"
        loading="eager"
      />
      <div className="contact-hero__overlay" aria-hidden="true" />

      <div className="contact-hero__container">
        <div className="contact-hero__content">
          <span className="contact-hero__eyebrow contact-hero-anim">
            CONTACT FLYINBUDGET
          </span>
          <h1 className="contact-hero__title contact-hero-anim">
            Let’s talk about your journey.
          </h1>
          <p className="contact-hero__subtitle contact-hero-anim">
            Questions about a flight, an existing booking or your travel plans? Our team is here to help.
          </p>
        </div>
      </div>
    </section>
  );
}
