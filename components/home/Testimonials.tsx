"use client";

import { useRef } from "react";
import Eyebrow from "@/components/shared/Eyebrow";
import { testimonials } from "@/data/testimonials";

// Scattered "location pin" positions (percent of the section) for the map feel.
const pins = [
  { x: "12%", y: "34%", r: 7, pulse: true },
  { x: "24%", y: "20%", r: 5, pulse: false },
  { x: "36%", y: "88%", r: 6, pulse: true },
  { x: "50%", y: "12%", r: 5, pulse: false },
  { x: "62%", y: "84%", r: 7, pulse: true },
  { x: "78%", y: "26%", r: 6, pulse: false },
  { x: "88%", y: "58%", r: 5, pulse: true },
];

export default function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("article");
    const amount = card ? card.clientWidth + 24 : el.clientWidth;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-night">
      {/* World-map style backdrop: faint dot grid + glowing location pins */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <svg className="absolute inset-0 h-full w-full text-snow/[0.05]">
          <defs>
            <pattern id="map-dots" width="26" height="26" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-dots)" />
        </svg>
        {pins.map((pin, i) => (
          <span
            key={i}
            className="absolute"
            style={{ left: pin.x, top: pin.y }}
          >
            <span
              className={`block rounded-full bg-electric/25 ${pin.pulse ? "animate-pulse-slow" : ""}`}
              style={{ width: pin.r * 4, height: pin.r * 4 }}
            />
            <span
              className="absolute rounded-full bg-cyber ring-4 ring-cyber/15"
              style={{
                width: pin.r,
                height: pin.r,
                left: pin.r * 1.5,
                top: pin.r * 1.5,
              }}
            />
          </span>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Our Clients</Eyebrow>
          <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold text-snow sm:text-4xl">
            Trusted by teams
            <br />
            building real products
          </h2>
        </div>

        {/* Carousel */}
        <div className="mt-14 flex items-center gap-4 lg:gap-6">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous testimonial"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-bright text-snow transition-colors hover:border-cyber hover:text-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber sm:flex"
          >
            <span aria-hidden className="text-lg leading-none">
              ←
            </span>
          </button>

          <div
            ref={scroller}
            className="flex flex-1 snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name + testimonial.role}
                className="w-[86%] shrink-0 snap-center rounded-2xl bg-panel p-8 shadow-xl shadow-snow/5 ring-1 ring-line sm:w-[calc(50%-12px)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-night text-cyber">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
                      <path d="M7.5 6C5.6 6 4 7.6 4 9.5S5.6 13 7.5 13c.3 0 .6 0 .9-.1-.4 1.6-1.7 2.8-3.4 3.1v2c3.6-.4 6.3-3.4 6.3-7.1V9.5C11.3 7.6 9.6 6 7.5 6zm9 0C14.6 6 13 7.6 13 9.5S14.6 13 16.5 13c.3 0 .6 0 .9-.1-.4 1.6-1.7 2.8-3.4 3.1v2c3.6-.4 6.3-3.4 6.3-7.1V9.5C20.3 7.6 18.6 6 16.5 6z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-snow">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-mist">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-6 leading-relaxed text-fog">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next testimonial"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-bright text-snow transition-colors hover:border-cyber hover:text-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber sm:flex"
          >
            <span aria-hidden className="text-lg leading-none">
              →
            </span>
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-mist">
          Testimonials are illustrative placeholders pending approved client
          quotes.
        </p>
      </div>
    </section>
  );
}
