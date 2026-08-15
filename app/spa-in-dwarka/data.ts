import type { LocationContent } from "../lib/location";

/**
 * Dwarka's angle is the Link Road: it is the one big South-West Delhi catchment
 * that reaches us without touching the worst of NH-8, so the hook is the short
 * drive plus the fact that the sub-city has plenty of massage rooms and almost
 * no full spa that is still open late.
 *
 * Nothing here is shared with the Gurugram, Karol Bagh, Delhi, Aerocity, Saket,
 * Vasant Kunj, Hauz Khas or Green Park pages — area pages that read the same
 * compete with each other rather than rank.
 */
export const DWARKA: LocationContent = {
  path: "/spa-in-dwarka/",
  areaName: "Dwarka",
  breadcrumb: "Spa in Dwarka",

  heroImage: "/home_images/mahipalpurspa8.jpg",
  heroBadge: "Serving Dwarka Sectors 1–24 · Open 24 Hours",
  h1: { lead: "Spa in", em: "Dwarka", tail: "— Russian Banya 15 Minutes Away" },
  heroText: [
    "Dwarka is full of single-room massage centres and short on actual spas — and everything inside the sectors takes its last booking by ten. We are fifteen minutes east at Defence Enclave, Mahipalpur, straight down the Dwarka Link Road, and we do not close at any hour of any day.",
    "Authentic Russian Banya with birch venik, deep tissue work by certified therapists, private couples suites and free parking that costs nothing and has no time limit — which is more than the Sector 14 mall basement can say on a Saturday night.",
  ],
  heroStats: [
    { value: "11 km", label: "From Sector 10" },
    { value: "15 min", label: "Typical Drive" },
    { value: "24/7", label: "Including 3 AM" },
    { value: "4.8★", label: "350+ Reviews" },
  ],

  intro: {
    label: "Why Dwarka Guests Come To Us",
    titleLead: "The Spa Dwarka",
    titleEm: "Actually Drives To",
    paras: [
      "For a sub-city of its size, Dwarka is oddly underserved for wellness. There are salons in every sector market offering a massage as an add-on, a handful of rooms above shops near Dwarka Mor, and two hotel spas that keep hotel hours. What there isn't is a full spa — steam, banya, suites, a lounge — open at the hour most people in Sectors 6 through 24 are actually free.",
      "So Dwarka drives, and the drive is the easy part. From Sector 10 or Sector 12 you are on the Dwarka Link Road within minutes and at our gate in about fifteen, without ever queueing on the NH-8 stretch that makes every other trip out of Dwarka painful. From Palam it is closer to ten; from Dwarka Mor, about twenty-two.",
      "What waits at the end is a wood-lined Russian Banya held between 70 and 90°C, a birch venik treatment worked over the back and legs, a cold plunge, private suites sized for two therapists, and a relaxation lounge nobody hurries you out of. Guests who make a fifteen-minute run tend to book properly — 90-minute deep tissue and the 120-minute couples suite are the two we hold most often for Dwarka.",
    ],
  },

  highlights: [
    {
      icon: "car",
      title: "Fifteen Minutes, One Road",
      desc: "Sector 10 to our gate down the Dwarka Link Road — no NH-8 crawl, no Ring Road, no hunting for the turn.",
    },
    {
      icon: "moon",
      title: "Open After Dwarka Shuts",
      desc: "The sector markets close by ten. An 11 PM deep tissue booking here costs exactly what a midday one does.",
    },
    {
      icon: "flame",
      title: "A Real Banya, Not A Steam Room",
      desc: "Moist heat, birch venik over back and legs, cold plunge, rest cycle. There is no equivalent anywhere in Dwarka.",
    },
    {
      icon: "car",
      title: "Free Parking, No Limit",
      desc: "Park for the length of your treatment at no charge — no paid basement slot, no ticket, no time creeping up on you.",
    },
  ],

  treatments: [
    {
      icon: "dumbbell",
      name: "Deep Tissue — Extended",
      desc: "The most-booked treatment from Dwarka, and the honest length for a back stiffened by a long commute out of the sub-city. Full postural work, shoulders through lower back, at a pressure you confirm before we begin.",
      duration: "90 min",
      price: "₹4,400",
    },
    {
      icon: "flame",
      name: "Russian Banya with Venik",
      desc: "What most Dwarka guests come the first time for. Steam, birch venik worked over the back and legs, cold plunge, then a proper rest cycle — the full ritual, never a shortened one.",
      duration: "90 min",
      price: "₹3,500",
    },
    {
      icon: "couple",
      name: "Couples Spa Suite",
      desc: "Two therapists working in sync in a private suite with Banya access. The booking Dwarka couples make instead of a Vegas Mall dinner, and the one worth reserving a day ahead at weekends.",
      duration: "120 min",
      price: "₹7,500",
    },
    {
      icon: "waves",
      name: "Swedish Massage",
      desc: "The straightforward full-body session for a first visit. Medium pressure, warm oil, private room, and a shower and herbal tea afterwards before the short drive home.",
      duration: "60 min",
      price: "₹2,800",
    },
    {
      icon: "leaf",
      name: "Ayurvedic Abhyanga",
      desc: "Warm herbal oil in traditional rhythmic strokes. Popular with our older Dwarka regulars who want something restorative rather than firm, and one of the few authentic versions available this side of Delhi.",
      duration: "90 min",
      price: "₹3,800",
    },
    {
      icon: "stone",
      name: "Hot Stone Therapy",
      desc: "Heated basalt worked into deep muscle. Booked most through Dwarka's winters, when the drive over leaves people stiff before the session has even started.",
      duration: "75 min",
      price: "₹3,600",
    },
  ],

  nearby: [
    { name: "Dwarka Sector 10", distance: "15 min", note: "Straight down the Dwarka Link Road" },
    { name: "Dwarka Sector 6", distance: "16 min", note: "Same run, one turn out of the sector market" },
    { name: "Dwarka Sector 12", distance: "17 min", note: "Via the Link Road; quicker after 9 PM" },
    { name: "Dwarka Sector 21 Metro", distance: "12 min", note: "Blue Line and Airport Express interchange" },
    { name: "Vegas Mall, Sector 14", distance: "18 min", note: "Our busiest Dwarka window is after it closes" },
    { name: "Yashobhoomi (IICC)", distance: "14 min", note: "Convention delegates book late here regularly" },
    { name: "Palam Village", distance: "10 min", note: "The shortest run of any Dwarka catchment" },
    { name: "Dwarka Mor", distance: "22 min", note: "Allow extra during the evening peak" },
    { name: "Janakpuri", distance: "25 min", note: "Via Pankha Road and the Link Road" },
  ],

  gettingHere: [
    {
      icon: "car",
      title: "Driving from Dwarka",
      desc: "Dwarka Link Road east towards NH-8, then off at Mahipalpur into Defence Enclave before the hotel strip. Fifteen to eighteen minutes off-peak from Sector 10. Between 8–10 AM and 5–8 PM add ten minutes, and use the Sector 21 side rather than Dwarka Mor.",
    },
    {
      icon: "metro",
      title: "By metro from Dwarka",
      desc: "Blue Line to Dwarka Sector 21, change to the Airport Express and ride one stop towards Aerocity — from there it is a five-minute auto to Defence Enclave. Around 25 minutes door to door, and it beats the Link Road entirely at 6 PM.",
    },
    {
      icon: "plane",
      title: "By cab or app taxi",
      desc: "Set the destination as Defence Enclave, Mahipalpur — not Mahipalpur Village, which drops you on the wrong side of NH-8. A cab from most Dwarka sectors runs ₹200–₹300 off-peak. Call as you turn off the highway and we will talk your driver to the gate.",
    },
  ],

  reviews: [
    {
      text: "I live in Sector 12 and had given up on finding a real spa in Dwarka. This is fifteen minutes away and it is a completely different category — the Banya alone justifies the drive. It's a fortnightly habit now.",
      author: "Ankit Sharma",
      role: "Resident, Dwarka Sector 12",
    },
    {
      text: "Booked deep tissue at 11 PM after a late shift because nothing in Dwarka was still open. They took me straight in and the therapist actually worked the knots out instead of just oiling my back.",
      author: "Preeti Nagpal",
      role: "Dwarka Sector 6",
    },
    {
      text: "We drove down from Sector 19 for the couples suite on our anniversary. Private room, two therapists, free parking right outside, and noticeably better value than the hotel spas in Dwarka.",
      author: "Manish & Ritu Bansal",
      role: "Dwarka Sector 19",
    },
  ],

  article: {
    label: "Getting Here From Dwarka",
    titleLead: "Car Or Metro,",
    titleEm: "And When To Leave",
    standfirst:
      "Fifteen minutes is close enough that the journey should never be the reason you skip a session — but only if you pick the right window and the right route out of the sub-city.",
    sections: [
      {
        heading: "Reading the Link Road",
        paras: [
          "The Dwarka Link Road is the whole trip. From Sectors 6, 10 and 12 you are on it within a few minutes and off at Mahipalpur fifteen to eighteen minutes later, with no Ring Road and no long NH-8 crawl. Off-peak it is one of the most predictable runs in west Delhi. Between 8 and 10 in the morning and 5 and 8 in the evening, add ten to fifteen minutes and expect the Dwarka Mor end to be the slowest part.",
          "The single most useful habit is to leave after nine at night. The road empties, the fifteen minutes becomes twelve, and parking — free, on site, no time limit — is completely open. Guests coming from Palam have the shortest run of anyone we serve at around ten minutes; from Janakpuri, allow twenty-five via Pankha Road.",
        ],
      },
      {
        heading: "When the metro is the better idea",
        paras: [
          "Dwarka is unusual in having a genuinely good rail option. The Blue Line to Sector 21 connects directly to the Airport Express, one stop from Aerocity, and from that exit we are a five-minute auto. Door to door it runs about twenty-five minutes, and at 6 PM it will beat the car comfortably. It is also the sensible choice if your session includes the Banya — the heat cycle leaves most people pleasantly useless for half an hour afterwards, which is not the state to start a drive in.",
          "If you do drive, set the destination as Defence Enclave, Mahipalpur rather than Mahipalpur Village. The village sits on the far side of NH-8 and is the single most common way a Dwarka guest arrives ten minutes late. Full route notes for every catchment are on the [locations page](/locations/).",
        ],
      },
      {
        heading: "What being close actually changes",
        paras: [
          "Distance quietly dictates what people book. Guests driving forty minutes want a long ritual to justify the trip. At fifteen minutes you have the opposite freedom: a 60-minute [Swedish massage](/pricing/) on a weeknight is a perfectly reasonable use of an evening, and coming twice a month costs less in time than one long session from further out.",
          "That said, if you have a specific complaint rather than general stiffness, book ninety minutes. Sixty is not long enough to work a chronic lower back properly, whoever is on the table. The [full treatment list](/services/) sets out what each session actually includes, and the [city-wide guide](/spa-in-delhi/) explains what separates a real Banya from a sauna if that is what brought you here.",
        ],
      },
    ],
    takeaways: [
      "Link Road, 15–18 minutes off-peak; add 10–15 in the morning and evening peaks.",
      "After 9 PM the drive drops to about twelve minutes and parking is wide open.",
      "Blue Line to Sector 21, change to the Airport Express — about 25 minutes door to door, and better after a Banya.",
      "Set your map to Defence Enclave, Mahipalpur — not Mahipalpur Village, on the wrong side of NH-8.",
      "Close enough for 60-minute weeknight sessions; book 90 if you have a specific problem area.",
    ],
  },

  faqs: [
    {
      q: "Where is the nearest spa to Dwarka that is open 24 hours?",
      a: "Russian Spa Centre at Office No. 118, Defence Enclave, Mahipalpur — roughly 11 km and 15 to 18 minutes from Dwarka Sector 10 via the Dwarka Link Road, open every hour of every day including holidays. The salons and massage rooms inside the Dwarka sectors close by around 10 PM, so for a late-night or early-morning massage we are the closest full spa the sub-city has.",
    },
    {
      q: "How long does it take to reach you from Dwarka?",
      a: "Fifteen to eighteen minutes off-peak from Sector 10 or Sector 12 via the Dwarka Link Road. Add ten to fifteen minutes between 8–10 AM and 5–8 PM. From Palam it is about ten minutes, and from Dwarka Mor closer to twenty-two.",
    },
    {
      q: "Do you have a branch inside Dwarka?",
      a: "No, and we would rather say so plainly. We run a single premises in Mahipalpur — one address, one set of therapists, one hygiene standard. Dwarka is a catchment area we serve from it, not a second outlet. Anything advertising a Dwarka branch of ours is not us.",
    },
    {
      q: "Is there a travel or late-night charge for guests coming from Dwarka?",
      a: "None. Rates are identical regardless of where you travel from and identical at every hour. A 60-minute Swedish massage is ₹2,800 whether you book it at noon or at 3 AM, and there is no distance charge from any sector.",
    },
    {
      q: "Can I get there by metro from Dwarka?",
      a: "Yes. Take the Blue Line to Dwarka Sector 21 and change to the Airport Express for Aerocity, then a five-minute auto to Defence Enclave — about 25 minutes in total. It is the reliable option during evening peak when the Link Road is not.",
    },
    {
      q: "Is parking a problem if I drive from Dwarka?",
      a: "No. Free on-site parking with no time limit for the duration of your treatment, day or night — no paid basement slot and no ticket, which is more than you get around Vegas Mall or the Sector 6 market.",
    },
    {
      q: "Do you have both male and female therapists?",
      a: "Yes, all certified, insured and with a minimum of five years' experience. Tell us your preference when you book and we will confirm the therapist before you set off from Dwarka, so there are no surprises when you arrive.",
    },
  ],

  keywords: [
    "spa in Dwarka",
    "best spa in Dwarka",
    "body massage in Dwarka",
    "massage centre near Dwarka",
    "Russian spa near Dwarka",
    "spa near Dwarka Sector 10",
    "spa near Dwarka Sector 21 Metro",
    "24 hour spa Dwarka",
    "couples spa near Dwarka",
    "deep tissue massage Dwarka",
    "spa near Vegas Mall Dwarka",
    "Russian Banya West Delhi",
    "full body massage Dwarka",
    "night spa Dwarka",
  ],

  geo: { lat: 28.5921, lng: 77.046 },

  seo: {
    title: "Spa in Dwarka | Russian Banya & Body Massage 15 Min Away | Open 24/7",
    description:
      "Spa for Dwarka — 15 minutes from Sector 10 down the Link Road and open 24 hours. Authentic Russian Banya, deep tissue massage, private couples suites, certified therapists, free parking. No night surcharge. Call +91 9999999999",
    keywords:
      "spa in Dwarka, best spa in Dwarka, body massage in Dwarka, massage centre Dwarka, Russian spa near Dwarka, spa near Dwarka Sector 10, spa near Dwarka Sector 12, spa in Dwarka Sector 6, spa near Dwarka Metro, 24 hour spa Dwarka, couples spa Dwarka, deep tissue massage Dwarka, full body massage Dwarka, spa near Vegas Mall, spa near Dwarka Mor, spa near Palam, spa near Janakpuri, luxury spa West Delhi, aromatherapy massage Dwarka, hot stone massage Dwarka, Russian Banya West Delhi, spa for men Dwarka, ladies spa Dwarka, night spa Dwarka",
    ogTitle: "Spa in Dwarka | Russian Banya & Massage, 15 Minutes Away",
    ogDescription:
      "Dwarka's sector markets shut by ten. We don't. Authentic Russian Banya, deep tissue and couples suites, 15 minutes down the Link Road, open all night.",
    ogImageAlt: "Russian Spa Centre — the 24 hour spa serving Dwarka, New Delhi",
  },
};
