import Navbar from "@/features/home/components/Navbar";
import AboutHero from "@/features/gallery/components/AboutHero";
import GallerySection from "@/features/gallery/components/GallerySection";
import ExclusivePackages from "@/features/gallery/components/ExclusivePackages";
import ExploreBangladesh from "@/features/offers/components/ExploreBangladesh";
import OfferNewsLetter from "@/features/offers/components/OfferNewsLetter";

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <GallerySection />
      <ExclusivePackages />
      <ExploreBangladesh />
      <OfferNewsLetter />
    </main>
  );
}