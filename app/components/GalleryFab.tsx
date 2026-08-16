"use client";

import { usePathname } from "next/navigation";
import { Images } from "lucide-react";
import styles from "./GalleryFab.module.css";

/**
 * Bottom-left floating shortcut to the photo gallery, mobile only — the call
 * and WhatsApp buttons already own the bottom-right corner, so this takes the
 * opposite thumb. Hidden on the gallery page itself, where it would link to
 * the page the visitor is already reading.
 */
export default function GalleryFab() {
  const pathname = usePathname();
  if (pathname.startsWith("/gallery")) return null;

  return (
    <a href="/gallery/" className={styles.fab} aria-label="See our photo gallery">
      <span className={styles.icon} aria-hidden="true">
        <Images size={20} strokeWidth={1.9} />
      </span>
      <span className={styles.label}>Gallery</span>
    </a>
  );
}
