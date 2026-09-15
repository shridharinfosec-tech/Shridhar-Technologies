import { formatAddress, siteConfig, type Office } from "@/data/siteConfig";
import type { Service } from "@/data/services";
import type { PostAuthor } from "@/types/blog";

const absolute = (path: string) => `${siteConfig.baseUrl}${path}`;

function postalAddress(office: Office) {
  return {
    "@type": "PostalAddress",
    streetAddress: office.streetAddress,
    addressLocality: office.city,
    addressRegion: office.region,
    postalCode: office.postalCode,
    addressCountry: "IN",
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absolute("/#organization"),
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    description: siteConfig.description,
    foundingDate: siteConfig.foundingYear,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: siteConfig.offices.map(postalAddress),
    sameAs: Object.values(siteConfig.social).filter((url) => (url as string) !== "#"),
  };
}

// Head office as a local business listing.
// [OWNER TO CONFIRM] Add `geo` (latitude/longitude) and `openingHours`
// (for example "Mo-Fr 10:00-19:00") once confirmed.
export function professionalServiceJsonLd() {
  const headOffice = siteConfig.offices[0];
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absolute("/#head-office"),
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    image: absolute("/opengraph-image.png"),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: postalAddress(headOffice),
    hasMap: headOffice.mapsUrl,
    parentOrganization: { "@id": absolute("/#organization") },
  };
}

export function serviceJsonLd(service: Service, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.seoDescription,
    url: absolute(path),
    serviceType: service.name,
    provider: { "@id": absolute("/#organization"), name: siteConfig.name },
    areaServed: "Worldwide",
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.url),
    })),
  };
}

export function articleJsonLd(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  author?: PostAuthor;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: post.author
      ? { "@type": "Person", name: post.author.name, jobTitle: post.author.role }
      : { "@type": "Organization", name: siteConfig.name },
    publisher: { "@id": absolute("/#organization"), name: siteConfig.name },
    url: absolute(`/blogs/${post.slug}`),
  };
}

export { formatAddress };
