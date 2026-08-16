import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";
import About from "./About";

export const metadata: Metadata = {
  title: "About Russian Spa Centre | Mahipalpur, New Delhi",
  description:
    "Who runs Russian Spa Centre in Mahipalpur, how the therapists are trained, the hygiene routine between guests, and what happens on a first visit.",
  openGraph: {
    title: "About Russian Spa Centre | Best Spa in Mahipalpur, Aerocity & Dwarka",
    description: "10+ years of excellence in Mahipalpur, Aerocity, Dwarka & near IGI Airport. Certified therapists, authentic Russian Banya, open 24/7.",
    url: `${SITE_URL}/about/`,
    siteName: "Russian Spa Centre",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Russian Spa Centre About Us - Best Spa in Mahipalpur Aerocity Dwarka",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Russian Spa Centre | Best Spa in Mahipalpur, Aerocity & Dwarka",
    description: "Delhi NCR's most trusted spa. 10+ years excellence. Open 24/7 near IGI Airport.",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_URL}/about/`,
  },
};

export default function AboutPage() {
  return <About />;
}
