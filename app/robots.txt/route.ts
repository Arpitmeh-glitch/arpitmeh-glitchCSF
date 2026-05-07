import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/seo";

export async function GET() {
  const content = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;
  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
