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

  const offsetClasses = [
    "mt-0",       
    "mt-[48px]",  
    "mt-0",        
    "mt-[48px]",   
    "mt-0",        
  ];

  return (
    <section className="w-full bg-[#FBFBFB] py-16 px-6 md:px-12 lg:px-20 xl:px-[120px] 2xl:px-[219.5px]">
      <div className="max-w-[1440px] mx-auto text-center">
        
        <h2 className="font-lora text-[28px] md:text-[36px] lg:text-[48px] text-[#334155] tracking-[1px] mb-4">
          A Collection Of Experiences For You
        </h2>
        
        <p className="font-switzer text-[13px] md:text-[14px] leading-[1.8] text-gray-500 tracking-[0.5px] max-w-[800px] mx-auto mb-10">
          Browse our complete gallery of travel packages and services—from leisure journeys to purposeful travel—each thoughtfully designed to deliver clarity, comfort, and trust at every step.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-[900px] mx-auto mb-16">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`font-switzer text-[13px] tracking-[0.5px] px-6 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#FE9A00] border-[#FE9A00] text-white shadow-sm"
                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-400"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start min-h-[450px]">
          {currentImages.map((imgSrc, index) => (
            <div
              key={index}
              className={`relative w-full aspect-[848/1200] overflow-hidden rounded-[2px] transition-all duration-500 ease-in-out border-l-2 border-[#FE9A00]/20 ${
                index % 2 === 1 ? "md:mt-12" : "md:mt-0"
              }`}
            >
              <Image
                src={imgSrc}
                alt={`${activeTab} destination ${index + 1}`}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1024px) 33vw, 20vw"
                priority={index < 3}
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>

        <div className="mt-20">
          <button className="font-switzer inline-flex items-center justify-center border border-[#FE9A00] hover:bg-[#FE9A00] text-[#FE9A00] hover:text-white text-[13px] tracking-[1.5px] font-medium px-10 py-3 rounded-[2px] shadow-sm transition-all duration-300 cursor-pointer active:scale-[0.98]">
            View More
          </button>
        </div>

      </div>
    </section>
  );
}