import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Users, Clock, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getAllBattles, getBattleBySlug, getCompanionsForBattle } from "@/lib/data";
import { HeroSection } from "@/components/shared/hero-section";
import { SourceList } from "@/components/shared/source-list";
import { RelatedCompanions } from "@/components/shared/related-content-section";
import { CONTENT_STATUS_LABELS } from "@/lib/constants";
import type { ContentBlock } from "@/types/common";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBattles().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const battle = getBattleBySlug(slug);
  if (!battle) return { title: "Not Found" };
  return { title: battle.nameEnglish, description: battle.metaDescription };
}

function ContentSection({ title, blocks }: { title: string; blocks: ContentBlock[] }) {
  if (blocks.length === 0) return null;
  return (
    <section>
      <h2 className="font-heading text-lg sm:text-xl font-semibold mb-3">{title}</h2>
      <div className="space-y-3">
        {blocks.map((block, i) => (
          <div key={i}>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/90">{block.text}</p>
            {block.status === "reported" && (
              <Badge variant="outline" className="mt-1 text-[10px] text-amber-600 border-amber-300">
                {CONTENT_STATUS_LABELS.reported}
              </Badge>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default async function BattleDetailPage({ params }: Props) {
  const { slug } = await params;
  const battle = getBattleBySlug(slug);
  if (!battle) notFound();

  const companions = getCompanionsForBattle(slug);

  return (
    <>
      <HeroSection
        title={battle.nameEnglish}
        breadcrumbs={[
          { label: "Battles", href: "/battles" },
          { label: battle.nameEnglish, href: `/battles/${slug}` },
        ]}
      >
        <div className="flex items-center gap-2">
          <p className="font-arabic text-lg text-primary/80">{battle.nameArabic}</p>
          <Badge>{battle.stats.outcome}</Badge>
        </div>
      </HeroSection>

      <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats bar */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-4">
          {[
            { icon: Users, label: "Muslim Force", value: battle.stats.muslimForceSize || "Unknown" },
            { icon: Shield, label: "Opposing Force", value: battle.stats.opposingForceSize || "Unknown" },
            { icon: MapPin, label: "Location", value: battle.stats.location },
            { icon: Clock, label: "Duration", value: battle.stats.duration || "Unknown" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5 rounded-lg border border-border/50 bg-card p-3 sm:p-4 text-center">
              <stat.icon className="h-4 w-4 text-primary" />
              <span className="text-[11px] sm:text-xs uppercase tracking-wide text-muted-foreground font-medium">{stat.label}</span>
              <span className="text-xs sm:text-sm font-medium">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Summary */}
        <section>
          <h2 className="font-heading text-lg sm:text-xl font-semibold mb-3">Summary</h2>
          <p className="text-sm sm:text-base leading-relaxed text-foreground/90">{battle.summary.text}</p>
        </section>

        <ContentSection title="Background" blocks={battle.background} />
        <ContentSection title="Key Events" blocks={battle.events} />
        <ContentSection title="Aftermath" blocks={battle.aftermath} />
        <ContentSection title="Lessons & Significance" blocks={battle.lessons} />

        {/* Notable Participants */}
        {battle.notableParticipants.length > 0 && (
          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">Notable Participants</h2>
            <div className="space-y-2">
              {battle.notableParticipants.map((p) => (
                <div key={p.companionSlug} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 rounded-lg border border-border/50 bg-card p-3 sm:p-4">
                  <a href={`/companions/${p.companionSlug}`} className="text-sm font-medium text-primary hover:underline">
                    {p.companionName}
                  </a>
                  <span className="text-xs text-muted-foreground">{p.role}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <RelatedCompanions title="Companions in This Battle" companions={companions} />

        {battle.sources.length > 0 && (
          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">Sources</h2>
            <SourceList sources={battle.sources} />
          </section>
        )}
      </div>
    </>
  );
}
