"use client";

import { useEffect, useRef } from "react";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Count-up for a number that is already rendered with its final value.
 *
 * The server HTML (and crawlers, link previews, no-JS and slow phones) always
 * shows the real number. The animation only runs when the element starts
 * below the viewport and reduced motion is off: the number is reset to 0
 * while it is still off screen, then counts up once it scrolls into view.
 * It writes to the text node directly so the component never re-renders.
 */
export function useCountUp<T extends HTMLElement>(
  target: number,
  { enabled = true, duration = 1600 }: { enabled?: boolean; duration?: number } = {},
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already on screen (first paint, anchor jump, back navigation): keep the
    // final value rather than flashing back to zero.
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    node.textContent = "0";
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          node.textContent = String(Math.round(target * easeOutCubic(progress)));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      node.textContent = String(target);
    };
  }, [target, enabled, duration]);

  return ref;
}
