import type { LocationContent } from "../lib/location";

/**
 * Saket's angle is the district-centre crowd: Select Citywalk, DLF Avenue, the
 * Saket court complex and the residential blocks behind them. The hook is that
 * everything wellness-shaped inside Saket shuts in the evening, and that guests
 * making a 25-minute drive want a longer session at the end of it.
 *
 * Nothing here is shared with the Aerocity, Vasant Kunj, Hauz Khas or Green Park
 * pages — area pages that read the same compete with each other rather than rank.
 */
export const SAKET: LocationContent = {
  path: "/spa-in-saket/",
  areaName: "Saket",
  breadcrumb: "Spa in Saket",

  heroImage: "/home_images/mahipalpurspa13.jpg",
  heroBadge: "Serving Saket & Malviya Nagar · Open 24 Hours",
  h1: { lead: "Best Spa & Body Massage near", em: "Saket" },
  heroText: [
    "Saket District Centre empties by eleven and the mall spas take their last booking well before that. We are twenty-five minutes west at Defence Enclave, Mahipalpur, and we do not close — not at midnight, not at four in the morning, not on a public holiday.",
    "Authentic Russian Banya with birch venik, deep tissue work by certified therapists, and private couples suites. Press Enclave Marg to the Outer Ring Road gets you here; free parking is waiting when you arrive.",
  ],
  heroStats: [
    { value: "13 km", label: "From Select Citywalk" },
    { value: "25 min", label: "Typical Drive" },
    { value: "24/7", label: "Including 3 AM" },
    { value: "4.8★", label: "350+ Reviews" },
  ],

  intro: {
    label: "Why Saket Guests Come To Us",
    titleLead: "The Spa Saket",
    titleEm: "Actually Drives To",
    paras: [
      "Saket is well served for almost everything except a proper spa at a usable hour. The salons around the district centre offer a massage as an add-on, the two hotel spas keep mall hours, and by the time most people in Sheikh Sarai or Pushp Vihar are free to book, everything nearby has closed.",
      "So Saket drives. Twenty-five minutes down Press Enclave Marg and the Outer Ring Road, and what waits at the end is not another treatment room above a shop — it is a wood-lined Russian Banya held between 70 and 90°C, a birch venik treatment, a cold plunge, private suites sized for two therapists, and a relaxation lounge nobody hurries you out of.",
      "The distance changes what people book. Guests who drive twenty-five minutes rarely want forty-five minutes on the table, so Saket bookings skew heavily towards the 120- and 150-minute rituals and the couples suites. We hold suite slots for South Delhi bookings made a day ahead for exactly that reason.",
    ],
  },

  highlights: [
    {
      icon: "moon",
      title: "Open After Saket Closes",
      desc: "A first-time walk-in at 2 AM is treated the same as one at 2 PM — same therapists, same rate card, no night surcharge.",
    },
    {
      icon: "flame",
      title: "A Real Banya, Not A Steam Cabin",
      desc: "Moist heat, birch venik worked over the back and legs, cold plunge, rest cycle. There is no equivalent in South Delhi.",
    },
    {
      icon: "couple",
      title: "Suites Held For South Delhi",
      desc: "Book a day ahead from Saket and we reserve a couples suite with two synchronised therapists and Banya access.",
    },
    {
      icon: "car",
      title: "Free Parking, No Limit",
      desc: "The one thing the Saket mall spas cannot promise you on a Saturday night. Park for the length of your treatment.",
    },
  ],

  treatments: [
    {
      icon: "flame",
      name: "Russian Banya with Venik",
      desc: "The treatment most Saket guests first come for. Steam, birch venik over the back and legs, cold plunge, then a proper rest cycle — the full ritual, not a shortened version.",
      duration: "90 min",
      price: "₹3,500",
    },
    {
      icon: "dumbbell",
      name: "Deep Tissue — Extended",
      desc: "Ninety minutes is the honest length for a back locked from desk work and Ring Road traffic. Full postural work, shoulders through lower back, at a pressure you confirm before we start.",
      duration: "90 min",
      price: "₹4,400",
    },
    {
      icon: "stone",
      name: "Hot Stone Therapy",
      desc: "Heated basalt worked into deep muscle. The one Saket guests book in winter when the drive over has left them stiff before the session even starts.",
      duration: "75 min",
      price: "₹3,600",
    },
    {
      icon: "couple",
      name: "Couples Spa Suite",
      desc: "Two therapists working in sync in a private suite with Banya access. Our most-booked treatment from Saket and Malviya Nagar, and the one worth reserving 24 hours ahead.",
      duration: "120 min",
      price: "₹7,500",
    },
    {
      icon: "star",
      name: "Royal Signature Ritual",
      desc: "Scrub, ninety-minute massage, scalp and foot work, Banya access and refreshments. If you are making the drive once a month, this is what to make it for.",
      duration: "150 min",
      price: "₹8,500",
    },
    {
      icon: "waves",
      name: "Banya + Swedish Massage",
      desc: "Heat ritual first, full-body massage after. The combination that sends most Saket guests home sleeping properly for the first time that week.",
      duration: "120 min",
      price: "₹5,500",
    },
  ],

  nearby: [
    { name: "Select Citywalk", distance: "25 min", note: "Press Enclave Marg, then the Outer Ring Road" },
    { name: "DLF Avenue Saket", distance: "25 min", note: "Same run — one turn out of the district centre" },
    { name: "Saket Metro Station", distance: "26 min", note: "Yellow Line; the metro route via Hauz Khas also works" },
    { name: "Saket District Centre", distance: "25 min", note: "Our busiest Saket window is after it shuts" },
    { name: "Max Hospital Saket", distance: "24 min", note: "Late bookings after shift changes are routine" },
    { name: "Sheikh Sarai", distance: "27 min", note: "Via Press Enclave Marg" },
    { name: "Pushp Vihar", distance: "26 min", note: "Slightly quicker after 9 PM" },
    { name: "Malviya Nagar", distance: "27 min", note: "Same catchment, same drive time" },
    { name: "Saket Court Complex", distance: "24 min", note: "Popular for end-of-day deep tissue bookings" },
  ],

  gettingHere: [
    {
      icon: "car",
      title: "Driving from Saket",
      desc: "Press Enclave Marg west to the Outer Ring Road, past Munirka onto Rao Tula Ram Marg and NH-8, then off at Mahipalpur into Defence Enclave before the hotel strip. After 9 PM the Mehrauli–Gurgaon Road route through Andheria Mor and Vasant Kunj is usually quicker.",
    },
    {
      icon: "metro",
      title: "By metro from Saket",
      desc: "Yellow Line from Saket or Malviya Nagar to Hauz Khas, change to the Magenta Line and ride to IGI Airport Terminal 1 — we are an eight-minute auto from that exit. Around 45 minutes door to door, and it beats the Ring Road at 6 PM.",
    },
    {
      icon: "plane",
      title: "By cab or app taxi",
      desc: "Set the destination as Defence Enclave, Mahipalpur — not Mahipalpur Village, which drops you on the wrong side of NH-8. Call us as you turn off the highway and we will talk your driver to the gate.",
    },
  ],

  reviews: [
    {
      text: "I had looked for a decent spa in Saket for years and settled for salon massages instead. This is twenty-five minutes away and it is a completely different category — the Banya alone justifies the drive. Now a monthly thing.",
      author: "Vandana Sethi",
      role: "Resident, Saket",
    },
    {
      text: "Finished at the Saket court complex past nine, called on the way, and a therapist was ready when I reached. Ninety minutes of deep tissue and no surcharge for the hour. Nothing near Saket was still open.",
      author: "Rajeev Nanda",
      role: "Advocate, Saket",
    },
    {
      text: "Booked the couples suite for our anniversary rather than the usual Select Citywalk dinner. Private room, two therapists, and better value than the hotel spas we had tried in South Delhi.",
      author: "Amit & Shreya Kohli",
      role: "Malviya Nagar",
    },
  ],

  /**
   * Saket's article subject: matching session length to travel time, and what a
   * genuinely late booking involves. Deliberately not "the Banya explained" —
   * that belongs on a page whose guests come for the Banya first.
   */
  article: {
    label: "Booking From Saket",
    titleLead: "How Long A Session To Book",
    titleEm: "When You're Driving Twenty-Five Minutes",
    standfirst:
      "A spa twenty-five minutes away is a different decision from one on your street. Fifty minutes of driving either side of a sixty-minute massage is a poor trade, and the guests who enjoy the trip most are the ones who book for the drive rather than in spite of it.",
    sections: [
      {
        heading: "The sixty-minute trap",
        paras: [
          "A 60-minute massage is the default booking almost everywhere, and for a walk-in from two streets away it is the right one. From Saket it usually is not. Press Enclave Marg and the Outer Ring Road will take twenty-five minutes each way off-peak and thirty-five in the evening, so a sixty-minute session means more time in the car than on the table — and you arrive with the drive still in your shoulders, which is the worst possible starting condition for firm work.",
          "The honest advice is to spend the same money differently. A 90-minute [deep tissue session](/services/) at ₹4,400 gives the therapist time to settle you, work the upper back properly, and finish without rushing. A 120-minute [Banya and massage combination](/pricing/) at ₹5,500 adds a heat cycle at the front, which does in fifteen minutes what the first twenty of a massage otherwise spend doing.",
        ],
      },
      {
        heading: "What a 1 AM booking actually looks like",
        paras: [
          "Guests from Saket and Malviya Nagar ask this more than any other question, usually because a 24-hour spa sounds like a skeleton operation after midnight. It is not. The night shift runs the same therapist roster, the same hospital-grade disinfection between guests, and the same rate card — no night surcharge exists, so a 1 AM Abhyanga costs exactly what a 1 PM one does.",
          "What does change is the traffic. The Mehrauli–Gurgaon Road route through Andheria Mor and Vasant Kunj, which is a poor idea at 6 PM, becomes the fastest way here after nine and will get you from Saket to Defence Enclave in about twenty minutes. Reception is staffed continuously, parking is free and empty at that hour, and the drive home afterwards is the easiest part of the evening.",
          "Practical note if you are coming late: call as you set off rather than when you arrive. We hold therapists against a departure time, not an arrival time, which means a delay on the Ring Road costs you nothing.",
        ],
      },
      {
        heading: "Why the couples suites book out first",
        paras: [
          "Saket is our most consistent source of couples bookings, and the reason is the same arithmetic. Two people already committing an hour of travel want the 120-minute [Couples Spa Suite](/pricing/) at ₹7,500 — a private room sized for two tables, two therapists working in sync, and Banya access — rather than two separate sixty-minute slots that finish at different times.",
          "Suites are limited and South Delhi wants the same Friday and Saturday evening windows, so a day's notice is the difference between a suite and two ordinary rooms. If your dates are flexible, a weekday evening gets you the same suite with a quieter lounge afterwards. Full travel times from every catchment we serve are on the [locations page](/locations/).",
        ],
      },
    ],
    takeaways: [
      "From Saket, book 90 minutes or longer — a 60-minute slot puts more time in the car than on the table.",
      "Press Enclave Marg and the Ring Road off-peak; Mehrauli–Gurgaon Road through Vasant Kunj after 9 PM.",
      "No night surcharge and no distance charge: a 1 AM session costs what a 1 PM session costs.",
      "Couples suites are the most-booked treatment from Saket — reserve 24 hours ahead for weekend evenings.",
      "Call when you leave, not when you arrive; therapists are held against your departure time.",
    ],
  },

  faqs: [
    {
      q: "Where is the nearest spa to Saket that is open 24 hours?",
      a: "Russian Spa Centre at Office No. 118, Defence Enclave, Mahipalpur — about 13 km and 25 to 30 minutes from Saket off-peak, open every hour of every day including holidays. The spas inside Saket District Centre and the Select Citywalk complex close in the evening, so for a late-night or early-morning massage we are the closest option South Delhi has.",
    },
    {
      q: "How long does it take to reach you from Saket?",
      a: "Twenty-five to thirty minutes by road off-peak via Press Enclave Marg and the Outer Ring Road. Between 8–10 AM and 5–8 PM add ten to fifteen minutes. After 9 PM the Mehrauli–Gurgaon Road route through Vasant Kunj usually gets you here in about twenty.",
    },
    {
      q: "Do you have a branch inside Saket?",
      a: "No, and we would rather say so plainly. We run a single premises in Mahipalpur — one address, one set of therapists, one hygiene standard. Saket is a catchment area we serve from it, not a second outlet. Anything advertising a Saket branch of ours is not us.",
    },
    {
      q: "Is there a travel or late-night charge for guests coming from Saket?",
      a: "None. Rates are identical regardless of where you travel from and identical at every hour of the day or night. A 60-minute Swedish massage is ₹2,800 whether you book it at noon or at 3 AM.",
    },
    {
      q: "Can I get there by metro from Saket?",
      a: "Yes. Take the Yellow Line from Saket or Malviya Nagar to Hauz Khas, change to the Magenta Line and ride to IGI Airport Terminal 1, then take an eight-minute auto to Defence Enclave. Around 45 minutes in total, and reliable during evening peak when the Ring Road is not.",
    },
    {
      q: "Can two of us book a couples massage on the same evening we call?",
      a: "Often yes, but the suites are limited and Saket guests tend to want the same weekend evening slots. Give us 24 hours' notice for a suite and we will confirm two synchronised therapists and Banya access with it.",
    },
    {
      q: "Is parking a problem if I drive from Saket?",
      a: "No. Free on-site parking with no time limit for the duration of your treatment, day or night — which is more than the Saket mall basements can offer on a weekend evening.",
    },
  ],


  geo: { lat: 28.5245, lng: 77.2066 },

  seo: {
    title: "Spa & Body Massage near Saket | Russian Spa Centre",
    description:
      "Twenty-five minutes from Select Citywalk via Press Enclave Marg. Long-format spa rituals, body massage and an authentic Russian Banya, open 24/7.",
    ogTitle: "Spa in Saket | Russian Banya & Massage, 25 Minutes Away",
    ogDescription:
      "Saket's spas shut with the district centre. We don't. Authentic Russian Banya, deep tissue and couples suites, 25 minutes down Press Enclave Marg, open all night.",
    ogImageAlt: "Russian Spa Centre — the 24 hour spa serving Saket, South Delhi",
  },
};
