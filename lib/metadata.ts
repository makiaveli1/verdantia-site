import type { Metadata } from "next";
import { siteUrl } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  robots?: Metadata["robots"];
};

const defaultOgImage = "/assets/verdantia-og.jpg";

export function pageMetadata({
  title,
  description,
  path = "/",
  robots,
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();

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
          url: defaultOgImage,
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: "Verdantia - Practical AI training and adoption support.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}
