import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/shared/hero-section";

export const metadata: Metadata = {
  title: "About & Methodology",
  description: "Learn about the Sahaba project, our methodology, content standards, and how we handle historical sources.",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About & Methodology"
        subtitle="Understanding our approach to presenting the lives of the Companions with accuracy, respect, and scholarly responsibility."
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="prose prose-sm max-w-none space-y-6 sm:space-y-8">
          <section>
            <h2 className="font-heading text-lg sm:text-xl font-semibold">Who Are the Companions?</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
              In Islamic tradition, the &ldquo;Sahaba&rdquo; (Companions) refers to anyone who met Prophet Muhammad (peace be upon him), believed in his message, and died as a Muslim. They number in the thousands and include men and women from every walk of life — merchants, scholars, warriors, farmers, former enslaved people, and rulers. Their stories are foundational to Islamic history and civilization.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg sm:text-xl font-semibold">Who Is This For?</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
              This website is designed for everyone — Muslims seeking to deepen their understanding, non-Muslims curious about Islamic history, students, educators, and researchers. We aim to present information in a way that is accessible, respectful, and educational without being polemical or sectarian.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg sm:text-xl font-semibold">Why This Project?</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
              While information about the Companions exists in many places, it is often scattered across books, websites, and lectures. This project aims to create a single, well-organized, beautifully designed resource that makes the stories of the Companions accessible to a modern audience — with proper source attribution and clear content status indicators.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg sm:text-xl font-semibold">Content Structure</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
              Each companion profile is organized into structured sections covering their childhood, life before Islam, conversion, relationship with the Prophet, battles, leadership, character, nicknames, legacy, and sources. This structure ensures consistency and makes it easy to compare and explore different aspects of their lives.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg sm:text-xl font-semibold">Source Methodology</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
              We draw primarily from established Islamic sources including:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">• <strong>Hadith collections</strong> — Sahih al-Bukhari, Sahih Muslim, and other major collections</li>
              <li className="flex items-center gap-2">• <strong>Seerah (Prophetic biography)</strong> — The Sealed Nectar, Ibn Hisham, and other works</li>
              <li className="flex items-center gap-2">• <strong>Classical history</strong> — Al-Tabari, Ibn Kathir, Ibn Sa&apos;d, and other historians</li>
              <li className="flex items-center gap-2">• <strong>Modern scholarship</strong> — Contemporary academic works on early Islamic history</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-lg sm:text-xl font-semibold">Content Status Indicators</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
              Every piece of content on this website carries a status indicator:
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-200">Verified</Badge>
                <span className="text-sm text-muted-foreground">Sourced from reliable, widely-accepted references</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-[10px] bg-amber-50 text-amber-600 border-amber-300">Reported in some sources</Badge>
                <span className="text-sm text-muted-foreground">Mentioned in some historical works but not universally accepted</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-[10px] text-muted-foreground">Source entry pending</Badge>
                <span className="text-sm text-muted-foreground">Content that has not yet been fully sourced</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-lg sm:text-xl font-semibold">On Historical Differences</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
              Islamic history, like all history, includes areas where scholars differ in their accounts. Different narrators may report different details about the same event. Where such differences exist, we aim to present the most widely accepted account while noting that alternative reports exist. We do not take sectarian positions or present disputed matters as settled fact.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg sm:text-xl font-semibold">Our Commitment</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
              This project is committed to being educational rather than polemical, respectful rather than sensational, and transparent about the limits of our knowledge. We welcome feedback and corrections from scholars and readers alike.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
