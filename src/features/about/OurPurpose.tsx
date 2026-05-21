import Image from "next/image";

export default function OurPurpose() {
    return (
        <section className=" bg-white text-black">
            <div className="max-w-[1440px] mx-auto lg:p-25 md:px-8 md:py-16 px-6 py-8">
                <div className="flex md:flex-col-reverse flex-col-reverse lg:flex-row lg:gap-[90px] md:gap-12 gap-6 justify-center items-center">
                    <div className="lg:w-1/2 w-full lg:px-0 md:px-[118px] flex justify-center lg:block">
                     <Image
                        src="/about/mission-vision.jpg"
                        alt="Our Purpose background"
                        width={570}
                        height={712}
                        className="aspect-auto"
                    />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <h6 className="font-switzer lg:text-left text-center text-[11px] md:text-[13px] lg:text-[13px] leading-[22px] tracking-[1.2px] bg-gradient-to-r from-[#FE9A00] to-[#FFA500] bg-clip-text text-transparent select-none">
                            Our Purpose
                        </h6>
                        <h1 className="font-lora lg:text-left text-center text-slate-800 text-2xl  md:text-[32px] lg:text-[40px] lg:leading-18 md:leading-12 leading-9 lg:tracking-[2.5px] md:tracking-[5%] tracking-[2px] lg:mt-6 lg:mb-4 md:mt-2 md:mb-4 mt-4 mb-4">What Drives Us</h1>

                        <div>
                            <div>
                                <div className="flex gap-4 items-center">
                                    <div className="w-8 bg-[#FFA500] h-[1px]" />
                                    <h4 className="font-lora text-[#1C1813]  text-[26px] leading-[54px] tracking-[2.5px]">Our Mission</h4>
                                </div>
                                <p className="mb-4 text-[13px] leading-[22px] tracking-[1.2px] text-slate-500 ">To simplify travel by providing clear guidance, reliable services, and thoughtful planning — ensuring every journey feels seamless and effortless. We believe in consistently exceeding expectations at every step, so every traveler feels informed, supported, and genuinely cared for.</p>
                            </div>
                            <div>
                                <div className="flex gap-4 items-center">
                                    <div className="w-8 bg-[#FFA500] h-[1px]" />
                                    <h4 className="font-lora text-[#1C1813]  text-[26px] leading-[54px] tracking-[2.5px]">Our Vision</h4>
                                </div>
                                <p className="mb-4 text-[13px] leading-[22px] tracking-[1.2px] text-slate-500 ">To become the most trusted travel partner for travelers seeking meaningful and worthwhile experiences — accessible to anyone, from anywhere. Through continuous improvement and a passion for discovery, we strive to shape journeys that truly matter.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
