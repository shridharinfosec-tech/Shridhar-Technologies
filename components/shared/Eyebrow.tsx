import { cn } from "@/lib/cn";

// Small pill label above section headings.
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
