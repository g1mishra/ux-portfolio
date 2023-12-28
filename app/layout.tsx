import type { Metadata } from "next";
import { Inter, Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-black text-white ${karla.className} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
