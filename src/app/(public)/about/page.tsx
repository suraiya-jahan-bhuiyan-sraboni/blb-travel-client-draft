import AboutHero from "@/features/about/components/AboutHero";
import GallerySection from "@/features/gallery/components/GallerySection";
import Navbar from "@/features/home/components/Navbar";
import ExploreBangladesh from "@/features/offers/components/ExploreBangladesh";
import OfferNewsLetter from "@/features/offers/components/OfferNewsLetter";

const AboutPage = () => {
  return (
    <main>
      <Navbar/>
      <AboutHero />
      <GallerySection />
      <ExploreBangladesh />
      <OfferNewsLetter/>
    </main>
  );
};

export default AboutPage;