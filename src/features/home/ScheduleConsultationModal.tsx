

"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Clock3, X } from "lucide-react";

import { CONSULTATION_TABS } from "@/constants/consultation-tabs";

interface ScheduleConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleConsultationModal({
  isOpen,
  onClose,
}: ScheduleConsultationModalProps) {
  const [activeTab, setActiveTab] = useState<string>("vacation");

  const selectedTab = CONSULTATION_TABS.find(
    (tab) => tab.id === activeTab
  );

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50 overflow-y-auto
        bg-black/60 px-4 py-6
        backdrop-blur-[2px]
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative mx-auto w-full max-w-[900px]
          overflow-hidden rounded-[4px]
          bg-white
          shadow-[0px_20px_80px_rgba(0,0,0,0.25)]
        "
      >
       
        <div className="flex items-center justify-between bg-[#121212] px-5 py-5 md:px-7 md:py-6">
          <h2
            className="
              font-lora
              text-[24px]
              font-normal
              leading-[38px]
              tracking-[1.5px]
              text-white
              md:text-[32px]
              md:leading-[48px]
            "
          >
            Schedule Consultation
          </h2>

          <button
            onClick={onClose}
            className="transition duration-200 hover:opacity-70"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

      
        <div className="flex flex-wrap gap-3 border-b border-[#E5E7EB] px-4 py-5 md:px-7">
          {CONSULTATION_TABS.map((tab) => {
            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 rounded-full border
                  px-5 py-2.5 transition-all duration-200

                  ${
                    active
                      ? "border-[#FE9A00] bg-gradient-to-r from-[#FE9A00] to-[#FFA500] text-white"
                      : "border-[#D1D5DB] bg-white text-[#374151] hover:border-[#FE9A00]"
                  }
                `}
              >
                <Image
                  src={tab.icon}
                  alt={tab.label}
                  width={14}
                  height={14}
                  className="h-[14px] w-[14px] object-contain"
                />

                <span
                  className="
                    font-switzer
                    text-[13px]
                    font-normal
                    tracking-[0.5px]
                  "
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

      
        <div className="grid grid-cols-1 gap-x-7 gap-y-5 px-4 py-6 md:grid-cols-2 md:px-7">
          {/* Full Name */}
          <div>
            <label
              className="
                mb-2 block
                font-switzer
                text-[11px]
                font-normal
                uppercase
                leading-[16.5px]
                tracking-[1.5px]
                text-[#374151]
              "
            >
              Full Name <span className="text-[#FE9A00]">*</span>
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="
                h-[52px] w-full rounded-[4px]
                border border-[#E5E7EB]
                bg-[#F8FAFC]
                px-4
                font-switzer
                text-sm text-[#111827]
                outline-none
                transition
                placeholder:text-[#94A3B8]
                focus:border-[#FE9A00]
              "
            />
          </div>

        
          <div>
            <label
              className="
                mb-2 block
                font-switzer
                text-[11px]
                font-normal
                uppercase
                leading-[16.5px]
                tracking-[1.5px]
                text-[#374151]
              "
            >
              Email Address <span className="text-[#FE9A00]">*</span>
            </label>

            <input
              type="email"
              placeholder="your.email@example.com"
              className="
                h-[52px] w-full rounded-[4px]
                border border-[#E5E7EB]
                bg-[#F8FAFC]
                px-4
                font-switzer
                text-sm text-[#111827]
                outline-none
                transition
                placeholder:text-[#94A3B8]
                focus:border-[#FE9A00]
              "
            />
          </div>

          <div>
            <label
              className="
                mb-2 block
                font-switzer
                text-[11px]
                font-normal
                uppercase
                leading-[16.5px]
                tracking-[1.5px]
                text-[#374151]
              "
            >
              Phone Number <span className="text-[#FE9A00]">*</span>
            </label>

            <input
              type="text"
              placeholder="+880 1XXX-XXXXXX"
              className="
                h-[52px] w-full rounded-[4px]
                border border-[#E5E7EB]
                bg-[#F8FAFC]
                px-4
                font-switzer
                text-sm text-[#111827]
                outline-none
                transition
                placeholder:text-[#94A3B8]
                focus:border-[#FE9A00]
              "
            />
          </div>

          <div>
            <label
              className="
                mb-2 block
                font-switzer
                text-[11px]
                font-normal
                uppercase
                leading-[16.5px]
                tracking-[1.5px]
                text-[#374151]
              "
            >
              Service Interested In{" "}
              <span className="text-[#FE9A00]">*</span>
            </label>

            <input
              type="text"
              value={selectedTab?.label || ""}
              readOnly
              className="
                h-[52px] w-full rounded-[4px]
                border border-[#E5E7EB]
                bg-[#F8FAFC]
                px-4
                font-switzer
                text-sm text-[#111827]
                outline-none
              "
            />
          </div>

          <div>
            <label
              className="
                mb-2 block
                font-switzer
                text-[11px]
                font-normal
                uppercase
                leading-[16.5px]
                tracking-[1.5px]
                text-[#374151]
              "
            >
              Preferred Date <span className="text-[#FE9A00]">*</span>
            </label>

            <div
              className="
                flex h-[52px] items-center
                rounded-[4px]
                border border-[#E5E7EB]
                bg-[#F8FAFC]
                px-4
              "
            >
              <Calendar size={16} className="text-[#94A3B8]" />

              <input
                type="date"
                className="
                  ml-3 w-full bg-transparent
                  font-switzer text-sm
                  outline-none
                "
              />
            </div>
          </div>

          <div>
            <label
              className="
                mb-2 block
                font-switzer
                text-[11px]
                font-normal
                uppercase
                leading-[16.5px]
                tracking-[1.5px]
                text-[#374151]
              "
            >
              Preferred Time <span className="text-[#FE9A00]">*</span>
            </label>

            <div
              className="
                flex h-[52px] items-center
                rounded-[4px]
                border border-[#E5E7EB]
                bg-[#F8FAFC]
                px-4
              "
            >
              <Clock3 size={16} className="text-[#94A3B8]" />

              <input
                type="time"
                className="
                  ml-3 w-full bg-transparent
                  font-switzer text-sm
                  outline-none
                "
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label
              className="
                mb-2 block
                font-switzer
                text-[11px]
                font-normal
                uppercase
                leading-[16.5px]
                tracking-[1.5px]
                text-[#374151]
              "
            >
              Additional Requirements
            </label>

            <textarea
              rows={5}
              placeholder="Tell us about your travel plans, special requirements, or any questions you have..."
              className="
                w-full rounded-[4px]
                border border-[#E5E7EB]
                bg-[#F8FAFC]
                p-4
                font-switzer
                text-sm text-[#111827]
                outline-none
                transition
                placeholder:text-[#94A3B8]
                focus:border-[#FE9A00]
              "
            />
          </div>
        </div>

     
        <div
          className="
            flex flex-col-reverse gap-4
            border-t border-[#E5E7EB]
            px-4 py-5
            md:flex-row md:items-center md:justify-between md:px-7
          "
        >
          <p
            className="
              text-center font-switzer
              text-sm text-[#64748B]
              md:text-left
            "
          >
            Our team will contact you within 24 hours
          </p>

          <button
            className="
              h-[48px]
              rounded-[2px]
              bg-gradient-to-r
              from-[#FE9A00]
              to-[#FFA500]
              px-8
              font-switzer
              text-[13px]
              font-normal
              uppercase
              tracking-[2px]
              text-white
              transition duration-200
              hover:opacity-90
            "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}