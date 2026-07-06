import { motion } from "motion/react";

export default function BackgroundGlow() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Top Left Glow */}
      <motion.div
        animate={{
          x: [-30, 20, -30],
          y: [-20, 25, -20],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          -top-40
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-primary/20
          blur-[120px]
        "
      />

      {/* Bottom Right Glow */}
      <motion.div
        animate={{
          x: [25, -20, 25],
          y: [20, -25, 20],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-48
          -right-40
          h-[36rem]
          w-[36rem]
          rounded-full
          bg-chart-2/20
          blur-[140px]
        "
      />

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[28rem]
          w-[28rem]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[100px]
        "
      />

      {/* Grid Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          dark:opacity-[0.07]
          [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* Radial Fade */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_25%,var(--color-background)_95%)]
        "
      />
    </div>
  );
};
