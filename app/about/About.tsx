"use client";

import {
  MapPin,
  Plane,
  Building2,
  TreePine,
  PlaneTakeoff,
  Flag,
  Clock,
  Leaf,
  Gem,
  Handshake,
  Lock,
  Trophy,
  Heart,
  Award,
  Check,
  X,
  Target,
  Rocket,
  TrendingUp,
  House,
  Briefcase,
  HeartHandshake as HeartHandshakeIcon,
  PhoneCall,
  ArrowRight,
  Sparkles,
  Users,
  Star,
  Shield,
  Coffee,
  Car,
  Music,
  Shirt,
  CalendarDays,
} from "lucide-react";
import styles from "./About.module.css";

const STATS = [
  { num: "10+", lbl: "Years of Excellence" },
  { num: "350+", lbl: "5-Star Reviews" },
  { num: "90%+", lbl: "Client Retention Rate" },
  { num: "50+", lbl: "Years Combined Expertise" },
];

const MILESTONES = [
  {
    icon: Rocket,
    title: "Humble Beginnings",
    desc: "Started as a small wellness studio in Mahipalpur, built on a simple idea: authentic technique over shortcuts.",
  },
  {
    icon: Flag,
    title: "The Russian Banya Arrives",
    desc: "Became one of the very few spas in Delhi NCR to offer a genuine Russian Banya with imported Venik treatments.",
  },
  {
    icon: Handshake,
    title: "Growing Our Family",
    desc: "Expanded our team to include internationally trained therapists from Russia, Thailand, Sweden, and Japan.",
  },
  {
    icon: TrendingUp,
    title: "Serving All of Delhi NCR",
    desc: "Extended our reach to Aerocity, Dwarka, Vasant Kunj, and travelers passing through IGI Airport.",
  },
  {
    icon: Trophy,
    title: "10+ Years of Excellence",
    desc: "Today, we remain one of the region's most trusted wellness destinations — open 24/7, every single day.",
  },
];

const LOCATIONS = [
  {
    icon: MapPin,
    name: "Spa in Mahipalpur",
    desc: "Our flagship location in the heart of Mahipalpur, just minutes from IGI Airport. The most popular spa destination in the area.",
    distance: "2 min from Mahipalpur Metro",
    link: "/spa-in-mahipalpur/",
  },
  {
    icon: Plane,
    name: "Spa in Aerocity",
    desc: "Luxury wellness for business travelers and hotel guests. Premium facilities with executive packages.",
    distance: "5 min from Aerocity Metro",
    link: "/spa-in-aerocity/",
  },
  {
    icon: Building2,
    name: "Spa in Dwarka",
    desc: "Serving Dwarka sector residents with the same premium quality treatments. Family-friendly environment.",
    distance: "10 min from Dwarka Sector 10",
    link: "/locations/#areas",
  },
  {
    icon: TreePine,
    name: "Spa in Vasant Kunj",
    desc: "Peaceful retreat for South Delhi residents. Surrounded by greenery for added relaxation.",
    distance: "8 min from Vasant Kunj Mall",
    link: "/spa-in-vasant-kunj/",
  },
  {
    icon: PlaneTakeoff,
    name: "Spa Near IGI Airport",
    desc: "Perfect for travelers. Open 24/7 with express treatments for layovers and flight delays.",
    distance: "10 min from T3 Arrival",
    link: "/locations/#travel-times",
  },
  {
    icon: Flag,
    name: "Russian Spa Mahipalpur",
    desc: "Authentic Russian Banya specialists. The only place in Delhi NCR with genuine Venik treatments.",
    distance: "Main Location - Mahipalpur",
    link: "/spa-in-mahipalpur/",
  },
];

