import Button from "@/components/shared/Button";
import { bookCallHref } from "@/data/siteConfig";

// Placed inside MDX posts after the second section: <InlineCta />
export default function InlineCta() {
  return (
    <aside className="my-10 rounded-xl border border-cyber/20 bg-cyber/5 p-6 sm:p-8">
      <p className="font-display text-lg font-bold text-snow">
        Planning an MVP? Get a free scoping call.
      </p>
      <p className="mt-2 leading-relaxed text-fog">
        Tell us what you are building and we will reply within one business day.
      </p>
      <Button href={bookCallHref} className="mt-5">
        Book a free scoping call
      </Button>
    </aside>
  );
}
