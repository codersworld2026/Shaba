"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { COMPANION_TAB_ORDER, type CompanionTabKey } from "@/types/companion";
import type { CompanionTab } from "@/types/companion";
import { EmptyState } from "./empty-state";
import { SourceList } from "./source-list";
import { CONTENT_STATUS_LABELS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import type { ContentBlock } from "@/types/common";

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  return (
    <div className="relative">
      <p className="text-sm leading-relaxed text-foreground/90">{block.text}</p>
      {block.status === "reported" && (
        <Badge variant="outline" className="mt-1 text-[10px] text-amber-600 border-amber-300">
          {CONTENT_STATUS_LABELS.reported}
        </Badge>
      )}
      {block.status === "pending" && (
        <Badge variant="outline" className="mt-1 text-[10px] text-muted-foreground">
          {CONTENT_STATUS_LABELS.pending}
        </Badge>
      )}
    </div>
  );
}

export function TabsSection({
  tabs,
  defaultTab = "childhood",
}: {
  tabs: Record<CompanionTabKey, CompanionTab>;
  defaultTab?: string;
}) {
  return (
    <Tabs defaultValue={defaultTab} className="w-full">
      <ScrollArea className="w-full">
        <TabsList className="inline-flex h-10 w-max gap-1 bg-muted/50 p-1">
          {COMPANION_TAB_ORDER.map(({ key, label }) => (
            <TabsTrigger
              key={key}
              value={key}
              className="whitespace-nowrap text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {COMPANION_TAB_ORDER.map(({ key }) => {
        const tab = tabs[key];
        return (
          <TabsContent key={key} value={key} className="mt-6">
            {tab.isEmpty || tab.content.length === 0 ? (
              <EmptyState />
            ) : key === "sources" ? (
              <div className="space-y-3">
                {tab.content.map((block, i) => (
                  <ContentBlockRenderer key={i} block={block} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {tab.content.map((block, i) => (
                  <ContentBlockRenderer key={i} block={block} />
                ))}
              </div>
            )}
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
