import { BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Source } from "@/types/common";

const STATUS_COLORS: Record<string, string> = {
  sahih: "bg-emerald-100 text-emerald-700 border-emerald-200",
  hasan: "bg-blue-100 text-blue-700 border-blue-200",
  daif: "bg-amber-100 text-amber-700 border-amber-200",
  pending: "bg-gray-100 text-gray-600 border-gray-200",
  "not-applicable": "",
};

export function SourceList({ sources }: { sources: Source[] }) {
  if (sources.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border/70 bg-muted/20 p-4 text-center text-sm text-muted-foreground">
        Source entry pending
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {sources.map((source, i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-3"
        >
          <BookOpen className="h-4 w-4 mt-0.5 text-primary/60 shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">{source.title}</p>
            {source.author && (
              <p className="text-xs text-muted-foreground">{source.author}</p>
            )}
            {source.reference && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {source.reference}
              </p>
            )}
          </div>
          {source.verificationStatus &&
            source.verificationStatus !== "not-applicable" && (
              <Badge
                variant="outline"
                className={`text-[10px] shrink-0 ${STATUS_COLORS[source.verificationStatus] || ""}`}
              >
                {source.verificationStatus}
              </Badge>
            )}
        </div>
      ))}
    </div>
  );
}
