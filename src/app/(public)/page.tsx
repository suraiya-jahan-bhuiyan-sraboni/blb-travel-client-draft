import ClientReview from "@/features/home/components/ClientReview";
import ExclusiveOffers from "@/features/home/components/ExclusiveOffers";
import ExpertConsultation from "@/features/home/components/ExpertConsultation";
import Feedback from "@/features/home/components/FeedBack";
import HeroSection from "@/features/home/components/HeroSection";
import Navbar from "@/features/home/components/Navbar";
import NewsletterSection from "@/features/home/components/NewsletterSection";
import PackageList from "@/features/home/components/PackageList";
import TrustSection from "@/features/home/components/TrustSection";


export default function Home() {
  return (
    <main>
        <Navbar />
              <HeroSection />
              <TrustSection />
    
      <ExclusiveOffers/>
      <PackageList />
      <ClientReview />
      <Feedback />
         <ExpertConsultation/>
        <NewsletterSection />
    </main>
  );
}
