import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono, Cinzel, Lora, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/features/home/Footer";
import NewsletterSection from "@/features/home/NewsletterSection";
import QueryProvider from "@/providers/QueryProvider";

const switzer = localFont({
  src: [
    {
      path: "../../public/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Switzer-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/Switzer-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Switzer-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/Switzer-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BLB Travels",
  description: "Your premium travel partner.",
};
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${poppins.variable} ${lora.variable} ${switzer.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          {children}
        </QueryProvider>
        <NewsletterSection />
        <Footer />

      </body>
    </html>
  );
}
