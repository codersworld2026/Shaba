"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { SearchBar } from "@/components/shared/search-bar";
import { FilterPanel } from "@/components/shared/filter-panel";
import { CompanionCard } from "@/components/shared/companion-card";
import { EmptyState } from "@/components/shared/empty-state";
import type { Companion } from "@/types/companion";

const FILTERS = [
  {
    key: "category",
    label: "Category",
    options: [
      { value: "caliph", label: "Four Caliphs" },
      { value: "ashara", label: "Ten Promised Jannah" },
      { value: "early", label: "Early Converts" },
      { value: "badr", label: "Badr Veterans" },
      { value: "muhajir", label: "Muhajirun" },
    ],
  },
];

export function CompanionDirectoryClient({
  companions,
}: {
  companions: Companion[];
}) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const fuse = useMemo(
    () =>
      new Fuse(companions, {
        keys: [
          { name: "nameEnglish", weight: 0.3 },
          { name: "nameArabic", weight: 0.2 },
          { name: "nicknames", weight: 0.2 },
          { name: "titles", weight: 0.15 },
          { name: "kunyas", weight: 0.1 },
          { name: "excerpt", weight: 0.05 },
        ],
        threshold: 0.3,
        minMatchCharLength: 2,
      }),
    [companions]
  );

  const filtered = useMemo(() => {
    let results = companions;

    if (query.trim().length >= 2) {
      results = fuse.search(query).map((r) => r.item);
    }

    if (activeFilter !== "all") {
      results = results.filter((c) => {
        switch (activeFilter) {
          case "caliph": return c.isCaliph;
          case "ashara": return c.isAsharaMubasharah;
          case "early": return c.isEarlyConvert;
          case "badr": return c.isBadrVeteran;
          case "muhajir": return c.isMuhajir;
          default: return true;
        }
      });
    }

    return results;
  }, [companions, query, activeFilter, fuse]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex-1">
          <SearchBar
            variant="compact"
            placeholder="Search by name, nickname, or title..."
            onSearch={setQuery}
          />
        </div>
      </div>

      <FilterPanel
        filters={FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {filtered.length === 0 ? (
        <EmptyState
          title="No companions found"
          description="Try adjusting your search or filters."
        />
      ) : (
        <>
          <p className="text-sm text-muted-foreground">
            {filtered.length} companion{filtered.length !== 1 ? "s" : ""}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <CompanionCard
                key={c.slug}
                slug={c.slug}
                nameEnglish={c.nameEnglish}
                nameArabic={c.nameArabic}
                titles={c.titles}
                excerpt={c.excerpt}
                isCaliph={c.isCaliph}
                isAsharaMubasharah={c.isAsharaMubasharah}
                patternSeed={c.patternSeed}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
