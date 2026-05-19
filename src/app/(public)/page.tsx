import ClientReview from "@/features/home/components/ClientReview";
import ExclusiveOffers from "@/features/home/components/ExclusiveOffers";
import Feedback from "@/features/home/components/FeedBack";
import PackageList from "@/features/home/components/PackageList";

export default function Home() {
  return (
    <main>
      <h1>Welcome to BLB Travel</h1>
      <ExclusiveOffers/>
      <PackageList />
      <ClientReview />
      <Feedback />
    </main>
  );
}
