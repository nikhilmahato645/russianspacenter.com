import type { Metadata } from "next";
import Home from "./home/Home";
import { ORGANIZATION_LD, SITE_URL, WEBSITE_LD, jsonLd } from "./lib/site";

export const metadata: Metadata = {
  title: "Russian Spa Centre | Best Body Massage & Spa in Mahipalpur",
  description:
    "Body massage, authentic Russian Banya and spa treatments in Mahipalpur, ten minutes from IGI Airport. Private rooms, certified therapists, open 24/7.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    title: "Russian Spa Centre | Luxury Russian Banya & Massage in Mahipalpur",
    description: "Premium Russian Spa Centre with authentic Banya, body massage & wellness therapies. Open 24/7 near IGI Airport.",
    url: `${SITE_URL}/`,
    siteName: "Russian Spa Centre",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Russian Spa Centre - Luxury Spa & Massage in Mahipalpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Russian Spa Centre | Luxury Spa & Massage",
    description: "Premium Russian Banya & massage spa. Open 24/7 near IGI Airport.",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Entity graph for the site and the company. The premises itself is
          described by the LocalBusiness node in the root layout. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(WEBSITE_LD, ORGANIZATION_LD) }}
      />
      <Home />
    </>
  );
}
