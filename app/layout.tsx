import type { Metadata } from "next";
import "../styles/globals.css";
import { siteName, siteUrl, description, socialImage, twitterHandle } from "@/lib/seo";

const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arpit Mehrotra",
  url: siteUrl,
  description,
  jobTitle: "Cybersecurity Professional",
  sameAs: [],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": siteUrl,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description,
  applicationName: siteName,
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    siteName,
    type: "website",
    images: [
      {
        url: `${siteUrl}${socialImage}`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: [`${siteUrl}${socialImage}`],
    creator: twitterHandle,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {analyticsId ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${analyticsId}', { page_path: window.location.pathname });`,
              }}
            />
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#020408] text-[#e8f4f8] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#020408] focus:text-white focus:px-3 focus:py-2 focus:border focus:border-[var(--cyan)]"
        >
          Skip to main content
        </a>
        <div className="noise-overlay" aria-hidden="true" />
        <div className="scan-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
