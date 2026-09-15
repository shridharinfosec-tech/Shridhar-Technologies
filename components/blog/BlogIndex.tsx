"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import Link from "@/components/shared/Link";
import { cn } from "@/lib/cn";

export type BlogListItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime?: string;
  image?: string;
};

const AUTHOR = "Shridhar Team";

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex({ posts }: { posts: BlogListItem[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>();
    posts.forEach((post) =>
      post.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1)),
    );
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesTag && matchesQuery;
    });
  }, [posts, query, activeTag]);

  const toggleTag = (tag: string) =>
    setActiveTag((current) => (current === tag ? null : tag));

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
        {/* Main column */}
        <div className="space-y-10">
          {(activeTag || query) && (
            <div className="flex flex-wrap items-center gap-3 text-sm text-mist">
              <span>
                Showing {filtered.length}{" "}
                {filtered.length === 1 ? "article" : "articles"}
                {activeTag && (
                  <>
                    {" "}
                    in{" "}
                    <span className="font-semibold text-snow">{activeTag}</span>
                  </>
                )}
              </span>
              <button
                type="button"
                onClick={() => {
                  setActiveTag(null);
                  setQuery("");
                }}
                className="font-semibold text-cyber hover:underline"
              >
                Clear
              </button>
            </div>
          )}

          {filtered.length === 0 ? (
            <p className="rounded-2xl border border-line bg-night p-8 text-mist">
              No articles found{query ? ` for “${query.trim()}”` : ""}. Try a
              different search or category.
            </p>
          ) : (
            filtered.map((post) => <PostCard key={post.slug} post={post} />)
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          <SidebarBox title="Search">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles…"
              aria-label="Search articles"
              className="w-full rounded-lg border border-line-bright bg-white px-4 py-3 text-sm text-snow outline-none placeholder:text-mist focus:border-cyber focus:ring-2 focus:ring-cyber/30"
            />
          </SidebarBox>

          <SidebarBox title="Categories">
            <ul className="space-y-1.5">
              {tagCounts.map(([tag, count]) => (
                <li key={tag}>
                  <button
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                      activeTag === tag
                        ? "bg-cyber/10 font-semibold text-cyber"
                        : "text-fog hover:bg-night hover:text-cyber",
                    )}
                  >
                    <span>{tag}</span>
                    <span className="text-xs text-mist">({count})</span>
                  </button>
                </li>
              ))}
            </ul>
          </SidebarBox>

          <SidebarBox title="Recent Posts">
            <ul className="space-y-4">
              {posts.slice(0, 4).map((post) => (
                <li key={post.slug}>
                  <Link href={`/blogs/${post.slug}`} className="group block">
                    <span className="block text-sm font-semibold text-snow group-hover:text-cyber">
                      {post.title}
                    </span>
                    <span className="mt-1 block text-xs text-mist">
                      {formatDate(post.date)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarBox>

          <SidebarBox title="Tags">
            <div className="flex flex-wrap gap-2">
              {tagCounts.map(([tag]) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs transition-colors",
                    activeTag === tag
                      ? "border-cyber bg-cyber text-white"
                      : "border-line-bright text-fog hover:border-cyber hover:text-cyber",
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </SidebarBox>
        </aside>
      </div>
    </div>
  );
}

function PostCard({ post }: { post: BlogListItem }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-white transition-colors duration-200 ease-out hover:border-cyber">
      <Link
        href={`/blogs/${post.slug}`}
        className="relative flex h-56 items-end overflow-hidden bg-gradient-to-br from-deep via-deep-2 to-violet p-6"
        aria-label={post.title}
      >
        {post.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        )}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-deep/10"
        />
        <span className="relative inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur">
          {post.tags[0]}
        </span>
      </Link>

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-mist">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{AUTHOR}</span>
          {post.readingTime && (
            <>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </>
          )}
        </div>

        <h2 className="font-display mt-3 text-2xl font-bold text-snow">
          <Link
            href={`/blogs/${post.slug}`}
            className="transition-colors hover:text-cyber"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-fog">{post.excerpt}</p>

        <Link
          href={`/blogs/${post.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyber"
        >
          Read More
          <span
            aria-hidden
            className="transition-transform duration-200 ease-out group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

function SidebarBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <h3 className="font-display text-base font-bold text-snow">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}
