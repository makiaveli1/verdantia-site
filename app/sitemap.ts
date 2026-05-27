import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const routes = ["", "/offers", "/pathfinder", "/learning", "/company", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
