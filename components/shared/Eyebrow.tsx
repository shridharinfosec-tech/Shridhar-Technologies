import { cn } from "@/lib/cn";

// The "// LABEL" section eyebrow from the Engitech design language.
export default function Eyebrow({
  children,
  onDeep = false,
  className,
}: {
  children: React.ReactNode;
  onDeep?: boolean;
  className?: string;
}) {
  return (
    <p className={cn("eyebrow", onDeep && "eyebrow-on-deep", className)}>
      {children}
    </p>
  );
}
