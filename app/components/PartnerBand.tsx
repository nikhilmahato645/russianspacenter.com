"use client";

import { usePathname } from "next/navigation";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import styles from "./PartnerBand.module.css";
import { PARTNER_FEATURES, PARTNER_HOST, PARTNER_NAME, partnerFor } from "../lib/site";

/**
 * Cross-promotion band for the sister site, rendered above the footer on every
 * route. The headline link is the counterpart of the page the visitor is
 * actually on (pricing → their pricing, Aerocity → their Aerocity), which is
 * why this reads `usePathname` rather than taking a prop: the layout renders it
 * once for all twenty routes.
 */
export default function PartnerBand() {
  const pathname = usePathname();
  const { match, related, isHome } = partnerFor(pathname);

  // The home page introduces the whole sister site, so it shows every
  // treatment page. Inner pages show the three that fit their area.
  const links = isHome ? PARTNER_FEATURES : related;

  return (
    <section className={styles.band} aria-labelledby="partner-heading">
      <div className={styles.inner}>
        <div className={styles.head} data-reveal>
          <p className={styles.eyebrow}>Our Sister Site</p>
          <h2 id="partner-heading">{PARTNER_NAME}</h2>
          <p className={styles.copy}>
            More spa, Russian Banya and body massage options across Mahipalpur, Aerocity and Delhi
            NCR — same 24-hour booking, one more place to find us.
          </p>

          {/* On the home page the counterpart *is* their home page, so the
              label is the domain rather than a redundant "Visit Home". */}
          <a href={match.href} className={styles.primary} target="_blank" rel="noopener">
            {isHome ? `Visit ${PARTNER_HOST}` : `Visit their ${match.label}`}
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>
        </div>

        <div className={styles.list} data-reveal data-reveal-delay="120">
          <p className={styles.listLabel}>
            <ExternalLink size={13} strokeWidth={2.2} />
            Popular there
          </p>
          <div className={styles.chips}>
            {links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener" className={styles.chip}>
                {link.label}
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
