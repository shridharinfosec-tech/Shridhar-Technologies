import Link from "@/components/shared/Link";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import { formatPostDate } from "@/lib/date";
import type { PostMetadata } from "@/types/blog";

export type BlogListItem = PostMetadata & { slug: string };

export default function BlogPostCard({
  post,
  headingLevel = 2,
}: {
  post: BlogListItem;
  headingLevel?: 2 | 3;
}) {
  const Heading = `h${headingLevel}` as const;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-panel transition-colors duration-200 ease-out hover:border-cyber">
      {post.image && (
        <div className="overflow-hidden bg-deep">
          <ResponsiveImage
            src={post.image}
            alt=""
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow self-start">{post.tags[0]}</p>
        <Heading className="font-display mt-3 text-xl leading-snug font-bold text-snow group-hover:text-cyber">
          <Link
            href={`/blogs/${post.slug}`}
            className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-cyber"
          >
            {post.title}
          </Link>
        </Heading>
        <p className="mt-3 flex-1 leading-relaxed text-fog">{post.excerpt}</p>
        <p className="mt-5 flex flex-wrap items-center gap-x-2 text-sm text-mist">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          {post.readingTime && (
            <>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </>
          )}
        </p>
      </div>
    </article>
  );
}
