import { teamMembers } from "@/constants/about/teamMembers"
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function OurTeam() {
    return (
        <section className="">
            <div className="bg-[#FBFAF8]">
                <div className="max-w-[1440px] lg:p-25 md:py-16 lg:px-8 py-8 px-6 mx-auto">
                    <h6 className="font-switzer text-center text-[11px] md:text-[13px] lg:text-[13px] leading-[22px] tracking-[1.2px] bg-gradient-to-r from-[#FE9A00] to-[#FFA500] bg-clip-text text-transparent select-none">
                        Quetions
                    </h6>
                    <h1 className="font-lora text-center text-slate-800 text-2xl  md:text-[32px] lg:text-[40px] lg:leading-18 md:leading-12 leading-9 lg:tracking-[2.5px] md:tracking-[5%] tracking-[2px] lg:mt-6 lg:mb-4 md:mt-2 md:mb-4 mt-4 mb-4">Meet Our Team</h1>

                    <p className="mb-4 text-[13px]  leading-[22px] tracking-[1.2px] text-slate-500 text-center">The minds and hearts behind every extraordinary journey</p>
                    {/* separator */}
                    <div className="flex items-center my-16 justify-center gap-4">
                        <div className="w-[200px] h-[1px] bg-[#EDE0C8]"></div>
                        <div className="w-2 h-2 bg-[#FE9A00] rotate-45" />
                        <div className="w-[200px] h-[1px] bg-[#EDE0C8]"></div>
                    </div>

                    <div className="flex flex-wrap lg:flex-nowrap justify-center items-start gap-y-12 gap-x-6 md:gap-x-4 lg:gap-8 w-full">
                        {teamMembers?.map((member) => (
                            <div
                                key={member.id}
                                className="group flex flex-col items-center text-center justify-center transition-all duration-500 ease-out transform hover:-translate-y-4 w-full md:w-[calc(33.33%-24px)] lg:w-auto lg:flex-1"
                            >
                                <div className="relative lg:w-full aspect-square max-w-[158px] rounded-full p-[3px] bg-transparent flex items-center justify-center lg:mb-8 md:mb-8 sm:mb-4 mx-auto">
                                    <div className="relative lg:w-full lg:h-full md:w-[84px] md:h-[84px] w-[64px] h-[64px] rounded-full  overflow-hidden border border-[#FE9A00]/60">
                                        <Image
                                            src={member.photo}
                                            alt={member.name}
                                            fill
                                            sizes="(max-w-768px) 100vw, (max-w-1024px) 33vw, 20vw"
                                            className="object-cover p-1 transition-transform duration-500 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                            <div className="flex gap-3 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                                                <a href="#" className="text-white hover:text-[#FE9A00] transition-colors p-1">
                                                    <FaFacebook size={14} />
                                                </a>
                                                <a href="#" className="text-white hover:text-[#FE9A00] transition-colors p-1">
                                                    <FaTwitter size={14} />
                                                </a>
                                                <a href="#" className="text-white hover:text-[#FE9A00] transition-colors p-1">
                                                    <FaLinkedin size={14} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center flex-wrap w-full">
                                    <h4 className="font-lora text-slate-600 text-sm sm:text-base md:text-lg font-semibold tracking-[0.5px] mb-1 sm:mb-2 w-full break-words">
                                        {member.name}
                                    </h4>
                                    <p className="font-switzer text-[#FFA500] text-[9px] sm:text-[10px] md:text-[11px] leading-tight tracking-[1.5px] uppercase font-medium w-[150px] lg:w-full break-words">
                                        {member.position}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
