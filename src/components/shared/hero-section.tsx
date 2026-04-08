import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

export function HeroSection({
  title,
  subtitle,
  breadcrumbs,
  children,
  size = "default",
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  children?: React.ReactNode;
  size?: "default" | "large";
}) {
  return (
    <section
      className={`relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-accent/30 to-background ${
        size === "large" ? "py-12 sm:py-20 md:py-28" : "py-8 sm:py-12 md:py-16"
      }`}
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="30" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                <Link href={crumb.href} className="hover:text-foreground transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        <h1
          className={`font-heading font-bold tracking-tight text-foreground ${
            size === "large"
              ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              : "text-xl sm:text-2xl md:text-3xl"
          }`}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
