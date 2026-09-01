import Button from "@/components/shared/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-sm font-semibold tracking-widest text-cyber uppercase">
        404
      </p>
      <h1 className="font-display mt-4 text-4xl font-bold text-snow sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 text-lg text-fog">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button href="/">Back to home</Button>
        <Button href="/contact" variant="ghost">
          Contact us
        </Button>
      </div>
    </div>
  );
}
