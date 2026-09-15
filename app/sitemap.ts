import type { MetadataRoute } from "next";
import { categories, services, serviceHref } from "@/data/services";
import { portfolio } from "@/data/portfolio";
import { blogPosts } from "@/data/blogIndex";
import { legalPages } from "@/data/legal";
import { siteConfig } from "@/data/siteConfig";

export const dynamic = "force-static";

// Only real content dates are used for lastModified. Pages without one omit
// it, so a deploy does not make every page look changed.
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${siteConfig.baseUrl}${path}`;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"), changeFrequency: "monthly", priority: 1 },
    { url: url("/services"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/portfolio"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/how-we-work"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/contact"), changeFrequency: "yearly", priority: 0.8 },
    { url: url("/blogs"), changeFrequency: "weekly", priority: 0.7 },
    { url: url("/about"), changeFrequency: "yearly", priority: 0.6 },
    { url: url("/careers"), changeFrequency: "monthly", priority: 0.4 },
  ];

  const legalRoutes: MetadataRoute.Sitemap = legalPages.map((page) => ({
    url: url(`/${page.slug}`),
    lastModified: new Date(page.lastUpdated),
    changeFrequency: "yearly",
    priority: 0.2,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: url(`/services/${category.slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // One entry per service, at its canonical (first category) URL.
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: url(serviceHref(service)),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = portfolio.map((study) => ({
    url: url(`/portfolio/${study.slug}`),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: url(`/blogs/${post.slug}`),
    lastModified: new Date(post.metadata.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...serviceRoutes,
    ...portfolioRoutes,
    ...blogRoutes,
    ...legalRoutes,
  ];
}
