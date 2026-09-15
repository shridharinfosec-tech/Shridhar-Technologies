import Link from "@/components/shared/Link";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { cn } from "@/lib/cn";

export type BreadcrumbItem = { name: string; href: string };

export default function Breadcrumb({
  items,
  onDeep = false,
  className,
}: {
  items: BreadcrumbItem[];
  onDeep?: boolean;
  className?: string;
}) {
  const jsonLdItems = [
    { name: "Home", url: "/" },
    ...items.map((item) => ({ name: item.name, url: item.href })),
  ];
  const linkClass = cn(
    "rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2",
    onDeep ? "hover:text-electric focus-visible:ring-electric" : "hover:text-cyber focus-visible:ring-cyber",
  );

  return (
    <nav aria-label="Breadcrumb" className={cn("mb-6", className)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(jsonLdItems)),
        }}
      />
      <ol
        className={cn(
          "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm",
          onDeep ? "text-on-deep" : "text-mist",
        )}
      >
        <li>
          <Link href="/" className={linkClass}>
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex min-w-0 items-center gap-2">
            <span aria-hidden>/</span>
            {index === items.length - 1 ? (
              <span
                className={cn("line-clamp-1", onDeep ? "text-white" : "text-fog")}
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className={linkClass}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
