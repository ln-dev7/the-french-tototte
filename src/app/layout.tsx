import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
