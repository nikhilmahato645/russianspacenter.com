import type { Metadata } from "next";
import About from "./About";

export const metadata: Metadata = {
  title: "About Russian Spa Centre | Best Spa in Mahipalpur, Aerocity & Dwarka | Delhi NCR",
  description:
    "Discover why we're the most trusted spa in Mahipalpur, Aerocity, Dwarka, Vasant Kunj & near IGI Airport. 10+ years excellence, certified therapists, authentic Russian Banya. Open 24/7. Call +91 9999999999",
  keywords:
    "spa in Mahipalpur, spa in Aerocity, spa in Dwarka, spa in Vasant Kunj, spa near IGI Airport, Russian spa Mahipalpur, best spa Delhi NCR, luxury spa Aerocity, massage centre Dwarka, body spa Vasant Kunj, Russian banya near me, spa near Delhi Airport, wellness centre Mahipalpur, couples spa Aerocity, deep tissue massage Dwarka, Swedish massage Mahipalpur, Thai spa Vasant Kunj, hot stone therapy near me, aromatherapy spa Delhi, reflexology centre, sports massage Mahipalpur, pregnancy spa Aerocity, spa for men Dwarka, ladies spa Vasant Kunj, 24 hour spa near airport, Russian spa centre about us",
  openGraph: {
    title: "About Russian Spa Centre | Best Spa in Mahipalpur, Aerocity & Dwarka",
    description: "10+ years of excellence in Mahipalpur, Aerocity, Dwarka & near IGI Airport. Certified therapists, authentic Russian Banya, open 24/7.",
    url: "https://russianspacenter.com/about/",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://russianspacenter.com/about-og.png",
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
    images: ["https://russianspacenter.com/about-og.png"],
  },
  alternates: {
    canonical: "https://russianspacenter.com/about/",
  },
};

export default function AboutPage() {
  return <About />;
}
