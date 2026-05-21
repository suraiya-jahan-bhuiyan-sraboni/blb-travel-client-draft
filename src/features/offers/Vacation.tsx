"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { vacationPackages } from "@/constants/offers/vacationPackages";
import VacationCard from "./components/VacationCard";

const Vacation = () => {
  return (
    <section className="w-full bg-[#F8F8F8] py-[60px] md:py-[100px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-5 xl:px-[100px]">
        
        <div className="flex flex-col items-center text-center">
          <span className="text-[11px] md:text-[13px] leading-[20px] tracking-[1.2px] uppercase text-[#FE9A00]">
            LIMITED TIME OFFERS
          </span>

          <h2 className="mt-2 text-[#1E293B] text-[30px] leading-[42px] md:text-[40px] md:leading-[72px] tracking-[2px] md:tracking-[2.5px] font-[Lora] capitalize">
            Vacation Packages
          </h2>

          <p className="max-w-[320px] md:max-w-[720px] mt-3 text-[#475569] text-[13px] leading-[24px] md:leading-[22px] tracking-[1px]">
            Hand-selected destinations at exceptional value — available for a
            short time only. Book early and secure the experience you deserve.
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {vacationPackages.map((item, index) => (
              <SwiperSlide key={item.id}>
                <VacationCard
                  item={item}
                  index={index}
                  totalCards={vacationPackages.length}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Vacation;