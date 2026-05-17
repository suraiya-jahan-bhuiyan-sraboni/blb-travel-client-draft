export default function ExpertConsultation() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-frame.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="px-6 md:px-20">
          <div className="max-w-2xl">
            <h1 className="font-cinzel text-white text-5xl md:text-7xl leading-[1.2] uppercase tracking-wide">
              Expert BLB <br />
              Consultation
            </h1>

            <p className="mt-8 max-w-xl font-poppins text-sm md:text-lg leading-7 text-gray-200">
              Personalized travel planning with our luxury travel experts.
              From visa assistance to bespoke itineraries—we handle every
              detail.
            </p>

            <button className="mt-10 bg-[#F4A300] px-8 py-4 text-xs md:text-sm uppercase tracking-[2px] text-white transition hover:bg-[#db9300]">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}