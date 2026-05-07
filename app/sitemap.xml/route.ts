import { NextResponse } from "next/server";
import { generateSitemapXml } from "@/lib/seo";

export async function GET() {
  const xml = generateSitemapXml();
  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
