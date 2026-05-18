import ClientReview from "@/features/home/components/ClientReview";
import Feedback from "@/features/home/components/FeedBack";
import PackageList from "@/features/home/components/PackageList";
import TravelGallery from "@/features/home/components/TravelGallery";

export default function Home() {
  return (
    <main>
      <h1>Welcome to BLB Travel</h1>
      <PackageList />
      <ClientReview />
      <Feedback />
      <TravelGallery />
    </main>
  );
}
