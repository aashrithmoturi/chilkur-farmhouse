"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, site } from "../lib/site";
import ThemeToggle from "./theme/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:py-4">
        {/* Logo */}
        <Link href="/#home" className="group flex items-center gap-2">
          <Image
            src={site.logo}
            alt={`${site.name} logo`}
            width={48}
            height={48}
            className="h-11 w-11 rounded-xl object-contain ring-1 ring-accent/30 transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span
            className={`text-lg font-semibold tracking-tight ${
              scrolled ? "text-foreground" : "text-white drop-shadow"
            }`}
          >
            {site.name}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link relative rounded-full px-4 py-2 text-sm font-medium ${
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`tel:${site.phonePrimary}`}
            aria-label="Call us"
            className={`hidden h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface sm:inline-flex ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <Link
            href="/booking"
            className="btn-shine hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/40 sm:inline-flex"
          >
            Book Now
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[78%] max-w-sm flex-col bg-surface p-6 shadow-2xl lg:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-lg font-semibold text-foreground">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-all duration-300 hover:translate-x-1 hover:bg-surface-muted hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Link
                  href="/booking"
                  onClick={() => setOpen(false)}
                  className="btn-shine rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Book Your Stay
                </Link>
                <a
                  href={`tel:${site.phonePrimary}`}
                  className="rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-foreground"
                >
                  Call {site.phoneDisplay}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
