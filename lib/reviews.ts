import { site, testimonials } from "./site";

/** A single review for display. */
export type LiveReview = {
  name: string;
  rating: number;
  text: string;
  relativeTime?: string;
  avatar?: string;
  source: "Google";
};

/** Aggregated reviews payload returned to the UI. */
export type ReviewsData = {
  /** Overall star rating, e.g. 4.8 */
  rating: number;
  /** Total number of reviews/ratings */
  count: number;
  /** Individual reviews (may fall back to curated ones) */
  reviews: LiveReview[];
  /** Where the numbers came from */
  source: "google" | "fallback";
  /** ISO timestamp of when this was produced */
  fetchedAt: string;
};

/** The Google Maps place URL to scrape (override via env in production). */
const MAPS_URL =
  process.env.GOOGLE_MAPS_PLACE_URL || site.reviews.google;

/** Google Places API (New) config. */
const PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || "";
const PLACE_ID_ENV = process.env.GOOGLE_PLACE_ID || "";
const PLACE_TEXT_QUERY = `${site.name} ${site.address.full}`;

/** Curated data used whenever scraping fails or is blocked. */
function fallbackData(): ReviewsData {
  const ratingStat = site.stats.find((s) => /rating/i.test(s.label));
  const countStat = site.stats.find((s) => /review/i.test(s.label));

  return {
    rating: typeof ratingStat?.value === "number" ? ratingStat.value : 4.8,
    count: typeof countStat?.value === "number" ? countStat.value : 19,
    reviews: testimonials.map((t) => ({
      name: t.name,
      rating: t.rating,
      text: t.quote,
      avatar: t.avatar,
      source: "Google" as const,
    })),
    source: "fallback",
    fetchedAt: new Date().toISOString(),
  };
}

/** Decode the unicode/hex escapes Google embeds inside its data blobs. */
function decode(text: string): string {
  return text
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, h) =>
      String.fromCharCode(parseInt(h, 16))
    )
    .replace(/\\n/g, " ")
    .replace(/\\"/g, '"')
    .replace(/\\\//g, "/")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Best-effort scrape of a Google Maps place page.
 * Google renders with JS and blocks datacenter IPs, so this can fail —
 * callers MUST handle a null return and fall back to curated data.
 */
export async function scrapeGoogleReviews(
  url: string
): Promise<ReviewsData | null> {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
        "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      // Skips the EU consent interstitial that would otherwise hide the data.
      Cookie: "CONSENT=YES+; SOCS=CAI",
    },
    // Next.js Data Cache: re-scrape at most once per hour.
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;
  const html = await res.text();

  // --- Overall rating + total count ---------------------------------------
  // Google embeds these together in the data blob, commonly as
  //   ...,4.8,19,...  (rating then review count)
  let rating = 0;
  let count = 0;

  const aggMatch =
    html.match(/\[\s*null\s*,\s*null\s*,\s*([0-5](?:\.\d+)?)\s*\]\s*,\s*(\d{1,7})/) ||
    html.match(/"\/g\/[^"]+"[^[]*\[[^\]]*?([0-5]\.\d)[^\]]*?\][^[]*?(\d{1,7})\s*\]/);
  if (aggMatch) {
    rating = parseFloat(aggMatch[1]);
    count = parseInt(aggMatch[2], 10);
  }

  // Fallbacks: look for human-readable "4.8 stars" / "19 reviews".
  if (!rating) {
    const r = html.match(/([0-5]\.\d)\s*stars?/i);
    if (r) rating = parseFloat(r[1]);
  }
  if (!count) {
    const c = html.match(/([\d,]{1,9})\s*reviews?/i);
    if (c) count = parseInt(c[1].replace(/,/g, ""), 10);
  }

  // --- Individual reviews (most fragile part) -----------------------------
  const reviews: LiveReview[] = [];
  // Reviews are stored as nested arrays; we look for review-text + a rating.
  const reviewRegex =
    /\[\s*"([^"]{20,1200}?)"\s*,\s*null[^[]{0,80}?\]\s*,\s*"\d{4}-\d{2}-\d{2}"[^[]*?,\s*([1-5])\s*,/g;
  let m: RegExpExecArray | null;
  while ((m = reviewRegex.exec(html)) && reviews.length < 8) {
    const text = decode(m[1]);
    if (text.length > 15) {
      reviews.push({
        name: "Google Guest",
        rating: parseInt(m[2], 10),
        text,
        source: "Google",
      });
    }
  }

  if (!rating || !count) return null;

  return {
    rating,
    count,
    reviews,
    source: "google",
    fetchedAt: new Date().toISOString(),
  };
}

