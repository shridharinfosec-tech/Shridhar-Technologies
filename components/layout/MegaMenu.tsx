import Link from "@/components/shared/Link";
import Button from "@/components/shared/Button";
import { ArrowRightIcon } from "@/components/shared/Icons";
import { categories, getServicesByCategory } from "@/data/services";
import { bookCallHref } from "@/data/siteConfig";

export default function MegaMenu({ id }: { id: string }) {
  return (
    <div
      id={id}
      role="region"
      aria-label="Services"
      className="absolute top-full left-1/2 z-50 mt-1 w-[calc(100vw-2rem)] max-w-7xl -translate-x-1/2 overflow-hidden rounded-xl border border-line bg-ink shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-8 p-8 xl:grid-cols-6">
        {categories.map((category) => (
          <div key={category.slug}>
            <Link
              href={`/services/${category.slug}`}
              className="font-display text-sm font-bold text-snow hover:text-cyber"
            >
              {category.name}
            </Link>
            <p className="mt-1 text-xs leading-relaxed text-mist">{category.description}</p>
            <ul className="mt-4 space-y-2">
              {getServicesByCategory(category.slug).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${category.slug}/${service.slug}`}
                    className="text-sm text-fog transition-colors hover:text-cyber"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col rounded-lg bg-deep p-6">
          <p className="font-display text-base font-bold text-white">
            Not sure where to start?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-on-deep">
            Book a free 20 minute scoping call.
          </p>
          <Button href={bookCallHref} className="mt-5">
            Book a call
          </Button>
          <Link
            href="/services"
            className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-electric hover:text-white"
          >
            View all services
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
