declare module "*.mdx" {
  import type { PostMetadata } from "@/types/blog";

  export const metadata: PostMetadata;
}
