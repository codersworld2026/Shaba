import { ContentBlock, DateRange, Source } from "./common";

export interface BattleParticipantRef {
  companionSlug: string;
  companionName: string;
  role: string;
}

export interface BattleStats {
  muslimForceSize?: string;
  opposingForceSize?: string;
  outcome: string;
  duration?: string;
  location: string;
  locationModern?: string;
}

export interface Battle {
  id: string;
  slug: string;
  nameArabic: string;
  nameEnglish: string;
  alternateNames?: string[];

  date: DateRange;
  stats: BattleStats;

  summary: ContentBlock;
  background: ContentBlock[];
  events: ContentBlock[];
  aftermath: ContentBlock[];
  lessons: ContentBlock[];

  notableParticipants: BattleParticipantRef[];
  companionSlugs: string[];

  sources: Source[];
  topics: string[];

  metaDescription: string;
  excerpt: string;
}
