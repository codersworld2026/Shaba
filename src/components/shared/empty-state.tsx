import { BookOpen } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";

export function EmptyState({
  title = "Content Coming Soon",
  description = "This section is being researched and will be updated with verified content, in sha Allah.",
  action,
}: {
  title?: string;
  description?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border/70 bg-muted/20 p-8 text-center">
      <BookOpen className="h-8 w-8 text-muted-foreground/50" />
      <h3 className="mt-3 font-heading text-sm font-semibold text-muted-foreground">
        {title}
      </h3>
      <p className="mt-1 text-xs text-muted-foreground/80 max-w-sm">{description}</p>
      {action && (
        <LinkButton href={action.href} variant="outline" size="sm" className="mt-4">
          {action.label}
        </LinkButton>
      )}
    </div>
  );
}
