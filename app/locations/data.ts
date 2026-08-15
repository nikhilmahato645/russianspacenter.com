import type { Faq } from "../components/FaqAccordion";

export type Area = {
  slug: string;
  name: string;
  headline: string;
  desc: string;
  drive: string;
  landmark: string;
  /** Internal link, when a dedicated landing page exists for that area. */
  href: string | null;
  serves: string[];
};

/**
 * Defence Enclave in Mahipalpur is the physical premises; every entry below is
 * a catchment area we serve from it, not a separate branch. The copy is written
 * that way deliberately — claiming branches that do not exist is the fastest
 * way to lose a Google Business listing.
 */
export const AREAS: Area[] = [
  {
    slug: "mahipalpur",
    name: "Mahipalpur",
    headline: "Our premises",
    desc: "Office No. 118, Defence Enclave — the spa itself. All treatments, the Russian Banya, the couples suites and the relaxation lounge are here, staffed and open every hour of every day.",
    drive: "You're here",
    landmark: "2 min from Mahipalpur Metro",
    href: "/spa-in-mahipalpur/",
    serves: ["Defence Enclave", "Rangpuri", "NH-8 hotel strip", "Mahipalpur Extension"],
  },
  {
    slug: "aerocity",
    name: "Aerocity",
    headline: "Five minutes away",
    desc: "The closest hospitality district to us. Guests at the Aerocity hotels reach the spa in about five minutes, and complimentary pickup is available on bookings of 90 minutes or longer.",
    drive: "5 min by road",
    landmark: "Adjoining Aerocity, across NH-8",
    href: "/spa-in-aerocity/",
    serves: ["JW Marriott", "Pullman", "Andaz", "Roseate House", "Holiday Inn", "Aloft"],
  },
  {
    slug: "igi-airport",
    name: "IGI Airport",
    headline: "Built for layovers",
    desc: "Ten to twelve minutes from Terminal 3 and eight from Terminal 1. Our Airport Layover Express fits an entire reset — massage, shower, refreshment — inside an hour, at any time of night.",
    drive: "8–12 min by road",
    landmark: "T3 arrivals to our door",
    href: null,
    serves: ["Terminal 1", "Terminal 2", "Terminal 3", "Airport hotels"],
  },
  {
    slug: "dwarka",
    name: "Dwarka",
    headline: "Fifteen minutes west",
    desc: "Straightforward run down the Dwarka Link Road, easiest outside peak hours. Popular with Sector 6 to 24 residents who want deep tissue and Ayurvedic work on weekday evenings.",
    drive: "15–18 min by road",
    landmark: "Via Dwarka Link Road",
    href: "/spa-in-dwarka/",
    serves: ["Sectors 6–12", "Sectors 13–19", "Sectors 20–24", "Dwarka Mor"],
  },
  {
    slug: "vasant-kunj",
    name: "Vasant Kunj",
    headline: "Twelve minutes south",
    desc: "A short drive past the mall complex on Vasant Kunj Road. A steady weekend crowd from the residential blocks books couples suites and signature rituals here.",
    drive: "12–15 min by road",
    landmark: "Past the Vasant Kunj mall complex",
    href: "/spa-in-vasant-kunj/",
    serves: ["Vasant Kunj A–D blocks", "Vasant Vihar", "Kishangarh", "Masoodpur"],
  },
  {
    slug: "green-park",
    name: "Green Park",
    headline: "Twenty minutes east",
    desc: "The shortest run to us from South Delhi — Aurobindo Marg onto the Ring Road. Close enough that most Green Park guests keep a fortnightly Abhyanga or aromatherapy slot rather than booking for an occasion.",
    drive: "20–25 min by road",
    landmark: "Via Aurobindo Marg and the Ring Road",
    href: "/spa-in-green-park/",
    serves: ["Green Park Market", "Green Park Extension", "Yusuf Sarai", "AIIMS", "Gautam Nagar"],
  },
  {
    slug: "hauz-khas",
    name: "Hauz Khas",
    headline: "Twenty-two minutes east",
    desc: "A clean run west along the Outer Ring Road past IIT and Munirka. Mostly therapeutic bookings — deep tissue and Thai work for desk-bound backs, and recovery massage for the Deer Park running crowd.",
    drive: "22–28 min by road",
    landmark: "Via Outer Ring Road, past IIT Delhi",
    href: "/spa-in-hauz-khas/",
    serves: ["Hauz Khas Village", "Deer Park", "SDA Market", "Gulmohar Park", "Safdarjung Enclave"],
  },
  {
    slug: "saket",
    name: "Saket",
    headline: "Twenty-five minutes east",
    desc: "Press Enclave Marg to the Outer Ring Road, or Mehrauli–Gurgaon Road late at night. Guests travelling this far usually book a 120-minute-plus ritual or a couples suite to make the trip worth it.",
    drive: "25–30 min by road",
    landmark: "Via Press Enclave Marg",
    href: "/spa-in-saket/",
    serves: ["Select Citywalk", "Saket District Centre", "Malviya Nagar", "Sheikh Sarai", "Pushp Vihar"],
  },
  {
    slug: "karol-bagh",
    name: "Karol Bagh",
    headline: "Twenty-five minutes from central Delhi",
    desc: "One clean run out along the Ring Road. Traders closing on Ajmal Khan Road, families staying in the hotel belt and travellers with a night train out of New Delhi station book the longer rituals here.",
    drive: "25–35 min by road",
    landmark: "Via the Ring Road past Rajendra Place",
    href: "/spa-in-karol-bagh/",
    serves: ["Ajmal Khan Road", "Gaffar Market", "Rajendra Place", "Patel Nagar", "Paharganj"],
  },
  {
    slug: "gurugram",
    name: "Gurugram",
    headline: "Twenty minutes up NH-48",
    desc: "The one catchment that comes to us for the clock rather than the distance — Gurugram spas take their last booking by eleven. Mostly deep tissue and sports recovery, mostly late.",
    drive: "18–30 min by road",
    landmark: "Via NH-48, Delhi-bound",
    href: "/spa-in-gurugram/",
    serves: ["Cyber City", "Udyog Vihar", "DLF Phases 1–3", "MG Road", "Golf Course Road"],
  },
];

