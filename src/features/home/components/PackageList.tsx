"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper এর প্রয়োজনীয় সিএসএস
import 'swiper/css';
import 'swiper/css/navigation'; 

import { popularPackages } from '@/constants/home/popularPackages';

export default function PackageList() {
    const extendedPackages = [...popularPackages, ...popularPackages, ...popularPackages];

    return (
        <section className='max-w-360 mx-auto my-16 px-6 lg:px-16 text-white bg-[#111111] py-12 overflow-visible'>
            <style jsx global>{`
                .mySwiper .swiper-slide {
                    opacity: 1 !important; 
                    display: flex;
                    justify-content: center; 
                    align-items: center; 
                }
            `}</style>
            <div className='flex flex-col lg:flex-row gap-12 items-center'>
                
                <div className='w-full lg:w-[35%] flex flex-col items-start gap-6'>
                    <h1 className='text-[40px] leading-[1.2] tracking-[2.5px] font-serif font-bold text-white uppercase'>
                        POPULAR <br /> PACKAGES
                    </h1>
                    <p className='text-[13px] leading-5.5 tracking-[1.2px] text-gray-400 max-w-sm'>
                        For years, we have been crafting meaningful journeys with a commitment to transparency, safety, and global standards. Our certifications reflect our promise — to travel responsibly, operate ethically, and deliver experiences you can trust.  
                        <span className='text-[#FE9A00] cursor-pointer hover:underline ml-1'>Learn More</span>
                    </p>
                    <button className='border hover:bg-[#FE9A00] hover:text-black cursor-pointer transition duration-400 ease-in-out border-[#FE9A00] text-[#FFA500] px-6 py-3 uppercase tracking-wider font-medium text-sm'>
                        Explore Packages
                    </button>
                </div>

                <div className='w-full lg:w-[65%] min-w-0 relative overflow-visible'> 
                    
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView="auto" 
                        centeredSlides={true} 
                        loop={true} 
                        navigation={{
                            prevEl: '.custom-swiper-prev',
                            nextEl: '.custom-swiper-next',
                        }}
                        className='mySwiper w-full h-155'
                    >
                        {extendedPackages?.map((pkg, index) => (
                            <SwiperSlide key={`${pkg.id}-${index}`} className="w-100! h-150!">
                                
                                <div className="relative w-full h-full overflow-hidden rounded-sm cursor-pointer group/card">
                                    <div className="absolute inset-0 w-full h-full">
                                        <Image
                                            src={pkg.image}
                                            alt={`Tour package of ${pkg.country}`}
                                            fill
                                            sizes="400px"
                                            priority={index < 3}
                                            className="object-cover origin-right scale-150 transition-transform duration-700 ease-out group-hover/card:scale-120"
                                        />
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-white transition-opacity duration-300 group-hover/card:opacity-0 z-10">
                                        <h3 className="text-2xl font-serif font-bold tracking-wide drop-shadow-md">
                                            {pkg.country}
                                        </h3>
                                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-sm font-bold">
                                            →
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-6 text-black flex flex-col gap-4 h-60 translate-y-6 opacity-0 pointer-events-none group-hover/card:translate-y-0 group-hover/card:opacity-100 group-hover/card:pointer-events-auto transition-all duration-500 ease-in-out z-20">
                                        
                                        <h3 className="text-2xl font-serif font-bold tracking-wide text-gray-900">
                                            {pkg.country}
                                        </h3>
                                        
                                        <div className="space-y-1 text-xs text-gray-700 font-medium">
                                            <p className="tracking-wide text-gray-900 font-semibold text-[13px] mb-1">
                                                {pkg.cities.join(" · ")}
                                            </p>
                                            <p className="text-gray-600">Duration: {pkg.duration}</p>
                                            <p className="text-gray-900 font-bold text-[13px] mt-0.5">Starting From: {pkg.price}</p>
                                        </div>

                                        <div className="flex justify-between items-center mt-auto">
                                            <button className="bg-[#FE9A00] hover:bg-[#e08800] text-white text-xs font-semibold px-5 py-3 rounded-sm transition-colors duration-300 uppercase tracking-wider shadow-sm">
                                                Explore more
                                            </button>
                                            <span className="bg-gray-400/20 text-gray-700 text-[11px] px-4 py-1.5 rounded-full font-semibold tracking-wide">
                                                {pkg.agency}
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button 
                        className="custom-swiper-prev absolute left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-lg cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Previous slide"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                    </button>
                    
                    <button 
                        className="custom-swiper-next absolute right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-lg cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Next slide"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"/>
                        </svg>
                    </button>

                </div>

            </div>
        </section>
    );
}