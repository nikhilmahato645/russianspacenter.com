import type { Faq } from "../components/FaqAccordion";

export type Shot = {
  src: string;
  /** Descriptive alt text — this is what image search actually indexes. */
  alt: string;
  /** Short human caption shown on hover and under the lightbox. */
  caption: string;
  category: CategoryId;
  width: number;
  height: number;
};

export type CategoryId = "banya" | "rooms" | "spaces";

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "banya", label: "Banya & Steam" },
  { id: "rooms", label: "Treatment Rooms" },
  { id: "spaces", label: "Interiors & Lounge" },
];

/**
 * Every photo carries its true pixel dimensions so the browser reserves the
 * right box before the file arrives — no layout shift, which is a Core Web
 * Vitals input and therefore a ranking input.
 */
export const SHOTS: Shot[] = [
  {
    src: "/home_images/mahipalpurspa1.jpg",
    alt: "Wood-lined Russian Banya steam room at Russian Spa Centre, Mahipalpur, New Delhi",
    caption: "The Banya steam room, held between 70 and 90°C",
    category: "banya",
    width: 1200,
    height: 1800,
  },
  {
    src: "/home_images/mahipalpurspa5.jpg",
    alt: "Birch venik bundles prepared for a traditional Russian Banya treatment in Delhi NCR",
    caption: "Birch venik bundles, soaked and ready",
    category: "banya",
    width: 1200,
    height: 1800,
  },
  {
    src: "/home_images/mahipalpurspa9.jpg",
    alt: "Guest resting after a Russian Banya heat and cold-plunge cycle in Mahipalpur",
    caption: "The rest cycle between heat and plunge",
    category: "banya",
    width: 1200,
    height: 1800,
  },
  {
    src: "/home_images/mahipalpurspa13.jpg",
    alt: "Dry sauna and steam area at Russian Spa Centre near IGI Airport, New Delhi",
    caption: "Dry sauna, open around the clock",
    category: "banya",
    width: 1200,
    height: 800,
  },
  {
    src: "/home_images/mahipalpurspa2.jpg",
    alt: "Private massage treatment room with fresh linens at Russian Spa Centre, Mahipalpur",
    caption: "A private treatment room — never a curtain partition",
    category: "rooms",
    width: 1200,
    height: 1800,
  },
  {
    src: "/home_images/mahipalpurspa3.jpg",
    alt: "Couples spa suite with twin massage tables in Mahipalpur, near Aerocity",
    caption: "The couples suite, set for two therapists",
    category: "rooms",
    width: 1200,
    height: 1800,
  },
  {
    src: "/home_images/mahipalpurspa6.jpg",
    alt: "Aromatherapy massage room with essential oil selection at Russian Spa Centre Delhi",
    caption: "Oils laid out before an aromatherapy session",
    category: "rooms",
    width: 1200,
    height: 1807,
  },
  {
    src: "/home_images/mahipalpurspa10.jpg",
    alt: "Deep tissue massage room with adjustable table at spa in Mahipalpur, New Delhi",
    caption: "Set up for deep tissue work",
    category: "rooms",
    width: 1200,
    height: 1800,
  },
  {
    src: "/home_images/mahipalpurspa16.jpg",
    alt: "Hot stone therapy setup with heated basalt stones at Russian Spa Centre Mahipalpur",
    caption: "Basalt stones heating to 55°C",
    category: "rooms",
    width: 1200,
    height: 1800,
  },
  {
    src: "/home_images/mahipalpurspa4.jpg",
    alt: "Reception and waiting area at Russian Spa Centre, Defence Enclave, Mahipalpur",
    caption: "Reception at Defence Enclave",
    category: "spaces",
    width: 1200,
    height: 1800,
  },
  {
    src: "/home_images/mahipalpurspa7.jpg",
    alt: "Relaxation lounge with herbal tea service at spa near Aerocity, New Delhi",
    caption: "The relaxation lounge and tea service",
    category: "spaces",
    width: 1200,
    height: 1800,
  },
  {
    src: "/home_images/mahipalpurspa11.jpg",
    alt: "Changing area with lockers, robes and towels at Russian Spa Centre Mahipalpur",
    caption: "Lockers, robes and fresh towels",
    category: "spaces",
    width: 1200,
    height: 1800,
  },
  {
    src: "/home_images/mahipalpurspa14.jpg",
    alt: "Corridor leading to private treatment rooms at luxury spa in Mahipalpur Delhi NCR",
    caption: "The corridor to the treatment wing",
    category: "spaces",
    width: 1200,
    height: 1800,
  },
  {
    src: "/home_images/mahipalpurspa8.jpg",
    alt: "Shower and wet area with hospital-grade hygiene standards at spa in Mahipalpur",
    caption: "Wet area, disinfected between every guest",
    category: "spaces",
    width: 1200,
    height: 800,
  },
  {
    src: "/home_images/mahipalpurspa12.jpg",
    alt: "Herbal tea and refreshment counter at Russian Spa Centre near Delhi Airport",
    caption: "Complimentary herbal tea, always on",
    category: "spaces",
    width: 1200,
    height: 800,
  },
  {
    src: "/home_images/mahipalpurspa150.jpg",
    alt: "Ambient lighting and seating in the spa lounge at Mahipalpur, New Delhi 110037",
    caption: "Evening light in the lounge",
    category: "spaces",
    width: 1200,
    height: 800,
  },
  {
    src: "/home_images/mahipalpurspa15.png",
    alt: "Interior detail of Russian Spa Centre, a 24 hour spa in Mahipalpur near IGI Airport",
    caption: "Interior detail",
    category: "spaces",
    width: 1536,
    height: 1024,
  },
  {
    src: "/spa-in-mahipalpur/image1.jpg",
    alt: "Exterior view of Russian Spa Centre at Defence Enclave, Mahipalpur, adjoining Aerocity",
    caption: "Where to find us — Defence Enclave, Mahipalpur",
    category: "spaces",
    width: 1944,
    height: 809,
  },
];

export const GALLERY_FAQS: Faq[] = [
  {
    q: "Are these photos of the actual Mahipalpur spa?",
    a: "Yes. Every image on this page was taken inside our Defence Enclave premises in Mahipalpur — the Banya, the treatment rooms, the lounge and the changing area. We do not use stock photography to represent our facilities.",
  },
  {
    q: "Can I see a room before I book?",
    a: "Absolutely. Walk in at any hour and ask at reception — we are happy to show you the treatment rooms, the Banya and the lounge before you decide anything. No appointment is needed for a look around.",
  },
  {
    q: "Are photographs allowed inside the spa?",
    a: "For the privacy of other guests, personal photography is not permitted in the treatment wing, the Banya or the changing areas. Reception and the lounge are fine. This is why our own photos are taken outside operating peaks with no guests present.",
  },
  {
    q: "Is every treatment room private?",
    a: "Yes — every treatment happens in a fully enclosed private room with a door, not behind a curtain partition. Couples suites are separate rooms sized for two tables.",
  },
  {
    q: "How often are the rooms cleaned?",
    a: "Linens are changed and the room is disinfected to hospital-grade standards after every single guest, not on a schedule. The wet areas and Banya are deep-cleaned on a rolling cycle through the day and night.",
  },
];
