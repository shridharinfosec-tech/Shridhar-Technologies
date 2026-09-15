"use client";

import type { Stat } from "@/data/stats";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/cn";

// A stat number that is correct in the server HTML ("60+", never "0") and
// counts up on the client when scrolled into view. Screen readers get the
// final value once, from the label, instead of every animation frame.
export default function StatValue({
  stat,
  className,
}: {
  stat: Stat;
  className?: string;
}) {
  const ref = useCountUp<HTMLSpanElement>(stat.value);
  const spokenSuffix = stat.suffix === "+" ? " plus" : (stat.suffix ?? "");

  return (
    <span
      role="img"
      aria-label={`${stat.value}${spokenSuffix} ${stat.label.toLowerCase()}`}
      className={cn("tabular-nums", className)}
    >
      <span aria-hidden ref={ref}>
        {stat.value}
      </span>
      <span aria-hidden>{stat.suffix}</span>
    </span>
  );
}
