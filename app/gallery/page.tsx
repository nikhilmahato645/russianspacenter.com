import type { Metadata } from "next";
import Gallery from "./Gallery";
import { GALLERY_FAQS, SHOTS } from "./data";
import { LOCAL_BUSINESS, SITE_URL, breadcrumbLd, faqLd, jsonLd } from "../lib/site";

const PATH = "/gallery/";

export const metadata: Metadata = {
  title: "Photo Gallery | Russian Spa Centre, Mahipalpur",
  description:
    "Photographs of our Mahipalpur premises — the Russian Banya, private treatment rooms and relaxation lounge — plus portraits of the therapists who work here.",
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
    title: "Spa Photo Gallery | Russian Spa Centre Mahipalpur",
    description:
      "Real photos of the Russian Banya, private treatment rooms, couples suites and lounge at our Mahipalpur spa.",
    url: `${SITE_URL}${PATH}`,
    siteName: "Russian Spa Centre",
    images: [
      {
        url: `${SITE_URL}${SHOTS[0].src}`,
        width: SHOTS[0].width,
        height: SHOTS[0].height,
        alt: SHOTS[0].alt,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Photo Gallery | Russian Spa Centre Mahipalpur",
    description: "Russian Banya, private treatment rooms, relaxation lounge and our therapists.",
    images: [`${SITE_URL}${SHOTS[0].src}`],
  },
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
  },
};

/**
 * ImageGallery with one ImageObject per photo. `contentUrl` + `caption` are what
 * Google Images uses to attribute and describe each file.
 */
const GALLERY_LD = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${SITE_URL}${PATH}#gallery`,
  name: "Russian Spa Centre — Photo Gallery, Mahipalpur",
  url: `${SITE_URL}${PATH}`,
  description:
    "Photographs of the Russian Banya, private treatment rooms, couples suites, relaxation lounge and changing areas at Russian Spa Centre, Defence Enclave, Mahipalpur, New Delhi.",
  about: LOCAL_BUSINESS,
  associatedMedia: SHOTS.map((shot) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${shot.src}`,
    url: `${SITE_URL}${shot.src}`,
    caption: shot.caption,
    description: shot.alt,
    width: shot.width,
    height: shot.height,
    representativeOfPage: shot === SHOTS[0],
  })),
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(GALLERY_LD, faqLd(GALLERY_FAQS), breadcrumbLd("Gallery", PATH)),
        }}
      />
      <Gallery />
    </>
  );
}
