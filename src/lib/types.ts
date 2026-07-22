export type RestoreMetrics = {
  psnr: number | null;
  ssim: number | null;
  mse: number | null;
  brisque: number | null;
  width: number;
  height: number;
};

export type RestoreResult = {
  profile: string;
  elapsed_seconds: number;
  input_png_base64: string;
  restored_png_base64: string;
  metrics: RestoreMetrics;
  stages: Record<string, string>;
  warnings: string[];
};
