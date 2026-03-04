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

export const metadata: Metadata = {
  title: "PostFlux – AI Voice → LinkedIn Authority Engine",
  description:
    "PostFlux turns spoken ideas into high-impact LinkedIn posts. Record voice, generate authority content, and grow your professional brand.",
  keywords: [
    "PostFlux",
    "AI",
    "LinkedIn",
    "voice to text",
    "content creation",
    "authority content",
    "LinkedIn posts",
  ],
  openGraph: {
    title: "PostFlux – AI Voice → LinkedIn Authority Engine",
    description:
      "PostFlux turns spoken ideas into high-impact LinkedIn posts. Record voice, generate authority content, and grow your professional brand.",
    type: "website",
    url: "https://postflux.ai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PostFlux - Voice to LinkedIn Authority Content",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PostFlux – AI Voice → LinkedIn Authority Engine",
    description:
      "Turn spoken ideas into high-impact LinkedIn posts with AI.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
