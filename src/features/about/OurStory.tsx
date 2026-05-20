import Image from 'next/image'

export default function OurStory() {
    return (
        <section className="w-full">
            <div className="relative w-full h-screen overflow-hidden">
                <Image
                    src="/about/about-hero0.jpg"
                    alt="Our Story background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#000000ab] via-[#00000066]  to-[#00000033]" />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <h2 className="font-lora text-white lg:text-[32px] leading-[31.2px] sm:text-[36px] text-[24px] md:text-[24px] font-normal tracking-[2px] uppercase text-center select-none">
                        Our Story
                    </h2>
                </div>
            </div>
        </section>
    )
}