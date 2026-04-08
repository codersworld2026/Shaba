export const SITE_NAME = "Sahaba";
export const SITE_DESCRIPTION =
  "Discover the lives, sacrifices, character, and achievements of the Companions of the Prophet Muhammad (peace be upon him).";
export const SITE_URL = "https://sahaba.dev";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "Four Caliphs", href: "/caliphs" },
  { label: "Ten Promised Jannah", href: "/ten-promised" },
  { label: "Battles", href: "/battles" },
  { label: "Timeline", href: "/timeline" },
  { label: "Topics", href: "/topics" },
  { label: "About", href: "/about" },
] as const;

export const PBUH = "(peace be upon him)";

export const CONTENT_STATUS_LABELS: Record<string, string> = {
  verified: "Verified",
  reported: "Reported in some sources",
  pending: "Source entry pending",
};
