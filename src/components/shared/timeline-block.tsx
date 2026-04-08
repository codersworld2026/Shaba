"use client";

import Link from "next/link";
import {
  BookOpen, Navigation, Swords, Handshake, Flag, Star, Crown, Users, Ship,
  ShieldAlert, UserCheck, FileText, Heart, UserPlus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { TimelineEvent } from "@/types/timeline";

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen, Navigation, Swords, Handshake, Flag, Star, Crown, Users, Ship,
  ShieldAlert, UserCheck, FileText, Heart, UserPlus,
};

const CATEGORY_COLORS: Record<string, string> = {
  revelation: "bg-amber-100 text-amber-700 border-amber-200",
  migration: "bg-blue-100 text-blue-700 border-blue-200",
  battle: "bg-red-100 text-red-700 border-red-200",
  treaty: "bg-green-100 text-green-700 border-green-200",
  conquest: "bg-purple-100 text-purple-700 border-purple-200",
  death: "bg-gray-100 text-gray-700 border-gray-200",
  caliphate: "bg-emerald-100 text-emerald-700 border-emerald-200",
  other: "bg-slate-100 text-slate-700 border-slate-200",
};

export function TimelineBlock({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="space-y-0">
      {events.map((event, i) => {
        const Icon = ICON_MAP[event.icon] || Star;
        const isLeft = i % 2 === 0;

        const ContentBlock = ({ align }: { align: "left" | "right" }) => (
          <div className={align === "right" ? "text-right" : ""}>
            <Badge variant="outline" className={`text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 ${CATEGORY_COLORS[event.category] || ""}`}>
              {event.date.gregorian.description}
            </Badge>
            <h3 className="mt-2 font-heading text-base sm:text-lg font-semibold leading-snug">{event.title}</h3>
            <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">{event.description}</p>
            {event.relatedBattleSlug && (
              <Link href={`/battles/${event.relatedBattleSlug}`} className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
                Learn more &rarr;
              </Link>
            )}
          </div>
        );

        return (
          <div key={event.id} className="grid grid-cols-[2.5rem_auto] sm:grid-cols-[1fr_5rem_1fr] gap-0">
            {/* Left column */}
            <div className={`hidden sm:flex flex-col justify-center py-8 ${isLeft ? "items-end pr-8" : ""}`}>
              {isLeft && <ContentBlock align="right" />}
            </div>

            {/* Center icon column */}
            <div className="flex flex-col items-center">
              <div className="w-px flex-1 bg-border" />
              <div className="my-2 sm:my-3 flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-card shadow-sm">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <div className="w-px flex-1 bg-border" />
            </div>

            {/* Right column / mobile content */}
            <div className="flex flex-col justify-center py-4 sm:py-8 pl-3 sm:pl-8">
              <div className="sm:hidden">
                <ContentBlock align="left" />
              </div>
              {!isLeft && (
                <div className="hidden sm:block">
                  <ContentBlock align="left" />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
