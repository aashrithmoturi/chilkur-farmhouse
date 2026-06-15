"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Star, MapPin, ArrowRight, Wind, ChefHat, Landmark, ChevronDown } from "lucide-react";
import { site } from "../lib/site";
import { useReviews } from "./useReviews";

const quickAmenities = [
  { icon: Wind, label: "AC Rooms" },
  { icon: ChefHat, label: "Full Kitchen" },
  { icon: Landmark, label: "Near Balaji Temple" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// Pre-computed gold embers for a deterministic (SSR-safe) layout
const embers = [
  { left: "8%", size: 6, delay: 0, duration: 16 },
  { left: "18%", size: 4, delay: 6, duration: 22 },
  { left: "28%", size: 8, delay: 2, duration: 18 },
  { left: "40%", size: 5, delay: 9, duration: 24 },
  { left: "52%", size: 7, delay: 1, duration: 17 },
  { left: "63%", size: 4, delay: 5, duration: 21 },
  { left: "72%", size: 9, delay: 3, duration: 19 },
  { left: "82%", size: 5, delay: 7, duration: 23 },
  { left: "90%", size: 6, delay: 4, duration: 20 },
  { left: "47%", size: 3, delay: 11, duration: 26 },
];

export default function Hero() {
  const reviews = useReviews();
  const rating = reviews?.rating ?? 4.8;
  const count = reviews?.count ?? 19;
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Gradient background with translucent crest cover */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-hover to-[#1a0a25]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/35" />

        {/* Aurora mesh — drifting luminous blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="animate-aurora absolute -left-1/4 top-1/4 h-[60vmin] w-[60vmin] rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(63,174,132,0.55) 0%, rgba(63,174,132,0) 70%)",
            }}
          />
          <div
            className="animate-aurora-slow absolute right-[-15%] top-[10%] h-[55vmin] w-[55vmin] rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(199,154,58,0.5) 0%, rgba(199,154,58,0) 70%)",
            }}
          />
          <div
            className="animate-aurora absolute bottom-[-10%] left-1/3 h-[50vmin] w-[50vmin] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(120,80,160,0.5) 0%, rgba(120,80,160,0) 70%)",
            }}
          />
        </div>

        {/* Floating gold embers */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {embers.map((e, i) => (
            <span
              key={i}
              className="animate-ember absolute bottom-0 rounded-full bg-accent"
              style={{
                left: e.left,
                width: e.size,
                height: e.size,
                animationDelay: `${e.delay}s`,
                animationDuration: `${e.duration}s`,
                boxShadow: "0 0 8px 2px rgba(199,154,58,0.6)",
              }}
            />
          ))}
        </div>

        {/* Soft golden glow behind the crest */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(199,154,58,0.35) 0%, rgba(199,154,58,0) 70%)",
          }}
        />

        {/* Translucent crest watermark */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={site.logo}
            alt=""
            aria-hidden
            width={900}
            height={900}
            priority
            className="animate-float-slow w-[78vw] max-w-[620px] select-none opacity-25 mix-blend-screen drop-shadow-[0_0_60px_rgba(199,154,58,0.35)]"
          />
        </motion.div>

        {/* Vignette for depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 40%, transparent 45%, rgba(10,4,18,0.55) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16 text-center sm:px-6"
      >
        <motion.div
          variants={item}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md"
        >
          <span className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </span>
          <span>
            {rating.toFixed(1)} · Rated by {count}+ guests on Google
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-xl sm:text-6xl lg:text-7xl"
        >
          A Peaceful 2 BHK Villa
          <br />
          <span className="text-shimmer">
            Beside Chilkur Balaji Temple
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base text-white/90 drop-shadow sm:text-lg"
        >
          A serene, well-maintained villa just 200 metres from the temple —
          spacious air-conditioned rooms, a full kitchen, and calm surroundings of
          guava orchards and peacocks. The perfect family getaway near Hyderabad.
        </motion.p>

        <motion.div variants={item} className="mt-6 flex items-center justify-center gap-2 text-sm text-white/80">
          <MapPin className="h-4 w-4 text-accent" />
          <span>Chilkur, Hyderabad · 200 m from Chilkur Balaji Temple</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/booking"
            className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-[1.03] hover:bg-primary-hover hover:shadow-2xl hover:shadow-primary/50 sm:w-auto"
          >
            Book Your Stay
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/#gallery"
            className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-white/70 hover:bg-white/20 sm:w-auto"
          >
            Explore Property
          </Link>
        </motion.div>

        {/* Quick amenities preview */}
        <motion.div
          variants={item}
          className="mx-auto mt-10 flex max-w-md flex-wrap items-center justify-center gap-3"
        >
          {quickAmenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
            >
              <Icon className="h-4 w-4 text-accent" />
              {label}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="/#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="block"
        >
          <ChevronDown className="h-7 w-7" />
        </motion.span>
      </motion.a>
    </section>
  );
}
