export const DEFAULT_PROFILE = "faded_handwriting";

export const PROFILE_OPTIONS = [
  {
    id: "faded_handwriting",
    label: "Faded handwriting (recommended)",
    hint: "Thin cursive / faded scans — bilateral + CLAHE, no shock",
  },
  {
    id: "shock_v2_lcr_apso",
    label: "Water damage (LCR + APSO)",
    hint: "DIBCO water-degraded pages — stain removal + LCR shock",
  },
  {
    id: "shock_v2_lcr",
    label: "Classic LCR",
    hint: "Soft LCR baseline",
  },
  {
    id: "b1_bilateral_only",
    label: "Bilateral only",
    hint: "Minimal smoothing + stretch",
  },
  {
    id: "apso_moderate",
    label: "APSO moderate (no LCR)",
    hint: "Early full APSO dump",
  },
] as const;
