import type { LocationContent } from "../lib/location";

/**
 * Gurugram's angle is working hours, not distance. Cyber City and Udyog Vihar
 * finish long after the Gurugram spas take their last booking, so the page is
 * built around the 24-hour clock, sports and desk-recovery work, and the fact
 * that NH-8 northbound at 10 PM is quicker than crossing Gurugram itself.
 *
 * Gurugram sits in Haryana, so `areaServedName`/`containedInCity` override the
 * New Delhi defaults — the schema has to be true even when the copy targets a
 * Delhi NCR search.
 */
export const GURUGRAM: LocationContent = {
  path: "/spa-in-gurugram/",
  areaName: "Gurugram",
  breadcrumb: "Spa in Gurugram",

  areaServedName: "Gurugram, Haryana",
  containedInCity: "Gurugram",

  heroImage: "/home_images/mahipalpurspa11.jpg",
  heroBadge: "Serving Cyber City, Udyog Vihar & DLF · Open 24 Hours",
  h1: { lead: "Best Spa & Body Massage near", em: "Gurugram" },
  heroText: [
    "The problem with booking a spa in Gurugram is rarely the spa — it is the clock. Most take their last appointment between 9 and 11 PM, which is roughly when a Cyber City or Udyog Vihar day actually ends. We are twenty minutes up NH-48 at Defence Enclave, Mahipalpur, and we never close.",
    "Deep tissue and sports recovery by certified therapists, authentic Russian Banya with birch venik, and private couples suites. A 10.30 PM booking after a long release week is entirely normal here, and it costs exactly what the same session costs at noon.",
  ],
  heroStats: [
    { value: "18 km", label: "From Cyber City" },
    { value: "20 min", label: "Typical Drive" },
    { value: "24/7", label: "No Night Rate" },
    { value: "4.8★", label: "350+ Reviews" },
  ],

  intro: {
    label: "Why Gurugram Guests Come To Us",
    titleLead: "Built For",
    titleEm: "Gurugram Working Hours",
    paras: [
      "Gurugram has no shortage of spas. It has a shortage of spas open when Gurugram is free. The Golf Course Road wellness studios close at nine, the mall spas follow the mall, and the hotel spas in Cyber City stop taking bookings around eleven — which is the hour a lot of our Gurugram guests are only just leaving the office.",
      "Twenty minutes up NH-48 solves it. From Cyber City or Udyog Vihar you are at Defence Enclave, Mahipalpur before you would have crossed Gurugram to Sector 56, and there is no closing time to beat. Guests from DLF Phases 1 to 3, MG Road, Golf Course Road and Sector 29 make the same run, most often on a weekday night or a Sunday morning.",
      "What they book reflects who they are. Deep tissue and sports recovery lead by a distance — long-hour bodies, gym injuries, necks locked from a decade of screens — followed by the couples suite at weekends and the Banya for anyone who has never tried a real one. Because we are on the Delhi side of the highway, a session also fits neatly before an early flight out of Terminal 3.",
    ],
  },

  highlights: [
    {
      icon: "moon",
      title: "Open When Gurugram Isn't",
      desc: "Midnight, 3 AM, a public holiday — the doors are open and the rate card does not change by the hour.",
    },
    {
      icon: "briefcase",
      title: "Twenty Minutes Up NH-48",
      desc: "From Cyber City or Udyog Vihar, often quicker than crossing Gurugram itself in evening traffic.",
    },
    {
      icon: "dumbbell",
      title: "Real Recovery Work",
      desc: "Deep tissue, trigger point release and assisted stretching for gym-goers and long-hour desk bodies alike.",
    },
    {
      icon: "plane",
      title: "En Route To Your Flight",
      desc: "Ten minutes from IGI Terminal 3, so a 45-minute express session fits comfortably before an early departure.",
    },
  ],

  treatments: [
    {
      icon: "activity",
      name: "Sports & Recovery Massage",
      desc: "Our most-booked treatment from Gurugram. Trigger point release, deep tissue and assisted stretching — tell us the problem area when booking and we assign a therapist trained for it.",
      duration: "90 min",
      price: "₹3,600",
    },
    {
      icon: "dumbbell",
      name: "Deep Tissue — Extended",
      desc: "Ninety minutes is the honest length for a back locked by twelve-hour days and the Cyber City commute. Full postural work, shoulders through lower back, at a confirmed pressure.",
      duration: "90 min",
      price: "₹4,400",
    },
    {
      icon: "flame",
      name: "Russian Banya with Venik",
      desc: "Steam, birch venik worked over the back and legs, cold plunge, rest cycle. The one thing on this list Gurugram genuinely cannot offer you, at any price.",
      duration: "90 min",
      price: "₹3,500",
    },
    {
      icon: "couple",
      name: "Couples Spa Suite",
      desc: "Two therapists working in sync in a private suite with Banya access. The weekend booking from DLF and Golf Course Road, and worth reserving 24 hours ahead.",
      duration: "120 min",
      price: "₹7,500",
    },
    {
      icon: "hand",
      name: "Head, Neck & Shoulder Express",
      desc: "Thirty focused minutes on screen fatigue and tension headaches. What a Gurugram guest books when they only have the gap between the last call and the drive home.",
      duration: "30 min",
      price: "₹1,400",
    },
    {
      icon: "plane",
      name: "Airport Layover Express",
      desc: "Express massage, shower and refreshment inside an hour, ten minutes from Terminal 3. Built for the early Monday flight out of Gurugram that starts at 4 AM.",
      duration: "45 min",
      price: "₹2,400",
    },
  ],

  nearby: [
    { name: "DLF Cyber City", distance: "20 min", note: "NH-48 northbound; quicker after 9 PM" },
    { name: "Udyog Vihar", distance: "18 min", note: "The shortest run of any Gurugram catchment" },
    { name: "Ambience Mall", distance: "15 min", note: "Almost on the highway — our closest Gurugram landmark" },
    { name: "MG Road Metro", distance: "22 min", note: "Yellow Line; the metro route via Aerocity also works" },
    { name: "DLF Phase 1–3", distance: "22 min", note: "Via Cyber Hub onto NH-48" },
    { name: "IFFCO Chowk", distance: "24 min", note: "Allow extra during the evening peak" },
    { name: "Sector 29 Market", distance: "26 min", note: "Late bookings after dinner are routine" },
    { name: "Golf Course Road", distance: "28 min", note: "Longest common run; guests book 90 min or more" },
    { name: "Le Meridien Gurgaon", distance: "20 min", note: "Complimentary pickup on 90-minute bookings" },
  ],

  gettingHere: [
    {
      icon: "car",
      title: "Driving from Gurugram",
      desc: "NH-48 northbound towards Delhi, off at the Mahipalpur exit and into Defence Enclave before the hotel strip. Twenty minutes from Cyber City off-peak, thirty to thirty-five in the evening rush. After 9 PM the run is consistently quick.",
    },
    {
      icon: "metro",
      title: "By metro from Gurugram",
      desc: "Yellow Line to New Delhi, change to the Airport Express and ride to Aerocity — we are a five-minute auto from that exit. Slower than driving off-peak, but dependable when NH-48 is backed up towards Rajokri.",
    },
    {
      icon: "briefcase",
      title: "Straight from the office",
      desc: "Message us as you leave Cyber City or Udyog Vihar and we will have a therapist ready for when you arrive rather than making you wait. Lockers, robes, slippers and a shower are included, so you can come straight from work.",
    },
  ],

  reviews: [
    {
      text: "Finished at Cyber City past eleven, called on the way, and a therapist was ready when I reached. Twenty minutes up the highway and no surcharge for the hour. This is my standard Friday now.",
      author: "Karan Mehta",
      role: "DLF Phase 2, Gurugram",
    },
    {
      text: "I train five days a week and needed genuine sports recovery, not a scented spa massage. The therapist knew exactly what to do with my IT band and shoulders. Nothing in Gurugram came close on a Sunday morning.",
      author: "Siddharth Rao",
      role: "Sector 43, Gurugram",
    },
    {
      text: "Booked the couples suite for my wife's birthday. From Golf Course Road it took under half an hour, and it was noticeably better value than the Gurugram hotel spas we had been to before.",
      author: "Nikhil Arora",
      role: "Golf Course Road, Gurugram",
    },
  ],

  article: {
    label: "The Late Session",
    titleLead: "Does A Massage At 11 PM",
    titleEm: "Help Or Ruin Your Sleep?",
    standfirst:
      "It is the question Gurugram guests ask most, and reasonably — if the only free hour is after eleven, it matters whether using it costs you the night that follows.",
    sections: [
      {
        heading: "Why the late slot usually works in your favour",
        paras: [
          "For most people a slow, warm, medium-pressure session late in the evening is a good prelude to sleep rather than a disruption to it. The pattern that keeps a Cyber City body awake at midnight is rarely tiredness — it is a shoulder line that has not come down since the morning stand-up. Releasing that, in a dim room, with no phone, tends to help. Guests who book after eleven very often report sleeping better than usual, which is why the slot fills at all.",
          "The exception is deep, aggressive work. A hard 90-minute [deep tissue session](/services/) at the very end of a long day can leave you wired for an hour and sore the next morning, particularly if it is your first in months. If you are booking late and want depth, ask for firm-but-steady rather than maximal, and let the therapist finish slow — the last ten minutes decide which state you leave in.",
        ],
      },
      {
        heading: "Scheduling around training",
        paras: [
          "For the gym half of our Gurugram booking log, timing matters more than intensity. Deep or sports work sits best the evening after a hard session or on a rest day, not in the two hours before you train — firm work leaves muscle temporarily less responsive, which is the opposite of what you want before lifting. If you have delayed-onset soreness at its worst, twenty-four to forty-eight hours after training, keep the pressure moderate; grinding into inflamed tissue does not shorten the recovery.",
          "Book [sports and recovery massage](/pricing/) rather than a general relaxation hour, name the problem area when you call, and expect to be asked what you trained and when. If you want the difference between deep tissue, Thai and recovery work set out properly, the [Hauz Khas guide](/spa-in-hauz-khas/) covers it in detail.",
        ],
      },
      {
        heading: "Practicalities for a late run up NH-48",
        paras: [
          "After nine the highway is quick, and twenty minutes from Cyber City is a fair estimate rather than an optimistic one. Message us when you leave rather than when you arrive — we hold therapists against a departure time, so a slow exit out of Udyog Vihar costs you nothing. Lockers, robes, slippers and showers are included in every rate, so coming straight from the office needs no planning.",
          "Two honest caveats. Alcohol and heat treatments do not mix; if the evening has already included drinks, skip the Banya and take the massage instead. And if you have high blood pressure, a heart condition or are pregnant, ask your doctor about heat treatments before booking one — the massage side is a separate question and usually far less restricted.",
        ],
      },
    ],
    takeaways: [
      "A warm, medium-pressure late session generally helps sleep; hard deep tissue at midnight often does not.",
      "Book firm work the evening after training or on a rest day, not in the two hours before you lift.",
      "Message us when you leave Gurugram — the therapist is held against your departure time.",
      "No Banya after drinks, and check with a doctor first if you are pregnant or have a heart or blood-pressure condition.",
    ],
  },

  faqs: [
    {
      q: "Which is the nearest 24 hour spa to Gurugram?",
      a: "Russian Spa Centre at Office No. 118, Defence Enclave, Mahipalpur — about 18 km and twenty minutes from Cyber City on NH-48, open every hour of every day including holidays. It is the main reason Gurugram guests travel to us: almost everything inside Gurugram takes its last booking between 9 and 11 PM.",
    },
    {
      q: "How far is the spa from Cyber City and Udyog Vihar?",
      a: "About twenty minutes from Cyber City and eighteen from Udyog Vihar off-peak, straight up NH-48. During the evening rush allow thirty to thirty-five. From Golf Course Road it is nearer twenty-eight minutes, and from Ambience Mall about fifteen.",
    },
    {
      q: "Do you have a spa located inside Gurugram?",
      a: "No. We operate a single premises in Mahipalpur, New Delhi, and serve Gurugram guests from there. One location is how we keep therapist quality and hygiene consistent rather than diluted across branches — anything advertising a Gurugram branch of ours is not us.",
    },
    {
      q: "Do you offer sports and deep tissue massage for gym-goers?",
      a: "Yes, and it is the most-booked treatment among our Gurugram guests. Sports and recovery massage combines deep tissue, trigger point release and assisted stretching over 90 minutes at ₹3,600. Name the problem area when booking and we will assign a therapist trained for it.",
    },
    {
      q: "Is there a late-night or distance charge for guests from Gurugram?",
      a: "No to both. The rate card is identical at every hour and identical regardless of where you travel from. A 90-minute deep tissue session is ₹4,400 whether you book it at 2 PM or 2 AM.",
    },
    {
      q: "Can I stop for a massage on the way to IGI Airport from Gurugram?",
      a: "Yes, and many Gurugram guests do — we are on the Delhi side of NH-48, roughly ten minutes from Terminal 3. The 45-minute Airport Layover Express at ₹2,400 includes a massage, a shower and refreshments, which fits comfortably before a flight.",
    },
    {
      q: "Do you have both male and female therapists?",
      a: "Yes, all certified and insured with a minimum of five years' experience. State your preference when you book and we will confirm the therapist before you set off, so the drive from Gurugram is never wasted.",
    },
  ],


  geo: { lat: 28.4595, lng: 77.0266 },

  seo: {
    title: "Spa & Body Massage near Gurugram | Russian Spa Centre",
    description:
      "Twenty minutes from Cyber City up NH-48 and open all night, when Gurugram spas close by 11 PM. Body massage, deep tissue and the Russian Banya.",
    ogTitle: "Spa near Gurugram | Open 24/7, 20 Minutes from Cyber City",
    ogDescription:
      "Gurugram's spas take their last booking at eleven. We take yours at any hour. Russian Banya, deep tissue and sports recovery, twenty minutes up NH-48.",
    ogImageAlt: "Russian Spa Centre — the 24 hour spa serving Gurugram from Mahipalpur",
  },
};
