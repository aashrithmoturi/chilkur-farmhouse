"use client";

import {
  Waves,
  Flame,
  Trees,
  Wifi,
  Car,
  Users,
  UtensilsCrossed,
  Music,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

const amenities = [
  { icon: Waves, title: "Private Swimming Pool", text: "Exclusive pool with a sun-lounge deck." },
  { icon: Flame, title: "Bonfire Evenings", text: "Crackling bonfire with music & barbecue." },
  { icon: Trees, title: "Organic Farm", text: "Fresh produce, orchards & nature trails." },
  { icon: Wifi, title: "High-Speed WiFi", text: "Stay connected across the property." },
  { icon: Car, title: "Free Parking", text: "Ample secure on-site parking." },
  { icon: Users, title: "Family Friendly", text: "Safe, spacious & perfect for all ages." },
  { icon: UtensilsCrossed, title: "Modern Kitchen", text: "Fully equipped for self-catering or chefs." },
  { icon: Music, title: "Music & Events", text: "Speaker setup & lawn for celebrations." },
];

export default function Amenities() {
  return (
    <section id="amenities" className="relative overflow-hidden bg-surface-muted py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div
          className="animate-blob absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          style={{ animationDelay: "3s" }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Everything you need
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Premium Amenities
          </h2>
          <div className="divider-accent mx-auto mt-5" />
          <p className="mt-4 text-base text-muted sm:text-lg">
            Thoughtfully curated facilities that make your stay seamless,
            indulgent, and memorable.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {amenities.map((a) => (
            <StaggerItem key={a.title}>
              <div className="card-glow group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-x-0 -top-px h-1 scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100" />
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <a.icon className="h-6 w-6" />
                </span>
                <h3 className="font-semibold text-foreground">{a.title}</h3>
                <p className="mt-1 text-sm text-muted">{a.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
