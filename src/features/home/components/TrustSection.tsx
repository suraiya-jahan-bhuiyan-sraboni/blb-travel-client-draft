"use client";

import Image from "next/image";

export default function TrustSection() {

    return (
        <section className="bg-[#FBFAF8]">

            <div className="
                lg:py-[74.5px] 
                lg:px-25
                md:px-8
                md:py-16
                px-6
                py-15
                ">
                <div className="w-full text-center flex flex-col items-center">
                    <div >
                        <div className="w-full">
                            <h6 className="font-switzer text-center text-[11px] md:text-[13px] lg:text-[13px] leading-[22px] tracking-[1.2px] bg-gradient-to-r from-[#FE9A00] to-[#FFA500] bg-clip-text text-transparent select-none">
                                Our Credentials
                            </h6>
                            <h1 className="font-lora text-center text-slate-800 text-2xl  md:text-[32px] lg:text-[40px] lg:leading-18 md:leading-12 leading-9 lg:tracking-[2.5px] md:tracking-[5%] tracking-[2px] lg:mt-6 lg:mb-4 md:mt-2 md:mb-4 mt-4 mb-4">A Travel Partner <br /> You Can Trust</h1>

                            <p className="mb-4 text-[13px] lg:w-[645px] md:w-full leading-[22px] tracking-[1.2px] text-slate-500 text-center">Every journey we craft begins with the understanding that trust is earned, not assumed. Our partnerships and certifications reflect our unwavering commitment to your experience.</p>
                        </div>
                        <div className="flex items-center justify-center mt-8">

                            <div className="flex items-center justify-items-center">
                                <div>
                                    <Image
                                        src="/trustPageIcon/lata.png"
                                        alt="IATA Logo"
                                        width={56}
                                        height={56}
                                        className="object-contain border border-[#FFA500] rounded-full p-[10px]"
                                    />
                                    <h4 className="text-[14px] font-switzer leading-6 tracking-[5%] text-center text-[#A8823A] mt-2">IATA</h4>
                                </div>
                                <div className="w-[1px] lg:mx-15 md:mx-15 mx-8 h-10 bg-[#A8823A99]" />
                            </div>
                            <div className="flex items-center justify-items-center">
                                <div>
                                    <Image
                                        src="/trustPageIcon/pata.png"
                                        alt="PATA Logo"
                                        width={56}
                                        height={56}
                                        className="object-contain border border-[#FFA500] rounded-full p-[10px]"
                                    />
                                    <h4 className="text-[14px] pr- font-switzer leading-6 tracking-[5%] text-center text-[#A8823A] mt-2">PATA</h4>
                                </div>
                                <div className="w-[1px] lg:mx-15 md:mx-15 mx-8 h-10 bg-[#A8823A99]" />
                            </div>
                            <div className="flex items-center justify-items-center ">
                                <div>
                                    <Image
                                        src="/trustPageIcon/atab.png"
                                        alt="ATAB Logo"
                                        width={56}
                                        height={56}
                                        className="object-contain border border-[#FFA500] rounded-full p-[10px]"
                                    />
                                    <h4 className="text-[14px] pr- font-switzer leading-6 tracking-[5%] text-center text-[#A8823A] mt-2">ATAB</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* 3 Trust section  */}
                    <div className="flex lg:flex-row flex-col gap-4 mt-20">
                        <div className="bg-black">
                            <div className="lg:px-[70px] md:px-[70px] p-8 md:py-[52px] lg:py-[52px] ">
                                <h2 className="font-cormorant-garamond text-[#C8A96A] font-light text-[64px] leading-[64px]">01</h2>
                                <h4 className="font-cormorant-garamond text-[34px] leading-[100%] my-4">Reliability</h4>
                                <p className="font-jost font-light text-[13px] leading-[24px]">Every booking, every itinerary, every <br /> commitment— delivered with absolute precision <br /> and care.</p>
                            </div>
                        </div>
                        <div className="bg-black">
                            <div className="lg:px-[70px] md:px-[70px] p-8 md:py-[52px] lg:py-[52px]">
                                <h2 className="font-cormorant-garamond text-[#C8A96A] font-light text-[64px] leading-[64px]">02</h2>
                                <h4 className="font-cormorant-garamond text-[34px] leading-[100%] my-4">Transparency</h4>
                                <p className="font-jost font-light text-[13px] leading-[24px]">No hidden fees, no surprises. We believe in
                                    <br /> complete clarity from the first consultation to <br /> final departure.</p>
                            </div>
                        </div>
                        <div className="bg-black">
                            <div className="lg:px-[70px] md:px-[70px] p-8 md:py-[52px] lg:py-[52px]">
                                <h2 className="font-cormorant-garamond text-[#C8A96A] font-light text-[64px] leading-[64px]">03</h2>
                                <h4 className="font-cormorant-garamond text-[34px] leading-[100%] my-4">Excellence</h4>
                                <p className="font-jost font-light text-[13px] leading-[24px]">Every booking, every itinerary, every <br /> commitment— delivered with absolute precision <br /> and care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}