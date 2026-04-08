import { Metadata } from "next";
import { Suspense } from "react";
import { buildSearchIndex } from "@/lib/search";
import { SearchResultsClient } from "./search-client";

export const metadata: Metadata = {
  title: "Search",
  description: "Search companions, battles, and topics.",
};

export default function SearchPage() {
  const searchIndex = buildSearchIndex();
  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl px-4 py-12 text-center text-muted-foreground">Loading search...</div>}>
      <SearchResultsClient searchIndex={searchIndex} />
    </Suspense>
  );
}
