"use client";

import { useState, type FormEvent } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Car,
  Navigation,
  Send,
  Info,
  Sparkles,
  PhoneCall,
  Route,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";
import {
  ADDRESS,
  DIRECTIONS_URL,
  EMAIL,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  waLink,
} from "../lib/site";
import styles from "../styles/page.module.css";
import { CONTACT_FAQS, REACH_US } from "./data";

const HERO_STATS = [
  { value: "24/7", label: "Reachable" },
  { value: "10 min", label: "From IGI T3" },
  { value: "Free", label: "Parking" },
  { value: "<5 min", label: "Reply on WhatsApp" },
];

/** Every way to reach the spa, rendered from one list rather than six blocks. */
const CHANNELS: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  note: string;
}[] = [
  {
    icon: Phone,
    label: "Phone",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_E164}`,
    note: "Answered 24 hours a day, including holidays",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: `Message ${PHONE_DISPLAY}`,
    href: waLink("Hello! I'd like to book an appointment at Russian Spa Centre."),
    external: true,
    note: "Typical reply in under five minutes",
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    note: "Corporate bookings, invoices and GST documentation",
  },
  {
    icon: MapPin,
    label: "Address",
    value: `${ADDRESS.street}, ${ADDRESS.locality} — ${ADDRESS.postalCode}`,
    note: "On the Mahipalpur side of NH-8, adjoining Aerocity",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "Open 24 hours · 7 days a week",
    note: "365 days a year, with no night surcharge",
  },
  {
    icon: Car,
    label: "Parking",
    value: "Free on-site parking",
    note: "No time limit for the duration of your treatment",
  },
];

const TREATMENTS = [
  "Russian Banya with Venik",
  "Swedish Massage",
  "Deep Tissue Massage",
  "Thai Massage",
  "Aromatherapy Massage",
  "Hot Stone Therapy",
  "Couples Spa Suite",
  "Royal Signature Ritual",
  "Airport Layover Express",
  "Not sure — please advise",
];

const KEYWORDS = [
  "contact spa in Mahipalpur",
  "spa phone number Delhi",
  "book massage near IGI Airport",
  "spa address Mahipalpur",
  "24 hour spa contact Delhi",
  "massage booking Aerocity",
  "spa near Aerocity hotels",
  "spa directions Mahipalpur",
  "WhatsApp spa booking Delhi",
  "spa near Dwarka contact",
];

type Errors = Partial<Record<"name" | "phone" | "treatment", string>>;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    when: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const set = (key: keyof typeof form) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  /**
   * The site is a static export, so there is no server to POST to. Rather than
   * fake a form endpoint, the form composes the enquiry and hands it to
   * WhatsApp — the channel the business actually books on.
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!/^[\d\s+()-]{8,}$/.test(form.phone.trim())) next.phone = "Please enter a phone number we can reach you on.";
    if (!form.treatment) next.treatment = "Please choose a treatment.";

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    const message = [
      "Hello Russian Spa Centre, I'd like to book an appointment.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Treatment: ${form.treatment}`,
      form.when.trim() ? `Preferred time: ${form.when.trim()}` : null,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div
          className={styles.heroImage}
          style={{ backgroundImage: "url('/home_images/mahipalpurspa11.jpg')" }}
        />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <p className={styles.heroBadge}>
            <Sparkles size={13} /> Open 24 Hours · Every Day
          </p>
          <h1>
            <em>Contact</em> Russian Spa Centre, Mahipalpur
          </h1>
          <p className={styles.heroText}>
            Call, message or walk in — we answer at every hour of the day and night. We&apos;re at Defence Enclave in
            Mahipalpur, ten minutes from IGI Airport Terminal 3 and five minutes from the Aerocity hotels, with free
            parking on site.
          </p>
          <div className={styles.heroActions}>
            <a href={`tel:${PHONE_E164}`} className="btn-gold">
              <PhoneCall size={15} /> Call {PHONE_DISPLAY}
            </a>
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Navigation size={15} /> Get Directions
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

      <Breadcrumb items={[{ label: "Contact" }]} />

      {/* CONTACT DETAILS + FORM */}
      <section className={styles.section} id="reach-us">
        <div className={styles.contactGrid}>
          <div data-reveal="left">
            <p className="section-label">Get in Touch</p>
            <h2 className="section-title">
              Every Way to <em>Reach Us</em>
            </h2>
            <div className="divider" />
            <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.85, marginBottom: "26px" }}>
              The fastest route is WhatsApp or a phone call — both are answered within minutes at any hour. Email is
              best for corporate enquiries and invoices.
            </p>

            <div className={styles.channelList}>
              {CHANNELS.map((channel, i) => (
                <div key={channel.label} className={styles.contactCard} data-reveal data-reveal-delay={i * 60}>
                  <span className={styles.serviceIconChip}>
                    <channel.icon size={20} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3>{channel.label}</h3>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <p>{channel.value}</p>
                    )}
                    <small>{channel.note}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOOKING FORM */}
          <div className={styles.formCard} id="book" data-reveal="right">
            <h2>Request an Appointment</h2>
            <p className={styles.formIntro}>
              Fill this in and we&apos;ll open WhatsApp with your details ready to send. You can edit the message
              before it goes — nothing is submitted until you press send there.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Vikram Singh"
                    value={form.name}
                    onChange={(e) => set("name")(e.target.value)}
                    className={errors.name ? styles.fieldError : undefined}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name ? (
                    <span id="name-error" className={styles.errorText}>
                      {errors.name}
                    </span>
                  ) : null}
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="e.g. +91 98xxxxxxxx"
                    value={form.phone}
                    onChange={(e) => set("phone")(e.target.value)}
                    className={errors.phone ? styles.fieldError : undefined}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone ? (
                    <span id="phone-error" className={styles.errorText}>
                      {errors.phone}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="treatment">Treatment</label>
                <select
                  id="treatment"
                  name="treatment"
                  value={form.treatment}
                  onChange={(e) => set("treatment")(e.target.value)}
                  className={errors.treatment ? styles.fieldError : undefined}
                  aria-invalid={Boolean(errors.treatment)}
                  aria-describedby={errors.treatment ? "treatment-error" : undefined}
                >
                  <option value="">Choose a treatment…</option>
                  {TREATMENTS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.treatment ? (
                  <span id="treatment-error" className={styles.errorText}>
                    {errors.treatment}
                  </span>
                ) : null}
              </div>

              <div className={styles.field}>
                <label htmlFor="when">Preferred Day &amp; Time (optional)</label>
                <input
                  id="when"
                  name="when"
                  type="text"
                  placeholder="e.g. Saturday around 8 PM, or as soon as possible"
                  value={form.when}
                  onChange={(e) => set("when")(e.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="notes">Anything We Should Know? (optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="Pressure preference, problem areas, therapist preference, allergies…"
                  value={form.notes}
                  onChange={(e) => set("notes")(e.target.value)}
                />
              </div>

              <button type="submit" className={`btn-gold ${styles.submitBtn}`}>
                <Send size={15} /> Continue on WhatsApp
              </button>

              <p className={styles.formNote}>
                <Info size={14} />
                In a hurry? Call <a href={`tel:${PHONE_E164}`} style={{ color: "var(--brand-600)", fontWeight: 600 }}>{PHONE_DISPLAY}</a>{" "}
                instead — we answer round the clock and can usually start within 20 minutes of a walk-in.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* HOW TO REACH US */}
      <section className={styles.band} id="directions">
        <div className={styles.bandInner}>
          <div className={styles.sectionCenterHead} data-reveal>
            <p className="section-label">Travel Times</p>
            <h2 className="section-title">
              How Long It Takes to <em>Get Here</em>
            </h2>
            <p>Typical off-peak driving times to Defence Enclave, Mahipalpur. Add 10–15 minutes in rush hour.</p>
          </div>
          <div className={styles.grid3}>
            {REACH_US.map((row, i) => (
              <article
                key={row.from}
                className={`${styles.iconCard} ${styles.iconCardLeft}`}
                data-reveal
                data-reveal-delay={(i % 3) * 90}
              >
                <div className={styles.iconChip}>
                  <Route size={22} strokeWidth={1.8} />
                </div>
                <h3>{row.from}</h3>
                <p>{row.note}</p>
                <p className={styles.cardMeta}>
                  <Clock size={12} strokeWidth={2} /> {row.time} by road
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className={styles.section} id="map">
        <div data-reveal>
          <p className="section-label">Find Us</p>
          <h2 className="section-title">
            Visit <em>Russian Spa Centre</em>
          </h2>
          <p className={styles.mapAddress}>
            <MapPin size={16} strokeWidth={1.8} />
            {ADDRESS.street}, {ADDRESS.locality} — {ADDRESS.postalCode}
          </p>
        </div>
        <div className={styles.mapFrame} data-reveal="zoom">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing Russian Spa Centre at Defence Enclave, Mahipalpur, New Delhi"
          />
        </div>
        <div className={styles.mapActions} data-reveal>
          <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <Navigation size={15} /> Open in Google Maps
          </a>
          <a href={`tel:${PHONE_E164}`} className="btn-outline">
            <PhoneCall size={15} /> Call the Spa
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionTight}`} id="faq">
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">FAQs</p>
          <h2 className="section-title">
            Before You <em>Visit</em>
          </h2>
        </div>
        <FaqAccordion faqs={CONTACT_FAQS} />
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div data-reveal>
          <p className={`section-label ${styles.ctaLabel}`}>We&apos;re Awake</p>
          <h2>Whatever the Hour, We&apos;ll Pick Up</h2>
          <p>
            3 AM after a delayed flight or 6 AM before a long day — the phone is answered and a therapist is ready.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={waLink("Hello! I'd like to book an appointment at Russian Spa Centre.")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <MessageCircle size={19} /> Message on WhatsApp
            </a>
          </div>
          <p className={styles.ctaCallLine}>
            <PhoneCall size={14} /> Or call: <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
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
