export type Office = {
  label: string;
  city: string;
  streetAddress: string;
  region: string;
  postalCode: string;
  // Only set when there is a real, verified map pin. Offices without one show
  // the address but no map link.
  mapsUrl?: string;
};

export function formatAddress(office: Office) {
  return `${office.streetAddress}, ${office.city}, ${office.region} ${office.postalCode}, India`;
}

export const siteConfig = {
  name: "Shridhar Technologies",
  shortName: "ST",
  tagline: "AI-accelerated software, built by senior engineers.",
  description:
    "Shridhar Technologies is an AI-accelerated software studio. Senior engineers use AI across the whole build to ship websites, SaaS platforms, mobile apps and AI features faster, with fixed milestones and code you own.",
  defaultTitle: "Shridhar Technologies | AI-accelerated software development",
  // Canonical/OG base URL. Defaults to the live Vercel URL; set
  // NEXT_PUBLIC_SITE_URL to the custom domain once it is connected.
  // [OWNER TO CONFIRM domain] Point NEXT_PUBLIC_SITE_URL at the real domain
  // (for example https://shridhartechnologies.com) before launch, and redirect
  // the Vercel subdomain to it.
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://shridhar-technologies.vercel.app",
  foundingYear: "2020",
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
      streetAddress: "B-338, Emerald One, Jetalpur Road",
      region: "Gujarat",
      postalCode: "390007",
      mapsUrl: "https://maps.app.goo.gl/EiPbXPFg3Cy2BPfP7",
    },
    {
      label: "Mumbai (Branch Office)",
      city: "Mumbai",
      streetAddress:
        "23, Dr. Atmaram Merchant Road, Next to Central Bank, Near Kabutar Khana, Bhuleshwar, Charni Road",
      region: "Maharashtra",
      postalCode: "400002",
    },
    {
      label: "Ahmedabad (Branch Office)",
      city: "Ahmedabad",
      streetAddress: "C-1101, Prahladnagar Trade Centre, Times of India Press Road, Satellite",
      region: "Gujarat",
      postalCode: "380015",
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
