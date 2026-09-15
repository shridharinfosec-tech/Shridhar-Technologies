export type Office = {
  label: string;
  city: string;
  address: string;
  // Only set when there is a real, verified map pin. Offices without one show
  // the address but no "Open in Google Maps" link.
  mapsUrl?: string;
};

const headOfficeAddress =
  "B-338, Emerald One, Jetalpur Road, Vadodara, Gujarat, India 390007";
const mumbaiAddress =
  "23, Dr. Atmaram Merchant Road, Next to Central Bank, Near Kabutar Khana, Bhuleshwar, Charni Road, Mumbai 400002, India";
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
  // [OWNER TO CONFIRM domain] Point NEXT_PUBLIC_SITE_URL at the real domain
  // (for example https://shridhartechnologies.com) before launch.
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://shridhar-technologies.vercel.app",
  phone: "+91 932-866-7642",
  phoneHref: "tel:+919328667642",
  // [OWNER TO CONFIRM number] WhatsApp chat link, currently the main phone line.
  whatsappHref: "https://wa.me/919328667642",
  // [OWNER TO CONFIRM] Switch to a mailbox on the company's own domain (for
  // example hello@shridhartechnologies.com) once it exists.
  email: "info@shridharinfosec.com",
  // [OWNER TO CONFIRM] Cal.com or Calendly link for "Book a call". Until it is
  // set, every booking CTA falls back to the contact page (see bookCallHref).
  bookingUrl: null as string | null,
  sisUrl: "https://www.shridharinfosec.com",
  offices: [
    {
      label: "Vadodara (Head Office)",
      city: "Vadodara",
      address: headOfficeAddress,
      mapsUrl: "https://maps.app.goo.gl/EiPbXPFg3Cy2BPfP7",
    },
    {
      label: "Mumbai (Branch Office)",
      city: "Mumbai",
      address: mumbaiAddress,
    },
    {
      label: "Ahmedabad (Branch Office)",
      city: "Ahmedabad",
      address: ahmedabadAddress,
    },
  ] satisfies Office[],
  // Social profiles. A value of "#" means "no account yet" and the icon is
  // hidden everywhere. [OWNER TO CONFIRM] Add real profile URLs, LinkedIn first.
  social: {
    linkedin: "#",
    instagram: "#",
    facebook: "#",
    medium: "#",
  },
} as const;

export const bookCallHref = siteConfig.bookingUrl ?? "/contact";
