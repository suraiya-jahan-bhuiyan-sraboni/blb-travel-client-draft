"use client";

import {
  Calendar,
  Clock3,
  GraduationCap,
  Plane,
  X,
} from "lucide-react";

interface ScheduleConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleConsultationModal({
  isOpen,
  onClose,
}: ScheduleConsultationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-6xl overflow-hidden rounded-md bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#111111] to-[#1c1c1c] px-8 py-8">
          <h2 className="font-cinzel text-3xl text-white md:text-5xl">
            Schedule Consultation
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-white"
          >
            <X size={30} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 border-b px-8 py-6">
          <button className="flex items-center gap-2 rounded-full bg-[#F4A300] px-6 py-3 text-sm text-white">
            <Plane size={16} />
            Vacations
          </button>

          <button className="rounded-full border border-gray-300 px-6 py-3 text-sm text-gray-700">
            Hajj/Umrah
          </button>

          <button className="rounded-full border border-gray-300 px-6 py-3 text-sm text-gray-700">
            Visa Consultancy
          </button>

          <button className="flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm text-gray-700">
            <GraduationCap size={16} />
            Education
          </button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
          {/* Full Name */}
          <div>
            <label className="mb-3 block text-xs uppercase tracking-[3px] text-gray-700">
              Full Name *
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-md border border-gray-200 bg-[#f8fafc] px-5 py-4 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-3 block text-xs uppercase tracking-[3px] text-gray-700">
              Email Address *
            </label>

            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full rounded-md border border-gray-200 bg-[#f8fafc] px-5 py-4 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-3 block text-xs uppercase tracking-[3px] text-gray-700">
              Phone Number *
            </label>

            <input
              type="text"
              placeholder="+880 1XXX-XXXXXX"
              className="w-full rounded-md border border-gray-200 bg-[#f8fafc] px-5 py-4 outline-none"
            />
          </div>

          {/* Service */}
          <div>
            <label className="mb-3 block text-xs uppercase tracking-[3px] text-gray-700">
              Service Interested In *
            </label>

            <input
              type="text"
              className="w-full rounded-md border border-gray-200 bg-[#f8fafc] px-5 py-4 outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="mb-3 block text-xs uppercase tracking-[3px] text-gray-700">
              Preferred Date *
            </label>

            <div className="flex items-center rounded-md border border-gray-200 bg-[#f8fafc] px-5 py-4">
              <Calendar size={18} className="text-gray-400" />

              <input
                type="date"
                className="ml-3 w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label className="mb-3 block text-xs uppercase tracking-[3px] text-gray-700">
              Preferred Time *
            </label>

            <div className="flex items-center rounded-md border border-gray-200 bg-[#f8fafc] px-5 py-4">
              <Clock3 size={18} className="text-gray-400" />

              <input
                type="time"
                className="ml-3 w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Textarea */}
          <div className="md:col-span-2">
            <label className="mb-3 block text-xs uppercase tracking-[3px] text-gray-700">
              Additional Requirements
            </label>

            <textarea
              rows={6}
              placeholder="Tell us about your travel plans, special requirements, or any questions you have..."
              className="w-full rounded-md border border-gray-200 bg-[#f8fafc] p-5 outline-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-start justify-between gap-5 border-t px-8 py-6 md:flex-row md:items-center">
          <p className="text-sm text-gray-500">
            Our team will contact you within 24 hours
          </p>

          <button className="bg-[#F4A300] px-10 py-4 text-sm uppercase tracking-[2px] text-white transition hover:bg-[#db9300]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}