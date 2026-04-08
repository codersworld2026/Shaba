import Link from "next/link";
import { MapPin, Users, Swords } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface BattleCardProps {
  slug: string;
  nameEnglish: string;
  nameArabic: string;
  dateLabel: string;
  location: string;
  outcome: string;
  excerpt: string;
  companionCount?: number;
}

export function BattleCard({
  slug,
  nameEnglish,
  nameArabic,
  dateLabel,
  location,
  outcome,
  excerpt,
  companionCount,
}: BattleCardProps) {
  return (
    <Link href={`/battles/${slug}`}>
      <Card className="group h-full overflow-hidden border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5">
        <div className="relative h-20 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-amber-500/5 flex items-center justify-center overflow-hidden">
          <Swords className="h-8 w-8 text-primary/20" />
          <Badge className="absolute top-2 right-2 text-[10px]" variant="secondary">
            {dateLabel}
          </Badge>
        </div>

        <CardContent className="p-3 sm:p-4">
          <p className="font-arabic text-xs sm:text-sm text-muted-foreground">{nameArabic}</p>
          <h3 className="font-heading text-base sm:text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
            {nameEnglish}
          </h3>

          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {location}
            </span>
            {companionCount !== undefined && (
              <span className="flex items-center gap-1">
                <Users className="h-3 w-3" /> {companionCount} companions
              </span>
            )}
          </div>

          <Badge variant="outline" className="mt-2 text-[10px]">
            {outcome}
          </Badge>

          <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
