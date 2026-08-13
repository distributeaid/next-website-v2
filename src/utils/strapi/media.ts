export function getCloudinaryMediaUrl(path: string): string | null {
  try {
    const url = new URL(path);
    return url.protocol === "https:" && url.hostname === "res.cloudinary.com"
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}
