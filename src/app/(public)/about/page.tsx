import BehindStory from "@/features/about/BehindStory";
import OurStory from "@/features/about/OurStory";
import TrustSection from "@/features/home/components/TrustSection";

export default function AboutPage() {
  return (
    <section>
      <OurStory />
      <BehindStory />
      <TrustSection />
    </section>
  );
}
