"use client";

import { useMemo, useState } from "react";
import BlogPostCard, { type BlogListItem } from "@/components/blog/BlogPostCard";
import { cn } from "@/lib/cn";

export type { BlogListItem };

export default function BlogIndex({ posts }: { posts: BlogListItem[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(
    () => Array.from(new Set(posts.flatMap((post) => post.tags))).sort(),
    [posts],
  );

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

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2">
          {[null, ...tags].map((tag) => {
            const active = activeTag === tag;
            return (
              <button
                key={tag ?? "all"}
                type="button"
                onClick={() => setActiveTag(active && tag ? null : tag)}
                aria-pressed={active}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber",
                  active
                    ? "border-cyber bg-cyber text-white"
                    : "border-line-bright text-fog hover:border-cyber hover:text-cyber",
                )}
              >
                {tag ?? "All topics"}
              </button>
            );
          })}
        </div>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles"
          aria-label="Search articles"
          className="min-h-11 w-full rounded-lg border border-line-bright bg-ink px-4 text-base text-snow placeholder:text-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber sm:text-sm lg:w-72"
        />
      </div>

      <p role="status" className="mt-6 text-sm text-mist">
        Showing {filtered.length} of {posts.length} articles
      </p>

      {filtered.length === 0 ? (
        <p className="mt-4 rounded-xl border border-line bg-night p-8 text-fog">
          No articles found{query ? ` for "${query.trim()}"` : ""}. Try a different search or
          topic.
        </p>
      ) : (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
