"use client";

import { motion } from "framer-motion";

const stages = [
  {
    title: "Bilateral smoothing",
    body: "Calm scan noise while keeping ink edges intact so the shock filter does not sharpen grain.",
  },
  {
    title: "Flat-field stain removal",
    body: "Estimate the paper background and lift water tide-marks toward white without erasing strokes.",
  },
  {
    title: "Contrast normalisation",
    body: "Bring faint pages into a stable intensity range before local contrast is measured.",
  },
  {
    title: "LCR-weighted shock filter",
    body: "Sharpen where local contrast looks like ink; hold back updates on smear halos and stains.",
  },
  {
    title: "Light post-processing",
    body: "Optional whitening and a gentle stretch so the page reads clean for people and metrics.",
  },
];

export default function MethodPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
          Pipeline
        </p>
        <h1 className="font-display mt-2 text-4xl tracking-tight text-ink sm:text-5xl">
          How it works
        </h1>
        <p className="mt-3 text-muted">
          Five stages, one job: recover readable text from water-degraded scans
          without training a neural network.
        </p>
      </motion.div>

      <ol className="mt-12 space-y-0">
        {stages.map((stage, i) => (
          <motion.li
            key={stage.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.24,
              ease: "easeOut",
              delay: 0.05 * i,
            }}
            className="relative border-l border-border pl-6 pb-10 last:pb-0"
          >
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
              Stage {i + 1}
            </p>
            <h2 className="font-display mt-1 text-2xl text-ink">
              {stage.title}
            </h2>
            <p className="mt-2 text-muted">{stage.body}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
