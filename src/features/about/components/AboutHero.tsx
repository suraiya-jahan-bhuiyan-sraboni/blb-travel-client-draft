import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative h-[640px] w-full overflow-hidden">
    
      <Image
        src="/about/about-hero.png"
        alt="Discover The World"
        fill
        priority
        className="
          object-cover
          object-center
          md:object-center
        "
      />

     
      <div className="absolute inset-0 bg-black/35" />

      
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1
          className="
            text-center
            text-white
            uppercase
            font-normal
            tracking-[2px]
            text-[24px]
            leading-[31.2px]
          "
          style={{
            fontFamily: "Lora",
          }}
        >
          DISCOVER THE WORLD
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;