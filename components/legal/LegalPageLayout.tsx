import type { LegalPage } from "@/data/legal";
import PageHero from "@/components/shared/PageHero";
import { slugify } from "@/lib/slugify";

export default function LegalPageLayout({ page }: { page: LegalPage }) {
  const sections = page.sections.map((section) => ({
    ...section,
    id: slugify(section.heading),
  }));

  return (
    <>
      <PageHero
        breadcrumb={[{ name: page.title, href: `/${page.slug}` }]}
        eyebrow="Legal"
        title={page.title}
        intro={page.intro}
      >
        <p className="mt-4 text-sm text-mist">Last updated: {page.lastUpdated}</p>
      </PageHero>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 sm:py-16 lg:grid-cols-[260px_1fr] lg:gap-16 lg:px-8">
        <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
          <details className="group rounded-xl border border-line p-4 lg:hidden">
            <summary className="flex min-h-11 cursor-pointer items-center font-display text-sm font-bold text-snow">
              On this page
            </summary>
            <TableOfContents sections={sections} />
          </details>
          <div className="hidden lg:block">
            <p className="font-display text-sm font-bold text-snow">On this page</p>
            <TableOfContents sections={sections} />
          </div>
        </nav>

        <article className="max-w-3xl space-y-12">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="font-display text-xl font-bold text-snow">
                <span className="mr-3 text-cyber">{String(index + 1).padStart(2, "0")}</span>
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="leading-relaxed text-fog">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </article>
      </div>
    </>
  );
}

function TableOfContents({ sections }: { sections: { id: string; heading: string }[] }) {
  return (
    <ol className="mt-3 space-y-1 text-sm">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="flex min-h-9 items-center text-fog hover:text-cyber"
          >
            {section.heading}
          </a>
        </li>
      ))}
    </ol>
  );
}
