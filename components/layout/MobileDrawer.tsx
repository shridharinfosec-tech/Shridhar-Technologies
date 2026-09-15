"use client";

import Link from "@/components/shared/Link";
import { useEffect, useRef } from "react";
import { categories, getServicesByCategory } from "@/data/services";
import { mainNav } from "@/data/navigation";
import { bookCallHref, siteConfig } from "@/data/siteConfig";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import Button from "@/components/shared/Button";
import Accordion from "@/components/shared/Accordion";
import Logo from "@/components/shared/Logo";
import { ChatIcon, CloseIcon, PhoneIcon } from "@/components/shared/Icons";
import { cn } from "@/lib/cn";

const linkClass =
  "flex min-h-11 items-center rounded-lg px-2 font-display text-base font-semibold text-snow hover:bg-night focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber";

export default function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  useFocusTrap(panelRef, open, onClose);

  // Lock page scroll while the menu is open; the panel scrolls on its own.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [open]);

  return (
    <div
      id="mobile-menu"
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      inert={!open}
    >
      <div
        aria-hidden
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-snow/40 transition-opacity duration-300 ease-out",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          "absolute inset-y-0 right-0 flex h-full w-full max-w-sm flex-col bg-ink shadow-xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-3">
          <div onClick={onClose}>
            <Logo />
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex-1 overflow-y-auto overscroll-contain px-6 py-4"
        >
          <p className="px-2 pt-2 text-xs font-bold tracking-wide text-mist uppercase">
            Services
          </p>
          <Accordion
            headingLevel={null}
            className="px-2"
            items={categories.map((category) => ({
              id: category.slug,
              trigger: category.name,
              content: (
                <ul className="space-y-1">
                  <li>
                    <Link
                      href={`/services/${category.slug}`}
                      onClick={onClose}
                      className="flex min-h-11 items-center text-sm font-semibold text-cyber"
                    >
                      All {category.name} services
                    </Link>
                  </li>
                  {getServicesByCategory(category.slug).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${category.slug}/${service.slug}`}
                        onClick={onClose}
                        className="flex min-h-11 items-center text-sm text-fog hover:text-cyber"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ),
            }))}
          />

          <div className="mt-3 flex flex-col gap-1 border-t border-line pt-3">
            {mainNav.map((link) => (
              <Link key={link.href} href={link.href} onClick={onClose} className={linkClass}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={onClose} className={linkClass}>
              Contact
            </Link>
          </div>
        </nav>

        <div className="border-t border-line px-6 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Button href={bookCallHref} onClick={onClose} className="w-full">
            Book a call
          </Button>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <a
              href={siteConfig.phoneHref}
              className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line-bright text-sm font-semibold text-snow hover:border-cyber hover:text-cyber"
            >
              <PhoneIcon className="h-4 w-4" />
              Call
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line-bright text-sm font-semibold text-snow hover:border-cyber hover:text-cyber"
            >
              <ChatIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
