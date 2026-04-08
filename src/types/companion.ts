import { ContentBlock, DateRange, Source } from "./common";

export interface CompanionQuickFact {
  label: string;
  value: string;
  icon: string;
}

export interface CompanionBattleParticipation {
  battleSlug: string;
  battleName: string;
  role: string;
  notableActions?: ContentBlock[];
}

export interface CompanionTab {
  id: string;
  label: string;
  content: ContentBlock[];
  isEmpty: boolean;
}

export interface Companion {
  id: string;
  slug: string;
  nameArabic: string;
  nameEnglish: string;
  fullName: string;
  kunyas: string[];
  nicknames: string[];
  titles: string[];

  isCaliph: boolean;
  caliphOrder?: number;
  isAsharaMubasharah: boolean;
  isEarlyConvert: boolean;
  isBadrVeteran: boolean;
  isMuhajir: boolean;
  gender: "male" | "female";
  topics: string[];

  birthDate: DateRange;
  deathDate: DateRange;
  acceptedIslamDate: DateRange;

  quickFacts: CompanionQuickFact[];

  patternSeed: number;
  accentColor: string;

  tabs: {
    childhood: CompanionTab;
    beforeIslam: CompanionTab;
    acceptingIslam: CompanionTab;
    lifeWithProphet: CompanionTab;
    battles: CompanionTab;
    adulthoodLeadership: CompanionTab;
    khilafahRole: CompanionTab;
    characterVirtues: CompanionTab;
    nicknamesTitles: CompanionTab;
    legacy: CompanionTab;
    sources: CompanionTab;
  };

  battleParticipation: CompanionBattleParticipation[];
  primarySources: Source[];
  relatedCompanionSlugs: string[];

  metaDescription: string;
  excerpt: string;
  sortOrder: number;
}

export type CompanionTabKey = keyof Companion["tabs"];

export const COMPANION_TAB_ORDER: { key: CompanionTabKey; label: string }[] = [
  { key: "childhood", label: "Childhood" },
  { key: "beforeIslam", label: "Before Islam" },
  { key: "acceptingIslam", label: "Accepting Islam" },
  { key: "lifeWithProphet", label: "Life with the Prophet" },
  { key: "battles", label: "Battles" },
  { key: "adulthoodLeadership", label: "Leadership" },
  { key: "khilafahRole", label: "Khilafah" },
  { key: "characterVirtues", label: "Character & Virtues" },
  { key: "nicknamesTitles", label: "Nicknames & Titles" },
  { key: "legacy", label: "Legacy" },
  { key: "sources", label: "Sources" },
];
