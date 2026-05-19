
import Feedback from "@/features/home/components/FeedBack";
import ExploreBangladesh from "@/features/offers/components/ExploreBangladesh";
import OffersHero from "@/features/offers/components/OffersHero";
import PopularPackages from "@/features/offers/components/PopularPackages";




const OffersPage = () => {
  return (
    <main>
      <OffersHero />
      <PopularPackages />
      <Feedback />
      <ExploreBangladesh/>
     
   
  
    </main>
  );
};

export default OffersPage;