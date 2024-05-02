import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const tartuffo = localFont({
  src: [
    {
      path: "./fonts/tartuffo-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/tartuffo-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-tartuffo",
});

const gustavo = localFont({
  src: [
    {
      path: "./fonts/gustavo-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/gustavo-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-gustavo",
});

export const metadata: Metadata = {
  title: "The FrenchTototte",
  description: "Pour ceux qui osent être différents",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://thefrenchtototte.vercel.app/",
    siteName: "The FrenchTototte",
    images: [
      {
        url: "https://thefrenchtototte.vercel.app/banner.png",
        width: 1600,
        height: 1200,
        alt: "The FrenchTototte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "https://thefrenchtototte.vercel.app/banner.png",
        width: 1600,
        height: 1200,
        alt: "The FrenchTototte",
      },
    ],
  },
  authors: [
    { name: "Leonel NGOYA", url: "https://lndev.me/" },
    {
      name: "BastiUI",
      url: "https://www.youtube.com/c/BastiUI",
    },
  ],
  keywords: ["The FrenchTototte", "Leonel NGOYA", "BastiUI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tartuffo.variable} ${gustavo.variable} font-tartuffo antialiased`}>
        {children}
      </body>
    </html>
  );
}
