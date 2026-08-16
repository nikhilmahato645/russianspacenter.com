import type { Metadata } from "next";
import Contact from "./Contact";
import { CONTACT_FAQS } from "./data";
import { LOCAL_BUSINESS, SITE_URL, breadcrumbLd, faqLd, jsonLd } from "../lib/site";

const PATH = "/contact/";

export const metadata: Metadata = {
  title: "Contact & Booking | Russian Spa Centre, Mahipalpur",
  description:
    "Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037. Call or WhatsApp any hour to book a body massage or spa treatment. Free parking.",
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
    title: "Contact Russian Spa Centre Mahipalpur | Open 24/7",
    description:
      "Defence Enclave, Mahipalpur, New Delhi 110037. Call +91 8929979542 at any hour. Free parking, 10 min from IGI Airport T3.",
    url: `${SITE_URL}${PATH}`,
    siteName: "Russian Spa Centre",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact Russian Spa Centre, Mahipalpur, New Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Russian Spa Centre Mahipalpur",
    description: "Call +91 8929979542 any hour. Defence Enclave, Mahipalpur — 10 min from IGI Airport.",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
  },
};

const CONTACT_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}${PATH}#contact`,
  name: "Contact Russian Spa Centre",
  url: `${SITE_URL}${PATH}`,
  description:
    "Phone, WhatsApp, email, address, opening hours and directions for Russian Spa Centre in Mahipalpur, New Delhi.",
  mainEntity: {
    ...LOCAL_BUSINESS,
    hasMap: "https://www.google.com/maps/dir/?api=1&destination=Defence+Enclave,+Mahipalpur,+New+Delhi+110037",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: LOCAL_BUSINESS.telephone,
        contactType: "reservations",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Russian"],
        hoursAvailable: LOCAL_BUSINESS.openingHoursSpecification,
      },
      {
        "@type": "ContactPoint",
        email: LOCAL_BUSINESS.email,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(CONTACT_LD, faqLd(CONTACT_FAQS), breadcrumbLd("Contact", PATH)),
        }}
      />
      <Contact />
    </>
  );
}
