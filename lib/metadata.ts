import type { Metadata } from "next";
import { siteUrl } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    type?: string;
    alt?: string;
  };
  robots?: Metadata["robots"];
};

const defaultOgImage = "/assets/verdantia-og.jpg";

export function pageMetadata({
  title,
  description,
  path = "/",
  image,
  robots,
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();
  const ogImage = image ?? {
    url: defaultOgImage,
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: "Verdantia - Practical AI training and adoption support.",
  };
  const ogImageUrl = new URL(ogImage.url, siteUrl).toString();

  return {
    title,
    description,
    robots,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Verdantia",
      locale: "en_IE",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: ogImage.width ?? 1200,
          height: ogImage.height ?? 630,
          type: ogImage.type,
          alt: ogImage.alt ?? "Verdantia - Practical AI training and adoption support.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
