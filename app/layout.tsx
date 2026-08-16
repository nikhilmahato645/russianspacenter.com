import "./theme.css";
import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { MapPin, Phone, Mail, Clock, Sparkles, MessageCircle, ArrowUpRight } from "lucide-react";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Reveal from "./components/Reveal";
import {
  EMAIL,
  LOCAL_BUSINESS,
  PHONE_DISPLAY,
  PHONE_E164,
  SITE_HOST,
  SITE_URL,
  jsonLd,
  waLink,
} from "./lib/site";
import Img from "./components/Img";

export const metadata: Metadata = {
  title: "Russian Spa Centre | Body Massage & Spa in Mahipalpur",
  description:
    "Body massage, authentic Russian Banya and spa treatments in Mahipalpur, ten minutes from IGI Airport. Private rooms, certified therapists, open 24/7.",
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
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Russian Spa Centre | Body Massage & Spa in Mahipalpur",
    description:
      "Body massage, Russian Banya and spa treatments in Mahipalpur, ten minutes from IGI Airport. Private rooms, certified therapists, open 24 hours.",
    // Trailing slash matters: next.config.js sets trailingSlash: true, so the
    // canonical form of the home page is "/" and anything else is a redirect.
    url: `${SITE_URL}/`,
    siteName: "Russian Spa Centre",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
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
    title: "Russian Spa Centre | Body Massage & Spa in Mahipalpur",
    description: "Body massage, Russian Banya and spa treatments in Mahipalpur. Open 24 hours.",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  // `?v=2` retires the old purple placeholder icon: browsers and Google cache
  // favicons by URL and would otherwise keep serving it for weeks.
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "48x48" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/icon-192.png?v=2", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  applicationName: "Russian Spa Centre",
  appleWebApp: {
    title: "Russian Spa",
    capable: true,
    statusBarStyle: "default",
  },
};

/**
 * Fonts are self-hosted through next/font rather than linked from Google.
 * The CSS is inlined at build time, which removes a render-blocking
 * third-party stylesheet and the two preconnects that went with it.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const WHATSAPP_URL = waLink("Hello, I want to book a spa appointment at Russian Spa Centre.");

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
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#f6f2ea" />
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
        {/* There is deliberately no loading curtain here. An opaque overlay on
            first paint makes every element behind it non-contentful, which
            pushed Largest Contentful Paint out by roughly a second on mobile.
            The hero's own entrance animation is the loading experience. */}
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
            <Img src="/call_whatshap/whatshap.png" alt="Chat on WhatsApp" />
          </a>
          <a href={`tel:${PHONE_E164}`} className="floating-btn btn-call" aria-label="Call Now">
            <Img src="/call_whatshap/call.png" alt="Call Now" />
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
                <a href={`tel:${PHONE_E164}`} className="btn-gold">
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
              </div>

              <div className="footer-col" data-reveal data-reveal-delay="140">
                <h4>Areas We Serve</h4>
                {FOOTER_AREAS.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label} <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>

              <div className="footer-col" data-reveal data-reveal-delay="200">
                <h4>Visit Us</h4>
                <p>
                  <MapPin size={15} /> Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi
                  110037
                </p>
                <a href={`tel:${PHONE_E164}`}><Phone size={15} /> {PHONE_DISPLAY}</a>
                <a href={`mailto:${EMAIL}`}><Mail size={15} /> {EMAIL}</a>
                <p><Clock size={15} /> Open 24 Hours · 7 Days a Week</p>
              </div>
            </div>

            {/* A site-wide keyword cloud used to sit here ("Russian Body",
                "Centres For Men", …). It was keyword stuffing under Google's
                spam policies and said nothing to a reader. The footer's real
                internal links above do the same job honestly. */}

            <div className="footer-bottom">
              <p>© 2026 Russian Spa Centre · {SITE_HOST} · All rights reserved</p>
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
