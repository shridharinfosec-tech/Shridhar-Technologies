import Link from "@/components/shared/Link";
import type { Category } from "@/data/services";
import { getServicesByCategory } from "@/data/services";

export default function CategoryCard({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  return (
    <Link
      href={`/services/${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-line bg-panel p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-cyber hover:shadow-[0_20px_40px_-24px_rgba(11,30,70,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber"
    >
      <span
        aria-hidden
        className="ghost-number pointer-events-none absolute right-5 top-2 text-6xl"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span aria-hidden className="mb-6 block h-1 w-10 bg-electric transition-all duration-200 group-hover:w-16" />
      <h3 className="font-display text-xl font-extrabold text-snow">
        {category.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
        {category.description}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.08em] text-cyber">
        <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
        {getServicesByCategory(category.slug).length} Services
      </span>
    </Link>
  );
}
