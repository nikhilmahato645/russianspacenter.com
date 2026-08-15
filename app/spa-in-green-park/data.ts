import type { LocationContent } from "../lib/location";

/**
 * Green Park is the closest South Delhi neighbourhood to the premises, so this
 * page is built around frequency rather than occasion: Ayurvedic and
 * aromatherapy work, the membership, early-morning slots, and the AIIMS /
 * Safdarjung shift crowd.
 *
 * Written independently of the Saket, Hauz Khas, Aerocity and Vasant Kunj pages.
 */
export const GREEN_PARK: LocationContent = {
  path: "/spa-in-green-park/",
  areaName: "Green Park",
  breadcrumb: "Spa in Green Park",

  heroImage: "/home_images/mahipalpurspa6.jpg",
  heroBadge: "The Shortest South Delhi Run To Us · 20 Minutes",
  h1: { lead: "Spa in", em: "Green Park", tail: "— Ayurvedic, Aromatherapy & Banya" },
  heroText: [
    "Down Aurobindo Marg, onto the Outer Ring Road, and you are here in twenty minutes — the shortest drive to our door of any South Delhi neighbourhood, and usually the fastest after 8 PM.",
    "Russian Spa Centre pairs an authentic Russian Banya with Ayurvedic Abhyanga, aromatherapy blended after a consultation, and reflexology. Private rooms, certified therapists, and doors that never close — including at 6 AM.",
  ],
  heroStats: [
    { value: "10 km", label: "From Green Park Market" },
    { value: "20 min", label: "Typical Drive" },
    { value: "24/7", label: "Including 6 AM" },
    { value: "20+", label: "Treatments" },
  ],

  intro: {
    label: "Why Green Park Guests Come To Us",
    titleLead: "A Twenty-Minute Habit,",
    titleEm: "Not An Occasion",
    paras: [
      "Being the closest South Delhi neighbourhood to us changes what a visit is for. Green Park guests are rarely marking an anniversary — they are keeping a fortnightly Abhyanga, or coming in on a bad-sleep week for aromatherapy and a foot ritual, or booking at seven in the morning because that is the only hour the day leaves free.",
      "The treatments they book reflect that. Warm herbal oil worked in traditional rhythmic strokes, essential oil blends chosen after a short consultation rather than off a laminated list, reflexology, foot soaks — restorative work at a pressure you set, in a lounge nobody hurries you out of. Firm deep tissue is available too, but it is not what this catchment asks for.",
      "It is also why the Wellness Membership is the plan most Green Park regulars settle into: five 60-minute massages for ₹11,900, valid six months, roughly 15% below single-visit rates, free steam and sauna access on every visit, and sessions you can hand to a family member if a week gets away from you.",
    ],
  },

  highlights: [
    {
      icon: "leaf",
      title: "Slow, Warm, Restorative",
      desc: "Ayurvedic Abhyanga, aromatherapy blended after a consultation, reflexology and foot rituals — restorative rather than forceful.",
    },
    {
      icon: "wallet",
      title: "Close Enough For A Habit",
      desc: "Twenty minutes each way makes this fortnightly, not annual. The five-session membership works out roughly 15% cheaper.",
    },
    {
      icon: "clock",
      title: "Open At 6 AM, And At 3 AM",
      desc: "An early Abhyanga before work, or a session after a late hospital shift at AIIMS or Safdarjung, is an ordinary booking here.",
    },
    {
      icon: "lock",
      title: "Private Rooms, Quiet Exit",
      desc: "Fully enclosed rooms with doors, no walk-through of the treatment wing, and no marketing messages afterwards.",
    },
  ],

  treatments: [
    {
      icon: "leaf",
      name: "Ayurvedic Abhyanga",
      desc: "Warm herbal oil in traditional rhythmic strokes — the single most booked treatment among our Green Park and Yusuf Sarai guests, and the one that pairs best with a short Banya cycle afterwards.",
      duration: "90 min",
      price: "₹3,800",
    },
    {
      icon: "flower",
      name: "Aromatherapy Massage",
      desc: "A blend chosen after a short consultation rather than off a fixed list. What Green Park books on a bad-sleep week, usually with a foot ritual attached.",
      duration: "60 min",
      price: "₹3,000",
    },
    {
      icon: "waves",
      name: "Swedish Massage — Extended",
      desc: "Classic full-body relaxation with extra time on back and legs. The standing fortnightly booking for most of our membership guests from this catchment.",
      duration: "90 min",
      price: "₹3,800",
    },
    {
      icon: "feet",
      name: "Reflexology",
      desc: "Pressure point therapy for feet and hands. Booked heavily by guests who spend their day standing — the hospital shifts around AIIMS and Safdarjung especially.",
      duration: "60 min",
      price: "₹2,200",
    },
    {
      icon: "flame",
      name: "Russian Banya with Venik",
      desc: "Steam held at 70–90°C, birch venik, cold plunge and a rest cycle. There is nothing comparable in South Delhi, and it is twenty minutes from Green Park Market.",
      duration: "90 min",
      price: "₹3,500",
    },
    {
      icon: "feet",
      name: "Foot Ritual & Soak",
      desc: "Herbal soak, exfoliation and a reflexology finish. Thirty minutes, and the add-on Green Park guests attach to almost everything else on this list.",
      duration: "30 min",
      price: "₹1,200",
    },
  ],

  nearby: [
    { name: "Green Park Market", distance: "20 min", note: "Aurobindo Marg to the Outer Ring Road" },
    { name: "Green Park Metro", distance: "21 min", note: "Yellow Line; one stop from Hauz Khas" },
    { name: "Green Park Extension", distance: "20 min", note: "Same run, one turn earlier" },
    { name: "AIIMS", distance: "23 min", note: "Late bookings after shift changes are routine" },
    { name: "Safdarjung Hospital", distance: "23 min", note: "Reflexology is the standing booking here" },
    { name: "Yusuf Sarai", distance: "22 min", note: "Autos run it on the meter in about 25 min" },
    { name: "SDA Market", distance: "22 min", note: "Via the Outer Ring Road past Munirka" },
    { name: "Gautam Nagar", distance: "23 min", note: "Slightly quicker after 8 PM" },
    { name: "Deer Park", distance: "21 min", note: "Shared catchment with Hauz Khas" },
  ],

  gettingHere: [
    {
      icon: "car",
      title: "Driving from Green Park",
      desc: "Aurobindo Marg south to the Outer Ring Road, west past Munirka onto Rao Tula Ram Marg, then NH-8 and off at Mahipalpur into Defence Enclave. Twenty minutes off-peak — the shortest drive to us from anywhere in South Delhi. Free on-site parking, no time limit.",
    },
    {
      icon: "metro",
      title: "By metro from Green Park",
      desc: "One stop on the Yellow Line to Hauz Khas, change to the Magenta Line and ride to IGI Airport Terminal 1, then an eight-minute auto to Defence Enclave. About forty minutes door to door and unaffected by Ring Road traffic.",
    },
    {
      icon: "car",
      title: "By auto from Green Park Market",
      desc: "Autos from Green Park Market or Yusuf Sarai will run it in about twenty-five minutes on the meter. Ask for Defence Enclave, Mahipalpur — not Mahipalpur Village, which is on the opposite side of NH-8.",
    },
  ],

  reviews: [
    {
      text: "Twenty minutes from Green Park Market means I actually go, rather than talking about going. I took the five-session membership and the Abhyanga has become a fortnightly fixture.",
      author: "Meera Raghavan",
      role: "Green Park",
    },
    {
      text: "I finish night shifts at AIIMS and needed somewhere open at six in the morning that was not a hotel. Reflexology and a foot soak before going home to sleep — they had no problem with the hour at all.",
      author: "Dr. Kavita Menon",
      role: "AIIMS, New Delhi",
    },
    {
      text: "The aromatherapy oils were actually chosen after asking how I had been sleeping, which no other place has done. Quiet room, unhurried, and the tea afterwards was not a formality.",
      author: "Suresh Pillai",
      role: "Yusuf Sarai",
    },
  ],

  /**
   * Green Park takes frequency as its subject — how often massage is worth
   * booking, and what Abhyanga is — because proximity is this catchment's
   * defining fact. No other area page argues about cadence.
   */
  article: {
    label: "How Often To Book",
    titleLead: "Ayurvedic Abhyanga, And",
    titleEm: "Why Fortnightly Beats Occasional",
    standfirst:
      "Most people book a massage when something already hurts, which is the most expensive way to use one. Green Park is close enough to us — twenty minutes down Aurobindo Marg — to do the opposite, and the difference over six months is not subtle.",
    sections: [
      {
        heading: "What Abhyanga is, and what it is not",
        paras: [
          "[Ayurvedic Abhyanga](/services/) is a ninety-minute full-body massage in warm herbal oil, worked in long rhythmic strokes that follow the direction of the limbs rather than digging across the muscle. At ₹3,800 it is the most booked treatment among our Green Park and Yusuf Sarai guests, and the one most often misunderstood before a first visit.",
          "It is not deep tissue with nicer oil. The pressure is medium and continuous, the oil is warmed and used generously, and the point is the nervous system as much as the muscle — most guests are close to asleep by the halfway mark. If you arrive with a specific locked shoulder wanting firm pressure, say so and we will book you [deep tissue](/pricing/) instead; Abhyanga is the wrong tool for an acute problem and the right one for a body that is simply running hot and short of sleep.",
        ],
      },
      {
        heading: "The case for a cadence",
        paras: [
          "Booking once, when the tension has already built to the point of being distracting, means the first half of every session is spent undoing three months of accumulation. Booking every two weeks means each session starts from a better baseline than the last, and the work compounds rather than resetting.",
          "Twenty minutes each way is what makes that realistic from Green Park. It is a decision about an evening, not an expedition — which is why the [Wellness Membership](/pricing/) at ₹11,900 for five 60-minute massages, valid six months, is the plan most guests from this catchment settle into. It works out roughly 15% below single-visit rates, includes free steam and sauna access on every visit, and sessions transfer to a family member if a fortnight gets away from you.",
        ],
      },
      {
        heading: "Morning slots, and the shift-work question",
        paras: [
          "We never close, and the quietest hours in the building are between 6 and 9 in the morning. An Abhyanga at seven, then work, is a genuinely different day — and Monday to Thursday between 8 AM and 12 PM there is 10% off all 60-minute massages, which stacks with nothing but needs no code either.",
          "The AIIMS and Safdarjung shift crowd uses the same window from the other direction, coming off a night shift rather than into a working day. [Reflexology](/services/) at ₹2,200 and the ₹1,200 foot ritual are the standing bookings there, for the straightforward reason that twelve hours on your feet is a foot problem before it is a back problem. Neither requires a booking; walk in and we can usually start within twenty minutes.",
        ],
      },
    ],
    takeaways: [
      "Abhyanga is warm-oil, medium-pressure, nervous-system work — not deep tissue with better oil.",
      "Book acute problems as deep tissue; book maintenance as Abhyanga or Swedish.",
      "Fortnightly compounds; occasional resets. Twenty minutes each way is what makes fortnightly realistic.",
      "The membership is ₹11,900 for five sessions, roughly 15% off, and transferable to family.",
      "6–9 AM is the quietest window, and weekday mornings carry 10% off 60-minute massages.",
    ],
  },

  faqs: [
    {
      q: "Which is the nearest good spa to Green Park?",
      a: "Russian Spa Centre at Defence Enclave, Mahipalpur — about 10 km and 20 to 25 minutes from Green Park Market via Aurobindo Marg and the Outer Ring Road. It is the shortest run to us from any South Delhi neighbourhood, and we are open 24 hours a day, every day of the year.",
    },
    {
      q: "Do you offer Ayurvedic massage near Green Park?",
      a: "Yes — Ayurvedic Abhyanga, a 90-minute warm herbal oil massage in traditional rhythmic strokes, at ₹3,800. It is the single most booked treatment among our Green Park and Yusuf Sarai guests, and it pairs well with a short Banya cycle afterwards.",
    },
    {
      q: "How do I get to you by metro from Green Park?",
      a: "One stop on the Yellow Line to Hauz Khas, change to the Magenta Line and ride to IGI Airport Terminal 1, then an eight-minute auto to Defence Enclave. About forty minutes door to door, and unaffected by Ring Road traffic.",
    },
    {
      q: "Is there a membership worth taking if I live in Green Park?",
      a: "At twenty minutes away, yes. The Wellness Membership is ₹11,900 for five 60-minute massages, valid six months — roughly 15% below single-visit rates — and includes free steam and sauna access each visit plus priority booking on weekend evenings. Sessions are transferable to family members.",
    },
    {
      q: "Can I book an early morning session before work?",
      a: "Yes. We never close, so 6 and 7 AM sessions are normal bookings rather than exceptions. Monday to Thursday between 8 AM and 12 PM there is also 10% off all 60-minute massages.",
    },
    {
      q: "Do you have a branch in Green Park itself?",
      a: "No. We run one premises, in Mahipalpur, and serve Green Park from it — which is how the therapists, the hygiene standard and the rate card stay identical for everyone. Anything advertising a Green Park branch of ours is not us.",
    },
    {
      q: "Is massage safe during pregnancy?",
      a: "From the second trimester onward, yes, with our certified prenatal therapists — side-lying positioning with bolster support and no contraindicated pressure points. Please mention that you are pregnant when booking so we assign the right therapist.",
    },
    {
      q: "Is there a night or distance charge from Green Park?",
      a: "No. Rates are identical at every hour and from every area — no night surcharge, no distance charge, and no facility or towel fees added at the counter.",
    },
  ],

  keywords: [
    "spa in Green Park",
    "best spa in Green Park",
    "body massage Green Park",
    "Ayurvedic massage Green Park",
    "aromatherapy massage South Delhi",
    "massage centre near Green Park",
    "spa near Green Park Metro",
    "spa near AIIMS Delhi",
    "reflexology South Delhi",
    "Russian spa near Green Park",
    "24 hour spa near Green Park",
    "spa near Yusuf Sarai",
    "morning spa Delhi",
    "spa membership South Delhi",
  ],

  geo: { lat: 28.5588, lng: 77.2065 },

  seo: {
    title: "Spa in Green Park | Ayurvedic, Aromatherapy & Russian Banya | Open 24/7",
    description:
      "Spa for Green Park — 20 minutes via Aurobindo Marg, the shortest South Delhi run to us. Ayurvedic Abhyanga, aromatherapy, reflexology and an authentic Russian Banya. Open 24 hours, 6 AM slots available. Call +91 9999999999",
    keywords:
      "spa in Green Park, best spa in Green Park, body massage Green Park, Ayurvedic massage Green Park, Abhyanga massage Delhi, aromatherapy massage Green Park, reflexology South Delhi, massage centre Green Park, spa near Green Park Metro, spa near Green Park Market, spa near AIIMS, spa near Safdarjung Hospital, spa near Yusuf Sarai, Russian spa near Green Park, 24 hour spa South Delhi, full body massage Green Park, spa membership South Delhi, Russian Banya Delhi, spa for men Green Park, ladies spa Green Park, morning spa Delhi, prenatal massage South Delhi",
    ogTitle: "Spa in Green Park | Ayurvedic, Aromatherapy & Banya, 20 Minutes Away",
    ogDescription:
      "Ayurvedic Abhyanga, aromatherapy and reflexology plus an authentic Russian Banya — 20 minutes from Green Park Market, open 24 hours including 6 AM.",
    ogImageAlt: "Russian Spa Centre — the 24 hour spa serving Green Park, South Delhi",
  },
};
