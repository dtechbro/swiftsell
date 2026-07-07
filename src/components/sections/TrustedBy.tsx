
import { motion } from "motion/react";
import IndustryMarquee from "./trusted-by/IndustryMarquee";

export default function TrustedBy() {
  return (
    <motion.section
      id="trusted-by"
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        relative
        overflow-hidden
        py-14
        sm:py-16
      "
    >
      {/* Background */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
      >
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            dark:opacity-[0.06]
            [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]
            [background-size:56px_56px]
          "
        />

        {/* Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[380px]
            w-[380px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/8
            blur-[140px]
          "
        />

        {/* Fade */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_25%,var(--color-background)_95%)]
          "
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.22em]
              text-muted-foreground
            "
          >
            Trusted by businesses across industries
          </p>
        </div>

        <div className="mt-10">
          <IndustryMarquee />
        </div>
      </div>
    </motion.section>
  );
}