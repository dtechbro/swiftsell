import FeaturesGrid from "./features/FeaturesGrid";

export default function Features() {
  return (
    <section className="relative py-24 overflow-hidden" id="features">
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.04]
          dark:opacity-[0.06]
          [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to run a{" "}
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              Telegram store
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            SwiftSell gives you all the tools to turn your Telegram audience into a fully automated ecommerce business.
          </p>
        </div>

        {/* Grid */}
        <FeaturesGrid />
      </div>
    </section>
  );
};
