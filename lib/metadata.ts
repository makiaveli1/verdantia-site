import type { Metadata } from "next";
import { siteUrl } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function pageMetadata({
  title,
  description,
  path = "/",
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
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
          url: "/assets/verdantia-og.svg",
          width: 1200,
          height: 630,
          alt: "Verdantia - Practical AI. Real Impact.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/verdantia-og.svg"],
    },
  };
}
