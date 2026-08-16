import type { LocationContent } from "../lib/location";

/**
 * Vasant Kunj is a residential catchment, not a transit one. The copy is built
 * around repeat local guests — families, working couples, older residents —
 * which is a genuinely different proposition from the Aerocity page's
 * traveller framing, and is written from scratch rather than adapted.
 */
export const VASANT_KUNJ: LocationContent = {
  path: "/spa-in-vasant-kunj/",
  areaName: "Vasant Kunj",
  breadcrumb: "Spa in Vasant Kunj",

  heroImage: "/home_images/mahipalpurspa6.jpg",
  heroBadge: "Twelve Minutes From The Vasant Kunj Malls",
  h1: { lead: "Best Spa & Body Massage for", em: "Vasant Kunj" },
  heroText: [
    "Most of our Vasant Kunj guests are not visiting once. They are on a membership, they have a therapist they ask for by name, and they book the same Thursday evening slot for months at a time. That changes what a spa needs to be good at.",
    "We are twelve to fifteen minutes down Vasant Kunj Road, past the mall complex, at Defence Enclave in Mahipalpur. Close enough for a weeknight session after work, far enough that you leave the neighbourhood behind for an hour.",
  ],
  heroStats: [
    { value: "12–15 min", label: "From The Malls" },
    { value: "₹11,900", label: "5-Session Membership" },
    { value: "10%", label: "Senior Citizen Discount" },
    { value: "24/7", label: "Including Sundays" },
  ],

  intro: {
    label: "Why Vasant Kunj Books With Us",
    titleLead: "A Local Spa Habit,",
    titleEm: "Not A One-Off Treat",
    paras: [
      "A regular guest is a harder guest to keep than a tourist. You cannot coast on novelty — by the fourth visit they know exactly how good your pressure is, whether the room was properly turned over, and whether the therapist remembered what their lower back was doing last month. That is the standard we are held to here, and it is the reason our Vasant Kunj retention runs above ninety percent.",
      "Practically, it means we keep notes. Your preferred pressure, the oils you react badly to, the shoulder that flares up in winter, whether you want conversation or silence — it is all on file, so your fourth session starts where your third finished rather than from a blank consultation.",
      "It also means we price for frequency rather than for occasion. The five-session membership at ₹11,900 works out around fifteen percent below single-visit rates, stays valid six months, and is transferable to anyone in your household — which is how most Vasant Kunj families actually use it.",
    ],
  },

  highlights: [
    {
      icon: "users",
      title: "Your Notes Stay On File",
      desc: "Pressure, oils, problem areas, therapist preference. Your next session starts where the last one ended.",
    },
    {
      icon: "wallet",
      title: "Membership Built For Regulars",
      desc: "Five sessions for ₹11,900, valid six months, shareable across your household.",
    },
    {
      icon: "couple",
      title: "Weekend Couples Suites",
      desc: "Private rooms for two with synchronised therapists. Our Saturday evening slots go first — book ahead.",
    },
    {
      icon: "shield",
      title: "Senior & Family Rates",
      desc: "A standing 10% off for senior citizens on any day, at any hour, on production of ID.",
    },
  ],

  treatments: [
    {
      icon: "leaf",
      name: "Ayurvedic Abhyanga",
      desc: "Warm herbal oil in long rhythmic strokes, finished with scalp and marma work. Comfortably our most requested treatment among Vasant Kunj regulars, particularly through winter.",
      duration: "90 min",
      price: "₹3,800",
    },
    {
      icon: "couple",
      name: "Couples Spa Suite",
      desc: "A private suite for two with two therapists working in time. The Saturday and Sunday evening slots book out days ahead, so give us notice.",
      duration: "120 min",
      price: "₹7,500",
    },
    {
      icon: "dumbbell",
      name: "Desk-Posture Deep Tissue",
      desc: "For the neck, upper back and shoulder pattern that a laptop and a commute produce. The standard weeknight booking after a working day.",
      duration: "60 min",
      price: "₹3,400",
    },
    {
      icon: "baby",
      name: "Prenatal & Postnatal Massage",
      desc: "Side-lying with bolster support, from the second trimester, with therapists certified in pregnancy work. Popular with the residential blocks.",
      duration: "60 min",
      price: "₹3,000",
    },
    {
      icon: "stone",
      name: "Hot Stone Therapy",
      desc: "Heated basalt at 55°C, which reaches stiff muscle faster than hands alone. Bookings climb sharply between November and February.",
      duration: "75 min",
      price: "₹3,600",
    },
    {
      icon: "waves",
      name: "Sunday Slow Swedish",
      desc: "An unhurried full-body session at gentle to medium pressure. No agenda, no upsell — the treatment guests book when the week has simply been long.",
      duration: "90 min",
      price: "₹3,800",
    },
  ],

  nearby: [
    { name: "DLF Promenade & Emporio", distance: "12 min", note: "Straight down Vasant Kunj Road" },
    { name: "Ambience Mall Vasant Kunj", distance: "12 min", note: "Same route, one signal further" },
    { name: "Vasant Kunj A, B & C Blocks", distance: "13–15 min", note: "The bulk of our regular local guests" },
    { name: "Vasant Kunj D Block", distance: "15 min", note: "Slightly longer via the Nelson Mandela Marg side" },
    { name: "Vasant Vihar", distance: "15–18 min", note: "Via Nelson Mandela Marg" },
    { name: "Kishangarh", distance: "12 min", note: "Short run through the Mahipalpur side" },
    { name: "Masoodpur", distance: "10–12 min", note: "One of the quickest approaches to us" },
    { name: "Vasant Kunj Metro (Magenta Line)", distance: "14 min", note: "Then a short auto to Defence Enclave" },
    { name: "Fortis Flt. Lt. Rajan Dhall Hospital", distance: "13 min", note: "Common landmark for directions" },
  ],

  gettingHere: [
    {
      icon: "car",
      title: "By car",
      desc: "Vasant Kunj Road to Mahipalpur, past the mall complex, then into Defence Enclave before the hotel strip. Twelve to fifteen minutes off-peak, closer to twenty-five between 6 and 8 PM on weekdays. Parking is free and uncapped while you are in treatment.",
    },
    {
      icon: "metro",
      title: "By metro",
      desc: "Vasant Kunj on the Magenta Line, then a ten-minute auto. Honestly, for this particular journey a cab is usually faster and not much dearer once you have paid for both legs.",
    },
    {
      icon: "clock",
      title: "Timing your run",
      desc: "The Vasant Kunj Road stretch is genuinely bad between 6 and 8 PM on weekdays. Regulars tend to book either 8 PM onwards or a weekend morning, and we hold slots in both windows for members.",
    },
  ],

  reviews: [
    {
      text: "Fourth year of the membership now. What keeps me is that I never have to re-explain my back — they pull up the notes and simply get on with it.",
      author: "Anuradha Menon",
      role: "C Block, Vasant Kunj",
    },
    {
      text: "My husband and I do the couples suite every anniversary and a few Saturdays in between. Booking ahead genuinely matters, we learned that the hard way one weekend.",
      author: "Priyanka Sethi",
      role: "Vasant Kunj Resident",
    },
    {
      text: "I took my mother for the Abhyanga expecting to have to explain the senior discount. They applied it without being asked and were patient with her the whole session.",
      author: "Rohit Bhandari",
      role: "Vasant Vihar",
    },
  ],

  article: {
    label: "A Family Guide",
    titleLead: "Booking For A Household,",
    titleEm: "Not Just For Yourself",
    standfirst:
      "Vasant Kunj books as families more than any other catchment we serve — a parent on a membership, a spouse on the couples suite, a grandparent who wants warmth rather than pressure. Very little of that is one-size-fits-all.",
    sections: [
      {
        heading: "Pressure is a preference, not a measure of quality",
        paras: [
          "The most common mistake a household makes is assuming the treatment that works for one member will work for all of them. Firm deep tissue suits a forty-year-old with a laptop-locked upper back and is entirely wrong for a seventy-year-old who wants circulation and warmth. Neither is the better massage; they are different treatments with different goals, and a therapist who applies one to the other is not being thorough, they are being careless.",
          "So we ask, every time, and we write the answer down. If you say medium and mean it, you will get medium — nobody here treats discomfort as proof that something is working. If a session was too firm or too light, tell reception rather than enduring it; the note goes on file and the next visit starts from the corrected setting.",
        ],
      },
      {
        heading: "What changes across the ages in one family",
        paras: [
          "For older guests, warmth and rhythm matter more than depth — [Ayurvedic Abhyanga](/services/) and reflexology are the two we most often suggest, and there is a standing 10% senior discount on any day and at any hour on production of ID. For students and younger guests home on a break, an hour of Swedish or a head, neck and shoulder session is usually enough. For expectant guests, prenatal massage is side-lying with bolster support and performed only by therapists trained for it — and if you are in the first trimester or have any complication, ask your doctor before booking rather than us.",
          "Couples suites are the one booking where two people genuinely get the same thing at the same time — a private room, two therapists working in sync, Banya access. It is also the one that runs out first: Saturday evenings from Vasant Kunj go days ahead, and a weekday evening buys you the same suite and a quieter lounge afterwards.",
        ],
      },
      {
        heading: "Making the membership work across a household",
        paras: [
          "The five-session [Wellness Membership](/pricing/) at ₹11,900 is priced for frequency rather than occasion — roughly fifteen percent under single-visit rates, valid six months, free steam and sauna access on every visit. The part most families miss is that the sessions are transferable: one household can spread five sessions across three people, which is usually how it is actually spent.",
          "If your visits are already fortnightly, the maths is straightforward. If they are not, be honest about the six-month window before buying — an unused session is a worse deal than paying per visit. Guests slightly closer in, in [Green Park](/spa-in-green-park/), tend to settle into a fortnightly cadence for exactly this reason; from Vasant Kunj, monthly is the more realistic rhythm.",
        ],
      },
    ],
    takeaways: [
      "State your pressure preference plainly — it is recorded, and the next visit starts from it.",
      "Abhyanga and reflexology for older guests, with a standing 10% senior discount on any day.",
      "Prenatal work is side-lying and therapist-specific; check with your doctor first, particularly in the first trimester.",
      "Membership sessions are transferable across a household — five sessions, six months, roughly 15% off.",
    ],
  },

  faqs: [
    {
      q: "How far is your spa from Vasant Kunj?",
      a: "Twelve to fifteen minutes by road off-peak, down Vasant Kunj Road past the mall complex to Defence Enclave in Mahipalpur. Allow twenty to twenty-five minutes on weekday evenings between 6 and 8 PM, when that stretch backs up.",
    },
    {
      q: "Do you have a spa branch inside Vasant Kunj?",
      a: "No. We operate a single premises at Office No. 118, Defence Enclave, Mahipalpur, and serve Vasant Kunj, Vasant Vihar, Kishangarh and Masoodpur from there. One location is how we keep the same therapists and the same standards for everyone rather than diluting across sites.",
    },
    {
      q: "Is the membership worth it if I only come once a month?",
      a: "Yes — five sessions at ₹11,900 stays valid for six months, which covers monthly visits with room to spare, and works out roughly fifteen percent below single-visit pricing. It is also transferable within your household, so unused sessions do not go to waste.",
    },
    {
      q: "Can I request the same therapist every time?",
      a: "Yes, and most of our Vasant Kunj regulars do. Name them when you book and we will confirm their availability. If they are off that day we will tell you honestly rather than substituting silently.",
    },
    {
      q: "Do you offer a senior citizen discount?",
      a: "A standing 10% off any treatment, any day, at any hour, on production of valid ID. It does not need to be arranged in advance and it is not restricted to off-peak slots.",
    },
    {
      q: "What are the best times to book from Vasant Kunj?",
      a: "Weekend mornings and weeknights from 8 PM onwards are the smoothest runs and the easiest slots to get. Saturday and Sunday evenings are our busiest period for couples suites, so those want a day or two of notice.",
    },
    {
      q: "Is massage safe during pregnancy?",
      a: "From the second trimester onward, yes, with our certified prenatal therapists. We use side-lying positioning with bolster support and avoid the pressure points contraindicated in pregnancy. Please mention you are pregnant when booking so we assign the right therapist.",
    },
  ],


  geo: { lat: 28.52, lng: 77.159 },

  seo: {
    title: "Spa & Body Massage for Vasant Kunj | Russian Spa Centre",
    description:
      "Twelve to fifteen minutes from the Vasant Kunj malls. Ayurvedic Abhyanga, couples suites, prenatal massage and five-session membership pricing.",
    ogTitle: "Spa in Vasant Kunj | For People Who Come Back",
    ogDescription:
      "12 minutes from the Vasant Kunj malls. Ayurvedic Abhyanga, weekend couples suites, prenatal massage, 5-session membership and a standing senior discount.",
    ogImageAlt: "Russian Spa Centre — spa serving Vasant Kunj and Vasant Vihar, New Delhi",
  },
};
