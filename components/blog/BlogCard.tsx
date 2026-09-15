import Link from "@/components/shared/Link";
import type { BlogPostEntry } from "@/data/blogIndex";
import Badge from "@/components/shared/Badge";

export default function BlogCard({ post }: { post: BlogPostEntry }) {
  const date = new Date(post.metadata.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-line p-8 transition-colors duration-200 ease-out hover:border-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber"
    >
      <div className="flex flex-wrap gap-2">
        {post.metadata.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h2 className="font-display mt-4 text-xl font-semibold text-snow group-hover:text-cyber">
        {post.metadata.title}
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
        {post.metadata.excerpt}
      </p>
      <div className="mt-6 flex items-center gap-3 text-xs text-mist">
        <time dateTime={post.metadata.date}>{date}</time>
        {post.metadata.readingTime && (
          <>
            <span aria-hidden>·</span>
            <span>{post.metadata.readingTime}</span>
          </>
        )}
      </div>
    </Link>
  );
}
