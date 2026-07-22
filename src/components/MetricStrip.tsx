import type { RestoreMetrics } from "@/lib/types";

type Props = {
  metrics: RestoreMetrics;
  elapsedSeconds: number;
  profile: string;
};

function Chip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[12px] border border-border bg-surface px-4 py-3">
      <div className="text-[11px] uppercase tracking-[0.12em] text-muted">
        {label}
      </div>
      <div className="mt-1 font-display text-xl text-ink">{value}</div>
    </div>
  );
}

function fmt(n: number | null, digits = 2) {
  if (n == null || Number.isNaN(n)) return "—";
  return n.toFixed(digits);
}

export function MetricStrip({ metrics, elapsedSeconds, profile }: Props) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <Chip label="Elapsed" value={`${elapsedSeconds.toFixed(2)} s`} />
      <Chip label="Size" value={`${metrics.width}×${metrics.height}`} />
      <Chip label="PSNR" value={fmt(metrics.psnr, 2)} />
      <Chip label="SSIM" value={fmt(metrics.ssim, 3)} />
      <div className="sm:col-span-2 lg:col-span-4 rounded-[12px] border border-border bg-accent-soft/50 px-4 py-3 text-sm text-muted">
        Profile <span className="text-ink">{profile}</span>
        {metrics.psnr == null
          ? " · PSNR/SSIM need an optional clean reference upload."
          : " · Scored against your reference image."}
      </div>
    </div>
  );
}
