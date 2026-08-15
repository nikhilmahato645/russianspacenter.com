"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "../styles/page.module.css";

export type Faq = { q: string; a: string };

/**
 * Accordion shared by every inner page. The answer text always ships in the
 * HTML (the panel is collapsed with `grid-template-rows`, not removed from the
 * DOM) so crawlers index it and it can back a FAQPage rich result.
 */
export default function FaqAccordion({ faqs, defaultOpen = 0 }: { faqs: Faq[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={styles.faqInner}>
      <div className={styles.faqList}>
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={faq.q}
              className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
              data-reveal
              data-reveal-delay={(i % 4) * 70}
            >
              <h3>
                <button
                  type="button"
                  className={`${styles.faqQuestion} ${isOpen ? styles.faqQuestionOpen : ""}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                >
                  {faq.q}
                  <ChevronDown size={18} strokeWidth={2} />
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}
              >
                <div>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
