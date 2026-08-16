import { Clock, Phone, MessageCircle } from "lucide-react";
import styles from "./Therapists.module.css";
import Img from "./Img";
import { PHONE_E164, waLink } from "../lib/site";

export type Therapist = {
  img: string;
  name: string;
  tag: string;
  years: string;
  desc: string;
  price: string;
  duration: string;
  origin: "indian" | "russian";
};

const THERAPISTS_RUSSIAN: Therapist[] = [
  {
    img: "/home_images/girl_russian/r1.jpeg",
    name: "Natasha",
    tag: "Russian Banya",
    years: "8 Years · Certified",
    desc: "Natasha is our lead Banya specialist, trained in authentic steam therapy and birch venik technique. Guests from Russia confirm her ritual is correct — right temperature, right technique, nothing staged.",
    price: "₹3,500",
    duration: "90 min",
    origin: "russian",
  },
  {
    img: "/home_images/girl_russian/r2.jpeg",
    name: "Elena",
    tag: "Aromatherapy",
    years: "5 Years · Certified",
    desc: "Elena selects custom essential oil blends for your specific concern — stress, sleep, muscle tension. She consults before every session to get the blend exactly right for you.",
    price: "₹3,200",
    duration: "75 min",
    origin: "russian",
  },
  {
    img: "/home_images/girl_russian/r3.jpeg",
    name: "Irina",
    tag: "Russian Banya",
    years: "9 Years · Certified",
    desc: "Irina brings nine years in Banya practice and deep knowledge of heat sequencing — when to raise steam, when to cool, how to read the guest's body. Her sessions feel intuitive, not mechanical.",
    price: "₹3,500",
    duration: "60 min",
    origin: "russian",
  },
  {
    img: "/home_images/girl_russian/r4.jpeg",
    name: "Daria",
    tag: "Hot Stone",
    years: "4 Years · Certified",
    desc: "Daria trained in St. Petersburg and specialises in mood-based hot stone therapy. Heated basalt stones at 50–55°C penetrate muscle fibre faster than hands alone — ideal for deep stiffness.",
    price: "₹3,800",
    duration: "75 min",
    origin: "russian",
  },
];

const THERAPISTS_INDIAN: Therapist[] = [
  {
    img: "/home_images/girl_indian/i1.jpeg",
    name: "Priya",
    tag: "Swedish Massage",
    years: "6 Years · Certified",
    desc: "Priya's long, flowing strokes are built for complete relaxation. A favourite among first-time guests and regulars who want a calm, unhurried full-body session.",
    price: "₹2,800",
    duration: "60 min",
    origin: "indian",
  },
  {
    img: "/home_images/girl_indian/i2.jpeg",
    name: "Ananya",
    tag: "Deep Tissue",
    years: "7 Years · Certified",
    desc: "Ananya works firm, targeted pressure into chronic tension — stiff shoulders, lower back pain, sports recovery. Guests with desk-job pain book her repeatedly.",
    price: "₹3,500",
    duration: "90 min",
    origin: "indian",
  },
  {
    img: "/home_images/girl_indian/i3.jpeg",
    name: "Kavya",
    tag: "Thai Massage",
    years: "4 Years · Certified",
    desc: "Kavya uses acupressure along energy lines, no oils, just skilled hands. Guests leave noticeably lighter and more awake, not drowsy.",
    price: "₹3,200",
    duration: "75 min",
    origin: "indian",
  },
  {
    img: "/home_images/girl_indian/i4.jpeg",
    name: "Meera",
    tag: "Couples Package",
    years: "6 Years · Certified",
    desc: "Meera leads our couples sessions — two therapists, synchronised timing, a private room with Banya access. Book 24 hours ahead for guaranteed availability.",
    price: "₹7,500",
    duration: "120 min",
    origin: "indian",
  },
  {
    img: "/home_images/girl_indian/i5.jpeg",
    name: "Riya",
    tag: "Aromatherapy",
    years: "5 Years · Certified",
    desc: "Riya creates custom aromatherapy blends using traditional Indian essential oils. Her sessions are deeply relaxing and tailored to individual needs.",
    price: "₹3,000",
    duration: "60 min",
    origin: "indian",
  },
];

