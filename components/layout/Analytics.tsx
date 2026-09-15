"use client";

import Script from "next/script";
import { useEffect } from "react";
import { bookCallHref, siteConfig } from "@/data/siteConfig";
import { trackEvent } from "@/lib/analytics";

// Plausible is cookie-free, so no consent banner is needed. Set
// NEXT_PUBLIC_PLAUSIBLE_DOMAIN (for example shridhartechnologies.com) to
// enable it. If GA4 or ad pixels are added later, add a consent banner first.
const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

function locationOf(element: Element) {
  const section = element.closest("section[id], header, footer, [role='dialog']");
  const where = section?.id || section?.tagName.toLowerCase() || "page";
  return `${window.location.pathname}#${where}`;
}

export default function Analytics() {
  useEffect(() => {
    if (!domain) return;

    // One delegated listener tracks every call, WhatsApp and booking CTA.
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const location = locationOf(link);
      const label = link.textContent?.trim().slice(0, 80) ?? "";

      if (href.startsWith("tel:")) {
        trackEvent("call_click", { location });
      } else if (href.startsWith(siteConfig.whatsappHref)) {
        trackEvent("whatsapp_click", { location });
      } else if (siteConfig.bookingUrl && href === siteConfig.bookingUrl) {
        trackEvent("booking_opened", { location, label });
      }

      if (href === bookCallHref || href === "/contact") {
        trackEvent("cta_click", { label, location });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!domain) return null;

  return (
    <>
      <Script id="plausible-queue" strategy="afterInteractive">
        {`window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
      </Script>
      <Script
        defer
        data-domain={domain}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    </>
  );
}
