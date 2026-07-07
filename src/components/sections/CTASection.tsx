import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Main radial glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/25
            blur-[120px]
          "
        />

        {/* Secondary accent glow */}
        <div
          className="
            absolute
            bottom-[-100px]
            right-[-100px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-chart-2/20
            blur-[140px]
          "
        />

        {/* Subtle top glow */}
        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-chart-3/20
            blur-[140px]
          "
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl px-6 text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Ready to start selling on{" "}
          <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
            Telegram?
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Create your first store today and turn your Telegram audience into a fully automated ecommerce business.
        </p>

        <div className="mt-10 flex justify-center">
          <button
            className="
              rounded-xl
              bg-primary
              px-8
              py-3
              text-primary-foreground
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-xl
              hover:cursor-pointer
            "
          >
            Get Started
          </button>
        </div>
      </motion.div>
    </section>
  );
}