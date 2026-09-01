import type { Metadata } from "next";
import { values, leadershipPlaceholders } from "@/data/about";
import { stats } from "@/data/stats";
import { siteConfig } from "@/data/siteConfig";
import CtaBand from "@/components/layout/CtaBand";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shridhar Technologies is a commercial software development company and sister brand of Shridhar InfoSec Solutions.",
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 pt-12 pb-24 lg:px-8">
        <Breadcrumb items={[{ name: "About", href: "/about" }]} />

        <h1 className="font-display text-4xl font-bold text-snow sm:text-5xl">
          About Shridhar Technologies
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-fog">
          <p>
            Shridhar Technologies is the software engineering half of the
            Shridhar group - sister brand of{" "}
            <a
              href={siteConfig.sisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cyber underline underline-offset-2 hover:text-electric"
            >
              Shridhar InfoSec Solutions
            </a>
            , a dedicated cybersecurity firm operating out of Vadodara,
            Mumbai, and Ahmedabad. We share the same leadership, contact
            infrastructure, and standards for client data handling as our
            sister firm, applied to a different discipline: building the
            software our clients run their business on.
          </p>
          <p>
            We work with founders shipping a first product, and with
            established companies modernizing systems that have outgrown
            their original architecture. What connects those engagements
            isn&apos;t the size of the client - it&apos;s a consistent
            standard for how we scope work, communicate progress, and hand
            off what we build.
          </p>
          <p>
            Our mission is straightforward: build software that actually
            works for the business it&apos;s built for, delivered by senior
            engineers who stand behind their decisions, on a timeline and
            budget agreed to upfront rather than discovered along the way.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-line">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/office.jpg"
            alt="The Shridhar Technologies team at work"
            className="aspect-[16/7] w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-y border-line py-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-snow">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-1 text-xs text-mist">{stat.label}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-16 text-2xl font-bold text-snow">
          What we value
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-line p-6">
              <h3 className="font-display text-lg font-semibold text-snow">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-16 text-2xl font-bold text-snow">
          Leadership
        </h2>
        <p className="mt-2 text-sm text-mist">
          Named profiles coming soon - roles below reflect the current team
          structure.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {leadershipPlaceholders.map((leader) => (
            <div
              key={leader.role}
              className="rounded-2xl border border-dashed border-line-bright p-6 text-center"
            >
              <div
                aria-hidden
                className="mx-auto h-16 w-16 rounded-full bg-night"
              />
              <p className="mt-4 text-sm font-medium text-mist">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
