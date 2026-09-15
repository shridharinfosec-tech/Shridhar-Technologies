export type NavLink = { label: string; href: string };

// Primary navigation after the Services menu. Contact is handled by the
// "Book a call" button, and the logo links home.
export const mainNav: NavLink[] = [
  { label: "Work", href: "/portfolio" },
  { label: "How we work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blogs" },
];
