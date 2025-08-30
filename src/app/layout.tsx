import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";

import Header from "@/components/Header";

import "./globals.css";

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Equalizer App - Professional Audio Equalizer for Android & iOS",
  description:
    "Transform your music with Equalizer App - a professional-grade parametric EQ & volume mixer for Android and iOS. Control bass, mids, treble, gain, reverb, and spatial audio. Get expert-level control for just $4/month. Download now for extraordinary sound quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${IBMPlexSans.className} bg-[#FAFAFA] antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
