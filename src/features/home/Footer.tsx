"use client";

import Image from "next/image";
import Link from "next/link";

import {
  exploreLinks,
  servicesColumnOne,
  servicesColumnTwo,
} from "@/constants/footerLinks";

const headingStyle =
  "font-lora font-semibold text-[14px] leading-[24px] tracking-[0.05em] uppercase text-[#D89B29]";

const Footer = () => {
  return (
    <footer className="bg-[#111111] pt-14 text-white lg:pt-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
      

      
        <div className="border-b border-[#2B2B2B] pb-14 lg:hidden">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
         
            <div>
           
              <h3 className={`${headingStyle} mb-6`}>Contact Us</h3>

              <div className="font-poppins space-y-4 text-[15px] leading-7 text-[#D1D1D1]">
                <p>+123 456 789</p>
                <p>info@b2btravelers.com</p>
              </div>

          
              <h3 className={`${headingStyle} mb-6 mt-10`}>Address</h3>

              <div className="font-poppins space-y-3 text-[15px] leading-7 text-[#D1D1D1]">
                <p>Gulshan Road, 1200, Dhaka,</p>
                <p>Bangladesh</p>
              </div>

           
              <div className="mt-10">
                <h3 className={`${headingStyle} mb-6`}>Explore</h3>

                <div className="font-poppins flex flex-col gap-4 text-[15px]">
                  {exploreLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-[#D1D1D1] transition hover:text-[#D89B29]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

        
            <div>
      
              <h3 className={`${headingStyle} mb-6`}>Services</h3>

              <div className="flex gap-6">
     
                <div className="flex flex-col gap-4">
                  {servicesColumnOne.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className="font-poppins whitespace-nowrap text-[14px] text-[#D1D1D1] transition hover:text-[#D89B29]"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>

            
                <div className="flex flex-col gap-4">
                  {servicesColumnTwo.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className="font-poppins whitespace-nowrap text-[14px] text-[#D1D1D1] transition hover:text-[#D89B29]"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

          
              <div className="mt-10">
                <h3 className={`${headingStyle} mb-6`}>We Accept</h3>

                <div className="flex flex-wrap items-center gap-3">
                  <Image
                    src="/footer/mastercard.png"
                    alt="Mastercard"
                    width={38}
                    height={24}
                    className="h-auto"
                  />

                  <Image
                    src="/footer/bkash.png"
                    alt="Bkash"
                    width={38}
                    height={24}
                    className="h-auto"
                  />

                  <Image
                    src="/footer/nagad.png"
                    alt="Nagad"
                    width={38}
                    height={24}
                    className="h-auto"
                  />
                </div>

              
                <h3 className={`${headingStyle} mb-6 mt-10`}>
                  Download Our App
                </h3>

                <div className="flex flex-col gap-3">
                  <Image
                    src="/footer/app-store.png"
                    alt="App Store"
                    width={110}
                    height={38}
                    className="h-auto cursor-pointer"
                  />

                  <Image
                    src="/footer/google-play.png"
                    alt="Google Play"
                    width={110}
                    height={38}
                    className="h-auto cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden border-b border-[#2B2B2B] pb-14 lg:grid lg:grid-cols-[1fr_1fr_1.6fr_1fr] lg:gap-x-10">
       

          
          <div>
            <h3 className={`${headingStyle} mb-6`}>Contact Us</h3>

            <div className="font-poppins space-y-4 text-[15px] leading-7 text-[#D1D1D1]">
              <p>+123 456 789</p>
              <p>info@b2btravelers.com</p>
            </div>

            <h3 className={`${headingStyle} mb-6 mt-10`}>Address</h3>

            <div className="font-poppins space-y-3 text-[15px] leading-7 text-[#D1D1D1]">
              <p>Gulshan Road, 1200, Dhaka,</p>
              <p>Bangladesh</p>
            </div>
          </div>

   
          <div>
            <h3 className={`${headingStyle} mb-6`}>Explore</h3>

            <div className="font-poppins flex flex-col gap-4 text-[15px]">
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#D1D1D1] transition hover:text-[#D89B29]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

       
          <div>
            <h3 className={`${headingStyle} mb-6`}>Services</h3>

            <div className="flex gap-10 lg:gap-14">
          
              <div className="flex flex-col gap-4">
                {servicesColumnOne.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="font-poppins whitespace-nowrap text-[15px] text-[#D1D1D1] transition hover:text-[#D89B29]"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>

         
              <div className="flex flex-col gap-4">
                {servicesColumnTwo.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="font-poppins whitespace-nowrap text-[15px] text-[#D1D1D1] transition hover:text-[#D89B29]"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

         
          <div>
            <h3 className={`${headingStyle} mb-6`}>We Accept</h3>

            <div className="flex flex-wrap items-center gap-3">
              <Image
                src="/footer/mastercard.png"
                alt="Mastercard"
                width={38}
                height={24}
                className="h-auto"
              />

              <Image
                src="/footer/bkash.png"
                alt="Bkash"
                width={38}
                height={24}
                className="h-auto"
              />

              <Image
                src="/footer/nagad.png"
                alt="Nagad"
                width={38}
                height={24}
                className="h-auto"
              />
            </div>

         
            <h3 className={`${headingStyle} mb-6 mt-10`}>
              Download Our App
            </h3>

            <div className="flex items-center gap-3">
              <Image
                src="/footer/app-store.png"
                alt="App Store"
                width={110}
                height={38}
                className="h-auto cursor-pointer"
              />

              <Image
                src="/footer/google-play.png"
                alt="Google Play"
                width={110}
                height={38}
                className="h-auto cursor-pointer"
              />
            </div>
          </div>
        </div>

       
        




        <div className="border-b border-[#2B2B2B] py-10">
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-center lg:text-left">
          
            <div className="flex items-center gap-8">
              <Image
                src="/footer/logo.png"
                alt="BLB Travelers"
                width={170}
                height={60}
                priority
                className="h-auto"
              />

              <div className="hidden h-[80px] w-px bg-[#3A3A3A] lg:block" />
            </div>

         
            <p className="max-w-[560px] font-poppins text-[15px] leading-8 text-[#D1D1D1]">
              BLB Travelers curates elevated global travel experiences, from
              bespoke vacations and Hajj &amp; Umrah journeys to education,
              medical, and visa advisory services.
            </p>
          </div>
        </div>

       












        
        <div className="py-5 lg:hidden">
          <Image
            src="/footer/bottom-image.png"
            alt="Payment Methods"
            width={1400}
            height={40}
            className="h-auto w-full object-contain"
          />
        </div>

        
         <div className="border-t border-[#2B2B2B] py-3 text-center font-poppins text-sm text-[#CFCFCF]">
      Copyright &copy; 2026
    </div>
      </div>
    </footer>
  );
};

export default Footer;