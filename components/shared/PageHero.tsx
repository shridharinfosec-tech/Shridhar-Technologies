import type { ReactNode } from "react";
import Breadcrumb, { type BreadcrumbItem } from "@/components/shared/Breadcrumb";
import Eyebrow from "@/components/shared/Eyebrow";
import { cn } from "@/lib/cn";

// Hero band for inner pages: breadcrumb, eyebrow, descriptive H1 and intro.
export default function PageHero({
  breadcrumb,
  eyebrow,
  title,
  intro,
  tone = "night",
  children,
}: {
  breadcrumb: BreadcrumbItem[];
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "night" | "deep";
  children?: ReactNode;
}) {
  const deep = tone === "deep";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        deep ? "bg-deep" : "border-b border-line bg-night",
      )}
    >
      {deep && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(67,186,255,0.16),transparent_50%)]"
        />
      )}
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-12 sm:pb-16 lg:px-8">
        <Breadcrumb items={breadcrumb} onDeep={deep} />
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow onDeep={deep}>{eyebrow}</Eyebrow>}
          <h1
            className={cn(
              "font-display mt-4 text-3xl leading-tight font-extrabold sm:text-5xl",
              deep ? "text-white" : "text-snow",
            )}
          >
            {title}
          </h1>
          {intro && (
            <p className={cn("mt-4 text-lg leading-relaxed", deep ? "text-on-deep" : "text-fog")}>
              {intro}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
