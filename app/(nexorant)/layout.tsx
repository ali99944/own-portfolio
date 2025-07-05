import type { Metadata } from "next";
import { Cairo, Geist } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXORANT - Innovative Software Solutions",
  description: "NEXORANT delivers cutting-edge software solutions that empower businesses to achieve their goals. Explore our innovative services and success stories.",
  keywords: ["NEXORANT", "software solutions", "innovative technology", "business growth", "digital transformation"],
  robots: "index, follow",
  openGraph: {
    title: "NEXORANT - Innovative Software Solutions",
    description: "Discover how NEXORANT's innovative software solutions can transform your business.",
    images: [
      {
        url: "https://nexorant.com/og-image.jpg",
        alt: "NEXORANT Logo",
      },
    ],
    locale: "en_US",
    siteName: "NEXORANT",
  },
  twitter: {
    title: "NEXORANT - Innovative Software Solutions",
    description: "Explore NEXORANT's transformative software solutions for your business.",
    images: [
      {
        url: "https://nexorant.com/twitter-image.jpg",
        alt: "NEXORANT Logo",
      },
    ],
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${cairo.variable} antialiased bg-[#f1f0ec]`}
      >
        {/* <Navbar /> */}
          {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
