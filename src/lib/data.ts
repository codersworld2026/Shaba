import fs from "fs";
import path from "path";
import { Companion } from "@/types/companion";
import { Battle } from "@/types/battle";
import { TimelineEvent } from "@/types/timeline";
import { Topic } from "@/types/common";

const COMPANIONS_DIR = path.join(process.cwd(), "src/data/companions");
const BATTLES_DIR = path.join(process.cwd(), "src/data/battles");

export function getAllCompanions(): Companion[] {
  const files = fs
    .readdirSync(COMPANIONS_DIR)
    .filter((f) => f.endsWith(".json"));
  return files
    .map((file) => {
      const content = fs.readFileSync(path.join(COMPANIONS_DIR, file), "utf-8");
      return JSON.parse(content) as Companion;
    })
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCompanionBySlug(slug: string): Companion | null {
  const filePath = path.join(COMPANIONS_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as Companion;
}

export function getAllBattles(): Battle[] {
  const files = fs
    .readdirSync(BATTLES_DIR)
    .filter((f) => f.endsWith(".json"));
  return files.map((file) => {
    const content = fs.readFileSync(path.join(BATTLES_DIR, file), "utf-8");
    return JSON.parse(content) as Battle;
  });
}

export function getBattleBySlug(slug: string): Battle | null {
  const filePath = path.join(BATTLES_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as Battle;
}

export function getTimelineEvents(): TimelineEvent[] {
  const filePath = path.join(process.cwd(), "src/data/timeline-events.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as TimelineEvent[];
}

export function getTopics(): Topic[] {
  const filePath = path.join(process.cwd(), "src/data/topics.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as Topic[];
}

export function getCompanionsForBattle(battleSlug: string): Companion[] {
  return getAllCompanions().filter((c) =>
    c.battleParticipation.some((b) => b.battleSlug === battleSlug)
  );
}

export function getBattlesForCompanion(companionSlug: string): Battle[] {
  const companion = getCompanionBySlug(companionSlug);
  if (!companion) return [];
  const slugs = companion.battleParticipation.map((b) => b.battleSlug);
  return getAllBattles().filter((b) => slugs.includes(b.slug));
}

export function getCaliphs(): Companion[] {
  return getAllCompanions()
    .filter((c) => c.isCaliph)
    .sort((a, b) => (a.caliphOrder ?? 0) - (b.caliphOrder ?? 0));
}

export function getAsharaMubasharah(): Companion[] {
  return getAllCompanions().filter((c) => c.isAsharaMubasharah);
}
