import Link from "@/components/shared/Link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

// 14px sentence-case labels with at least a 44px hit area.
const base =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyber";

const variants = {
  primary: "bg-cyber text-white hover:bg-cyber-dark focus-visible:ring-offset-white",
  // Outlined, for use on light backgrounds.
  ghost:
    "border-2 border-line-bright bg-transparent text-snow hover:border-cyber hover:text-cyber focus-visible:ring-offset-white",
  // Outlined light, for use on dark-navy sections.
  onDeep:
    "border-2 border-white/30 bg-transparent text-white hover:border-electric hover:text-electric focus-visible:ring-electric focus-visible:ring-offset-deep",
  // Inline text link.
  text: "min-h-0 px-0 py-0 text-cyber hover:text-cyber-dark focus-visible:ring-offset-white",
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
    if (/^https?:/.test(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest} />
      );
    }
    if (/^(tel|mailto):/.test(href)) {
      return <a href={href} className={classes} {...rest} />;
    }
    return <Link href={href} className={classes} {...rest} />;
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return <button type={type} className={classes} {...rest} />;
}
