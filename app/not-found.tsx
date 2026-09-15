import type { Metadata } from "next";
import Button from "@/components/shared/Button";
import Link from "@/components/shared/Link";
import { ArrowRightIcon } from "@/components/shared/Icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
      <p className="eyebrow">404</p>
      <h1 className="font-display mt-4 text-4xl font-extrabold text-snow sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 text-lg text-fog">
        The page you are looking for does not exist or may have moved.
      </p>
      <Button href="/" className="mt-8">
        Back to home
      </Button>
      <ul className="mt-8 flex flex-wrap justify-center gap-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-cyber hover:text-cyber-dark"
            >
              {link.label}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
