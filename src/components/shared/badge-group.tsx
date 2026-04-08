import { Badge } from "@/components/ui/badge";

export function BadgeGroup({
  items,
  maxVisible = 5,
}: {
  items: string[];
  maxVisible?: number;
}) {
  const visible = items.slice(0, maxVisible);
  const remaining = items.length - maxVisible;

  return (
    <div className="flex flex-wrap gap-1.5">
      {visible.map((item) => (
        <Badge key={item} variant="secondary" className="text-xs">
          {item}
        </Badge>
      ))}
      {remaining > 0 && (
        <Badge variant="outline" className="text-xs text-muted-foreground">
          +{remaining} more
        </Badge>
      )}
    </div>
  );
}
