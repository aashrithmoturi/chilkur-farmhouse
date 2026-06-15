"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { showcase } from "../lib/site";
import { Reveal } from "./motion/Reveal";

export default function PropertyShowcase() {
  const [[page, dir], setPage] = useState<[number, number]>([0, 0]);
  const count = showcase.length;
  const active = ((page % count) + count) % count;

  const paginate = useCallback((d: number) => setPage(([p]) => [p + d, d]), []);

  useEffect(() => {
    const id = setInterval(() => paginate(1), 6000);
    return () => clearInterval(id);
  }, [paginate]);

  const current = showcase[active];

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Rooms · Suites · Spaces
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Explore the Property
          </h2>
        </Reveal>

        <Reveal direction="up" className="mt-12">
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl lg:grid-cols-2">
            {/* Image */}
            <div className="group relative h-72 w-full overflow-hidden sm:h-96 lg:h-[520px]">
              <AnimatePresence custom={dir} mode="popLayout">
                <motion.div
                  key={current.src}
                  custom={dir}
                  initial={{ opacity: 0, x: dir >= 0 ? 80 : -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir >= 0 ? -80 : 80 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.src}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="media-zoom object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <span className="media-wash" />
              <span className="img-sheen" />
            </div>

            {/* Text */}
            <div className="p-8 sm:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                    {current.subtitle}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                    {current.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-muted">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => paginate(-1)}
                  aria-label="Previous"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => paginate(1)}
                  aria-label="Next"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="ml-2 flex gap-1.5">
                  {showcase.map((s, i) => (
                    <button
                      key={s.title}
                      type="button"
                      aria-label={`Go to ${s.title}`}
                      onClick={() => setPage([i, i > active ? 1 : -1])}
                      className={`h-2 rounded-full transition-all ${
                        i === active ? "w-7 bg-primary" : "w-2 bg-border"
                      }`}
                    />
                  ))}
                </div>

                <Link
                  href="/booking"
                  className="group ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Book
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
