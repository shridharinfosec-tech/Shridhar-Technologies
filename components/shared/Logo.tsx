"use client";

import Link from "@/components/shared/Link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

// Geometric "cube" mark (angular facets in the blue palette) + wordmark,
// echoing the Engitech logo lockup.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="Shridhar Technologies"
    >
      <path d="M20 3 L34 11 L20 19 L6 11 Z" fill="#43baff" />
      <path d="M6 11 L20 19 L20 37 L6 29 Z" fill="#0c63c7" />
      <path d="M34 11 L20 19 L20 37 L34 29 Z" fill="#0b1e46" />
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
