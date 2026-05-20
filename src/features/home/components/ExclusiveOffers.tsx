"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { exclusiveOffers } from "@/constants/exclusiveOffers";

export default function ExclusiveOffers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const activeOffer = exclusiveOffers[activeIndex];

  const prevIndex =
    activeIndex === 0
      ? exclusiveOffers.length - 1
      : activeIndex - 1;

  const nextIndex =
    activeIndex === exclusiveOffers.length - 1
      ? 0
      : activeIndex + 1;

  const handleNext = () => {
    setShowOverlay(false);

    setTimeout(() => {
      setActiveIndex(nextIndex);
    }, 400);
  };

  const handlePrev = () => {
    setShowOverlay(false);

    setTimeout(() => {
      setActiveIndex(prevIndex);
    }, 400);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="w-full overflow-hidden bg-[#F5F5F5] py-[100px]">
      <div className="mx-auto flex max-w-[1282px] flex-col gap-[44px]">
      
        <div className="flex items-center justify-center">
          <h2
            className="
              text-center
              text-[40px]
              font-normal
              uppercase
              leading-[72px]
              tracking-[2.5px]
              text-[#1E293B]
            "
            style={{
              fontFamily: "Lora",
            }}
          >
            EXCLUSIVE OFFERS, LIMITED IN TIME
          </h2>
        </div>

     
        <div
          className="
            mx-auto
            flex
            max-w-[1620px]
            w-full
            items-center
            justify-center
            gap-[40px]
            px-[40px]
          "
        >
      
          <div className="hidden xl:block shrink-0">
            <div className="relative h-[250px] w-[400px] overflow-hidden bg-white">
              <Image
                src={exclusiveOffers[prevIndex].image}
                alt="Previous"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-white/50" />

              <button
                onClick={handlePrev}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-10
                  flex
                  h-[48px]
                  w-[48px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#64748B]
                  bg-white/20
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white/30
                "
              >
                <ChevronLeft
                  size={22}
                  className="text-[#64748B]"
                />
              </button>
            </div>
          </div>

    
          <div
            className="
              group
              relative
              z-10
              h-[350px]
              w-[800px]
              shrink-0
              overflow-hidden
              bg-white
            "
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          >
            <Image
              src={activeOffer.image}
              alt={activeOffer.subtitle}
              fill
              priority
              className="
                object-cover
                transition-transform
                duration-500
                group-hover:scale-[1.02]
              "
            />

       
            <div className="absolute inset-0 bg-black/10" />

            
            <div
              className={`
                absolute
                bottom-[32px]
                left-[64px]
                z-10
                transition-all
                duration-500
                ${
                  showOverlay
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }
              `}
            >
              <h3
                className="
                  text-[40px]
                  font-medium
                  leading-[60px]
                  text-white
                "
                style={{
                  fontFamily: "Lora",
                  letterSpacing: "-0.02em",
                }}
              >
                {activeOffer.country}
              </h3>
            </div>

         
            <div
              className={`
                absolute
                left-1/2
                top-1/2
                z-20
                w-[360px]
                -translate-x-1/2
                -translate-y-1/2
                border
                border-[#FE9A00]
                bg-[#0B0B0B]/95
                px-[22px]
                py-[20px]
                transition-all
                duration-500
                ${
                  showOverlay
                    ? "opacity-100 scale-100"
                    : "pointer-events-none opacity-0 scale-90"
                }
              `}
            >
           
              <div className="mb-[10px] flex items-center justify-between">
                <h4
                  className="
                    text-[15px]
                    font-semibold
                    leading-[24px]
                    text-[#DAA620]
                  "
                  style={{
                    fontFamily: "Lora",
                    letterSpacing: "0.05em",
                  }}
                >
                  {activeOffer.title}
                </h4>

                <span
                  className="
                    text-[14px]
                    font-medium
                    leading-[20px]
                    text-white
                  "
                  style={{
                    fontFamily: "Switzer",
                    letterSpacing: "0.03em",
                  }}
                >
                  {activeOffer.discount.split("·")[1]}
                </span>
              </div>

           
              <p
                className="
                  mb-[12px]
                  border-b
                  border-white/20
                  pb-[12px]
                  text-[14px]
                  font-normal
                  uppercase
                  text-white/70
                "
                style={{
                  fontFamily: "Switzer",
                  letterSpacing: "1.2px",
                  fontVariant: "small-caps",
                }}
              >
                {activeOffer.subtitle}
              </p>

            
              <p
                className="
                  mb-[12px]
                  border-b
                  border-white/20
                  pb-[12px]
                  text-[14px]
                  font-normal
                  leading-[22px]
                  text-white
                "
                style={{
                  fontFamily: "Switzer",
                }}
              >
                {activeOffer.locations}
              </p>

              <p
                className="
                  mb-[18px]
                  text-[14px]
                  font-normal
                  text-white
                "
                style={{
                  fontFamily: "Switzer",
                }}
              >
                {activeOffer.date}
              </p>

          
              <div className="flex justify-center">
                <Link
                  href="/offers"
                  className="
                    flex
                    h-[42px]
                    min-w-[210px]
                    items-center
                    justify-center
                    rounded-[2px]
                    border
                    border-[#FE9A00]
                    bg-transparent
                    px-[24px]
                    text-[14px]
                    font-medium
                    text-[#FE9A00]
                    transition-all
                    duration-300
                    hover:bg-gradient-to-r
                    hover:from-[#FE9A00]
                    hover:to-[#FFA500]
                    hover:text-white
                  "
                  style={{
                    fontFamily: "Switzer",
                  }}
                >
                  Explore Packages
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden xl:block shrink-0">
            <div className="relative h-[250px] w-[400px] overflow-hidden bg-white">
              <Image
                src={exclusiveOffers[nextIndex].image}
                alt="Next"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-white/60" />

              <button
                onClick={handleNext}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-10
                  flex
                  h-[48px]
                  w-[48px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#64748B]
                  bg-white/20
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white/30
                "
              >
                <ChevronRight
                  size={22}
                  className="text-[#64748B]"
                />
              </button>
            </div>
          </div>
        </div>

      
        <div className="flex justify-center">
          <Link
            href="/offers"
            className="
              flex
              h-[41px]
              items-center
              justify-center
              rounded-[2px]
              border
              border-[#FE9A00]
              px-[24px]
              text-[13px]
              font-normal
              uppercase
              tracking-[1.5px]
              text-[#FE9A00]
              transition-all
              duration-300
              hover:bg-[#FE9A00]
              hover:text-white
            "
            style={{
              fontFamily: "Switzer",
            }}
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}