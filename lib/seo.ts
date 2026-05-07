import type { Metadata } from "next";

export const siteUrl = "https://arpitmehrotra.vercel.app";

export const twitterHandle = "@ArpitMe3799501";

export const siteName = "Arpit Mehrotra | Cybersecurity Portfolio";

export const description =
  "Arpit Mehrotra is a cybersecurity enthusiast and CSE student focused on penetration testing, web security, Python, Linux, and full-stack development.";

export const socialImage = "/og-image.png";

/**
 * Shared Metadata Builder
 */
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

/**
 * Global Person Schema
 */
export const personSchema = {
  "@context": "https://schema.org",

  "@type": "Person",

  name: "Arpit Mehrotra",

  url: siteUrl,

  image: `${siteUrl}/arpit-mehrotra.jpg`,

  sameAs: [
    "https://linkedin.com/in/arpitmehrotra-dev",
    "https://github.com/Arpitmeh-glitch",
  ],

  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "UPES",
  },

  knowsAbout: [
    "Cybersecurity",
    "Web Security",
    "Penetration Testing",
    "Python",
    "Linux",
    "Nmap",
    "Burp Suite",
    "Network Reconnaissance",
    "OWASP",
    "Ethical Hacking",
    "Vulnerability Assessment",
  ],
};