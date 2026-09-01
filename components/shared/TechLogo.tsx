import { cn } from "@/lib/cn";

export default function TechLogo({
  name,
  logo,
  className,
}: {
  name: string;
  logo: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex flex-col items-center justify-center gap-2 rounded-xl border border-line p-4 transition-colors duration-200 ease-out hover:border-line-bright",
        className,
      )}
    >
      <img
        src={logo}
        alt={name}
        loading="lazy"
        width={36}
        height={36}
        className="h-9 w-9 object-contain grayscale transition-all duration-300 ease-out group-hover:grayscale-0"
      />
      <span className="text-xs font-medium text-mist">{name}</span>
    </div>
  );
}
