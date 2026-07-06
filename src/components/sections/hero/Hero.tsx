import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import BackgroundGlow from "./BackgroundGlow";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Layer */}
      <BackgroundGlow />

      {/* Main Container */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT: Content */}
          <HeroContent />

          {/* RIGHT: Image / Mockup */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
};
