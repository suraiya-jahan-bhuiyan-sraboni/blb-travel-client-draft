"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { exclusiveOffers } from "@/constants/exclusiveOffers";
import Link from "next/link";

export default function ExclusiveOffers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [hovered, setHovered] = useState(false);

  const activeOffer = exclusiveOffers[activeIndex];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (hovered) {
      timer = setTimeout(() => {
        setShowOverlay(true);
      }, 1000);
    } else {
      setShowOverlay(false);
    }

    return () => clearTimeout(timer);
  }, [hovered]);

  const handleNext = () => {
    setShowOverlay(false);

    setActiveIndex((prev) =>
      prev === exclusiveOffers.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setShowOverlay(false);

    setActiveIndex((prev) =>
      prev === 0 ? exclusiveOffers.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#F5F5F5] py-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-11">
  
        <h2
          className="
            text-center
            text-[#1D2746]
            text-[40px]
            leading-[72px]
            tracking-[2.5px]
            capitalize
            font-normal
          "
          style={{ fontFamily: "Lora" }}
        >
          EXCLUSIVE OFFERS, LIMITED IN TIME
        </h2>

      
        <div className="relative flex items-center justify-center">
       
                  







          <div className="absolute left-0 hidden xl:block opacity-40">
            <div className="relative w-[280px] h-[380px] overflow-hidden rounded-xl">
              <Image
                src={
                  exclusiveOffers[
                    activeIndex === 0
                      ? exclusiveOffers.length - 1
                      : activeIndex - 1
                  ].image
                }
                alt="preview"
                fill
                className="object-cover"
              />

              <button
                onClick={handlePrev}
                className="
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-16
                  h-16
                  rounded-full
                  border
                  border-white
                  flex
                  items-center
                  justify-center
                  bg-white/20
                  backdrop-blur-md
                  hover:bg-white/30
                  transition-all
                  duration-300
                "
              >
                <ChevronLeft className="text-white" size={28} />
              </button>
            </div>
          </div>

     
          <div
            className="
              relative
              w-[860px]
              h-[360px]
              overflow-hidden
              rounded-2xl
            "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={activeOffer.image}
              alt={activeOffer.title}
              fill
              priority
              className="
                object-cover
                object-center
                scale-110
                transition-transform
                duration-700
                hover:scale-[1.15]
              "
            />

        
            <div
              className={`
                absolute inset-0
                flex items-center justify-center
                transition-all duration-500 ease-in-out
                ${
                  showOverlay
                    ? "opacity-100 visible scale-100"
                    : "opacity-0 invisible scale-95"
                }
              `}
            >
              <div
                className="
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2

                  w-[560px]
                  h-[300px]

                  bg-black/60
                  backdrop-blur-md

                  text-white
                  text-center

                  px-10
                  py-5

                  flex
                  flex-col
                  items-center
                  justify-center

                  gap-2

                  rounded-xl
                "
              >
                <h3
                  className="
                    text-[32px]
                    text-[#F4B400]
                    leading-tight
                    font-normal
                    mt-5
                  "
                  style={{ fontFamily: "Lora" }}
                >
                  {activeOffer.title}
                </h3>

                <p className="text-[18px] tracking-wide text-center font-medium">
                  {activeOffer.subtitle}
                </p>

                <p className="text-[16px] text-center">
                  {activeOffer.locations}
                </p>

                <p className="text-[16px]">
                  {activeOffer.date}
                </p>

                <p className="text-[16px] font-medium">
                  {activeOffer.discount}
                </p>

                <button
                  className="
                    mt-2
                    mb-5
                    border
                    border-[#F4B400]
                    text-[#F4B400]
                    px-7
                    py-3
                    text-[18px]
                    font-medium
                    hover:bg-[#F4B400]
                    hover:text-black
                    transition-all
                    duration-300
                  "
                >
                  Explore Packages
                </button>
              </div>
            </div>
          </div>

       
          <div className="absolute right-0 hidden xl:block opacity-40">
            <div className="relative w-[280px] h-[380px] overflow-hidden rounded-xl">
              <Image
                src={
                  exclusiveOffers[
                    activeIndex === exclusiveOffers.length - 1
                      ? 0
                      : activeIndex + 1
                  ].image
                }
                alt="preview"
                fill
                className="object-cover"
              />

              <button
                onClick={handleNext}
                className="
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-16
                  h-16
                  rounded-full
                  border
                  border-white
                  flex
                  items-center
                  justify-center
                  bg-white/20
                  backdrop-blur-md
                  hover:bg-white/30
                  transition-all
                  duration-300
                "
              >
                <ChevronRight className="text-white" size={28} />
              </button>
            </div>
          </div>
        </div>

      
        <div className="flex justify-center">
          <Link
            href="/offers"
            className="
              border
              border-[#E6A817]
              text-[#E6A817]
              px-10
              py-4
              hover:bg-[#E6A817]
              hover:text-black
              transition-all
              duration-300
            "
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}