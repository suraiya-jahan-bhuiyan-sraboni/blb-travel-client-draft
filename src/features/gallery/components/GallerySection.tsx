"use client";

import Image from "next/image";
import { useState } from "react";

import { galleryItems, galleryTabs } from "@/constants/gallery";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("Explore All");

  const filteredImages =
    activeTab === "Explore All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="w-full bg-[#F8FAFC] px-4 py-[60px] md:px-[100px] md:py-[100px]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-12">
       
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            className="
              text-[32px]
              font-normal
              uppercase
              leading-13
              tracking-[2.5px]
              text-[#1E293B]
              md:text-[40px]
              md:leading-18
            "
                    
            style={{
              fontFamily: "Lora",
            }}
          >
            OUR GALLERY
          </h2>

          <p
            className="
              max-w-[925px]
              text-[13px]
              leading-[22px]
              tracking-[1.2px]
              text-[#64748B]
            "
            style={{
              fontFamily: "Switzer",
              fontVariant: "small-caps",
            }}
          >
            Browse our complete gallery of travel packages and
            services—from leisure journeys to purposeful travel—each
            thoughtfully designed to deliver clarity, comfort, and trust at
            every step.
          </p>
        </div>

      
        <div className="flex flex-wrap items-center justify-center gap-3">
          {galleryTabs.map((tab) => {
            const active = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  h-[33px]
                  rounded-[100px]
                  border
                  px-6
                  text-[14px]
                  font-light
                  leading-[150%]
                  tracking-[0.03em]
                  transition-all
                  duration-300
                  ${
                    active
                      ? "border-[#FE9A00] bg-gradient-to-r from-[#FE9A00] to-[#FFA500] text-white"
                      : "border-[#E2E8F0] bg-white text-[#475569]"
                  }
                `}
                style={{
                  fontFamily: "Switzer",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

      
        <div className="relative hidden w-full md:block">
          <div className="mx-auto flex max-w-[1189px] gap-[10px]">
            {/* Column 1 */}
            <div className="flex w-[389px] flex-col gap-[10px]">
              {[0, 3, 6, 9].map((index, i) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-[4px] ${
                    i % 2 === 0 ? "h-[375px]" : "h-[260px]"
                  }`}
                >
                  <Image
                    src={filteredImages[index]?.image}
                    alt={filteredImages[index]?.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

              
                  <div
                    className="
                      absolute inset-0
                      bg-[#00000099]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                
                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      z-10
                      flex
                      h-[33px]
                      w-[238px]
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-t-[4px]
                      bg-[#F3EEE7]
                      px-[24px]
                      py-[8px]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <p
                      className="
                        text-[13px]
                        font-normal
                        leading-[100%]
                        tracking-[1.5px]
                        text-black
                      "
                      style={{
                        fontFamily: "Switzer",
                        fontVariant: "small-caps",
                      }}
                    >
                      {filteredImages[index]?.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          
            <div className="flex w-[390px] flex-col gap-[10px]">
              {[1, 4, 7, 10].map((index, i) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-[4px] ${
                    i % 2 === 0 ? "h-[260px]" : "h-[375px]"
                  }`}
                >
                  <Image
                    src={filteredImages[index]?.image}
                    alt={filteredImages[index]?.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

               
                  <div
                    className="
                      absolute inset-0
                      bg-[#00000099]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                
                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      z-10
                      flex
                      h-[33px]
                      w-[238px]
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-t-[4px]
                      bg-[#F3EEE7]
                      px-[24px]
                      py-[8px]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <p
                      className="
                        text-[13px]
                        font-normal
                        leading-[100%]
                        tracking-[1.5px]
                        text-black
                      "
                      style={{
                        fontFamily: "Switzer",
                        fontVariant: "small-caps",
                      }}
                    >
                      {filteredImages[index]?.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

           
            <div className="flex w-[389px] flex-col gap-[10px]">
              {[2, 5, 8, 11].map((index, i) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-[4px] ${
                    i % 2 === 0 ? "h-[375px]" : "h-[260px]"
                  }`}
                >
                  <Image
                    src={filteredImages[index]?.image}
                    alt={filteredImages[index]?.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                 
                  <div
                    className="
                      absolute inset-0
                      bg-[#00000099]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                
                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      z-10
                      flex
                      h-[33px]
                      w-[238px]
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-t-[4px]
                      bg-[#F3EEE7]
                      px-[24px]
                      py-[8px]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <p
                      className="
                        text-[13px]
                        font-normal
                        leading-[100%]
                        tracking-[1.5px]
                        text-black
                      "
                      style={{
                        fontFamily: "Switzer",
                        fontVariant: "small-caps",
                      }}
                    >
                      {filteredImages[index]?.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      
<div className="block w-full md:hidden">
  <div className="grid grid-cols-3 gap-[2px]">
    
    <div className="flex flex-col gap-[2px]">
      {[0, 3, 6, 9].map((index, i) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-[2px] ${
            i % 2 === 0 ? "h-[120px]" : "h-[84px]"
          }`}
        >
          <Image
            src={filteredImages[index]?.image}
            alt={filteredImages[index]?.title}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>

    <div className="flex flex-col gap-[2px]">
      {[1, 4, 7, 10].map((index, i) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-[2px] ${
            i % 2 === 0 ? "h-[84px]" : "h-[120px]"
          }`}
        >
          <Image
            src={filteredImages[index]?.image}
            alt={filteredImages[index]?.title}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>

    
    <div className="flex flex-col gap-[2px]">
      {[2, 5, 8, 11].map((index, i) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-[2px] ${
            i % 2 === 0 ? "h-[120px]" : "h-[84px]"
          }`}
        >
          <Image
            src={filteredImages[index]?.image}
            alt={filteredImages[index]?.title}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default GallerySection;