const PILLARS = [
  {
    icon: Leaf,
    title: "Authentic Techniques",
    desc: 'We never settle for imitation. Every technique we offer has been mastered through rigorous training from its country of origin. Our Russian Banya follows actual Russian specifications. Our Thai massage is performed by therapists trained in Thai tradition. When you search for "Russian spa in Mahipalpur" — we deliver the real experience.',
  },
  {
    icon: Gem,
    title: "Uncompromising Quality",
    desc: "From the essential oils we use to the thread count of our linens, every detail matters. We use only therapeutic-grade, certified organic products. Our facilities in Aerocity, Dwarka, and Vasant Kunj are maintained to hospital-grade standards with third-party audits.",
  },
  {
    icon: Handshake,
    title: "Personalized Care",
    desc: "Every client receives a consultation before their treatment. We customize pressure, technique, oil blend, and focus areas to your body's specific needs. Whether you need deep tissue massage in Dwarka or a gentle Swedish massage in Aerocity — we adapt to you.",
  },
  {
    icon: Lock,
    title: "Complete Privacy",
    desc: "Privacy is not a feature — it is a foundation. All treatments are conducted in fully private rooms. High-profile clients, diplomats, and executives from nearby Aerocity hotels trust us for our absolute discretion and professionalism.",
  },
  {
    icon: Trophy,
    title: "Continuous Excellence",
    desc: "Our therapists undergo continuous education and training. We invest in advanced techniques, premium product upgrades, and facility improvements every year. Excellence is not a destination — it is an ongoing practice across all our Delhi NCR locations.",
  },
  {
    icon: Heart,
    title: "Community Care",
    desc: "We actively contribute through wellness workshops, corporate stress-relief programs for Aerocity businesses, and special discounts for senior citizens, healthcare workers, and first responders who serve our Mahipalpur and Dwarka communities.",
  },
];

const COMPARISON: [string, boolean, string][] = [
  ["Authentic Russian Banya with Venik", true, "Not offered"],
  ["Internationally Certified Therapists", true, "Varies / Uncertified"],
  ["Open 24/7 Every Day (365 days)", true, "Limited hours"],
  ["Individual Private Treatment Rooms", true, "Curtain partitions / Shared"],
  ["Hospital-Grade Hygiene Standards", true, "Basic cleaning only"],
  ["Personalized Treatment Plans", true, "One-size-fits-all"],
  ["Premium Imported Essential Oils", true, "Cheap synthetic oils"],
  ["Couples Spa Packages Available", true, "Rarely available"],
  ["10 Minutes from Delhi Airport", true, "Far from airport"],
  ["Free Parking for All Guests", true, "Paid / No parking"],
  ["Complimentary Refreshments Included", true, "Not included / Extra charge"],
  ["Easy Online & WhatsApp Booking", true, "Phone call only"],
  ["Transparent Pricing (No Hidden Fees)", true, "Hidden charges common"],
  ["Male & Female Therapists Available", true, "Limited options"],
  ["Senior Citizen & Student Discounts", true, "No discounts offered"],
];

const AUDIENCES = [
  {
    icon: MapPin,
    title: "For Mahipalpur Residents",
    desc: "Located in the heart of Mahipalpur, we are the most convenient spa destination for local residents. Enjoy our 24/7 services, free parking, and special local resident discounts.",
  },
  {
    icon: Building2,
    title: "For Aerocity Hotel Guests",
    desc: "Staying at Andaz, Pullman, JW Marriott, or Holiday Inn? We're just 5 minutes away. Ask your concierge about us or call us for complimentary pickup.",
  },
  {
    icon: House,
    title: "For Dwarka Sector Residents",
    desc: "Dwarka's best-kept wellness secret. Our Dwarka location serves sectors 6-24 with the same premium quality treatments. Special weekday discounts for Dwarka residents.",
  },
  {
    icon: PlaneTakeoff,
    title: "For IGI Airport Travelers",
    desc: "Long layover? Flight delay? We're open 24/7 and just 10 minutes from T3. Express 30-minute treatments available for travelers short on time.",
  },
  {
    icon: Briefcase,
    title: "For Corporate Professionals",
    desc: "Stress relief near your Aerocity office. We offer corporate wellness programs, lunch-break express massages, and group booking discounts for companies.",
  },
  {
    icon: HeartHandshakeIcon,
    title: "For Couples & Families",
    desc: "Private couples suites available. Our spas in Mahipalpur, Aerocity, and Dwarka welcome families with separate male and female therapist options.",
  },
];

const CERTIFICATIONS = [
  "Russian Banya Certified",
  "Thai Massage Practitioner",
  "Swedish Massage Certified",
  "Shiatsu & Meridian Therapy",
  "Aromatherapy Specialist",
  "Sports Massage Certified",
  "Reflexology Practitioner",
  "Deep Tissue Therapist",
  "Hot Stone Therapy Certified",
  "Balinese Massage Expert",
  "Prenatal Massage Certified",
  "Ayurvedic Specialist",
];

