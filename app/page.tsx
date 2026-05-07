import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { buildPageMetadata, description, siteName } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: siteName,
    description,
    path: "/",
  });
}

export default function HomePage() {
  return <HomeClient />;
}
