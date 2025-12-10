import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { pageview } from "./lib/gtag";

const GA_ID = (import.meta.env.VITE_GA_ID as string | undefined) || undefined;

function injectGtag(id?: string) {
  if (!id || typeof document === "undefined") return;

  // load external gtag.js
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  // inline initializer: define gtag function and disable automatic page_view (SPA will send pageviews)
  const inline = document.createElement("script");
  inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${id}', { send_page_view: false });
  `;
  document.head.appendChild(inline);
}

function setupSpaPageviews() {
  // send initial pageview (no-op until gtag is available)
  pageview(window.location.pathname + window.location.search);

  // detect SPA navigation via history API
  const _pushState = history.pushState;
  const _replaceState = history.replaceState;

  history.pushState = function (...args: any[]) {
    const res = _pushState.apply(this, args);
    window.dispatchEvent(new Event("locationchange"));
    return res;
  };

  history.replaceState = function (...args: any[]) {
    const res = _replaceState.apply(this, args);
    window.dispatchEvent(new Event("locationchange"));
    return res;
  };

  window.addEventListener("popstate", () => {
    window.dispatchEvent(new Event("locationchange"));
  });

  window.addEventListener("locationchange", () => {
    pageview(window.location.pathname + window.location.search);
  });
}

injectGtag(GA_ID);

createRoot(document.getElementById("root")!).render(<App />);

// setup SPA pageview handling in the browser environment
if (typeof window !== "undefined") {
  setupSpaPageviews();
}
