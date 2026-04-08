import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Crown, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getAllCompanions, getCompanionBySlug, getBattlesForCompanion } from "@/lib/data";
import { HeroSection } from "@/components/shared/hero-section";
import { QuickFacts } from "@/components/shared/quick-facts";
import { BadgeGroup } from "@/components/shared/badge-group";
import { TabsSection } from "@/components/shared/tabs-section";
import { RelatedBattles } from "@/components/shared/related-content-section";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCompanions().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const companion = getCompanionBySlug(slug);
  if (!companion) return { title: "Not Found" };
  return {
    title: companion.nameEnglish,
    description: companion.metaDescription,
  };
}

export default async function CompanionProfilePage({ params }: Props) {
  const { slug } = await params;
  const companion = getCompanionBySlug(slug);
  if (!companion) notFound();

  const battles = getBattlesForCompanion(slug);

  return (
    <>
      <HeroSection
        title={companion.nameEnglish}
        subtitle={companion.fullName}
        breadcrumbs={[
          { label: "Companions", href: "/companions" },
          { label: companion.nameEnglish, href: `/companions/${slug}` },
        ]}
      >
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-arabic text-xl text-primary/80">{companion.nameArabic}</p>
          {companion.isCaliph && (
            <Badge className="gap-1 bg-primary/90">
              <Crown className="h-3 w-3" /> {companion.caliphOrder
                ? `${["First", "Second", "Third", "Fourth"][companion.caliphOrder - 1]} Caliph`
                : "Caliph"}
            </Badge>
          )}
          {companion.isAsharaMubasharah && (
            <Badge variant="secondary" className="gap-1 bg-islamic-gold/80 text-foreground">
              <Star className="h-3 w-3" /> Promised Jannah
            </Badge>
          )}
        </div>
      </HeroSection>

      <div className="mx-auto max-w-7xl space-y-6 sm:space-y-10 px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
        <QuickFacts facts={companion.quickFacts} />

        <section>
          <h2 className="font-heading text-base sm:text-lg font-semibold mb-3">
            Titles & Nicknames
          </h2>
          <BadgeGroup items={[...companion.titles, ...companion.nicknames, ...companion.kunyas]} />
        </section>

        <section>
          <TabsSection tabs={companion.tabs} />
        </section>

        {battles.length > 0 && (
          <RelatedBattles title="Battles Participated In" battles={battles} />
        )}
      </div>
    </>
  );
}
