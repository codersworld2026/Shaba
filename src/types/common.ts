export interface Source {
  title: string;
  author: string;
  type: "hadith-collection" | "history" | "biography" | "quran" | "other";
  reference?: string;
  verificationStatus: "sahih" | "hasan" | "daif" | "pending" | "not-applicable";
  notes?: string;
}

export type ContentStatus = "verified" | "reported" | "pending";

export interface ContentBlock {
  text: string;
  status: ContentStatus;
  sources?: Source[];
}

export interface Topic {
  id: string;
  label: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export interface HijriDate {
  year: number | null;
  month?: number | null;
  description: string;
}

export interface GregorianDate {
  year: number | null;
  description: string;
}

export interface DateRange {
  hijri: HijriDate;
  gregorian: GregorianDate;
}
