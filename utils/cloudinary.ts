import path from "path";

export function getCloudinaryPath(filename: string): string {
  return new URL(
    path.join(
      "w_1000,h_1000,c_limit",
      process.env.NEXT_PUBLIC_CLOUDINARY_DOMAIN_NAME || "",
      filename
    ),
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_BASE_URL
  ).href;
}
