import {
  Users, MapPin, Star, Crown, Landmark, Sword, BookOpen, Heart,
  Shield, UserCheck, Navigation, Scale, Swords,
} from "lucide-react";
import type { CompanionQuickFact } from "@/types/companion";

const ICON_MAP: Record<string, React.ElementType> = {
  Users, MapPin, Star, Crown, Landmark, Sword, BookOpen, Heart,
  Shield, UserCheck, Navigation, Scale, Swords,
};

export function QuickFacts({ facts }: { facts: CompanionQuickFact[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {facts.map((fact) => {
        const Icon = ICON_MAP[fact.icon] || Star;
        return (
          <div
            key={fact.label}
            className="flex flex-col items-center gap-1.5 rounded-lg border border-border/50 bg-card p-3 sm:p-4 text-center"
          >
            <Icon className="h-4 w-4 text-primary" />
            <span className="text-[11px] sm:text-xs uppercase tracking-wide text-muted-foreground font-medium">
              {fact.label}
            </span>
            <span className="text-xs sm:text-sm font-medium leading-tight">{fact.value}</span>
          </div>
        );
      })}
    </div>
  );
}
