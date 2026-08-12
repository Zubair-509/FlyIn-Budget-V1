import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function usePakistanScrollStack(containerRef, cardsRef, onActiveIndexChange) {
  useLayoutEffect(() => {
    if (!containerRef.current || !cardsRef.current || cardsRef.current.length === 0) {
      return;
    }

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Clear inline styles under reduced motion for natural flow
      cardsRef.current.forEach(card => {
        if (card) {
          gsap.set(card, { clearProps: 'all' });
        }
      });
      return;
    }

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 768;
      const startPinPos = isMobile ? 'top 80px' : 'top 18%';
      const startCoveredPos = isMobile ? 'top 95px' : 'top 22%';

      cards.forEach((card, index) => {
        // Skip last card from pinning since it releases the section naturally
        if (index < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: startPinPos,
            endTrigger: cards[cards.length - 1],
            end: startPinPos,
            pin: true,
            pinSpacing: false,
            scrub: true,
            id: `card-pin-${index}`,
            onUpdate: (self) => {
              // Calculate scaling down of previous cards as subsequent cards approach
              const progress = self.progress;
              const scale = 1 - progress * 0.018 * (cards.length - 1 - index);
              gsap.set(card, { scale: Math.max(0.92, scale) });
            }
          });
        }

        // Trigger covered state update when next card reaches top offset
        if (index > 0) {
          ScrollTrigger.create({
            trigger: card,
            start: startCoveredPos,
            onEnter: () => onActiveIndexChange && onActiveIndexChange(index),
            onLeaveBack: () => onActiveIndexChange && onActiveIndexChange(index - 1)
          });
        }
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [containerRef, cardsRef, onActiveIndexChange]);
}
