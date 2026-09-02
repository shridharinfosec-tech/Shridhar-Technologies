import Link from "@/components/shared/Link";
import Logo from "@/components/shared/Logo";
import { siteConfig } from "@/data/siteConfig";
import { categories } from "@/data/services";

const companyLinks = [
  { label: "About", href: "/about" },
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
  // Any social left as "#" is dropped so no placeholder links ship.
].filter((social) => social.href && social.href !== "#");

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mono text-xs font-semibold tracking-widest text-white uppercase">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-deep text-on-deep">
      {/* Subtle accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(76,125,255,0.12),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + contact */}
          <div>
            <Logo onDeep />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-deep">
              {siteConfig.description}
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href={siteConfig.phoneHref}
                className="block font-semibold text-white transition-colors hover:text-acc"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-on-deep transition-colors hover:text-acc"
              >
                {siteConfig.email}
              </a>
            </div>
            {socials.length > 0 && (
              <ul className="mt-5 flex items-center gap-3">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-acc hover:text-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acc"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                        <path d={social.icon} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Services */}
          <div>
            <ColumnHeading>Services</ColumnHeading>
            <ul className="mt-4 space-y-3 text-sm">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/services/${category.slug}`}
                    className="text-on-deep transition-colors hover:text-acc"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <ColumnHeading>Company</ColumnHeading>
            <ul className="mt-4 space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-deep transition-colors hover:text-acc"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <ColumnHeading>Offices</ColumnHeading>
            <ul className="mt-4 space-y-4 text-sm">
              {siteConfig.offices.map((office) => (
                <li key={office.label}>
                  {office.mapsUrl ? (
                    <a
                      href={office.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <span className="font-display font-bold text-white group-hover:text-acc">
                        {office.label}
                      </span>
                      <span className="mt-1 block leading-relaxed text-on-deep">
                        {office.address}
                      </span>
                    </a>
                  ) : (
                    <div className="block">
                      <span className="font-display font-bold text-white">
                        {office.label}
                      </span>
                      <span className="mt-1 block leading-relaxed text-on-deep">
                        {office.address}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mist">
            Copyright © {new Date().getFullYear()} {siteConfig.name}. All Rights
            Reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-mist">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-acc">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
