import type { Metadata } from "next";
import { blogPosts } from "@/data/blogIndex";
import BlogIndex, { type BlogListItem } from "@/components/blog/BlogIndex";
import Link from "@/components/shared/Link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on product scoping, cloud infrastructure, and AI engineering from the Shridhar Technologies team.",
};

const postImages: Record<string, string> = {
  "mvp-scope": "/images/team.jpg",
  "cloud-migration-pitfalls": "/images/servers.jpg",
  "ai-agents-business-workflows": "/images/code.jpg",
};

export default function BlogsPage() {
  const posts: BlogListItem[] = blogPosts.map((post) => ({
    slug: post.slug,
    ...post.metadata,
    image: postImages[post.slug],
  }));

  return (
    <>
      {/* Page banner */}
      <section className="relative isolate overflow-hidden bg-deep">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-electric/15 blur-3xl"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-violet/25 blur-3xl"
        />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-20 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <p className="font-display text-sm font-extrabold tracking-widest text-electric uppercase">
              <span aria-hidden>// </span>Insights
            </p>
            <h1 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 max-w-xl text-on-deep">
              Field notes on product scoping, cloud infrastructure, and AI
              engineering from the people building it.
            </p>
          </div>

          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-on-deep">
              <li>
                <Link href="/" className="hover:text-electric">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-semibold text-white" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <BlogIndex posts={posts} />
    </>
  );
}
