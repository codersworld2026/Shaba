import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">S</span>
              </div>
              <span className="font-heading text-lg font-bold">{SITE_NAME}</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              An educational resource dedicated to preserving and sharing the
              stories of the Companions of the Prophet Muhammad (peace be upon
              him).
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold">Explore</h3>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Companions", href: "/companions" },
                { label: "Four Caliphs", href: "/caliphs" },
                { label: "Ten Promised Jannah", href: "/ten-promised" },
                { label: "Battles", href: "/battles" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold">Learn</h3>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Timeline", href: "/timeline" },
                { label: "Topics", href: "/topics" },
                { label: "About & Methodology", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold">Support</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              This project is free and open. If you find it beneficial, consider
              supporting its growth.
            </p>
            <a
              href="https://buymeacoffee.com/sahaba"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Donate
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          <p>
            {SITE_NAME} — An open educational project. Content is provided for
            learning purposes and should be verified with scholarly sources.
          </p>
        </div>
      </div>
    </footer>
  );
}
