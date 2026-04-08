import { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "./constants";

export function buildMetadata(
  overrides: Partial<Metadata> & { title: string; description: string }
): Metadata {
  const fullTitle = `${overrides.title} | ${SITE_NAME}`;
  const { title: _t, description: _d, ...rest } = overrides;
  return {
    title: fullTitle,
    description: overrides.description,
    openGraph: {
      title: fullTitle,
      description: overrides.description,
      siteName: SITE_NAME,
      type: "website",
      url: SITE_URL,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: overrides.description,
    },
    ...rest,
  };
}

export const defaultMetadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    url: SITE_URL,
  },
};
