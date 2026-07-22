"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const metrics = [
  { label: "LCR ink vs halo", value: "3.51×" },
  { label: "Proposed PSNR", value: "13.90 dB" },
  { label: "Evaluation set", value: "414 images" },
  { label: "Classic shock PSNR", value: "5.30 dB" },
];

export default function ResultsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
          Chapter 4 highlights
        </p>
        <h1 className="font-display mt-2 text-4xl tracking-tight text-ink sm:text-5xl">
          Results at a glance
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Numbers from the thesis evaluation on DIBCO water-degraded pages.
          SSIM vs bilateral-only needs care against a binary ground truth — the
          clean scientific win is PSNR and the LCR ablation.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.22,
              ease: "easeOut",
              delay: 0.04 * i,
            }}
            className="rounded-[12px] border border-border bg-surface px-4 py-5"
          >
            <p className="text-[11px] uppercase tracking-[0.12em] text-muted">
              {m.label}
            </p>
            <p className="font-display mt-2 text-3xl text-ink">{m.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {[
          {
            src: "/gallery/water-moderate.png",
            caption: "Moderate water damage — before / after",
          },
          {
            src: "/gallery/water-severe.png",
            caption: "Severe water damage — before / after",
          },
        ].map((g) => (
          <figure key={g.src} className="overflow-hidden rounded-[12px] border border-border bg-surface">
            <Image
              src={g.src}
              alt={g.caption}
              width={1200}
              height={800}
              className="h-auto w-full"
            />
            <figcaption className="border-t border-border px-4 py-3 text-sm text-muted">
              {g.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
