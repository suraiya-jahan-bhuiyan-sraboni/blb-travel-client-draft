"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative w-full bg-[#050505] overflow-hidden">
            {/* Main Hero Container */}
            <div className="relative h-[70vh] min-h-[900px] w-full flex flex-col justify-end pb-12">
                {/* Background Image */}
                <Image
                    src="/banner/banner.jpg"
                    alt="Travel destination"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Reduced Gradient Overlay (lighter at top/middle to keep city visible) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-[#050505]" />

                {/* Hero Content Container */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
                    {/* Golden Subheading */}
                    <p className="text-[11px] sm:text-xs uppercase tracking-[3px] font-semibold text-[#c09940] mb-3">
                        We are more than an agency
                    </p>

                    {/* Main Heading broken onto two lines intentionally */}
                    <h1 className="text-2xl sm:text-3xl md:text-[32px] font-normal tracking-wide text-white leading-[1.2] max-w-4xl uppercase">
                        Journeys Designed Beyond Expectations
                    </h1>

                    {/* Outlined Button */}
                    <div className="mt-8">
                        <Link
                            href="#packages"
                            className="inline-flex items-center justify-center px-5 py-2.5 border border-[#DAA620]/40 text-[11px] font-medium text-[#DAA620] tracking-[2px] uppercase hover:bg-[#FE9A00] hover:text-white transition-colors duration-300"
                        >
                            Explore Packages
                        </Link>
                    </div>
                </div>
            </div>

            {/* Exactly Matching Stats Row Container */}
            <div className="relative z-10 bg-[#050505] pt-4 pb-16 w-full">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Flexbox container for exact side-by-side element layout */}
                    <div className="flex items-center justify-between sm:justify-center text-center">

                        {/* Stat 1 */}
                        <div className="flex flex-col items-center flex-1">
                            <span className="text-2xl sm:text-3xl md:text-[40px] font-light text-white tracking-normal">
                                5000+
                            </span>
                            <span className="text-[9px] sm:text-[10px] uppercase tracking-[1.5px] text-[#c09940] mt-1.5 whitespace-nowrap">
                                Travelers Served
                            </span>
                        </div>

                        {/* Exact Divider 1 */}
                        <div className="h-20 w-px bg-white self-start mt-2" />

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center flex-1">
                            <span className="text-2xl sm:text-3xl md:text-[40px] font-light text-white tracking-normal">
                                24/7
                            </span>
                            <span className="text-[9px] sm:text-[10px] uppercase tracking-[1.5px] text-[#c09940] mt-1.5 whitespace-nowrap">
                                Travel Support
                            </span>
                        </div>

                        {/* Exact Divider 2 */}
                        <div className="h-20 w-px bg-white self-start mt-2" />

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center flex-1">
                            <span className="text-2xl sm:text-3xl md:text-[40px] font-light text-white tracking-normal">
                                98%
                            </span>
                            <span className="text-[9px] sm:text-[10px] uppercase tracking-[1.5px] text-[#c09940] mt-1.5 whitespace-nowrap">
                                Visa Success
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}