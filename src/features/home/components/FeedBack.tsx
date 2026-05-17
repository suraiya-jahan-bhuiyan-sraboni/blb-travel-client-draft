"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function Feedback() {
  // ফর্ম ওপেন এবং ক্লোজ করার জন্য স্টেট
  const [isOpen, setIsOpen] = useState(false);

  // ইনপুট ফিল্ডের ডাটা স্টেট
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  // TanStack Query v5 Mutation
  const { mutate, isPending } = useMutation({
    mutationFn: async (newFeedback: typeof formData) => {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFeedback),
      });
      if (!response.ok) throw new Error("Submission failed");
      return response.json();
    },
    onSuccess: () => {
      alert("Thank you for your feedback!");
      setFormData({ name: "", email: "", feedback: "" });
      setIsOpen(false);
    },
    onError: (error) => {
      alert(error.message || "Something went wrong. Please try again.");
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.feedback) {
      alert("Please fill in all fields.");
      return;
    }
    mutate(formData);
  };

  return (
    <section className="w-full bg-[#F0F0F0] text-black py-10 md:py-14 px-6 md:px-[32px] lg:px-20 xl:px-[120px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative">

        {/* ==================== ১. ডিফল্ট CTA কন্টেন্ট সেকশন ==================== */}
        {/* isOpen সত্য হলে এই সেকশনটি অ্যানিমেশনের মাধ্যমে হাইড (hidden) হয়ে যাবে */}
        <div
          className={`flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-10 lg:text-left transition-all duration-500 ease-in-out ${isOpen ? "opacity-0 max-h-0 pointer-events-none scale-95" : "opacity-100 max-h-[500px] scale-100"
            }`}
        >
          <div className="flex flex-col items-start w-full">
            <span className="font-switzer text-[11px] md:text-[11px] leading-[16.5px] tracking-[2.5px] text-[#FE9A00] font-bold uppercase mb-[24px]">
              YOUR VOICE MATTERS
            </span>

            <h2 className="font-lora text-[20px] md:text-[28px] lg:text-[48px] tracking-[5%] text-[#334155] leading-tight mb-[16px] max-w-[600px] lg:max-w-none">
              Share your experience with us
            </h2>

            <p className="font-switzer text-[13px] mb-6 lg:mb-0 md:mb-0 md:text-[13px] leading-[1.6] text-gray-600 tracking-[1.2px] max-w-[540px] lg:max-w-none">
              Your feedback drives our commitment to excellence. Whether it&apos;s praise or concern, we&apos;re here to listen and improve.
            </p>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="font-switzer flex-1 w-[160px] lg:w-[180px] whitespace-nowrap mt-0 md:mt-10 lg:mt-24 h-[41px] inline-flex items-center justify-center bg-[#FE9A00] hover:bg-[#FFA500] text-white text-[13px] tracking-[1.5px] px-6 py-3 rounded-[2px] shadow-sm active:scale-[0.98] transition-all duration-200 text-center cursor-pointer"
          >
            Give Feedback
          </button>
        </div>

        {/* ==================== ২. অ্যানিমেটেড ফিডব্যাক ফর্ম সেকশন ==================== */}
        {/* isOpen সত্য হলে এটি ওপর থেকে নিচে স্মুথলি নেমে আসবে এবং ভিজিবল হবে */}
        <div
          className={`transition-all duration-500 ease-in-out transform ${isOpen
              ? "opacity-100 max-h-[1000px] translate-y-0 scale-100"
              : "opacity-0 max-h-0 -translate-y-10 scale-95 pointer-events-none"
            }`}
        >
          {/* ফর্ম হেডার সেকশন */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <span className="font-switzer text-[11px] leading-[16.5px] tracking-[2.5px] text-[#FE9A00] font-bold uppercase block mb-3">
                YOUR VOICE MATTERS
              </span>
              <h3 className="font-lora text-[24px] md:text-[36px] text-[#334155] font-medium">
                Share Your Experience
              </h3>
            </div>

            {/* CLOSE বাটন উইথ অ্যারো (▲) */}
            <button
              onClick={() => setIsOpen(false)}
              className="font-switzer text-[13px] tracking-[1px] bg-[#E2E8F0] hover:bg-gray-300 text-[#334155] font-semibold px-4 py-2 rounded flex items-center gap-1.5 transition-all cursor-pointer"
            >
              CLOSE <span>▲</span>
            </button>
          </div>

          {/* ফর্ম বডি */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label className="font-switzer text-[11px] tracking-[1.5px] font-bold text-gray-600 uppercase">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full bg-white text-black px-4 py-3 rounded-[4px] border border-gray-200 focus:outline-none focus:border-[#FE9A00] font-switzer text-[14px]"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label className="font-switzer text-[11px] tracking-[1.5px] font-bold text-gray-600 uppercase">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-white text-black px-4 py-3 rounded-[4px] border border-gray-200 focus:outline-none focus:border-[#FE9A00] font-switzer text-[14px]"
                />
              </div>
            </div>

            {/* Feedback Input */}
            <div className="flex flex-col gap-2">
              <label className="font-switzer text-[11px] tracking-[1.5px] font-bold text-gray-600 uppercase">
                YOUR FEEDBACK
              </label>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleInputChange}
                rows={5}
                placeholder="Share your thoughts and experiences with us..."
                className="w-full bg-white text-black px-4 py-3 rounded-[4px] border border-gray-200 focus:outline-none focus:border-[#FE9A00] font-switzer text-[14px] resize-none"
              />
            </div>

            {/* Submit Button (নিচে ডানে প্লেসড) */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isPending}
                className="font-switzer w-[160px] h-[41px] inline-flex items-center justify-center bg-[#FE9A00] hover:bg-[#FFA500] text-white text-[13px] tracking-[1.5px] px-6 py-3 rounded-[2px] shadow-sm active:scale-[0.98] transition-all duration-200 text-center cursor-pointer disabled:opacity-50"
              >
                {isPending ? "Submitting..." : "Give Feedback"}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}