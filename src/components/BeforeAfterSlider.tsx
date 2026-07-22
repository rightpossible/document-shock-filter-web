"use client";

import { useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Degraded",
  afterLabel = "Restored",
}: Props) {
  const [pos, setPos] = useState(50);

  return (
    <div className="overflow-hidden rounded-[12px] border border-border bg-surface shadow-[0_1px_0_rgba(12,18,34,0.04)]">
      <div className="relative aspect-[4/3] w-full select-none overflow-hidden bg-[#eef1f4]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterSrc}
          alt={afterLabel}
          className="absolute inset-0 h-full w-full object-contain"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={beforeSrc}
            alt={beforeLabel}
            className="absolute inset-0 h-full w-full object-contain"
            draggable={false}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-accent"
          style={{ left: `${pos}%` }}
        />
        <div className="absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[11px] uppercase tracking-wider text-white">
          {beforeLabel}
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-accent/90 px-2.5 py-1 text-[11px] uppercase tracking-wider text-white">
          {afterLabel}
        </div>
      </div>
      <div className="border-t border-border px-4 py-3">
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="w-full accent-[var(--accent)]"
          aria-label="Compare before and after"
        />
      </div>
    </div>
  );
}
