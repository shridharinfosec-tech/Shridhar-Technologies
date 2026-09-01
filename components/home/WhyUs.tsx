import { differentiators } from "@/data/differentiators";
import { stats } from "@/data/stats";
import Link from "@/components/shared/Link";
import Eyebrow from "@/components/shared/Eyebrow";

// One simple line-icon per card, matching each differentiator.
const cardIcons = [
  <path
    key="i"
    d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.3 7.2 17l.9-5.4-3.9-3.8 5.4-.8L12 2z"
  />,
  <path key="i" d="M4 20v-2a5 5 0 015-5h6a5 5 0 015 5v2M12 3a4 4 0 100 8 4 4 0 000-8z" />,
  <path key="i" d="M4 6h16M4 12h10M4 18h7M20 15l-4 6 6-3-6-3z" />,
  <path key="i" d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />,
];

const banners = [
  {
    stat: stats[0], // Projects delivered
    heading: "Projects Delivered",
    description:
      "Shipped and running in production across logistics, healthcare, fintech, and more.",
    image: "/images/laptop.jpg",
    tint: "from-deep/95 via-deep/70 to-electric/25",
  },
  {
    stat: stats[2], // Industries served
    heading: "Industries Served",
    description:
      "From first-time founders to established enterprises modernizing legacy systems.",
    image: "/images/devices.jpg",
    tint: "from-deep/95 via-deep/70 to-violet/35",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-deep">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow onDeep className="justify-center">
            Why Choose Us
          </Eyebrow>
          <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold text-white sm:text-4xl">
            Engineering the software
            <br />
            your business runs on
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-200 ease-out hover:border-electric/50"
            >
              <span
                aria-hidden
                className="font-display absolute -top-3 right-4 text-6xl font-extrabold text-white/[0.06] select-none"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="font-display relative text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-on-deep">
                {item.description}
              </p>

              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-wide text-electric uppercase transition-colors hover:text-white"
              >
                <span aria-hidden>→</span> Learn More
              </Link>

              <svg
                viewBox="0 0 24 24"
                aria-hidden
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none absolute right-5 bottom-5 h-10 w-10 text-white/15 transition-colors duration-200 group-hover:text-electric/40"
              >
                {cardIcons[index % cardIcons.length]}
              </svg>
            </div>
          ))}
        </div>

        {/* Stat banners */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {banners.map((banner) => (
            <div
              key={banner.heading}
              className="relative overflow-hidden rounded-xl bg-deep-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={banner.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${banner.tint}`}
              />
              <div className="relative p-10">
                <p className="font-display text-5xl font-extrabold text-white">
                  {banner.stat.value}
                  {banner.stat.suffix}
                </p>
                <h3 className="font-display mt-3 text-xl font-bold text-white">
                  {banner.heading}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-on-deep">
                  {banner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
