import type { MDXComponents } from "mdx/types";
import Link from "@/components/shared/Link";
import type { AnchorHTMLAttributes, HTMLAttributes } from "react";

const components: MDXComponents = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-display mt-12 mb-4 text-2xl font-semibold text-snow"
      {...props}
    />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="font-display mt-8 mb-3 text-xl font-semibold text-snow"
      {...props}
    />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-5 leading-relaxed text-fog" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-5 list-disc space-y-2 pl-6 text-fog" {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-5 list-decimal space-y-2 pl-6 text-fog" {...props} />
  ),
  a: ({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) =>
    href?.startsWith("/") ? (
      <Link
        href={href}
        className="font-medium text-cyber underline underline-offset-2 hover:text-electric"
        {...props}
      />
    ) : (
      <a
        href={href}
        className="font-medium text-cyber underline underline-offset-2 hover:text-electric"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
  blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mb-5 border-l-2 border-line-bright pl-4 text-mist italic"
      {...props}
    />
  ),
  code: (props: HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-night px-1.5 py-0.5 font-mono text-[0.9em] text-snow"
      {...props}
    />
  ),
};

export function useMDXComponents(base: MDXComponents): MDXComponents {
  return { ...base, ...components };
}
