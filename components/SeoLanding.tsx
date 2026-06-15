import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import PageShell from "./PageShell";
import { site, seoLinks } from "../lib/site";

export type SeoSection = { heading: string; body: string };

type Props = {
  badge?: string;
  h1: string;
  intro: string;
  highlights?: string[];
  sections: SeoSection[];
};

export default function SeoLanding({
  badge = "Chilkur Farmhouse",
  h1,
  intro,
  highlights = [],
  sections,
}: Props) {
  return (
    <PageShell>
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          {badge}
        </p>
        <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-5xl">
          {h1}
        </h1>
        <p className="mt-6 text-base leading-8 text-muted sm:text-lg">{intro}</p>

        {highlights.length > 0 && (
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 text-sm text-foreground sm:text-base"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {s.heading}
            </h2>
            <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
              {s.body}
            </p>
          </section>
        ))}

        {/* Location line */}
        <p className="mt-10 flex items-center gap-2 text-sm text-muted">
          <MapPin className="h-4 w-4 text-primary" />
          {site.address.full}
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-border bg-surface-muted p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-foreground">
              Ready to book your stay?
            </p>
            <p className="text-sm text-muted">
              Call {site.phoneDisplay} or message us on WhatsApp.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105"
            >
              Book Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105"
            >
              <FaWhatsapp className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Internal links */}
        <nav className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Explore More
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {seoLinks
              .filter((l) => l.href !== "")
              .map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}
          </div>
        </nav>
      </article>
    </PageShell>
  );
}
