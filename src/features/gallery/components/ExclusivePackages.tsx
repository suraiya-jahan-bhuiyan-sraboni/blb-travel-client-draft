"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { exclusivePackages } from "@/constants/gallery/exclusivePackages";



const ExclusivePackages = () => {
  return (
    <section
      className="
        w-full
        bg-[#F8F6F2]
        px-8
        py-16
      "
    >
      <div className="mx-auto max-w-[1440px]">
      
        <h2
          className="
            mb-11
            text-[32px]
            font-normal
            capitalize
            leading-[48px]
            tracking-[2.5px]
            text-[#1E293B]
            md:text-[40px]
            md:leading-[72px]
          "
          style={{
            fontFamily: "Lora",
          }}
        >
          BLB TRAVELERS EXCLUSIVE PACKAGES
        </h2>

      
        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {exclusivePackages.map((item, index) => (
            <div
              key={item.id}
              className="
                relative
                h-[563px]
                overflow-hidden
                rounded-[10px]
              "
            >
           
              <Image
                src={item.image}
                alt={item.country}
                fill
                className="object-cover"
              />

           
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/20
                  to-transparent
                "
              />

           
              <div
                className="
                  absolute
                  left-6
                  top-6
                  rounded-[4px]
                  bg-[#FEA500]
                  px-4
                  py-1
                "
              >
                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[1.5px]
                    text-white
                  "
                  style={{
                    fontFamily: "Switzer",
                  }}
                >
                  {item.region}
                </span>
              </div>

          
              {index === 0 && (
                <button
                  className="
                    absolute
                    left-4
                    top-1/2
                    z-20
                    flex
                    h-9
                    w-9
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                  "
                >
                  <ChevronLeft size={18} />
                </button>
              )}

              {index === 2 && (
                <button
                  className="
                    absolute
                    right-4
                    top-1/2
                    z-20
                    flex
                    h-9
                    w-9
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                  "
                >
                  <ChevronRight size={18} />
                </button>
              )}

            
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  p-10
                "
              >
                <div className="flex flex-col gap-4">
                
                  <h3
                    className="
                      text-[16px]
                      font-semibold
                      leading-6
                      tracking-[5%]
                      text-white
                    "
                    style={{
                      fontFamily: "Lora",
                    }}
                  >
                    {item.country}
                  </h3>

               
                  <p
                    className="
                      text-[12px]
                      uppercase
                      leading-none
                      tracking-[1.2px]
                      text-white/90
                    "
                    style={{
                      fontFamily: "Switzer",
                    }}
                  >
                    {item.location}
                  </p>

                
                  <p
                    className="
                      text-[12px]
                      uppercase
                      leading-none
                      tracking-[1.2px]
                      text-white/90
                    "
                    style={{
                      fontFamily: "Switzer",
                    }}
                  >
                    {item.duration}
                  </p>

                
                  <p
                    className="
                      text-[12px]
                      uppercase
                      leading-none
                      tracking-[1.2px]
                      text-[#FEA500]
                    "
                    style={{
                      fontFamily: "Switzer",
                    }}
                  >
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusivePackages;