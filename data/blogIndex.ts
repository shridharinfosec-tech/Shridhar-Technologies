import type { ComponentType } from "react";
import type { PostMetadata } from "@/types/blog";
import PostMvpScope, { metadata as mvpScopeMeta } from "@/content/blog/mvp-scope.mdx";
import PostCloudMigration, {
  metadata as cloudMigrationMeta,
} from "@/content/blog/cloud-migration-pitfalls.mdx";
import PostAiAgents, {
  metadata as aiAgentsMeta,
} from "@/content/blog/ai-agents-business-workflows.mdx";

export type BlogPostEntry = {
  slug: string;
  metadata: PostMetadata;
  Component: ComponentType;
};

export const blogPosts: BlogPostEntry[] = [
  { slug: "mvp-scope", metadata: mvpScopeMeta, Component: PostMvpScope },
  {
    slug: "cloud-migration-pitfalls",
    metadata: cloudMigrationMeta,
    Component: PostCloudMigration,
  },
  {
    slug: "ai-agents-business-workflows",
    metadata: aiAgentsMeta,
    Component: PostAiAgents,
  },
].sort((a, b) => (a.metadata.date < b.metadata.date ? 1 : -1));

export function getBlogPost(slug: string): BlogPostEntry | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
