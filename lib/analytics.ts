export type AnalyticsEvent =
  | "cta_click"
  | "form_submit_success"
  | "call_click"
  | "whatsapp_click"
  | "booking_opened";

type EventProps = Record<string, string>;

declare global {
  interface Window {
    plausible?: ((event: string, options?: { props?: EventProps }) => void) & {
      q?: unknown[];
    };
  }
}

// Sends a custom event to Plausible when it is configured; a no-op otherwise.
export function trackEvent(event: AnalyticsEvent, props?: EventProps) {
  if (typeof window === "undefined") return;
  window.plausible?.(event, props ? { props } : undefined);
}
