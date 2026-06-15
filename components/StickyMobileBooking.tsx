"use client";

import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { site } from "../lib/site";

/** Sticky bottom booking bar — mobile only, for maximum conversion. */
export default function StickyMobileBooking() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur-md sm:hidden">
      <div className="flex items-stretch gap-2 p-2.5">
        <a
          href={`tel:${site.phonePrimary}`}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm font-semibold text-foreground"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <Link
          href="/booking"
          className="inline-flex flex-[1.6] items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30"
        >
          <CalendarCheck className="h-4 w-4" /> Book Your Stay
        </Link>
      </div>
    </div>
  );
}
