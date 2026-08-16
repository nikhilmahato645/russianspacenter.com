"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X, PhoneCall, MapPin, Clock, MessageCircle } from "lucide-react";
import styles from "./Navbar.module.css";
import ScrollProgress from "./ScrollProgress";
import { ADDRESS, PHONE_DISPLAY, PHONE_E164, waLink } from "../lib/site";

/**
 * The desktop bar carries the seven section routes; the ten area landing pages
 * live in the drawer under their own heading, so every route stays reachable
 * without crowding the bar into a squeeze at 1080–1280px.
 */
const MAIN_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/locations/", label: "Locations" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

const AREA_LINKS = [
  { href: "/spa-in-mahipalpur/", label: "Mahipalpur" },
  { href: "/spa-in-aerocity/", label: "Aerocity" },
  { href: "/spa-in-vasant-kunj/", label: "Vasant Kunj" },
  { href: "/spa-in-saket/", label: "Saket" },
  { href: "/spa-in-hauz-khas/", label: "Hauz Khas" },
  { href: "/spa-in-green-park/", label: "Green Park" },
  { href: "/spa-in-dwarka/", label: "Dwarka" },
  { href: "/spa-in-karol-bagh/", label: "Karol Bagh" },
  { href: "/spa-in-gurugram/", label: "Gurugram" },
  { href: "/spa-in-delhi/", label: "Delhi" },
];

const PHONE = PHONE_E164;
const WHATSAPP_URL = waLink("Hello, I want to book a spa appointment at Russian Spa Centre.");

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
        {/* Utility strip — collapses to nothing once the page is scrolled, so the
            address and phone are there on arrival and out of the way after. */}
        <div className={styles.topbar}>
          <div className={styles.topbarInner}>
            <span className={styles.topItem}>
              <MapPin size={13} strokeWidth={2} />
              {ADDRESS.street}, {ADDRESS.locality} {ADDRESS.postalCode}
            </span>
            <span className={styles.topRight}>
              <span className={styles.topItem}>
                <Clock size={13} strokeWidth={2} />
                Open 24 Hours · 365 Days
              </span>
              <a href={`tel:${PHONE}`} className={styles.topPhone}>
                <PhoneCall size={13} strokeWidth={2.2} />
                {PHONE_DISPLAY}
              </a>
            </span>
          </div>
        </div>

        <div className={styles.bar}>
          <div className={styles.navInner}>
            <a href="/" className={styles.logo} aria-label="Russian Spa Centre — home">
              <img className={styles.logoMark} src="/logo.svg" alt="" aria-hidden="true" />
              <span className={styles.logoText}>
                Russian Spa Centre
                <span>Mahipalpur · Aerocity · Delhi NCR</span>
              </span>
            </a>

            <nav className={styles.links} aria-label="Primary">
              {MAIN_LINKS.map((item) => (
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
              <img src="/logo.svg" alt="" aria-hidden="true" />
              <span>
                Russian Spa Centre
                <span>Mahipalpur · Aerocity</span>
              </span>
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

          <nav className={styles.drawerList} aria-label="Mobile primary">
            {MAIN_LINKS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.drawerItem} ${isActive(item.href) ? styles.drawerItemActive : ""}`}
                style={{ transitionDelay: open ? `${110 + i * 45}ms` : "0ms" }}
                onClick={closeDrawer}
                tabIndex={open ? 0 : -1}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Ten area pages as chips rather than ten more full-height rows —
              the drawer stays one thumb-scroll deep on a phone. */}
          <p className={styles.drawerLabel}>Spa Near You</p>
          <nav className={styles.chips} aria-label="Areas we serve">
            {AREA_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.chip} ${isActive(item.href) ? styles.chipActive : ""}`}
                onClick={closeDrawer}
                tabIndex={open ? 0 : -1}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.drawerInfo}>
            <a href={`tel:${PHONE}`} tabIndex={open ? 0 : -1}>
              {PHONE_DISPLAY}
            </a>
            <p>Open 24 hours · Mahipalpur, New Delhi · 10 min from IGI Airport</p>
          </div>
        </div>

        <div className={styles.drawerFooter}>
          <a href={`tel:${PHONE}`} className={styles.drawerLink} tabIndex={open ? 0 : -1}>
            <PhoneCall size={15} strokeWidth={2.2} /> Call &amp; Book
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerLink}
            tabIndex={open ? 0 : -1}
          >
            <MessageCircle size={15} strokeWidth={2.2} /> WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}
