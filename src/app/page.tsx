import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Swords, Crown, Star, Users } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { SearchBar } from "@/components/shared/search-bar";
import { CompanionCard } from "@/components/shared/companion-card";
import { BattleCard } from "@/components/shared/battle-card";
import { TopicChip } from "@/components/shared/topic-chip";
import { getCaliphs, getAllBattles, getTopics } from "@/lib/data";

export default function HomePage() {
  const caliphs = getCaliphs();
  const battles = getAllBattles().slice(0, 3);
  const topics = getTopics();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-accent/40 via-background to-background py-12 sm:py-20 md:py-32">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hero-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40 0L80 40L40 80L0 40Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="4" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-geo)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Discover the{" "}
            <span className="text-primary">Companions</span> of the Prophet
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Explore the lives, sacrifices, character, and achievements of the
            Companions of the Prophet Muhammad (peace be upon him) — the men and
            women who shaped the course of Islamic history.
          </p>
          <div className="mt-6 sm:mt-8">
            <SearchBar variant="hero" />
          </div>
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href="/companions">
              <Users className="mr-2 h-4 w-4" />
              Browse Companions
            </LinkButton>
            <LinkButton href="/about" variant="outline">
              Learn About This Project
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {topics.map((topic) => (
            <TopicChip key={topic.id} topic={topic} />
          ))}
        </div>
      </section>

      {/* Featured Cards */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            { title: "Four Caliphs", desc: "The Rightly Guided leaders of the Muslim community", href: "/caliphs", icon: Crown, color: "bg-emerald-50 dark:bg-emerald-950/30" },
            { title: "Ten Promised Jannah", desc: "The companions promised Paradise by name", href: "/ten-promised", icon: Star, color: "bg-amber-50 dark:bg-amber-950/30" },
            { title: "Battle Explorer", desc: "Major battles and expeditions of early Islam", href: "/battles", icon: Swords, color: "bg-red-50 dark:bg-red-950/30" },
            { title: "Timeline", desc: "Trace the journey from Revelation to the Caliphates", href: "/timeline", icon: Clock, color: "bg-blue-50 dark:bg-blue-950/30" },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`group flex flex-col items-start gap-2 sm:gap-3 rounded-xl border border-border/50 p-4 sm:p-5 transition-all hover:shadow-md hover:border-primary/20 ${card.color}`}
            >
              <card.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <div>
                <h3 className="font-heading text-sm font-semibold group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground hidden sm:block">{card.desc}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* For Beginners */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border/50 bg-card p-4 sm:p-6 lg:p-8">
          <div className="flex items-start gap-3">
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h2 className="font-heading text-lg sm:text-xl font-semibold">
                New to Islamic History? Start Here
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                The &ldquo;Sahaba&rdquo; (Arabic: الصحابة) refers to the Companions of
                Prophet Muhammad (peace be upon him) — the people who met him,
                believed in his message, and supported the early Muslim community.
                They come from diverse backgrounds: merchants, farmers, scholars,
                warriors, men and women, enslaved and free. Their stories span
                themes of courage, transformation, justice, and faith that continue
                to resonate across cultures and centuries.
              </p>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                This website is designed to be welcoming for everyone — whether
                you&apos;re Muslim or non-Muslim, a student of history, or simply
                curious. We present information respectfully and note where
                historical accounts vary.
              </p>
              <Link
                href="/about"
                className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Read Our Methodology <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companions */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h2 className="font-heading text-xl sm:text-2xl font-semibold">
            The Rightly Guided Caliphs
          </h2>
          <Link href="/caliphs" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
            View All <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {caliphs.map((c) => (
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

      {/* Featured Battles */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h2 className="font-heading text-xl sm:text-2xl font-semibold">Key Battles</h2>
          <Link href="/battles" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
            View All <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
}
