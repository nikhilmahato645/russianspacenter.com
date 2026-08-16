import type { Metadata } from "next";
import Pricing from "./Pricing";
import { PRICING_FAQS, RATE_GROUPS } from "./data";
import { LOCAL_BUSINESS, SITE_URL, breadcrumbLd, faqLd, jsonLd } from "../lib/site";

const PATH = "/pricing/";

export const metadata: Metadata = {
  title: "Spa & Body Massage Prices in Mahipalpur | Russian Spa Centre",
  description:
    "Spa and body massage price list for Mahipalpur: massage from ₹2,800, Russian Banya ₹3,500, couples suite ₹7,500. Taxes included, no night surcharge.",
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
    title: "Spa & Massage Price List | Russian Spa Centre Mahipalpur",
    description:
      "Body massage from ₹2,800 · Russian Banya ₹3,500 · Couples suite ₹7,500. Taxes included, no hidden charges. Open 24/7 near IGI Airport.",
    url: `${SITE_URL}${PATH}`,
    siteName: "Russian Spa Centre",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Spa and massage price list at Russian Spa Centre, Mahipalpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa & Massage Price List | Russian Spa Centre",
    description: "Massage from ₹2,800, Banya ₹3,500, couples ₹7,500. Taxes included, no hidden fees.",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
  },
};

const ALL_RATES = RATE_GROUPS.flatMap((group) =>
  group.rates.map((rate) => ({
    "@type": "Offer",
    name: rate.name,
    description: `${rate.desc} — ${rate.duration}`,
    price: String(rate.price),
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}${PATH}#${group.id}`,
    category: group.title,
    itemOffered: { "@type": "Service", name: rate.name, description: rate.desc },
  }))
);

const PRICE_LD = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${SITE_URL}${PATH}#rates`,
  name: "Russian Spa Centre — Treatment Rate Card",
  url: `${SITE_URL}${PATH}`,
  provider: LOCAL_BUSINESS,
  itemListElement: ALL_RATES,
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(PRICE_LD, faqLd(PRICING_FAQS), breadcrumbLd("Pricing", PATH)),
        }}
      />
      <Pricing />
    </>
  );
}
