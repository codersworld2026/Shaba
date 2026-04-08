import { getAllCompanions, getAllBattles } from "./data";

export interface SearchableItem {
  type: "companion" | "battle";
  slug: string;
  title: string;
  titleArabic: string;
  excerpt: string;
  keywords: string[];
}

export function buildSearchIndex(): SearchableItem[] {
  const companions = getAllCompanions();
  const battles = getAllBattles();

  return [
    ...companions.map((c) => ({
      type: "companion" as const,
      slug: c.slug,
      title: c.nameEnglish,
      titleArabic: c.nameArabic,
      excerpt: c.excerpt,
      keywords: [...c.nicknames, ...c.titles, ...c.kunyas, c.fullName],
    })),
    ...battles.map((b) => ({
      type: "battle" as const,
      slug: b.slug,
      title: b.nameEnglish,
      titleArabic: b.nameArabic,
      excerpt: b.excerpt,
      keywords: b.alternateNames || [],
    })),
  ];
}
