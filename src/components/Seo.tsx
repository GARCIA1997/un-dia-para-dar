import { useEffect } from "react";
import { SITE_URL } from "../config/event";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** JSON-LD extra específico de la página. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

function upsertMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({ title, description, path, image, jsonLd, noindex }: SeoProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const img = image ?? `${SITE_URL}/og-image.jpg`;

    document.title = title;

    const tags: [string, "name" | "property", string, string][] = [
      [`meta[name="description"]`, "name", "description", description],
      [`meta[name="robots"]`, "name", "robots", noindex ? "noindex, follow" : "index, follow, max-image-preview:large"],
      [`meta[property="og:title"]`, "property", "og:title", title],
      [`meta[property="og:description"]`, "property", "og:description", description],
      [`meta[property="og:url"]`, "property", "og:url", url],
      [`meta[property="og:image"]`, "property", "og:image", img],
      [`meta[property="og:type"]`, "property", "og:type", "website"],
      [`meta[name="twitter:title"]`, "name", "twitter:title", title],
      [`meta[name="twitter:description"]`, "name", "twitter:description", description],
      [`meta[name="twitter:image"]`, "name", "twitter:image", img],
      [`meta[name="twitter:card"]`, "name", "twitter:card", "summary_large_image"],
    ];
    tags.forEach(([sel, attr, key, content]) => upsertMeta(sel, attr, key, content));

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    if (!jsonLd) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seo = "route";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [title, description, path, image, jsonLd, noindex]);

  return null;
}
