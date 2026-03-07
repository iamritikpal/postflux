import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

import LoadingScreen from "@/components/LoadingScreen";

const siteUrl = "https://postflux.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PostFlux – Turn Your Voice Into LinkedIn Authority Posts with AI",
    template: "%s | PostFlux",
  },
  description:
    "PostFlux is an AI-powered voice-to-LinkedIn content engine. Record your thoughts, and our AI transforms them into polished, high-impact posts that match your unique writing style. Start free — no credit card required.",
  keywords: [
    "PostFlux",
    "AI LinkedIn post generator",
    "voice to LinkedIn post",
    "LinkedIn content creator",
    "AI writing assistant",
    "LinkedIn authority",
    "voice to text AI",
    "LinkedIn post writer",
    "content creation tool",
    "personal branding LinkedIn",
    "thought leadership",
    "AI content generation",
    "voice recording to post",
    "LinkedIn growth tool",
    "SaaS",
  ],
  authors: [{ name: "PostFlux" }],
  creator: "PostFlux",
  publisher: "PostFlux",
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
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "PostFlux – Turn Your Voice Into LinkedIn Authority Posts with AI",
    description:
      "Record your ideas by voice and let AI generate polished LinkedIn posts in your unique writing style. Build thought leadership effortlessly with PostFlux.",
    type: "website",
    url: siteUrl,
    siteName: "PostFlux",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PostFlux – AI Voice to LinkedIn Authority Content Engine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PostFlux – Voice to LinkedIn Posts with AI",
    description:
      "Speak your ideas. Get polished LinkedIn posts that sound like you. Try PostFlux free.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PostFlux",
  url: siteUrl,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "PostFlux is an AI-powered SaaS that converts voice recordings into polished LinkedIn posts aligned with your personal writing style.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "0",
    highPrice: "1999",
    offerCount: "3",
  },
  featureList: [
    "Voice-to-LinkedIn post generation",
    "AI writing style matching",
    "Hook and CTA suggestions",
    "Post workspace management",
    "Credit-based usage system",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        <LoadingScreen>
          {children}
        </LoadingScreen>
      </body>
    </html>
  );
}
