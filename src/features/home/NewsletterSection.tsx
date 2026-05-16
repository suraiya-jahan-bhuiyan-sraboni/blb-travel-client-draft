const NewsletterSection = () => {
  return (
    <section className="bg-[#F3F3F3] py-[90px] sm:py-[110px] lg:py-[130px]">
      <div className="mx-auto flex max-w-[900px] flex-col items-center px-6 text-center">
        
        <h2 className="font-cinzel text-[58px] font-[300] uppercase leading-[1.12] tracking-[0.08em] text-[#2E3445] sm:text-[78px] lg:text-[96px]">
          Travel
          <br />
          Partner
        </h2>

        <p className="font-poppins mt-10 max-w-[700px] text-[20px] font-[300] leading-[1.45] tracking-[0.01em] text-[#8A93A5] sm:text-[26px] lg:text-[30px]">
          Discover travel inspiration based on your
          <br className="hidden sm:block" />
          preferred style.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;