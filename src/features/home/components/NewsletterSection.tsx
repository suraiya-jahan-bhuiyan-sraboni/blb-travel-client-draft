const NewsletterSection = () => {
  return (
    <section className="bg-[#F3F3F3] py-[130px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 text-center">
        
   
        <h2
          className="
            text-center
            text-[80px]
            font-[200]
            leading-[100px]
            tracking-[2.5px]
            text-[#1E293B]
            capitalize
          "
          style={{
            fontFamily: "Switzer",
          }}
        >
          TRAVEL
          <br />
          PARTNER
        </h2>

      
        <p
          className="
            mt-[24px]
            max-w-[900px]
            text-center
            text-[40px]
            font-[200]
            leading-[48px]
            text-[#64748B]
          "
          style={{
            fontFamily: "Switzer",
          }}
        >
          Discover travel inspiration based on your
          <br />
          preferred style.
        </p>

      </div>
    </section>
  );
};

export default NewsletterSection;