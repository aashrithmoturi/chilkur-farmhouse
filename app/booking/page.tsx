import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Clock, Users, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import PageShell from "../../components/PageShell";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Book Your Stay | Chilkur Farmhouse Near Hyderabad",
  description:
    "Book Chilkur Farmhouse — a luxury private farm stay near Chilkur Balaji Temple, Hyderabad. Whole-property bookings with private pool, bonfire & organic farm. Call or WhatsApp to reserve.",
  alternates: { canonical: "/booking" },
};

const inclusions = [
  "Whole-property exclusive booking",
  "Private swimming pool access",
  "Bonfire & barbecue setup",
  "Fully equipped modern kitchen",
  "Free parking & high-speed WiFi",
  "Caretaker assistance on-site",
];

export default function BookingPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          Reserve your escape
        </p>
        <h1 className="text-3xl font-bold text-foreground sm:text-5xl">
          Book Your Stay
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          Reserve the entire Chilkur Farmhouse for your family, friends, or
          celebration. Share your dates and group size — we&apos;ll confirm
          availability within minutes.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Inclusions */}
          <div className="rounded-3xl border border-border bg-surface p-7 shadow-sm">
            <h2 className="text-xl font-bold text-foreground">
              What&apos;s included
            </h2>
            <ul className="mt-5 space-y-3">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-6 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Check-in {site.checkinTime} · Check-out {site.checkoutTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Sleeps up to 12 guests
              </span>
            </div>
          </div>

          {/* Contact to book */}
          <div className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-primary to-primary-hover p-7 text-white shadow-xl">
            <h2 className="text-xl font-bold">Quick & easy booking</h2>
            <p className="mt-2 text-white/85">
              Reach out directly for the fastest confirmation and best available
              rates.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:scale-105"
              >
                <FaWhatsapp className="h-5 w-5" /> Enquire on WhatsApp
              </a>
              <a
                href={`tel:${site.phonePrimary}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                <Phone className="h-5 w-5" /> Call {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                <Mail className="h-5 w-5" /> Email Us
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          Prefer to see more first?{" "}
          <Link href="/#gallery" className="font-semibold text-primary">
            Browse the gallery
          </Link>{" "}
          or{" "}
          <Link href="/#amenities" className="font-semibold text-primary">
            view amenities
          </Link>
          .
        </p>
      </section>
    </PageShell>
  );
}
