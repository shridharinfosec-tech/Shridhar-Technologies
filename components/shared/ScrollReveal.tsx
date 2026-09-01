"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide scroll reveal for section headings. Adds a hidden-then-visible
 * class to every h2/h3 inside the main content and reveals each one as it
 * scrolls into view. Uses scroll-position checks (not IntersectionObserver)
 * for reliability, applies the hidden state from JS so headings are never
 * invisible without JS, and respects prefers-reduced-motion.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("#main-content :is(h2, h3)"),
    );
    if (els.length === 0) return;

    els.forEach((el, i) => {
      el.classList.add("sr");
      // Small stagger for headings that share the first viewport.
      el.style.transitionDelay = `${Math.min(i, 6) * 60}ms`;
    });

    const reveal = () => {
      // Fallback to a large trigger if the viewport height is unavailable so
      // headings are never left permanently hidden.
      const trigger = (window.innerHeight || 10000) * 0.88;
      let remaining = false;
      els.forEach((el) => {
        if (el.classList.contains("sr-in")) return;
        if (el.getBoundingClientRect().top < trigger) {
          el.classList.add("sr-in");
        } else {
          remaining = true;
        }
      });
      if (!remaining) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };

    const onScroll = () => window.requestAnimationFrame(reveal);

    reveal(); // Reveal anything already in view on load.
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      els.forEach((el) => {
        el.classList.remove("sr", "sr-in");
        el.style.transitionDelay = "";
      });
    };
  }, [pathname]);

  return null;
}
