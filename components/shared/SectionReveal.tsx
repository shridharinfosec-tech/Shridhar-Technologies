"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * The site's only scroll reveal: one fade and 12px rise per section, once.
 *
 * Sections render visible in the server HTML. On the client, a section is
 * hidden and animated only if it starts below the viewport, so anything
 * already on screen (first paint, anchor jumps, "back" navigation,
 * screenshots) is never left invisible. Text inside accordions, cards and
 * carousels is never animated separately.
 */
export default function SectionReveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    node.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.dataset.reveal = "shown";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      delete node.dataset.reveal;
    };
  }, []);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
