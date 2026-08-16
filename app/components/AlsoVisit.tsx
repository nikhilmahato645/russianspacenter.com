import { ArrowUpRight } from "lucide-react";
import { LEGACY_SITE, legacyLinksFor } from "../lib/legacy-site";

/**
 * "You can also visit" — links across to the client's other website for the
 * same spa. Renders nothing on pages where the old site has no matching page,
 * so no page ever carries an irrelevant link.
 *
 * `target="_blank"` with `rel="noopener"` only: `noreferrer` would strip the
 * referrer and hide this traffic from the other site's analytics, which is the
 * one measurement that shows whether these links are worth keeping.
 */
export default function AlsoVisit({ path }: { path: string }) {
  const links = legacyLinksFor(path);
  if (links.length === 0) return null;

  return (
    <aside className="also-visit" aria-labelledby="also-visit-title">
      <div className="also-visit-inner">
        <p className="section-label">Our Other Website</p>
        <h2 id="also-visit-title">You Can Also Visit</h2>
        <p className="also-visit-intro">
          The same spa also runs <strong>mahipalpurspaservicecentre.com</strong> — one business, one address at
          Defence Enclave, Mahipalpur, and the same team. These pages cover the same ground there:
        </p>

        <ul className="also-visit-list">
          {links.map((link) => (
            <li key={link.path}>
              <a href={`${LEGACY_SITE}${link.path}`} target="_blank" rel="noopener">
                {link.label}
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
              <span>{link.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
