import type { Metadata } from "next";
import { Inter, Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sampada Taralgatti - User Experience Designer",
  description:
    "A passionate user experience designer based in Indianapolis with 2 years of experience.",
  keywords: ["ux", "user experience", "designer", "portfolio"],

  // Open Graph
  openGraph: {
    type: "website",
    url: "https://www.sampadataralgatti.in/",
    title: "Sampada Taralgatti - User Experience Designer",
    description:
      "A passionate user experience designer based in Indianapolis with 2 years of experience.",
    images: [
      {
        url: "https://sampada.design/images/og-image.png",
        alt: "Sampada Taralgatti - User Experience Designer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-black text-white ${inter.variable} ${karla.variable} font-karla`}
      >
        {children}
      </body>
    </html>
  );
}
