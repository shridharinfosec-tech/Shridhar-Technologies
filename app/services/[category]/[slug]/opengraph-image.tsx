import { getCategory, getService, services } from "@/data/services";
import { ogSize, renderOgImage } from "@/lib/og";

// Generated once per service at build time (required by the static export).
export const dynamic = "force-static";

export function generateStaticParams() {
  return services.flatMap((service) =>
    service.categories.map((category) => ({ category, slug: service.slug })),
  );
}

export const alt = "Shridhar Technologies service";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  return renderOgImage({
    eyebrow: getCategory(category)?.name ?? "Services",
    title: getService(slug)?.name ?? "Software development services",
  });
}
