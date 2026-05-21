"use client";

import Link from "next/link";

export default function OfferNewsLetter() {
  return (
    <section className="w-full">
      <div className="relative h-[500px] w-full overflow-hidden">
     
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

       
        <div className="absolute inset-0 bg-black/30" />

       
        <div
          className="
            relative
            z-10
            flex
            h-full
            flex-col
            justify-center
            px-[92px]
          "
        >
          <h2
            className="
              max-w-[453px]
              font-lora
              text-[48px]
              font-normal
              uppercase
              leading-[72px]
              tracking-[2px]
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
              h-[44px]
              w-[140px]
              items-center
              justify-center
              border
              border-white
              text-[12px]
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