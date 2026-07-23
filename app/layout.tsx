import type { Metadata, Viewport } from "next";
import { Anton, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://affiliates.sidehustlesummit26.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Side Hustle Summit Affiliate Program 2026 — Russell Brunson & Iman Gadzhi | Earn Up To $1,032 Per Customer",
  description:
    "Join the Side Hustle Summit affiliate program: promote Russell Brunson & Iman Gadzhi's 2026 virtual event, earn up to $1,032 per customer promoting Monetise, and compete for a $122,500 prize pool. Registration for affiliates is free — Sept 6–15, 2026.",
  keywords: [
    "Side Hustle Summit Affiliate Program",
    "Iman Gadzhi Affiliate Program",
    "Russell Brunson Affiliate Program",
    "Monetise Affiliate Program",
    "Monetise",
    "Iman Gadzhi",
    "Russell Brunson",
    "Side Hustle Summit 2026",
    "affiliate marketing 2026",
    "high ticket affiliate program",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Side Hustle Summit Affiliates",
    title:
      "Side Hustle Summit Affiliate Program 2026 — Russell Brunson & Iman Gadzhi",
    description:
      "Earn up to $1,032 per customer promoting Monetise at the Side Hustle Summit 2026, plus a shot at $122,500 in affiliate prizes. Free to join.",
    images: [
      {
        url: "/images/side-hustle-summit-2026-russell-brunson-iman-gadzhi.jpg",
        width: 1400,
        height: 812,
        alt: "Side Hustle Summit 2026 hosted by Russell Brunson and Iman Gadzhi, live online Sept 6–15",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Side Hustle Summit Affiliate Program 2026 — Russell Brunson & Iman Gadzhi",
    description:
      "Earn up to $1,032 per customer promoting Monetise at the Side Hustle Summit 2026. $122,500 prize pool. Free to join.",
    images: [
      "/images/side-hustle-summit-2026-russell-brunson-iman-gadzhi.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050806",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
