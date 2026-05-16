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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 border-b border-[#2B2B2B] pb-14 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* CONTACT */}
          <div className="order-1">
            <h3 className="font-cinzel mb-6 text-xl font-semibold text-[#D89B29]">
              Contact Us
            </h3>

            <div className="font-poppins space-y-4 text-sm text-gray-300">
              <p>+123 456 789</p>
              <p>info@b2btravelers.com</p>
            </div>

            <h3 className="font-cinzel mb-6 mt-10 text-xl font-semibold text-[#D89B29]">
              Address
            </h3>

            <div className="font-poppins space-y-3 text-sm text-gray-300">
              <p>Gulshan Road, 1200, Dhaka,</p>
              <p>Bangladesh</p>
            </div>
          </div>

          {/* SERVICES COLUMN 1 */}
          <div className="order-2">
            <h3 className="font-cinzel mb-6 text-xl font-semibold text-[#D89B29]">
              Services
            </h3>

            <div className="font-poppins flex flex-col gap-4 text-sm">
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

          {/* EXPLORE */}
          <div className="order-3">
            <h3 className="font-cinzel mb-6 text-xl font-semibold text-[#D89B29]">
              Explore
            </h3>

            <div className="font-poppins flex flex-col gap-4 text-sm">
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

          {/* SERVICES COLUMN 2 */}
          <div className="order-4 lg:pt-[58px]">
            <div className="font-poppins flex flex-col gap-4 text-sm">
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

          {/* PAYMENT + APP */}
          <div className="order-5 sm:col-span-2 lg:col-span-1">
            <h3 className="font-cinzel mb-6 text-xl font-semibold text-[#D89B29]">
              We Accept
            </h3>

            <div className="mb-10 flex flex-wrap items-center gap-3">
              <Image
                src="/footer/mastercard.png"
                alt="Mastercard"
                width={36}
                height={24}
                className="h-auto"
              />

              <Image
                src="/footer/bkash.png"
                alt="Bkash"
                width={36}
                height={24}
                className="h-auto"
              />

              <Image
                src="/footer/nagad.png"
                alt="Nagad"
                width={36}
                height={24}
                className="h-auto"
              />
            </div>

            <h3 className="font-cinzel mb-6 text-xl font-semibold text-[#D89B29]">
              Download Our App
            </h3>

            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/footer/app-store.png"
                alt="App Store"
                width={100}
                height={34}
                className="h-auto cursor-pointer"
              />

              <Image
                src="/footer/google-play.png"
                alt="Google Play"
                width={100}
                height={34}
                className="h-auto cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="border-b border-[#2B2B2B] py-10">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            
            <div className="flex flex-col items-center gap-5 lg:flex-row">
              <Image
                src="/footer/logo.png"
                alt="BLB Travelers"
                width={170}
                height={55}
                priority
                className="h-auto"
              />

              <div className="hidden h-[70px] w-px bg-[#3A3A3A] lg:block" />
            </div>

            <p className="font-poppins max-w-[300px] sm:max-w-[520px] text-sm leading-7 text-gray-300">
              BLB Travelers curates elevated global travel experiences, from
              bespoke vacations and Hajj &amp; Umrah journeys to education,
              medical, and visa advisory services.
            </p>
          </div>
        </div>

        
        <div className="h-[36px] w-full bg-[#0D0D0D]" />

    
        <div className="font-poppins py-5 text-center text-xs sm:text-sm text-gray-400">
          Copyright &copy; 2026
        </div>
      </div>
    </footer>
  );
};

export default Footer;