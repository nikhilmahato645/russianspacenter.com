import {
  Flame,
  WavesLadder,
  Dumbbell,
  Hand,
  Flower2,
  HeartHandshake,
  Gem,
  Footprints,
  Baby,
  Activity,
  Leaf,
  Snowflake,
  Clock,
  PhoneCall,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Check,
  ShieldCheck,
  GraduationCap,
  SprayCan,
  Lock,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_URL, waLink } from "../lib/site";
import AlsoVisit from "../components/AlsoVisit";
import styles from "../styles/page.module.css";
import { SERVICE_FAQS } from "./data";

const HERO_STATS = [
  { value: "20+", label: "Treatments" },
  { value: "24/7", label: "Always Open" },
  { value: "25", label: "Certified Therapists" },
  { value: "4.8★", label: "350+ Reviews" },
];

const SIGNATURE = [
  {
    icon: Flame,
    name: "Russian Banya with Venik",
    desc: "Our flagship ritual and the reason most guests find us. Traditional wood-fired steam at 70–90°C, followed by the birch-leaf venik treatment that stimulates circulation, then a cold plunge and rest cycle. Performed by therapists trained in genuine Russian Banya practice — one of the very few authentic setups in Delhi NCR.",
    duration: "90 min",
    price: "From ₹3,500",
    tags: ["Detox", "Circulation", "Immunity"],
  },
  {
    icon: HeartHandshake,
    name: "Couples Spa Suite",
    desc: "A private suite for two with synchronised therapists, your choice of massage style, and full Banya access. Includes aromatherapy setup, herbal tea service, and a relaxation period after the treatment. Popular for anniversaries and pre-wedding unwinding — book 24 hours ahead for guaranteed availability.",
    duration: "120 min",
    price: "From ₹7,500",
    tags: ["Private Suite", "Two Therapists", "Anniversary"],
  },
  {
    icon: Gem,
    name: "Royal Signature Ritual",
    desc: "Our most complete experience: full-body exfoliation, warm herbal compress, a 90-minute custom massage of your choice, scalp and foot work, followed by Banya access and refreshments. Designed for guests who want the entire spa in a single visit.",
    duration: "150 min",
    price: "From ₹8,500",
    tags: ["Full Spa", "Scrub Included", "Best Value"],
  },
];

const MASSAGE = [
  {
    icon: WavesLadder,
    name: "Swedish Massage",
    desc: "Long, flowing strokes with medium pressure — the classic relaxation massage. Best if it's your first spa visit or you simply want to switch off completely.",
    duration: "60 / 90 min",
    price: "From ₹2,800",
  },
  {
    icon: Dumbbell,
    name: "Deep Tissue Massage",
    desc: "Firm, targeted pressure into chronic tension: stiff shoulders, lower-back pain, desk-job posture. Your therapist works layer by layer rather than forcing depth.",
    duration: "60 / 90 min",
    price: "From ₹3,400",
  },
  {
    icon: Hand,
    name: "Thai Massage",
    desc: "Oil-free acupressure and assisted stretching along the body's energy lines. Guests leave feeling lighter and more awake rather than drowsy.",
    duration: "75 min",
    price: "From ₹3,200",
  },
  {
    icon: Flower2,
    name: "Aromatherapy Massage",
    desc: "A gentle full-body massage using an essential-oil blend chosen for you after a short consultation — stress, sleep, muscle tension or low energy.",
    duration: "60 / 75 min",
    price: "From ₹3,000",
  },
  {
    icon: Snowflake,
    name: "Hot Stone Therapy",
    desc: "Heated basalt stones at 50–55°C placed along the spine and worked into the muscle. Heat reaches deeper tissue faster than hands alone.",
    duration: "75 min",
    price: "From ₹3,600",
  },
  {
    icon: Activity,
    name: "Sports & Recovery Massage",
    desc: "Pre-event activation or post-training recovery. Combines deep tissue, trigger-point release and stretching to speed up muscle repair.",
    duration: "90 min",
    price: "From ₹3,600",
  },
  {
    icon: Footprints,
    name: "Reflexology",
    desc: "Precise pressure applied to reflex points in the feet and hands. Excellent after long flights — a favourite with travellers arriving from IGI Airport.",
    duration: "45 / 60 min",
    price: "From ₹2,200",
  },
  {
    icon: Leaf,
    name: "Ayurvedic Abhyanga",
    desc: "Warm herbal oil applied in rhythmic strokes following traditional Ayurvedic technique, finished with a scalp and marma-point sequence.",
    duration: "90 min",
    price: "From ₹3,800",
  },
  {
    icon: Baby,
    name: "Prenatal & Postnatal Massage",
    desc: "Side-lying positioning with bolster support, performed by therapists certified in pregnancy massage. Safe from the second trimester onward.",
    duration: "60 min",
    price: "From ₹3,000",
  },
];

