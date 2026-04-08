import { LinkButton } from "@/components/ui/link-button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-heading text-6xl font-bold text-primary/20">404</h1>
      <h2 className="mt-4 font-heading text-xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-sm text-muted-foreground max-w-md">
        The page you are looking for does not exist. It may have been moved or
        the content is still being prepared.
      </p>
      <div className="mt-6 flex gap-3">
        <LinkButton href="/">Go Home</LinkButton>
        <LinkButton href="/companions" variant="outline">Browse Companions</LinkButton>
      </div>
    </div>
  );
}
