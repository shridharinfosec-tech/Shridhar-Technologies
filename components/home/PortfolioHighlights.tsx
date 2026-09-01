"use client";

import { useRef, useState } from "react";
import Link from "@/components/shared/Link";
import { portfolio } from "@/data/portfolio";
import Eyebrow from "@/components/shared/Eyebrow";
import { cn } from "@/lib/cn";

const covers = [
  "/images/laptop.jpg",
  "/images/devices.jpg",
  "/images/office.jpg",
  "/images/servers.jpg",
  "/images/meeting.jpg",
  "/images/code.jpg",
];

function coverFor(slug: string) {
  const hash = Array.from(slug).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return covers[hash % covers.length];
}

export default function PortfolioHighlights() {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = scroller.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActive(best);
  };

  const goTo = (i: number) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({
      left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden bg-night">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <Eyebrow>Latest Case Studies</Eyebrow>
            <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold text-snow sm:text-4xl">
              Introduce our projects
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-fog">
            Software delivery is a means to a business outcome. These are
            illustrative examples of the kind of work we take on - and the
            results we build toward with every client.
          </p>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scroller}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {portfolio.map((study) => (
          <Link
            key={study.slug}
            href={`/portfolio/${study.slug}`}
            className="group relative w-[86%] shrink-0 snap-center overflow-hidden rounded-2xl sm:w-[52%] lg:w-[40%]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={coverFor(study.slug)}
              alt=""
              className="h-[440px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />

            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-xl bg-deep/90 px-6 py-5 backdrop-blur transition-colors duration-200 group-hover:bg-deep">
              <div className="min-w-0">
                <h3 className="font-display line-clamp-2 text-base font-bold text-white group-hover:text-electric">
                  {study.title}
                </h3>
                <p className="mt-1 text-xs font-semibold tracking-wide text-electric uppercase">
                  {study.industry}
                </p>
              </div>
              <span
                aria-hidden
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-electric group-hover:text-deep"
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-8 flex items-center justify-center gap-2.5">
        {portfolio.map((study, i) => (
          <button
            key={study.slug}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            aria-current={i === active}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              i === active ? "w-7 bg-cyber" : "w-2.5 bg-line-bright hover:bg-mist",
            )}
          />
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-mist">
        <Link
          href="/portfolio"
          className="underline underline-offset-2 hover:text-cyber"
        >
          Case studies are illustrative placeholders
        </Link>{" "}
        pending publishable client details.
      </p>
    </section>
  );
}
