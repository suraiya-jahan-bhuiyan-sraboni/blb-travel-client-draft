"use client";

import Image from "next/image";
import Link from "next/link";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";

export default function TrustSection() {
    return (
        <section className="relative w-full bg-white py-24 min-h-[500px] flex items-center justify-center">

            {/* STICKY LEFT SOCIAL BAR */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-[#8c8c8c] flex flex-col items-center py-5 px-3 gap-[18px] shadow-sm rounded-r-[4px]">
                <Link
                    href="#"
                    className="text-white hover:text-[#FE9A00] transition-colors duration-200 text-lg flex items-center justify-center w-6 h-6 rounded-full"
                >
                    <FaInstagramSquare />
                </Link>
                <Link
                    href="#"
                    className="text-white hover:text-[#FE9A00] transition-colors duration-200 text-lg flex items-center justify-center w-6 h-6 rounded-full"
                >
                    <FaFacebook />
                </Link>
                <Link
                    href="#"
                    className="text-white hover:text-[#FE9A00] transition-colors duration-200 text-base flex items-center justify-center w-6 h-6 rounded-full"
                >
                    <FaXTwitter />
                </Link>
                <Link
                    href="#"
                    className="text-white hover:text-[#FE9A00] transition-colors duration-200 text-lg flex items-center justify-center w-6 h-6 rounded-full"
                >
                    <AiFillTikTok />
                </Link>
                <Link
                    href="#"
                    className="text-white hover:text-[#FE9A00] transition-colors duration-200 text-lg flex items-center justify-center w-6 h-6 rounded-full"
                >
                    <FaLinkedin />
                </Link>
            </div>

            {/* MAIN CONTENT BLOCK */}
            <div className="w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

                {/* Serif Elegant Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-[36px] font-normal tracking-[0.15em] text-[#1c2c3e] uppercase font-serif mb-6 leading-tight">
                    A Travel Partener You Can Trust
                </h2>

                {/* Main Body Paragraph */}
                <p className="text-xs sm:text-sm text-[#7e8b9b] leading-[22px] max-w-2xl font-light tracking-wide">
                    From seamless flight bookings to life-changing journeys, we simplify travel, treatment, and
                    education through one trusted platform. Every experience is thoughtfully arranged,
                    transparently priced, and professionally supported.{" "}
                    <Link href="#" className="text-[#DAA620] underline font-medium hover:text-[#b8922e] transition-colors">
                        Learn More
                    </Link>
                </p>

                {/* Circular Badge Logos Container */}
                <div className="flex items-center justify-center gap-6 md:gap-8 mt-12">
                    {/* Logo 1 */}
                    <div className="w-20 h-20 rounded-full bg-[#f4f7f9] flex items-center justify-center p-3 hover:shadow-sm transition-shadow">
                        <Image
                            src="/trustPageIcon/lata.png"
                            alt="IATA Logo"
                            width={55}
                            height={55}
                            className="object-contain"
                        />
                    </div>

                    {/* Logo 2 */}
                    <div className="w-20 h-20 rounded-full bg-[#f4f7f9] flex items-center justify-center p-3 hover:shadow-sm transition-shadow">
                        <Image
                            src="/trustPageIcon/atab.png"
                            alt="ATAB Logo"
                            width={55}
                            height={55}
                            className="object-contain"
                        />
                    </div>

                    {/* Logo 3 */}
                    <div className="w-20 h-20 rounded-full bg-[#f4f7f9] flex items-center justify-center p-3 hover:shadow-sm transition-shadow">
                        <Image
                            src="/trustPageIcon/pata.png"
                            alt="PATA Logo"
                            width={55}
                            height={55}
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}