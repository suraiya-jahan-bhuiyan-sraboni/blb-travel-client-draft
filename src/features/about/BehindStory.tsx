import Image from "next/image";

export default function BehindStory() {
    return (
        <section className=" bg-white text-black">
            <div className="max-w-[1440px] mx-auto lg:p-25 md:px-8 md:py-16 px-6 py-8">
                <div className="flex md:flex-col lg:flex-row flex-col lg:gap-[90px] md:gap-12 gap-6 items-center">
                    <div className="lg:w-1/2 w-full ">
                        <h6 className="font-switzer lg:text-left text-center text-[11px] md:text-[13px] lg:text-[13px] leading-[22px] tracking-[1.2px] bg-gradient-to-r from-[#FE9A00] to-[#FFA500] bg-clip-text text-transparent select-none">
                            Who We Are
                        </h6>
                        <h1 className="font-lora lg:text-left text-center text-slate-800 text-2xl  md:text-[32px] lg:text-[40px] lg:leading-18 md:leading-12 leading-9 lg:tracking-[2.5px] md:tracking-[5%] tracking-[2px] lg:mt-6 lg:mb-4 md:mt-2 md:mb-4 mt-4 mb-4">The Story Behind <br /> BLB Travelers</h1>
                        <p className="mb-4 text-[13px] leading-[22px] tracking-[1.2px] text-slate-500 ">BLB Travelers was born from a simple belief: travel should feel effortless, not overwhelming. In a market where travelers often faced unreliable information and unpredictable services, we set out to create something better — built on trust, reliability, and genuine care.</p>
                        <p className="text-[13px] leading-[22px] tracking-[1.2px] text-slate-500 ">The idea behind BLB Travelers is rooted in guidance and trust. From the first spark of inspiration to the final destination, we remain focused on making every journey more confident — whether discovering new horizons, planning the perfect getaway, or exploring the world with peace of mind.</p>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center lg:block">
                        <Image
                            src="/about/story.jpg"
                            alt="Behind Story background"
                            width={570}
                            height={712}
                            className="aspect-auto "
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
