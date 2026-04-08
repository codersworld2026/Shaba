import { Metadata } from "next";
import { getAllBattles } from "@/lib/data";
import { HeroSection } from "@/components/shared/hero-section";
import { BattleCard } from "@/components/shared/battle-card";

export const metadata: Metadata = {
  title: "Battle Explorer",
  description: "Explore the major battles and expeditions of early Islam, from Badr to Tabuk.",
};

export default function BattlesPage() {
  const battles = getAllBattles();

  return (
    <>
      <HeroSection
        title="Battles of Early Islam"
        subtitle="Explore the major military engagements and expeditions that shaped the early Muslim community. Each battle carries lessons of faith, strategy, and sacrifice."
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {battles.map((b) => (
            <BattleCard
              key={b.slug}
              slug={b.slug}
              nameEnglish={b.nameEnglish}
              nameArabic={b.nameArabic}
              dateLabel={b.date.gregorian.description}
              location={b.stats.location}
              outcome={b.stats.outcome}
              excerpt={b.excerpt}
              companionCount={b.companionSlugs.length}
            />
          ))}
        </div>
      </div>
    </>
  );
}
