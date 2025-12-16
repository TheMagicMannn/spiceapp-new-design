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

// Specific event tracking functions for common actions

/**
 * Track waitlist signup
 */
export function trackWaitlistSignup(source: string) {
  event({
    action: 'signup',
    category: 'Waitlist',
    label: source,
  });
}

/**
 * Track quiz actions
 */
export function trackQuizStart() {
  event({
    action: 'start',
    category: 'Quiz',
    label: 'BDSM Quiz',
  });
}

export function trackQuizComplete(questionsAnswered: number) {
  event({
    action: 'complete',
    category: 'Quiz',
    label: 'BDSM Quiz',
    value: questionsAnswered,
  });
}

export function trackQuizProgress(questionNumber: number) {
  event({
    action: 'progress',
    category: 'Quiz',
    label: `Question ${questionNumber}`,
    value: questionNumber,
  });
}

/**
 * Track navigation clicks
 */
export function trackNavigation(destination: string) {
  event({
    action: 'click',
    category: 'Navigation',
    label: destination,
  });
}

/**
 * Track download button clicks
 */
export function trackDownloadClick(platform: 'iOS' | 'Android') {
  event({
    action: 'click',
    category: 'Download',
    label: platform,
  });
}

/**
 * Track external link clicks
 */
export function trackExternalLink(url: string, label?: string) {
  event({
    action: 'click',
    category: 'External Link',
    label: label || url,
  });
}

/**
 * Track article/guide reads
 */
export function trackArticleView(articleTitle: string, category: string) {
  event({
    action: 'view',
    category: 'Article',
    label: `${category} - ${articleTitle}`,
  });
}

/**
 * Track form submissions
 */
export function trackFormSubmit(formName: string) {
  event({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaName: string, location: string) {
  event({
    action: 'click',
    category: 'CTA',
    label: `${ctaName} - ${location}`,
  });
}
