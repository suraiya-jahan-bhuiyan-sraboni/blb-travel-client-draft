import BehindStory from "@/features/about/BehindStory";
import OurPurpose from "@/features/about/OurPurpose";
import OurStory from "@/features/about/OurStory";
import OurTeam from "@/features/about/OurTeam";
import TrustSection from "@/features/home/components/TrustSection";

export default function AboutPage() {
  return (
    <section>
      <OurStory />
      <BehindStory />
      <TrustSection />
      <OurPurpose />
      <OurTeam />
    </section>
  );
}
