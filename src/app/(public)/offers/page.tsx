
import Feedback from "@/features/home/components/FeedBack";
import ExploreBangladesh from "@/features/offers/components/ExploreBangladesh";
import HajjUmrahPackages from "@/features/offers/components/HajjUmrahPackages";
import OffersHero from "@/features/offers/components/OffersHero";
import PopularPackages from "@/features/offers/components/PopularPackages";
import Vacation from "@/features/offers/Vacation";




const OffersPage = () => {
  return (
    <main>
      <OffersHero />
      <Vacation/>
      <PopularPackages />
      <Feedback />
      <ExploreBangladesh />
      <HajjUmrahPackages/>
     
   
  
    </main>
  );
};

export default OffersPage;