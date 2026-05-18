// src/features/home/ExpertConsultation.tsx

"use client";

import Link from "next/link";

const ExpertConsultation = () => {
  return (
    <section className="relative w-full h-[520px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg-frame.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-[520px]">
          {/* Heading */}
          <h2
            className="
              font-lora
              text-white
              uppercase
              tracking-[2.5px]
              text-[32px]
              md:text-[42px]
              leading-[52px]
              md:leading-[72px]
              font-normal
            "
          >
            Expert BLB
            <br />
            Consultation
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              font-switzer
              text-white/90
              text-[16px]
              leading-[28px]
              tracking-[0.5px]
              font-normal
              max-w-[470px]
            "
          >
            Personalized travel planning with our luxury travel experts.
            From visa assistance to bespoke itineraries—we handle every
            detail.
          </p>

          {/* Button */}
          <Link
            href="/consultation"
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              rounded-[2px]
              bg-gradient-to-r
              from-[#FE9A00]
              to-[#FFA500]
              px-6
              py-3
              font-switzer
              text-[13px]
              font-normal
              uppercase
              tracking-[1.5px]
              text-black
              transition-all
              duration-300
              hover:scale-[1.02]
            "
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertConsultation;