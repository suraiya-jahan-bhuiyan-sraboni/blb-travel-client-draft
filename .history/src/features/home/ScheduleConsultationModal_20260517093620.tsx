"use client";

import { useState } from "react";
import {
  Calendar,
  Clock3,
  GraduationCap,
  Plane,
  X,
  BadgeCheck,
  BookText,
} from "lucide-react";

interface ScheduleConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tabs = [
  {
    id: "vacation",
    label: "Vacations",
    icon: Plane,
  },
  {
    id: "hajj",
    label: "Hajj/Umrah",
    icon: BadgeCheck,
  },
  {
    id: "visa",
    label: "Visa Consultancy",
    icon: BookText,
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
  },
];

export default function ScheduleConsultationModal({
  isOpen,
  onClose,
}: ScheduleConsultationModalProps) {
  const [activeTab, setActiveTab] = useState("vacation");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 px-3 py-8">
      <div className="relative w-full max-w-[900px] overflow-hidden rounded-md bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#111111] to-[#1c1c1c] px-7 py-6">
          <h2 className="font-cinzel text-3xl text-white md:text-5xl">
            Schedule Consultation
          </h2>

          <button onClick={onClose} className="text-white">
            <X size={26} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 border-b px-7 py-5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-all duration-200
                  
                  ${
                    active
                      ? "border-[#F4A300] bg-[#F4A300] text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-[#F4A300]"
                  }
                `}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 px-7 py-6 md:grid-cols-2">
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-[11px] uppercase tracking-[3px] text-gray-700">
              Full Name *
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="h-[52px] w-full rounded-md border border-gray-200 bg-[#f8fafc] px-4 text-sm outline-none placeholder:text-gray-400 focus:border-[#F4A300]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-[11px] uppercase tracking-[3px] text-gray-700">
              Email Address *
            </label>

            <input
              type="email"
              placeholder="your.email@example.com"
              className="h-[52px] w-full rounded-md border border-gray-200 bg-[#f8fafc] px-4 text-sm outline-none placeholder:text-gray-400 focus:border-[#F4A300]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-[11px] uppercase tracking-[3px] text-gray-700">
              Phone Number *
            </label>

            <input
              type="text"
              placeholder="+880 1XXX-XXXXXX"
              className="h-[52px] w-full rounded-md border border-gray-200 bg-[#f8fafc] px-4 text-sm outline-none placeholder:text-gray-400 focus:border-[#F4A300]"
            />
          </div>

          {/* Service */}
          <div>
            <label className="mb-2 block text-[11px] uppercase tracking-[3px] text-gray-700">
              Service Interested In *
            </label>

            <input
              type="text"
              value={
                activeTab === "vacation"
                  ? "Vacations"
                  : activeTab === "hajj"
                  ? "Hajj/Umrah"
                  : activeTab === "visa"
                  ? "Visa Consultancy"
                  : "Education"
              }
              readOnly
              className="h-[52px] w-full rounded-md border border-gray-200 bg-[#f8fafc] px-4 text-sm outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="mb-2 block text-[11px] uppercase tracking-[3px] text-gray-700">
              Preferred Date *
            </label>

            <div className="flex h-[52px] items-center rounded-md border border-gray-200 bg-[#f8fafc] px-4">
              <Calendar size={17} className="text-gray-400" />

              <input
                type="date"
                className="ml-3 w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label className="mb-2 block text-[11px] uppercase tracking-[3px] text-gray-700">
              Preferred Time *
            </label>

            <div className="flex h-[52px] items-center rounded-md border border-gray-200 bg-[#f8fafc] px-4">
              <Clock3 size={17} className="text-gray-400" />

              <input
                type="time"
                className="ml-3 w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* Textarea */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-[11px] uppercase tracking-[3px] text-gray-700">
              Additional Requirements
            </label>

            <textarea
              rows={4}
              placeholder="Tell us about your travel plans, special requirements, or any questions you have..."
              className="w-full rounded-md border border-gray-200 bg-[#f8fafc] p-4 text-sm outline-none placeholder:text-gray-400 focus:border-[#F4A300]"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-start justify-between gap-4 border-t px-7 py-5 md:flex-row md:items-center">
          <p className="text-sm text-gray-500">
            Our team will contact you within 24 hours
          </p>

          <button className="bg-[#F4A300] px-8 py-3 text-sm uppercase tracking-[2px] text-white transition hover:bg-[#db9300]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}