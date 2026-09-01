import Link from "@/components/shared/Link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-sm px-8 py-4 text-xs font-extrabold uppercase tracking-[0.08em] transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyber hover:-translate-y-0.5";

const variants = {
  // Solid bright-blue primary (Engitech's signature CTA).
  primary: "bg-cyber text-white hover:bg-[#0a539f] focus-visible:ring-offset-white",
  // Outlined, for use on light backgrounds.
  ghost:
    "border-2 border-line-bright bg-transparent text-snow hover:border-cyber hover:text-cyber focus-visible:ring-offset-white",
  // Outlined light, for use on dark-navy sections.
  onDeep:
    "border-2 border-white/30 bg-transparent text-white hover:border-electric hover:text-electric focus-visible:ring-electric focus-visible:ring-offset-[#0b1e46]",
  // Inline arrow link.
  text: "px-0 py-0 text-cyber hover:text-electric focus-visible:ring-offset-white",
};

type Variant = keyof typeof variants;

type CommonProps = { variant?: Variant; className?: string };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return <Link href={href} className={classes} {...rest} />;
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return <button type={type} className={classes} {...rest} />;
}
