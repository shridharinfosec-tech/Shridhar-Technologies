"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/shared/Button";
import { PhoneIcon } from "@/components/shared/Icons";
import { bookCallHref, siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/cn";

// Phones only: once the visitor scrolls past the hero, keep Call and Book a
// call one tap away. Hidden on the contact page, which has its own actions.
const SHOW_AFTER_PX = 700;

export default function StickyMobileCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-line bg-ink px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_-20px_rgba(11,30,70,0.35)] transition-transform duration-300 ease-out sm:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      inert={!visible}
    >
      <div className="grid grid-cols-2 gap-3">
        <a
          href={siteConfig.phoneHref}
          className="flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 border-line-bright text-sm font-bold text-snow"
        >
          <PhoneIcon className="h-4 w-4" />
          Call
        </a>
        <Button href={bookCallHref}>Book a call</Button>
      </div>
    </div>
  );
}
