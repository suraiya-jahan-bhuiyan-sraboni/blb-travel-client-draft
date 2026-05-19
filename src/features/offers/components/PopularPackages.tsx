import PopularPackageCard from "./PopularPackageCard";

import { popularPackages } from "@/constants/offers/popularPackages";

const PopularPackages = () => {
  return (
    <section className="bg-[#F8F8F8] py-[100px] px-[130px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
      
        <div className="flex flex-col items-center gap-4">
        
          <span
            className="
              text-[13px]
              leading-[22px]
              tracking-[1.2px]
              font-normal
              uppercase
              bg-gradient-to-r
              from-[#FE9A00]
              to-[#FFA500]
              bg-clip-text
              text-transparent
            "
            style={{ fontFamily: "Switzer" }}
          >
            Exclusive Offers
          </span>

        
          <h2
            className="
              text-[#1E293B]
              text-[40px]
              leading-[72px]
              tracking-[2.5px]
              font-normal
              capitalize
              text-center
            "
            style={{ fontFamily: "Lora" }}
          >
            Popular Packages
          </h2>

        
          <p
            className="
              max-w-[820px]
              text-center
              text-[#475569]
              text-[13px]
              leading-[22px]
              tracking-[1.2px]
              font-normal
            "
            style={{ fontFamily: "Switzer" }}
          >
            Our finest collection of international travel experiences —
            curated for comfort, culture, and discovery. Each package is
            thoughtfully designed to offer more than just a destination.
          </p>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {popularPackages.map((item) => (
            <PopularPackageCard
              key={item.id}
              packageItem={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;