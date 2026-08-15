"use client";

import {
  Check,
  Clock,
  PhoneCall,
  MessageCircle,
  ArrowRight,
  Sparkles,
  BadgePercent,
  ShieldCheck,
  Wallet,
  ReceiptText,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";
import { PHONE_DISPLAY, PHONE_E164, waLink } from "../lib/site";
import styles from "../styles/page.module.css";
import { OFFERS, PACKAGES, PRICING_FAQS, RATE_GROUPS } from "./data";

const HERO_STATS = [
  { value: "₹2,200", label: "Sessions From" },
  { value: "0", label: "Hidden Charges" },
  { value: "15%", label: "First Visit Off" },
  { value: "24/7", label: "Same Rate, Any Hour" },
];

const PROMISES = [
  { icon: ReceiptText, title: "Taxes Included", desc: "Every published price is the final price. Nothing is added at the counter." },
  { icon: Wallet, title: "Pay After Your Session", desc: "No prepayment for standard bookings. Cash, card and UPI all accepted." },
  { icon: BadgePercent, title: "Same Rate at 3 AM", desc: "We never apply a night surcharge. Open 24/7 at one honest price." },
  { icon: ShieldCheck, title: "No Upsell Pressure", desc: "Your therapist recommends, never pushes. Add-ons are always optional." },
];

const KEYWORDS = [
  "spa price list Mahipalpur",
  "body massage price in Delhi",
  "Russian Banya price Delhi",
  "massage cost near IGI Airport",
  "couples spa package price Delhi",
  "cheap spa in Mahipalpur",
  "affordable massage Aerocity",
  "spa membership Delhi NCR",
  "full body massage rate Dwarka",
  "deep tissue massage price Delhi",
  "spa offers Mahipalpur",
  "massage discount Vasant Kunj",
];

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function Pricing() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div
          className={styles.heroImage}
          style={{ backgroundImage: "url('/home_images/mahipalpurspa7.jpg')" }}
        />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <p className={styles.heroBadge}>
            <Sparkles size={13} /> Transparent Pricing · No Hidden Fees
          </p>
          <h1>
            Spa &amp; Massage <em>Price List</em>, Mahipalpur
          </h1>
          <p className={styles.heroText}>
            Every treatment, every duration, every rate — published in full. Taxes are included, there is no night
            surcharge, and the price you are quoted on the phone is the price you pay at the counter. Rates apply
            across Mahipalpur, Aerocity, Dwarka and Vasant Kunj.
          </p>
          <div className={styles.heroActions}>
            <a href={`tel:${PHONE_E164}`} className="btn-gold">
              <PhoneCall size={15} /> Call {PHONE_DISPLAY}
            </a>
            <a href="/services/" className="btn-outline">
              Browse Treatments <ArrowRight size={15} />
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

      <Breadcrumb items={[{ label: "Pricing" }]} />

      {/* PACKAGES */}
      <section className={styles.section} id="packages">
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">Ways to Book</p>
          <h2 className="section-title">
            Pick What <em>Suits You</em>
          </h2>
          <p>
            Come once, come regularly, or bring your team. All three routes get the same therapists, the same rooms
            and the same standards.
          </p>
        </div>
        <div className={styles.priceGrid}>
          {PACKAGES.map((pkg, i) => (
            <article
              key={pkg.name}
              className={`${styles.priceCard} ${pkg.featured ? styles.priceCardFeatured : ""}`}
              data-reveal
              data-reveal-delay={i * 90}
            >
              {pkg.featured ? (
                <p className={styles.priceBadge}>
                  <Sparkles size={11} /> Most Booked
                </p>
              ) : null}
              <h3>{pkg.name}</h3>
              <p>{pkg.tagline}</p>
              <p className={styles.priceAmount}>
                <strong>{pkg.price}</strong>
                <span>{pkg.unit}</span>
              </p>
              <ul className={styles.priceFeatures}>
                {pkg.features.map((f) => (
                  <li key={f}>
                    <Check size={15} strokeWidth={2.6} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className={styles.priceCardFoot}>
                <a
                  href={waLink(`Hi! I'd like to book the ${pkg.name} option at Russian Spa Centre.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pkg.featured ? "btn-outline" : "btn-gold"}
                >
                  Book This <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RATE TABLES */}
      <section className={styles.band} id="rates">
        <div className={styles.bandInner}>
          <div className={styles.sectionCenterHead} data-reveal>
            <p className="section-label">Full Rate Card</p>
            <h2 className="section-title">
              Every Treatment, <em>Every Price</em>
            </h2>
            <p>
              Prices are per person and include a private room, robe, shower access, fresh linens and herbal tea.
              Add-on rates apply when combined with a full treatment.
            </p>
          </div>

          {RATE_GROUPS.map((group, gi) => (
            <div
              key={group.id}
              id={group.id}
              style={{ marginTop: gi === 0 ? 0 : "44px" }}
              data-reveal
            >
              <h3 className="section-title" style={{ fontSize: "clamp(1.4rem, 1rem + 1.6vw, 1.9rem)" }}>
                {group.title}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.88rem", margin: "10px 0 20px", lineHeight: 1.75 }}>
                {group.blurb}
              </p>
              <div className={styles.tableWrap}>
                <table className={styles.rateTable}>
                  <caption className={styles.visuallyHidden}>
                    {group.title} rates at Russian Spa Centre, Mahipalpur
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Treatment</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rates.map((rate) => (
                      <tr key={rate.name}>
                        <th scope="row">
                          {rate.name}
                          <span style={{ display: "block", fontWeight: 400, fontSize: "0.79rem", color: "var(--muted)", marginTop: "3px" }}>
                            {rate.desc}
                          </span>
                        </th>
                        <td style={{ whiteSpace: "nowrap" }}>{rate.duration}</td>
                        <td className={styles.ratePrice}>{inr(rate.price)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <p className={styles.tableNote}>
            All prices are in Indian Rupees and inclusive of applicable taxes. Rates were last reviewed in January
            2026 and may change without notice — please confirm on the phone when you book. Group bookings of six or
            more and corporate contracts are quoted separately.
          </p>
        </div>
      </section>

      {/* OFFERS */}
      <section className={styles.section} id="offers">
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">Current Offers</p>
          <h2 className="section-title">
            Ways to <em>Pay Less</em>
          </h2>
          <p>Offers cannot be combined with each other or with membership pricing. Just mention one when booking.</p>
        </div>
        <div className={styles.grid2}>
          {OFFERS.map((offer, i) => (
            <article
              key={offer.title}
              className={`${styles.iconCard} ${styles.iconCardLeft}`}
              data-reveal
              data-reveal-delay={(i % 2) * 90}
            >
              <div className={styles.iconChip}>
                <BadgePercent size={22} strokeWidth={1.8} />
              </div>
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PRICING PROMISES */}
      <section className={`${styles.section} ${styles.sectionTight}`} id="promise">
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">Our Pricing Promise</p>
          <h2 className="section-title">
            What You <em>Won&apos;t</em> Be Charged For
          </h2>
        </div>
        <div className={styles.grid4}>
          {PROMISES.map((item, i) => (
            <div key={item.title} className={styles.iconCard} data-reveal data-reveal-delay={i * 90}>
              <div className={styles.iconChip}>
                <item.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionTight}`} id="faq">
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">FAQs</p>
          <h2 className="section-title">
            Pricing <em>Questions</em>
          </h2>
        </div>
        <FaqAccordion faqs={PRICING_FAQS} />
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div data-reveal>
          <p className={`section-label ${styles.ctaLabel}`}>Book Your Slot</p>
          <h2>Ready to Book at These Rates?</h2>
          <p>
            Send us the treatment and the time — we confirm within minutes, any hour of the day or night. First-time
            guests get 15% off.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={waLink("Hi! I'd like to book a treatment. Please confirm the price and availability.")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <MessageCircle size={19} /> Book on WhatsApp
            </a>
          </div>
          <p className={styles.ctaCallLine}>
            <Clock size={14} /> Open 24 hours · <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
          </p>
        </div>
      </section>

      {/* KEYWORDS */}
      <div className={styles.keywordCloud} style={{ paddingTop: "clamp(48px, 7vw, 84px)" }}>
        {KEYWORDS.map((kw) => (
          <span key={kw} className={styles.keywordPill}>
            {kw}
          </span>
        ))}
      </div>
    </>
  );
}
