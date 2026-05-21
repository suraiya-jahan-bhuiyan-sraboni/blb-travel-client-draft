"use client";

import { useRef } from "react";

import PopularPackageCard from "./PopularPackageCard";
import { popularPackages } from "@/constants/offers/popularPackages";

const PopularPackages = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#F8F8F8] py-[70px] lg:py-[100px] px-4 lg:px-[130px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        
       
        <div className="flex flex-col items-center gap-4">
          <span
            className="
              text-[13px]
              leading-[22px]
              tracking-[1.2px]
              uppercase
              bg-gradient-to-r
              from-[#FE9A00]
              to-[#FFA500]
              bg-clip-text
              text-transparent
            "
            style={{ fontFamily: "Switzer" }}
          >
            Exclusive Offers
          </span>

          <h2
            className="
              text-[#1E293B]
              text-[32px]
              lg:text-[40px]
              leading-[44px]
              lg:leading-[72px]
              tracking-[2px]
              capitalize
              text-center
            "
            style={{ fontFamily: "Lora" }}
          >
            Popular Packages
          </h2>

          <p
            className="
              max-w-[820px]
              text-center
              text-[#475569]
              text-[13px]
              leading-[22px]
              tracking-[1.2px]
            "
            style={{ fontFamily: "Switzer" }}
          >
            Our finest collection of international travel experiences —
            curated for comfort, culture, and discovery.
          </p>
        </div>

   
        <div className="relative lg:hidden">
          
          {/* Arrows */}
          <button
            onClick={scrollLeft}
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              z-30
              w-10
              h-10
              rounded-full
              bg-white
              shadow-lg
              flex
              items-center
              justify-center
            "
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              z-30
              w-10
              h-10
              rounded-full
              bg-white
              shadow-lg
              flex
              items-center
              justify-center
            "
          >
            →
          </button>

          <div
            ref={sliderRef}
            className="
              flex
              gap-4
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              no-scrollbar
              pr-20
            "
          >
            {popularPackages.map((item) => (
              <div
                key={item.id}
                className="
                  min-w-[78%]
                  snap-start
                  flex-shrink-0
                "
              >
                <PopularPackageCard packageItem={item} />
              </div>
            ))}
          </div>
        </div>

       
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {popularPackages.map((item) => (
            <PopularPackageCard
              key={item.id}
              packageItem={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;