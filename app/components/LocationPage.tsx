import {
  Plane,
  BedDouble,
  TrainFront,
  Car,
  Clock,
  ShieldCheck,
  Lock,
  SprayCan,
  Wallet,
  Star,
  HeartHandshake,
  Flame,
  WavesLadder,
  Dumbbell,
  Hand,
  Flower2,
  Snowflake,
  Footprints,
  Activity,
  Baby,
  Leaf,
  Briefcase,
  House,
  TreePine,
  Users,
  Moon,
  MapPin,
  Quote,
  PhoneCall,
  MessageCircle,
  Navigation,
  ArrowRight,
} from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import TherapistSection from "./TherapistSection";
import { areaTherapistsFor } from "../lib/area-therapists";
import FaqAccordion from "./FaqAccordion";
import {
  ADDRESS,
  DIRECTIONS_URL,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  waLink,
} from "../lib/site";
import { hubAnchorFor, relatedAreas, type IconKey, type LocationContent } from "../lib/location";
import styles from "../styles/page.module.css";

/**
 * Renders `[label](/path/)` inside article copy as a real anchor. Contextual
 * links in prose are the internal links search engines weight most, and writing
 * them inline keeps the link next to the sentence that justifies it — which a
 * separate "related links" array cannot do.
 *
 * Deliberately minimal: links only, no other markdown. Anything more and the
 * data files stop being plain text.
 */
const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function RichText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const start = match.index ?? 0;
    if (start > cursor) nodes.push(text.slice(cursor, start));
    nodes.push(
      <a key={`${match[2]}-${start}`} href={match[2]}>
        {match[1]}
      </a>
    );
    cursor = start + match[0].length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));

  return <>{nodes}</>;
}

const ICONS: Record<IconKey, typeof Plane> = {
  plane: Plane,
  hotel: BedDouble,
  metro: TrainFront,
  car: Car,
  clock: Clock,
  shield: ShieldCheck,
  lock: Lock,
  spray: SprayCan,
  wallet: Wallet,
  star: Star,
  couple: HeartHandshake,
  flame: Flame,
  waves: WavesLadder,
  dumbbell: Dumbbell,
  hand: Hand,
  flower: Flower2,
  stone: Snowflake,
  feet: Footprints,
  activity: Activity,
  baby: Baby,
  leaf: Leaf,
  briefcase: Briefcase,
  home: House,
  trees: TreePine,
  users: Users,
  moon: Moon,
  mapPin: MapPin,
};

/**
 * Presentational shell for an area landing page. Every word on the page comes
 * from `content`, so two areas sharing this component still ship completely
 * different text — which is the whole point, since near-duplicate area pages
 * compete with each other rather than ranking.
 */
