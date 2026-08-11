import { useRef, useCallback, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export function useIndiaDiscoveryTransition(destinations, activeIndex, nodesRef) {
  const isTransitioningRef = useRef(false);
  const activeIndexRef = useRef(activeIndex);

  // Synchronize ref with activeIndex
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Preload function for adjacent city background images
  const preloadAdjacent = useCallback(
    (currentIdx) => {
      if (!destinations || destinations.length === 0) return;
      const total = destinations.length;
      const nextIdx = (currentIdx + 1) % total;
      const prevIdx = (currentIdx - 1 + total) % total;

      [destinations[nextIdx], destinations[prevIdx]].forEach((dest) => {
        if (dest && dest.backgroundImage) {
          const img = new Image();
          img.src = dest.backgroundImage;
        }
      });
    },
    [destinations]
  );

  // Helper to calculate target x, y, scale, opacity, zIndex for orbit nodes
  const getOrbitTarget = useCallback(
    (nodeIdx, targetActiveIdx) => {
      const total = destinations.length;
      let diff = nodeIdx - targetActiveIdx;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      const isTablet = typeof window !== 'undefined' && window.matchMedia('(max-width: 1199px)').matches;

      if (isTablet) {
        if (diff === 0) {
          return { x: 0, y: 0, scale: 1.0, opacity: 1.0, zIndex: 10 };
        } else if (diff === -1) {
          return { x: -35, y: -130, scale: 0.72, opacity: 0.85, zIndex: 8 };
        } else if (diff === 1) {
          return { x: -35, y: 130, scale: 0.72, opacity: 0.85, zIndex: 8 };
        } else if (diff === -2) {
          return { x: -75, y: -240, scale: 0.52, opacity: 0.65, zIndex: 6 };
        } else {
          return { x: -75, y: 240, scale: 0.52, opacity: 0.65, zIndex: 6 };
        }
      }

      // Large / Standard Desktop
      if (diff === 0) {
        return { x: 0, y: 0, scale: 1.0, opacity: 1.0, zIndex: 10 };
      } else if (diff === -1) {
        return { x: -45, y: -160, scale: 0.74, opacity: 0.85, zIndex: 8 };
      } else if (diff === 1) {
        return { x: -45, y: 160, scale: 0.74, opacity: 0.85, zIndex: 8 };
      } else if (diff === -2) {
        return { x: -95, y: -295, scale: 0.54, opacity: 0.65, zIndex: 6 };
      } else {
        return { x: -95, y: 295, scale: 0.54, opacity: 0.65, zIndex: 6 };
      }
    },
    [destinations]
  );

  // Initial GSAP layout positioning before paint
  useLayoutEffect(() => {
    if (!nodesRef || !nodesRef.current) return;
    const nodes = nodesRef.current.filter(Boolean);
    if (nodes.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      nodes.forEach((nodeEl, idx) => {
        if (nodeEl) {
          const target = getOrbitTarget(idx, activeIndexRef.current);
          gsap.set(nodeEl, {
            yPercent: -50,
            x: target.x,
            y: target.y,
            scale: target.scale,
            opacity: target.opacity,
            zIndex: target.zIndex,
            rotation: 0
          });
        }
      });
    });

    mm.add('(max-width: 768px)', () => {
      nodes.forEach((nodeEl) => {
        if (nodeEl) {
          gsap.set(nodeEl, { clearProps: 'transform,opacity,zIndex' });
        }
      });
    });

    return () => mm.revert();
  }, [nodesRef, getOrbitTarget]);

  // Preload initial adjacent images on mount
  useEffect(() => {
    preloadAdjacent(0);
  }, [preloadAdjacent]);

  const animateTransition = useCallback(
    ({
      newIndex,
      currentBgRef,
      incomingBgRef,
      contentRef,
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
        preloadAdjacent(newIndex);
        isTransitioningRef.current = false;
        return true;
      }

      // Prepare incoming background element
      if (incomingBgRef.current) {
        incomingBgRef.current.src = targetDest.backgroundImage;
        incomingBgRef.current.style.objectPosition = targetDest.backgroundPosition;
        gsap.set(incomingBgRef.current, { opacity: 0, scale: 1.035 });
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
          preloadAdjacent(newIndex);
          isTransitioningRef.current = false;
          if (onComplete) onComplete(newIndex);
        }
      });

      // 1. Background Crossfade (Restrained scale & opacity, 0.65s)
      if (incomingBgRef.current && currentBgRef.current) {
        mainTl
          .to(
            currentBgRef.current,
            { scale: 1.02, opacity: 0, duration: 0.65, ease: 'power2.inOut' },
            0
          )
          .to(
            incomingBgRef.current,
            { opacity: 1, scale: 1, duration: 0.65, ease: 'power2.inOut' },
            0
          );
      }

      // 2. Left Content Stagger Fade (Out: -12px/0.2s, In: 14px -> 0/0.4s)
      if (contentRef.current) {
        const contentChildren = contentRef.current.children;
        mainTl
          .to(contentChildren, { opacity: 0, y: -12, duration: 0.2, ease: 'power2.in' }, 0)
          .to(contentChildren, { opacity: 1, y: 0, duration: 0.4, stagger: 0.03, ease: 'power2.out' }, 0.2);
      }

      // 3. Orbit Node Movement — GSAP IS SOLE TRANSFORM OWNER
      if (nodesRef.current && nodesRef.current.length > 0) {
        const nodes = nodesRef.current.filter(Boolean);
        nodes.forEach((nodeEl, idx) => {
          if (nodeEl) {
            const targetPos = getOrbitTarget(idx, newIndex);
            mainTl.to(
              nodeEl,
              {
                x: targetPos.x,
                y: targetPos.y,
                scale: targetPos.scale,
                opacity: targetPos.opacity,
                zIndex: targetPos.zIndex,
                rotation: 0,
                duration: 0.65,
                ease: 'power2.inOut'
              },
              0
            );
          }
        });
      }

      return true;
    },
    [destinations, getOrbitTarget, nodesRef, preloadAdjacent]
  );

  return { animateTransition, getOrbitTarget, isTransitioningRef };
}
