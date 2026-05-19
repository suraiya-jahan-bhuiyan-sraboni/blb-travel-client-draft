import ClientReview from "@/features/home/components/ClientReview";
import ExclusiveOffers from "@/features/home/components/ExclusiveOffers";
import ExpertConsultation from "@/features/home/components/ExpertConsultation";
import Feedback from "@/features/home/components/FeedBack";
import NewsletterSection from "@/features/home/components/NewsletterSection";
import PackageList from "@/features/home/components/PackageList";

export default function Home() {
  return (
    <main>
      <h1>Welcome to BLB Travel</h1>
      <ExclusiveOffers/>
      <PackageList />
      <ClientReview />
      <Feedback />
         <ExpertConsultation/>
        <NewsletterSection />
    </main>
  );
}
