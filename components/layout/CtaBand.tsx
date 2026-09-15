import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";

export default function CtaBand({
  title = "Have a project in mind?",
  description = "Tell us what you're building and we'll get back to you with next steps within one business day.",
  primaryLabel = "Get a Quote",
  primaryHref = "/contact",
  secondaryLabel = "View Portfolio",
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
    <section className="relative overflow-hidden bg-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(67,186,255,0.16),transparent_45%),radial-gradient(circle_at_10%_90%,rgba(70,97,197,0.20),transparent_45%)]"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center lg:px-8">
        <Eyebrow onDeep>Let&apos;s build</Eyebrow>
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-lg text-on-deep">{description}</p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Button href={primaryHref}>{primaryLabel}</Button>
          <Button href={secondaryHref} variant="onDeep">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
