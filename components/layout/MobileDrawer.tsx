"use client";

import Link from "@/components/shared/Link";
import { useRef } from "react";
import { categories, getServicesByCategory } from "@/data/services";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import Button from "@/components/shared/Button";
import Accordion from "@/components/shared/Accordion";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

export default function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  useFocusTrap(panelRef, open, onClose);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      inert={!open}
    >
      <div
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
          "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-ink p-6 shadow-xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-2xl text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber"
          >
            ×
          </button>
        </div>

        <nav className="mt-4 flex flex-col gap-1">
          <Link
            href="/"
            onClick={onClose}
            className="min-h-11 rounded-lg px-2 py-3 font-display text-base font-semibold text-snow hover:bg-night"
          >
            Home
          </Link>

          <div className="px-2 py-2">
            <p className="font-display text-sm font-semibold text-snow">Services</p>
            <Accordion
              className="mt-1"
              items={categories.map((category) => ({
                id: category.slug,
                trigger: category.name,
                content: (
                  <ul className="space-y-3">
                    {getServicesByCategory(category.slug).map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${category.slug}/${service.slug}`}
                          onClick={onClose}
                          className="block min-h-11 py-1 text-sm text-mist hover:text-cyber"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ),
              }))}
            />
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="min-h-11 rounded-lg px-2 py-3 font-display text-base font-semibold text-snow hover:bg-night"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="/contact" onClick={onClose} className="mt-6 w-full">
          Get a Quote
        </Button>
      </div>
    </div>
  );
}
