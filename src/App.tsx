
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";
import Features from "./components/sections/Features";
import CTASection from "./components/sections/CTASection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-12 min-h-[300vh]">
        <Hero />
        <Features />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}

export default App;
