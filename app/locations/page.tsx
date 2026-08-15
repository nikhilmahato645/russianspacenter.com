import type { Metadata } from "next";
import Locations from "./Locations";
import { AREAS, LOCATION_FAQS } from "./data";
import { LOCAL_BUSINESS, SITE_URL, breadcrumbLd, faqLd, jsonLd } from "../lib/site";

const PATH = "/locations/";

export const metadata: Metadata = {
  title: "Spa Locations in Delhi NCR | Mahipalpur, Aerocity, IGI Airport, Dwarka & Vasant Kunj",
  description:
    "Russian Spa Centre is at Defence Enclave, Mahipalpur — 10 min from IGI Airport T3, 5 min from Aerocity hotels, 15 min from Dwarka, 12 min from Vasant Kunj. Free parking, hotel pickup, open 24/7.",
  keywords:
    "spa in Mahipalpur, spa in Aerocity, spa near IGI Airport, spa in Dwarka, spa in Vasant Kunj, massage near Aerocity hotels, spa near JW Marriott Aerocity, spa near Pullman Aerocity, 24 hour spa near Delhi Airport, Russian spa Delhi NCR, spa near Mahipalpur Metro, massage centre South Delhi, spa directions Defence Enclave",
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
    title: "Spa Locations Across Delhi NCR | Russian Spa Centre",
    description:
      "Defence Enclave, Mahipalpur — 10 min from IGI Airport, 5 min from Aerocity, 15 min from Dwarka. Free parking, hotel pickup, open 24/7.",
    url: `${SITE_URL}${PATH}`,
    siteName: "Russian Spa Centre",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Russian Spa Centre locations across Mahipalpur, Aerocity and Delhi NCR",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Locations Across Delhi NCR | Russian Spa Centre",
    description: "Mahipalpur premises — 10 min from IGI Airport, 5 min from Aerocity hotels. Open 24/7.",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
  },
};

/**
 * One LocalBusiness (the real premises) plus an ItemList of the catchment areas
 * it serves. Modelling the areas as `Place` items rather than duplicate
 * LocalBusiness nodes keeps the markup truthful — we do not have six branches.
 */
const AREA_LIST_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}${PATH}#areas`,
  name: "Areas served by Russian Spa Centre",
  url: `${SITE_URL}${PATH}`,
  numberOfItems: AREAS.length,
  itemListElement: AREAS.map((area, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Place",
      name: `${area.name}, New Delhi`,
      description: area.desc,
      containedInPlace: { "@type": "City", name: "New Delhi" },
    },
  })),
};

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            { "@context": "https://schema.org", ...LOCAL_BUSINESS },
            AREA_LIST_LD,
            faqLd(LOCATION_FAQS),
            breadcrumbLd("Locations", PATH)
          ),
        }}
      />
      <Locations />
    </>
  );
}
