"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "../lib/site";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

const items = [
  {
    icon: Phone,
    title: "Call Us",
    value: site.phoneDisplay,
    href: `tel:${site.phonePrimary}`,
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "Chat with us",
    href: `https://wa.me/${site.whatsapp}`,
  },
  {
    icon: Mail,
    title: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    title: "Location",
    value: site.address.locality + ", " + site.address.region,
    href: site.maps.directions,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-surface-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Get in touch
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Plan Your Stay
          </h2>
          <div className="divider-accent mx-auto mt-5" />
          <p className="mt-4 text-base text-muted sm:text-lg">
            Have a question or ready to book? Our team responds quickly — reach
            out any way you prefer.
          </p>
        </Reveal>

        <Stagger className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c) => (
            <StaggerItem key={c.title}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-glow group flex h-full flex-col items-center rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="font-semibold text-foreground">{c.title}</h3>
                <p className="mt-1 break-words text-sm text-muted">{c.value}</p>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mx-auto mt-10 flex max-w-md items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-6 py-4 text-sm text-muted">
          <Clock className="h-4 w-4 text-primary" />
          Check-in {site.checkinTime} · Check-out {site.checkoutTime}
        </Reveal>
      </div>
    </section>
  );
}
