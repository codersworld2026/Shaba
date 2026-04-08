"use client";

import { Badge } from "@/components/ui/badge";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterGroup {
  key: string;
  label: string;
  options: FilterOption[];
}

export function FilterPanel({
  filters,
  activeFilter,
  onFilterChange,
}: {
  filters: FilterGroup[];
  activeFilter: string;
  onFilterChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge
        variant={activeFilter === "all" ? "default" : "outline"}
        className="cursor-pointer text-xs"
        onClick={() => onFilterChange("all")}
      >
        All
      </Badge>
      {filters.flatMap((group) =>
        group.options.map((option) => (
          <Badge
            key={option.value}
            variant={activeFilter === option.value ? "default" : "outline"}
            className="cursor-pointer text-xs"
            onClick={() => onFilterChange(option.value)}
          >
            {option.label}
          </Badge>
        ))
      )}
    </div>
  );
}
