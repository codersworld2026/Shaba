import { CompanionCard } from "./companion-card";
import { BattleCard } from "./battle-card";
import type { Companion } from "@/types/companion";
import type { Battle } from "@/types/battle";

export function RelatedCompanions({
  title = "Related Companions",
  companions,
}: {
  title?: string;
  companions: Companion[];
}) {
  if (companions.length === 0) return null;

  return (
    <section>
      <h2 className="font-heading text-xl font-semibold mb-4">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companions.slice(0, 6).map((c) => (
          <CompanionCard
            key={c.slug}
            slug={c.slug}
            nameEnglish={c.nameEnglish}
            nameArabic={c.nameArabic}
            titles={c.titles}
            excerpt={c.excerpt}
            isCaliph={c.isCaliph}
            isAsharaMubasharah={c.isAsharaMubasharah}
            patternSeed={c.patternSeed}
          />
        ))}
      </div>
    </section>
  );
}

export function RelatedBattles({
  title = "Related Battles",
  battles,
}: {
  title?: string;
  battles: Battle[];
}) {
  if (battles.length === 0) return null;

  return (
    <section>
      <h2 className="font-heading text-xl font-semibold mb-4">{title}</h2>
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
    </section>
  );
}
