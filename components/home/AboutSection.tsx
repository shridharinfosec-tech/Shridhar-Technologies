import Link from "@/components/shared/Link";
import Eyebrow from "@/components/shared/Eyebrow";

const features = [
  {
    title: "Senior Engineers",
    description:
      "A team of 25+ senior engineers who own outcomes, not just tickets.",
    icon: (
      <path
        d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.3 7.2 17l.9-5.4-3.9-3.8 5.4-.8L12 2z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "End-to-End Delivery",
    description:
      "From first idea to production - and the years of support that follow.",
    icon: (
      <>
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 7v5l3.5 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

export default function AboutSection() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left - content */}
          <div>
            <Eyebrow>About Company</Eyebrow>
            <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold text-snow sm:text-4xl">
              Your partner for
              <br />
              software that lasts
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-fog">
              Shridhar Technologies is the software engineering partner for
              founders shipping a first product and for established companies
              modernizing systems that have outgrown their architecture. We help
              businesses grow through custom software development, cloud, AI, and
              product engineering.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title}>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-9 w-9 text-cyber"
                    aria-hidden
                  >
                    {feature.icon}
                  </svg>
                  <h3 className="font-display mt-4 text-lg font-bold text-snow">
                    {feature.title}
                  </h3>
                  <div className="mt-3 h-px w-full bg-line-bright" />
                  <p className="mt-3 text-sm leading-relaxed text-fog">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - overlapping image collage */}
          <div>
            <div className="relative hidden h-[600px] w-full md:block lg:h-[640px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/meeting.jpg"
                alt="The team collaborating in the studio"
                className="absolute top-0 left-0 h-[58%] w-[70%] rounded-xl object-cover shadow-2xl ring-1 ring-black/5"
                loading="lazy"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/team.jpg"
                alt="Engineers reviewing work together"
                className="absolute top-[26%] right-0 h-[40%] w-[44%] rounded-xl object-cover shadow-2xl ring-4 ring-ink"
                loading="lazy"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/office.jpg"
                alt="Inside our workspace"
                className="absolute bottom-0 left-[24%] h-[48%] w-[58%] rounded-xl object-cover shadow-2xl ring-4 ring-ink"
                loading="lazy"
              />
            </div>

            {/* Mobile fallback - simple stack */}
            <div className="grid gap-4 md:hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/meeting.jpg"
                alt="The team collaborating in the studio"
                className="h-56 w-full rounded-xl object-cover shadow-lg"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/team.jpg"
                  alt="Engineers reviewing work together"
                  className="h-32 w-full rounded-xl object-cover shadow-lg"
                  loading="lazy"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/office.jpg"
                  alt="Inside our workspace"
                  className="h-32 w-full rounded-xl object-cover shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/about"
                className="font-display inline-flex items-center gap-2 text-sm font-bold tracking-wide text-cyber uppercase transition-colors hover:text-electric"
              >
                <span aria-hidden>→</span> Learn more about us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