/* ------------------------------------------------------------------ *
 * Google Places API (New) — the reliable, ToS-compliant source.
 * Docs: https://developers.google.com/maps/documentation/places/web-service/place-details
 * ------------------------------------------------------------------ */

let resolvedPlaceId = PLACE_ID_ENV;

/** Resolve a Place ID from the business name when one isn't hard-coded. */
async function resolvePlaceId(): Promise<string | null> {
  if (resolvedPlaceId) return resolvedPlaceId;

  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": PLACES_API_KEY,
      "X-Goog-FieldMask": "places.id,places.displayName",
    },
    body: JSON.stringify({ textQuery: PLACE_TEXT_QUERY }),
    next: { revalidate: 86400 }, // place id rarely changes
  });

  if (!res.ok) return null;
  const data = await res.json();
  const id: string | undefined = data?.places?.[0]?.id;
  if (id) resolvedPlaceId = id;
  return id ?? null;
}

type PlacesApiReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string; photoUri?: string };
};

/** Fetch rating, count, and reviews from the official Places API. */
export async function fetchFromPlacesApi(): Promise<ReviewsData | null> {
  if (!PLACES_API_KEY) return null;

  const placeId = await resolvePlaceId();
  if (!placeId) return null;

  const res = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}`,
    {
      headers: {
        "X-Goog-Api-Key": PLACES_API_KEY,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        "Accept-Language": "en",
      },
      next: { revalidate: 3600 }, // refresh at most once per hour
    }
  );

  if (!res.ok) return null;
  const data = await res.json();
  if (typeof data.rating !== "number") return null;

  const reviews: LiveReview[] = (data.reviews ?? [])
    .map((rv: PlacesApiReview) => ({
      name: rv.authorAttribution?.displayName ?? "Google Guest",
      rating: rv.rating ?? 5,
      text: rv.text?.text ?? rv.originalText?.text ?? "",
      relativeTime: rv.relativePublishTimeDescription,
      avatar: rv.authorAttribution?.photoUri,
      source: "Google" as const,
    }))
    .filter((r: LiveReview) => r.text.length > 0);

  return {
    rating: data.rating,
    count: data.userRatingCount ?? 0,
    reviews,
    source: "google",
    fetchedAt: new Date().toISOString(),
  };
}

/**
 * Returns review data for the UI. Tries a live scrape (cached 1h by Next),
 * and merges curated reviews when the scrape can't extract individual ones.
 */
export async function getReviews(): Promise<ReviewsData> {
  const fallback = fallbackData();

  // No API key configured → use the curated real reviews directly.
  // This is the fully free path: no billing, no network calls.
  if (!PLACES_API_KEY) return fallback;

  // 1) Official Google Places API — reliable, used when a key is configured.
  try {
    const api = await fetchFromPlacesApi();
    if (api && api.rating > 0) {
      return {
        ...api,
        reviews: api.reviews.length > 0 ? api.reviews : fallback.reviews,
      };
    }
  } catch {
    // ignore and try next source
  }

  // 2) Best-effort HTML scrape (often only returns the JS shell — see notes).
  try {
    const scraped = await scrapeGoogleReviews(MAPS_URL);
    if (scraped && scraped.rating > 0 && scraped.count > 0) {
      return {
        ...scraped,
        reviews: scraped.reviews.length > 0 ? scraped.reviews : fallback.reviews,
      };
    }
  } catch {
    // ignore and fall back
  }

  // 3) Curated fallback — always shows real numbers so the UI never breaks.
  return fallback;
}
