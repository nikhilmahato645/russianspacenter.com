import "./theme.css";
import "./globals.css";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Sparkles, MessageCircle, ArrowUpRight } from "lucide-react";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Reveal from "./components/Reveal";
import { LOCAL_BUSINESS, jsonLd } from "./lib/site";

export const metadata: Metadata = {
  title: "Russian Spa Centre Mahipalpur | Luxury Spa & Massage Near Delhi Airport | 24/7 Open",
  description:
    "Premium Russian Banya, body massage & luxury spa services in Mahipalpur & Aerocity. Open 24/7. 10 minutes from IGI Airport. Book now: +91 9999999999",
  keywords:
    "Russian Body, Massage Centres, Beauty Spas For Men, Russian Body Massage Centres, Russian Body Massage Centres-Z, Beauty Spas For Men-A, 24 Hours Beauty Spas Massage, Centres For Men, 24 Hours Beauty Spas-A, Massage Centres For Men-Z, 24 Hours Body Massage Centres, Beauty Spas, 24 Hours Body Massage Centres-Z, Beauty Spas-A, Russian spa in mahipalpur, Russian spa in aerocity, Russian spa Mahipalpur",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Spa in Mahipalpur Near IGI Airport Delhi | Russian Spa Centre",
    description:
      "Luxury Russian Spa & Body Massage in Mahipalpur. Open 24/7. Call +91 9999999999",
    url: "https://russianspacenter.com",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://russianspacenter.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spa in Mahipalpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa in Mahipalpur Near IGI Airport",
    description: "Luxury Russian Spa & Massage 24/7",
    images: ["https://russianspacenter.com/og-image.png"],
  },
  alternates: {
    canonical: "https://russianspacenter.com",
  },
};

const WHATSAPP_URL =
  "https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20book%20a%20spa%20appointment";

/** Every indexable route gets a footer link, so each page is one hop from any other. */
const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Spa Services" },
  { href: "/pricing/", label: "Price List" },
  { href: "/gallery/", label: "Photo Gallery" },
  { href: "/locations/", label: "Locations" },
  { href: "/about/", label: "About Us" },
  { href: "/contact/", label: "Contact & Booking" },
];

/** Area landing pages, listed separately so each one is linked from every page. */
const FOOTER_AREAS = [
  { href: "/spa-in-mahipalpur/", label: "Spa in Mahipalpur" },
  { href: "/spa-in-aerocity/", label: "Spa in Aerocity" },
  { href: "/spa-in-vasant-kunj/", label: "Spa in Vasant Kunj" },
  { href: "/spa-in-saket/", label: "Spa in Saket" },
  { href: "/spa-in-hauz-khas/", label: "Spa in Hauz Khas" },
  { href: "/spa-in-green-park/", label: "Spa in Green Park" },
  { href: "/spa-in-dwarka/", label: "Spa in Dwarka" },
  { href: "/spa-in-karol-bagh/", label: "Spa in Karol Bagh" },
  { href: "/spa-in-gurugram/", label: "Spa in Gurugram" },
  { href: "/spa-in-delhi/", label: "Spa in Delhi" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // The pre-paint script in <head> stamps `reveal-ready` onto <html>, so the
  // hydrated client tree intentionally differs from the server HTML there.
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#111111" />
        <meta name="format-detection" content="telephone=no" />

        {/* Site-wide business entity. Inner pages reference the same `@id`, so
            search engines resolve every page's markup to one business rather
            than to several near-duplicate ones. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({ "@context": "https://schema.org", ...LOCAL_BUSINESS }),
          }}
        />

        {/* Enable reveal animations before first paint so nothing flashes. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reveal-ready')}}catch(e){}`,
          }}
        />

      </head>
      <body>
        <Navbar />
        <Reveal />

        <main>{children}</main>

        {/* Floating Scroll-to-Top, WhatsApp & Call Buttons */}
        <div className="floating-buttons">
          <ScrollToTopButton />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn btn-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <img src="/call_whatshap/whatshap.png" alt="Chat on WhatsApp" />
          </a>
          <a href="tel:+919999999999" className="floating-btn btn-call" aria-label="Call Now">
            <img src="/call_whatshap/call.png" alt="Call Now" />
          </a>
        </div>

        <footer>
          <div className="footer-inner">
            <div className="footer-cta" data-reveal>
              <div>
                <h3>Ready to unwind? We&apos;re open right now.</h3>
                <p>Same-day appointments available · 10 minutes from IGI Airport</p>
              </div>
              <div className="footer-cta-actions">
                <a href="tel:+919999999999" className="btn-gold">
                  <Phone size={15} /> Call Now
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>
            </div>

            <div className="footer-grid">
              <div className="footer-brand" data-reveal>
                <div className="logo">
                  Russian <span>Spa Centre</span>
                </div>
                <p>
                  Delhi NCR&apos;s premier destination for authentic Russian Banya, luxury massage, and holistic
                  wellness. Open 24/7, 365 days a year.
                </p>
                <div className="footer-rating">
                  <Sparkles size={13} /> 4.8★ from 350+ guests
                </div>
              </div>

              <div className="footer-col" data-reveal data-reveal-delay="80">
                <h4>Explore</h4>
                {FOOTER_LINKS.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label} <ArrowUpRight size={13} />
                  </a>
                ))}
                <h4 style={{ marginTop: "26px" }}>Areas We Serve</h4>
                {FOOTER_AREAS.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label} <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>

              <div className="footer-col" data-reveal data-reveal-delay="160">
                <h4>Visit Us</h4>
                <p>
                  <MapPin size={15} /> Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi
                  110037
                </p>
                <a href="tel:+919999999999"><Phone size={15} /> +91 9999999999</a>
                <a href="mailto:info@russianspacenter.com"><Mail size={15} /> info@russianspacenter.com</a>
                <p><Clock size={15} /> Open 24 Hours · 7 Days a Week</p>
              </div>
            </div>

            <div className="keyword-cloud">
              <span>Russian Body</span><span>Massage Centres</span><span>Beauty Spas For Men</span>
              <span>Russian Body Massage Centres</span><span>24 Hours Beauty Spas Massage</span>
              <span>Centres For Men</span><span>24 Hours Body Massage Centres</span>
              <span>Russian spa in mahipalpur</span>
              <span>Full Body Massage</span><span>Aromatherapy Massage</span><span>Hot Stone Massage</span>
            </div>

            <div className="footer-bottom">
              <p>© 2026 Russian Spa Centre · russianspacenter.com · All rights reserved</p>
              <span className="footer-badge">
                <Sparkles size={12} /> 15% OFF FIRST VISIT · OPEN 24/7
              </span>
            </div>
          </div>
        </footer>

        <script dangerouslySetInnerHTML={{
          __html: `
            // FAQ accordion (legacy markup on inner pages)
            document.querySelectorAll('.faq-question').forEach(question => {
              question.addEventListener('click', () => {
                question.parentElement.classList.toggle('open');
              });
            });
          `
        }} />
      </body>
    </html>
  );
}
