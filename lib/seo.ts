import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://example.com";
export const siteName = "Arpit Mehrotra | Cybersecurity Portfolio";
export const description = "Cybersecurity professional portfolio — penetration testing, web security, and full-stack development.";
export const twitterHandle = "@your_handle";
export const socialImage = "/og-image.png";

export const sitemapPages = [
  { path: "/", priority: 1.0, changefreq: "daily" },
  { path: "/blueprint", priority: 0.8, changefreq: "weekly" },
];

export function buildPageMetadata({
  title,
  description,
  path,
  image = socialImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: `${siteUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}${image}`],
      creator: twitterHandle,
    },
  };
}

export function generateSitemapXml() {
  const urls = sitemapPages
    .map((page) => {
      const lastmod = new Date().toISOString().split("T")[0];
      return `  <url>\n    <loc>${siteUrl}${page.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority.toFixed(1)}</priority>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}
