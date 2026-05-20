import Image from "next/image";

import { hajjPackages } from "@/constants/offers/hajjPackages";

const HajjUmrahPackages = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-[100px]">
      <div className="max-w-[1440px] mx-auto px-[100px] flex flex-col gap-[44px]">
        
       
        <div className="flex flex-col items-center">
          
         
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
            style={{
              fontFamily: "Switzer",
              fontVariant: "small-caps",
            }}
          >
            A JOURNEY OF THE SOUL
          </span>

     
          <h2
            className="
              mt-[4px]
              text-[40px]
              leading-[72px]
              tracking-[2.5px]
              text-[#1E293B]
              capitalize
              text-center
            "
            style={{
              fontFamily: "Lora",
              fontWeight: 400,
            }}
          >
            HAJJ & UMRAH PACKAGES
          </h2>

      
          <p
            className="
              max-w-[900px]
              text-center
              text-[13px]
              leading-[22px]
              tracking-[1.2px]
              text-[#475569]
            "
            style={{
              fontFamily: "Switzer",
              fontVariant: "small-caps",
            }}
          >
            We handle every arrangement — flights, accommodation, and
            guidance — so you can focus entirely on your spiritual journey.
          </p>
        </div>

      
        <div className="grid grid-cols-2 gap-4">
          {hajjPackages.map((item) => (
            <div
              key={item.id}
              className="
                relative
                h-[380px]
                min-h-[380px]
                rounded-[8px]
                overflow-hidden
                shadow-[0px_8px_30px_0px_#0000001F]
              "
            >
           
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

            
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                "
              />

              <div className="absolute inset-0 p-[32px] flex items-end">
                <div className="w-full">
                  
                
                  <h3
                    className="
                      text-white
                      text-[20px]
                      leading-[24px]
                      tracking-[0.05em]
                      mb-[20px]
                    "
                    style={{
                      fontFamily: "Lora",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h3>

                 
                  <button
                    className="
                      h-[41px]
                      px-[24px]
                      rounded-[2px]
                      bg-gradient-to-r
                      from-[#FE9A00]
                      to-[#FFA500]
                      flex
                      items-center
                      justify-center
                      text-white
                      text-[13px]
                      tracking-[1.5px]
                      uppercase
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                    "
                    style={{
                      fontFamily: "Switzer",
                      fontWeight: 400,
                    }}
                  >
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HajjUmrahPackages;