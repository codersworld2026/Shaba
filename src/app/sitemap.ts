import { MetadataRoute } from "next";
import { getAllCompanions, getAllBattles } from "@/lib/data";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const companions = getAllCompanions();
  const battles = getAllBattles();

  const staticPages = [
    "", "/companions", "/caliphs", "/ten-promised",
    "/battles", "/timeline", "/topics", "/about",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const companionPages = companions.map((c) => ({
    url: `${SITE_URL}/companions/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const battlePages = battles.map((b) => ({
    url: `${SITE_URL}/battles/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...companionPages, ...battlePages];
}
