"use client";

import Link from "@/components/shared/Link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import Logo from "@/components/shared/Logo";
import Button from "@/components/shared/Button";
import MegaMenu from "./MegaMenu";
import MobileDrawer from "./MobileDrawer";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaMenuId = useId();
  const pathname = usePathname();

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;

    const handleClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [servicesOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300 ease-out",
        scrolled
          ? "border-b border-line bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-ink",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />

        <nav
          className="hidden flex-1 items-center justify-center gap-9 lg:flex"
          ref={menuRef}
        >
          <Link
            href="/"
            onClick={(event) => {
              if (pathname === "/") {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="nav-underline text-sm font-bold text-snow transition-colors hover:text-cyber"
          >
            Home
          </Link>

          <div
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <Link
              href="/services"
              aria-expanded={servicesOpen}
              aria-controls={megaMenuId}
              onFocus={openServices}
              className="flex items-center gap-1 text-sm font-bold text-snow transition-colors hover:text-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber"
            >
              Services
              <span
                aria-hidden
                className={cn(
                  "text-xs transition-transform duration-200 ease-out",
                  servicesOpen && "rotate-180",
                )}
              >
                ▾
              </span>
            </Link>
            {servicesOpen && <MegaMenu id={megaMenuId} />}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-underline text-sm font-bold text-snow transition-colors hover:text-cyber"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button href="/contact" className="px-6 py-3 text-sm">
              Get a Quote
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-snow lg:hidden"
          >
            <span aria-hidden className="text-2xl leading-none">
              ☰
            </span>
          </button>
        </div>
      </div>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
