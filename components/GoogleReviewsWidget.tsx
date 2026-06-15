"use client";

import { useEffect, useRef } from "react";

/**
 * Trustindex widget hash for Chilkur Farmhouse (Google reviews, auto-updating).
 *
 * PLACEHOLDER — paste your Chilkur Trustindex hash here AFTER you set up the
 * domain and create the widget (the part after `loader.js?` in the embed URL).
 * You can also override it at runtime via NEXT_PUBLIC_TRUSTINDEX_ID in
 * `.env.local`. While this is empty, the curated review carousel is shown.
 */
const DEFAULT_TRUSTINDEX_ID = ""; // e.g. "50cd08e74b1825870936d7da4d5"

/**
 * Real-time Google reviews via a free third-party widget.
 *
 * No code edits ever needed — the widget auto-updates itself from Google.
 * You only paste ONE id into `.env.local` (see below), then it renders live.
 *
 * Supported providers (free plans, no credit card):
 *   • Trustindex  → set NEXT_PUBLIC_TRUSTINDEX_ID   (the hash from its loader URL)
 *   • Elfsight    → set NEXT_PUBLIC_ELFSIGHT_APP_ID (your widget app id)
 *
 * Reports load success/failure via `onStatus` so the caller can fall back
 * to the curated carousel if the widget can't render.
 */
export default function GoogleReviewsWidget({
  onStatus,
}: {
  onStatus?: (status: "loaded" | "failed") => void;
}) {
  const trustindexId =
    process.env.NEXT_PUBLIC_TRUSTINDEX_ID || DEFAULT_TRUSTINDEX_ID;
  const elfsightId = process.env.NEXT_PUBLIC_ELFSIGHT_APP_ID;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = containerRef.current;
    if (!host) return;

    let settled = false;
    const done = (s: "loaded" | "failed") => {
      if (!settled) {
        settled = true;
        onStatus?.(s);
      }
    };

    // --- Trustindex ---
    if (trustindexId) {
      const s = document.createElement("script");
      s.src = `https://cdn.trustindex.io/loader.js?${trustindexId}`;
      s.async = true;
      s.defer = true;
      s.onerror = () => done("failed");
      s.onload = () => {
        window.setTimeout(() => {
          const ok =
            host.querySelector(
              "[class*='ti-widget'], iframe, .ti-reviews-container-wrapper"
            ) !== null || host.childElementCount > 1;
          done(ok ? "loaded" : "failed");
        }, 4000);
      };
      host.appendChild(s);
      const guard = window.setTimeout(() => done("failed"), 9000);
      return () => {
        window.clearTimeout(guard);
        host.innerHTML = "";
      };
    }

    // --- Elfsight ---
    if (elfsightId) {
      const PLATFORM = "https://static.elfsight.com/platform/platform.js";
      if (!document.querySelector(`script[src="${PLATFORM}"]`)) {
        const s = document.createElement("script");
        s.src = PLATFORM;
        s.async = true;
        s.onerror = () => done("failed");
        document.body.appendChild(s);
      }
      const app = document.createElement("div");
      app.className = `elfsight-app-${elfsightId}`;
      app.setAttribute("data-elfsight-app-lazy", "");
      host.appendChild(app);
      window.setTimeout(() => {
        done(app.childElementCount > 0 ? "loaded" : "failed");
      }, 5000);
      return () => {
        host.innerHTML = "";
      };
    }

    // No id configured.
    done("failed");
  }, [trustindexId, elfsightId, onStatus]);

  if (!trustindexId && !elfsightId) return null;

  return <div ref={containerRef} aria-live="polite" className="mt-12" />;
}

/** True when a real-time widget id is configured. */
export const reviewsWidgetEnabled = Boolean(
  process.env.NEXT_PUBLIC_TRUSTINDEX_ID ||
    process.env.NEXT_PUBLIC_ELFSIGHT_APP_ID ||
    DEFAULT_TRUSTINDEX_ID
);
