import type { MDXComponents } from "mdx/types";
import Link from "@/components/shared/Link";
import InlineCta from "@/components/blog/InlineCta";
import { slugify, textOf } from "@/lib/slugify";
import type { AnchorHTMLAttributes, HTMLAttributes } from "react";

const components: MDXComponents = {
  // h2 ids match the table of contents built from the MDX source.
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      id={slugify(textOf(props.children))}
      className="font-display mt-12 mb-4 scroll-mt-24 text-2xl font-bold text-snow"
      {...props}
    />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-display mt-8 mb-3 text-xl font-bold text-snow" {...props} />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-5 text-lg leading-relaxed text-fog" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-5 list-disc space-y-2 pl-6 text-lg text-fog" {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-5 list-decimal space-y-2 pl-6 text-lg text-fog" {...props} />
  ),
  a: ({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) =>
    href?.startsWith("/") ? (
      <Link
        href={href}
        className="font-semibold text-cyber underline underline-offset-2 hover:text-cyber-dark"
        {...props}
      />
    ) : (
      <a
        href={href}
        className="font-semibold text-cyber underline underline-offset-2 hover:text-cyber-dark"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
  blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mb-5 border-l-2 border-cyber pl-4 text-lg text-snow italic"
      {...props}
    />
  ),
  code: (props: HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-night px-1.5 py-0.5 font-mono text-[0.9em] text-snow"
      {...props}
    />
  ),
  InlineCta,
};

export function useMDXComponents(base: MDXComponents): MDXComponents {
  return { ...base, ...components };
}
