import type { Metadata } from "next";
import Button from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false, follow: false },
};

const swatches: { name: string; value: string; text?: string }[] = [
  { name: "ds-ink", value: "#0A1020", text: "#E9EEF5" },
  { name: "ds-panel", value: "#101827", text: "#E9EEF5" },
  { name: "edge", value: "#1E293B", text: "#E9EEF5" },
  { name: "edge2", value: "#2C3A4E", text: "#E9EEF5" },
  { name: "paper", value: "#F6F8FB", text: "#0A1020" },
  { name: "pline", value: "#DFE6F0", text: "#0A1020" },
  { name: "acc", value: "#4C7DFF", text: "#ffffff" },
  { name: "amb", value: "#F2A93B", text: "#0A1020" },
  { name: "mint", value: "#57D9A3", text: "#0A1020" },
  { name: "dim", value: "#8195AF", text: "#0A1020" },
  { name: "bodytext", value: "#556377", text: "#ffffff" },
];

const typeScale = [
  { label: "Page title / clamp(28,4.3vw,48)", cls: "text-5xl", font: "font-display" },
  { label: "Section heading / clamp(22,3.1vw,33)", cls: "text-3xl", font: "font-display" },
  { label: "Card heading", cls: "text-xl", font: "font-display" },
  { label: "Body / Inter", cls: "text-base", font: "font-body" },
  { label: "Small / Inter", cls: "text-sm", font: "font-body" },
  { label: "Eyebrow / JetBrains Mono", cls: "text-xs tracking-widest uppercase", font: "font-mono" },
];

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-12">
      <h2 className="font-mono mb-8 text-xs tracking-widest text-mist uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      <p className="font-mono text-xs tracking-widest text-acc uppercase">
        Internal / noindex
      </p>
      <h1 className="font-display mt-3 text-4xl font-bold text-snow sm:text-5xl">
        Design system
      </h1>
      <p className="mt-4 max-w-2xl text-fog">
        Revamp phase 2 vocabulary: fonts, colour tokens and shared primitives.
        This page is excluded from search and the sitemap; it exists so tokens
        and components can be checked in one place.
      </p>

      <Row title="Colour tokens">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {swatches.map((s) => (
            <div
              key={s.name}
              className="flex h-24 flex-col justify-between rounded-xl border border-line p-4"
              style={{ backgroundColor: s.value, color: s.text }}
            >
              <span className="font-mono text-xs">{s.name}</span>
              <span className="font-mono text-xs opacity-80">{s.value}</span>
            </div>
          ))}
        </div>
      </Row>

      <Row title="Type scale">
        <div className="space-y-5">
          {typeScale.map((t) => (
            <div key={t.label}>
              <span className="font-mono text-[11px] tracking-widest text-mist uppercase">
                {t.label}
              </span>
              <p className={`${t.font} ${t.cls} font-bold text-snow`}>
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          ))}
        </div>
      </Row>

      <Row title="Buttons">
        <div className="flex flex-wrap gap-4">
          <Button href="#">Primary</Button>
          <Button href="#" variant="ghost">
            Ghost
          </Button>
          <Button href="#" variant="text">
            Text link →
          </Button>
        </div>
        <div className="mt-6 rounded-xl bg-deep p-6">
          <Button href="#" variant="onDeep">
            On dark
          </Button>
        </div>
      </Row>

      <Row title="Cards">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-panel p-6">
            <h3 className="font-display text-lg font-bold text-snow">
              Light card
            </h3>
            <p className="mt-2 text-sm text-fog">
              Surface on paper. Border uses pline, hover lifts by 2 to 4px.
            </p>
          </div>
          <div className="rounded-xl border border-edge bg-ds-panel p-6">
            <h3 className="font-display text-lg font-bold text-white">
              Dark card
            </h3>
            <p className="mt-2 text-sm text-dim">
              Raised panel on ds-ink. Border uses edge, text uses dim.
            </p>
          </div>
        </div>
      </Row>
    </div>
  );
}
