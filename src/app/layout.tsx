import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nuclear Paints Ltd – Color That Defines Spaces",
  description:
    "Nuclear Paints Ltd is a trusted paint manufacturing and supply company in Ruai, Nairobi. High-quality, durable, and vibrant paint solutions for residential, commercial, and industrial use.",
  keywords: ["paint", "nuclear paints", "Nairobi", "Ruai", "interior paint", "exterior paint", "industrial coatings"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