const CATEGORIES = [
  { key: "russian", flag: "🇷🇺", title: "Russian", list: THERAPISTS_RUSSIAN },
  { key: "indian", flag: "🇮🇳", title: "Indian", list: THERAPISTS_INDIAN },
];

function TherapistCard({ therapist, delay }: { therapist: Therapist; delay: number }) {
  return (
    <article className={styles.card} data-reveal data-reveal-delay={delay}>
      <div className={styles.photo}>
        <Img
          src={therapist.img}
          alt={`${therapist.name} — ${therapist.tag} therapist at Russian Spa Centre Mahipalpur`}
          loading="lazy"
          decoding="async"
          width={320}
          height={384}
        />
        <span className={styles.tag}>{therapist.tag}</span>
        <span className={styles.priceBadge}>
          {therapist.price} <small>from</small>
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.nameRow}>
          <h3>{therapist.name}</h3>
          <span className={styles.years}>{therapist.years.split(" · ")[0]}</span>
        </div>

        <p className={styles.desc}>{therapist.desc}</p>

        <div className={styles.meta}>
          <Clock size={13} strokeWidth={2} /> {therapist.duration} session
        </div>

        {/* Vector icons rather than the raster call/WhatsApp badges: with 25
            therapists these two glyphs were repeated 50 times, costing ~150 DOM
            nodes. They also inherit the button colour, which the PNGs could not. */}
        <div className={styles.actions}>
          <a href={`tel:${PHONE_E164}`} className={`${styles.btn} ${styles.btnCall}`}>
            <Phone size={14} strokeWidth={2.2} /> Call
          </a>
          <a
            href={waLink(`Hi, I want to book a session with ${therapist.name} at Russian Spa Centre.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnWa}`}
          >
            <MessageCircle size={14} strokeWidth={2.2} /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

/**
 * Shared by the home page and every area landing page. With no props it shows
 * the full house roster; given `therapists` it shows that area's selection,
 * still split by origin so the layout matches everywhere.
 */
export default function TherapistSection({
  therapists,
  eyebrow = "Meet Our Therapists",
  intro,
  headingLead = "Certified",
  headingEm = "Hands",
  headingTail = "You Can Trust",
}: {
  therapists?: Therapist[];
  eyebrow?: string;
  intro?: string;
  headingLead?: string;
  headingEm?: string;
  headingTail?: string;
} = {}) {
  const categories = therapists
    ? CATEGORIES.map((c) => ({
        ...c,
        list: therapists.filter((x) => x.origin === c.key),
      })).filter((c) => c.list.length > 0)
    : CATEGORIES;

  return (
    <section className={styles.section} id="therapists">
      <div className={styles.inner}>
        <div className={styles.head} data-reveal>
          <div className="section-label">{eyebrow}</div>
          <h2 className="section-title">
            {headingLead} <em>{headingEm}</em> {headingTail}
          </h2>
          <p>
            {intro ??
              "Trained in authentic Russian Banya culture and European spa technique. Available 24/7 at Russian Spa Centre, Mahipalpur."}
          </p>
        </div>

        {categories.map((category) => (
          <div key={category.key} className={styles.category}>
            <div className={styles.categoryHeader} data-reveal>
              <h3 className={styles.categoryTitle}>
                <span className={styles.flag} aria-hidden="true">
                  {category.flag}
                </span>
                {category.title} <span>Therapists</span>
              </h3>
              <span className={styles.categoryCount}>{category.list.length} Therapists</span>
            </div>

            <div className={styles.grid}>
              {category.list.map((therapist, i) => (
                <TherapistCard
                  key={`${category.key}-${therapist.name}`}
                  therapist={therapist}
                  delay={(i % 4) * 80}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
