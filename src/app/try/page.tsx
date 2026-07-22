"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { MetricStrip } from "@/components/MetricStrip";
import { RestoreButton } from "@/components/RestoreButton";
import { UploadDropzone } from "@/components/UploadDropzone";
import { restoreImage, toDataUrl } from "@/lib/api";
import type { RestoreResult } from "@/lib/types";

export default function TryPage() {
  const [image, setImage] = useState<File | null>(null);
  const [reference, setReference] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<RestoreResult | null>(null);

  const previewUrl = useMemo(
    () => (image ? URL.createObjectURL(image) : null),
    [image],
  );

  async function onRestore() {
    if (!image) return;
    setBusy(true);
    setError(null);
    try {
      const data = await restoreImage(image, reference);
      setResult(data);
    } catch (e) {
      setResult(null);
      setError(e instanceof Error ? e.message : "Restore failed.");
    } finally {
      setBusy(false);
    }
  }

  function downloadRestored() {
    if (!result) return;
    const a = document.createElement("a");
    a.href = toDataUrl(result.restored_png_base64);
    a.download = "restored.png";
    a.click();
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
          Live restore
        </p>
        <h1 className="font-display mt-2 text-4xl tracking-tight text-ink sm:text-5xl">
          Try the pipeline
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted">
          Upload a water-degraded or faded page. Restoration usually takes
          5–15 seconds; the first request after idle may cold-start a bit
          longer.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <UploadDropzone
          label="Degraded document"
          hint="Required · PNG / JPEG / BMP / TIFF · under 8 MB"
          file={image}
          onFile={(f) => {
            setImage(f);
            setResult(null);
            setError(null);
          }}
        />
        <UploadDropzone
          label="Clean reference (optional)"
          hint="Only needed for PSNR / SSIM scores"
          file={reference}
          onFile={setReference}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <RestoreButton busy={busy} disabled={!image} onClick={onRestore} />
        <button
          type="button"
          disabled={busy}
          onClick={async () => {
            setError(null);
            setResult(null);
            const res = await fetch("/samples/degraded_01.jpg");
            const blob = await res.blob();
            setImage(
              new File([blob], "degraded_01.jpg", {
                type: blob.type || "image/jpeg",
              }),
            );
          }}
          className="btn-press rounded-[12px] border border-border bg-surface px-4 py-2 text-sm text-ink transition-colors duration-200 hover:border-accent/40 disabled:opacity-50"
        >
          Use sample image
        </button>
        {busy && (
          <p className="text-sm text-muted">
            Running LCR-weighted shock filter on Cloud Run…
          </p>
        )}
      </div>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-6 rounded-[12px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {result && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="mt-12 space-y-6"
          >
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="font-display text-2xl text-ink">Result</h2>
              <button
                type="button"
                onClick={downloadRestored}
                className="btn-press rounded-[12px] border border-border bg-surface px-4 py-2 text-sm text-ink transition-colors duration-200 hover:border-accent/40"
              >
                Download restored PNG
              </button>
            </div>
            <BeforeAfterSlider
              beforeSrc={
                previewUrl ?? toDataUrl(result.input_png_base64)
              }
              afterSrc={toDataUrl(result.restored_png_base64)}
            />
            <MetricStrip
              metrics={result.metrics}
              elapsedSeconds={result.elapsed_seconds}
              profile={result.profile}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
