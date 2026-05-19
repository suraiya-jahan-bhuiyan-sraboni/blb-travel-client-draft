import Image from "next/image";

const OffersHero = () => {
  return (
    <section className="relative h-[900px] w-full overflow-hidden">
   
      <Image
        src="/offers/bg-offer-frame.png"
        alt="Discover The World"
        fill
        priority
        className="object-cover"
      />

     
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

    
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="font-lora text-[32px] font-normal uppercase tracking-[2px] leading-[31.2px] text-white">
          Discover The World
        </h1>
      </div>
    </section>
  );
};

export default OffersHero;