import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";

import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";

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
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${IBMPlexSans.className} relative overflow-x-hidden bg-[#FAFAFA] antialiased`}
      >
        <Wrapper>
          <Image
            src={"/bg-main-mobile.png"}
            alt=""
            fill
            className="absolute inset-0 z-10 overflow-hidden md:hidden"
          />
          <Image
            src={"/bg-main-tablet.png"}
            alt=""
            fill
            className="absolute inset-0 z-10 hidden overflow-hidden md:block lg:hidden"
          />
          <Image
            src={"/bg-main-desktop.png"}
            alt=""
            fill
            className="absolute inset-0 z-10 hidden overflow-hidden md:hidden lg:block"
          />
          <Image
            src={"/bg-pattern-1.svg"}
            alt=""
            width={312}
            height={468}
            className="absolute -top-12 -right-7 z-10 hidden md:block lg:right-0"
          />
        </Wrapper>
        <div className="relative z-50">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
