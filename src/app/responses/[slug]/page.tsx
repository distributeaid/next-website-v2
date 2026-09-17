import { notFound } from "next/navigation";

import type { Chart } from "@/components/responses/HowWeWork";
import { ResponsePage } from "@/components/responses/ResponsePage";
import { getResponseOverview } from "@/utils/strapi/api";
import type { StrapiUpload } from "@/utils/strapi/types";
import { getCloudinaryMediaUrl } from "@/utils/strapi/media";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const overview = await getResponseOverview(slug);

  if (!overview) notFound();

  const desktop = toChart(overview.processImageDesktop);
  const mobile = toChart(overview.processImageMobile);

  return (
    <ResponsePage
      overview={overview}
      processImages={desktop && mobile ? { desktop, mobile } : undefined}
    />
  );
}

function toChart(upload?: StrapiUpload | null): Chart | null {
  const src = getProcessImageUrl(upload?.url);
  if (!src || !upload) return null;

  return { src, width: upload.width, height: upload.height };
}

function getProcessImageUrl(path?: string): string | null {
  if (!path) return null;

  const url = getCloudinaryMediaUrl(path);
  if (url) return url;

  if (process.env.NODE_ENV === "development" && path.startsWith("/")) {
    const baseUrl = process.env.STRAPI_URL;
    if (!baseUrl) throw new Error("Missing STRAPI_URL");
    return new URL(path, baseUrl).toString();
  }

  throw new Error("Process images must use secure Cloudinary URLs");
}
