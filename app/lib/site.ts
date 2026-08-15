/**
 * Single source of truth for business facts that appear in copy, `tel:` links,
 * WhatsApp deep links and JSON-LD. Changing the phone number or address here
 * updates every page and every structured-data block at once.
 */

export const SITE_URL = "https://russianspacenter.com";
export const BUSINESS_NAME = "Russian Spa Centre";

export const PHONE_DISPLAY = "+91 9999999999";
export const PHONE_E164 = "+919999999999";
export const PHONE_DIGITS = "919999999999";
export const EMAIL = "info@russianspacenter.com";

export const ADDRESS = {
  street: "Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur",
  locality: "New Delhi",
  region: "Delhi",
  postalCode: "110037",
  country: "IN",
  /** Mahipalpur / Defence Enclave — used by LocalBusiness `geo`. */
  lat: 28.5432,
  lng: 77.1234,
} as const;

export const AREAS_SERVED = [
  "Mahipalpur",
  "Aerocity",
  "Dwarka",
  "Vasant Kunj",
  "Vasant Vihar",
  "Rajokri",
  "Saket",
  "Hauz Khas",
  "Green Park",
  "Karol Bagh",
  "Gurugram",
  "IGI Airport, New Delhi",
];

export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Defence+Enclave,+Mahipalpur,+New+Delhi+110037";

export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

/** Builds a pre-filled WhatsApp deep link. */
export const waLink = (message: string) =>
  `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_URL = waLink(
  "Hello! I would like to book an appointment at Russian Spa Centre. Please share availability and pricing."
);

/**
 * `LocalBusiness` node reused by every page's JSON-LD. Repeating the same
 * business on each page (rather than linking to one) is what Google's
 * structured-data guidance recommends for multi-page local sites.
 */
export const LOCAL_BUSINESS = {
  "@type": "HealthAndBeautyBusiness",
  "@id": `${SITE_URL}/#business`,
  name: `${BUSINESS_NAME} Mahipalpur`,
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/logo.svg`,
  url: `${SITE_URL}/`,
  telephone: PHONE_E164,
  email: EMAIL,
  priceRange: "₹2000-₹15000",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Debit Card, UPI",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: ADDRESS.lat,
    longitude: ADDRESS.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "350",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: AREAS_SERVED.map((name) => ({ "@type": "Place", name })),
} as const;

/** BreadcrumbList for an inner page — Home › <label>. */
export function breadcrumbLd(label: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: label, item: `${SITE_URL}${path}` },
    ],
  };
}

/** FAQPage node from a plain question/answer list. */
export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Serialises one or more JSON-LD nodes for a `<script type="application/ld+json">`. */
export const jsonLd = (...nodes: unknown[]) =>
  JSON.stringify(nodes.length === 1 ? nodes[0] : nodes);
