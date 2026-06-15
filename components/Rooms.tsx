"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, BedDouble, Check } from "lucide-react";
import { rooms, showPricing } from "../lib/site";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

export default function Rooms() {
  return (
    <section id="rooms" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Stay options
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Rooms &amp; Pricing
          </h2>
          <div className="divider-accent mx-auto mt-5" />
          <p className="mt-4 text-base text-muted sm:text-lg">
            Choose the exclusive whole-property booking or individual rooms —
            tailored to your group size and occasion.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <StaggerItem key={room.name}>
              <article className="card-glow group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="media-zoom object-cover"
                  />
                  <span className="media-wash" />
                  <span className="img-sheen" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-foreground">{room.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-primary" />
                      {room.occupancy}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <BedDouble className="h-4 w-4 text-primary" />
                      {room.beds}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {room.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-border pt-4">
                    {showPricing ? (
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-wide text-muted">
                            Weekday
                          </p>
                          <p className="text-lg font-bold text-foreground">
                            {room.weekdayPrice}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs uppercase tracking-wide text-muted">
                            Weekend
                          </p>
                          <p className="text-lg font-bold text-foreground">
                            {room.weekendPrice}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm font-medium text-foreground">
                        Pricing on request
                      </p>
                    )}
                  </div>

                  <Link
                    href="/booking"
                    className="btn-shine mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.03] hover:bg-primary-hover"
                  >
                    Check Availability
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
