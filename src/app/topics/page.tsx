import { Metadata } from "next";
import Link from "next/link";
import {
  Crown, Star, Swords, UserCheck, Navigation, Shield, Heart, BookOpen, Scale, Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getTopics, getAllCompanions } from "@/lib/data";
import { HeroSection } from "@/components/shared/hero-section";
import type { Topic } from "@/types/common";

const ICON_MAP: Record<string, React.ElementType> = {
  Crown, Star, Swords, UserCheck, Navigation, Shield, Heart, BookOpen, Scale, Users,
};

const TOPIC_LINKS: Record<string, string> = {
  caliphs: "/caliphs",
  "ten-promised": "/ten-promised",
  battles: "/battles",
  "early-converts": "/companions",
  migration: "/timeline",
  bravery: "/companions",
  generosity: "/companions",
  scholarship: "/companions",
  justice: "/companions",
  women: "/companions",
};

export const metadata: Metadata = {
  title: "Topics",
  description: "Explore the Companions of the Prophet Muhammad (peace be upon him) through thematic topics like bravery, justice, generosity, and more.",
};

export default function TopicsPage() {
  const topics = getTopics();

  return (
    <>
      <HeroSection
        title="Explore by Topic"
        subtitle="Discover the Companions through the themes and virtues that defined their lives — from courage and sacrifice to scholarship and leadership."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = ICON_MAP[topic.icon] || Star;
            const href = TOPIC_LINKS[topic.slug] || "/companions";

            return (
              <Link key={topic.id} href={href}>
                <Card className="group h-full border-border/50 transition-all hover:shadow-md hover:border-primary/20">
                  <CardContent className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold group-hover:text-primary transition-colors">
                        {topic.label}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
