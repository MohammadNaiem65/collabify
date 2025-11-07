import CTASection from "@/components/(home)/home/CallToAction";
import Features from "@/components/(home)/home/Features";
import Hero from "@/components/(home)/home/Hero";
import Pricing from "@/components/(home)/home/PricingSection";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Features/>
      <Pricing/>
      <CTASection/>
    </div>
  );
};

export default Homepage;
