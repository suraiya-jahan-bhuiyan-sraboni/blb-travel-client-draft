"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqItems } from "@/constants/about/faqItems";
import { FAQItems } from "@/types/about/faqItems.types";

export default function FAQ() {
    const [openId, setOpenId] = useState<string | number | null>("1");

    const toggleFaq = (id: string | number) => {
        setOpenId(openId === id ? null : id);
    };

    const halfLength = Math.ceil(faqItems.length / 2);
    const leftColItems = faqItems.slice(0, halfLength);
    const rightColItems = faqItems.slice(halfLength);

    return (
        <section>
            <div className="bg-[#ffffff] text-black">
                <div className="max-w-[1440px] lg:p-25 md:py-16 lg:px-8 py-8 px-6 mx-auto">
                    <div className="mb-12">
                        <h6 className="font-switzer text-[11px] md:text-[13px] lg:text-[13px] leading-[22px] tracking-[1.2px] bg-gradient-to-r from-[#FE9A00] to-[#FFA500] bg-clip-text text-transparent select-none">
                            Questions
                        </h6>
                        <h1 className="font-lora  text-slate-800 text-2xl  md:text-[32px] lg:text-[40px] lg:leading-18 md:leading-12 leading-9 lg:tracking-[2.5px] md:tracking-[5%] tracking-[2px] lg:mt-6 lg:mb-4 md:mt-2 md:mb-4 mt-4 mb-4">Frequently Asked Questions</h1>

                        <p className="mb-4 text-[13px]  leading-[22px] tracking-[1.2px] text-slate-500">Find answers to common questions about our travel services, booking process, and policies.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 items-start">

                        <div className="flex flex-col w-full">
                            {leftColItems.map((item) => (
                                <FaqCard
                                    key={item.id}
                                    item={item}
                                    isOpen={openId === item.id}
                                    onToggle={() => toggleFaq(item.id)}
                                />
                            ))}
                        </div>

                        {/* ডান পাশের কলাম */}
                        <div className="flex flex-col w-full">
                            {rightColItems.map((item) => (
                                <FaqCard
                                    key={item.id}
                                    item={item}
                                    isOpen={openId === item.id}
                                    onToggle={() => toggleFaq(item.id)}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

function FaqCard({ item, isOpen, onToggle }: { item: FAQItems; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className="border-b border-gray-300 py-5 w-full transition-all duration-300">
            <button
                onClick={onToggle}
                className="flex cursor-pointer  justify-between items-center w-full text-left gap-4 group"
            >
                <h3 className="font-switzer text-[11px] lg:text-[13px] md:text-[13px] leading-5 tracking-[2px] text-slate-800 transition-colors duration-300 group-hover:text-[#FE9A00]">
                    {item.question}
                </h3>

                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                        ? "border-[#FE9A00]/30 bg-amber-50 text-[#FE9A00] rotate-45" 
                        : "border-gray-300 text-gray-400 bg-transparent"
                    }`}>
                    <Plus size={16} className="transition-transform duration-300" />
                </div>
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
                }`}>
                <div className="overflow-hidden">
                    <p className="text-slate-600 font-switzer text-[11px] lg:text-[13px] md:text-[13px] leading-5 tracking-[2px] max-w-[95%] pb-2">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}