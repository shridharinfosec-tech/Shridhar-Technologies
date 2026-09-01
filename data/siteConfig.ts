export type Office = {
  label: string;
  address: string;
  mapsUrl: string;
};

const mapsSearchUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

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
  baseUrl: "https://www.shridhartechnologies.com",
  phone: "+91 932-866-7642",
  phoneHref: "tel:+919328667642",
  email: "info@shridharinfosec.com",
  sisUrl: "https://www.shridharinfosec.com",
  offices: [
    {
      label: "Head Office — Vadodara",
      address: headOfficeAddress,
      mapsUrl: "https://maps.app.goo.gl/EiPbXPFg3Cy2BPfP7",
    },
    {
      label: "Branch Office — Mumbai",
      address: mumbaiAddress,
      mapsUrl: mapsSearchUrl(mumbaiAddress),
    },
    {
      label: "Branch Office — Ahmedabad",
      address: ahmedabadAddress,
      mapsUrl: mapsSearchUrl(ahmedabadAddress),
    },
  ] satisfies Office[],
  social: {
    x: "#",
    facebook: "#",
    linkedin: "#",
    instagram: "#",
  },
} as const;
