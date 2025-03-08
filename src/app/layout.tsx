import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

import "@/assets/css/bootstrap.min.css";
import "@/assets/css/elegant-icons.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/css/magnific-popup.css";
// import "@/assets/css/owl.carousel.min.css";
import "@/assets/css/slicknav.min.css";
import "@/assets/css/style.css";

import Header from "@/components/layout/header";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omega Projects Portfolio",
  description:
    "Omega Projects is a sleek and modern video portfolio website designed to showcase high-quality video productions with stunning visuals and seamless navigation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}

        <Script src="js/jquery-3.3.1.min.js"></Script>
        <Script src="js/bootstrap.min.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/mixitup.min.js"></Script>
        <Script src="js/masonry.pkgd.min.js"></Script>
        <Script src="js/jquery.slicknav.js"></Script>
        <Script src="js/owl.carousel.min.js"></Script>
        <Script src="js/main.js"></Script>
      </body>
    </html>
  );
}
