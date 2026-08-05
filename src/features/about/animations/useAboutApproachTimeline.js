import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAboutApproachTimeline(sectionRef, isReady = true) {
  useLayoutEffect(() => {
    if (!isReady || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Large Desktop (992px+): Signature 3D Pinned Scroll Sequence
      mm.add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', () => {
        const panels = gsap.utils.toArray('.approach-stage-panel');
        if (panels.length < 3) return;

        // Pinned ScrollTrigger Timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=160%',
            pin: true,
            scrub: 0.8,
            anticipatePin: 1
          }
        });

        // Initial setup: Panels 2 and 3 sit deeper behind Panel 1
        gsap.set(panels[0], { transformPerspective: 1300, rotateY: 0, translateZ: 0, opacity: 1, zIndex: 3 });
        gsap.set(panels[1], { transformPerspective: 1300, rotateY: 6, translateZ: -120, xPercent: 8, opacity: 0.5, zIndex: 2 });
        gsap.set(panels[2], { transformPerspective: 1300, rotateY: 10, translateZ: -220, xPercent: 16, opacity: 0.25, zIndex: 1 });

        // Step 1: Advance Panel 1, highlight progress node 1
        tl.to('.approach-progress-bar-fill', { width: '33.3%', duration: 0.2 }, 0)
          .to('.node-1', { backgroundColor: '#EEB01D', borderColor: '#EEB01D', color: '#031126', scale: 1.1, duration: 0.2 }, 0)
          .to(panels[0], { scale: 1.02, duration: 0.3 }, 0);

        // Step 2: Transition from Panel 1 to Panel 2
        tl.to(panels[0], { translateZ: -60, xPercent: -5, opacity: 0.7, duration: 0.5 }, 0.4)
          .to(panels[1], { translateZ: 0, rotateY: 0, xPercent: 0, opacity: 1, scale: 1.02, duration: 0.5 }, 0.4)
          .to('.approach-progress-bar-fill', { width: '66.6%', duration: 0.3 }, 0.4)
          .to('.node-2', { backgroundColor: '#EEB01D', borderColor: '#EEB01D', color: '#031126', scale: 1.1, duration: 0.3 }, 0.4);

        // Step 3: Transition from Panel 2 to Panel 3
        tl.to(panels[1], { translateZ: -60, xPercent: -5, opacity: 0.7, duration: 0.5 }, 0.9)
          .to(panels[2], { translateZ: 0, rotateY: 0, xPercent: 0, opacity: 1, scale: 1.02, duration: 0.5 }, 0.9)
          .to('.approach-progress-bar-fill', { width: '100%', duration: 0.3 }, 0.9)
          .to('.node-3', { backgroundColor: '#EEB01D', borderColor: '#EEB01D', color: '#031126', scale: 1.1, duration: 0.3 }, 0.9);

        // Step 4: Final Settle — All panels align into a clean flat grid
        tl.to(panels, {
          rotateY: 0,
          translateZ: 0,
          xPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 0.5
        }, 1.4);
      });

      // Mobile & Tablet (<992px) or Reduced Motion: Vertical Unpinned Entrance
      mm.add('(max-width: 991px), (prefers-reduced-motion: reduce)', () => {
        const panels = gsap.utils.toArray('.approach-stage-panel');
        panels.forEach((panel, i) => {
          gsap.fromTo(
            panel,
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: panel,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, isReady]);
}
