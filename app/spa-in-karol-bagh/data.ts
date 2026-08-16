import type { LocationContent } from "../lib/location";

/**
 * Karol Bagh's angle is the market: traders who shut at ten, the Ajmal Khan Road
 * and Gaffar Market crowd, and the hotel belt full of visiting families and
 * travellers heading for New Delhi Railway Station. The wellness options around
 * the market are rooms above shops, so the hook is privacy and scale, not speed.
 */
export const KAROL_BAGH: LocationContent = {
  path: "/spa-in-karol-bagh/",
  areaName: "Karol Bagh",
  breadcrumb: "Spa in Karol Bagh",

  heroImage: "/Rawimages/russianspacenterimage16.webp",
  heroBadge: "Serving Karol Bagh, Patel Nagar & Central Delhi · Open 24 Hours",
  h1: { lead: "Best Spa & Body Massage near", em: "Karol Bagh" },
  heroText: [
    "Karol Bagh has wellness options the way it has everything else: above a shop, behind a curtain, quick. We are twenty-five minutes west at Defence Enclave, Mahipalpur — a wood-lined Russian Banya, private suites, a relaxation lounge, and certified therapists with five years' minimum experience.",
    "The Ring Road gets you here in one clean run, and the doors do not close. Traders finishing on Ajmal Khan Road at ten, families staying in the Karol Bagh hotel belt, and travellers with a night train out of New Delhi station all book at hours nothing near the market is still open for.",
  ],
  heroStats: [
    { value: "18 km", label: "From Ajmal Khan Rd" },
    { value: "25 min", label: "Typical Drive" },
    { value: "24/7", label: "Including 3 AM" },
    { value: "4.8★", label: "350+ Reviews" },
  ],

  intro: {
    label: "Why Karol Bagh Guests Come To Us",
    titleLead: "The Privacy Karol Bagh",
    titleEm: "Cannot Offer You",
    paras: [
      "Karol Bagh is one of Delhi's busiest markets and its wellness options reflect that — small rooms above shops on Ajmal Khan Road, quick turnarounds near Gaffar Market, thin walls and a queue behind you. It works if all you want is thirty minutes on a neck. It does not work if you want an actual spa day.",
      "Twenty-five minutes down the Ring Road is a different proposition entirely: a Russian Banya held between 70 and 90°C with a birch venik treatment, a cold plunge, private couples suites sized for two therapists, lockers, robes, showers and a relaxation lounge nobody moves you out of. Guests who make that drive book long — the 120- and 150-minute rituals are the ones we hold most for central Delhi.",
      "The timing suits Karol Bagh too. Shops on Ajmal Khan Road shut around ten and the traders who run them are our most regular central-Delhi guests. Families staying in the hotel belt book mid-week between wedding-shopping days, and travellers heading for a night train out of New Delhi Railway Station use the express session to reset before boarding.",
    ],
  },

  highlights: [
    {
      icon: "lock",
      title: "Private Rooms, Real Walls",
      desc: "Every treatment is in a private room with a locker, robe and shower — not a partitioned corner above a shop.",
    },
    {
      icon: "moon",
      title: "Open When The Market Shuts",
      desc: "Traders closing on Ajmal Khan Road at ten still get a full 90-minute session at the standard rate.",
    },
    {
      icon: "flame",
      title: "A Banya Central Delhi Lacks",
      desc: "Moist heat, birch venik over back and legs, cold plunge, rest cycle — there is no equivalent near Karol Bagh.",
    },
    {
      icon: "hotel",
      title: "For The Hotel Belt",
      desc: "Visiting families staying around Karol Bagh book a genuine spa day mid-week between shopping trips.",
    },
  ],

  treatments: [
    {
      icon: "flame",
      name: "Russian Banya with Venik",
      desc: "The reason most Karol Bagh guests make the drive the first time. Steam, birch venik worked over the back and legs, cold plunge, then a proper rest cycle — the full ritual, not a shortened version.",
      duration: "90 min",
      price: "₹3,500",
    },
    {
      icon: "star",
      name: "Royal Signature Ritual",
      desc: "Scrub, ninety-minute massage, scalp and foot work, Banya access and refreshments. If you are coming from central Delhi once a month, this is what to come for.",
      duration: "150 min",
      price: "₹8,500",
    },
    {
      icon: "couple",
      name: "Couples Spa Suite",
      desc: "Two therapists working in sync in a private suite with Banya access. The most-booked treatment among visiting families staying in the Karol Bagh hotel belt.",
      duration: "120 min",
      price: "₹7,500",
    },
    {
      icon: "dumbbell",
      name: "Deep Tissue Massage",
      desc: "Firm targeted work for backs and shoulders that have spent a decade behind a counter. The standing booking for our Ajmal Khan Road regulars after closing time.",
      duration: "60 min",
      price: "₹3,400",
    },
    {
      icon: "waves",
      name: "Banya + Swedish Massage",
      desc: "Heat ritual first, full-body massage after. The combination that sends most central Delhi guests home sleeping properly for the first time that week.",
      duration: "120 min",
      price: "₹5,500",
    },
    {
      icon: "plane",
      name: "Airport Layover Express",
      desc: "Express massage, shower and refreshment inside an hour. Works as well before a night train from New Delhi Railway Station as it does before a flight — tell us your departure time and we fit the session to it.",
      duration: "45 min",
      price: "₹2,400",
    },
  ],

  nearby: [
    { name: "Ajmal Khan Road", distance: "25 min", note: "Ring Road west; our busiest Karol Bagh window is after 10 PM" },
    { name: "Gaffar Market", distance: "26 min", note: "Same run, one turn out of the market" },
    { name: "Karol Bagh Metro", distance: "25 min", note: "Blue Line; the metro route via New Delhi also works" },
    { name: "Rajendra Place", distance: "22 min", note: "Slightly quicker than the market itself" },
    { name: "Patel Nagar", distance: "20 min", note: "The shortest run of any Karol Bagh catchment" },
    { name: "Jhandewalan", distance: "28 min", note: "Via the Ring Road past Rajendra Place" },
    { name: "Paharganj hotel belt", distance: "30 min", note: "Popular with travellers before late departures" },
    { name: "New Delhi Railway Station", distance: "30 min", note: "Express sessions timed to your train" },
    { name: "Connaught Place", distance: "30 min", note: "Guests usually book 120 minutes or more" },
  ],

  gettingHere: [
    {
      icon: "car",
      title: "Driving from Karol Bagh",
      desc: "Ring Road south-west past Rajendra Place and Naraina, onto NH-8 and off at Mahipalpur into Defence Enclave before the hotel strip. Twenty-five minutes off-peak, around thirty-five between 5 and 8 PM.",
    },
    {
      icon: "metro",
      title: "By metro from Karol Bagh",
      desc: "Blue Line from Karol Bagh to Rajiv Chowk, change to the Airport Express at New Delhi and ride to Aerocity — a five-minute auto from that exit. About 45 minutes door to door, and reliable when the Ring Road is not.",
    },
    {
      icon: "plane",
      title: "By cab or app taxi",
      desc: "Set the destination as Defence Enclave, Mahipalpur — not Mahipalpur Village, which drops you on the wrong side of NH-8. A cab from Karol Bagh runs ₹350–₹450 off-peak. Call as you turn off the highway and we will guide your driver in.",
    },
  ],

  reviews: [
    {
      text: "I shut my shop on Ajmal Khan Road at ten and still made it for a full ninety-minute session. Everything near Karol Bagh had closed by then. Worth the drive every single time.",
      author: "Deepak Chawla",
      role: "Trader, Karol Bagh",
    },
    {
      text: "We stayed in the Karol Bagh hotel belt for a week of wedding shopping and booked the couples suite mid-week. The Banya was something neither of us had tried before and it reset us completely.",
      author: "Sunita Grover",
      role: "Visiting from Ludhiana",
    },
    {
      text: "Took a cab from near New Delhi Railway Station before an overnight train. Half an hour out, massage, shower, refreshments, and back in good time. Far better than waiting in the retiring room.",
      author: "Arun Verma",
      role: "Central Delhi",
    },
  ],

  article: {
    label: "Before You Book Anywhere",
    titleLead: "How To Tell A Spa",
    titleEm: "From A Room Above A Shop",
    standfirst:
      "Central Delhi has hundreds of places advertising a massage and a much smaller number running an actual spa. Four questions on the phone will separate them, and none of them is about price.",
    sections: [
      {
        heading: "Ask what the room is",
        paras: [
          "The first question is the most revealing: is the treatment room a room, with a door, or a partitioned space with a curtain? Anywhere that hesitates is telling you the answer. A proper room has a door that closes, a lock on the changing locker, a shower you can use afterwards, and linens changed between every guest rather than between every few. Ours are eleven rooms and two couples suites, set out in detail on the [Mahipalpur page](/spa-in-mahipalpur/).",
          "Ask what happens between guests, too. The honest answer is specific — linens and towels stripped and replaced, hard surfaces wiped with disinfectant, oils decanted into single-use portions rather than pumped from a shared bottle. A vague answer about cleaning 'regularly' usually means what it sounds like.",
        ],
      },
      {
        heading: "Ask about the therapist, not the treatment",
        paras: [
          "Menus are easy to copy; therapists are not. Ask how long the person working on you has been doing it, whether they are certified and insured, and whether you can request a male or female therapist and have it confirmed before you travel. Our minimum is five years on the table before a therapist sees a guest of ours, and a stated preference is confirmed when you book, not negotiated at reception.",
          "It is also fair to ask what they will do about your specific problem. A therapist worth the money asks where it hurts, what you do all day and how firm you want it before touching you — two minutes of questions that decide whether the hour achieves anything. If nobody asks, nobody is treating anything.",
        ],
      },
      {
        heading: "Ask what the price actually includes",
        paras: [
          "The quoted rate should be the rate you pay. Ask directly whether taxes are included, whether there is a facility, towel or locker charge, whether the price changes after a certain hour, and whether tipping is expected. Ours are inclusive: no facility fee, no night surcharge, no holiday rate, no distance charge, and the published [price list](/pricing/) is the whole story.",
          "Be sceptical of any spa that will not put a number to a treatment on the phone. It is a small thing, but a business that is straightforward about ₹2,800 for a sixty-minute Swedish is usually straightforward about the rest. The [full treatment menu](/services/) and what each session includes are worth reading before you call anyone, ours included.",
        ],
      },
      {
        heading: "Ask what happens to your details",
        paras: [
          "Privacy after the appointment matters as much as privacy during it. Ask whether your number goes onto a marketing list, whether anything is sent by SMS or WhatsApp afterwards, and who else is in the treatment wing while you are in it. We do not send marketing messages, and there is no walk-through of the treatment corridor.",
          "None of this is about us being the only acceptable answer — it is a checklist that works on any spa in Delhi, and it is the same one we would use ourselves. If you want the background on how we run the place, the [about page](/about/) covers it, and the [city-wide guide](/spa-in-delhi/) explains the heat treatments in detail.",
        ],
      },
    ],
    takeaways: [
      "A door, a locker, a shower and fresh linens per guest — not a curtain and a turnaround.",
      "Ask the therapist's experience and whether a male or female preference is confirmed in advance.",
      "Get the all-in price on the phone: taxes, facility fees, night rates, tipping.",
      "Ask what happens to your number afterwards; a spa that markets at you was never discreet.",
    ],
  },

  faqs: [
    {
      q: "Where is the nearest full spa to Karol Bagh?",
      a: "Russian Spa Centre at Office No. 118, Defence Enclave, Mahipalpur — about 18 km and twenty-five minutes from Ajmal Khan Road via the Ring Road. It is a full spa rather than a treatment room above a shop: authentic Russian Banya, private couples suites, lockers, showers and a relaxation lounge, open 24 hours.",
    },
    {
      q: "How long does it take to get there from Karol Bagh?",
      a: "Roughly twenty-five minutes off-peak via the Ring Road from Ajmal Khan Road or Karol Bagh Metro, and about thirty-five in evening traffic. From Patel Nagar it is nearer twenty minutes, from Rajendra Place twenty-two, and from Connaught Place about thirty.",
    },
    {
      q: "Do you have a branch in Karol Bagh itself?",
      a: "No. We run one premises only — Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037 — and serve Karol Bagh and central Delhi guests from there. A single location is how we keep hygiene and therapist quality consistent. Anything advertising a Karol Bagh branch of ours is not us.",
    },
    {
      q: "Can I come late, after the Karol Bagh market closes?",
      a: "Yes. We are open 24 hours a day, 365 days a year, with no late-night surcharge. Guests who close shops on Ajmal Khan Road around 10 PM regularly book full 90-minute sessions afterwards at the standard rate.",
    },
    {
      q: "Is this practical before a train from New Delhi Railway Station?",
      a: "Yes — it is about a 30-minute cab ride, and the 45-minute express session at ₹2,400 includes a massage, a shower and refreshments. Tell us your departure time when booking and we will fit the session around it.",
    },
    {
      q: "Do you offer couples packages for visiting families?",
      a: "Yes. The Couples Spa Suite is ₹7,500 for 120 minutes with two synchronised therapists in a private room and Banya access. Suites are limited, so book a day ahead if you want a weekend evening.",
    },
    {
      q: "Is parking available if I drive from Karol Bagh?",
      a: "Yes — free on-site parking with no time limit for the duration of your treatment, day or night. Given what parking near the Karol Bagh market is like, it tends to be the first thing guests mention.",
    },
  ],


  geo: { lat: 28.6519, lng: 77.1909 },

  seo: {
    title: "Spa & Body Massage near Karol Bagh | Russian Spa Centre",
    description:
      "A licensed spa with private rooms, 25 minutes from Karol Bagh via the Ring Road. Body massage, Russian Banya and couples suites, open 24 hours.",
    ogTitle: "Spa near Karol Bagh | Russian Banya & Massage, 25 Minutes Away",
    ogDescription:
      "A real spa rather than a room above a shop — Russian Banya, private couples suites and certified therapists, 25 minutes down the Ring Road, open all night.",
    ogImageAlt: "Russian Spa Centre — the 24 hour spa serving Karol Bagh, central Delhi",
  },
};
