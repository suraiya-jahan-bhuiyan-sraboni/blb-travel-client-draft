"use client";

import Link from "next/link";

export default function Feedback() {
    return (
        <section className="w-full bg-[#F0F0F0] text-black py-10 md:py-14 px-6 md:px-[32px] lg:px-20 xl:px-[120px] 2xl:px-[219.5px]">
            <div className="max-w-[1440px] md:flex-row mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-12  lg:text-left">
                <div className="flex flex-col items-start max-w-[760px] w-full">
                    <span className="font-switzer text-[11px] md:text-[11px] leading-[16.5px] tracking-[2.5px] text-[#FE9A00] font-bold uppercase mb-[24px]">
                        YOUR VOICE MATTERS
                    </span>

                    <h2 className="font-lora text-[20px] md:text-[28px] lg:text-[48px] tracking-[5%] text-[#334155] leading-tight mb-[16px] max-w-[600px] lg:max-w-none">
                        Share your experience with us
                    </h2>

                    <p className="font-switzer text-[13px] md:text-[16px] leading-[1.6] text-gray-600 tracking-[1.2px]  max-w-[540px] lg:max-w-none">
                        Your feedback drives our commitment to excellence. Whether it&apos;s praise or concern, we&apos;re here to listen and improve.
                    </p>
                </div>
                <Link
                    href="/feedback">
                    <button className="font-switzer flex-1 w-[160px] mt-0 md:mt-24 h-[41px] inline-flex items-center justify-center bg-[#FE9A00] hover:bg-[#FFA500] text-white text-[13px] tracking-[1.5px] px-6 py-3 rounded-[2px] shadow-sm active:scale-[0.98] transition-all duration-200 text-center">
                        Give Feedback
                    </button>
                </Link>

            </div>
        </section>
    );
}