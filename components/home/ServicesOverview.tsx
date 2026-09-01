import { categories } from "@/data/services";
import CategoryCard from "@/components/services/CategoryCard";
import Eyebrow from "@/components/shared/Eyebrow";

export default function ServicesOverview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="max-w-2xl">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="font-display mt-4 text-3xl font-extrabold text-snow sm:text-4xl">
          Five ways we help you build
        </h2>
        <p className="mt-4 text-lg text-fog">
          Most engagements combine two or three of these rather than a single
          service in isolation.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <CategoryCard key={category.slug} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
