import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { brandData } from "@/data/brandData";
import { ambientiData } from "@/data/ambientiData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/progettazione-sartoriale`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/qualita-costruttiva`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contract`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contatti`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const brandRoutes: MetadataRoute.Sitemap = brandData
    .filter((b) => b.status !== "archived" && !b.seo.noindex)
    .map((b) => ({
      url: `${baseUrl}/brand/${b.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const ambientiRoutes: MetadataRoute.Sitemap = ambientiData.map((a) => ({
    url: `${baseUrl}/ambienti/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...ambientiRoutes, ...brandRoutes];
}
