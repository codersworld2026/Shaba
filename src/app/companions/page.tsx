import { Metadata } from "next";
import { getAllCompanions } from "@/lib/data";
import { HeroSection } from "@/components/shared/hero-section";
import { CompanionDirectoryClient } from "./companions-client";

export const metadata: Metadata = {
  title: "Companions Directory",
  description: "Browse and search the Companions of the Prophet Muhammad (peace be upon him).",
};

export default function CompanionsPage() {
  const companions = getAllCompanions();

  return (
    <>
      <HeroSection
        title="Companions of the Prophet"
        subtitle="Browse the men and women who stood beside Prophet Muhammad (peace be upon him) and shaped the course of Islamic history."
      />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <CompanionDirectoryClient companions={companions} />
      </div>
    </>
  );
}
