import {
  MapPin,
  Navigation,
  Clock,
  PhoneCall,
  MessageCircle,
  ArrowRight,
  TrainFront,
  Car,
  Plane,
  BedDouble,
  Sparkles,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";
import {
  ADDRESS,
  DIRECTIONS_URL,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  waLink,
} from "../lib/site";
import AlsoVisit from "../components/AlsoVisit";
import styles from "../styles/page.module.css";
import { AREAS, HOTELS, LOCATION_FAQS } from "./data";
import Img from "../components/Img";

/** The area count is derived so adding a catchment to `AREAS` cannot leave a stale number here. */
const HERO_STATS = [
  { value: "1", label: "Premises, Mahipalpur" },
  { value: String(AREAS.length), label: "Areas Served" },
  { value: "10 min", label: "From IGI T3" },
  { value: "24/7", label: "Doors Open" },
];

const TRANSPORT = [
  {
    icon: Plane,
    title: "Arriving by air",
    desc: "Take any prepaid or app cab from arrivals and ask for Defence Enclave, Mahipalpur. Call us when you land and we will talk your driver in to the exact gate — it saves the usual five minutes of circling.",
  },
  {
    icon: TrainFront,
    title: "Arriving by metro",
    desc: "Mahipalpur is a two to three minute walk from us. From the Airport Express Line, get off at Aerocity and take a five-minute auto across NH-8.",
  },
  {
    icon: Car,
    title: "Arriving by car",
    desc: "Free on-site parking with no time limit while you are in treatment. Coming along NH-8 from Gurgaon, take the Mahipalpur exit and turn into Defence Enclave before the hotel strip.",
  },
];


export default function Locations() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div
          className={styles.heroImage}
          style={{ backgroundImage: "url('/spa-in-mahipalpur/image1.jpg')" }}
        />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <p className={styles.heroBadge}>
            <MapPin size={13} /> Defence Enclave, Mahipalpur
          </p>
          <h1>
            Where to Find Us <em>Across Delhi NCR</em>
          </h1>
          <p className={styles.heroText}>
            One spa, in Mahipalpur — and it sits inside a fifteen-minute drive of Aerocity, IGI Airport, Vasant Kunj
            and Dwarka. Below are honest travel times from each area, the hotels we&apos;re nearest to, and exactly
            how to reach our door by air, metro or car.
          </p>
          <div className={styles.heroActions}>
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <Navigation size={15} /> Get Directions
            </a>
            <a href={`tel:${PHONE_E164}`} className="btn-outline">
              <PhoneCall size={15} /> Call {PHONE_DISPLAY}
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

      <Breadcrumb items={[{ label: "Locations" }]} />

      {/* AREAS SERVED */}
      <section className={styles.section} id="areas">
        <div className={styles.sectionHead} data-reveal>
          <p className="section-label">Areas We Serve</p>
          <h2 className="section-title">
            One Address, <em>Every Catchment</em>
          </h2>
          <p>
            We run a single premises rather than a chain of franchises — it is the only way to keep the same
            therapists, the same hygiene standard and the same rate card for everyone. Here is what the journey looks
            like from each part of Delhi NCR.
          </p>
        </div>

        <div className={styles.grid3}>
          {AREAS.map((area, i) => (
            <article
              key={area.slug}
              className={`${styles.iconCard} ${styles.iconCardLeft}`}
              data-reveal
              data-reveal-delay={(i % 3) * 90}
            >
              <div className={styles.iconChip}>
                <MapPin size={22} strokeWidth={1.8} />
              </div>
              <p className={styles.eyebrow}>{area.headline}</p>
              <h3>{area.name}</h3>
              <p>{area.desc}</p>
              <div className={styles.serviceTags}>
                {area.serves.map((place) => (
                  <span key={place} className={styles.serviceTag}>
                    {place}
                  </span>
                ))}
              </div>
              <p className={styles.cardMeta}>
                <Clock size={12} strokeWidth={2} /> {area.drive} · {area.landmark}
              </p>
              {area.href ? (
                <a href={area.href} className={styles.cardLink}>
                  Read More <ArrowRight size={13} />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* TRAVEL TIME TABLE */}
      <section className={styles.band} id="travel-times">
        <div className={styles.bandInner}>
          <div className={styles.sectionHead} data-reveal>
            <p className="section-label">Travel Times</p>
            <h2 className="section-title">
              How Far Are You, <em>Really?</em>
            </h2>
            <p>
              Off-peak driving times measured to Defence Enclave. Delhi being Delhi, add ten to fifteen minutes
              between 8–10 AM and 5–8 PM.
            </p>
          </div>
          <div className={styles.tableWrap} data-reveal>
            <table className={styles.rateTable}>
              <caption className={styles.visuallyHidden}>
                Driving times from each Delhi NCR area to Russian Spa Centre, Mahipalpur
              </caption>
              <thead>
                <tr>
                  <th scope="col">From</th>
                  <th scope="col">Drive Time</th>
                  <th scope="col">Route / Landmark</th>
                </tr>
              </thead>
              <tbody>
                {AREAS.map((area) => (
                  <tr key={area.slug}>
                    <th scope="row">{area.name}</th>
                    <td className={styles.ratePrice}>{area.drive}</td>
                    <td>{area.landmark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.tableNote}>
            Travel times are indicative and based on typical off-peak traffic. If you are on a tight schedule — a
            layover, a connecting flight — call ahead and we will hold your therapist rather than have you rush.
          </p>
        </div>
      </section>

      {/* NEARBY HOTELS */}
      <section className={styles.section} id="hotels">
        <div className={styles.sectionHead} data-reveal>
          <p className="section-label">Nearby Hotels</p>
          <h2 className="section-title">
            Staying at <em>Aerocity?</em>
          </h2>
          <p>
            We are the closest full-service spa to the Aerocity hotel strip, and the only one open through the night.
            Complimentary pickup is available on bookings of 90 minutes or longer.
          </p>
        </div>
        <div className={styles.tileGrid}>
          {HOTELS.map((hotel, i) => (
            <div key={hotel.name} className={styles.tile} data-reveal data-reveal-delay={(i % 3) * 90}>
              <Img
                src={hotel.img}
                alt={`${hotel.name} — guests reach Russian Spa Centre Mahipalpur in ${hotel.walk}`}
                width={hotel.width}
                height={hotel.height}
                loading="lazy"
                decoding="async"
              />
              <div className={styles.tileBody}>
                <strong>{hotel.name}</strong>
                <span>
                  <Car size={12} strokeWidth={2} /> {hotel.walk}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.mapActions} data-reveal>
          <a
            href={waLink("Hi! I'm staying at an Aerocity hotel. Can you arrange pickup for a 90-minute booking?")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <BedDouble size={15} /> Arrange Hotel Pickup
          </a>
        </div>
      </section>

      {/* GETTING HERE */}
      <section className={`${styles.section} ${styles.sectionTight}`} id="getting-here">
        <div className={styles.sectionHead} data-reveal>
          <p className="section-label">Getting Here</p>
          <h2 className="section-title">
            By Air, Metro <em>or Car</em>
          </h2>
        </div>
        <div className={styles.grid3}>
          {TRANSPORT.map((mode, i) => (
            <article
              key={mode.title}
              className={styles.serviceCard}
              data-reveal
              data-reveal-delay={(i % 3) * 90}
            >
              <div className={styles.serviceIconChip}>
                <mode.icon size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h3>{mode.title}</h3>
                <p>{mode.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className={`${styles.section} ${styles.sectionTight}`} id="map">
        <div data-reveal>
          <p className="section-label">On the Map</p>
          <h2 className="section-title">
            Defence Enclave, <em>Mahipalpur</em>
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
            title="Map showing Russian Spa Centre at Defence Enclave, Mahipalpur, New Delhi 110037"
          />
        </div>
        <div className={styles.mapActions} data-reveal>
          <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <Navigation size={15} /> Open in Google Maps
          </a>
          <a href="/contact/" className="btn-outline">
            Contact &amp; Booking <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionTight}`} id="faq">
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">FAQs</p>
          <h2 className="section-title">
            Location <em>Questions</em>
          </h2>
        </div>
        <FaqAccordion faqs={LOCATION_FAQS} />
      </section>

      {/* CTA */}
      <AlsoVisit path={"/locations/"} />

      <section className={styles.ctaSection}>
        <div data-reveal>
          <p className={`section-label ${styles.ctaLabel}`}>Coming to See Us</p>
          <h2>Tell Us Where You&apos;re Coming From</h2>
          <p>
            Send us your location and we&apos;ll give you the fastest route, a realistic travel time, and a slot that
            fits your schedule.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={waLink("Hi! I'm travelling from ___ to Russian Spa Centre. What's the best route and timing?")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <MessageCircle size={19} /> Ask for Directions
            </a>
          </div>
          <p className={styles.ctaCallLine}>
            <Sparkles size={14} /> Open 24 hours · <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
          </p>
        </div>
      </section>
    </>
  );
}
