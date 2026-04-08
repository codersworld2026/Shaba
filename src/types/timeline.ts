import { DateRange } from "./common";

export interface TimelineEvent {
  id: string;
  date: DateRange;
  title: string;
  description: string;
  category: "revelation" | "migration" | "battle" | "treaty" | "conquest" | "death" | "caliphate" | "other";
  relatedCompanionSlugs?: string[];
  relatedBattleSlug?: string;
  icon: string;
  importance: "major" | "minor";
}
