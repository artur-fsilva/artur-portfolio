import type { MetadataRoute } from "next";

const PUBLIC_ROUTES = [
  "",
  "/trabalhos",
  "/trabalhos/ace-finance",
  "/trabalhos/site-marina",
  "/trabalhos/yousafer-flow",
  "/trabalhos/laboratorio-java",
  "/sobre",
  "/contato",
] as const;

function getSiteUrl(): string | null {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured && configured.startsWith("https://")) {
    return configured.replace(/\/+$/, "");
  }

  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelUrl) {
    return `https://${vercelUrl.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;
  }

  return null;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) {
    return [];
  }

  const lastModified = new Date();

  return PUBLIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "monthly" : "monthly",
    priority: route === "" ? 1 : route === "/trabalhos" ? 0.9 : 0.8,
  }));
}
