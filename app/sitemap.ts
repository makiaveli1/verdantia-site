import type { MetadataRoute } from "next";
import { offerPages, siteUrl } from "@/lib/site";

const lastModified = new Date("2026-05-28T00:00:00.000Z");

const routes = [
  { path: "", priority: 1.0 },
  { path: "/offers", priority: 0.9 },
  ...offerPages.map((offer) => ({ path: offer.path, priority: offer.slug === "practical-ai-workshop" ? 0.92 : 0.84 })),
  { path: "/pathfinder", priority: 0.75 },
  { path: "/learning", priority: 0.8 },
  { path: "/resources", priority: 0.72 },
  { path: "/company", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
