"use client";

import Link from "next/link";

export default function OfferNewsLetter() {
  return (
    <section className="w-full">
      <div
        className="
          relative
          h-[380px]
          sm:h-[420px]
          md:h-[450px]
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
            scale-105
          "
        />

       
        <div className="absolute inset-0 bg-black/40" />

       
        <div
          className="
            relative
            z-10
            flex
            h-full
            flex-col
            justify-center
            px-5
            sm:px-8
            md:px-[92px]
          "
        >
        
          <h2
            className="
              max-w-full
              md:max-w-[453px]
              font-lora
              text-[26px]
              sm:text-[34px]
              md:text-[40px]
              font-normal
              uppercase
              leading-[40px]
              sm:leading-[54px]
              md:leading-[72px]
              tracking-[1.2px]
              md:tracking-[2.5px]
              text-white
            "
          >
            GET 50% OFFER TODAY ON YOUR NEXT TRIP WITH US
          </h2>

         
          <Link
            href="/"
            className="
              mt-6
              md:mt-[40px]
              flex
              h-[44px]
              w-[140px]
              items-center
              justify-center
              rounded-[2px]
              border
              border-white
              px-[24px]
              py-[12px]
              text-center
              font-switzer
              text-[12px]
              md:text-[13px]
              font-normal
              uppercase
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