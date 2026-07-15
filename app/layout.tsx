import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CityGfx | High-converting video ads",
  description: "High-converting video ads that drive engagement, leads, and sales. Professional AI-assisted video ad agency for e-commerce, local businesses, and digital marketers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-white text-text-dark">{children}</body>
    </html>
  );
}
