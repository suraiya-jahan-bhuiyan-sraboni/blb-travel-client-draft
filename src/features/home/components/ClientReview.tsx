"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { clientReviews } from "@/constants/home/clientReviews";
import Link from 'next/link';

export default function ClientReview() {
  const reviews = clientReviews || [];

  return (
    <section className="w-full bg-[#FAFAFA] text-black py-8 md:py-8 md:px-[32px] px-8 lg:px-20 xl:px-[120px] 2xl:px-[219.5px] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative group">

        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          loop={reviews.length > 1}
          navigation={{
            prevEl: '.review-prev-btn',
            nextEl: '.review-next-btn',
          }}
          className="w-full"
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review?.id}>
              <div className="flex md:flex-col lg:flex-row gap-6 flex-col justify-center md:gap-8 lg:gap-11 items-center">

                <div className="flex flex-col items-center justify-center order-last lg:order-first">
                  <div className="relative lg:w-[456px] lg:h-[533px]  md:w-[456px] md:h-[533px] w-[314px] h-[350px] rounded-t-full overflow-hidden shadow-md">
                    <Image
                      src={review?.image}
                      alt={`${review?.country} Review`}
                      fill
                        sizes="(max-w-640px) 260px, (max-w-768px) 320px, 400px"
                      priority
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex items-center gap-4 mt-6 w-full max-w-[260px] sm:max-w-[320px] md:max-w-[400px]">
                    <div className="h-[1px] bg-[#FE9A00]/60 flex-1"></div>
                    <span className="font-switzer text-[14px] leading-[16px] tracking-[2px] text-[#FE9A00] uppercase whitespace-nowrap">
                      {review?.country}
                    </span>
                    <div className="h-[1px] bg-[#FE9A00]/60 flex-1"></div>
                  </div>
                </div>

                <div className="flex  flex-col items-center lg:items-start text-center lg:text-left w-full lg:max-w-[520px] px-2 sm:px-6 lg:px-0 order-first lg:order-last">
                  <h2 className="font-lora text-[24px] leading-[36px] md:text-[32px] md:leading-[48px] lg:text-[40px] font-medium tracking-[2.5px] text-[#1E293B] mb-4 lg:mb-6">
                    {review?.title}
                  </h2>

                  <p className="font-switzer text-[13px] leading-[22px]  text-gray-600 text-justify tracking-[1.2px]">
                    {review?.review}
                    <Link href={review?.link || "#"} className="text-[#FFA500] hover:underline font-medium ml-1.5 inline-block whitespace-nowrap">
                      Read More
                    </Link>
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="review-prev-btn absolute left-2 xl:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 border border-gray-200 bg-white hover:bg-neutral-50 rounded-full hidden md:flex items-center justify-center text-gray-500 hover:text-black shadow-sm cursor-pointer transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Previous review"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          className="review-next-btn absolute right-2 xl:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 border border-gray-200 bg-white hover:bg-neutral-50 rounded-full hidden md:flex items-center justify-center text-gray-500 hover:text-black shadow-sm cursor-pointer transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Next review"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

      </div>
    </section>
  );
}