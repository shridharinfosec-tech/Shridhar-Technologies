import Link from "@/components/shared/Link";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export type BreadcrumbItem = { name: string; href: string };

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLdItems = [{ name: "Home", url: "/" }, ...items.map((item) => ({ name: item.name, url: item.href }))];

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(jsonLdItems)),
        }}
      />
      <ol className="flex flex-wrap items-center gap-2 text-sm text-mist">
        <li>
          <Link href="/" className="hover:text-cyber">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <span aria-hidden>/</span>
            {index === items.length - 1 ? (
              <span className="text-fog" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-cyber">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
