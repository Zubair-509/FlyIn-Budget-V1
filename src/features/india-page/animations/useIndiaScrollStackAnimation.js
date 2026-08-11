import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useIndiaScrollStackAnimation(containerRef, isReady = true) {
  useLayoutEffect(() => {
    if (!isReady || !containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Pinned Stack Animation (min-width: 1024px)
      mm.add('(min-width: 1024px)', () => {
        if (prefersReducedMotion) return;

        const cards = gsap.utils.toArray('.india-stack-card', containerRef.current);
        const pinnedWrapper = containerRef.current.querySelector('.india-stack-stage');

        if (!cards.length || !pinnedWrapper) return;

        const STACK_OFFSET_PX = 28; // Vertical gap per stacked card
        const totalCards = cards.length;

        // Initial setup for cards
        cards.forEach((card, i) => {
          gsap.set(card, {
            zIndex: i + 1,
            transformOrigin: 'top center',
            y: i === 0 ? 0 : '105vh',
            scale: 1,
            opacity: 1,
            pointerEvents: i === 0 ? 'auto' : 'none'
          });
        });

        // Timeline for pinning and stacking progression
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top+=80px',
            end: `+=${totalCards * 65}vh`,
            pin: pinnedWrapper,
            pinSpacing: true,
            scrub: 0.8,
            invalidateOnRefresh: true
          }
        });

        // Animate each subsequent card into the stack
        cards.forEach((card, i) => {
          if (i === 0) return;

          const stepStartTime = (i - 1) / (totalCards - 1);

          // Bring card i up from bottom to its stacked slot
          tl.to(
            card,
            {
              y: i * STACK_OFFSET_PX,
              ease: 'power2.out',
              duration: 1,
              onStart: () => {
                card.style.pointerEvents = 'auto';
              },
              onReverseComplete: () => {
                card.style.pointerEvents = 'none';
              }
            },
            stepStartTime
          );

          // Scale down previous stacked cards subtly
          for (let j = 0; j < i; j++) {
            const depth = i - j;
            const targetScale = Math.max(0.90, 1 - depth * 0.032);

            tl.to(
              cards[j],
              {
                scale: targetScale,
                ease: 'power2.out',
                duration: 1
              },
              stepStartTime
            );
          }
        });
      });

      // Mobile & Tablet Unpinned Fallback (max-width: 1023px)
      mm.add('(max-width: 1023px)', () => {
        const cards = gsap.utils.toArray('.india-stack-card', containerRef.current);
        cards.forEach((card) => {
          gsap.set(card, {
            clearProps: 'all'
          });
        });
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [containerRef, isReady]);
}
