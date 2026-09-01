import Link from "@/components/shared/Link";
import { services } from "@/data/services";

function Dot() {
  return <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-cyber" />;
}

export default function ServicesMarquee() {
  return (
    <div className="marquee overflow-hidden border-y border-line bg-night py-5">
      <div className="marquee-track flex w-max items-center gap-8">
        <div className="flex items-center gap-8">
          {services.map((service) => (
            <span key={service.slug} className="flex items-center gap-8">
              <Link
                href={`/services/${service.categories[0]}/${service.slug}`}
                className="text-sm font-semibold whitespace-nowrap text-mist uppercase tracking-wide transition-colors hover:text-cyber"
              >
                {service.name}
              </Link>
              <Dot />
            </span>
          ))}
        </div>
        <div aria-hidden="true" className="flex items-center gap-8">
          {services.map((service) => (
            <span key={service.slug} className="flex items-center gap-8">
              <span className="text-sm font-semibold whitespace-nowrap text-mist uppercase tracking-wide">
                {service.name}
              </span>
              <Dot />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
