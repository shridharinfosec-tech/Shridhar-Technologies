import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { blogPosts, getBlogPost, type BlogPostEntry } from "@/data/blogIndex";
import { siteConfig } from "@/data/siteConfig";
import { articleJsonLd } from "@/lib/jsonld";
import { slugify } from "@/lib/slugify";
import CtaBand from "@/components/layout/CtaBand";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Eyebrow from "@/components/shared/Eyebrow";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { formatPostDate } from "@/lib/date";

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
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metadata.title,
      description: post.metadata.excerpt,
      publishedTime: post.metadata.date,
      authors: [post.metadata.author?.name ?? siteConfig.name],
    },
  };
}

// Table of contents from the post's "## " headings (ids match mdx-components).
async function getHeadings(slug: string) {
  const source = await readFile(join(process.cwd(), "content", "blog", `${slug}.mdx`), "utf8");
  return Array.from(source.matchAll(/^##\s+(.+)$/gm), (match) => {
    const text = match[1].replace(/[`*_]/g, "").trim();
    return { text, id: slugify(text) };
  });
}

function relatedPosts(post: BlogPostEntry) {
  return blogPosts
    .filter((other) => other.slug !== post.slug)
    .map((other) => ({
      other,
      shared: other.metadata.tags.filter((tag) => post.metadata.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.shared - a.shared)
    .slice(0, 2)
    .map(({ other }) => other);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const { Component, metadata } = post;
  const headings = await getHeadings(post.slug);
  const related = relatedPosts(post);
  const authorName = metadata.author?.name ?? `${siteConfig.name} engineering team`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: metadata.title,
              excerpt: metadata.excerpt,
              date: metadata.date,
              slug: post.slug,
              author: metadata.author,
            }),
          ),
        }}
      />

      <article>
        <header className="border-b border-line bg-night">
          <div className="mx-auto max-w-7xl px-6 pt-8 pb-12 lg:px-8">
            <Breadcrumb
              items={[
                { name: "Blog", href: "/blogs" },
                { name: metadata.title, href: `/blogs/${post.slug}` },
              ]}
            />
            <div className="max-w-3xl">
              <Eyebrow>{metadata.tags[0]}</Eyebrow>
              <h1 className="font-display mt-4 text-3xl leading-tight font-extrabold text-snow sm:text-5xl">
                {metadata.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-fog">{metadata.excerpt}</p>
              <p className="mt-6 flex flex-wrap items-center gap-x-2 text-sm text-mist">
                <span className="font-semibold text-snow">{authorName}</span>
                {metadata.author?.role && <span>{metadata.author.role}</span>}
                <span aria-hidden>·</span>
                <time dateTime={metadata.date}>{formatPostDate(metadata.date)}</time>
                {metadata.readingTime && (
                  <>
                    <span aria-hidden>·</span>
                    <span>{metadata.readingTime}</span>
                  </>
                )}
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          {metadata.image && (
            <ResponsiveImage
              src={metadata.image}
              alt=""
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="mb-12 aspect-[21/9] w-full rounded-xl object-cover"
            />
          )}

          <div className="grid gap-12 lg:grid-cols-[1fr_260px] lg:gap-16">
            <div className="max-w-3xl min-w-0">
              <Component />
            </div>

            {headings.length > 0 && (
              <nav
                aria-label="On this page"
                className="hidden lg:sticky lg:top-24 lg:block lg:self-start"
              >
                <p className="font-display text-sm font-bold text-snow">On this page</p>
                <ul className="mt-4 space-y-2 border-l border-line text-sm">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="-ml-px block border-l-2 border-transparent py-1 pl-4 text-fog hover:border-cyber hover:text-cyber"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line bg-night">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-snow">Related articles</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((other) => (
                <BlogPostCard
                  key={other.slug}
                  post={{ slug: other.slug, ...other.metadata }}
                  headingLevel={3}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand secondaryLabel="Read more articles" secondaryHref="/blogs" />
    </>
  );
}
