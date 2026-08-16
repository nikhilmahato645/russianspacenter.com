import {
  Flame,
  WavesLadder,
  Dumbbell,
  Hand,
  Flower2,
  HeartHandshake,
  Clock,
  GraduationCap,
  Lock,
  SprayCan,
  Star,
  Quote,
  PhoneCall,
  MapPin,
  MessageCircle,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Plane,
  ShieldCheck,
  Navigation,
  Images,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import FaqAccordion from "../components/FaqAccordion";
import AlsoVisit from "../components/AlsoVisit";
import styles from "./Home.module.css";
import Img from "../components/Img";
import { DIRECTIONS_URL, PHONE_DISPLAY, PHONE_E164, waLink } from "../lib/site";

const SERVICES = [
  {
    icon: Flame,
    name: "Russian Banya Experience",
    desc: "Wood-fired steam and the traditional birch venik treatment, followed by a cold plunge and rest cycle.",
    img: "/home_images/mahipalpurspa1.jpg",
    duration: "90 min",
    price: "From ₹3,500",
  },
  {
    icon: WavesLadder,
    name: "Swedish Massage",
    desc: "Long, flowing strokes at medium pressure — the classic way to switch off completely.",
    img: "/home_images/mahipalpurspa3.jpg",
    duration: "60 min",
    price: "From ₹2,800",
  },
  {
    icon: Dumbbell,
    name: "Deep Tissue Massage",
    desc: "Firm, targeted work into chronic tension: stiff shoulders, lower back, desk-job posture.",
    img: "/home_images/mahipalpurspa5.jpg",
    duration: "60 min",
    price: "From ₹3,400",
  },
  {
    icon: Hand,
    name: "Thai Massage",
    desc: "Oil-free acupressure and assisted stretching along the body's energy lines.",
    img: "/home_images/mahipalpurspa6.jpg",
    duration: "75 min",
    price: "From ₹3,200",
  },
  {
    icon: Flower2,
    name: "Aromatherapy Massage",
    desc: "A gentle full-body massage with an essential-oil blend chosen for you after a short consultation.",
    img: "/home_images/mahipalpurspa8.jpg",
    duration: "60 min",
    price: "From ₹3,000",
  },
  {
    icon: HeartHandshake,
    name: "Couples Spa Package",
    desc: "A private suite for two with synchronised therapists, aromatherapy setup and full Banya access.",
    img: "/home_images/mahipalpurspa9.jpg",
    duration: "120 min",
    price: "From ₹7,500",
  },
];

const WHY_CHOOSE_US = [
  { icon: Clock, title: "Open 24/7", desc: "365 days a year — including all holidays. We never close." },
  { icon: GraduationCap, title: "Certified Therapists", desc: "Internationally trained with 5+ years experience." },
  { icon: Lock, title: "100% Privacy", desc: "Private rooms with complete discretion guaranteed." },
  { icon: SprayCan, title: "Hospital Hygiene", desc: "Medical-grade disinfection between every guest." },
];

const TRUST_POINTS = [
  { icon: Plane, label: "10 min from IGI Airport" },
  { icon: Clock, label: "Open 24 hours, every day" },
  { icon: ShieldCheck, label: "Certified & insured therapists" },
  { icon: Star, label: "4.8★ from 350+ guests" },
];

const HERO_STATS = [
  { value: "24/7", label: "Always Open" },
  { value: "10+", label: "Years of Care" },
  { value: "4.8★", label: "350+ Reviews" },
];

const GALLERY_PREVIEW = [
  { src: "/home_images/mahipalpurspa4.jpg", alt: "Treatment room at Russian Spa Centre, Mahipalpur" },
  { src: "/home_images/mahipalpurspa7.jpg", alt: "Massage table prepared with fresh linen" },
  { src: "/home_images/mahipalpurspa10.jpg", alt: "Relaxation lounge at our Mahipalpur spa" },
  { src: "/home_images/mahipalpurspa11.jpg", alt: "Russian Banya steam room interior" },
  { src: "/home_images/mahipalpurspa12.jpg", alt: "Aromatherapy oils and spa amenities" },
  { src: "/home_images/mahipalpurspa16.jpg", alt: "Private couples suite at Russian Spa Centre" },
];

const TESTIMONIALS = [
  { text: "Best spa near Delhi Airport! The Russian Banya is absolutely authentic. Clean, professional, and therapists are highly skilled.", author: "Vikram Singh", location: "Mahipalpur Resident" },
  { text: "Perfect location near the airport. I booked a deep tissue massage during my layover and it was exactly what I needed after a long flight.", author: "James Mitchell", location: "Business Traveler" },
  { text: "The couples spa package is wonderful! My wife and I celebrated our anniversary here. Private room and a truly unique experience.", author: "Rahul Kapoor", location: "South Delhi" },
];

const FAQS = [
  { q: "Where is Russian Spa Centre located?", a: "We are located in Mahipalpur, just 10 minutes from IGI Airport Terminal 3 and 2-3 minutes from Aerocity hotels." },
  { q: "What are your spa timings?", a: "We are open 24 hours a day, 7 days a week, 365 days a year — including all holidays. We never close." },
  { q: "Do you offer couples packages?", a: "Yes! We have dedicated couples suites with synchronized massages, private rooms, and romantic amenities." },
  { q: "Are your therapists certified?", a: "Yes, all our therapists are internationally certified, insured, and have a minimum of 5 years of professional experience." },
];

const WHATSAPP_MESSAGE =
  "Hello! I want to book an appointment at Russian Spa Centre. Please share more details about services and availability.";
const WHATSAPP_URL = waLink(WHATSAPP_MESSAGE);

export default function Home() {
  return (
    <>
      {/* HERO — editorial split: copy left, framed imagery right */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.heroBadge}>
              <Sparkles size={13} /> Delhi NCR&apos;s Premier Spa
            </p>
            {/* The <em> is display:block, so the explicit spaces are what keep
                this from being extracted as one run-together string by
                crawlers and screen readers. */}
            <h1>
              Russian Spa Centre{" "}
              <em>Premium Spa &amp; Body Massage</em>{" "}
              in Mahipalpur
            </h1>
            <div className={styles.heroRule} aria-hidden="true" />
            <p className={styles.heroText}>
              Authentic Russian Banya, luxury body massage and world-class wellness therapies in Mahipalpur,
              Delhi NCR. Certified therapists, private rooms, open around the clock.
            </p>
            <div className={styles.heroActions}>
              <a href={`tel:${PHONE_E164}`} className="btn-gold">
                <PhoneCall size={15} /> Book Appointment
              </a>
              <a href="#services" className="btn-outline">
                Explore Treatments <ArrowRight size={15} />
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

          <div className={styles.heroArt}>
            <figure className={styles.heroFrame}>
              <Img
                src="/spa-in-mahipalpur/image1.jpg"
                alt="Candlelit treatment room at Russian Spa Centre, Mahipalpur"
                width={720}
                height={900}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
            <figure className={styles.heroFrameAlt}>
              <Img
                src="/home_images/mahipalpurspa13.jpg"
                alt="Therapist preparing warm oils before a massage session"
                width={320}
                height={320}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className={styles.heroRating}>
              <span className={styles.heroRatingStars} aria-hidden="true">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={12} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <strong>4.8 / 5</strong>
              <span>350+ Guest Reviews</span>
            </div>
          </div>
        </div>

        <a href="#services" className={styles.scrollCue} aria-label="Scroll to treatments">
          Scroll
          <ArrowDown size={15} />
        </a>
      </section>

      {/* TRUST STRIP */}
      <div className={styles.trustStrip}>
        <div className={styles.trustInner}>
          {TRUST_POINTS.map((point, i) => (
            <div key={point.label} className={styles.trustItem} data-reveal data-reveal-delay={i * 70}>
              <point.icon size={17} strokeWidth={1.8} />
              {point.label}
            </div>
          ))}
        </div>
      </div>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* ABOUT TEASER */}
      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div className={styles.aboutMedia} data-reveal="left">
            <figure className={styles.aboutFrame}>
              <Img
                src="/home_images/mayraspa_home1.avif"
                alt="Warm, softly lit interior of Russian Spa Centre in Mahipalpur"
                width={720}
                height={960}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className={styles.aboutSeal} aria-hidden="true">
              <strong>10+</strong>
              <span>Years of Care</span>
            </div>
          </div>

          <div data-reveal="right">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">
              A Sanctuary of <em>Authentic Wellness</em>
            </h2>
            <div className="divider" />
            <p>
              For over 10 years, Russian Spa Centre has combined authentic Russian wellness traditions with modern
              luxury — offering the finest Russian Banya, body massage, and spa therapies in Delhi NCR.
            </p>
            <p>
              Every therapist is internationally certified, every room is private, and every visit follows
              hospital-grade hygiene standards. We&apos;re open 24/7, so wellness is always within reach.
            </p>
            <div className={styles.featureGrid} style={{ marginTop: "28px" }}>
              {WHY_CHOOSE_US.slice(0, 2).map((item, i) => (
                <div key={item.title} className={styles.iconCard} data-reveal data-reveal-delay={i * 90}>
                  <div className={styles.iconChip}>
                    <item.icon size={21} strokeWidth={1.7} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <a href="/about/" className="btn-outline" style={{ marginTop: "28px" }}>
              Our Story <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section id="services" className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">Our Treatments</p>
          <h2 className="section-title">
            Signature <em>Spa Services</em>
          </h2>
          <p>
            From authentic Russian Banya to specialised therapeutic massage — every treatment is customised to your
            body by certified therapists.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {SERVICES.map((s, i) => (
            <article key={s.name} className={styles.serviceCard} data-reveal data-reveal-delay={(i % 3) * 90}>
              <div className={styles.serviceMedia}>
                <Img
                  src={s.img}
                  alt={`${s.name} at Russian Spa Centre, Mahipalpur`}
                  width={640}
                  height={440}
                  loading="lazy"
                  decoding="async"
                />
                <span className={styles.servicePrice}>{s.price}</span>
                <span className={styles.serviceIconChip}>
                  <s.icon size={20} strokeWidth={1.7} />
                </span>
              </div>
              <div className={styles.serviceBody}>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <div className={styles.serviceMeta}>
                  <Clock size={13} strokeWidth={2} /> {s.duration}
                  <a href="/services/" className={styles.serviceLink}>
                    Details<span className="vh"> of {s.name}</span> <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "44px" }} data-reveal>
          <a href="/services/" className="btn-gold">
            View All Treatments <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* FEATURED LOCATION */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.locationBanner} data-reveal="zoom">
          <div className={styles.locationBannerImage} />
          <div className={styles.locationBannerScrim} />
          <div className={styles.locationBannerContent}>
            <p className={styles.bannerLabel}>
              <MapPin size={13} /> Featured Location
            </p>
            <h2>
              Best <em>Spa in Mahipalpur</em>
            </h2>
            <p>
              Just 10 minutes from IGI Airport and 2 minutes from Aerocity hotels — discover why Mahipalpur is
              Delhi NCR&apos;s most convenient spa destination.
            </p>
            <a href="/spa-in-mahipalpur/" className="btn-gold">
              Explore Spa in Mahipalpur <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">
            What Makes Us <em>Delhi NCR&apos;s Best</em>
          </h2>
        </div>
        <div className={styles.grid4}>
          {WHY_CHOOSE_US.map((item, i) => (
            <div key={item.title} className={styles.iconCard} data-reveal data-reveal-delay={i * 110}>
              <div className={styles.iconChip}>
                <item.icon size={21} strokeWidth={1.7} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">Inside the Spa</p>
          <h2 className="section-title">
            A Look <em>Around</em>
          </h2>
          <p>Every photograph is taken inside our Defence Enclave premises — no stock imagery, no borrowed interiors.</p>
        </div>
        <div className={styles.galleryStrip}>
          {GALLERY_PREVIEW.map((shot, i) => (
            <a
              key={shot.src}
              href="/gallery/"
              className={styles.galleryTile}
              aria-label={`${shot.alt} — open the full photo gallery`}
              data-reveal
              data-reveal-delay={(i % 4) * 70}
            >
              <Img src={shot.src} alt={shot.alt} width={520} height={520} loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "36px" }} data-reveal>
          <a href="/gallery/" className="btn-outline">
            <Images size={15} /> View Full Gallery
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsInner}>
          <div className={styles.sectionCenterHead} data-reveal>
            <p className="section-label">Client Love</p>
            <h2 className="section-title">
              What Our <em>Clients</em> Say
            </h2>
          </div>
          <div className={styles.testiGrid}>
            {TESTIMONIALS.map((t, i) => (
              <figure key={t.author} className={styles.testiCard} data-reveal data-reveal-delay={i * 130}>
                <Quote size={26} strokeWidth={1.4} />
                <div className={styles.stars} role="img" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
                <figcaption className={styles.testiAuthor}>
                  <span className={styles.testiAvatar} aria-hidden="true">
                    {t.author.charAt(0)}
                  </span>
                  <span className={styles.testiMeta}>
                    <strong>{t.author}</strong>
                    <span>{t.location}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">FAQs</p>
          <h2 className="section-title">
            Frequently Asked <em>Questions</em>
          </h2>
        </div>
        <FaqAccordion faqs={FAQS} />
      </section>

      {/* CTA */}
      <AlsoVisit path={"/"} />

      <section className={styles.ctaSection}>
        <div data-reveal>
          <p className={`section-label ${styles.ctaLabel}`}>Your Time to Relax</p>
          <h2>Book Your Wellness Experience</h2>
          <p>Book your appointment now — we&apos;re open 24/7 and always ready to welcome you.</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              <MessageCircle size={19} /> Book on WhatsApp
            </a>
          </div>
          <p className={styles.ctaCallLine}>
            <PhoneCall size={14} /> Or call us directly: <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
          </p>
        </div>
      </section>

      {/* MAP & ADDRESS */}
      <section className={styles.mapSection}>
        <div data-reveal>
          <p className="section-label" style={{ justifyContent: "center" }}>
            Find Us
          </p>
          <h2 className="section-title">
            Visit <em>Russian Spa Centre</em>
          </h2>
          <p className={styles.mapAddress}>
            <MapPin size={16} strokeWidth={1.8} />
            Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi — 110037
          </p>
        </div>
        <div className={styles.mapFrame} data-reveal="zoom">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            title="Russian Spa Centre Location"
          />
        </div>
        <div className={styles.mapActions} data-reveal>
          <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <Navigation size={15} /> Get Directions
          </a>
          <a href={`tel:${PHONE_E164}`} className="btn-outline">
            <PhoneCall size={15} /> Call the Spa
          </a>
        </div>
      </section>
    </>
  );
}
