import type { LocationContent } from "../lib/location";

/**
 * Mahipalpur is the only page in this set that describes the premises rather
 * than a catchment — the spa is here. So the copy is written from the inside
 * out: what the rooms are, what the Banya cycle actually involves, how the
 * hygiene routine runs, what happens on a first visit. Every other area page
 * describes a route; this one describes a building.
 */
export const MAHIPALPUR: LocationContent = {
  path: "/spa-in-mahipalpur/",
  areaName: "Mahipalpur",
  breadcrumb: "Spa in Mahipalpur",

  heroImage: "/home_images/mahipalpurspa14.jpg",
  heroBadge: "Our Premises · Defence Enclave, Open 24 Hours",
  h1: { lead: "Best Body Massage &", em: "Spa in Mahipalpur" },
  heroText: [
    "Full body massage, deep tissue, Thai, aromatherapy and the Russian Banya — all at Office No. 118, Defence Enclave, adjoining Aerocity. Not a catchment area and not a franchise: the spa itself, with every therapist we employ under one roof.",
    "Ten minutes from IGI Terminal 3, two from Mahipalpur Metro, and open every hour of every day of the year. Free parking on site, and a therapist available whenever you walk in.",
  ],
  heroStats: [
    { value: "110037", label: "Defence Enclave" },
    { value: "10 min", label: "From IGI T3" },
    { value: "24/7", label: "365 Days" },
    { value: "4.8★", label: "350+ Reviews" },
  ],

  intro: {
    label: "The Premises",
    titleLead: "Where Your Body Massage",
    titleEm: "Actually Happens",
    paras: [
      "Mahipalpur is where the spa physically is: Office No. 118, Defence Enclave, on the Aerocity side of NH-8 and two minutes from Mahipalpur Metro. Every treatment we advertise anywhere on this site happens in this building — there is no second branch, no partner outlet and no franchise using our name.",
      "A full body massage here runs 60, 75 or 90 minutes depending on the technique, always in a private room with a door. Swedish for general relaxation, deep tissue for a specific chronic complaint, Thai if you would rather be stretched than oiled, aromatherapy if sleep or stress is the reason you came. Your therapist recommends during the consultation rather than selling from a menu.",
      "Inside are eleven private treatment rooms with doors rather than curtains, two couples suites sized for two therapists working at once, the Banya wing with its steam room and cold plunge, changing rooms with lockers and showers, and a relaxation lounge where nobody moves you along when your hour is up.",
      "The neighbourhood earns its reputation honestly. Mahipalpur sits at the point where the airport, the Aerocity hotel strip and South-West Delhi meet, which is why a spa here can be equally useful to a transiting passenger at 3 AM, a hotel guest at 11 PM and a Defence Enclave resident on a Sunday afternoon. Being open around the clock is what makes that work.",
    ],
  },

  highlights: [
    {
      icon: "clock",
      title: "Never Closed, Not Once",
      desc: "24 hours, 365 days, including Diwali and New Year. The rate card does not change by the hour or the date.",
    },
    {
      icon: "flame",
      title: "The Banya Wing",
      desc: "Wood-lined steam room held between 70 and 90°C, birch venik treatment, cold plunge and a proper rest cycle.",
    },
    {
      icon: "lock",
      title: "Eleven Private Rooms",
      desc: "Doors, not curtains. Lockers, robes, slippers and showers included in every rate, with no facility charge.",
    },
    {
      icon: "car",
      title: "Free Parking On Site",
      desc: "No time limit for the length of your treatment, and no hunting along the NH-8 service road for a slot.",
    },
  ],

  treatments: [
    {
      icon: "flame",
      name: "Russian Banya with Venik",
      desc: "The treatment the spa was built around, and the one nobody in Delhi does the way we do. Steam, birch venik worked over the back and legs, cold plunge, rest cycle — the complete ritual, run by therapists trained in the method.",
      duration: "90 min",
      price: "₹3,500",
    },
    {
      icon: "waves",
      name: "Swedish Massage",
      desc: "The most common first booking here. Classic full-body relaxation at medium pressure in a private room, with robe, shower, fresh linens and herbal tea included in the price.",
      duration: "60 min",
      price: "₹2,800",
    },
    {
      icon: "dumbbell",
      name: "Deep Tissue — Extended",
      desc: "Ninety minutes of full postural work, shoulders through lower back, at a pressure confirmed with you before we start. Our single most repeated booking across every catchment.",
      duration: "90 min",
      price: "₹4,400",
    },
    {
      icon: "couple",
      name: "Couples Spa Suite",
      desc: "Both suites are here in the building — private rooms sized for two therapists working in sync, with Banya access and an aromatherapy setup. Limited, so weekend evenings go first.",
      duration: "120 min",
      price: "₹7,500",
    },
    {
      icon: "star",
      name: "Royal Signature Ritual",
      desc: "Scrub, ninety-minute massage, scalp and foot work, Banya access and refreshments. Two and a half hours, which is what the relaxation lounge exists for.",
      duration: "150 min",
      price: "₹8,500",
    },
    {
      icon: "plane",
      name: "Airport Layover Express",
      desc: "Express massage, shower and refreshment inside an hour, ten minutes from Terminal 3. The reason a spa in Mahipalpur stays busy between midnight and dawn.",
      duration: "45 min",
      price: "₹2,400",
    },
  ],

  nearby: [
    { name: "Mahipalpur Metro", distance: "2 min", note: "Walkable — one minute by auto from the station exit" },
    { name: "Defence Enclave", distance: "0 min", note: "We are inside it, at Office No. 118" },
    { name: "IGI Airport Terminal 3", distance: "10 min", note: "Eight minutes from Terminal 1" },
    { name: "Aerocity hotel strip", distance: "5 min", note: "Across NH-8; pickup on 90-minute bookings" },
    { name: "NH-8 hotel strip", distance: "3 min", note: "The Mahipalpur budget-hotel row on the service road" },
    { name: "Rangpuri", distance: "6 min", note: "Straight up the service road" },
    { name: "Vasant Kunj", distance: "12 min", note: "Past the mall complex on Vasant Kunj Road" },
    { name: "Dwarka Sector 10", distance: "15 min", note: "Via the Dwarka Link Road" },
    { name: "Rajokri", distance: "8 min", note: "Just down NH-8 towards Gurugram" },
  ],

  gettingHere: [
    {
      icon: "car",
      title: "Driving in",
      desc: "Take the Mahipalpur exit off NH-8 and turn into Defence Enclave before the hotel strip — we are at Office No. 118. Free on-site parking with no time limit. Set your map to Defence Enclave, Mahipalpur, not Mahipalpur Village, which is on the wrong side of the highway.",
    },
    {
      icon: "metro",
      title: "By metro",
      desc: "Mahipalpur is two to three minutes away on foot, or a one-minute auto from the station exit. From central Delhi, the Airport Express to Aerocity is the other easy route — five minutes by auto from that exit.",
    },
    {
      icon: "plane",
      title: "Straight from the airport",
      desc: "Ten to twelve minutes from Terminal 3 and eight from Terminal 1, at any hour. Prepaid taxis and app cabs both run through the night. Message us your landing time and we will have a therapist ready rather than making you wait.",
    },
  ],

  reviews: [
    {
      text: "Best spa in Mahipalpur, and I have tried most of them on this stretch. The Banya is genuinely authentic — clean, professional, and the therapists know what they are doing rather than just going through the motions.",
      author: "Vikram Singh",
      role: "Resident, Mahipalpur",
    },
    {
      text: "Booked a deep tissue massage during a layover at 1 AM. Ten minutes from T3, in a room within fifteen minutes of arriving, and back at the airport with time to spare. Exactly what I needed after a long flight.",
      author: "James Mitchell",
      role: "Business traveller",
    },
    {
      text: "We came for the couples suite on our anniversary. Private room, two therapists working in sync, and the Banya afterwards was something neither of us had experienced before. Worth every rupee.",
      author: "Rahul Kapoor",
      role: "South Delhi",
    },
  ],

  article: {
    label: "A Guide To Your First Visit",
    titleLead: "What Actually Happens",
    titleEm: "Inside The Spa",
    standfirst:
      "Most people booking a body massage in Mahipalpur for the first time have no clear picture of what the next two hours hold — particularly if the Banya is involved. Here is the whole thing, room by room, in the order you will meet it.",
    sections: [
      {
        heading: "Choosing the right body massage for what is actually wrong",
        paras: [
          "The phrase \"full body massage\" covers four quite different treatments, and picking the wrong one is the most common reason a session disappoints. Swedish is long, flowing, medium-pressure work over the whole body — the right choice if you are tired, stressed or simply overdue, and the correct first booking for most people. Deep tissue is slower and much firmer, worked layer by layer into one or two problem areas rather than spread evenly; book it for a locked shoulder or a lower back that has hurt for months, not for general tiredness.",
          "Thai massage uses no oil at all. You stay clothed while the therapist moves you through assisted stretches and presses along the body's energy lines, and you leave feeling lengthened and alert rather than drowsy — good before a flight, less good if you wanted to fall asleep. Aromatherapy is a gentler full-body treatment built around an essential-oil blend chosen after a short conversation about sleep, stress or muscle tension. If you genuinely cannot decide, say what your week has been like and let the therapist choose; that is what the consultation is for.",
        ],
      },
      {
        heading: "Arrival, consultation and the two minutes that matter",
        paras: [
          "You arrive at Office No. 118 and are shown to the changing room with a locker, a robe and slippers. Before anything else, a therapist spends two minutes asking where it hurts, what you do all day, how firm you want the pressure, and whether there is anything medical we should know — pregnancy, recent surgery, blood pressure, skin conditions. It is a short conversation and it is the difference between an hour that feels nice and an hour that fixes something.",
          "If you are on a deadline — a flight, a train, a meeting — say so at this point rather than at the end. We build the session backwards from your hard stop, which is why the [45-minute express option](/pricing/) exists at all. Guests arriving from the [Aerocity hotels](/spa-in-aerocity/) usually have exactly this constraint.",
        ],
      },
      {
        heading: "The Banya cycle, explained properly",
        paras: [
          "The Banya is a wood-lined steam room held between 70 and 90°C — moist heat, not the dry heat of a sauna. You sit for eight to twelve minutes, until you are properly warm rather than merely uncomfortable, and then the venik treatment begins: bundled birch branches, softened in hot water, worked rhythmically over your back and legs. It is an active technique performed on you, not something you sit through.",
          "Then the cold plunge, which is the part everyone dreads and nobody regrets, followed by fifteen minutes of rest in the lounge with tea. That is one cycle. Most guests do two, some do three. The whole thing takes ninety minutes and it is the single treatment that brings people to Mahipalpur from as far as [Karol Bagh](/spa-in-karol-bagh/) and [Saket](/spa-in-saket/), because there is no equivalent anywhere else in the city.",
        ],
      },
      {
        heading: "The hygiene routine, in detail",
        paras: [
          "Between every guest, the room is stripped and reset: fresh linens, fresh towels, fresh robe, and every hard surface wiped with hospital-grade disinfectant. Oils are decanted into single-use portions rather than pumped from a shared bottle. The Banya benches are washed down between cycles and the plunge water is filtered and treated continuously.",
          "Therapists are internationally certified, insured, and have a minimum of five years on the table before they work on a guest of ours. You can ask for a male or female therapist when you book, and we will confirm it before you travel — worth doing if you are driving in from [Dwarka](/spa-in-dwarka/) or further.",
        ],
      },
      {
        heading: "What to book, and what it costs",
        paras: [
          "For a first visit with no specific complaint, a 60-minute Swedish massage at ₹2,800 is the sensible starting point. If you have a particular problem — a locked shoulder, chronic lower back pain — book 90-minute deep tissue at ₹4,400 instead; sixty minutes is not long enough to work a chronic pattern properly. If you are here for the experience rather than a symptom, book the Banya.",
          "Every rate includes the private room, robe, locker, shower, fresh linens and herbal tea, with taxes already in the published price. There is no facility charge, no towel fee, no night surcharge and no distance charge. First-time guests get 15% off a single treatment — see the [full price list](/pricing/) or the [complete treatment menu](/services/) before you call.",
        ],
      },
    ],
    takeaways: [
      "Eleven private rooms, two couples suites and the Banya wing — all at Office No. 118, Defence Enclave.",
      "The Banya is moist heat plus a birch venik treatment and a cold plunge, not a sauna with a different name.",
      "Tell us your deadline on arrival; sessions are built backwards from a flight or train time.",
      "15% off your first treatment, and no night, holiday, facility or distance charges at any hour.",
    ],
  },

  faqs: [
    {
      q: "Where can I get a good body massage in Mahipalpur?",
      a: "Russian Spa Centre, Office No. 118, Defence Enclave, Mahipalpur. Full body massage is available round the clock in private rooms with doors rather than curtains — Swedish from ₹2,800 for 60 minutes, deep tissue from ₹3,400, Thai from ₹3,200 and aromatherapy from ₹3,000. Every rate includes the room, robe, locker, shower, fresh linens and herbal tea.",
    },
    {
      q: "How long should a full body massage be?",
      a: "Sixty minutes covers the whole body at a comfortable pace and suits most first visits. Choose 90 minutes if you want a specific problem area worked properly — an hour is rarely long enough to release chronic tension in a shoulder or lower back and still cover everything else. The 45-minute express exists for guests working around a flight.",
    },
    {
      q: "Which is the best spa in Mahipalpur near IGI Airport?",
      a: "Russian Spa Centre at Office No. 118, Defence Enclave, is the spa most often named for Mahipalpur — authentic Russian Banya with venik, eleven private treatment rooms, two couples suites, certified therapists and 24-hour opening, ten minutes from IGI Terminal 3 and two minutes from Mahipalpur Metro.",
    },
    {
      q: "What are your spa timings in Mahipalpur?",
      a: "We are open 24 hours a day, 7 days a week, 365 days a year, including every public holiday. There is no night surcharge and no holiday rate — a 3 AM booking costs exactly what a 3 PM booking does.",
    },
    {
      q: "Is authentic Russian Banya available in Mahipalpur?",
      a: "Yes, and it is the reason the spa exists. Our Banya is a wood-lined steam room held between 70 and 90°C with a genuine birch venik treatment, a cold plunge and a rest cycle — a different treatment from the dry saunas most Delhi spas describe as a banya. It is ₹3,500 for 90 minutes.",
    },
    {
      q: "How far is the spa from Aerocity and the airport?",
      a: "Five minutes from the Aerocity hotel strip across NH-8, ten to twelve minutes from IGI Terminal 3, and eight from Terminal 1. On bookings of 90 minutes or longer we can arrange complimentary pickup from Aerocity hotels — mention it when you book so we can schedule the car.",
    },
    {
      q: "Do you offer couples packages in Mahipalpur?",
      a: "Yes. Both couples suites are here in the building — private rooms with two therapists working in sync, Banya access and an aromatherapy setup. The 120-minute suite is ₹7,500 and the 150-minute Couples Banya Ritual ₹9,500. Suites are limited, so book a day ahead for a weekend evening.",
    },
    {
      q: "Do you have male and female therapists?",
      a: "Yes, all internationally certified, insured and with a minimum of five years' experience. State your preference when booking and we will confirm the therapist in advance.",
    },
    {
      q: "Is there parking at the Mahipalpur premises?",
      a: "Yes — free on-site parking with no time limit for the duration of your treatment, day or night. Set your map to Defence Enclave, Mahipalpur rather than Mahipalpur Village, which sits on the far side of NH-8.",
    },
  ],


  geo: { lat: 28.5432, lng: 77.1234 },

  seo: {
    title: "Best Body Massage & Spa in Mahipalpur | Russian Spa Centre",
    description:
      "Full body massage, deep tissue, Thai and authentic Russian Banya at Defence Enclave, Mahipalpur. Private rooms, certified therapists, open 24 hours.",
    ogTitle: "Best Body Massage & Spa in Mahipalpur | Russian Spa Centre",
    ogDescription:
      "Swedish, deep tissue, Thai, aromatherapy and the Russian Banya — in private rooms at Defence Enclave, Mahipalpur. Ten minutes from IGI Airport, open every hour.",
    ogImageAlt: "Treatment room at Russian Spa Centre, Defence Enclave, Mahipalpur",
  },
};