export default function LocationPage({ content }: { content: LocationContent }) {
  const {
    path,
    areaName,
    breadcrumb,
    heroImage,
    heroBadge,
    h1,
    heroText,
    heroStats,
    intro,
    highlights,
    treatments,
    nearby,
    gettingHere,
    reviews,
    article,
    faqs,
  } = content;

  const related = relatedAreas(path);
  const roster = areaTherapistsFor(path);
  const hubHref = hubAnchorFor(path);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} style={{ backgroundImage: `url('${heroImage}')` }} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <p className={styles.heroBadge}>
            <MapPin size={13} /> {heroBadge}
          </p>
          <h1>
            {h1.lead} <em>{h1.em}</em>
            {h1.tail ? ` ${h1.tail}` : null}
          </h1>
          {heroText.map((para) => (
            <p key={para.slice(0, 40)} className={styles.heroText}>
              {para}
            </p>
          ))}
          <div className={styles.heroActions}>
            <a href={`tel:${PHONE_E164}`} className="btn-gold">
              <PhoneCall size={15} /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={waLink(`Hi! I'm in ${areaName} and I'd like to book a spa appointment.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle size={15} /> Book via WhatsApp
            </a>
          </div>
          <div className={styles.heroStats}>
            {heroStats.map((stat) => (
              <div key={stat.label} className={styles.heroStat}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mirrors the BreadcrumbList in locationLd() — Google requires the
          visible trail and the structured data to correspond. */}
      <Breadcrumb
        items={[
          { label: areaName, href: hubHref },
          { label: breadcrumb },
        ]}
      />

      {/* WHY THIS AREA */}
      <section className={styles.section} id="why">
        <div className={styles.twoCol}>
          <div data-reveal="left" className={styles.prose}>
            <p className="section-label">{intro.label}</p>
            <h2 className="section-title">
              {intro.titleLead} <em>{intro.titleEm}</em>
            </h2>
            <div className="divider" />
            {intro.paras.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
            <a href="/services/" className="btn-outline" style={{ marginTop: "8px" }}>
              All Treatments <ArrowRight size={15} />
            </a>
          </div>
          <div className={styles.grid2}>
            {highlights.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <div key={item.title} className={styles.iconCard} data-reveal data-reveal-delay={i * 90}>
                  <div className={styles.iconChip}>
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TREATMENTS FOR THIS AREA */}
      <section className={styles.band} id="treatments">
        <div className={styles.bandInner}>
          <div className={styles.sectionCenterHead} data-reveal>
            <p className="section-label">Most Booked Here</p>
            <h2 className="section-title">
              What {areaName} Guests <em>Actually Book</em>
            </h2>
            <p>
              Drawn from our own booking log rather than a generic menu — these are the treatments guests travelling
              from {areaName} choose most, and why.
            </p>
          </div>
          <div className={styles.grid3}>
            {treatments.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <article
                  key={item.name}
                  className={styles.serviceCard}
                  data-reveal
                  data-reveal-delay={(i % 3) * 90}
                >
                  <div className={styles.serviceIconChip}>
                    <Icon size={20} strokeWidth={1.8} />
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
              );
            })}
          </div>
          <div className={styles.mapActions} data-reveal>
            <a href="/pricing/" className="btn-gold">
              Full Price List <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {roster ? (
        <TherapistSection
          therapists={roster.therapists}
          eyebrow={`Therapists for ${areaName}`}
          intro={roster.intro}
          headingLead="Who You Will"
          headingEm="Book"
          headingTail={`From ${areaName}`}
        />
      ) : null}

      {/* NEARBY LANDMARKS */}
      <section className={styles.section} id="nearby">
        <div className={styles.sectionHead} data-reveal>
          <p className="section-label">From Your Doorstep</p>
          <h2 className="section-title">
            How Far We Are From <em>{areaName} Landmarks</em>
          </h2>
          <p>Off-peak driving times to our premises at Defence Enclave, Mahipalpur.</p>
        </div>
        <div className={styles.tableWrap} data-reveal>
          <table className={styles.rateTable}>
            <caption className={styles.visuallyHidden}>
              Driving times from {areaName} landmarks to Russian Spa Centre, Mahipalpur
            </caption>
            <thead>
              <tr>
                <th scope="col">Landmark</th>
                <th scope="col">Distance</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {nearby.map((place) => (
                <tr key={place.name}>
                  <th scope="row">{place.name}</th>
                  <td className={styles.ratePrice}>{place.distance}</td>
                  <td>{place.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* GETTING HERE */}
      <section className={`${styles.section} ${styles.sectionTight}`} id="getting-here">
        <div className={styles.sectionHead} data-reveal>
          <p className="section-label">Getting Here</p>
          <h2 className="section-title">
            The Easiest Route From <em>{areaName}</em>
          </h2>
        </div>
        <div className={styles.grid3}>
          {gettingHere.map((mode, i) => {
            const Icon = ICONS[mode.icon];
            return (
              <article
                key={mode.title}
                className={styles.serviceCard}
                data-reveal
                data-reveal-delay={(i % 3) * 90}
              >
                <div className={styles.serviceIconChip}>
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <h3>{mode.title}</h3>
                  <p>{mode.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* LONG-FORM ARTICLE */}
      <section className={styles.section} id="guide">
        <article className={styles.article}>
          <header className={styles.sectionHead} data-reveal>
            <p className="section-label">{article.label}</p>
            <h2 className="section-title">
              {article.titleLead} <em>{article.titleEm}</em>
            </h2>
            <div className="divider" />
            <p className={styles.articleStandfirst}>
              <RichText text={article.standfirst} />
            </p>
          </header>

          <div className={styles.articleBody}>
            {article.sections.map((block) => (
              <section key={block.heading} data-reveal>
                <h3>{block.heading}</h3>
                {block.paras.map((para) => (
                  <p key={para.slice(0, 40)}>
                    <RichText text={para} />
                  </p>
                ))}
              </section>
            ))}
          </div>

          <aside className={styles.articleTakeaways} data-reveal>
            <h3>In short</h3>
            <ul>
              {article.takeaways.map((point) => (
                <li key={point.slice(0, 40)}>
                  <RichText text={point} />
                </li>
              ))}
            </ul>
          </aside>
        </article>
      </section>

      {/* REVIEWS */}
      <section className={styles.band} id="reviews">
        <div className={styles.bandInner}>
          <div className={styles.sectionCenterHead} data-reveal>
            <p className="section-label">Guest Reviews</p>
            <h2 className="section-title">
              What {areaName} Guests <em>Say</em>
            </h2>
          </div>
          <div className={styles.grid3}>
            {reviews.map((review, i) => (
              <figure
                key={review.author}
                className={`${styles.iconCard} ${styles.iconCardLeft}`}
                data-reveal
                data-reveal-delay={(i % 3) * 90}
              >
                <Quote size={24} strokeWidth={1.5} className={styles.quoteMark} />
                <div className={styles.stars} role="img" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote>{review.text}</blockquote>
                <figcaption className={styles.reviewer}>
                  <span className={styles.reviewerAvatar} aria-hidden="true">
                    {review.author.charAt(0)}
                  </span>
                  <span>
                    <strong>{review.author}</strong>
                    <small>{review.role}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className={styles.section} id="map">
        <div data-reveal>
          <p className="section-label">Find Us</p>
          <h2 className="section-title">
            Our Premises, <em>Ten Minutes Away</em>
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
            title={`Map from ${areaName} to Russian Spa Centre, Defence Enclave, Mahipalpur`}
          />
        </div>
        <div className={styles.mapActions} data-reveal>
          <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <Navigation size={15} /> Get Directions
          </a>
          <a href="/locations/" className="btn-outline">
            All Areas We Serve <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* OTHER AREAS — the internal-link mesh, see AREA_INDEX */}
      <section className={styles.band} id="other-areas">
        <div className={styles.bandInner}>
          <div className={styles.sectionHead} data-reveal>
            <p className="section-label">Other Areas We Serve</p>
            <h2 className="section-title">
              Not Coming From <em>{areaName}</em>?
            </h2>
            <p>
              One premises, many catchments. Each page below covers the route, the drive time and what guests from
              that part of Delhi NCR usually book.
            </p>
          </div>
          <div className={styles.areaLinkGrid}>
            {related.map((area, i) => (
              <a
                key={area.path}
                href={area.path}
                className={styles.areaLinkCard}
                data-reveal
                data-reveal-delay={(i % 3) * 70}
              >
                <span className={styles.areaLinkTitle}>
                  <MapPin size={14} strokeWidth={2} />
                  {area.label}
                </span>
                <span className={styles.areaLinkDrive}>{area.drive}</span>
                <span className={styles.areaLinkTeaser}>{area.teaser}</span>
                <span className={styles.cardLink}>
                  Read page <ArrowRight size={13} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionTight}`} id="faq">
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">FAQs</p>
          <h2 className="section-title">
            {areaName} <em>Questions</em>
          </h2>
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* CTA */}

      <section className={styles.ctaSection}>
        <div data-reveal>
          <p className={`section-label ${styles.ctaLabel}`}>Book From {areaName}</p>
          <h2>We&apos;re Open Right Now</h2>
          <p>
            Tell us when you can get here and we&apos;ll have a therapist ready. No night surcharge, no distance
            charge — the same rate at every hour.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={waLink(`Hi! I'm in ${areaName}. What's available today at Russian Spa Centre?`)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <MessageCircle size={19} /> Check Availability
            </a>
          </div>
          <p className={styles.ctaCallLine}>
            <Clock size={14} /> Open 24 hours · <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
          </p>
        </div>
      </section>

    </>
  );
}
