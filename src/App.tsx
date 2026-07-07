
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";
import Features from "./components/sections/Features";
import CTASection from "./components/sections/CTASection";
import Footer from "./components/layout/Footer";
import HowItWorks from "./components/sections/HowItWorks";
import WhyChooseUs from "./components/sections/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-12 min-h-[300vh]">
        <Hero />
        <Features />
        <HowItWorks />
        <WhyChooseUs />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}

export default App;