const RITUALS = [
  {
    name: "Full Body Scrub & Polish",
    desc: "Sea-salt or coffee exfoliation followed by a hydrating wrap. Adds visible smoothness before any massage.",
    duration: "45 min",
    price: "₹1,800",
  },
  {
    name: "Herbal Compress Add-On",
    desc: "Steamed herbal poultices pressed into tight muscle groups during your massage. Pairs well with deep tissue.",
    duration: "+20 min",
    price: "₹900",
  },
  {
    name: "Head, Neck & Shoulder Express",
    desc: "A focused session for screen fatigue and tension headaches. Fits into a lunch break.",
    duration: "30 min",
    price: "₹1,400",
  },
  {
    name: "Foot Ritual & Soak",
    desc: "Warm herbal soak, exfoliation and a reflexology finish. The most requested add-on for airport travellers.",
    duration: "30 min",
    price: "₹1,200",
  },
  {
    name: "Steam & Sauna Access",
    desc: "Standalone access to the steam room and dry sauna, with towels, robe and locker included.",
    duration: "60 min",
    price: "₹1,000",
  },
  {
    name: "Airport Layover Express",
    desc: "A compressed reset built for tight schedules: express massage, shower and refreshment, in and out in an hour.",
    duration: "45 min",
    price: "₹2,400",
  },
];

const STEPS = [
  {
    title: "Call or WhatsApp",
    desc: "Tell us the treatment, the time and whether you'd prefer a male or female therapist. We confirm within minutes, any hour of the day.",
  },
  {
    title: "Arrive & Consult",
    desc: "A short consultation covers pressure preference, problem areas, allergies and oil choice. Lockers, robes and slippers are provided.",
  },
  {
    title: "Your Treatment",
    desc: "Your session runs in a fully private room. Full advertised time is on the table — setup and changing are not counted against it.",
  },
  {
    title: "Rest & Rehydrate",
    desc: "Unwind in the relaxation lounge with herbal tea. Your therapist shares simple aftercare notes for the next 24 hours.",
  },
];

const INCLUDED = [
  "Private treatment room — never a curtain partition",
  "Fresh linens and robe, changed for every single guest",
  "Complimentary herbal tea and mineral water",
  "Shower and locker access before and after your session",
  "Pre-treatment consultation with your therapist",
  "Choice of male or female therapist, subject to availability",
  "Therapeutic-grade oils — no cheap synthetic blends",
  "Free on-site parking for all guests",
];

const ASSURANCES = [
  { icon: GraduationCap, title: "Certified Therapists", desc: "Internationally trained, insured, minimum 5 years of practice." },
  { icon: SprayCan, title: "Hospital-Grade Hygiene", desc: "Medical-grade disinfection of every room and tool between guests." },
  { icon: Lock, title: "Complete Privacy", desc: "Individual private rooms and absolute discretion, always." },
  { icon: ShieldCheck, title: "Transparent Pricing", desc: "The rate you're quoted is the rate you pay. No hidden add-ons." },
];


