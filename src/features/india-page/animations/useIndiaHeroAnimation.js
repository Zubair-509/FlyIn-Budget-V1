import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useIndiaHeroAnimation(containerRef, isReady = true) {
  useLayoutEffect(() => {
    if (!isReady || !containerRef.current) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Set immediate final positions under reduced motion
        gsap.set(
          [
            '.india-hero__bg-img',
            '.india-hero__eyebrow',
            '.india-hero__country',
            '.india-hero__fg-img',
            '.india-inquiry-form-container'
          ],
          { opacity: 1, y: 0, yPercent: 0, scale: 1 }
        );
        return;
      }

      // 1. Page Load Intro Timeline (Sunrise Effect)
      const introTl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      introTl
        .fromTo(
          '.india-hero__bg-img',
          { opacity: 0, scale: 1.035 },
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' },
          0
        )
        .fromTo(
          '.india-hero__eyebrow',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.2
        )
        .fromTo(
          '.india-hero__country',
          { opacity: 0, yPercent: 65 },
          { opacity: 1, yPercent: 0, duration: 1.05, ease: 'power3.out' },
          0.3
        )
        .fromTo(
          '.india-hero__fg-img',
          { opacity: 0, y: 28, scale: 1.015 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power2.out' },
          0.35
        )
        .fromTo(
          '.india-inquiry-form-container',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' },
          0.6
        )
        .fromTo(
          '.india-form-field-group, .india-btn-submit-inquiry',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 },
          0.8
        );

      // 2. Scroll Parallax Depth Effect
      // Heading moves downward smoothly as user scrolls, slipping INDIA behind Taj Mahal & foreground
      gsap.to('.india-hero__heading', {
        yPercent: 75,
        opacity: 0.35,
        ease: 'none',
        immediateRender: false,
        scrollTrigger: {
          trigger: '.india-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8
        }
      });

      // Atmospheric background minimal scroll translation
      gsap.to('.india-hero__bg-img', {
        yPercent: 8,
        scale: 1.03,
        ease: 'none',
        scrollTrigger: {
          trigger: '.india-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8
        }
      });

      // Taj Mahal foreground cutout minimal scroll translation
      gsap.to('.india-hero__fg-img', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: '.india-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8
        }
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [containerRef, isReady]);
}
