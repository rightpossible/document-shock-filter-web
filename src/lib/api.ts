import type { RestoreResult } from "./types";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "https://document-shock-filter-23modl2eja-ew.a.run.app";

export function getApiUrl() {
  return API_URL;
}

export function toDataUrl(pngBase64: string) {
  return `data:image/png;base64,${pngBase64}`;
}

export const DEFAULT_PROFILE = "shock_v2_lcr_apso";

export const PROFILE_OPTIONS = [
  {
    id: "shock_v2_lcr_apso",
    label: "LCR-WSF + APSO (default)",
    hint: "Phase 3 Table 4.2 knobs baked in",
  },
  {
    id: "shock_v2_lcr",
    label: "Classic LCR",
    hint: "Committed soft LCR baseline",
  },
  {
    id: "apso_moderate",
    label: "APSO moderate (no LCR)",
    hint: "Full early APSO train dump",
  },
] as const;

export async function restoreImage(
  image: File,
  reference?: File | null,
  profile = DEFAULT_PROFILE,
): Promise<RestoreResult> {
  const form = new FormData();
  form.append("image", image);
  form.append("profile", profile);
  form.append("include_stages", "false");
  if (reference) {
    form.append("reference", reference);
  }

  let response: Response;
  try {
    response = await fetch(`${API_URL}/v1/restore`, {
      method: "POST",
      body: form,
    });
  } catch {
    throw new Error(
      "Could not reach the restore API. Check your network, or try again in a moment (cold start).",
    );
  }

  if (!response.ok) {
    let detail = "";
    try {
      const body = (await response.json()) as { detail?: string };
      detail = body.detail ?? "";
    } catch {
      /* ignore */
    }

    if (response.status === 413) {
      throw new Error(
        detail || "That image is too large. Please use a file under 8 MB.",
      );
    }
    if (response.status === 400) {
      throw new Error(detail || "Could not read that image. Try PNG or JPEG.");
    }
    if (response.status === 404) {
      throw new Error(detail || "Unknown restore profile.");
    }
    throw new Error(
      detail || `Restore failed (${response.status}). Please try again.`,
    );
  }

  return (await response.json()) as RestoreResult;
}
