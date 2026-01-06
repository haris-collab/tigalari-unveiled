import DustParticles from "@/components/DustParticles";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import FinalSection from "@/components/FinalSection";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient dust particles */}
      <DustParticles />
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 manuscript-texture" />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <StorySection />
        <ProblemSection />
        <SolutionSection />
        <ShowcaseSection />
        <WhyItMattersSection />
        <FinalSection />
      </main>
    </div>
  );
};

export default Index;