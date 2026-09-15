"use client";

import { useRef, useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/shared/Icons";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/cn";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const cards = () => Array.from(scroller.current?.children ?? []) as HTMLElement[];

  const onScroll = () => {
    const el = scroller.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDistance = Infinity;
    cards().forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = index;
      }
    });
    setActive(best);
  };

  const goTo = (index: number) => {
    const el = scroller.current;
    const card = cards()[Math.max(0, Math.min(index, testimonials.length - 1))];
    if (!el || !card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="bg-night">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Client feedback" title="What clients say after launch" />
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-bright text-snow transition-colors hover:border-cyber hover:text-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-bright text-snow transition-colors hover:border-cyber hover:text-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          onScroll={onScroll}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name + testimonial.role}
              className="flex w-[88%] shrink-0 snap-start flex-col rounded-xl border border-line bg-panel p-6 sm:w-[calc(50%-12px)] sm:p-8"
            >
              <span
                aria-hidden
                className="font-display text-6xl leading-none font-extrabold text-cyber/25"
              >
                &ldquo;
              </span>
              <blockquote className="-mt-4 flex-1 leading-relaxed text-fog">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <span
                  aria-hidden
                  className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyber text-sm font-bold text-white"
                >
                  {initials(testimonial.name)}
                </span>
                <span>
                  <span className="font-display block font-bold text-snow">
                    {testimonial.name}
                  </span>
                  <span className="block text-sm text-mist">{testimonial.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-1 sm:hidden">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name + testimonial.role}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show testimonial ${index + 1} of ${testimonials.length}`}
              aria-current={index === active ? "true" : undefined}
              className="flex h-11 w-11 items-center justify-center"
            >
              <span
                className={cn(
                  "block h-2.5 rounded-full transition-all duration-300",
                  index === active ? "w-6 bg-cyber" : "w-2.5 bg-line-bright",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
