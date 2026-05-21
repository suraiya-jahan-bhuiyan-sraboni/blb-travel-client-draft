"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Clock3 } from "lucide-react";
import { IVacationPackage } from "@/types/offers/vacation.types";

interface VacationCardProps {
  item: IVacationPackage;
  index: number;
  totalCards: number;
}

const VacationCard = ({
  item,
  index,
  totalCards,
}: VacationCardProps) => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768 && index === 0) {
      const timer = setTimeout(() => {
        setShowOverlay(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="relative w-full h-[460px] overflow-hidden group">
      
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition duration-500 md:group-hover:scale-110"
      />


      {index === 0 && (
        <button
          className="
            absolute
            left-3
            top-[58%]
            md:top-1/2
            z-30
            -translate-y-1/2
            h-9
            w-9
            rounded-full
            bg-white/90
            flex
            items-center
            justify-center
            shadow-md
          "
        >
          <ChevronLeft size={18} className="text-[#111111]" />
        </button>
      )}

    
      {index === totalCards - 1 && (
        <button
          className="
            absolute
            right-3
            top-[58%]
            md:top-1/2
            z-30
            -translate-y-1/2
            h-9
            w-9
            rounded-full
            bg-white/90
            flex
            items-center
            justify-center
            shadow-md
          "
        >
          <ChevronRight size={18} className="text-[#111111]" />
        </button>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#00111A]/95 via-[#00111A]/25 to-transparent z-10" />

   
      <div className="absolute top-4 left-4 z-30 flex items-center gap-2 rounded-full bg-[#1E293B]/80 backdrop-blur-md px-3 py-[6px]">
        <Clock3 size={13} className="text-white" />

        <span className="text-[11px] leading-none tracking-wide text-white">
          47:58:18 left
        </span>
      </div>

    
      <div className="absolute top-4 right-4 z-30 rounded-md bg-[#FE9A00] px-4 py-[7px]">
        <span className="text-[11px] font-medium uppercase tracking-wide text-white">
          30% OFF
        </span>
      </div>

    
      <div
        className={`absolute bottom-0 left-0 z-20 w-full px-5 md:px-8 pb-6 md:pb-8 transition-all duration-500 ${
          showOverlay ? "opacity-0" : "opacity-100"
        } md:group-hover:opacity-0`}
      >
        <h3 className="text-[16px] font-normal leading-6 tracking-[0.8px] text-white">
          {item.title}
        </h3>

        <p className="mt-1 text-[13px] leading-5 tracking-[0.5px] text-white/80">
          {item.location}
        </p>
      </div>

  
      <div
        className={`absolute inset-0 z-20 transition-all duration-500 ${
          showOverlay ? "opacity-100" : "opacity-0"
        } md:opacity-0 md:group-hover:opacity-100`}
      >
        <div className="absolute bottom-0 left-0 w-full px-5 md:px-8 pb-6 md:pb-10">
          
          <h3 className="text-[16px] font-normal leading-6 tracking-[0.8px] text-white">
            {item.title}
          </h3>

          <p className="mt-1 text-[13px] leading-5 tracking-[0.5px] text-white/80">
            {item.location}
          </p>

          <p className="mt-3 text-[18px] text-white/40 line-through">
            BDT 1,25,000
          </p>

          <div className="mt-1 flex items-end gap-1">
            <span className="text-[28px] md:text-[34px] font-semibold leading-none text-[#FE9A00]">
              BDT 1,00,000
            </span>

            <span className="mb-[4px] text-[13px] text-[#FE9A00]">
              /per person
            </span>
          </div>

          <button className="mt-5 md:mt-6 bg-[#FE9A00] px-5 md:px-7 py-3 text-[13px] uppercase tracking-[1.2px] text-white transition-all duration-300 hover:bg-[#EA9200]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default VacationCard;