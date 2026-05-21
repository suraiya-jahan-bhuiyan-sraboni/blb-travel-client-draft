"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { exploreBangladesh } from "@/constants/offers/exploreBangladesh";

const ExploreBangladesh = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < exploreBangladesh.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <section className="bg-[#F6F5F3] py-[100px] overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-[100px]">
        
   
        <div className="flex flex-col items-center text-center">
          <span className="font-switzer text-[13px] uppercase tracking-[1.2px] text-[#D89B29]">
            Explore At Home
          </span>

          <h2 className="mt-3 font-lora text-[32px] lg:text-[40px] leading-[44px] lg:leading-[72px] tracking-[2.5px] text-[#1F2A44]">
            Discover Bangladesh
          </h2>

          <p className="mt-2 max-w-[760px] font-switzer text-[13px] leading-[22px] tracking-[1.2px] text-[#6B7280]">
            From the world's longest sea beach to misty hilltops and ancient
            waterways — Bangladesh holds wonders most people have yet to
            discover.
          </p>
        </div>

    
        <div className="relative mt-[44px] lg:hidden">
          
        
          {current > 0 && (
            <button
              onClick={prevSlide}
              className="
                absolute
                left-2
                top-1/2
                z-30
                -translate-y-1/2
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-xl
              "
            >
              <ChevronLeft size={20} />
            </button>
          )}

        
          {current < exploreBangladesh.length - 1 && (
            <button
              onClick={nextSlide}
              className="
                absolute
                right-2
                top-1/2
                z-30
                -translate-y-1/2
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-xl
              "
            >
              <ChevronRight size={20} />
            </button>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {exploreBangladesh.map((item) => (
                <div
                  key={item.id}
                  className="min-w-full px-1"
                >
                  <div className="group relative overflow-hidden rounded-[14px] bg-white shadow-[0px_4px_20px_0px_#00000012]">
                    
                    <div className="relative h-[220px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-active:opacity-100" />

                      <div className="absolute bottom-5 left-5 z-10 translate-y-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100">
                        <p className="font-switzer text-[14px] text-white">
                          {item.duration}
                        </p>

                        <p className="mt-1 font-switzer text-[14px] text-white line-through opacity-70">
                          {item.oldPrice}
                        </p>

                        <p className="mt-1 font-switzer text-[16px] font-medium text-[#F59E0B]">
                          {item.price}
                        </p>
                      </div>

                      <div className="absolute right-4 top-4 z-10 rounded-[6px] bg-[#F59E0B] px-3 py-1">
                        <span className="font-switzer text-[11px] font-semibold uppercase tracking-[0.8px] text-white">
                          {item.discount}
                        </span>
                      </div>
                    </div>

                    <div className="flex h-[81px] items-center px-6">
                      <h3 className="font-lora text-[16px] font-semibold uppercase leading-[24px] tracking-[0.05em] text-[#2D3748]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
        











        <div className="mt-[44px] hidden grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 lg:grid">
          {exploreBangladesh.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[14px] bg-white shadow-[0px_4px_20px_0px_#00000012]"
            >
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-5 left-5 z-10 translate-y-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-switzer text-[14px] text-white">
                    {item.duration}
                  </p>

                  <p className="mt-1 font-switzer text-[14px] text-white line-through opacity-70">
                    {item.oldPrice}
                  </p>

                  <p className="mt-1 font-switzer text-[16px] font-medium text-[#F59E0B]">
                    {item.price}
                  </p>
                </div>

                <div className="absolute right-4 top-4 z-10 rounded-[6px] bg-[#F59E0B] px-3 py-1">
                  <span className="font-switzer text-[11px] font-semibold uppercase tracking-[0.8px] text-white">
                    {item.discount}
                  </span>
                </div>
              </div>

              <div className="flex h-[81px] items-center px-6">
                <h3 className="font-lora text-[16px] font-semibold uppercase leading-[24px] tracking-[0.05em] text-[#2D3748]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreBangladesh;