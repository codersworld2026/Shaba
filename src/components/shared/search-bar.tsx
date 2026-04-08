"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchBar({
  variant = "compact",
  placeholder = "Search companions, battles, topics...",
  defaultValue = "",
  onSearch,
}: {
  variant?: "hero" | "compact";
  placeholder?: string;
  defaultValue?: string;
  onSearch?: (query: string) => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (onSearch) {
        onSearch(query.trim());
      } else {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      }
    }
  };

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className="relative w-full max-w-xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              onSearch?.(e.target.value);
            }}
            placeholder={placeholder}
            className="h-14 w-full rounded-xl border border-border bg-card pl-12 pr-4 text-base shadow-sm outline-none transition-shadow focus:ring-2 focus:ring-ring focus:shadow-md"
          />
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch?.(e.target.value);
        }}
        placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </form>
  );
}
