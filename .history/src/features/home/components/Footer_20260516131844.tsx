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
    <footer className="bg-[#111111] pt-16 text-white">
      <div className="mx-auto max-w-[1320px] px-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-y-10 border-b border-[#2B2B2B] pb-14 md:grid-cols-2 lg:grid-cols-5 lg:gap-x-16">

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-[28px] font-semibold leading-none text-[#D89B29]">
              Contact Us
            </h3>

            <div className="space-y-4 text-[17px] leading-[30px] text-gray-300">
              <p>+123 456 789</p>
              <p>info@b2btravelers.com</p>
            </div>

            <h3 className="mb-6 mt-10 text-[28px] font-semibold leading-none text-[#D89B29]">
              Address
            </h3>

            <div className="space-y-3 text-[17px] leading-[30px] text-gray-300">
              <p>Gulshan Road, 1200, Dhaka,</p>
              <p>Bangladesh</p>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 text-[28px] font-semibold leading-none text-[#D89B29]">
              Explore
            </h3>

            <div className="flex flex-col gap-4 text-[17px] leading-[30px]">
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

          {/* Services Column One */}
          <div>
            <h3 className="mb-6 text-[28px] font-semibold leading-none text-[#D89B29]">
              Services
            </h3>

            <div className="flex flex-col gap-4 text-[17px] leading-[30px]">
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

          {/* Services Column Two */}
          <div className="lg:pt-[58px]">
            <div className="flex flex-col gap-4 text-[17px] leading-[30px]">
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

          {/* Payment + Apps */}
          <div>
            <h3 className="mb-6 text-[28px] font-semibold leading-none text-[#D89B29]">
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

            <h3 className="mb-6 text-[28px] font-semibold leading-none text-[#D89B29]">
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

        {/* Bottom Logo + Description */}
        <div className="border-b border-[#2B2B2B] py-10">
          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-10">

            {/* Logo */}
            <div className="flex items-center gap-6">
              <Image
                src="/footer/logo.png"
                alt="BLB Travelers"
                width={210}
                height={70}
                priority
              />

              {/* Divider */}
              <div className="hidden h-[82px] w-px bg-[#3A3A3A] lg:block" />
            </div>

            {/* Description */}
            <p className="max-w-[610px] text-center text-[20px] leading-[38px] text-gray-300 lg:text-left">
              BLB Travelers curates elevated global travel experiences, from
              bespoke vacations and Hajj &amp; Umrah journeys to education,
              medical, and visa advisory services.
            </p>
          </div>
        </div>

        {/* Dark Bottom Bar */}
        <div className="mt-2 h-[42px] w-full bg-[#0D0D0D]" />

        {/* Copyright */}
        <div className="py-6 text-center text-sm text-gray-400">
          Copyright &copy; 2026
        </div>
      </div>
    </footer>
  );
};

export default Footer;