// Photos live in public/images as <name>-800.webp and <name>-1600.webp.
// `src` is the base path without the suffix, for example "/images/team".
export default function ResponsiveImage({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${src}-1600.webp`}
      srcSet={`${src}-800.webp 800w, ${src}-1600.webp 1600w`}
      sizes={sizes}
      alt={alt}
      width={1600}
      height={1067}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={className}
    />
  );
}
