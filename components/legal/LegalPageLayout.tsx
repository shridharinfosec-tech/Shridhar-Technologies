import type { LegalPage } from "@/data/legal";

export default function LegalPageLayout({ page }: { page: LegalPage }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <h1 className="font-display text-4xl font-bold text-snow">{page.title}</h1>
      <p className="mt-3 text-sm text-mist">Last updated: {page.lastUpdated}</p>
      <p className="mt-6 text-lg leading-relaxed text-fog">{page.intro}</p>

      <div className="mt-12 space-y-12">
        {page.sections.map((section, index) => (
          <section key={section.heading}>
            <h2 className="font-display text-xl font-semibold text-snow">
              <span className="mr-3 text-cyber">
                {String(index + 1).padStart(2, "0")}
              </span>
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {section.body.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className="leading-relaxed text-fog">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
