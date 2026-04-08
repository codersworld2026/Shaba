import { Metadata } from "next";
import { getTimelineEvents } from "@/lib/data";
import { HeroSection } from "@/components/shared/hero-section";
import { TimelineBlock } from "@/components/shared/timeline-block";

export const metadata: Metadata = {
  title: "Timeline of Early Islam",
  description: "Trace the key events of early Islamic history from the first revelation to the era of the Rightly Guided Caliphs.",
};

export default function TimelinePage() {
  const events = getTimelineEvents();

  return (
    <>
      <HeroSection
        title="Timeline of Early Islam"
        subtitle="Follow the journey from the first revelation in the Cave of Hira through the era of the Rightly Guided Caliphs — the pivotal events that shaped a civilization."
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <TimelineBlock events={events} />
      </div>
    </>
  );
}
