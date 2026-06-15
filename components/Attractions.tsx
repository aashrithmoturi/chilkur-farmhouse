"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { attractions } from "../lib/site";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

export default function Attractions() {
  return (
    <section id="attractions" className="relative overflow-hidden bg-surface-muted py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div
          className="animate-blob absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          style={{ animationDelay: "4s" }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Explore the area
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Nearby Attractions
          </h2>
          <div className="divider-accent mx-auto mt-5" />
          <p className="mt-4 text-base text-muted sm:text-lg">
            Temples, lakes, and nature reserves — all within easy reach of Chilkur
            Farmhouse.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {attractions.map((a) => (
            <StaggerItem key={a.name}>
              <article className="card-glow group h-full overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    loading="lazy"
                    className="media-zoom object-cover"
                  />
                  <span className="media-wash" />
                  <span className="img-sheen" />
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                    <MapPin className="h-3 w-3" /> {a.distance}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground">{a.name}</h3>
                  <p className="mt-1.5 text-sm text-muted">{a.description}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
