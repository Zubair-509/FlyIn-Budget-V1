import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAboutSectionAnimations(containerRef, isReady = true) {
  useLayoutEffect(() => {
    if (!isReady || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Section 2: Our Story 3D Image Reveal (Desktop)
      mm.add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.about-story-media-box',
          { rotateY: -7, translateZ: -100, opacity: 0 },
          {
            rotateY: 0,
            translateZ: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.about-story-section',
              start: 'top 75%'
            }
          }
        );

        gsap.fromTo(
          '.about-story-text-content',
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            delay: 0.15,
            scrollTrigger: {
              trigger: '.about-story-section',
              start: 'top 75%'
            }
          }
        );
      });

      // Section 3: What We Help With Modular Reveal
      mm.add('(min-width: 769px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.about-service-card',
          { translateZ: -90, rotateX: 6, opacity: 0, y: 30 },
          {
            translateZ: 0,
            rotateX: 0,
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.about-services-section',
              start: 'top 70%'
            }
          }
        );
      });

      // Section 5: Why Travellers Choose Us (Line draw & text rise)
      gsap.utils.toArray('.about-benefit-row').forEach((row) => {
        const line = row.querySelector('.benefit-row-line');
        const content = row.querySelector('.benefit-row-content');

        if (line) {
          gsap.fromTo(
            line,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.8,
              ease: 'power3.inOut',
              scrollTrigger: { trigger: row, start: 'top 85%' }
            }
          );
        }

        if (content) {
          gsap.fromTo(
            content,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              delay: 0.1,
              ease: 'power2.out',
              scrollTrigger: { trigger: row, start: 'top 85%' }
            }
          );
        }
      });

      // Section 6: Trust & Accreditation Panel Separation
      mm.add('(min-width: 769px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.about-trust-panel',
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.about-trust-section',
              start: 'top 75%'
            }
          }
        );
      });

      // Section 8: Support CTA Reveal
      gsap.fromTo(
        '.about-cta-card',
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-support-cta-section',
            start: 'top 80%'
          }
        }
      );

      // Mobile fallbacks for all sections
      mm.add('(max-width: 768px), (prefers-reduced-motion: reduce)', () => {
        gsap.fromTo(
          ['.about-story-media-box', '.about-story-text-content', '.about-service-card', '.about-trust-panel'],
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%'
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, isReady]);
}
