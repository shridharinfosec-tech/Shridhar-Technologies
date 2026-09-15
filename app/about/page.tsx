import type { Metadata } from "next";
import { aboutIntro, leadership, sisterBrandNote, values } from "@/data/about";
import { stats } from "@/data/stats";
import { siteConfig } from "@/data/siteConfig";
import CtaBand from "@/components/layout/CtaBand";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Eyebrow from "@/components/shared/Eyebrow";
import Link from "@/components/shared/Link";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import SectionHeader from "@/components/shared/SectionHeader";
import ProcessSteps from "@/components/home/ProcessSteps";
import { ArrowRightIcon } from "@/components/shared/Icons";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Shridhar Technologies is an AI-accelerated software studio with senior engineers in Vadodara, Mumbai and Ahmedabad, and the sister brand of Shridhar InfoSec Solutions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-night">
        <div className="mx-auto max-w-7xl px-6 pt-8 pb-12 sm:pb-16 lg:px-8">
          <Breadcrumb items={[{ name: "About", href: "/about" }]} />
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>About us</Eyebrow>
              <h1 className="font-display mt-4 text-3xl leading-tight font-extrabold text-snow sm:text-5xl">
                {aboutIntro.title}
              </h1>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-fog">
                {aboutIntro.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
            {/* [OWNER TO CONFIRM] Replace the stock photo with a real team or office photo. */}
            <ResponsiveImage
              src="/images/office"
              alt="Engineers working in an open-plan office"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] max-h-[480px] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section aria-label="Company in numbers" className="bg-ink">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="order-2 mt-1 text-sm text-fog">{stat.label}</dt>
              <dd className="font-display -order-1 text-4xl font-extrabold text-snow">
                {stat.value}
                {stat.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-line bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <SectionHeader eyebrow="Values" title="What we value" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <li key={value.title} className="rounded-xl border border-line bg-panel p-6">
                <h3 className="font-display text-lg font-bold text-snow">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-fog">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps id="process" className="bg-night" />

      {leadership.length > 0 && (
        <section className="bg-ink">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
            <SectionHeader eyebrow="Leadership" title="The people you will work with" />
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {leadership.map((leader) => (
                <li key={leader.name} className="rounded-xl border border-line p-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    width={96}
                    height={96}
                    loading="lazy"
                    className="h-24 w-24 rounded-full object-cover"
                  />
                  <h3 className="font-display mt-4 text-lg font-bold text-snow">{leader.name}</h3>
                  <p className="text-fog">{leader.role}</p>
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-11 items-center font-semibold text-cyber"
                    >
                      LinkedIn profile
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-snow">Part of the Shridhar group</h2>
            <p className="mt-4 leading-relaxed text-fog">{sisterBrandNote}</p>
            <a
              href={siteConfig.sisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-cyber hover:text-cyber-dark"
            >
              Visit Shridhar InfoSec Solutions
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-snow">How we use AI</h2>
            <p className="mt-4 leading-relaxed text-fog">
              AI speeds up scaffolding, testing and review on every project, and every
              line that reaches your repository is still read and owned by a named
              engineer. Architecture, security and data decisions are made by people.
            </p>
            <Link
              href="/how-we-work#ai-delivery"
              className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-cyber hover:text-cyber-dark"
            >
              See where AI fits in our delivery
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
