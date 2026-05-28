import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const lastModified = new Date("2026-05-28T00:00:00.000Z");

const routes = [
  { path: "", priority: 1.0 },
  { path: "/offers", priority: 0.9 },
  { path: "/pathfinder", priority: 0.75 },
  { path: "/learning", priority: 0.8 },
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
