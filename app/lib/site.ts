/**
 * Single source of truth for business facts that appear in copy, `tel:` links,
 * WhatsApp deep links and JSON-LD. Changing the phone number or address here
 * updates every page and every structured-data block at once.
 */

/**
 * The one place the live domain is declared.
 *
 * Every canonical, Open Graph URL, sitemap entry and schema `@id` on the site is
 * derived from this, so moving the site to a different domain — or consolidating
 * with mahipalpurspaservicecentre.com — is a one-line change plus robots.txt.
 *
 * No trailing slash here; callers add it. `trailingSlash: true` in
 * next.config.js means every path must end in "/".
 */
export const SITE_URL = "https://russianspacenter.com";

/** Host only, for display in the footer copyright line. */
export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, "");

export const BUSINESS_NAME = "Russian Spa Centre";

export const PHONE_DISPLAY = "+91 8929979542";
export const PHONE_E164 = "+918929979542";
/** Digits only, for wa.me deep links. Same line as the phone. */
export const PHONE_DIGITS = "918929979542";
export const EMAIL = "info@mahipalpurspaservicecentre.com";

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
  "Defence Colony",
  "South Delhi",
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

/**
 * Postal codes the spa takes bookings from, published as the `LocalBusiness`
 * service area. Delhi codes first, then the wider NCR — Gurugram, Faridabad,
 * Noida and Ghaziabad.
 *
 * NOTE: the supplied list contained "11048", which is five digits and not a
 * valid Indian PIN. It is recorded here as 110048 — Defence Colony — which is
 * both the obvious correction and consistent with Defence Colony appearing in
 * the served-areas list above. Worth confirming.
 */
export const SERVICE_PINCODES = [
  "110037", // Mahipalpur / Defence Enclave — the premises
  "110001",
  "110005",
  "110011",
  "110048", // Defence Colony (supplied as "11048")
  "110049",
  "110057",
  "110067",
  "110070",
  "110075",
  "110089",
  "110097",
  "122001", // Gurugram
  "122002",
  "121001", // Faridabad
  "201301", // Noida
  "201002", // Ghaziabad
  "201014",
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
  areaServed: [
    ...AREAS_SERVED.map((name) => ({ "@type": "Place", name })),
    ...SERVICE_PINCODES.map((postalCode) => ({
      "@type": "PostalCodeSpecification",
      postalCode,
      addressCountry: "IN",
    })),
  ],
} as const;

/**
 * NOTE — no `aggregateRating` here, deliberately.
 *
 * Google's structured-data policy treats ratings a business publishes about
 * itself as "self-serving" and disallows them for LocalBusiness: they are
 * ineligible for rich results and marking them up can trigger a manual action.
 * Ratings have to come from a third party (Google Business Profile, JustDial)
 * or from genuinely collected, individually attributable reviews.
 *
 * If real review data exists, the right move is to keep it on the Google
 * Business Profile and let Google source it from there — not to re-declare it
 * in this file.
 */

/**
 * Site-level entity nodes, emitted once on the home page.
 *
 * `WebSite` and `Organization` describe the site and the company; the
 * `LocalBusiness` node in the layout describes the premises. Keeping them as
 * separate `@id`s that reference each other lets Google resolve one entity
 * rather than three competing ones.
 */
export const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: BUSINESS_NAME,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#organization` },
} as const;

export const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/og-image.png`,
  telephone: PHONE_E164,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
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
