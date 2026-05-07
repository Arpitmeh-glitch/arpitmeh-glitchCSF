import type { Metadata } from "next";
import BlueprintClient from "./BlueprintClient";
import { buildPageMetadata, description, siteName } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: `Blueprint · ${siteName}`,
    description: "Interactive blueprint page for Arpit Mehrotra's cybersecurity portfolio.",
    path: "/blueprint",
  });
}

export default function BlueprintPage() {
  return <BlueprintClient />;
}
