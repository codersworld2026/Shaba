import Link from "next/link";
import {
  Crown, Star, Swords, UserCheck, Navigation, Shield, Heart, BookOpen, Scale, Users,
} from "lucide-react";
import type { Topic } from "@/types/common";

const ICON_MAP: Record<string, React.ElementType> = {
  Crown, Star, Swords, UserCheck, Navigation, Shield, Heart, BookOpen, Scale, Users,
};

export function TopicChip({ topic }: { topic: Topic }) {
  const Icon = ICON_MAP[topic.icon] || Star;
  return (
    <Link
      href={`/topics`}
      className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:border-primary/20"
    >
      <Icon className="h-3.5 w-3.5 text-primary" />
      <span className="font-medium">{topic.label}</span>
    </Link>
  );
}
