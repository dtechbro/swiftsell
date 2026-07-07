import ComparisonGrid from "./why-choose-us/ComparisonGrid";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-32
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
            opacity-[0.04]
            dark:opacity-[0.07]
            [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]
            [background-size:56px_56px]
          "
        />

        {/* Primary Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[520px]
            w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/10
            blur-[150px]
          "
        />

        {/* Accent Glow */}

        <div
          className="
            absolute
            right-[-140px]
            top-16
            h-[320px]
            w-[320px]
            rounded-full
            bg-chart-2/10
            blur-[120px]
          "
        />

        {/* Radial Fade */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_35%,var(--color-background)_100%)]
          "
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-border
              bg-card
              px-4
              py-1.5
              text-sm
              font-medium
              shadow-sm
            "
          >
            Why Choose SwiftSell
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              tracking-tight
              sm:text-5xl
            "
          >
            Stop managing a{" "}
            <span
              className="
                bg-gradient-to-r
                from-primary
                via-chart-2
                to-chart-3
                bg-clip-text
                text-transparent
              "
            >
              complicated online store.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-muted-foreground
            "
          >
            Your customers are already on Telegram. SwiftSell lets
            you launch a complete ecommerce experience in minutes—
            without worrying about hosting, plugins, or ongoing
            maintenance.
          </p>
        </div>

        {/* Comparison */}

        <div className="mt-20">
          <ComparisonGrid />
        </div>
      </div>
    </section>
  );
};
