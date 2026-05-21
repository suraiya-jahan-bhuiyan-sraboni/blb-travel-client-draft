"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronDown,
    Menu,
    X,
    Phone,
    CircleUserRound,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
    const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const servicesList = [
        { name: "Vacations", icon: "/serviceMenu-icon/tree-palm.png" },
        { name: "Hajj/Umrah", icon: "/serviceMenu-icon/arcticons-muslim-pro.png" },
        { name: "Bangladesh Visit", icon: "/serviceMenu-icon/bd-flag.png" },
        { name: "Visa Consultancy", icon: "/serviceMenu-icon/scroll-text.png" },
        { name: "Traveler's Choice", icon: "/serviceMenu-icon/shopping-bag.png" },
        { name: "Education Tourism", icon: "/serviceMenu-icon/graduation-cap.png" },
        { name: "Medical Tourism", icon: "/serviceMenu-icon/stethoscope.png" },
        { name: "Legal Advisor", icon: "/serviceMenu-icon/scale.png" },
        { name: "Pay Bill", icon: "/serviceMenu-icon/square-menu.png" },
        { name: "Traveler's Resources", icon: "/serviceMenu-icon/book-user.png" },
    ];

    const socialIcons = [
        { icon: FaFacebook, href: "#", label: "Facebook" },
        { icon: FaInstagram, href: "#", label: "Instagram" },
        { icon: FaXTwitter, href: "#", label: "Twitter" },
        { icon: FaLinkedin, href: "#", label: "Linkedin " },
    ];

    return (
        <header className="absolute top-0 left-0 z-50 w-full font-sans">
            {/* TOP NAVBAR */}
            <div className="relative border-b border-white/10 bg-[#111111]/95 backdrop-blur-md">
                <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-4 md:px-8 lg:px-[46px]">
                    {/* LEFT UTILITIES (Desktop) */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-white">
                        {/* SERVICES TOGGLE */}
                        <button
                            onClick={() => setIsServiceMenuOpen(!isServiceMenuOpen)}
                            className={`flex items-center gap-[6px] text-[11px] font-medium uppercase tracking-[1.2px] transition duration-300 ${isServiceMenuOpen
                                ? "text-[#cca43b]"
                                : "text-white/80 hover:text-[#cca43b]"
                                }`}
                        >
                            <span>Services</span>
                            {isServiceMenuOpen ? <X size={14} /> : <Menu size={14} />}
                        </button>

                        {/* LANGUAGE */}
                        <button className="flex items-center gap-[3px] text-[11px] font-medium uppercase tracking-[1.2px] text-white/80 transition duration-300 hover:text-[#cca43b]">
                            <span>ENG</span>
                            <ChevronDown size={13} />
                        </button>

                        {/* CURRENCY */}
                        <button className="flex items-center gap-[3px] text-[11px] font-medium uppercase tracking-[1.2px] text-white/80 transition duration-300 hover:text-[#cca43b]">
                            <span>BDT</span>
                            <ChevronDown size={13} />
                        </button>
                    </div>

                    {/* MOBILE: Only menu icon on left */}
                    <div className="flex lg:hidden items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white hover:text-[#cca43b] transition"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* CENTER LOGO (visible on all) */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Link href="/">
                            <Image
                                src="/footer/logo.png"
                                alt="BLB Travelers"
                                width={145}
                                height={46}
                                priority
                                className="h-auto w-[120px] md:w-[145px] object-contain"
                            />
                        </Link>
                    </div>

                    {/* RIGHT UTILITIES: On mobile only profile icon; desktop shows full */}
                    <div className="flex items-center gap-3 md:gap-6 xl:gap-8 text-white">
                        {/* CALL US - hidden on mobile */}
                        <button className="hidden md:flex sm:flex items-center gap-[6px] text-[11px] font-medium uppercase tracking-[1.2px] text-white/80 transition duration-300 hover:text-[#FE9A00]">
                            <Phone size={13} />
                            <span>Call Us</span>
                        </button>

                        {/* PROFILE - always visible */}
                        <button className="flex items-center gap-[6px] text-[11px] font-medium uppercase tracking-[1.2px] text-white/80 transition duration-300 hover:text-[#FE9A00]">
                            <CircleUserRound size={14} />
                            <span className="hidden sm:inline">Profile</span>
                        </button>

                        {/* CONSULTATION BUTTON - hidden on mobile, visible on md+ */}
                        <button className="hidden md:block h-[36px] md:h-[40px] border border-white/60 px-4 md:px-6 text-[10px] font-medium uppercase tracking-[1.5px] text-white transition-all duration-300 ease-in-out hover:bg-[#FE9A00] hover:border-[#cca43b]  hover:shadow-lg">
                            Consultation
                        </button>
                    </div>
                </div>
            </div>

            {/* BOTTOM SUB-MENU BAR (Desktop) */}
            <div className="hidden lg:block relative border-b border-white/10 bg-[rgba(255,255,255,0.25)] backdrop-blur-md z-20">
                <div className="mx-auto flex h-[50px] max-w-[1440px] items-center justify-center gap-10 xl:gap-14 px-6">
                    {[
                        "Flights",
                        "Accomodations",
                        "Vacations",
                        "Visa",
                        "Pay Bill",
                        "About Us",
                    ].map((item) => (
                        <Link
                            key={item}
                            href="/"
                            className="text-xs font-normal uppercase tracking-[2px] text-white hover:text-[#FE9A00] transition-colors duration-200"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>

            {/* EXPANDABLE SERVICE MEGA MENU (Desktop) */}
            {isServiceMenuOpen && (
                <div className="hidden lg:block absolute left-0 w-full bg-[#161616] text-white border-b border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="mx-auto max-w-[1200px] px-8 py-16">
                        {/* GRID CONTENT */}
                        <div className="grid grid-cols-5 gap-5">
                            {servicesList.map((service, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href="/"
                                        className="group relative flex flex-col items-center justify-center border border-[#cca43b]/30 bg-[#1c1c1c] aspect-square p-6 text-center cursor-pointer transition-all duration-300 hover:border-[#cca43b] hover:bg-[#222222] hover:shadow-[0_0_15px_rgba(204,164,59,0.2)]"
                                    >
                                        <img
                                            src={service.icon}
                                            alt={`${service.name} icon`}
                                            className="w-10 h-10 mb-4 object-contain transition-transform duration-300 group-hover:scale-110"
                                        />

                                        <span className="text-[11px] uppercase tracking-[1px] font-medium text-gray-300 transition-colors duration-300 group-hover:text-[#f5be6c]">
                                            {service.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* MEGA MENU FOOTER */}
                        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center justify-between text-[11px] tracking-[1.5px] uppercase text-gray-400 gap-6">
                            {/* Policy Links */}
                            <div className="flex gap-8">
                                <Link href="/about" className="hover:text-[#FE9A00] transition">About Us</Link>
                                <Link href="/contact" className="hover:text-[#FE9A00] transition">Contact Us</Link>
                                <Link href="/policy" className="hover:text-[#FE9A00] transition">Our Policy</Link>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-6">
                                {socialIcons.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-[#FE9A00] transition-transform duration-200 hover:scale-110"
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* MOBILE MENU DRAWER */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-[70px] z-50 w-full bg-[#111111] text-white p-6 overflow-y-auto animate-in fade-in slide-in-from-right duration-300">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3 border-b border-white/10 pb-4">
                            <span className="text-xs uppercase text-gray-500 tracking-widest font-bold">
                                Main Navigation
                            </span>
                            {[
                                "Flights",
                                "Accomodations",
                                "Vacations",
                                "Visa",
                                "Pay Bill",
                                "About Us",
                            ].map((item) => (
                                <Link
                                    key={item}
                                    href="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm uppercase tracking-wide py-2 hover:text-[#cca43b] transition"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3">
                            <span className="text-xs uppercase text-gray-500 tracking-widest font-bold">
                                Our Services
                            </span>
                            <div className="grid grid-cols-2 gap-3">
                                {servicesList.map((service, idx) => (
                                    <Link
                                        key={idx}
                                        href="/"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-2 border border-white/5 bg-[#1c1c1c] p-3 rounded hover:border-[#cca43b] transition group"
                                    >
                                        <img
                                            src={service.icon}
                                            alt={`${service.name} icon`}
                                            className="w-4 h-4 object-contain transition-transform group-hover:scale-110"
                                        />
                                        <span className="text-xs tracking-wide text-gray-300 group-hover:text-[#cca43b]">
                                            {service.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;