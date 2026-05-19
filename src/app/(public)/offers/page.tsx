import Feedback from "@/features/home/components/FeedBack";
import OffersHero from "@/features/offers/components/OffersHero";
import PopularPackages from "@/features/offers/components/PopularPackages";




const OffersPage = () => {
  return (
    <main>
      <OffersHero />
      <PopularPackages />
      <Feedback/>
   
  
    </main>
  );
};

export default OffersPage;