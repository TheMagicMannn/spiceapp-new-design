// Simple Google Analytics wrapper for SPA usage.
// Uses VITE_GA_ID if set, otherwise falls back to the measurement ID provided.
export const GA_MEASUREMENT_ID = (import.meta.env?.VITE_GA_ID as string) || 'G-9REM6Z20KL';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Record a page view. Call this on initial load and on every client-side route change.
 * Example: pageview(window.location.pathname + window.location.search)
 */
export function pageview(url: string) {
  if (typeof window === 'undefined') return;
  if (window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, { page_path: url });
  }
}

/**
 * Record a custom event.
 * Example: event({ action: 'play', category: 'video', label: 'homepage promo', value: 1 })
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
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}
