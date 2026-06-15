"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { testimonials, site } from "../lib/site";
import { Reveal } from "./motion/Reveal";
import { useReviews } from "./useReviews";
import GoogleReviewsWidget, {
  reviewsWidgetEnabled,
} from "./GoogleReviewsWidget";

const reviewLinks = [
  { label: "Read Google Reviews", href: site.reviews.google },
  { label: "Booking.com", href: site.reviews.bookingDotCom },
  { label: "Airbnb", href: site.reviews.airbnb },
].filter((l) => l.href);

export default function Testimonials() {
  const live = useReviews();
  const list = live?.reviews?.length
    ? live.reviews.map((r, i) => ({
        name: r.name,
        location: r.relativeTime ?? "Google",
        avatar: r.avatar ?? `/images/guest-${(i % 6) + 1}.jpg`,
        rating: r.rating,
        source: "Google" as const,
        quote: r.text,
      }))
    : testimonials;
  const rating = live?.rating ?? 4.8;
  const reviewCount = live?.count ?? 19;

  // Show the live widget while it loads; fall back to the curated carousel
  // if it fails (offline, blocked, or trial expired).
  const [widgetFailed, setWidgetFailed] = useState(false);
  const showCarousel = !reviewsWidgetEnabled || widgetFailed;

  const [[page, dir], setPage] = useState<[number, number]>([0, 0]);
  const count = list.length;
  const active = ((page % count) + count) % count;
  const t = list[active];

  const paginate = useCallback((d: number) => setPage(([p]) => [p + d, d]), []);

  useEffect(() => {
    const id = setInterval(() => paginate(1), 7000);
    return () => clearInterval(id);
  }, [paginate]);

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Loved by our guests
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Guest Stories
          </h2>
          <div className="divider-accent mx-auto mt-5" />
          <p className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-muted">
            <Star className="h-4 w-4 fill-accent text-accent" />
            {rating.toFixed(1)} · {reviewCount}+ Google reviews
          </p>
        </Reveal>

        {/* Real-time Google reviews widget (auto-updates, no code edits). */}
        {reviewsWidgetEnabled && !widgetFailed && (
          <GoogleReviewsWidget
            onStatus={(s) => s === "failed" && setWidgetFailed(true)}
          />
        )}

        {showCarousel && (
          <>
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-xl sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={t.name}
                custom={dir}
                initial={{ opacity: 0, x: dir >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir >= 0 ? -60 : 60 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5 flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg leading-9 text-foreground sm:text-xl">
                  “{t.quote}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-primary/20">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted">{t.location}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 text-sm text-muted">
                    {t.source === "Google" && <FcGoogle className="h-5 w-5" />}
                    <span>{t.source}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-1.5">
            {list.map((item, i) => (
              <button
                key={`${item.name}-${i}`}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setPage([i, i > active ? 1 : -1])}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-7 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
          </>
        )}

        {reviewLinks.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {reviewLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
