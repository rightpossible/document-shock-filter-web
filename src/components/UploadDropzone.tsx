"use client";

type Props = {
  label: string;
  hint: string;
  file: File | null;
  onFile: (file: File | null) => void;
  accept?: string;
};

export function UploadDropzone({
  label,
  hint,
  file,
  onFile,
  accept = "image/png,image/jpeg,image/bmp,image/tiff,.png,.jpg,.jpeg,.bmp,.tif,.tiff",
}: Props) {
  return (
    <label className="group flex cursor-pointer flex-col rounded-[12px] border border-dashed border-border bg-surface px-5 py-6 transition-colors duration-200 hover:border-accent/40">
      <span className="text-sm font-medium text-ink">{label}</span>
      <span className="mt-1 text-sm text-muted">{hint}</span>
      <span className="mt-4 text-sm text-accent">
        {file ? file.name : "Drop a file or click to browse"}
      </span>
      <input
        type="file"
        accept={accept}
        className="sr-only"
        onChange={(e) => onFile(e.target.files?.[0] ?? null)}
      />
    </label>
  );
}
