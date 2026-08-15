import type { Faq } from "../components/FaqAccordion";

/**
 * Lives in its own module so `page.tsx` (server) can emit the FAQPage JSON-LD
 * from the exact same source the client accordion renders. Structured data that
 * disagrees with the visible answer is a rich-result violation.
 */
export const SERVICE_FAQS: Faq[] = [
  {
    q: "What spa services do you offer in Mahipalpur?",
    a: "We offer authentic Russian Banya with venik treatment, Swedish massage, deep tissue massage, Thai massage, aromatherapy, hot stone therapy, sports and recovery massage, reflexology, Ayurvedic Abhyanga, prenatal and postnatal massage, couples suites, body scrubs, herbal compress add-ons and express airport-layover sessions — over 20 treatments in total, all available 24 hours a day.",
  },
  {
    q: "How long does each spa treatment take?",
    a: "Express treatments run 30 to 45 minutes, standard massages are 60 to 90 minutes, and signature rituals such as the Royal Signature or the Couples Suite run 120 to 150 minutes. The advertised duration is time on the table — changing, showering and consultation are not counted against your session.",
  },
  {
    q: "Do I need to book in advance or can I walk in?",
    a: "Walk-ins are welcome around the clock and we can usually start within 15 to 20 minutes. For couples suites, specific therapists, or weekend evening slots we recommend booking 24 hours ahead by phone or WhatsApp.",
  },
  {
    q: "Can I choose between a male and a female therapist?",
    a: "Yes. Both male and female therapists are available at all hours, and you can state your preference when booking or on arrival. We will always confirm your preference before the session begins.",
  },
  {
    q: "What is a Russian Banya and how is it different from a sauna?",
    a: "A Banya uses moist steam heat at 70–90°C, unlike a dry sauna. The defining element is the venik — a bundle of birch leaves used to gently strike and massage the skin, which stimulates blood flow and opens the pores. It is followed by a cold plunge and a rest cycle. Ours follows authentic Russian specifications and is one of very few genuine setups in Delhi NCR.",
  },
  {
    q: "Is massage safe during pregnancy?",
    a: "Yes, from the second trimester onward, and only with our certified prenatal therapists. We use side-lying positioning with bolster support and avoid pressure points that are contraindicated in pregnancy. Please tell us you are pregnant when booking so we assign the right therapist.",
  },
  {
    q: "Do you offer treatments for airport layovers?",
    a: "Yes. Our Airport Layover Express is built for tight schedules — an express massage, shower and refreshment, done inside an hour. We are 10 minutes from IGI Airport Terminal 3 and open 24/7, so late-night and early-morning layovers are no problem.",
  },
  {
    q: "What should I wear and what is provided?",
    a: "Come as you are. We provide a robe, slippers, fresh towels, disposable undergarments where relevant, and a locker for your belongings. Showers are available before and after your treatment, and herbal tea is served in the relaxation lounge.",
  },
];
