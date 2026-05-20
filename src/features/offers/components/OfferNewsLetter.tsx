"use client";

import Link from "next/link";

export default function OfferNewsLetter() {
  return (
    <section className="w-full">
      <div
        className="
          relative 
          h-[450px] 
          w-full 
          overflow-hidden
        "
      >
      
        <div
          className="
            absolute 
            inset-0 
           bg-[url('/offers/offer-bg.jpg')]
            bg-cover 
            bg-center
            bg-no-repeat
          "
        />

     
        <div className="absolute inset-0 bg-[#00000033]" />

      
        <div
          className="
            relative 
            z-10 
            flex 
            h-full 
            flex-col 
            justify-center
            pl-[92px]
          "
        >
        
          <h2
            className="
              max-w-[453px]
              font-lora
              text-[40px]
              font-normal
              uppercase
              leading-[72px]
              tracking-[2.5px]
              text-white
            "
          >
            GET 50% OFFER TODAY ON YOUR NEXT TRIP WITH US
          </h2>

         
          <Link
            href="/"
            className="
              mt-[40px]
              flex
              h-[41px]
              w-[129px]
              items-center
              justify-center
              rounded-[2px]
              border
              border-white
              px-[24px]
              py-[12px]
              text-center
              font-switzer
              text-[13px]
              font-normal
              uppercase
              leading-[100%]
              tracking-[1.5px]
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
}