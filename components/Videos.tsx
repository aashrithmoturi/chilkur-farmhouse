"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { videos } from "../lib/site";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

export default function Videos() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="videos" className="relative overflow-hidden bg-surface-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            See it in motion
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Video Experience
          </h2>
          <div className="divider-accent mx-auto mt-5" />
          <p className="mt-4 text-base text-muted sm:text-lg">
            Walkthroughs, aerial drone tours, and real guest moments at Chilkur
            Farmhouse.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <StaggerItem key={v.src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block aspect-video w-full overflow-hidden rounded-2xl shadow-lg focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Image
                  src={v.poster}
                  alt={v.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  className="media-zoom object-cover"
                />
                <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/45" />
                <span className="media-wash" />
                <span className="img-sheen" />
                <span className="absolute inset-0 z-[2] flex items-center justify-center">
                  <span className="play-ring relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-1 h-7 w-7 fill-current" />
                  </span>
                </span>
                <span className="absolute bottom-4 left-4 text-base font-semibold text-white drop-shadow">
                  {v.title}
                </span>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Modal player */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={videos[active].src}
                poster={videos[active].poster}
                controls
                autoPlay
                playsInline
                className="aspect-video w-full rounded-2xl bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
