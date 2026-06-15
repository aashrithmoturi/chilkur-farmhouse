"use client";

import { MapPin, Navigation, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "../lib/site";
import { Reveal } from "./motion/Reveal";

export default function GoogleMap() {
  return (
    <section id="location" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            How to reach us
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Find Chilkur Farmhouse
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-base text-muted">
            <MapPin className="h-4 w-4 text-primary" />
            {site.address.full}
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
            <iframe
              src={site.maps.embed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chilkur Farmhouse location map"
            />
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={site.maps.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/40 sm:w-auto"
          >
            <Navigation className="h-4 w-4" /> Get Directions
          </a>
          <a
            href={`tel:${site.phonePrimary}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary sm:w-auto"
          >
            <Phone className="h-4 w-4" /> Call {site.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/40 sm:w-auto"
          >
            <FaWhatsapp className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
