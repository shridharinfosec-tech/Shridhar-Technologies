import { blogPosts, getBlogPost } from "@/data/blogIndex";
import { ogSize, renderOgImage } from "@/lib/og";

// Generated once per post at build time (required by the static export).
export const dynamic = "force-static";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const alt = "Shridhar Technologies article";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return renderOgImage({
    eyebrow: "Insights",
    title: getBlogPost(slug)?.metadata.title ?? "Insights on building software with AI",
  });
}
