import type { Faq } from "../components/FaqAccordion";
import { LOCAL_BUSINESS, SITE_URL } from "./site";

/**
 * Icons are referenced by key rather than by component so a location's content
 * stays a plain serialisable object. That matters: `page.tsx` is a server
 * component and React cannot pass function references across the server/client
 * boundary — a `icon: Flame` field would throw at render time.
 */
export type IconKey =
  | "plane"
  | "hotel"
  | "metro"
  | "car"
  | "clock"
  | "shield"
  | "lock"
  | "spray"
  | "wallet"
  | "star"
  | "couple"
  | "flame"
  | "waves"
  | "dumbbell"
  | "hand"
  | "flower"
  | "stone"
  | "feet"
  | "activity"
  | "baby"
  | "leaf"
  | "briefcase"
  | "home"
  | "trees"
  | "users"
  | "moon"
  | "mapPin";

export type LocationContent = {
  /** URL path, with the trailing slash next.config.js requires. */
  path: string;
  areaName: string;
  breadcrumb: string;

  heroImage: string;
  heroBadge: string;
  h1: { lead: string; em: string; tail?: string };
  /** Two or three paragraphs — written per area, never templated. */
  heroText: string[];
  heroStats: { value: string; label: string }[];

  intro: {
    label: string;
    titleLead: string;
    titleEm: string;
    paras: string[];
  };

  highlights: { icon: IconKey; title: string; desc: string }[];

  treatments: {
    icon: IconKey;
    name: string;
    /** Why this specific treatment suits this specific area. */
    desc: string;
    duration: string;
    price: string;
  }[];

  nearby: { name: string; distance: string; note: string }[];

  gettingHere: { icon: IconKey; title: string; desc: string }[];

  reviews: { text: string; author: string; role: string }[];

  /**
   * Long-form editorial. This is the part of an area page that can rank on its
   * own rather than by repeating the hero, so every area takes a different
   * subject — the Banya explained, choosing between deep tissue and Thai,
   * timing a session around a flight — instead of ten variations of one essay.
   *
   * Paragraph text may contain `[label](/path/)` links, which `LocationPage`
   * renders as anchors. Contextual links inside prose are the internal links
   * that actually carry weight, so each article carries a few by design.
   */
  article: {
    /** Eyebrow above the article H2. */
    label: string;
    titleLead: string;
    titleEm: string;
    /** One-paragraph standfirst, set larger than the body. */
    standfirst: string;
    sections: { heading: string; paras: string[] }[];
    /** Closing summary, rendered as a short list. */
    takeaways: string[];
  };

  faqs: Faq[];

  /** Approximate centroid of the served area, for the `areaServed` node. */
  geo: { lat: number; lng: number };

  /**
   * Overrides for the `areaServed` node, which otherwise assumes a New Delhi
   * locality. Gurugram is in Haryana and the city-wide page covers the whole of
   * Delhi NCR, so both need to say something truer than "<area>, New Delhi".
   */
  areaServedName?: string;
  containedInCity?: string;

  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
  };
};

export type AreaLink = {
  path: string;
  /** Card title — "Spa in Dwarka". */
  label: string;
  /** Drive time from that area, shown as the card's meta line. */
  drive: string;
  /** One line on what makes that page different from this one. */
  teaser: string;
};

/**
 * Every area landing page, in one list.
 *
 * This is the internal-linking backbone: each page renders every *other* entry,
 * so the ten pages form a complete mesh and none of them is more than one hop
 * from any other. Adding a new area page means adding it here — miss it and the
 * page is orphaned, which is exactly the failure this list exists to prevent.
 */
