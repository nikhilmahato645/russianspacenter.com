import type { LocationContent } from "../lib/location";

/**
 * The city-wide page. Where the neighbourhood pages compete on drive time, this
 * one competes on the thing no other Delhi spa can copy — a genuine Russian
 * Banya with venik — plus the 24-hour clock and the airport proximity. Keep the
 * copy at city altitude so it does not cannibalise the area pages beneath it.
 */
export const DELHI: LocationContent = {
  path: "/spa-in-delhi/",
  areaName: "Delhi",
  breadcrumb: "Spa in Delhi",

  areaServedName: "Delhi NCR",
  containedInCity: "Delhi",

  heroImage: "/Rawimages/russianspacenterimage10.webp",
  heroBadge: "Delhi's Russian Banya · Open 24 Hours, 365 Days",
  h1: { lead: "Best Spa & Body Massage in", em: "Delhi" },
  heroText: [
    "Delhi is not short of massage centres. It is short of a real Russian Banya — a wood-lined steam room held between 70 and 90°C, a birch venik worked over the back and legs, a cold plunge and a proper rest cycle. That is what we built the spa around, at Defence Enclave, Mahipalpur, ten minutes from IGI Terminal 3.",
    "One premises, certified therapists, private rooms and couples suites, and a rate card that does not change at 3 AM or on a public holiday. Guests travel to us from South, Central and West Delhi, from Dwarka and Vasant Kunj, and from Gurugram and Noida.",
  ],
  heroStats: [
    { value: "10 min", label: "From IGI T3" },
    { value: "24/7", label: "365 Days a Year" },
    { value: "20+", label: "Treatments" },
    { value: "4.8★", label: "350+ Reviews" },
  ],

  intro: {
    label: "Why Delhi Books With Us",
    titleLead: "One Spa,",
    titleEm: "All of Delhi NCR",
    paras: [
      "Ask for a Russian spa in Delhi and you will be shown a dozen saunas with Russian names on the door. A banya is not a sauna: the heat is moist rather than dry, the venik treatment is an active technique performed on you rather than something you sit through, and the cold plunge and rest cycle are half the point. Getting that right is the reason people cross the city for it.",
      "We keep a single premises deliberately. One address means one set of therapists we have trained and vetted, one hygiene routine run between every guest, and no dilution across branches — which is what tends to happen to spa chains in Delhi by the third outlet. If you see our name on a shopfront somewhere else in the city, it is not us.",
      "Sitting in Mahipalpur, ten minutes from Terminal 3 and five from the Aerocity hotels, means the same premises works for a Saket resident on a Sunday afternoon and a transiting passenger at three in the morning. The doors do not close, the rate is identical at every hour, and there is no distance charge no matter which part of Delhi NCR you travel from.",
    ],
  },

  highlights: [
    {
      icon: "flame",
      title: "Delhi's Authentic Banya",
      desc: "Moist heat, birch venik, cold plunge, rest cycle — performed the Russian way, not a sauna in a new coat of paint.",
    },
    {
      icon: "clock",
      title: "Open 24 Hours, Always",
      desc: "365 days a year including public holidays, with no night surcharge and no holiday rate. 3 AM costs what 3 PM costs.",
    },
    {
      icon: "plane",
      title: "Ten Minutes From IGI",
      desc: "Practical for layovers, delayed flights and early departures — the express session fits comfortably inside an hour.",
    },
    {
      icon: "shield",
      title: "One Premises, One Standard",
      desc: "Certified therapists with five years' minimum experience and medical-grade disinfection between every single guest.",
    },
  ],

  treatments: [
    {
      icon: "flame",
      name: "Russian Banya with Venik",
      desc: "The treatment Delhi comes to us for. Steam, birch venik worked over the back and legs, cold plunge, then a proper rest cycle — the full ritual, run by therapists trained in the Russian method.",
      duration: "90 min",
      price: "₹3,500",
    },
    {
      icon: "waves",
      name: "Swedish Massage",
      desc: "The most-booked first visit in the city. Classic full-body relaxation at medium pressure in a private room, with robe, shower and herbal tea included in the rate.",
      duration: "60 min",
      price: "₹2,800",
    },
    {
      icon: "dumbbell",
      name: "Deep Tissue Massage",
      desc: "Firm targeted work for chronic tension and back pain — Delhi's commute and desk hours in physical form. Extended to 90 minutes at ₹4,400 when the whole posture needs work.",
      duration: "60 min",
      price: "₹3,400",
    },
    {
      icon: "couple",
      name: "Couples Spa Suite",
      desc: "Two therapists working in sync in a private suite with Banya access and an aromatherapy setup. Suites are limited, so weekend evenings are worth booking a day ahead.",
      duration: "120 min",
      price: "₹7,500",
    },
    {
      icon: "star",
      name: "Royal Signature Ritual",
      desc: "Scrub, ninety-minute massage, scalp and foot work, Banya access and refreshments. The one to book if you cross Delhi for this once a month rather than once a week.",
      duration: "150 min",
      price: "₹8,500",
    },
    {
      icon: "plane",
      name: "Airport Layover Express",
      desc: "Express massage, shower and refreshment inside an hour, ten minutes from Terminal 3. Built for overnight layovers and delayed flights, at any hour of the night.",
      duration: "45 min",
      price: "₹2,400",
    },
  ],

  nearby: [
    { name: "IGI Airport Terminal 3", distance: "10 min", note: "Our busiest overnight catchment" },
    { name: "Aerocity hotel district", distance: "5 min", note: "Complimentary pickup on 90-minute bookings" },
    { name: "Vasant Kunj", distance: "12 min", note: "Past the mall complex on Vasant Kunj Road" },
    { name: "Dwarka", distance: "15 min", note: "Straight down the Dwarka Link Road" },
    { name: "Hauz Khas", distance: "22 min", note: "Via the Outer Ring Road" },
    { name: "Saket", distance: "25 min", note: "Press Enclave Marg to the Outer Ring Road" },
    { name: "South Extension", distance: "26 min", note: "Ring Road; add ten minutes at evening peak" },
    { name: "Rajouri Garden", distance: "28 min", note: "Via the Ring Road and NH-8" },
    { name: "Connaught Place", distance: "30 min", note: "Guests usually book 120 minutes or more" },
  ],

  gettingHere: [
    {
      icon: "car",
      title: "Driving from anywhere in Delhi",
      desc: "Aim for NH-8 and the Mahipalpur exit, then into Defence Enclave before the hotel strip. From South Delhi use the Outer Ring Road; from West Delhi the Dwarka Link Road; from Central Delhi the Ring Road past Naraina. Free on-site parking with no time limit.",
    },
    {
      icon: "metro",
      title: "By metro",
      desc: "Airport Express to Aerocity is the simplest route from New Delhi station — a five-minute auto from that exit. From the south, the Magenta Line to IGI Terminal 1 leaves you an eight-minute auto away.",
    },
    {
      icon: "plane",
      title: "From IGI Airport",
      desc: "Ten to twelve minutes from Terminal 3, eight from Terminal 1. Prepaid taxis and app cabs both work at any hour — set the destination as Defence Enclave, Mahipalpur, not Mahipalpur Village.",
    },
  ],

  reviews: [
    {
      text: "I have tried most of the well-known spas in Delhi and this is the only place where the Banya is the real thing. The venik treatment is not something you will find anywhere else in the city.",
      author: "Rohit Malhotra",
      role: "Greater Kailash, Delhi",
    },
    {
      text: "Landed at T3 at 2 AM with a nine-hour connection. Ten minutes later I was on the table, and I slept through the rest of the layover. Nothing else in Delhi was open at that hour.",
      author: "Elena Petrova",
      role: "In transit, Moscow–Bangkok",
    },
    {
      text: "Booked the 150-minute signature ritual for my mother's birthday. Private, unhurried, and the therapist checked pressure throughout. Easily the best spa experience we have had in Delhi.",
      author: "Aditi Khanna",
      role: "Saket, South Delhi",
    },
  ],

  article: {
    label: "The Heat Treatments, Explained",
    titleLead: "Banya, Sauna, Steam Or Hammam —",
    titleEm: "What Delhi Actually Sells You",
    standfirst:
      "Four different traditions, four different rooms, and in Delhi all four names get used more or less interchangeably. They are not the same thing, and knowing the difference is the difference between booking what you wanted and booking what was available.",
    sections: [
      {
        heading: "Dry heat, wet heat, and where the banya sits",
        paras: [
          "A Finnish sauna is dry: 80 to 100°C at very low humidity, and you sit in it. A steam room is the opposite extreme — around 45°C at effectively 100% humidity, which feels hotter than it is. A Turkish hammam is a wet marble room at moderate heat where the point is the scrub and the soap massage performed on a heated slab, not the heat itself.",
          "A Russian banya sits between the sauna and the steam room: 70 to 90°C with steam added in bursts by pouring water over hot stones, so the humidity rises and falls through the session. That combination is what makes the venik treatment possible, and it is the one of the four that Delhi genuinely lacks — which is why a spa in Mahipalpur draws guests from [Karol Bagh](/spa-in-karol-bagh/) and Saket.",
        ],
      },
      {
        heading: "What the venik actually does",
        paras: [
          "The venik is a bundle of birch branches, softened in hot water, and it is not decorative. The therapist uses it to move the hot air at the ceiling down onto your skin and then works it rhythmically over the back and legs — part heat transfer, part percussion, part stretch. It is an active technique performed on you, which is what separates a banya session from sitting in a hot room until you have had enough.",
          "A full cycle is eight to twelve minutes of heat, the venik work, then a cold plunge, then fifteen minutes of rest with tea. Most guests do two cycles; ninety minutes covers it comfortably. The complete sequence is described step by step on the [Mahipalpur page](/spa-in-mahipalpur/).",
        ],
      },
      {
        heading: "Who should skip the heat entirely",
        paras: [
          "Heat treatments are not universally appropriate. If you are pregnant, have a heart condition, uncontrolled high or low blood pressure, epilepsy, or are unwell with a fever, ask your doctor before booking any banya, sauna or steam session — and tell us at reception either way, because we would rather move you to a massage than take the chance. The same applies after alcohol: heat and drinks are a genuinely bad combination, not a house rule invented to be difficult.",
          "None of that rules out the rest of the menu. Massage, reflexology and Ayurvedic work are separate questions with far fewer restrictions, and a good therapist will adapt pressure and position rather than refuse outright. The [full treatment list](/services/) sets out what each one involves.",
        ],
      },
      {
        heading: "Judging a Delhi spa's claims",
        paras: [
          "If a spa in Delhi advertises a Russian banya, three questions settle it quickly: is the room wood-lined with a stove and stones, is a venik treatment actually offered, and is there a cold plunge or at least a cold shower next to it? Two out of three usually means a sauna with a good copywriter. There is a longer vetting checklist — rooms, therapists, pricing, privacy — on the [Karol Bagh page](/spa-in-karol-bagh/).",
          "Price is the last check, not the first. A sixty-minute massage across reputable Delhi spas sits broadly between ₹2,500 and ₹4,000; ours is ₹2,800 for Swedish and ₹3,400 for deep tissue, taxes included, with no facility or night charge. Anything dramatically below that range is usually paying for it somewhere you would rather it did not — see the [price list](/pricing/) for the full card.",
        ],
      },
    ],
    takeaways: [
      "Sauna is dry heat, steam is wet and cooler, hammam is a scrub ritual — a banya is 70–90°C with bursts of steam.",
      "The venik is an active birch-branch technique, not decoration; a real banya offers it and has a cold plunge.",
      "Ask a doctor first if you are pregnant or have a heart, blood-pressure or seizure condition — and never after drinks.",
      "A 60-minute massage in Delhi reasonably runs ₹2,500–₹4,000 all-in; be wary well below that.",
    ],
  },

  faqs: [
    {
      q: "Which is the best spa in Delhi for an authentic Russian Banya?",
      a: "Russian Spa Centre in Mahipalpur is Delhi's dedicated Russian Banya spa — a wood-lined steam room with a genuine birch venik treatment performed by therapists trained in the Russian method, followed by a cold plunge and rest cycle. It is a different treatment from the dry saunas most Delhi spas describe as a banya, and it runs 24 hours a day.",
    },
    {
      q: "Where exactly in Delhi are you located?",
      a: "Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi 110037 — ten minutes from IGI Airport Terminal 3 and five from the Aerocity hotels. It is the only premises we operate; guests travel here from South, Central and West Delhi, Dwarka, Gurugram and Noida.",
    },
    {
      q: "Is there a 24 hour spa in Delhi?",
      a: "Yes. We are open 24 hours a day, 7 days a week, 365 days a year including public holidays, and there is no night or holiday surcharge. A 3 AM booking costs exactly what a 3 PM booking does, and walk-ins are accepted whenever a therapist is free.",
    },
    {
      q: "What does a full body massage in Delhi cost here?",
      a: "A 60-minute Swedish massage is ₹2,800 and 60-minute deep tissue is ₹3,400; the 90-minute extended versions run ₹3,800 and ₹4,400. The Russian Banya with venik is ₹3,500 for 90 minutes and the couples suite ₹7,500 for 120. Every rate includes a private room, robe, shower, fresh linens and herbal tea, with taxes already included.",
    },
    {
      q: "Do you offer couples spa packages in Delhi?",
      a: "Yes — private couples suites with two therapists working in sync, Banya access and an aromatherapy setup. The 120-minute suite at ₹7,500 is the most popular; the 150-minute Couples Banya Ritual is ₹9,500. Suites are limited, so book 24 hours ahead for a weekend evening.",
    },
    {
      q: "Which parts of Delhi NCR do you serve?",
      a: "All of it. Guests travel regularly from Aerocity, Vasant Kunj, Dwarka, Hauz Khas, Saket, Green Park, South Extension, Karol Bagh, Connaught Place, Rajouri Garden, Gurugram and Noida. Rates are identical regardless of where you travel from — there is no distance charge.",
    },
    {
      q: "Do you have branches elsewhere in Delhi?",
      a: "No. One premises, in Mahipalpur. Keeping a single location is how we hold therapist quality and hygiene standards consistent, and it is why our area pages describe drive times rather than addresses. Any other shopfront using our name is not us.",
    },
  ],


  geo: { lat: 28.6139, lng: 77.209 },

  seo: {
    title: "Best Spa & Body Massage in Delhi | Russian Spa Centre",
    description:
      "Authentic Russian Banya with venik, full body massage and private couples suites. One premises in Mahipalpur, ten minutes from IGI Airport, open 24/7.",
    ogTitle: "Best Spa in Delhi | Authentic Russian Banya, Open 24 Hours",
    ogDescription:
      "Delhi's genuine Russian Banya — venik treatment, cold plunge, private couples suites and certified therapists. One premises in Mahipalpur, ten minutes from IGI Airport.",
    ogImageAlt: "Best spa in Delhi — Russian Spa Centre, Mahipalpur",
  },
};
