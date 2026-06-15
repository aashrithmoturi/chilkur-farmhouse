"use client";

import Image from "next/image";
import { Leaf, ShieldCheck, Heart } from "lucide-react";
import { Reveal } from "./motion/Reveal";

const pillars = [
  {
    icon: Leaf,
    title: "Calm Village Setting",
    text: "Surrounded by guava orchards and peacocks, with greenery and fresh air far from the city rush.",
  },
  {
    icon: ShieldCheck,
    title: "Steps From the Temple",
    text: "Just 200 metres from Chilkur Balaji Temple — a 5–10 minute walk — with secure on-site parking.",
  },
  {
    icon: Heart,
    title: "Comfortable 2 BHK",
    text: "Spacious air-conditioned rooms, a large hall with TV, and a fully equipped kitchen for an easy stay.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="right">
          <div className="group relative">
            <div className="relative h-[360px] overflow-hidden rounded-3xl shadow-2xl sm:h-[480px]">
              <Image
                src="/images/farm-1.jpg"
                alt="Guava orchards and greenery around Chilkur Balaji Lake View Villa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="img-sheen" />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden w-48 rounded-2xl glass p-5 shadow-xl sm:block">
              <p className="text-3xl font-bold text-gradient">200 m</p>
              <p className="text-sm text-muted">From Chilkur Balaji Temple</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Welcome to Chilkur Balaji Lake View Villa
            </p>
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              A peaceful stay beside the
              <span className="text-gradient"> Chilkur Balaji Temple</span>
            </h2>
            <div className="divider-accent mt-5" />
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              Just 200 metres from the revered Chilkur Balaji Temple, our
              well-maintained 2 BHK villa is a calm retreat for families and small
              gatherings. Wake up to birdsong and peacocks, relax in spacious
              air-conditioned rooms, and enjoy the quiet of guava orchards — with
              the temple only a short walk away.
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.1 * i}>
                <div className="card-glow group flex items-start gap-4 rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
