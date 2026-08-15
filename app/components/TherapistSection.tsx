"use client";

import { Clock } from "lucide-react";
import styles from "./Therapists.module.css";

type Therapist = {
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
  {
    img: "/home_images/girl_russian/r5.jpeg",
    name: "Svetlana",
    tag: "Swedish Massage",
    years: "7 Years · Certified",
    desc: "Svetlana combines Russian techniques with Swedish strokes for a unique fusion experience. Her rhythmic movements and expert pressure points ensure deep relaxation.",
    price: "₹3,000",
    duration: "60 min",
    origin: "russian",
  },
  {
    img: "/home_images/girl_russian/r6.jpeg",
    name: "Olga",
    tag: "Deep Tissue",
    years: "6 Years · Certified",
    desc: "Olga specializes in deep tissue work, focusing on chronic pain areas. Her firm yet gentle approach releases tension and restores mobility in just one session.",
    price: "₹3,400",
    duration: "75 min",
    origin: "russian",
  },
  {
    img: "/home_images/girl_russian/r7.jpeg",
    name: "Tatiana",
    tag: "Reflexology",
    years: "5 Years · Certified",
    desc: "Tatiana's reflexology sessions target specific pressure points in hands and feet. Her precise technique promotes whole-body healing and energy balance.",
    price: "₹2,800",
    duration: "60 min",
    origin: "russian",
  },
  {
    img: "/home_images/girl_russian/r8.jpeg",
    name: "Anna",
    tag: "Pregnancy Massage",
    years: "4 Years · Certified",
    desc: "Anna specializes in prenatal massage, using safe techniques to relieve pregnancy discomfort. Expecting mothers love her gentle and nurturing approach.",
    price: "₹3,200",
    duration: "60 min",
    origin: "russian",
  },
  {
    img: "/home_images/girl_russian/r9.jpeg",
    name: "Maria",
    tag: "Sports Massage",
    years: "6 Years · Certified",
    desc: "Maria focuses on sports recovery and injury prevention. Her deep tissue work enhances athletic performance and speeds up post-workout recovery.",
    price: "₹3,600",
    duration: "90 min",
    origin: "russian",
  },
  {
    img: "/home_images/girl_russian/r10.jpeg",
    name: "Yulia",
    tag: "Lymphatic Drainage",
    years: "5 Years · Certified",
    desc: "Yulia's gentle lymphatic drainage massage helps reduce swelling, boost immunity, and promote detoxification. Her technique is both relaxing and therapeutic.",
    price: "₹3,000",
    duration: "60 min",
    origin: "russian",
  },
  {
    img: "/home_images/girl_russian/r11.jpeg",
    name: "Victoria",
    tag: "Couples Package",
    years: "8 Years · Certified",
    desc: "Victoria leads our Russian couples sessions with authentic Banya rituals. Two therapists, synchronized timing, and a private room with full spa access.",
    price: "₹7,500",
    duration: "120 min",
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
  {
    img: "/home_images/girl_indian/i6.jpeg",
    name: "Sneha",
    tag: "Hot Stone",
    years: "4 Years · Certified",
    desc: "Sneha's hot stone therapy combines heated basalt stones with traditional Indian massage techniques. Perfect for deep muscle relaxation and stress relief.",
    price: "₹3,600",
    duration: "75 min",
    origin: "indian",
  },
  {
    img: "/home_images/girl_indian/i7.jpeg",
    name: "Neha",
    tag: "Ayurvedic Massage",
    years: "8 Years · Certified",
    desc: "Neha brings authentic Ayurvedic techniques using warm herbal oils. Her Abhyanga massage balances doshas and promotes complete mind-body harmony.",
    price: "₹3,800",
    duration: "90 min",
    origin: "indian",
  },
  {
    img: "/home_images/girl_indian/i8.jpeg",
    name: "Aisha",
    tag: "Bridal Package",
    years: "5 Years · Certified",
    desc: "Aisha specializes in bridal packages including pre-wedding glow treatments, herbal masks, and full-body massage. Perfect for your special day preparations.",
    price: "₹6,000",
    duration: "120 min",
    origin: "indian",
  },
  {
    img: "/home_images/girl_indian/i9.jpeg",
    name: "Pooja",
    tag: "Relaxation Therapy",
    years: "6 Years · Certified",
    desc: "Pooja's gentle relaxation therapy focuses on stress reduction and mental clarity. Her soothing techniques melt away tension and restore inner peace.",
    price: "₹2,800",
    duration: "60 min",
    origin: "indian",
  },
  {
    img: "/home_images/girl_indian/i10.jpeg",
    name: "Deepika",
    tag: "Trigger Point Therapy",
    years: "7 Years · Certified",
    desc: "Deepika specializes in trigger point therapy for chronic pain conditions. Her precise pressure points release knots and provide lasting relief.",
    price: "₹3,400",
    duration: "75 min",
    origin: "indian",
  },
  {
    img: "/home_images/girl_indian/i11.jpeg",
    name: "Nisha",
    tag: "Spiritual Massage",
    years: "5 Years · Certified",
    desc: "Nisha combines massage with healing energy work. Her sessions incorporate Reiki principles and chakra balancing for a transformative experience.",
    price: "₹3,200",
    duration: "75 min",
    origin: "indian",
  },
  {
    img: "/home_images/girl_indian/i12.jpeg",
    name: "Kiran",
    tag: "Medical Massage",
    years: "8 Years · Certified",
    desc: "Kiran's medical massage therapy addresses specific health conditions. Her therapeutic approach helps manage chronic pain, sciatica, and postural issues.",
    price: "₹3,800",
    duration: "90 min",
    origin: "indian",
  },
  {
    img: "/home_images/girl_indian/i13.jpeg",
    name: "Anjali",
    tag: "Postnatal Massage",
    years: "4 Years · Certified",
    desc: "Anjali specializes in postnatal recovery massage. Her gentle techniques help new mothers regain energy, reduce pain, and restore well-being.",
    price: "₹3,000",
    duration: "60 min",
    origin: "indian",
  },
  {
    img: "/home_images/girl_indian/i14.jpeg",
    name: "Shreya",
    tag: "Herbal Compress Massage",
    years: "6 Years · Certified",
    desc: "Shreya uses warm herbal poultices in her unique massage therapy. The combination of heat and herbs promotes deep tissue healing and detoxification.",
    price: "₹3,600",
    duration: "75 min",
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
        <img
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

        <div className={styles.actions}>
          <a href="tel:+919999999999" className={`${styles.btn} ${styles.btnCall}`}>
            <img src="/call_whatshap/call.png" alt="" aria-hidden="true" /> Call
          </a>
          <a
            href={`https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20book%20a%20session%20with%20${therapist.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnWa}`}
          >
            <img src="/call_whatshap/whatshap.png" alt="" aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export default function TherapistSection() {
  return (
    <section className={styles.section} id="therapists">
      <div className={styles.inner}>
        <div className={styles.head} data-reveal>
          <div className="section-label">Meet Our Therapists</div>
          <h2 className="section-title">
            Certified <em>Hands</em> You Can Trust
          </h2>
          <p>
            Trained in authentic Russian Banya culture and European spa technique. Available 24/7 at Russian Spa
            Centre, Mahipalpur.
          </p>
        </div>

        {CATEGORIES.map((category) => (
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
