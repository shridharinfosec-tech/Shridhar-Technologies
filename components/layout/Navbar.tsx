"use client";

import Link from "@/components/shared/Link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import Logo from "@/components/shared/Logo";
import Button from "@/components/shared/Button";
import { ChevronDownIcon, MenuIcon } from "@/components/shared/Icons";
import { mainNav } from "@/data/navigation";
import { bookCallHref } from "@/data/siteConfig";
import MegaMenu from "./MegaMenu";
import MobileDrawer from "./MobileDrawer";
import { cn } from "@/lib/cn";

const navItemClass =
  "rounded-sm px-3 py-2 text-sm font-bold text-snow transition-colors hover:text-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const megaMenuId = useId();
  const pathname = usePathname();

  // Close both menus whenever the route changes (adjusting state during
  // render rather than in an effect, so there is no extra paint).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setServicesOpen(false);
    setMobileOpen(false);
  }

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <>
      {/* No backdrop-filter here: it would turn the header into the containing
          block for fixed children. The drawer also renders outside <header>. */}
      <header
        className={cn(
          "sticky top-0 z-40 border-b bg-ink transition-shadow duration-300 ease-out",
          scrolled
            ? "border-line shadow-[0_10px_30px_-20px_rgba(11,30,70,0.35)]"
            : "border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-8">
          <Logo />

          <nav
            aria-label="Main"
            className="hidden flex-1 items-center justify-center gap-1 lg:flex"
          >
            <div ref={menuRef}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls={megaMenuId}
                onClick={() => setServicesOpen((open) => !open)}
                className={cn(navItemClass, "inline-flex items-center gap-1")}
              >
                Services
                <ChevronDownIcon
                  className={cn(
                    "h-4 w-4 transition-transform duration-200 ease-out",
                    servicesOpen && "rotate-180",
                  )}
                />
              </button>
              {servicesOpen && <MegaMenu id={megaMenuId} />}
            </div>

            {mainNav.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(navItemClass, "nav-underline", active && "text-cyber")}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button href={bookCallHref} className="hidden lg:inline-flex">
              Book a call
            </Button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-lg text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber lg:hidden"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={mobileOpen} onClose={closeMobile} />
    </>
  );
}
