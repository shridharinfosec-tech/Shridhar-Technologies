import Link from "@/components/shared/Link";
import { ArrowRightIcon } from "@/components/shared/Icons";
import { serviceHref, type Service } from "@/data/services";

export default function RelatedServices({ services }: { services: Service[] }) {
  if (services.length === 0) return null;

  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-snow">Related services</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={serviceHref(service)}
              className="group flex min-h-11 items-center justify-between gap-3 rounded-xl border border-line px-5 py-4 font-semibold text-snow transition-colors hover:border-cyber hover:text-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber"
            >
              {service.name}
              <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