export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div
          className={styles.heroImage}
          style={{ backgroundImage: "url('/home_images/mahipalpurspa2.jpg')" }}
        />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <p className={styles.heroBadge}>
            <Sparkles size={13} /> 20+ Treatments · Open 24/7
          </p>
          <h1>
            Spa &amp; Massage <em>Services</em> in Mahipalpur
          </h1>
          <p className={styles.heroText}>
            Authentic Russian Banya, therapeutic body massage and full spa rituals — delivered by internationally
            certified therapists in private rooms, ten minutes from IGI Airport. Every treatment below is available
            round the clock, 365 days a year, across Mahipalpur, Aerocity, Dwarka and Vasant Kunj.
          </p>
          <div className={styles.heroActions}>
            <a href={`tel:${PHONE_E164}`} className="btn-gold">
              <PhoneCall size={15} /> Call {PHONE_DISPLAY}
            </a>
            <a href="/pricing/" className="btn-outline">
              See Full Price List <ArrowRight size={15} />
            </a>
          </div>
          <div className={styles.heroStats}>
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className={styles.heroStat}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Services" }]} />

      {/* SIGNATURE */}
      <section className={styles.section} id="signature">
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">Signature Experiences</p>
          <h2 className="section-title">
            The Treatments We&apos;re <em>Known For</em>
          </h2>
          <p>
            Three experiences that guests travel across Delhi NCR for. Each one runs in a private suite with full
            spa access included.
          </p>
        </div>
        <div className={styles.grid3}>
          {SIGNATURE.map((item, i) => (
            <article
              key={item.name}
              className={`${styles.iconCard} ${styles.iconCardLeft}`}
              data-reveal
              data-reveal-delay={i * 90}
            >
              <div className={styles.iconChip}>
                <item.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <div className={styles.serviceTags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.serviceTag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className={styles.cardMeta}>
                <Clock size={12} strokeWidth={2} /> {item.duration} · {item.price}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* MASSAGE THERAPIES */}
      <section className={`${styles.section} ${styles.sectionTight}`} id="massage">
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">Massage Therapies</p>
          <h2 className="section-title">
            Nine Ways to <em>Feel Better</em>
          </h2>
          <p>
            Not sure which one you need? Tell your therapist what hurts and how much pressure you like — they will
            recommend the right technique during your consultation.
          </p>
        </div>
        <div className={styles.grid3}>
          {MASSAGE.map((item, i) => (
            <article
              key={item.name}
              className={styles.serviceCard}
              data-reveal
              data-reveal-delay={(i % 3) * 90}
            >
              <div className={styles.serviceIconChip}>
                <item.icon size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className={styles.serviceTags}>
                  <span className={styles.serviceTag}>{item.duration}</span>
                  <span className={styles.serviceTag}>{item.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RITUALS & ADD-ONS */}
      <section className={styles.band} id="rituals">
        <div className={styles.bandInner}>
          <div className={styles.sectionCenterHead} data-reveal>
            <p className="section-label">Rituals &amp; Add-Ons</p>
            <h2 className="section-title">
              Build Your Own <em>Spa Day</em>
            </h2>
            <p>
              Add any of these to a massage, or book them on their own. Ideal for short visits and airport layovers.
            </p>
          </div>
          <div className={styles.grid3}>
            {RITUALS.map((item, i) => (
              <article
                key={item.name}
                className={`${styles.iconCard} ${styles.iconCardLeft}`}
                data-reveal
                data-reveal-delay={(i % 3) * 90}
              >
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <p className={styles.cardMeta}>
                  <Clock size={12} strokeWidth={2} /> {item.duration} · {item.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.section} id="how-it-works">
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">How It Works</p>
          <h2 className="section-title">
            Your Visit, <em>Step by Step</em>
          </h2>
        </div>
        <div className={styles.stepGrid}>
          {STEPS.map((step, i) => (
            <div key={step.title} className={styles.step} data-reveal data-reveal-delay={i * 90}>
              <div className={styles.stepNum} aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className={`${styles.section} ${styles.sectionTight}`} id="included">
        <div className={styles.twoCol}>
          <div data-reveal="left" className={styles.prose}>
            <p className="section-label">Always Included</p>
            <h2 className="section-title">
              Every Booking <em>Comes With</em>
            </h2>
            <div className="divider" />
            <p>
              There is no premium tier for basic comfort. Whether you book a 30-minute express session or a
              150-minute signature ritual, the following is part of the price — no upsell, no surprises at the
              counter.
            </p>
            <ul className={styles.checkList}>
              {INCLUDED.map((line) => (
                <li key={line}>
                  <Check size={16} strokeWidth={2.4} />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.grid2}>
            {ASSURANCES.map((item, i) => (
              <div key={item.title} className={styles.iconCard} data-reveal data-reveal-delay={i * 90}>
                <div className={styles.iconChip}>
                  <item.icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionTight}`} id="faq">
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">FAQs</p>
          <h2 className="section-title">
            Service <em>Questions</em>
          </h2>
        </div>
        <FaqAccordion faqs={SERVICE_FAQS} />
      </section>

      {/* CTA */}
      <AlsoVisit path={"/services/"} />

      <section className={styles.ctaSection}>
        <div data-reveal>
          <p className={`section-label ${styles.ctaLabel}`}>Book Your Treatment</p>
          <h2>Not Sure Which Treatment You Need?</h2>
          <p>
            Message us with what&apos;s bothering you — a stiff back, jet lag, a stressful week — and we&apos;ll
            recommend the right therapist and technique. We&apos;re awake at 3 AM too.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={waLink("Hi! I'd like a recommendation on which spa treatment suits me. Here's what I need: ")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <MessageCircle size={19} /> Ask on WhatsApp
            </a>
          </div>
          <p className={styles.ctaCallLine}>
            <PhoneCall size={14} /> Or call us directly: <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
          </p>
        </div>
      </section>

      {/* RELATED */}
      <section className={styles.section}>
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">Keep Exploring</p>
          <h2 className="section-title">
            Plan Your <em>Visit</em>
          </h2>
        </div>
        <div className={styles.grid3}>
          <a href="/pricing/" className={`${styles.iconCard} ${styles.iconCardLeft}`} data-reveal>
            <h3>Full Price List</h3>
            <p>Every treatment, every duration, with package rates and current offers laid out in one table.</p>
            <span className={styles.cardLink}>
              View Pricing <ArrowRight size={13} />
            </span>
          </a>
          <a
            href="/locations/"
            className={`${styles.iconCard} ${styles.iconCardLeft}`}
            data-reveal
            data-reveal-delay={90}
          >
            <h3>Our Locations</h3>
            <p>Mahipalpur, Aerocity, Dwarka, Vasant Kunj and IGI Airport — travel times and directions.</p>
            <span className={styles.cardLink}>
              Find Us <ArrowRight size={13} />
            </span>
          </a>
          <a
            href="/gallery/"
            className={`${styles.iconCard} ${styles.iconCardLeft}`}
            data-reveal
            data-reveal-delay={180}
          >
            <h3>Photo Gallery</h3>
            <p>See the treatment rooms, the Banya and the relaxation lounge before you book.</p>
            <span className={styles.cardLink}>
              Browse Photos <ArrowRight size={13} />
            </span>
          </a>
        </div>
      </section>

      <noscript>
        <p style={{ textAlign: "center", padding: "0 20px 40px" }}>
          To book, call {PHONE_DISPLAY} or message us on{" "}
          <a href={WHATSAPP_URL}>WhatsApp</a>. We are open 24 hours.
        </p>
      </noscript>
    </>
  );
}
