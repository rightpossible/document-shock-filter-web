"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_top,_#d8f3ec_0%,_transparent_55%)] opacity-70" />

      <section className="relative mx-auto grid max-w-5xl gap-12 px-5 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
        >
          <p className="font-display text-sm tracking-[0.04em] text-accent">
            Document Shock Filter
          </p>
          <h1 className="font-display mt-4 text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Sharpen water-smeared pages without amplifying the stain.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            An LCR-weighted shock filter for faded archival documents —
            training-free, open source, and runnable in your browser.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/try"
              className="btn-press inline-flex rounded-[12px] bg-accent px-5 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90"
            >
              Try restore
            </Link>
            <a
              href="https://github.com/rightpossible/document-shock-filter"
              target="_blank"
              rel="noreferrer"
              className="btn-press inline-flex rounded-[12px] border border-border bg-surface px-5 py-3 text-sm text-ink transition-colors duration-200 hover:border-accent/40"
            >
              Algorithm on GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.36, ease: "easeOut", delay: 0.06 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[12px] border border-border bg-surface shadow-[0_24px_60px_-36px_rgba(12,18,34,0.45)]">
            <Image
              src="/hero-compare.png"
              alt="Before and after restoration of a degraded handwritten letter"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <p className="mt-3 text-center text-xs uppercase tracking-[0.14em] text-muted">
            Degraded input · Restored output
          </p>
        </motion.div>
      </section>
    </div>
  );
}
