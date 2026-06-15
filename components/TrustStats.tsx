"use client";

import { site } from "../lib/site";
import AnimatedCounter from "./AnimatedCounter";
import { Stagger, StaggerItem } from "./motion/Reveal";

export default function TrustStats() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {site.stats.map((s) => (
            <StaggerItem key={s.label} className="group text-center transition-transform duration-300 hover:scale-105">
              <p className="text-4xl font-bold text-white transition-colors duration-300 group-hover:text-accent sm:text-5xl">
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  decimals={"decimals" in s ? (s.decimals as number) : 0}
                />
              </p>
              <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
