import Link from "@/components/shared/Link";
import type { Service } from "@/data/services";

export default function RelatedServices({ services }: { services: Service[] }) {
  if (services.length === 0) return null;

  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-snow">
        Related services
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.categories[0]}/${service.slug}`}
              className="block rounded-xl border border-line px-5 py-4 text-sm font-medium text-snow transition-colors hover:border-cyber hover:text-cyber"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
