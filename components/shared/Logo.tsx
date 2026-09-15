"use client";

import Link from "@/components/shared/Link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

// Monogram mark (revamp phase 3): a rounded-square outline in the current
// text colour with a stylised "S" in the accent blue. Using currentColor for
// the frame lets the mark adapt to light and dark surfaces automatically.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="Shridhar Technologies"
      fill="none"
    >
      <rect
        x="3.4"
        y="3.4"
        width="33.2"
        height="33.2"
        rx="10"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="M25 13 Q25 10 20 10 Q14 10 14 15 Q14 20 20 20 Q26 20 26 25 Q26 30 20 30 Q15 30 14 27"
        stroke="#4C7DFF"
        strokeWidth="2.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({
  className,
  onDeep = false,
}: {
  className?: string;
  onDeep?: boolean;
}) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      onClick={(event) => {
        if (pathname === "/") {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className={cn(
        "font-display inline-flex items-center gap-2.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber",
        className,
      )}
    >
      <LogoMark />
      <span className="flex items-baseline gap-1.5 text-lg font-extrabold tracking-tight sm:text-xl">
        <span className={onDeep ? "text-white" : "text-snow"}>Shridhar</span>
        <span className={cn("font-semibold", onDeep ? "text-electric" : "text-cyber")}>
          Technologies
        </span>
      </span>
    </Link>
  );
}
