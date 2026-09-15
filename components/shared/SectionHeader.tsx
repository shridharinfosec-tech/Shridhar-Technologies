import type { ReactNode } from "react";
import Eyebrow from "@/components/shared/Eyebrow";
import { cn } from "@/lib/cn";

// Left-aligned section header used by every content section.
export default function SectionHeader({
  eyebrow,
  title,
  intro,
  onDeep = false,
  id,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  onDeep?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && <Eyebrow onDeep={onDeep}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={cn(
          "font-display mt-4 text-3xl leading-tight font-extrabold sm:text-4xl",
          onDeep ? "text-white" : "text-snow",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-4 text-lg", onDeep ? "text-on-deep" : "text-fog")}>{intro}</p>
      )}
    </div>
  );
}
