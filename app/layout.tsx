import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

// Primary sans-serif UI font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Serif font — used for headings and pull-quotes via Tailwind's font-serif class
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  // Primary SEO
  title: {
    default: "Maya Reynolds, PsyD — Therapy in Santa Monica & California",
    template: "%s | Maya Reynolds, PsyD",
  },
  description:
    "Licensed clinical psychologist offering warm, collaborative therapy for adults navigating anxiety, panic, trauma, and burnout. In-person in Santa Monica and secure telehealth throughout California.",
  keywords: [
    "therapy Santa Monica",
    "therapist California",
    "anxiety therapy",
    "trauma therapy",
    "EMDR",
    "burnout therapy",
    "telehealth California",
    "psychologist Santa Monica",
    "Maya Reynolds",
  ],
  // Canonical URL — update to real domain before going live
  metadataBase: new URL("https://mayareynoldspsyd.com"),
  alternates: {
    canonical: "/",
  },
  // Open Graph — controls appearance when shared on social media
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mayareynoldspsyd.com",
    siteName: "Maya Reynolds, PsyD",
    title: "Maya Reynolds, PsyD — Therapy in Santa Monica & California",
    description:
      "Warm, collaborative therapy for adults navigating anxiety, panic, trauma, and burnout. Santa Monica office + telehealth throughout California.",
    images: [
      {
        url: "/images/maya-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Maya Reynolds, Licensed Clinical Psychologist",
      },
    ],
  },
  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Maya Reynolds, PsyD — Therapy in Santa Monica & California",
    description:
      "Warm, collaborative therapy for adults navigating anxiety, panic, trauma, and burnout.",
    images: ["/images/maya-portrait.jpg"],
  },
  // Robots directive
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
