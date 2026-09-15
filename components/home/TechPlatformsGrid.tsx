import { techGroups, techStack } from "@/data/techStack";
import SectionHeader from "@/components/shared/SectionHeader";

const intro =
  "A proven, widely used stack, chosen so your future team can hire for it and maintain it.";

// One tile per logo (React Native reuses the React logo).
const logoWall = techStack.filter(
  (tech, index) => techStack.findIndex((other) => other.logo === tech.logo) === index,
);

export default function TechPlatformsGrid({
  variant = "layered",
}: {
  variant?: "wall" | "layered";
}) {
  if (variant === "wall") {
    return (
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader eyebrow="Our stack" title="Tools we build with" intro={intro} />
          <ul className="mt-10 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8">
            {logoWall.map((tech) => (
              <li
                key={tech.id}
                title={tech.name}
                className="group flex aspect-square items-center justify-center rounded-xl border border-line bg-panel p-3"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.logo}
                  alt={tech.name}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="h-10 w-10 object-contain opacity-70 grayscale transition duration-200 ease-out group-hover:opacity-100 group-hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <SectionHeader eyebrow="Our stack" title="Tools we build with" intro={intro} />

      <div className="mt-12 space-y-3">
        {techGroups.map((group) => {
          const techs = techStack.filter((tech) => tech.group === group);
          if (techs.length === 0) return null;
          return (
            <div
              key={group}
              className="relative overflow-hidden rounded-xl border border-line bg-night py-6 pr-6 pl-8 sm:flex sm:items-center sm:gap-8"
            >
              <span aria-hidden className="absolute top-0 left-0 h-full w-1.5 bg-electric" />
              <h3 className="font-display text-lg font-bold text-snow sm:w-44 sm:shrink-0">
                {group}
              </h3>
              <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-0">
                {techs.map((tech) => (
                  <li key={tech.id} className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tech.logo}
                      alt=""
                      width={32}
                      height={32}
                      loading="lazy"
                      className="h-8 w-8 object-contain"
                    />
                    <span className="text-sm font-medium text-fog">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
