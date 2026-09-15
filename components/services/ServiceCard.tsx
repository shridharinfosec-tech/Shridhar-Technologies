import Link from "@/components/shared/Link";
import { ArrowRightIcon } from "@/components/shared/Icons";
import type { CategorySlug, Service } from "@/data/services";

export default function ServiceCard({
  service,
  categorySlug,
}: {
  service: Service;
  categorySlug: CategorySlug;
}) {
  return (
    <Link
      href={`/services/${categorySlug}/${service.slug}`}
      className="group flex h-full flex-col rounded-xl border border-line bg-panel p-6 transition-colors duration-200 ease-out hover:border-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber sm:p-8"
    >
      <span aria-hidden className="mb-6 block h-1 w-10 bg-electric transition-all duration-200 group-hover:w-16" />
      <h2 className="font-display text-lg font-extrabold text-snow">{service.name}</h2>
      <p className="mt-3 flex-1 leading-relaxed text-fog">{service.summary}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyber">
        Learn more
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
