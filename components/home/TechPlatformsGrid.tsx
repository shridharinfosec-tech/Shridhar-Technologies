import { techGroups, techStack } from "@/data/techStack";
import TechLogo from "@/components/shared/TechLogo";
import Eyebrow from "@/components/shared/Eyebrow";

export default function TechPlatformsGrid({ compact = false }: { compact?: boolean }) {
  const groups = compact ? techGroups.filter((group) => group !== "Commerce") : techGroups;

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="max-w-2xl">
        <Eyebrow>Our stack</Eyebrow>
        <h2 className="font-display mt-4 text-3xl font-extrabold text-snow sm:text-4xl">
          Technology platforms
        </h2>
        <p className="mt-4 text-lg text-fog">
          We build on a focused, proven stack — chosen for reliability and how
          easy it is to hire for, not novelty.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {groups.map((group) => (
          <div key={group}>
            <h3 className="text-xs font-semibold tracking-widest text-mist uppercase">
              {group}
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {techStack
                .filter((tech) => tech.group === group)
                .map((tech) => (
                  <TechLogo key={tech.id} name={tech.name} logo={tech.logo} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
