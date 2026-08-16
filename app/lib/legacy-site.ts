/**
 * Cross-links to the client's other website, mahipalpurspaservicecentre.com.
 *
 * Both sites belong to the same business and describe the same premises. The
 * links below exist so a visitor can reach the older site, which has been live
 * longer and covers some topics under their own URLs.
 *
 * Two rules govern this map, and both come from the brief:
 *
 *  1. Every link is topically relevant to the page it appears on. A page only
 *     links to the old site's equivalent coverage — never to an unrelated page
 *     just to place a link.
 *  2. No page carries the whole list. The 21 old URLs are distributed across
 *     the site, one to three per page, on the page each one actually matches.
 *
 * Pages with no genuine counterpart on the old site (Saket, Hauz Khas, Green
 * Park — the old site has no page for those areas) deliberately get nothing.
 */

export const LEGACY_SITE = "https://mahipalpurspaservicecentre.com";

export type LegacyLink = {
  /** Path on the legacy site, with the trailing slash it serves. */
  path: string;
  /** Anchor text — descriptive of the destination, not an exact-match slug. */
  label: string;
  /** One line on what is actually over there, shown beside the link. */
  note: string;
};

/** Keyed by the path of the page the block renders on. */
export const LEGACY_LINKS: Record<string, LegacyLink[]> = {
  "/": [
    {
      path: "/",
      label: "Mahipalpur Spa Service Centre",
      note: "Our longer-running site for the same spa, with its own guides and photos.",
    },
  ],

  "/about/": [
    {
      path: "/about/",
      label: "About the spa, on our other site",
      note: "The same story told there, with additional background on how we started.",
    },
  ],

  "/services/": [
    {
      path: "/services/",
      label: "Treatment menu on mahipalpurspaservicecentre.com",
      note: "The same treatments written up separately, useful as a second opinion.",
    },
  ],

  "/pricing/": [
    {
      path: "/pricing/",
      label: "Price list on our other site",
      note: "Rates published there too — call to confirm if the two ever disagree.",
    },
  ],

  "/contact/": [
    {
      path: "/contact/",
      label: "Contact page on our other site",
      note: "Same phone, same address, same hours — Defence Enclave, Mahipalpur.",
    },
  ],

  "/gallery/": [
    {
      path: "/gallery/",
      label: "More photographs of the spa",
      note: "A separate set of interior photos taken at the same premises.",
    },
  ],

  "/locations/": [
    {
      path: "/locations/",
      label: "Areas we serve, on our other site",
      note: "The same catchments listed there, with its own notes on each route.",
    },
  ],

  "/spa-in-mahipalpur/": [
    {
      path: "/body-massage-mahipalpur/",
      label: "Body massage in Mahipalpur",
      note: "A dedicated write-up of the massage menu on our other site.",
    },
    {
      path: "/russian-spa-mahipalpur/",
      label: "Russian spa in Mahipalpur",
      note: "The Banya and the Russian side of the treatment list, covered separately.",
    },
    {
      path: "/spa-in-mahipalpur/",
      label: "Spa in Mahipalpur",
      note: "The same premises page on mahipalpurspaservicecentre.com.",
    },
  ],

  "/spa-in-aerocity/": [
    {
      path: "/spa-in-aerocity/",
      label: "Spa in Aerocity",
      note: "The Aerocity page on our other site, written for hotel guests.",
    },
    {
      path: "/body-massage-aerocity/",
      label: "Body massage in Aerocity",
      note: "Massage-specific coverage for guests staying on the hotel strip.",
    },
    {
      path: "/russian-spa-aerocity/",
      label: "Russian spa near Aerocity",
      note: "The Banya written up for late arrivals and long-haul recovery.",
    },
  ],

  "/spa-in-vasant-kunj/": [
    {
      path: "/spa-in-vasant-kunj/",
      label: "Spa for Vasant Kunj",
      note: "The Vasant Kunj page on our other site.",
    },
    {
      path: "/body-massage-vasant-kunj/",
      label: "Body massage in Vasant Kunj",
      note: "Massage-specific coverage for the Vasant Kunj catchment.",
    },
  ],

  "/spa-in-delhi/": [
    {
      path: "/spa-in-delhi/",
      label: "Spa in Delhi",
      note: "The city-wide page on mahipalpurspaservicecentre.com.",
    },
    {
      path: "/russian-banya-delhi/",
      label: "Russian Banya in Delhi",
      note: "A full explainer of the Banya cycle, venik and cold plunge.",
    },
    {
      path: "/couple-spa-delhi/",
      label: "Couples spa in Delhi",
      note: "The couples suites and what a two-therapist session involves.",
    },
  ],

  "/spa-in-dwarka/": [
    {
      path: "/spa-in-dwarka/",
      label: "Spa for Dwarka",
      note: "The Dwarka page on our other site, with its own route notes.",
    },
  ],

  "/spa-in-gurugram/": [
    {
      path: "/spa-in-gurugram/",
      label: "Spa for Gurugram",
      note: "The Gurugram page on our other site, covering the NH-48 run.",
    },
  ],

  "/spa-in-karol-bagh/": [
    {
      path: "/spa-in-karol-bagh/",
      label: "Spa for Karol Bagh",
      note: "The Karol Bagh page on our other site.",
    },
  ],

  // /spa-in-saket/, /spa-in-hauz-khas/ and /spa-in-green-park/ are intentionally
  // absent: the old site has no page for those areas, and linking them to
  // something unrelated would be a link for its own sake.
};

/** Links for a page, or an empty list when the old site has no counterpart. */
export function legacyLinksFor(path: string): LegacyLink[] {
  return LEGACY_LINKS[path] ?? [];
}
