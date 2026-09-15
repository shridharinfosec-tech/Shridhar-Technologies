import Link from "@/components/shared/Link";
import Logo from "@/components/shared/Logo";
import { MapPinIcon } from "@/components/shared/Icons";
import { formatAddress, siteConfig } from "@/data/siteConfig";
import { outcomes } from "@/data/outcomes";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/portfolio" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Data Security", href: "/data-security-policy" },
];

const socials = [
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
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    icon: "M13.5 21v-8H16l.5-3h-3V8.2c0-.9.3-1.5 1.6-1.5H16.6V4c-.3 0-1.3-.1-2.4-.1-2.3 0-3.9 1.4-3.9 4V10H7.7v3h2.6v8h3.2z",
  },
  {
    label: "Medium",
    href: siteConfig.social.medium,
    icon: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
  },
].filter((social) => social.href !== "#");

// 44px tall hit areas on phones, compact rows from sm up.
const footerLink =
  "inline-flex min-h-11 items-center text-on-deep transition-colors hover:text-electric focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric sm:min-h-0";

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-sm font-bold text-white">{children}</h2>;
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep text-on-deep">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-28 sm:pb-8 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo onDeep />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{siteConfig.tagline}</p>
            <div className="mt-4 flex flex-col items-start text-sm">
              <a href={siteConfig.phoneHref} className={`${footerLink} font-semibold text-white`}>
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className={`${footerLink} sm:mt-2`}>
                {siteConfig.email}
              </a>
            </div>
            {socials.length > 0 && (
              <ul className="mt-5 flex items-center gap-3">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-electric hover:text-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
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

          <div>
            <ColumnHeading>What we build</ColumnHeading>
            <ul className="mt-3 text-sm sm:mt-4 sm:space-y-3">
              {outcomes.map((outcome) => (
                <li key={outcome.href}>
                  <Link href={outcome.href} className={footerLink}>
                    {outcome.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>Company</ColumnHeading>
            <ul className="mt-3 text-sm sm:mt-4 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>Offices</ColumnHeading>
            <ul className="mt-4 space-y-4 text-sm">
              {siteConfig.offices.map((office) => (
                <li key={office.label}>
                  <p className="font-display font-bold text-white">{office.label}</p>
                  <p className="mt-1 hidden leading-relaxed sm:block">{formatAddress(office)}</p>
                  {office.mapsUrl && (
                    <a
                      href={office.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${footerLink} gap-1.5 font-semibold text-electric sm:mt-2`}
                    >
                      <MapPinIcon className="h-4 w-4" />
                      View on map
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={footerLink}>
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
