import type { Metadata } from "next";
import { blogPosts } from "@/data/blogIndex";
import BlogIndex, { type BlogListItem } from "@/components/blog/BlogIndex";
import CtaBand from "@/components/layout/CtaBand";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Insights on building software with AI",
  description:
    "Articles from the Shridhar Technologies engineering team on scoping MVPs, planning cloud migrations and putting AI agents to work in real business workflows.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  const posts: BlogListItem[] = blogPosts.map((post) => ({
    slug: post.slug,
    ...post.metadata,
  }));

  return (
    <>
      <PageHero
        tone="deep"
        breadcrumb={[{ name: "Blog", href: "/blogs" }]}
        eyebrow="Blog"
        title="Insights on building software with AI"
        intro="Field notes on product scoping, cloud infrastructure and AI engineering from the people building it."
      />

      <BlogIndex posts={posts} />

      <CtaBand secondaryLabel="Explore services" secondaryHref="/services" />
    </>
  );
}
