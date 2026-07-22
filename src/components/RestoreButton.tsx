"use client";

type Props = {
  busy: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export function RestoreButton({ busy, disabled, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || busy}
      className="btn-press inline-flex items-center justify-center rounded-[12px] bg-accent px-5 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {busy ? "Restoring…" : "Restore document"}
    </button>
  );
}
