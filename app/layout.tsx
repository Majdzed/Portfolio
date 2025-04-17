import type { Metadata } from "next";
import FallingStars from "./_components/FallingStars";

import { Geist, Geist_Mono, IBM_Plex_Mono , Raleway } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import React from "react";

const myFont = localFont({ 
  src: "./fonts/determinationmonoweb-webfont.woff2",  // Adjusted path
  variable: "--font-pixels",
});



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const IbmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  variable : "--font-raleway",
  subsets : ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight : "variable"
});

export const metadata: Metadata = {
  title: "My portfolio",
  description: "check out my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/elklb.webp" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${IbmMono.variable} ${raleway.variable} ${myFont.variable} antialiased`}
      >
        <FallingStars 
          starCount={75}
          minSpeed={0.2}
          maxSpeed={0.6}
          minSize={1}
          maxSize={3}
        />
        {children}
      </body>
    </html>
  );
}
