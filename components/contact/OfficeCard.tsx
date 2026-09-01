import type { Office } from "@/data/siteConfig";

export default function OfficeCard({ office }: { office: Office }) {
  return (
    <a
      href={office.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border border-line p-6 transition-colors duration-200 ease-out hover:border-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber"
    >
      <h3 className="font-display text-sm font-semibold text-snow">{office.label}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mist">{office.address}</p>
      <span className="mt-3 inline-block text-xs font-semibold text-cyber">
        Open in Google Maps →
      </span>
    </a>
  );
}
