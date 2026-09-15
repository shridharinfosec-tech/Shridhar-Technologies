import type { Metadata } from "next";
import { careerPerks, openRoles } from "@/data/careers";
import { siteConfig } from "@/data/siteConfig";
import CtaBand from "@/components/layout/CtaBand";
import Button from "@/components/shared/Button";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at Shridhar Technologies: build real products with a senior, AI-first engineering team across Vadodara, Mumbai and Ahmedabad.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  // [OWNER TO CONFIRM] Use a dedicated careers mailbox if there is one.
  const applyHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Job application")}`;

  return (
    <>
      <PageHero
        breadcrumb={[{ name: "Careers", href: "/careers" }]}
        eyebrow="Careers"
        title="Build software with a senior, AI-first team"
        intro="We hire experienced engineers and designers across Vadodara, Mumbai and Ahmedabad."
      />

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <SectionHeader eyebrow="Working here" title="What to expect" />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {careerPerks.map((perk) => (
              <li key={perk.title} className="rounded-xl border border-line p-6 sm:p-8">
                <h3 className="font-display text-lg font-bold text-snow">{perk.title}</h3>
                <p className="mt-2 leading-relaxed text-fog">{perk.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-night">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <SectionHeader eyebrow="Open roles" title="Current openings" />
          {openRoles.length > 0 ? (
            <ul className="mt-10 space-y-4">
              {openRoles.map((role) => (
                <li
                  key={role.title}
                  className="flex flex-col gap-4 rounded-xl border border-line bg-panel p-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-snow">{role.title}</h3>
                    <p className="mt-1 text-sm text-mist">
                      {role.location} · {role.type}
                    </p>
                    <p className="mt-2 text-fog">{role.summary}</p>
                  </div>
                  <Button href={applyHref} variant="ghost" className="shrink-0">
                    Apply
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-10 max-w-2xl rounded-xl border border-line bg-panel p-6 sm:p-8">
              <p className="leading-relaxed text-fog">
                There are no roles listed right now, but we are always glad to hear from
                experienced engineers and designers. Send your CV and a link to work you are
                proud of.
              </p>
              <Button href={applyHref} className="mt-6">
                Email your CV
              </Button>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
