import type { Metadata } from "next";
import { formatAddress, siteConfig } from "@/data/siteConfig";
import ContactForm from "@/components/contact/ContactForm";
import PageHero from "@/components/shared/PageHero";
import {
  CalendarIcon,
  ChatIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/shared/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Shridhar Technologies what you want to build. We reply within one business day with questions, a rough timeline and a budget range.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  "We reply within one business day.",
  "A 20 minute call to understand your goals.",
  "A written plan with timeline and fixed price within a week.",
];

const quickActionClass =
  "flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 border-line-bright bg-ink px-3 text-sm font-bold text-snow transition-colors hover:border-cyber hover:text-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber";

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ name: "Contact", href: "/contact" }]}
        eyebrow="Contact"
        title="Tell us what you want to build"
        intro="Share a few details and we will reply within one business day with questions, a rough timeline and a budget range."
      >
        <div className="mt-8 grid grid-cols-3 gap-3 lg:hidden">
          <a href={siteConfig.phoneHref} className={quickActionClass}>
            <PhoneIcon className="h-4 w-4" />
            Call
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={quickActionClass}
          >
            <ChatIcon className="h-4 w-4" />
            WhatsApp
          </a>
          {siteConfig.bookingUrl ? (
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={quickActionClass}
            >
              <CalendarIcon className="h-4 w-4" />
              Book a call
            </a>
          ) : (
            <a href={`mailto:${siteConfig.email}`} className={quickActionClass}>
              <MailIcon className="h-4 w-4" />
              Email
            </a>
          )}
        </div>
      </PageHero>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 sm:py-16 lg:grid-cols-[1fr_380px] lg:gap-16 lg:px-8">
        <ContactForm />

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl bg-deep p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-white">What happens next</h2>
            <ol className="mt-6 space-y-5">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-electric/50 text-sm font-bold text-electric">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-on-deep">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-xl border border-line p-6">
            <h2 className="font-display text-lg font-bold text-snow">Talk to us directly</h2>
            <ul className="mt-3 text-sm">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex min-h-11 items-center gap-3 font-semibold text-snow hover:text-cyber"
                >
                  <PhoneIcon className="h-4 w-4 text-cyber" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center gap-3 font-semibold text-snow hover:text-cyber"
                >
                  <ChatIcon className="h-4 w-4 text-cyber" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex min-h-11 items-center gap-3 font-semibold break-all text-snow hover:text-cyber"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-cyber" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-line p-6">
            <h2 className="font-display text-lg font-bold text-snow">Offices</h2>
            <ul className="mt-4 space-y-4 text-sm">
              {siteConfig.offices.map((office) => (
                <li key={office.label}>
                  <p className="font-semibold text-snow">{office.label}</p>
                  <p className="mt-1 leading-relaxed text-fog">{formatAddress(office)}</p>
                  {office.mapsUrl && (
                    <a
                      href={office.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-cyber hover:text-cyber-dark"
                    >
                      <MapPinIcon className="h-4 w-4" />
                      Open in Google Maps
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
