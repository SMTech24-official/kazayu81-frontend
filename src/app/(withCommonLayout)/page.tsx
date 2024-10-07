import CallToAction from "@/components/home/CallToAction";
import ExploreSection from "@/components/home/ExploreSection";
import HeroSection from "@/components/home/HeroSection";
import PopularServices from "@/components/home/PopularServices";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PopularServices />
      <ExploreSection />
      <CallToAction />
    </div>
  );
}
