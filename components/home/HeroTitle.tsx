"use client";

import { cn } from "@/lib/cn";

export type TitleLine = { words: string[]; className?: string };

const defaultLines: TitleLine[] = [
  { words: ["Built", "to", "ship."] },
  { words: ["Built", "to", "last."], className: "text-electric" },
];

export default function HeroTitle({
  lines = defaultLines,
}: {
  lines?: TitleLine[];
}) {
  let index = 0;

  return (
    <h1 className="font-display mt-6 text-5xl leading-[1.05] font-extrabold tracking-tight text-white uppercase sm:text-6xl lg:text-7xl">
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className={cn("block", line.className)}>
          {line.words.map((word) => {
            const delay = 0.15 + index * 0.12;
            index += 1;
            return (
              <span
                key={`${lineIndex}-${word}-${index}`}
                className="hero-word mr-[0.25em]"
                style={{ animationDelay: `${delay}s` }}
              >
                {word}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
