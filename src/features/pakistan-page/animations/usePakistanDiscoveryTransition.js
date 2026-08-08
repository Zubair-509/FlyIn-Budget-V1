import { useRef, useCallback, useEffect } from 'react';
import { gsap } from 'gsap';

export function usePakistanDiscoveryTransition(destinations) {
  const isTransitioningRef = useRef(false);
  const activeIndexRef = useRef(0);

  // Preload adjacent city images on idle
  useEffect(() => {
    if (!destinations || destinations.length === 0) return;

    const currentIdx = activeIndexRef.current;
    const nextIdx = (currentIdx + 1) % destinations.length;
    const prevIdx = (currentIdx - 1 + destinations.length) % destinations.length;

    [destinations[nextIdx], destinations[prevIdx]].forEach(dest => {
      if (dest && dest.backgroundImage) {
        const img = new Image();
        img.src = dest.backgroundImage;
      }
    });
  }, [destinations]);

  const animateTransition = useCallback(
    ({
      newIndex,
      direction,
      currentBgRef,
      incomingBgRef,
      contentRef,
      thumbsRef,
      onComplete
    }) => {
      if (isTransitioningRef.current) return false;
      isTransitioningRef.current = true;

      const targetDest = destinations[newIndex];
      if (!targetDest) {
        isTransitioningRef.current = false;
        return false;
      }

      // Check reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        if (currentBgRef.current) {
          currentBgRef.current.src = targetDest.backgroundImage;
          currentBgRef.current.style.objectPosition = targetDest.backgroundPosition;
        }
        if (onComplete) onComplete(newIndex);
        isTransitioningRef.current = false;
        return true;
      }

      // Prepare incoming background element
      if (incomingBgRef.current) {
        incomingBgRef.current.src = targetDest.backgroundImage;
        incomingBgRef.current.style.objectPosition = targetDest.backgroundPosition;
        gsap.set(incomingBgRef.current, { opacity: 0, scale: 1.05 });
      }

      const mainTl = gsap.timeline({
        onComplete: () => {
          if (currentBgRef.current && incomingBgRef.current) {
            currentBgRef.current.src = targetDest.backgroundImage;
            currentBgRef.current.style.objectPosition = targetDest.backgroundPosition;
            gsap.set(currentBgRef.current, { opacity: 1, scale: 1 });
            gsap.set(incomingBgRef.current, { opacity: 0 });
          }
          activeIndexRef.current = newIndex;
          isTransitioningRef.current = false;
          if (onComplete) onComplete(newIndex);
        }
      });

      // 1. Background Crossfade
      if (incomingBgRef.current && currentBgRef.current) {
        mainTl
          .to(
            currentBgRef.current,
            { scale: 1.02, opacity: 0.2, duration: 0.7, ease: 'power2.out' },
            0
          )
          .to(
            incomingBgRef.current,
            { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' },
            0
          );
      }

      // 2. Left Content Transition
      if (contentRef.current) {
        const contentChildren = contentRef.current.children;
        mainTl
          .to(contentChildren, { opacity: 0, y: -14, duration: 0.25, ease: 'power2.in' }, 0)
          .to(contentChildren, { opacity: 1, y: 0, duration: 0.45, stagger: 0.04, ease: 'power2.out' }, 0.25);
      }

      // 3. Direction-aware thumbnail rotation (Rotate inner image ONLY, labels stay upright)
      if (thumbsRef.current && thumbsRef.current.length > 0) {
        const rotationAngle = direction === 'next' ? -90 : 90;
        thumbsRef.current.forEach(thumbEl => {
          if (thumbEl) {
            mainTl.to(
              thumbEl,
              { rotation: rotationAngle, duration: 0.6, ease: 'power2.inOut' },
              0
            );
          }
        });
      }

      return true;
    },
    [destinations]
  );

  return { animateTransition, isTransitioningRef };
}
