"use client";

import { useState } from "react";
import ScheduleConsultationModal from "./ScheduleConsultationModal";

export default function ExpertConsultation() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-[url('/bg-frame.png')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="px-6 md:px-20">
            <div className="max-w-2xl">
              <h1 className="font-cinzel text-5xl leading-[1.2] uppercase tracking-wide text-white md:text-7xl">
                Expert BLB <br />
                Consultation
              </h1>

              <p className="mt-8 max-w-xl font-poppins text-sm leading-7 text-gray-200 md:text-lg">
                Personalized travel planning with our luxury travel experts.
                From visa assistance to bespoke itineraries—we handle every
                detail.
              </p>

              <button
                onClick={() => setOpenModal(true)}
                className="mt-10 bg-[#F4A300] px-8 py-4 text-xs uppercase tracking-[2px] text-white transition hover:bg-[#db9300] md:text-sm"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ScheduleConsultationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}