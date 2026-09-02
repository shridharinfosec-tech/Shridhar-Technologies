import type { Office } from "@/data/siteConfig";

export default function OfficeCard({ office }: { office: Office }) {
  const cardClass =
    "block rounded-2xl border border-line p-6 transition-colors duration-200 ease-out";

  const body = (
    <>
      <h3 className="font-display text-sm font-semibold text-snow">
        {office.label}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-mist">{office.address}</p>
      {office.mapsUrl && (
        <span className="mt-3 inline-block text-xs font-semibold text-cyber">
          Open in Google Maps →
        </span>
      )}
    </>
  );

  if (office.mapsUrl) {
    return (
      <a
        href={office.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClass} hover:border-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber`}
      >
        {body}
      </a>
    );
  }

  return <div className={cardClass}>{body}</div>;
}
