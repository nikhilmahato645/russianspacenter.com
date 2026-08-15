"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X, PhoneCall } from "lucide-react";
import styles from "./Navbar.module.css";
import ScrollProgress from "./ScrollProgress";

/**
 * `primary` links appear in the desktop pill bar, which only has room for
 * seven before it collides with the logo and the Book Now button. The drawer
 * shows every link, so nothing is unreachable on mobile.
 */
const LINKS = [
  { href: "/", label: "Home", primary: true },
  { href: "/services/", label: "Services", primary: true },
  { href: "/pricing/", label: "Pricing", primary: true },
  { href: "/gallery/", label: "Gallery", primary: true },
  { href: "/locations/", label: "Locations", primary: true },
  { href: "/about/", label: "About", primary: true },
  { href: "/contact/", label: "Contact", primary: true },
  { href: "/spa-in-mahipalpur/", label: "Spa in Mahipalpur", primary: false },
  { href: "/spa-in-aerocity/", label: "Spa in Aerocity", primary: false },
  { href: "/spa-in-vasant-kunj/", label: "Spa in Vasant Kunj", primary: false },
  { href: "/spa-in-saket/", label: "Spa in Saket", primary: false },
  { href: "/spa-in-hauz-khas/", label: "Spa in Hauz Khas", primary: false },
  { href: "/spa-in-green-park/", label: "Spa in Green Park", primary: false },
  { href: "/spa-in-dwarka/", label: "Spa in Dwarka", primary: false },
  { href: "/spa-in-karol-bagh/", label: "Spa in Karol Bagh", primary: false },
  { href: "/spa-in-gurugram/", label: "Spa in Gurugram", primary: false },
  { href: "/spa-in-delhi/", label: "Spa in Delhi", primary: false },
];

const DESKTOP_LINKS = LINKS.filter((link) => link.primary);

const PHONE = "+919999999999";
const WHATSAPP_URL =
  "https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20book%20a%20spa%20appointment";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const closeDrawer = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeDrawer();
    }
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.navInner}>
          <a href="/" className={styles.logo} aria-label="Russian Spa Centre — home">
            <span className={styles.logoMark}>
              <img src="/logo.svg" alt="" aria-hidden="true" />
            </span>
            <span className={styles.logoText}>
              Russian Spa Centre
              <span>Mahipalpur · Aerocity · Delhi NCR</span>
            </span>
          </a>

          <nav className={styles.links} aria-label="Primary">
            {DESKTOP_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? styles.linkActive : undefined}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.navRight}>
            <span className={styles.statusPill}>
              <span className={styles.dot} aria-hidden="true" />
              Open 24/7
            </span>

            <a href={`tel:${PHONE}`} className={styles.bookBtn}>
              <PhoneCall size={14} strokeWidth={2.3} />
              Book Now
            </a>

            <a href={`tel:${PHONE}`} className={styles.iconBtn} aria-label="Call now">
              <PhoneCall size={18} strokeWidth={2} />
            </a>

            <button
              type="button"
              className={`${styles.menuToggle} ${open ? styles.menuToggleOpen : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <ScrollProgress />
      </header>

      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <aside
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        aria-hidden={!open}
        aria-label="Mobile navigation"
      >
        <div className={styles.drawerBody}>
          <div className={styles.drawerHeader}>
            <span className={styles.drawerBrand}>
              Russian Spa Centre
              <span>Mahipalpur · Aerocity</span>
            </span>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={closeDrawer}
              aria-label="Close menu"
              tabIndex={open ? 0 : -1}
            >
              <X size={19} />
            </button>
          </div>

          <nav className={styles.drawerList}>
            {LINKS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.drawerItem} ${isActive(item.href) ? styles.drawerItemActive : ""}`}
                style={{ transitionDelay: open ? `${100 + i * 55}ms` : "0ms" }}
                onClick={closeDrawer}
                tabIndex={open ? 0 : -1}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.drawerInfo}>
            <a href={`tel:${PHONE}`} tabIndex={open ? 0 : -1}>
              +91 9999999999
            </a>
            <p>Open 24 hours · Mahipalpur, New Delhi</p>
          </div>
        </div>

        <div className={styles.drawerFooter}>
          <a href={`tel:${PHONE}`} className={styles.drawerLink} tabIndex={open ? 0 : -1}>
            Call &amp; Book Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerLink}
            tabIndex={open ? 0 : -1}
          >
            WhatsApp Us
          </a>
        </div>
      </aside>
    </>
  );
}