const KEYWORDS = [
  "spa in Mahipalpur",
  "spa in Aerocity",
  "spa in Dwarka",
  "spa in Vasant Kunj",
  "spa near IGI Airport",
  "Russian spa Mahipalpur",
  "best spa Delhi NCR",
  "luxury spa Aerocity",
  "massage centre Dwarka",
  "body spa Vasant Kunj",
  "Russian banya near me",
  "spa near Delhi Airport",
  "wellness centre Mahipalpur",
  "couples spa Aerocity",
  "deep tissue massage Dwarka",
  "Swedish massage Mahipalpur",
  "Thai spa Vasant Kunj",
  "hot stone therapy near me",
  "aromatherapy spa Delhi",
  "reflexology centre",
  "sports massage Mahipalpur",
  "pregnancy spa Aerocity",
  "spa for men Dwarka",
  "ladies spa Vasant Kunj",
  "24 hour spa near airport",
  "massage near Aerocity hotels",
  "spa near JW Marriott Aerocity",
  "spa near Pullman Aerocity",
  "Russian Spa Centre",
];

const WHATSAPP_MESSAGE =
  "Hello! I'd like to know more about Russian Spa Centre and book an appointment.";
const WHATSAPP_URL = `https://wa.me/919999999999?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function openWhatsApp() {
  window.open(WHATSAPP_URL, "_blank");
}

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Russian Spa Centre",
  url: "https://russianspacenter.com/about/",
  description:
    "Discover why Russian Spa Centre is the most trusted spa in Mahipalpur, Aerocity, Dwarka, Vasant Kunj & near IGI Airport. 10+ years of excellence, certified therapists, authentic Russian Banya, open 24/7.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Russian Spa Centre Mahipalpur",
    image: "https://russianspacenter.com/logo.png",
    telephone: "+91 9999999999",
    priceRange: "₹2000-₹15000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur",
      addressLocality: "New Delhi",
      postalCode: "110037",
      addressCountry: "IN",
    },
    url: "https://russianspacenter.com",
    openingHours: "Mo-Su 00:00-23:59",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "350",
    },
    areaServed: ["Mahipalpur", "Aerocity", "Dwarka", "Vasant Kunj", "IGI Airport, New Delhi"],
  },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>Our Story</div>
          <h1>
            Delhi NCR&apos;s Most <em>Trusted</em> Wellness Destination
          </h1>
          <p className={styles.heroText}>
            For over a decade, Russian Spa Centre has been the premier choice for authentic spa experiences across
            Mahipalpur, Aerocity, Dwarka, Vasant Kunj, and near IGI Airport. We brought the authentic Russian Banya
            tradition to India and built a loyal community of thousands around it.
          </p>
          <p className={styles.heroText}>
            Whether you&apos;re looking for the best spa in Mahipalpur, a luxury massage centre in Aerocity, or a
            relaxing body spa in Dwarka — we&apos;re your trusted wellness partner, open 24/7 every single day.
          </p>
          <div className={styles.heroStats}>
            {STATS.map((s, i) => (
              <div key={i} className={styles.heroStat} data-reveal data-reveal-delay={(i % 4) * 80}>
                <span className={styles.num}>{s.num}</span>
                <span className={styles.label}>{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className={styles.missionSection}>
        <div className={styles.missionInner}>
          <div className={styles.missionIcon}>
            <Target size={26} strokeWidth={1.8} />
          </div>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Our Mission
          </div>
          <p>
            To make world-class, <em>authentic</em> wellness accessible to everyone across Delhi NCR — combining
            genuine international techniques, certified expertise, and hospital-grade hygiene, every day of the
            year, for every guest who walks through our doors.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">
              More Than a Spa.
              <br />
              <em>A Wellness Philosophy.</em>
            </h2>
            <div className="divider" />
          </div>
          <div>
            <p>
              At Russian Spa Centre, we view spa treatments not as luxury indulgences but as essential components of
              a healthy lifestyle. Our holistic philosophy addresses physical tension, mental stress, and emotional
              wellbeing simultaneously — because true wellness is all three at once. As the leading spa in Mahipalpur
              and Aerocity, we&apos;ve served over 10,000+ satisfied clients from across Delhi NCR and international
              travelers passing through IGI Airport.
            </p>
            <p>
              We are one of the very few establishments in all of Delhi NCR to offer a genuine Russian Banya
              experience, complete with traditional Venik treatments using imported birch leaves. This centuries-old
              ritual was meticulously recreated at our facility according to authentic Russian specifications. Our
              spa near Delhi Airport has become a favorite among frequent flyers seeking rejuvenation during
              layovers.
            </p>
            <p>
              Our therapists are not just service providers — they are healing artists trained across Russia,
              Thailand, Sweden, and Japan, bringing the world&apos;s finest wellness traditions to the heart of
              Delhi. Whether you need a relaxing Swedish massage in Mahipalpur, deep tissue therapy in Dwarka, or a
              romantic couples spa in Aerocity, our team delivers excellence every time.
            </p>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY / MILESTONES */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionCenterHead} data-reveal>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Our Journey
          </div>
          <h2 className="section-title">
            A Decade of <em>Growth &amp; Trust</em>
          </h2>
          <p>From a single wellness studio to Delhi NCR&apos;s most trusted spa brand.</p>
        </div>
        <div className={styles.timelineGrid}>
          {MILESTONES.map((m, i) => (
            <div key={i} className={styles.timelineStep} data-reveal data-reveal-delay={(i % 4) * 80}>
              <div className={styles.timelineNum}>
                <m.icon size={24} strokeWidth={1.8} />
              </div>
              <h4>{m.title}</h4>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATIONS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className="section-label">Our Locations</div>
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Serving <em>All of Delhi NCR</em>
        </h2>
        <p style={{ color: "var(--muted)", marginTop: "16px", marginBottom: "40px" }}>
          Conveniently located near major Delhi NCR hubs — always within 15-20 minutes from wherever you are.
        </p>
        <div className={styles.grid3}>
          {LOCATIONS.map((loc, i) => (
            <div key={i} className={styles.iconCard} data-reveal data-reveal-delay={(i % 4) * 80}>
              <div className={styles.iconChip}>
                <loc.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{loc.name}</h3>
              <p>{loc.desc}</p>
              <div className={styles.locationDistance}>
                <Clock size={12} strokeWidth={2} />
                {loc.distance}
              </div>
              {loc.link ? (
                <a href={loc.link} className={styles.locationLink}>
                  Learn More <ArrowRight size={13} />
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className="section-label">Our Commitments</div>
        <h2 className="section-title" style={{ marginBottom: "40px" }}>
          What We Stand <em>For</em>
        </h2>
        <div className={styles.grid3col}>
          {PILLARS.map((p, i) => (
            <div key={i} className={styles.iconCard} style={{ textAlign: "left" }}>
              <div className={styles.iconChip} style={{ margin: "0 0 16px" }}>
                <p.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className="section-label">Comparison</div>
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Why We&apos;re <em>Different</em>
        </h2>
        <p style={{ color: "var(--muted)", marginTop: "12px", marginBottom: "32px" }}>
          Compare Russian Spa Centre with other massage centres in Mahipalpur, Aerocity, and Dwarka:
        </p>
        <div className={styles.compareWrap}>
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Russian Spa Centre</th>
                <th>Other Spas in Mahipalpur/Aerocity</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map(([feat, us, them], i) => (
                <tr key={i}>
                  <td>{feat}</td>
                  <td>
                    {us ? (
                      <Check size={18} className={styles.checkIcon} />
                    ) : (
                      <X size={18} className={styles.crossIcon} />
                    )}
                  </td>
                  <td>{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.compareNote}>
          * Comparison based on surveys of 20+ spa and massage centres in Mahipalpur, Aerocity, Dwarka, and Vasant
          Kunj areas (2025 data).
        </p>
      </section>

      {/* WHY CHOOSE US - AUDIENCE SPECIFIC */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className="section-label">Why Choose Us</div>
        <h2 className="section-title" style={{ marginBottom: "32px" }}>
          Best Spa in <em>Mahipalpur, Aerocity &amp; Dwarka</em>
        </h2>
        <div className={styles.audienceGrid}>
          {AUDIENCES.map((item, i) => (
            <div key={i} className={styles.audienceCard} data-reveal data-reveal-delay={(i % 4) * 80}>
              <div className={styles.audienceIconChip}>
                <item.icon size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM CERTIFICATIONS */}
      <section className={styles.teamSection}>
        <div className={styles.teamInner}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Our Team
          </div>
          <h2 className="section-title">
            Trained Across the <em>World</em>
          </h2>
          <p>
            Our therapists hold certifications from recognized institutions across Russia, Thailand, Sweden, and
            India. Continuous education is mandatory — because the best in wellness never stop learning. All
            therapists are available across our Mahipalpur, Aerocity, Dwarka, and Vasant Kunj locations.
          </p>
          <div className={styles.certifications}>
            {CERTIFICATIONS.map((c, i) => (
              <div key={i} className={styles.certBadge} data-reveal data-reveal-delay={(i % 4) * 80}>
                <Award size={13} strokeWidth={2} />
                {c}
              </div>
            ))}
          </div>
          <div className={styles.teamActions}>
            <a href="/services/" className="btn-gold">
              View Our Services
            </a>
            <button type="button" className="btn-outline" onClick={openWhatsApp}>
              Book via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* VALUES / WHAT MAKES US SPECIAL - Additional unique content */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className="section-label">Our Values</div>
        <h2 className="section-title" style={{ marginBottom: "40px" }}>
          What Makes Us <em>Special</em>
        </h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIconChip}>
              <Users size={22} strokeWidth={1.8} />
            </div>
            <h4>Client First Philosophy</h4>
            <p>Every decision we make starts with one question: &ldquo;What&apos;s best for our client?&rdquo; This client-first approach drives our service standards, pricing, and facility upgrades across all locations.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIconChip}>
              <Star size={22} strokeWidth={1.8} />
            </div>
            <h4>Excellence Without Compromise</h4>
            <p>We never cut corners on quality. From the oils we use to the training our therapists receive, we maintain uncompromising standards. Our 350+ 5-star reviews reflect this commitment.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIconChip}>
              <Shield size={22} strokeWidth={1.8} />
            </div>
            <h4>Trust &amp; Transparency</h4>
            <p>No hidden fees, no upselling pressure, no surprises. Our transparent pricing and honest communication have made us the most trusted spa brand in Mahipalpur, Aerocity, and Dwarka.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIconChip}>
              <Heart size={22} strokeWidth={1.8} />
            </div>
            <h4>Community First</h4>
            <p>We believe in giving back. Through corporate wellness programs, senior citizen discounts, and community health initiatives, we make wellness accessible to everyone in Delhi NCR.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIconChip}>
              <Coffee size={22} strokeWidth={1.8} />
            </div>
            <h4>Warm Hospitality</h4>
            <p>From the moment you walk in, you&apos;re treated like family. Complimentary tea, warm smiles, and genuine care — because wellness begins with feeling welcome.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIconChip}>
              <CalendarDays size={22} strokeWidth={1.8} />
            </div>
            <h4>Always Open, Always Ready</h4>
            <p>24 hours a day, 7 days a week, 365 days a year. Whether it&apos;s 3 AM after a late flight or 6 AM before a busy day — we&apos;re here for you.</p>
          </div>
        </div>
      </section>

      {/* KEYWORD CLOUD for SEO */}
      <div className={styles.keywordCloud}>
        {KEYWORDS.map((kw, i) => (
          <span key={i} className={styles.keywordPill}>
            {kw}
          </span>
        ))}
      </div>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="section-label" style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.22)", color: "#fff" }}>
          Book Your Experience
        </div>
        <h2>
          Experience the <em>Russian Spa Centre</em> Difference
        </h2>
        <p>Visit our spa in Mahipalpur, Aerocity, Dwarka, or Vasant Kunj. Open 24/7 — we&apos;re always here for you.</p>
        <div className={styles.ctaActions}>
          <a href="tel:+919999999999" className="btn-gold">
            <PhoneCall size={15} /> Call Now: +91 9999999999
          </a>
          <button type="button" className="btn-outline" onClick={openWhatsApp}>
            <Sparkles size={15} /> Book via WhatsApp
          </button>
        </div>
        <p className={styles.ctaCallLine}>
          <Sparkles size={14} /> 15% off for first-time visitors
        </p>
      </section>
    </>
  );
}