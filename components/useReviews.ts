"use client";

import { useEffect, useState } from "react";
import type { ReviewsData } from "../lib/reviews";

/** Fetches live Google review data on mount. The API route is cached for
 *  an hour, so this is cheap even though it runs on every page load. */
export function useReviews(): ReviewsData | null {
  const [data, setData] = useState<ReviewsData | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/reviews")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: ReviewsData | null) => {
        if (active && d) setData(d);
      })
      .catch(() => {
        /* keep static fallback already on screen */
      });
    return () => {
      active = false;
    };
  }, []);

  return data;
}
