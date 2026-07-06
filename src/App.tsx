
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-12 min-h-[300vh]">
        <Hero />
      </main>
    </>
  );
}

export default App;
