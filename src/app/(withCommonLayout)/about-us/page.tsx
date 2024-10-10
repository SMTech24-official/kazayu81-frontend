import AboutImageSection from "@/components/about/AboutImageSection";
import ValuesSection from "@/components/about/ValuesSection";
import AboutSection from "@/components/about/AboutSection";
import MissionSection from "@/components/about/MissionSection";
import FaqSection from "@/components/about/FaqSection";
import CallToAction from "@/components/home/CallToAction";
export default function AboutUs() {
  return (
    <>
      {/* About Section */}
      <AboutSection />

      {/* About Image Section */}
      <AboutImageSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Mission Section */}
      <MissionSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Content Section */}
      <CallToAction />
    </>
  );
}
