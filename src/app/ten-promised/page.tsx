import { Metadata } from "next";
import { getAsharaMubasharah } from "@/lib/data";
import { HeroSection } from "@/components/shared/hero-section";
import { CompanionCard } from "@/components/shared/companion-card";

export const metadata: Metadata = {
  title: "The Ten Promised Paradise",
  description: "Learn about the ten companions specifically promised paradise (Al-Ashara Al-Mubasharah) by Prophet Muhammad (peace be upon him).",
};

export default function TenPromisedPage() {
  const companions = getAsharaMubasharah();

  return (
    <>
      <HeroSection
        title="The Ten Promised Paradise"
        subtitle="Al-Ashara Al-Mubasharah — the ten companions whom Prophet Muhammad (peace be upon him) specifically named as being promised Paradise. Their lives exemplify the highest ideals of faith, service, and sacrifice."
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-xl border border-border/50 bg-card p-6">
          <h2 className="font-heading text-lg font-semibold mb-2">The Hadith of the Ten</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Prophet Muhammad (peace be upon him) is reported to have said: &ldquo;Abu Bakr is in Paradise, Umar is in Paradise, Uthman is in Paradise, Ali is in Paradise, Talha is in Paradise, Al-Zubayr is in Paradise, Abdur-Rahman ibn Awf is in Paradise, Sa&apos;d ibn Abi Waqqas is in Paradise, Sa&apos;id ibn Zayd is in Paradise, and Abu Ubayda ibn Al-Jarrah is in Paradise.&rdquo; This hadith is recorded in the collections of At-Tirmidhi and Abu Dawud, and is classified as authentic (sahih) by scholars.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {companions.map((c) => (
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
      </div>
    </>
  );
}
