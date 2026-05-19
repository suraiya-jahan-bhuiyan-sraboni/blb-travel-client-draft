import { PopularPackage } from "@/types/offers/popularPackage.types";
import Image from "next/image";



interface PopularPackageCardProps {
  packageItem: PopularPackage;
}

const PopularPackageCard = ({
  packageItem,
}: PopularPackageCardProps) => {
  return (
    <div className="group flex flex-col">
     
      <div className="relative overflow-hidden h-[550px]">
        <Image
          src={packageItem.image}
          alt={packageItem.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

      
        <div
          className="
            absolute
            inset-0
            bg-black/40
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
        />

       
        <div
          className="
            absolute
            top-5
            right-5
            bg-[#FFA500]
            text-white
            text-[12px]
            px-3
            py-1
            rounded-md
            z-20
          "
          style={{ fontFamily: "Switzer" }}
        >
          30% OFF
        </div>

       
        <div
          className="
            absolute
            inset-0
            flex
            items-end
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
            z-20
          "
        >
          <div className="p-8 text-white">
            <p
              className="text-[14px] mb-2"
              style={{ fontFamily: "Switzer" }}
            >
              {packageItem.duration}
            </p>

            <p
              className="
                text-[16px]
                line-through
                text-white/70
              "
              style={{ fontFamily: "Switzer" }}
            >
              {packageItem.oldPrice}
            </p>

            <h3
              className="
                text-[#FFA500]
                text-[28px]
                leading-tight
              "
              style={{ fontFamily: "Lora" }}
            >
              {packageItem.price}
            </h3>
          </div>
        </div>
      </div>

     
          













          
      <div
        className="
          flex
          flex-col
          gap-[6px]
          pt-6
          px-2
          pb-6
        "
      >
        <h3
          className="
            text-[#1E293B]
            text-[28px]
            leading-[38px]
            tracking-[1px]
            uppercase
          "
          style={{ fontFamily: "Lora" }}
        >
          {packageItem.title}
        </h3>

        <p
          className="
            text-[#475569]
            text-[13px]
            tracking-[1.2px]
            leading-[22px]
          "
          style={{ fontFamily: "Switzer" }}
        >
          {packageItem.locations}
        </p>
      </div>
    </div>
  );
};

export default PopularPackageCard;