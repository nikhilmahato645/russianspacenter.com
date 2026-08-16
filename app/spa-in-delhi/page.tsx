import type { Metadata } from "next";
import LocationPage from "../components/LocationPage";
import { locationLd } from "../lib/location";
import { SITE_URL, jsonLd } from "../lib/site";
import { DELHI } from "./data";

const { seo, path } = DELHI;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: `${SITE_URL}${path}`,
    siteName: "Russian Spa Centre",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: seo.ogImageAlt,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle,
    description: seo.ogDescription,
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_URL}${path}`,
  },
};

export default function SpaInDelhiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(...locationLd(DELHI)) }}
      />
      <LocationPage content={DELHI} />
    </>
  );
}
