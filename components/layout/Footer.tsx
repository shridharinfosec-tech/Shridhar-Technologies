import Link from "@/components/shared/Link";
import Logo from "@/components/shared/Logo";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Data Security", href: "/data-security-policy" },
];

const socials = [
  {
    label: "X",
    href: siteConfig.social.x,
    icon: "M17.5 3h2.6l-5.7 6.5L21 21h-5.3l-4.1-5.4L6.8 21H4.2l6.1-7L3 3h5.4l3.7 4.9L17.5 3zm-.9 16.4h1.4L7.5 4.5H6l10.6 14.9z",
  },
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    icon: "M13.5 21v-8H16l.5-3h-3V8.2c0-.9.3-1.5 1.6-1.5H16.6V4c-.3 0-1.3-.1-2.4-.1-2.3 0-3.9 1.4-3.9 4V10H7.7v3h2.6v8h3.2z",
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: "M6.9 8.3H4V21h2.9V8.3zM5.45 3.5a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM21 21v-7c0-3.2-1.7-4.7-4-4.7-1.85 0-2.65 1-3.1 1.75V8.3H11V21h2.9v-6.5c0-.35.03-.7.13-.95.3-.7.9-1.4 1.9-1.4 1.35 0 1.9 1 1.9 2.55V21H21z",
  },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: "M12 4.4c2.5 0 2.8 0 3.75.05.9.04 1.4.2 1.73.33.43.17.74.37 1.07.7.33.33.53.64.7 1.07.13.33.29.83.33 1.73.05.95.05 1.25.05 3.72s0 2.77-.05 3.72c-.04.9-.2 1.4-.33 1.73-.17.43-.37.74-.7 1.07-.33.33-.64.53-1.07.7-.33.13-.83.29-1.73.33-.95.05-1.25.05-3.75.05s-2.8 0-3.75-.05c-.9-.04-1.4-.2-1.73-.33a2.9 2.9 0 01-1.07-.7 2.9 2.9 0 01-.7-1.07c-.13-.33-.29-.83-.33-1.73C4.4 14.77 4.4 14.47 4.4 12s0-2.77.05-3.72c.04-.9.2-1.4.33-1.73.17-.43.37-.74.7-1.07.33-.33.64-.53 1.07-.7.33-.13.83-.29 1.73-.33C9.2 4.4 9.5 4.4 12 4.4zm0 3.7a3.9 3.9 0 100 7.8 3.9 3.9 0 000-7.8zm0 6.43a2.53 2.53 0 110-5.06 2.53 2.53 0 010 5.06zM16.35 7a.92.92 0 100 1.84.92.92 0 000-1.84z",
  },
];

// Hand-drawn circuit-board artwork for the footer side edges. Faint traces
// with a few electric-blue nodes; masked so it dissolves toward the centre.
function CircuitSide({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 320 640"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute top-0 hidden h-full w-[40%] max-w-sm md:block ${className}`}
      style={{
        maskImage: "linear-gradient(to right, black 30%, transparent 92%)",
        WebkitMaskImage: "linear-gradient(to right, black 30%, transparent 92%)",
      }}
    >
      {/* Traces */}
      <g stroke="#c7d3e8" strokeOpacity="0.14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 70 H70 V130 H150 V90 H240" />
        <path d="M40 0 V60 H110 V180 H30" />
        <path d="M0 230 H90 V300 H190 V240 H300" />
        <path d="M0 400 H60 V340 H160 V440 H280 V520" />
        <path d="M0 560 H120 V480 H210" />
        <path d="M300 130 H230 V210 H140" />
        <path d="M180 640 V560 H250 V600 H320" />
        <path d="M300 300 V370 H210" />
      </g>

      {/* Faint nodes */}
      <g fill="#c7d3e8" fillOpacity="0.22">
        <circle cx="70" cy="130" r="3" />
        <circle cx="150" cy="90" r="3" />
        <circle cx="110" cy="180" r="3" />
        <circle cx="90" cy="300" r="3" />
        <circle cx="190" cy="240" r="3" />
        <circle cx="60" cy="340" r="3" />
        <circle cx="160" cy="440" r="3" />
        <circle cx="120" cy="480" r="3" />
        <circle cx="230" cy="210" r="3" />
        <circle cx="250" cy="600" r="3" />
        <circle cx="210" cy="370" r="3" />
      </g>

      {/* Electric accent nodes + pads */}
      <g fill="#43baff">
        <circle cx="240" cy="90" r="4" />
        <circle cx="280" cy="520" r="4" />
        <circle cx="300" cy="130" r="4" />
        <rect x="144" y="87" width="6" height="6" rx="1" />
        <rect x="157" y="437" width="6" height="6" rx="1" />
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-deep text-on-deep">
      {/* Subtle accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(67,186,255,0.12),transparent_55%)]"
      />

      {/* Circuit artwork on the side edges, fading toward the centre */}
      <CircuitSide className="left-0" />
      <CircuitSide className="right-0 -scale-x-100" />

      <div className="relative mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Logo onDeep />
        </div>

        {/* Offices - full addresses */}
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {siteConfig.offices.map((office) => (
            <div key={office.label} className="flex flex-col items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-electric/10 text-electric ring-1 ring-electric/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden
                >
                  <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <p className="font-display mt-4 text-sm font-bold text-white">
                {office.label}
              </p>
              <a
                href={office.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 max-w-xs text-sm leading-relaxed text-on-deep transition-colors hover:text-electric"
              >
                {office.address}
              </a>
            </div>
          ))}
        </div>

        {/* Email + phone */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-electric"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-electric" aria-hidden>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-electric"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-electric" aria-hidden>
              <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8.1 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.8.6 2.7.7a2 2 0 011.8 2.1z" />
            </svg>
            {siteConfig.phone}
          </a>
        </div>

        {/* Nav links */}
        <nav className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm font-bold text-white transition-colors hover:text-electric"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="mt-8 text-sm text-mist">
          Copyright © {new Date().getFullYear()} {siteConfig.name}. All Rights
          Reserved.
        </p>

        {/* Socials */}
        <ul className="mt-6 flex items-center justify-center gap-3">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-electric hover:text-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d={social.icon} />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        {/* Legal */}
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-mist">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-electric">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
