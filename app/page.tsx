import type { Metadata } from "next";
import Home from "./home/Home";

export const metadata: Metadata = {
  title: "Russian Spa Centre Mahipalpur | Luxury Spa & Massage Near Delhi Airport | Open 24/7",
  description:
    "Premium Russian Banya, body massage & luxury spa in Mahipalpur & Aerocity, Delhi NCR. Certified therapists. Open 24/7. 10 min from IGI Airport. Book: +91 9999999999",
  keywords:
    "Russian spa delhi, spa in mahipalpur, spa near igi airport, russian banya delhi, luxury massage delhi, body massage aerocity, couples spa, wellness spa delhi, massage centre delhi, best spa near me, 24 hour spa, professional massage therapists",
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
    title: "Russian Spa Centre | Luxury Russian Banya & Massage in Mahipalpur",
    description: "Premium Russian Spa Centre with authentic Banya, body massage & wellness therapies. Open 24/7 near IGI Airport.",
    url: "https://russianspacenter.com/",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://russianspacenter.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Russian Spa Centre - Luxury Spa & Massage in Mahipalpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Russian Spa Centre | Luxury Spa & Massage",
    description: "Premium Russian Banya & massage spa. Open 24/7 near IGI Airport.",
    images: ["https://russianspacenter.com/og-image.png"],
  },
  alternates: {
    canonical: "https://russianspacenter.com/",
  },
};

export default function HomePage() {
  return <Home />;
}
