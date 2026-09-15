import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import { bookCallHref } from "@/data/siteConfig";

// Final call to action. Pass a secondary CTA that fits the page, so visitors
// are never sent to the page they are already on.
export default function CtaBand({
  title = "Have a product to ship?",
  description = "Tell us what you are building. Within one business day you will get a reply with a rough timeline and next steps.",
  primaryLabel = "Book a free scoping call",
  primaryHref = bookCallHref,
  secondaryLabel = "See recent work",
  secondaryHref = "/portfolio",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,rgba(67,186,255,0.16),transparent_45%),radial-gradient(circle_at_10%_90%,rgba(70,97,197,0.20),transparent_45%)]"
      />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-16 text-center sm:py-24 lg:px-8">
        <Eyebrow onDeep>Let&apos;s build</Eyebrow>
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-lg text-on-deep">{description}</p>
        <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button href={primaryHref} className="w-full sm:w-auto">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="onDeep" className="w-full sm:w-auto">
            {secondaryLabel}
          </Button>
        </div>
        <p className="text-sm text-on-deep">No commitment. Reply within one business day.</p>
      </div>
    </section>
  );
}
