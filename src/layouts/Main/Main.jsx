import HeroSection from "../../sections/Hero/HeroSection";
import AIFeaturesSection from "../../sections/AIFeatures/AIFeaturesSection";
import AnalyticSection from "../../sections/Analytic/AnalyticsSection.jsx";
import PricingSection from "../../sections/Pricing/PricingSection.jsx";
import SupportSection from "../../sections/Support/SupportSection.jsx";

import GradientBackground from "../GradientBackground/GradientBackground";

const Main = () => {
  return (
    <>
      <GradientBackground>
        <HeroSection />
        <AIFeaturesSection />
      </GradientBackground>
      <AnalyticSection />
      <PricingSection />
      <SupportSection />
    </>
  );
};

export default Main;
