import type { LocationContent } from "../lib/location";

/**
 * Hauz Khas is the therapeutic page, not the pampering one. The guests are the
 * Village's late finishers, the IIT and Deer Park running crowd, and the
 * desk-bound backs of Gulmohar Park and SDA — so the copy leads with deep
 * tissue, Thai stretching and recovery work rather than rituals.
 *
 * Written independently of the Saket, Green Park, Aerocity and Vasant Kunj pages.
 */
export const HAUZ_KHAS: LocationContent = {
  path: "/spa-in-hauz-khas/",
  areaName: "Hauz Khas",
  breadcrumb: "Spa in Hauz Khas",

  heroImage: "/Rawimages/russianspacenterimage14.webp",
  heroBadge: "22 Minutes Down The Outer Ring Road",
  h1: { lead: "Best Spa & Body Massage near", em: "Hauz Khas" },
  heroText: [
    "A clean run west along the Outer Ring Road from Hauz Khas Village — past IIT and Munirka, twenty-two minutes off-peak — brings you to Defence Enclave, Mahipalpur. Three signals once you are on the Ring Road, and no NH-8 crawl.",
    "This is the therapeutic end of what we do: deep tissue and Thai work for laptop-locked shoulders, sports recovery for the Deer Park circuit, and an authentic Russian Banya. Open every hour, including long after the Village has emptied out.",
  ],
  heroStats: [
    { value: "11 km", label: "From The Village" },
    { value: "22 min", label: "Typical Drive" },
    { value: "24/7", label: "Never Closed" },
    { value: "5 yrs+", label: "Therapist Minimum" },
  ],

  intro: {
    label: "Why Hauz Khas Guests Come To Us",
    titleLead: "Therapeutic First,",
    titleEm: "Luxury Second",
    paras: [
      "Most of what we treat for Hauz Khas, Gulmohar Park and SDA guests is the same story told slightly differently: an upper back locked from a laptop, a stiff neck, one shoulder sitting visibly higher than the other. It is not a problem a scented sixty-minute relaxation massage solves. Deep tissue combined with Thai stretching, over ninety minutes, is what actually shifts it.",
      "So every session starts with two minutes of questions — where it hurts, what you do all day, what you have already tried. That conversation is the difference between an hour that feels pleasant and a neck that turns properly the next morning. If you want firm pressure, say so and we will assign a therapist who works deep; nobody here mistakes discomfort for effectiveness, and nobody here treats a chronic back as if it were a spa day.",
      "The second half of our Hauz Khas booking log is recovery work: runners off the Deer Park loop and the IIT circuit booking sports massage with trigger point release and assisted stretching. Best taken the evening after a long run rather than the morning before one — and since we never close, the evening after is always available.",
    ],
  },

  highlights: [
    {
      icon: "metro",
      title: "The Easiest Metro Run In Delhi",
      desc: "Hauz Khas is a Yellow and Magenta interchange — Magenta Line straight to IGI T1, then an eight-minute auto to us.",
    },
    {
      icon: "activity",
      title: "Recovery For Deer Park Regulars",
      desc: "Trigger point release and assisted stretching for runners off the Deer Park loop and the IIT circuit.",
    },
    {
      icon: "clock",
      title: "Late Is Normal Here",
      desc: "The Village keeps late hours and so do we. A midnight session after dinner is an ordinary booking, and the drive back takes fifteen minutes.",
    },
    {
      icon: "shield",
      title: "Therapists Who Work Deep",
      desc: "Internationally certified, insured, five years minimum on the table before they work on a guest of ours.",
    },
  ],

  treatments: [
    {
      icon: "dumbbell",
      name: "Deep Tissue Massage",
      desc: "The single most booked treatment from Hauz Khas. Firm, targeted pressure through the upper back, shoulders and neck — the exact pattern a laptop produces.",
      duration: "60 min",
      price: "₹3,400",
    },
    {
      icon: "hand",
      name: "Thai Massage",
      desc: "Oil-free acupressure with assisted stretching. Booked by guests whose hips and shoulders are as tight as their backs, and the best partner to a deep tissue session.",
      duration: "75 min",
      price: "₹3,200",
    },
    {
      icon: "activity",
      name: "Sports & Recovery Massage",
      desc: "Deep tissue, trigger point release and stretching for the Deer Park and IIT running crowd. Take it the evening after a long run, not the morning before one.",
      duration: "90 min",
      price: "₹3,600",
    },
    {
      icon: "waves",
      name: "Banya + Swedish Massage",
      desc: "Heat ritual then full-body massage. What we recommend to Hauz Khas guests on their first visit, when they are not yet sure whether they came for therapy or for the Banya.",
      duration: "120 min",
      price: "₹5,500",
    },
    {
      icon: "hand",
      name: "Head, Neck & Shoulder Express",
      desc: "Thirty focused minutes for screen fatigue and tension headaches. Popular as a weekday drop-in from the Village and Aurobindo Market before a late dinner.",
      duration: "30 min",
      price: "₹1,400",
    },
    {
      icon: "dumbbell",
      name: "Deep Tissue — Extended",
      desc: "Ninety minutes is the honest minimum for a genuinely locked upper back. Sixty will make it feel better; this is the one that changes something.",
      duration: "90 min",
      price: "₹4,400",
    },
  ],

  nearby: [
    { name: "Hauz Khas Village", distance: "22 min", note: "Outer Ring Road west past IIT and Munirka" },
    { name: "Deer Park", distance: "22 min", note: "Our sports recovery bookings mostly start here" },
    { name: "IIT Delhi", distance: "21 min", note: "Straight down the Ring Road, three signals" },
    { name: "Hauz Khas Metro", distance: "23 min", note: "Or take the Magenta Line to IGI T1 instead" },
    { name: "SDA Market", distance: "22 min", note: "Frequent weekday evening drop-ins" },
    { name: "Aurobindo Market", distance: "23 min", note: "Autos run it on the meter in about 25 min" },
    { name: "Gulmohar Park", distance: "24 min", note: "Deep tissue is the standing booking here" },
    { name: "Safdarjung Enclave", distance: "20 min", note: "Slightly shorter run via Munirka" },
    { name: "Sarvapriya Vihar", distance: "24 min", note: "Via the Outer Ring Road" },
  ],

  gettingHere: [
    {
      icon: "car",
      title: "Driving from Hauz Khas",
      desc: "Straight down the Outer Ring Road past IIT Delhi and Munirka, then Rao Tula Ram Marg onto NH-8 and off at Mahipalpur into Defence Enclave. Twenty-two minutes off-peak — one of the cleaner runs in South Delhi. Free parking at the door with no time limit.",
    },
    {
      icon: "metro",
      title: "By metro from Hauz Khas",
      desc: "This is the easiest metro journey to us in the city. Hauz Khas is a Yellow and Magenta Line interchange, so take the Magenta Line directly to IGI Airport Terminal 1 and then an eight-minute auto to Defence Enclave. Unaffected by Ring Road traffic.",
    },
    {
      icon: "car",
      title: "By auto or app cab",
      desc: "Autos from the Village or Aurobindo Market will run it on the meter in about twenty-five minutes. In a cab, set the destination as Defence Enclave, Mahipalpur, and phone us when you leave the Ring Road so we can guide the driver in.",
    },
  ],

  reviews: [
    {
      text: "I sit at a laptop eleven hours a day and had tried four places around Hauz Khas. This is the first therapist who asked what I actually do before touching my back, and the first session that lasted more than two days.",
      author: "Ishaan Bhandari",
      role: "Gulmohar Park",
    },
    {
      text: "I run the Deer Park loop most mornings. Booked sports recovery expecting a nice massage and got proper trigger point work on my calves and IT band instead. Twenty minutes down the Ring Road, worth every one.",
      author: "Neha Sridhar",
      role: "Runner, Hauz Khas",
    },
    {
      text: "Left the Village around half past midnight and they took me straight in. Fifteen-minute drive at that hour, ninety minutes of deep tissue, same price as the afternoon. Nothing else was open anywhere near us.",
      author: "Tarun Iyer",
      role: "SDA Market",
    },
  ],

  /**
   * Hauz Khas takes the treatment-choice article: deep tissue versus Thai for a
   * desk-bound back. It is the question this catchment actually asks, and it is
   * a subject no other area page covers.
   */
  article: {
    label: "Choosing A Treatment",
    titleLead: "Deep Tissue Or Thai?",
    titleEm: "Choosing For A Desk-Bound Back",
    standfirst:
      "Nine out of ten Hauz Khas bookings start with the same complaint — upper back locked, neck stiff, one shoulder higher than the other — and end with the same question at reception. Here is how we would answer it if you asked us on the phone.",
    sections: [
      {
        heading: "What eleven hours at a laptop actually does",
        paras: [
          "The pattern is consistent enough to be predictable. The chest and front of the shoulders shorten, the upper back and rhomboids lengthen and then lock trying to hold you upright, the neck extensors take the load of a head held forward, and the hip flexors shorten from sitting. Nothing here is torn or damaged; it is a set of muscles stuck in positions they were never meant to hold for a decade.",
          "That matters for treatment choice, because two of those four problems are tightness that wants pressure and two are shortness that wants length. A treatment that only does one of the two leaves half the pattern in place — which is why the relief from a single generic massage tends to last about two days.",
        ],
      },
      {
        heading: "Deep tissue for what is tight, Thai for what is short",
        paras: [
          "[Deep tissue](/services/) is firm, targeted, oil-based work: the therapist stays on one area long enough to change it, usually the upper back, rhomboids and the band across the top of the shoulders. Sixty minutes at ₹3,400 covers the upper back adequately. Ninety at ₹4,400 covers upper back, shoulders, neck and lower back without hurrying any of them, and ninety is the honest minimum if the problem is years old rather than weeks.",
          "[Thai massage](/services/) is oil-free acupressure with assisted stretching — the therapist moves your limbs through ranges you would not reach unaided. It is the better answer for shortened hip flexors, tight hamstrings and a chest that has closed up, and it is what to book if you sit all day and also cannot comfortably reach behind your back.",
          "If both descriptions fit you, and for most people at a laptop they do, the sequence we recommend is a 90-minute deep tissue session first, then Thai on the following visit once the acute tightness has released. Doing it in that order is more comfortable and more effective than the reverse.",
        ],
      },
      {
        heading: "Recovery work is a different question",
        paras: [
          "Runners off the Deer Park loop and the IIT circuit are not booking for a desk problem, and the treatment is not the same one. [Sports and recovery massage](/pricing/) at ₹3,600 for ninety minutes combines deep tissue with trigger point release and assisted stretching, aimed at calves, IT bands, glutes and hip flexors rather than the upper back.",
          "Timing matters more here than technique. Book it the evening after a hard session or a long run, not the morning before one — deep work leaves muscle temporarily less responsive, and a race or a hard interval set within twenty-four hours of a firm massage usually feels worse, not better. Because we are open through the night, the evening after is always bookable, whatever time you finish.",
        ],
      },
    ],
    takeaways: [
      "Deep tissue for what is tight; Thai for what is short. Most laptop backs are both.",
      "Ninety minutes is the honest minimum for chronic upper-back tension — sixty relieves, ninety changes.",
      "Deep tissue first, Thai on the following visit, not the other way round.",
      "Runners: sports recovery the evening after a hard session, never the morning before one.",
      "Say 'chronic tension' when you book and we assign a therapist who works deep.",
    ],
  },

  faqs: [
    {
      q: "Which spa near Hauz Khas is open late at night?",
      a: "Russian Spa Centre in Mahipalpur, about 11 km west along the Outer Ring Road, is open 24 hours a day, 365 days a year. The spas in and around Hauz Khas Village take their last booking in the evening, so for a midnight or pre-dawn massage we are the practical choice — and the drive at that hour is around fifteen minutes.",
    },
    {
      q: "How far is Russian Spa Centre from Hauz Khas?",
      a: "About 11 km, or 22 to 28 minutes by road off-peak, straight down the Outer Ring Road past IIT Delhi and Munirka, then NH-8 to the Mahipalpur exit. Allow an extra ten to fifteen minutes during the 8–10 AM and 5–8 PM peaks.",
    },
    {
      q: "What is the best massage for back and neck pain from desk work?",
      a: "A 90-minute deep tissue session, or deep tissue combined with Thai stretching if your hips and shoulders are tight as well. Sixty minutes relieves the symptoms; ninety gives the therapist time to work the upper back, shoulders and neck properly in one visit. Tell us it is chronic tension when you book so we assign a therapist who works deep.",
    },
    {
      q: "Do you offer sports and recovery massage for runners?",
      a: "Yes — a 90-minute session at ₹3,600 with deep tissue, trigger point release and assisted stretching, which is what most of our Deer Park and IIT circuit guests book. It is best taken the evening after a long run rather than the morning before one.",
    },
    {
      q: "Is the metro from Hauz Khas practical?",
      a: "It is the easiest metro journey to us in Delhi. Hauz Khas is a Yellow and Magenta Line interchange, so take the Magenta Line directly to IGI Airport Terminal 1 and then an eight-minute auto to Defence Enclave, Mahipalpur.",
    },
    {
      q: "Do you have a branch in Hauz Khas itself?",
      a: "No. We operate one premises only — Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037 — and serve Hauz Khas from there. A single location is how we keep therapist quality and hygiene standards consistent rather than diluted across branches.",
    },
    {
      q: "Can I choose a male or female therapist?",
      a: "Yes, at any hour. State your preference when you book or on arrival and we will confirm it before the session begins.",
    },
    {
      q: "Do I need to book ahead, or can I walk in from Hauz Khas?",
      a: "Walk-ins are welcome around the clock and we can usually start within 15 to 20 minutes. Book a day ahead only if you want a specific therapist, a couples suite, or a weekend evening slot.",
    },
  ],


  geo: { lat: 28.5494, lng: 77.2001 },

  seo: {
    title: "Spa & Body Massage near Hauz Khas | Russian Spa Centre",
    description:
      "Twenty-two minutes down the Outer Ring Road. Deep tissue, Thai and sports recovery massage plus an authentic Russian Banya, open 24 hours.",
    ogTitle: "Spa in Hauz Khas | Deep Tissue, Thai & Banya, 22 Minutes Away",
    ogDescription:
      "Therapeutic deep tissue, Thai stretching and sports recovery, plus an authentic Russian Banya. 22 minutes from Hauz Khas Village, open 24 hours.",
    ogImageAlt: "Russian Spa Centre — the 24 hour spa serving Hauz Khas, South Delhi",
  },
};
