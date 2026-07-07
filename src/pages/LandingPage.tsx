import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <main className="pt-12">
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <WhyChooseUs />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};
