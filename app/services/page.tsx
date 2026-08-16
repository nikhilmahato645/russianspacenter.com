import type { Metadata } from "next";
import Services from "./Services";
import { SERVICE_FAQS } from "./data";
import { LOCAL_BUSINESS, SITE_URL, breadcrumbLd, faqLd, jsonLd } from "../lib/site";

const PATH = "/services/";

export const metadata: Metadata = {
  title: "Spa & Massage Services in Mahipalpur | Russian Spa Centre",
  description:
    "Swedish, deep tissue, Thai, aromatherapy, hot stone, reflexology and the Russian Banya — with durations and prices, in Mahipalpur. Open 24 hours.",
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
    title: "Spa & Massage Services in Mahipalpur | Russian Spa Centre",
    description:
      "20+ treatments: Russian Banya with venik, deep tissue, Thai, aromatherapy, hot stone, couples suites and airport express sessions. Open 24/7 near IGI Airport.",
    url: `${SITE_URL}${PATH}`,
    siteName: "Russian Spa Centre",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Spa and massage services at Russian Spa Centre, Mahipalpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa & Massage Services in Mahipalpur | Russian Spa Centre",
    description: "Russian Banya, deep tissue, Thai, aromatherapy, couples spa. Certified therapists, open 24/7.",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
  },
};

/**
 * Structured data is emitted here rather than inside the client component so it
 * is guaranteed to be in the statically exported HTML.
 */
const SERVICE_CATALOG = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PATH}#service`,
  name: "Spa & Massage Services in Mahipalpur",
  serviceType: "Spa and massage therapy",
  url: `${SITE_URL}${PATH}`,
  provider: LOCAL_BUSINESS,
  areaServed: LOCAL_BUSINESS.areaServed,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Spa treatments",
    itemListElement: [
      ["Russian Banya with Venik", "90 min authentic Russian steam ritual with birch venik treatment", 3500],
      ["Couples Spa Suite", "120 min private suite for two with synchronised therapists", 7500],
      ["Royal Signature Ritual", "150 min full-body scrub, massage, Banya access and refreshments", 8500],
      ["Swedish Massage", "Classic full-body relaxation massage with medium pressure", 2800],
      ["Deep Tissue Massage", "Firm targeted pressure for chronic muscle tension and back pain", 3400],
      ["Thai Massage", "Oil-free acupressure with assisted stretching", 3200],
      ["Aromatherapy Massage", "Gentle full-body massage with a custom essential oil blend", 3000],
      ["Hot Stone Therapy", "Heated basalt stone massage for deep muscle release", 3600],
      ["Sports & Recovery Massage", "Deep tissue, trigger point release and stretching for athletes", 3600],
      ["Reflexology", "Pressure point therapy for feet and hands", 2200],
      ["Ayurvedic Abhyanga", "Warm herbal oil massage in traditional Ayurvedic technique", 3800],
      ["Prenatal & Postnatal Massage", "Certified pregnancy-safe massage with side-lying support", 3000],
      ["Airport Layover Express", "45 min express massage, shower and refreshment", 2400],
    ].map(([name, description, price]) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, description },
      price: String(price),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}${PATH}`,
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(SERVICE_CATALOG, faqLd(SERVICE_FAQS), breadcrumbLd("Services", PATH)),
        }}
      />
      <Services />
    </>
  );
}
