"use client";

import Image from "next/image";
import Link from "next/link";

import {
  exploreLinks,
  servicesColumnOne,
  servicesColumnTwo,
} from "@/constants/footerLinks";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-16">
      <div className="mx-auto max-w-7xl px-6">
        
      
        <div className="grid grid-cols-1 gap-10 border-b border-[#2B2B2B] pb-14 md:grid-cols-2 lg:grid-cols-5">

         
          <div>
            <h3 className="font-cinzel mb-6 text-xl font-semibold text-[#D89B29]">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-gray-300">
              <p>+123 456 789</p>
              <p>info@b2btravelers.com</p>
            </div>

            <h3 className="font-cinzel mb-6 mt-10 text-xl font-semibold text-[#D89B29]">
              Address
            </h3>

            <div className="space-y-3 text-sm text-gray-300">
              <p>Gulshan Road, 1200, Dhaka,</p>
              <p>Bangladesh</p>
            </div>
          </div>

          
          <div>
            <h3 className="font-cinzel mb-6 text-xl font-semibold text-[#D89B29]">
              Explore
            </h3>

            <div className="flex flex-col gap-4 text-sm">
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 transition hover:text-[#D89B29]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        
          <div>
            <h3 className="font-cinzel mb-6 text-xl font-semibold text-[#D89B29]">
              Services
            </h3>

            <div className="flex flex-col gap-4 text-sm">
              {servicesColumnOne.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="text-gray-300 transition hover:text-[#D89B29]"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

        
          <div className="lg:pt-[58px]">
            <div className="flex flex-col gap-4 text-sm">
              {servicesColumnTwo.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="text-gray-300 transition hover:text-[#D89B29]"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

       
          <div>
            <h3 className="font-cinzel mb-6 text-xl font-semibold text-[#D89B29]">
              We Accept
            </h3>

            <div className="mb-10 flex items-center gap-3">
              <Image
                src="/footer/mastercard.png"
                alt="Mastercard"
                width={42}
                height={28}
              />

              <Image
                src="/footer/bkash.png"
                alt="Bkash"
                width={42}
                height={28}
              />

              <Image
                src="/footer/nagad.png"
                alt="Nagad"
                width={42}
                height={28}
              />
            </div>

            <h3 className="font-cinzel mb-6 text-xl font-semibold text-[#D89B29]">
              Download Our App
            </h3>

            <div className="flex items-center gap-3">
              <Image
                src="/footer/app-store.png"
                alt="App Store"
                width={115}
                height={38}
                className="cursor-pointer"
              />

              <Image
                src="/footer/google-play.png"
                alt="Google Play"
                width={115}
                height={38}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        
        <div className="border-b border-[#2B2B2B] py-10">
          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-6">

       
            <div className="flex items-center gap-6">
              <Image
                src="/footer/logo.png"
                alt="BLB Travelers"
                width={170}
                height={55}
                priority
              />

           
              <div className="hidden h-[70px] w-px bg-[#3A3A3A] lg:block" />
            </div>

           
            <p className="max-w-[520px] text-center text-sm leading-7 text-gray-300 lg:text-left">
              BLB Travelers curates elevated global travel experiences, from
              bespoke vacations and Hajj &amp; Umrah journeys to education,
              medical, and visa advisory services.
            </p>
          </div>
        </div>

      
        <div className="h-[36px] w-full bg-[#0D0D0D]" />

    
        <div className="py-6 text-center text-sm text-gray-400">
          Copyright &copy; 2026
        </div>
      </div>
    </footer>
  );
};

export default Footer;