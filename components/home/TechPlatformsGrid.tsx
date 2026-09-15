import { techGroups, techStack } from "@/data/techStack";
import Eyebrow from "@/components/shared/Eyebrow";

export default function TechPlatformsGrid({ compact = false }: { compact?: boolean }) {
  const groups = compact
    ? techGroups.filter((group) => group !== "Commerce")
    : techGroups;

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="max-w-2xl">
        <Eyebrow>Our stack</Eyebrow>
        <h2 className="font-display mt-4 text-3xl font-extrabold text-snow sm:text-4xl">
          Our technology stack
        </h2>
        <p className="mt-4 text-lg text-fog">
          We build on a focused, proven stack - chosen for reliability and how
          easy it is to hire for, not novelty. Layer by layer, here is what we
          work with.
        </p>
      </div>

      {/* Layered stack: one slab per layer, top to bottom */}
      <div className="mt-14 space-y-3">
        {groups.map((group, index) => {
          const techs = techStack.filter((tech) => tech.group === group);
          return (
            <div
              key={group}
              className="group relative overflow-hidden rounded-xl border border-line bg-night pt-6 pr-6 pb-6 pl-8 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-cyber hover:shadow-lg sm:flex sm:items-center sm:gap-8"
            >
              {/* Layer accent bar */}
              <span
                aria-hidden
                className="absolute top-0 left-0 h-full w-1.5 bg-electric transition-colors group-hover:bg-cyber"
              />

              {/* Layer label */}
              <div className="flex items-center gap-4 sm:w-52 sm:shrink-0">
                <span className="font-display text-3xl font-extrabold text-line-bright">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-bold text-snow">
                  {group}
                </span>
              </div>

              {/* Technologies in this layer */}
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-0">
                {techs.map((tech) => (
                  <div
                    key={tech.id}
                    className="group/logo flex items-center gap-2"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      width={32}
                      height={32}
                      loading="lazy"
                      className="h-8 w-8 object-contain transition-transform duration-200 ease-out group-hover/logo:scale-110"
                    />
                    <span className="text-sm font-medium text-fog">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
