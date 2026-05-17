import type { Metadata } from "next";
import { Geist, Geist_Mono,Cinzel, Poppins  } from "next/font/google";
import "./globals.css";
import Footer from "@/features/home/Footer";
import NewsletterSection from "@/features/home/NewsletterSection";
import ExpertConsultation from "@/features/home/ExpertConsultation";

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
      className={`${geistSans.variable} ${geistMono.variable}  ${cinzel.variable}   ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ExpertConsultation/>
        <NewsletterSection/>
        <Footer/>

      </body>
    </html>
  );
}
