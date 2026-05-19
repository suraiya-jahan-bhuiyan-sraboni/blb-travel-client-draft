interface VacationOverlayProps {
  title: string;
  location: string;
}

const VacationOverlay = ({
  title,
  location,
}: VacationOverlayProps) => {
  return (
    <div className="absolute bottom-0 left-0 w-full px-8 pt-10 pb-10 z-10">
      <div className="space-y-1">
        <h3 className="text-white text-[16px] leading-6 tracking-[5%]">
          {title}
        </h3>

        <p className="text-white/80 text-[13px] leading-5">
          {location}
        </p>

        <p className="mt-2 text-[#FE9A00] text-[20px] font-semibold">
          BDT 1,00,000
          <span className="text-[#FFD27A] text-[12px] font-normal">
            {" "}
            / per person
          </span>
        </p>

        <button className="mt-4 bg-[#FE9A00] hover:bg-[#ea9200] transition-all duration-300 text-white text-[12px] uppercase tracking-wider px-6 py-3">
          View Details
        </button>
      </div>
    </div>
  );
};

export default VacationOverlay;