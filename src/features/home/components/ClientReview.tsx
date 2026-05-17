"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';

import { clientReviews } from "@/constants/home/clientReviews";

export default function ClientReview() {
  const reviews = clientReviews;

  return (
    <section className="w-full bg-[#FAFAFA] text-black py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* মেইন কন্টেইনার - Max Width 1440px */}
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
            <SwiperSlide key={review.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-6">
                
                {/* বাম পাশ: আর্চ-শেপড ইমেজ সেকশন */}
                <div className="flex flex-col items-center justify-center w-full">
                  {/* নিখুঁত আর্চ শেপের জন্য rounded-t-full ব্যবহার করা হয়েছে */}
                  <div className="relative w-[280px] h-[380px] sm:w-[350px] sm:h-[480px] md:w-[400px] md:h-[540px] rounded-t-full overflow-hidden shadow-md">
                    <Image
                      src={review.image}
                      alt={`${review.country} Review`}
                      fill
                      sizes="(max-w-768px) 100vw, 50vw"
                      priority
                      className="object-cover object-center font-switzer"
                    />
                  </div>
                  
                  {/* দেশের নাম ও দুই পাশের বর্ডার লাইন */}
                  <div className="flex items-center gap-4 mt-6 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px]">
                    <div className="h-[1px] bg-[#FE9A00]/60 flex-1"></div>
                    <span className="font-switzer text-[11px] sm:text-xs tracking-[3px] text-[#FE9A00] font-bold uppercase whitespace-nowrap">
                      {review.country}
                    </span>
                    <div className="h-[1px] bg-[#FE9A00]/60 flex-1"></div>
                  </div>
                </div>

                {/* ডান পাশ: টেক্সট কন্টেন্ট সেকশন */}
                <div className="flex flex-col items-start text-left lg:max-w-[520px]">
                  {/* Switzer বা Lora ফন্ট আপনার পছন্দ অনুযায়ী ক্লাসে চেঞ্জ করে নিতে পারেন */}
                  <h2 className="font-lora text-[32px] sm:text-[42px] lg:text-[48px] font-medium tracking-wide text-[#0A1128] leading-tight mb-6">
                    {review.title}
                  </h2>
                  
                  <p className="font-switzer text-[14px] sm:text-[15px] leading-[1.7] text-gray-600 tracking-[0.5px]">
                    {review.review}
                    <span className="text-[#FE9A00] font-semibold cursor-pointer hover:underline ml-1.5 transition-all">
                      Learn More
                    </span>
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* কাস্টম এরো নেভিগেশন বাটন (Figma ডিজাইন অনুযায়ী দুই পাশে পজিশনড) */}
        {/* Left Arrow */}
        <button 
          className="review-prev-btn absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 border border-gray-200 bg-white hover:bg-neutral-50 rounded-full flex items-center justify-center text-gray-500 hover:text-black shadow-sm cursor-pointer transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Previous review"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        
        {/* Right Arrow */}
        <button 
          className="review-next-btn absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 border border-gray-200 bg-white hover:bg-neutral-50 rounded-full flex items-center justify-center text-gray-500 hover:text-black shadow-sm cursor-pointer transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Next review"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>

      </div>
    </section>
  );
}