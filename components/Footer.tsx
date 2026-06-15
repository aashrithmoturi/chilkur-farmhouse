import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { site, navLinks, seoLinks } from "../lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={site.logo}
                alt={`${site.name} logo`}
                width={48}
                height={48}
                className="h-11 w-11 rounded-xl object-contain ring-1 ring-accent/30"
              />
              <span className="text-lg font-semibold text-foreground">
                {site.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">
              A luxury farm stay near Chilkur Balaji Temple, Hyderabad. Private
              pool, bonfire nights, and organic farm — your perfect weekend
              getaway.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-sm text-muted"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO landing pages */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Popular Searches
            </h3>
            <ul className="mt-4 space-y-2.5">
              {seoLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-sm text-muted"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {site.address.full}
              </li>
              <li>
                <a
                  href={`tel:${site.phonePrimary}`}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-primary"
                >
                  <FaWhatsapp className="h-4 w-4 shrink-0 text-primary" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Luxury Farm Stay · Chilkur, Hyderabad, Telangana
          </p>
        </div>
      </div>
    </footer>
  );
}
