import Link from "@/components/shared/Link";
import { categories, getServicesByCategory } from "@/data/services";

export default function MegaMenu({ id }: { id: string }) {
  return (
    <div
      id={id}
      role="region"
      aria-label="Services"
      className="absolute top-full left-1/2 z-50 mt-3 w-[calc(100vw-2rem)] max-w-7xl -translate-x-1/2 isolate overflow-hidden rounded-xl border border-line bg-ink shadow-2xl"
    >
      {/* Decorative circuit-board background */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full text-snow/[0.04]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id={`${id}-circuit`}
            width="160"
            height="160"
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M0 24 H48 V72 H104 V24 H160" />
              <path d="M24 160 V116 H84 V80" />
              <path d="M160 104 H116 V148" />
              <path d="M0 128 H36 V96" />
              <path d="M132 0 V44 H160" />
            </g>
            <g fill="currentColor">
              <circle cx="48" cy="72" r="3.5" />
              <circle cx="104" cy="24" r="3.5" />
              <circle cx="84" cy="80" r="3.5" />
              <circle cx="116" cy="148" r="3.5" />
              <circle cx="36" cy="96" r="3.5" />
              <circle cx="132" cy="44" r="3.5" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id}-circuit)`} />
      </svg>

      <div className="relative z-10 grid grid-cols-5 gap-8 p-8 lg:p-10">
        {categories.map((category) => (
          <div key={category.slug}>
            <Link
              href={`/services/${category.slug}`}
              className="font-display text-sm font-semibold text-snow hover:text-cyber"
            >
              {category.name}
            </Link>
            <ul className="mt-4 space-y-3">
              {getServicesByCategory(category.slug).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${category.slug}/${service.slug}`}
                    className="text-sm text-mist transition-colors hover:text-cyber"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
