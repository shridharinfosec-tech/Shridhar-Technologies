import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import ContactForm from "@/components/contact/ContactForm";
import OfficeCard from "@/components/contact/OfficeCard";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shridhar Technologies — offices in Vadodara, Mumbai, and Ahmedabad.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 pb-24 lg:px-8">
      <Breadcrumb items={[{ name: "Contact", href: "/contact" }]} />
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-snow sm:text-5xl">
          Let&apos;s talk about your project
        </h1>
        <p className="mt-4 text-lg text-fog">
          Tell us what you&apos;re building and we&apos;ll get back to you
          with next steps within one business day.
        </p>
      </div>

      <div className="mt-12 grid gap-16 lg:grid-cols-2">
        <ContactForm />

        <div>
          <div className="space-y-3">
            <a
              href={siteConfig.phoneHref}
              className="block text-lg font-semibold text-snow hover:text-cyber"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-lg font-semibold text-snow hover:text-cyber"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="mt-8 space-y-4">
            {siteConfig.offices.map((office) => (
              <OfficeCard key={office.label} office={office} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
