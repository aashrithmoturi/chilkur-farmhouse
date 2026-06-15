"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "../lib/site";
import { Reveal } from "./motion/Reveal";

export default function BookingCTA() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-hover px-6 py-12 text-center shadow-2xl sm:px-12 sm:py-16">
          <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-2xl font-bold text-white sm:text-4xl">
              Ready for your luxury farm escape?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85 sm:text-lg">
              Book the entire property for your family, friends, or celebration.
              Limited dates available each month.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="btn-shine animate-glow group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all hover:scale-105 sm:w-auto"
              >
                Book Your Stay
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:scale-105 hover:bg-white/20 sm:w-auto"
              >
                <FaWhatsapp className="h-5 w-5" /> Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
