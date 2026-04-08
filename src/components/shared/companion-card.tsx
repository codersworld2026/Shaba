import Link from "next/link";
import { Crown, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface CompanionCardProps {
  slug: string;
  nameEnglish: string;
  nameArabic: string;
  titles: string[];
  excerpt: string;
  isCaliph: boolean;
  isAsharaMubasharah: boolean;
  patternSeed: number;
}

const PATTERNS = [
  "M30 0L60 30L30 60L0 30Z",
  "M0 0h60v60H0z M15 15h30v30H15z",
  "M30 0L60 15L60 45L30 60L0 45L0 15Z",
  "M30 10a20 20 0 1 0 0 40a20 20 0 1 0 0-40Z",
  "M0 30Q15 0 30 30Q45 60 60 30",
];

export function CompanionCard({
  slug,
  nameEnglish,
  nameArabic,
  titles,
  excerpt,
  isCaliph,
  isAsharaMubasharah,
  patternSeed,
}: CompanionCardProps) {
  const patternPath = PATTERNS[(patternSeed - 1) % PATTERNS.length];

  return (
    <Link href={`/companions/${slug}`}>
      <Card className="group h-full overflow-hidden border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5">
        <div className="relative h-24 bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 60 60"
            preserveAspectRatio="xMidYMid slice"
          >
            <pattern id={`p-${slug}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d={patternPath} fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
            <rect width="100%" height="100%" fill={`url(#p-${slug})`} />
          </svg>

          <div className="absolute bottom-2 right-2 flex gap-1">
            {isCaliph && (
              <Badge variant="secondary" className="bg-primary/90 text-primary-foreground text-[10px] gap-1">
                <Crown className="h-3 w-3" /> Caliph
              </Badge>
            )}
            {isAsharaMubasharah && (
              <Badge variant="secondary" className="bg-islamic-gold/90 text-foreground text-[10px] gap-1">
                <Star className="h-3 w-3" /> Promised Jannah
              </Badge>
            )}
          </div>
        </div>

        <CardContent className="p-3 sm:p-4">
          <p className="font-arabic text-xs sm:text-sm text-muted-foreground">{nameArabic}</p>
          <h3 className="font-heading text-base sm:text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
            {nameEnglish}
          </h3>
          {titles.length > 0 && (
            <p className="text-xs text-primary/80 mt-1 line-clamp-1">{titles[0]}</p>
          )}
          <p className="mt-2 sm:mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
