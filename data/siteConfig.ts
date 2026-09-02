export type Office = {
  label: string;
  address: string;
  // Only set when there is a real, verified map pin. Offices without one show
  // the address but no "Open in Google Maps" link.
  mapsUrl?: string;
};

const headOfficeAddress =
  "B-338, Emerald One, Jetalpur Road, Vadodara, Gujarat, India - 390007";
const mumbaiAddress =
  "23, Dr. Atmaram Merchant Road, Next to Central Bank, Near Kabutar Khana, Bhuleshwar, Charni Road, Mumbai - 400 002, India";
const ahmedabadAddress =
  "C-1101, Prahladnagar Trade Centre, Times of India Press Road, Satellite, Ahmedabad, Gujarat 380015, India";

export const siteConfig = {
  name: "Shridhar Technologies",
  shortName: "ST",
  tagline: "Software engineering, built to last.",
  description:
    "Shridhar Technologies is a commercial software development company building SaaS platforms, cloud systems, AI products, and custom applications for growing businesses.",
  // Canonical/OG base URL. Defaults to the live Vercel URL; set
  // NEXT_PUBLIC_SITE_URL to the custom domain once it is connected.
  // TODO(owner): confirm canonical domain (Q5) and point NEXT_PUBLIC_SITE_URL
  // at https://shridhartechnologies.com when DNS is live on Vercel.
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://shridhar-technologies.vercel.app",
  phone: "+91 932-866-7642",
  phoneHref: "tel:+919328667642",
  email: "info@shridharinfosec.com",
  sisUrl: "https://www.shridharinfosec.com",
  offices: [
    {
      label: "Head Office - Vadodara",
      address: headOfficeAddress,
      mapsUrl: "https://maps.app.goo.gl/EiPbXPFg3Cy2BPfP7",
    },
    {
      label: "Branch Office - Mumbai",
      address: mumbaiAddress,
    },
    {
      label: "Branch Office - Ahmedabad",
      address: ahmedabadAddress,
    },
  ] satisfies Office[],
  // TODO(owner): add real social profile URLs. Any left as "#" are hidden
  // from the UI so no placeholder links ship.
  social: {
    x: "#",
    facebook: "#",
    linkedin: "#",
    instagram: "#",
  },
} as const;
