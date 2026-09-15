import { CheckIcon } from "@/components/shared/Icons";
import { proofPoints } from "@/data/hero";
import { cn } from "@/lib/cn";

export default function ProofPoints({
  onDeep = false,
  className,
}: {
  onDeep?: boolean;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-2 text-sm sm:flex sm:flex-wrap sm:gap-x-6",
        onDeep ? "text-on-deep" : "text-fog",
        className,
      )}
    >
      {proofPoints.map((point) => (
        <li key={point} className="flex items-center gap-2">
          <CheckIcon className={cn("h-4 w-4 shrink-0", onDeep ? "text-electric" : "text-cyber")} />
          {point}
        </li>
      ))}
    </ul>
  );
}
