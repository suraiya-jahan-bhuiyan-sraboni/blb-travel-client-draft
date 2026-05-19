import { vacationPackages } from "@/constants/offers/vacationPackages";
import VacationCard from "./components/VacationCard";

const Vacation = () => {
  return (
    <section className="w-full bg-[#F8F8F8] py-[100px]">
      <div className="max-w-[1440px] mx-auto px-5 xl:px-[100px]">
   
        <div className="flex flex-col items-center text-center">
      
          <span className="text-[13px] leading-[22px] tracking-[1.2px] uppercase text-[#FE9A00]">
            LIMITED TIME OFFERS
          </span>

       
          <h2 className="mt-2 text-[#1E293B] text-[40px] leading-[72px] tracking-[2.5px] font-[Lora] capitalize">
            Vacation Packages
          </h2>

       
          <p className="max-w-[720px] mt-2 text-[#475569] text-[13px] leading-[22px] tracking-[1.2px] uppercase">
            Hand-selected destinations at exceptional value — available for a
            short time only. Book early and secure the experience you deserve.
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
          {vacationPackages.map((item, index) => (
            <VacationCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vacation;