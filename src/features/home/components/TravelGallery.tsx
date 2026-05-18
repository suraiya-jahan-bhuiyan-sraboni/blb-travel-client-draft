"use client";

import { useState } from "react";
import Image from "next/image";
import { travelGalleryPhotos } from "@/constants/home/travelGallery";

export default function TravelGallery() {
  const [activeTab, setActiveTab] = useState("Cruise Packages");

  const categories = travelGalleryPhotos.map((item) => item.category);

  const activeGallery = travelGalleryPhotos.find(
    (item) => item.category === activeTab
  );
  const currentImages = activeGallery ? activeGallery.images : [];


  return (
    <section className="w-full bg-[#FBFBFB] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto text-center">

        <h2 className="font-lora text-[28px] md:text-[32px] md:leading-12 lg:leading-18 tracking-[2.5px] lg:text-[40px] text-[#334155] mb-4">
          A Collection Of Experiences For You
        </h2>

        <p className="font-switzer lg:text-[13px] md:text-[13px] lg:leading-[22px] text-gray-500 tracking-[1.2px] max-w-[900px] mx-auto mb-8">
          Browse our complete gallery of travel packages and services—from leisure journeys to purposeful travel—each thoughtfully designed to deliver clarity, comfort, and trust at every step.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-[900px] mx-auto mb-16">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`font-switzer text-[14px] tracking-[0.5px] px-6  py-[6px] rounded-full border transition-all duration-300 cursor-pointer ${isActive
                  ? "bg-[#FE9A00] border-[#FE9A00] text-white shadow-sm"
                  : "bg-white border-gray-200 text-gray-600 hover:border-gray-400"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-3 md:gap-3 lg:gap-6 items-start">
          {currentImages.map((imgSrc, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out ${index > 2 ? "hidden md:flex" : "flex"
                } items-center gap-2 w-full ${index % 2 === 1
                  ? "mt-[40px] md:mt-[78px] lg:mt-[78px]"
                  : "mt-0 md:mt-0"
                }`}
            >
              <div className="w-[1px] h-[170px] md:h-[210px] lg:h-[330px] text-center bg-slate-400 opacity-100 shrink-0" />

              <div className="relative flex-1 lg:w-full h-[180px] md:h-[220px] lg:h-[350px] overflow-hidden rounded-[2px]">
                <Image
                  src={imgSrc}
                  alt={`${activeTab} destination ${index + 1}`}
                  fill
                  sizes="(max-w-768px) 33vw, (max-w-1024px) 20vw, 20vw"
                  priority={index < 3}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button className="font-switzer inline-flex items-center justify-center border border-[#FE9A00] hover:bg-[#FE9A00] text-[#FE9A00] hover:text-white text-[13px] tracking-[1.5px] px-8 py-3 rounded-[2px] shadow-sm transition-all duration-300 cursor-pointer active:scale-[0.98]">
            View More
          </button>
        </div>

      </div>
    </section>
  );
}