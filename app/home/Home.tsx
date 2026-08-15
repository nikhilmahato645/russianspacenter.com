"use client";

import { useState } from "react";
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
  ChevronDown,
  PhoneCall,
  MapPin,
  MessageCircle,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Plane,
  ShieldCheck,
  Navigation,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./Home.module.css";

const SERVICES = [
  { icon: Flame, name: "Russian Banya Experience", desc: "Traditional Venik Treatment" },
  { icon: WavesLadder, name: "Swedish Massage", desc: "Classic Relaxation Therapy" },
  { icon: Dumbbell, name: "Deep Tissue Massage", desc: "Chronic Pain Relief" },
  { icon: Hand, name: "Thai Massage", desc: "Ancient Energy Work" },
  { icon: Flower2, name: "Aromatherapy Massage", desc: "Healing Essential Oils" },
  { icon: HeartHandshake, name: "Couples Spa Package", desc: "Romantic Experience for Two" },
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
const WHATSAPP_URL = `https://wa.me/919999999999?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Defence+Enclave,+Mahipalpur,+New+Delhi+110037";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Sparkles size={13} /> Delhi NCR&apos;s Premier Spa
          </div>
          <h1>
            Russian Spa Centre
            <br />
            <em>Luxury Spa &amp; Massage</em> Near IGI Airport
          </h1>
          <p className={styles.heroText}>
            Experience authentic Russian Banya, luxury body massage, and world-class wellness therapies in
            Mahipalpur, Delhi NCR. Certified therapists, private rooms, open 24/7.
          </p>
          <div className={styles.heroActions}>
            <a href="tel:+919999999999" className="btn-gold">
              <PhoneCall size={15} /> Call +91 9999999999
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <MessageCircle size={15} /> Book via WhatsApp
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

        <a href="#services" className={styles.scrollCue} aria-label="Scroll to services">
          Scroll
          <ArrowDown size={16} />
        </a>
      </section>

      {/* TRUST STRIP */}
      <div className={styles.trustStrip}>
        <div className={styles.trustInner}>
          {TRUST_POINTS.map((point, i) => (
            <div key={point.label} className={styles.trustItem} data-reveal data-reveal-delay={i * 70}>
              <point.icon size={18} strokeWidth={1.9} />
              {point.label}
            </div>
          ))}
        </div>
      </div>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* INTRO / ABOUT TEASER */}
      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div data-reveal="left">
            <div className="section-label">Who We Are</div>
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
            <a href="/about/" className="btn-outline" style={{ marginTop: "8px" }}>
              About Us <ArrowRight size={15} />
            </a>
          </div>
          <div className={styles.featureGrid}>
            {WHY_CHOOSE_US.slice(0, 4).map((item, i) => (
              <div key={i} className={styles.iconCard} data-reveal data-reveal-delay={i * 90}>
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

      {/* SERVICES TEASER */}
      <section id="services" className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionCenterHead} data-reveal>
          <div className="section-label">Our Treatments</div>
          <h2 className="section-title">
            Signature <em>Spa Services</em>
          </h2>
          <p>
            From authentic Russian Banya to specialized therapeutic massage — every treatment is customized to your
            body by certified therapists.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {SERVICES.map((s, i) => (
            <div key={i} className={styles.serviceCard} data-reveal data-reveal-delay={(i % 3) * 90}>
              <div className={styles.serviceIconChip}>
                <s.icon size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }} data-reveal>
          <a href="/spa-in-mahipalpur/" className="btn-gold">
            View All Services <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* FEATURED LOCATION */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.locationBanner} data-reveal="zoom">
          <div className={styles.locationBannerImage} />
          <div className={styles.locationBannerScrim} />
          <div className={styles.locationBannerContent}>
            <div className={styles.bannerLabel}>
              <MapPin size={13} /> Featured Location
            </div>
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
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">
            What Makes Us <em>Delhi NCR&apos;s Best</em>
          </h2>
        </div>
        <div className={styles.grid4}>
          {WHY_CHOOSE_US.map((item, i) => (
            <div key={i} className={styles.iconCard} data-reveal data-reveal-delay={i * 90}>
              <div className={styles.iconChip}>
                <item.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsInner}>
          <div className={styles.sectionCenterHead} data-reveal>
            <div className="section-label">Client Love</div>
            <h2 className="section-title">
              What Our <em>Clients</em> Say
            </h2>
          </div>
          <div className={styles.testiGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={styles.testiCard} data-reveal data-reveal-delay={i * 110}>
                <Quote size={26} strokeWidth={1.5} />
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
                <div className={styles.testiAuthor}>
                  <span className={styles.testiAvatar} aria-hidden="true">
                    {t.author.charAt(0)}
                  </span>
                  <span className={styles.testiMeta}>
                    <strong>{t.author}</strong>
                    <span>{t.location}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className={styles.sectionCenterHead} data-reveal>
          <div className="section-label">FAQs</div>
          <h2 className="section-title">
            Frequently Asked <em>Questions</em>
          </h2>
        </div>
        <div className={styles.faqInner}>
          <div className={styles.faqList}>
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
                  data-reveal
                  data-reveal-delay={i * 70}
                >
                  <button
                    type="button"
                    className={`${styles.faqQuestion} ${isOpen ? styles.faqQuestionOpen : ""}`}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {faq.q}
                    <ChevronDown size={18} strokeWidth={2} />
                  </button>
                  <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}>
                    <div>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div data-reveal>
          <div className="section-label" style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}>
            Book Your Experience
          </div>
          <h2>Ready for the Best Spa Experience?</h2>
          <p>Book your appointment now — we&apos;re open 24/7 and always ready to welcome you.</p>
          <div className={styles.ctaActions}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              <MessageCircle size={19} /> Book on WhatsApp
            </a>
          </div>
          <p className={styles.ctaCallLine}>
            <PhoneCall size={14} /> Or call us directly: <a href="tel:+919999999999">+91 9999999999</a>
          </p>
        </div>
      </section>

      {/* MAP & ADDRESS */}
      <section className={styles.mapSection}>
        <div data-reveal>
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
          <a href="tel:+919999999999" className="btn-outline">
            <PhoneCall size={15} /> Call the Spa
          </a>
        </div>
      </section>
    </>
  );
}
