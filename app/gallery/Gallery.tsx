"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import FaqAccordion from "../components/FaqAccordion";
import { PHONE_DISPLAY, PHONE_E164, waLink } from "../lib/site";
import styles from "../styles/page.module.css";
import { CATEGORIES, GALLERY_FAQS, SHOTS, type CategoryId } from "./data";
import Img from "../components/Img";

type Filter = CategoryId | "all";

const FILTERS: { id: Filter; label: string }[] = [{ id: "all", label: "All Photos" }, ...CATEGORIES];


export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const shots = useMemo(
    () => (filter === "all" ? SHOTS : SHOTS.filter((shot) => shot.category === filter)),
    [filter]
  );

  const countFor = useCallback(
    (id: Filter) => (id === "all" ? SHOTS.length : SHOTS.filter((s) => s.category === id).length),
    []
  );

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (delta: number) => setLightbox((i) => (i === null ? null : (i + delta + shots.length) % shots.length)),
    [shots.length]
  );

  // Keyboard control for the lightbox, plus a scroll lock while it is open.
  useEffect(() => {
    if (lightbox === null) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, step]);

  // Switching filters re-indexes the list, so any open lightbox must close.
  function changeFilter(next: Filter) {
    setFilter(next);
    setLightbox(null);
  }

  const active = lightbox === null ? null : shots[lightbox];

  return (
    <>
      {/* HEADER — no background photograph here on purpose: the page is the
          photographs, and a hero image competes with the grid below it. */}
      <header className={styles.plainHeader}>
        <div className={styles.plainHeaderInner}>
          <p className="section-label">Photo Gallery</p>
          <h1>
            Inside <em>Russian Spa Centre</em>, Mahipalpur
          </h1>
          <p className={styles.plainHeaderText}>
            Our Defence Enclave premises and the therapists who work there. Tap any photograph to open it full
            size, or use the arrow keys to move through the set.
          </p>
          <p className={styles.plainHeaderMeta}>
            <Camera size={14} strokeWidth={2} /> {SHOTS.length} photographs
            <span aria-hidden="true">·</span>
            <a href={`tel:${PHONE_E164}`}>Call {PHONE_DISPLAY}</a>
          </p>
        </div>
      </header>

      <Breadcrumb items={[{ label: "Gallery" }]} />

      {/* GRID */}
      <section className={styles.section} id="photos">
        <div className={styles.sectionCenterHead} data-reveal>
          <p className="section-label">Inside the Spa</p>
          <h2 className="section-title">
            Look Around <em>Before You Book</em>
          </h2>
          <p>
            The premises under &ldquo;The Spa&rdquo;, and the therapists you can ask for by name under
            &ldquo;Our Team&rdquo;.
          </p>
        </div>

        <div className={styles.filterBar} role="group" aria-label="Filter gallery by area">
          {FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.filterBtn} ${filter === item.id ? styles.filterBtnActive : ""}`}
              onClick={() => changeFilter(item.id)}
              aria-pressed={filter === item.id}
            >
              {item.label}
              <span className={styles.filterCount}>{countFor(item.id)}</span>
            </button>
          ))}
        </div>

        <div className={styles.galleryGrid}>
          {shots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              className={styles.galleryItem}
              onClick={() => setLightbox(i)}
              aria-label={`Open photo: ${shot.caption}`}
              data-reveal
              data-reveal-delay={(i % 4) * 70}
            >
              <Img
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                loading={i < 4 ? "eager" : "lazy"}
                decoding="async"
              />
              <span className={styles.galleryCaption}>{shot.caption}</span>
            </button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {active ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={close}
        >
          <figure className={styles.lightboxFigure} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.lightboxClose} onClick={close} aria-label="Close gallery">
              <X size={20} />
            </button>
            <button
              type="button"
              className={`${styles.lightboxBtn} ${styles.lightboxPrev}`}
              onClick={() => step(-1)}
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} />
            </button>
            <Img src={active.src} alt={active.alt} width={active.width} height={active.height} />
            <button
              type="button"
              className={`${styles.lightboxBtn} ${styles.lightboxNext}`}
              onClick={() => step(1)}
              aria-label="Next photo"
            >
              <ChevronRight size={22} />
            </button>
            <figcaption>
              {active.caption} · {(lightbox ?? 0) + 1} of {shots.length}
            </figcaption>
          </figure>
        </div>
      ) : null}

      {/* FAQ */}
      <section className={styles.band} id="faq">
        <div className={styles.bandInner}>
          <div className={styles.sectionCenterHead} data-reveal>
            <p className="section-label">FAQs</p>
            <h2 className="section-title">
              About These <em>Photos</em>
            </h2>
          </div>
          <FaqAccordion faqs={GALLERY_FAQS} />
        </div>
      </section>

      {/* CTA */}

      <section className={styles.ctaSection}>
        <div data-reveal>
          <p className={`section-label ${styles.ctaLabel}`}>Seen Enough?</p>
          <h2>Come See It in Person</h2>
          <p>
            Walk in at any hour and ask for a look around — no appointment needed, no obligation to book.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={waLink("Hi! I saw the gallery and I'd like to visit Russian Spa Centre. Is now a good time?")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <MessageCircle size={19} /> Ask About a Visit
            </a>
          </div>
          <p className={styles.ctaCallLine}>
            <Sparkles size={14} /> Or call <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a> — we&apos;re open 24/7
          </p>
        </div>
      </section>
    </>
  );
}
