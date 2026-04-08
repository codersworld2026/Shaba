"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import Link from "next/link";
import { Users, Swords } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SearchBar } from "@/components/shared/search-bar";
import { EmptyState } from "@/components/shared/empty-state";
import type { SearchableItem } from "@/lib/search";

export function SearchResultsClient({ searchIndex }: { searchIndex: SearchableItem[] }) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const fuse = useMemo(
    () =>
      new Fuse(searchIndex, {
        keys: [
          { name: "title", weight: 0.4 },
          { name: "titleArabic", weight: 0.2 },
          { name: "keywords", weight: 0.25 },
          { name: "excerpt", weight: 0.15 },
        ],
        threshold: 0.3,
        minMatchCharLength: 2,
      }),
    [searchIndex]
  );

  const results = useMemo(() => {
    if (!query || query.length < 2) return [];
    return fuse.search(query).map((r) => r.item);
  }, [fuse, query]);

  const companions = results.filter((r) => r.type === "companion");
  const battles = results.filter((r) => r.type === "battle");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-heading text-2xl font-bold mb-6">Search</h1>
      <SearchBar variant="hero" defaultValue={query} onSearch={setQuery} />

      {query.length >= 2 && (
        <p className="mt-4 text-sm text-muted-foreground">
          {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
        </p>
      )}

      {query.length >= 2 && results.length === 0 && (
        <div className="mt-8">
          <EmptyState title="No results found" description="Try a different name, nickname, or term." />
        </div>
      )}

      {companions.length > 0 && (
        <section className="mt-8">
          <h2 className="font-heading text-lg font-semibold mb-3 flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" /> Companions
          </h2>
          <div className="space-y-2">
            {companions.map((item) => (
              <Link
                key={item.slug}
                href={`/companions/${item.slug}`}
                className="block rounded-lg border border-border/50 bg-card p-4 transition-colors hover:bg-accent"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-arabic text-xs text-muted-foreground">{item.titleArabic}</p>
                    <h3 className="text-sm font-medium">{item.title}</h3>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">Companion</Badge>
                </div>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {battles.length > 0 && (
        <section className="mt-8">
          <h2 className="font-heading text-lg font-semibold mb-3 flex items-center gap-2">
            <Swords className="h-4 w-4 text-primary" /> Battles
          </h2>
          <div className="space-y-2">
            {battles.map((item) => (
              <Link
                key={item.slug}
                href={`/battles/${item.slug}`}
                className="block rounded-lg border border-border/50 bg-card p-4 transition-colors hover:bg-accent"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-arabic text-xs text-muted-foreground">{item.titleArabic}</p>
                    <h3 className="text-sm font-medium">{item.title}</h3>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">Battle</Badge>
                </div>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
