import { Metadata } from "next";
import { getCaliphs } from "@/lib/data";
import { HeroSection } from "@/components/shared/hero-section";
import { CompanionCard } from "@/components/shared/companion-card";

export const metadata: Metadata = {
  title: "The Four Rightly Guided Caliphs",
  description: "Learn about the four Rightly Guided Caliphs (Al-Khulafa Ar-Rashidun) who led the Muslim community after Prophet Muhammad (peace be upon him).",
};

export default function CaliphsPage() {
  const caliphs = getCaliphs();

  return (
    <>
      <HeroSection
        title="The Rightly Guided Caliphs"
        subtitle="Al-Khulafa Ar-Rashidun — the four companions who led the Muslim community after the passing of Prophet Muhammad (peace be upon him). Their era is regarded as a model of just and principled governance in Islamic tradition."
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 rounded-xl border border-border/50 bg-card p-4 sm:p-6">
          <h2 className="font-heading text-base sm:text-lg font-semibold mb-2">Who Were the Caliphs?</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            After the death of Prophet Muhammad (peace be upon him) in 632 CE, the Muslim community selected leaders to guide them. The first four — Abu Bakr, Umar, Uthman, and Ali — are known as the &ldquo;Rightly Guided Caliphs&rdquo; (Al-Khulafa Ar-Rashidun). They are honored for their closeness to the Prophet, their integrity, and their service to the community during a transformative period in Islamic history.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
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
      </div>
    </>
  );
}
