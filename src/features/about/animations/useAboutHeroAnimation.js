import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAboutHeroAnimation(containerRef, isReady = true) {
  useLayoutEffect(() => {
    if (!isReady || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero entrance stagger
      const heroTimeline = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.85 }
      });

      heroTimeline
        .fromTo(
          '.about-hero-bg-img',
          { scale: 1.08, opacity: 0.4 },
          { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
          0
        )
        .fromTo(
          '.about-hero-eyebrow',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1 },
          0.15
        )
        .fromTo(
          '.about-hero-headline-1',
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1 },
          0.3
        )
        .fromTo(
          '.about-hero-headline-2',
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1 },
          0.42
        )
        .fromTo(
          '.about-hero-subtext',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1 },
          0.54
        )
        .fromTo(
          '.about-hero-actions',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1 },
          0.66
        )
        .fromTo(
          '.about-hero-scroll-cue',
          { opacity: 0 },
          { opacity: 0.8, duration: 0.6 },
          0.85
        );

      // Hero scroll parallax (subtle camera push-in & background movement)
      gsap.to('.about-hero-bg-img', {
        yPercent: 12,
        scale: 1.04,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, isReady]);
}
