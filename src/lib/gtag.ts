// Google Analytics wrapper for SPA usage.
// Measurement ID must be provided through VITE_GA_ID; there is no hardcoded fallback.
export const GA_MEASUREMENT_ID = (import.meta.env?.VITE_GA_ID as string | undefined) || undefined;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Record a page view. Call this on initial load and on every client-side route change.
 */
export function pageview(url: string) {
  if (typeof window === 'undefined') return;
  if (!GA_MEASUREMENT_ID) return;
  if (window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, { page_path: url });
  }
}

/**
 * Record a custom event.
 */
export function event({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) {
  if (typeof window === 'undefined') return;
  if (!GA_MEASUREMENT_ID) return;
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}
