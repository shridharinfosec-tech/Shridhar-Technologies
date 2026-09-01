import NextLink from "next/link";
import type { ComponentProps } from "react";

/*
 * Thin wrapper over next/link that defaults prefetch to off.
 *
 * With `output: 'export'`, the App Router's speculative RSC prefetch requests
 * segment files (…/__next.*.__PAGE__.txt) whose on-disk layout doesn't match
 * the requested path on a plain static file server, producing harmless 404s in
 * the console. Turning prefetch off removes that speculative traffic entirely,
 * so the console stays clean on every host. Pages are tiny static HTML, so the
 * navigation cost of not prefetching is negligible. Callers can still opt back
 * in per-link by passing `prefetch`.
 */
export default function Link({
  prefetch = false,
  ...props
}: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={prefetch} {...props} />;
}
