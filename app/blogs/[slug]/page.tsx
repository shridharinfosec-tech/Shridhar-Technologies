import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blogIndex";
import { articleJsonLd } from "@/lib/jsonld";
import Badge from "@/components/shared/Badge";
import CtaBand from "@/components/layout/CtaBand";
import Breadcrumb from "@/components/shared/Breadcrumb";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metadata.title,
    description: post.metadata.excerpt,
    openGraph: {
      type: "article",
      title: post.metadata.title,
      description: post.metadata.excerpt,
      publishedTime: post.metadata.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const date = new Date(post.metadata.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { Component } = post;

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 pt-12 pb-16 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              articleJsonLd({
                title: post.metadata.title,
                excerpt: post.metadata.excerpt,
                date: post.metadata.date,
                slug: post.slug,
              }),
            ),
          }}
        />
        <Breadcrumb
          items={[
            { name: "Blogs", href: "/blogs" },
            { name: post.metadata.title, href: `/blogs/${post.slug}` },
          ]}
        />

        <div className="flex flex-wrap gap-2">
          {post.metadata.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <h1 className="font-display mt-4 text-4xl font-bold text-snow sm:text-5xl">
          {post.metadata.title}
        </h1>

        <div className="mt-4 flex items-center gap-3 text-sm text-mist">
          <time dateTime={post.metadata.date}>{date}</time>
          {post.metadata.readingTime && (
            <>
              <span aria-hidden>·</span>
              <span>{post.metadata.readingTime}</span>
            </>
          )}
        </div>

        <div className="mt-10">
          <Component />
        </div>
      </article>

      <CtaBand />
    </>
  );
}