export type Hotel = {
  name: string;
  img: string;
  walk: string;
  width: number;
  height: number;
};

export const HOTELS: Hotel[] = [
  { name: "JW Marriott Aerocity", img: "/home_images/hotels_images/hotel_jw.jpeg", walk: "5 min drive", width: 301, height: 167 },
  { name: "Pullman New Delhi", img: "/home_images/hotels_images/hotel_pullman.jpg", walk: "5 min drive", width: 1024, height: 768 },
  { name: "Roseate House", img: "/home_images/hotels_images/hotel_roseate.jpg", walk: "6 min drive", width: 2000, height: 1264 },
  { name: "Aloft Aerocity", img: "/home_images/hotels_images/hotel_aloft.jpg", walk: "5 min drive", width: 1200, height: 819 },
  { name: "Le Meridien Gurgaon", img: "/home_images/hotels_images/hotel_le_meridien.jpg", walk: "20 min drive", width: 460, height: 345 },
  { name: "The Suryaa New Delhi", img: "/home_images/hotels_images/hotel_suryaa.jpg", walk: "22 min drive", width: 930, height: 550 },
];

export const LOCATION_FAQS: Faq[] = [
  {
    q: "How many branches does Russian Spa Centre have?",
    a: "One physical premises — Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037. We serve guests from Aerocity, IGI Airport, Dwarka, Vasant Kunj and wider South Delhi from that single location, which is how we keep therapist quality and hygiene standards consistent.",
  },
  {
    q: "Which spa is closest to IGI Airport Terminal 3?",
    a: "Ours is 10 to 12 minutes from Terminal 3 by road, on the Mahipalpur side of NH-8. Because we are open 24 hours, we are a practical option for overnight layovers and delayed flights when hotel spas have closed for the night.",
  },
  {
    q: "Do you pick up guests from Aerocity hotels?",
    a: "Yes, for bookings of 90 minutes or longer we can arrange complimentary pickup from Aerocity hotels including JW Marriott, Pullman, Andaz, Roseate House, Holiday Inn and Aloft. Mention it when booking so we can schedule the car.",
  },
  {
    q: "How long does it take to reach you from Dwarka?",
    a: "Roughly 15 to 18 minutes off-peak via the Dwarka Link Road, from around Sector 10. Allow an extra 10 to 15 minutes during morning and evening rush.",
  },
  {
    q: "Is there parking at the spa?",
    a: "Yes — free on-site parking for all guests, with no time limit for the duration of your treatment, day or night.",
  },
  {
    q: "What is the nearest metro station?",
    a: "Mahipalpur is the closest, two to three minutes away on foot or a one-minute auto ride from the station exit. The Airport Express Line at Aerocity station is about five minutes by road.",
  },
  {
    q: "Do you charge more for guests travelling from further away?",
    a: "No. Rates are identical regardless of where you travel from, and identical at every hour — there is no distance charge and no night surcharge.",
  },
];