export const AREA_INDEX: AreaLink[] = [
  {
    path: "/spa-in-mahipalpur/",
    label: "Spa in Mahipalpur",
    drive: "The premises itself",
    teaser: "The spa itself — Banya, couples suites and the relaxation lounge, staffed every hour.",
  },
  {
    path: "/spa-in-aerocity/",
    label: "Spa in Aerocity",
    drive: "5 min from the hotel strip",
    teaser: "Built around flight deadlines, with door-to-door hotel pickup on longer bookings.",
  },
  {
    path: "/spa-in-delhi/",
    label: "Spa in Delhi",
    drive: "Serving all of Delhi NCR",
    teaser: "The city-wide page: what an authentic Banya is, and how to judge a Delhi spa.",
  },
  {
    path: "/spa-in-dwarka/",
    label: "Spa in Dwarka",
    drive: "15 min via the Link Road",
    teaser: "One straight run east from the sectors, with parking that costs nothing.",
  },
  {
    path: "/spa-in-vasant-kunj/",
    label: "Spa in Vasant Kunj",
    drive: "12–15 min past the malls",
    teaser: "For regulars: notes kept on file, membership pricing, senior rates.",
  },
  {
    path: "/spa-in-green-park/",
    label: "Spa in Green Park",
    drive: "20 min via Aurobindo Marg",
    teaser: "Ayurvedic Abhyanga and aromatherapy, and the 6 AM slot before work.",
  },
  {
    path: "/spa-in-hauz-khas/",
    label: "Spa in Hauz Khas",
    drive: "22 min via the Ring Road",
    teaser: "The therapeutic end: deep tissue, Thai stretching and runner's recovery.",
  },
  {
    path: "/spa-in-saket/",
    label: "Spa in Saket",
    drive: "25 min via Press Enclave Marg",
    teaser: "Long-format rituals for guests who would rather drive once and stay longer.",
  },
  {
    path: "/spa-in-karol-bagh/",
    label: "Spa in Karol Bagh",
    drive: "25 min via the Ring Road",
    teaser: "A full spa rather than a room above a shop — privacy, licensing, hygiene.",
  },
  {
    path: "/spa-in-gurugram/",
    label: "Spa near Gurugram",
    drive: "20 min up NH-48",
    teaser: "Open when Gurugram closes, with recovery work for desk and gym bodies.",
  },
];

/** Every area page except the one being rendered — see `AREA_INDEX`. */
export function relatedAreas(currentPath: string): AreaLink[] {
  return AREA_INDEX.filter((area) => area.path !== currentPath);
}

/**
 * Areas that have their own card on the /locations/ hub, so `#slug` resolves to
 * something real. `/spa-in-delhi/` is city-wide and has no card, so it falls
 * back to the hub itself rather than pointing at a fragment that does not exist.
 */
const HUB_ANCHORS = new Set([
  "mahipalpur",
  "aerocity",
  "dwarka",
  "vasant-kunj",
  "green-park",
  "hauz-khas",
  "saket",
  "karol-bagh",
  "gurugram",
]);

/**
 * Second breadcrumb level for an area page.
 *
 * This used to be a generic "Locations" for all ten pages, which is why every
 * area page rendered the identical `russianspacenter.com › Locations` in Google
 * results — Google shows the *ancestor* trail and truncates the current page,
 * so the only crumb on display was the one they all shared. Naming this level
 * after the area gives each result its own breadcrumb.
 */
export function hubAnchorFor(path: string) {
  const slug = path.replace("/spa-in-", "").replace(/\//g, "");
  return HUB_ANCHORS.has(slug) ? `/locations/#${slug}` : "/locations/";
}

/**
 * Structured data for an area landing page.
 *
 * Note what this deliberately does NOT do: it never emits a second
 * `LocalBusiness` with the area's address. We run one premises, in Mahipalpur.
 * Publishing a branch that does not exist is the fastest way to lose a Google
 * Business listing, so the area is modelled as `areaServed` on the real
 * business instead.
 */
export function locationLd(content: LocationContent) {
  const url = `${SITE_URL}${content.path}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: `Spa & Massage in ${content.areaName}`,
      serviceType: "Spa and massage therapy",
      url,
      provider: LOCAL_BUSINESS,
      areaServed: {
        "@type": "Place",
        name: content.areaServedName ?? `${content.areaName}, New Delhi`,
        geo: {
          "@type": "GeoCoordinates",
          latitude: content.geo.lat,
          longitude: content.geo.lng,
        },
        containedInPlace: { "@type": "City", name: content.containedInCity ?? "New Delhi" },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Treatments booked from ${content.areaName}`,
        itemListElement: content.treatments.map((t) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t.name, description: t.desc },
          price: t.price.replace(/[^\d]/g, ""),
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: content.areaName,
          item: `${SITE_URL}${hubAnchorFor(content.path)}`,
        },
        { "@type": "ListItem", position: 3, name: content.breadcrumb, item: url },
      ],
    },
  ];
}
