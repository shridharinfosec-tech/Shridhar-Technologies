"use client";

import { useCallback, useEffect, useState } from "react";
import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import HeroTitle, { type TitleLine } from "@/components/home/HeroTitle";
import { cn } from "@/lib/cn";

type Slide = {
  image: string;
  eyebrow: string;
  lines: TitleLine[];
  subtitle: string;
  primary: { label: string; href: string };
};

const slides: Slide[] = [
  {
    image: "/images/hero.jpg",
    eyebrow: "Full-cycle software development",
    lines: [
      { words: ["Built", "to", "ship."] },
      { words: ["Built", "to", "last."], className: "text-electric" },
    ],
    subtitle:
      "We're a team of senior software engineers delivering SaaS platforms, cloud systems, AI products, and custom applications end to end - from first idea to production and the years after.",
    primary: { label: "Get a Quote", href: "/contact" },
  },
  {
    image: "/images/meeting.jpg",
    eyebrow: "SaaS · Cloud · Artificial Intelligence",
    lines: [
      { words: ["End-to-end"] },
      { words: ["engineering."], className: "text-electric" },
    ],
    subtitle:
      "We design, build, and run the software our clients depend on - modern platforms engineered for scale, shipped by people who own the outcome.",
    primary: { label: "Explore Services", href: "/services" },
  },
  {
    image: "/images/code.jpg",
    eyebrow: "Senior engineers, real outcomes",
    lines: [
      { words: ["Software", "that"] },
      { words: ["actually", "works."], className: "text-electric" },
    ],
    subtitle:
      "Delivered by senior engineers who stand behind their decisions, on a timeline and budget agreed upfront rather than discovered along the way.",
    primary: { label: "See our work", href: "/portfolio" },
  },
];

const AUTOPLAY_MS = 8000;
const pad = (n: number) => String(n).padStart(2, "0");

export default function Hero() {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const go = useCallback(
    (n: number) => setIndex(((n % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % count),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(id);
  }, [count, index]);

  const slide = slides[index];

  return (
    <section
      className="relative overflow-hidden bg-deep"
      aria-roledescription="carousel"
      aria-label="Highlights"
    >
      {/* Slide background photos (crossfade) */}
      {slides.map((s, i) => (
        <div
          key={s.image}
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-out",
            i === index ? "opacity-75" : "opacity-0",
          )}
          style={{ backgroundImage: `url('${s.image}')` }}
        />
      ))}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-deep/75 via-deep/40 to-deep/15"
      />

      {/* Angular geometric backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Full-bleed circuit + dot-grid texture */}
        <svg className="absolute inset-0 h-full w-full text-white/[0.05]">
          <defs>
            <pattern id="hero-grid" width="46" height="46" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
              <path d="M2 2 H46 M2 2 V46" stroke="currentColor" strokeWidth="0.75" opacity="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(67,186,255,0.22),transparent_46%),radial-gradient(circle_at_92%_82%,rgba(70,97,197,0.26),transparent_42%),radial-gradient(circle_at_12%_18%,rgba(67,186,255,0.14),transparent_38%)]" />
        <svg
          className="absolute top-0 right-0 hidden h-full w-[62%] opacity-95 md:block"
          viewBox="0 0 640 620"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="hero-tri" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#43baff" stopOpacity="0.9" />
              <stop offset="1" stopColor="#43baff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-tri2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#4661c5" stopOpacity="0.9" />
              <stop offset="1" stopColor="#4661c5" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M640 40 L640 600 L330 600 Z" fill="url(#hero-tri2)" opacity="0.18" />
          <path d="M640 170 L640 600 L470 600 Z" fill="url(#hero-tri)" opacity="0.16" />
        </svg>

        {/* Readability scrim behind the text */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep/70 via-deep/15 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl" key={index}>
          <div className="hero-fade">
            <Eyebrow onDeep>{slide.eyebrow}</Eyebrow>
          </div>
          <HeroTitle lines={slide.lines} />
          <p
            className="hero-fade mt-8 max-w-xl text-lg leading-relaxed text-on-deep"
            style={{ animationDelay: "0.25s" }}
          >
            {slide.subtitle}
          </p>
          <div
            className="hero-fade mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.35s" }}
          >
            <Button href={slide.primary.href}>{slide.primary.label}</Button>
            <Button href="/portfolio" variant="onDeep">
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Slider controls */}
        <div className="mt-14 flex items-center gap-5">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-electric hover:text-electric focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            <span aria-hidden className="text-lg leading-none">
              ←
            </span>
          </button>

          <p className="font-display text-sm font-bold tracking-widest text-white tabular-nums">
            {pad(index + 1)}
            <span className="mx-1 text-on-deep">/</span>
            <span className="text-on-deep">{pad(count)}</span>
          </p>

          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-electric hover:text-electric focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            <span aria-hidden className="text-lg leading-none">
              →
            </span>
          </button>

          {/* Progress dots */}
          <div className="ml-3 flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index
                    ? "w-8 bg-electric"
                    : "w-2 bg-white/30 hover:bg-white/60",
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Angular bottom edge into the next section. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-16 bg-ink"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      />
    </section>
  );
}
