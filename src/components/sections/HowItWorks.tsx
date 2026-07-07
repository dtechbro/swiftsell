
import StepsFlow from "./how-it-works/StepsFlow";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-32
      "
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
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

        {/* Glow */}

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
            bg-primary/10
            blur-[140px]
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
            How It Works
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
            Selling on Telegram has{" "}
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
              never been easier.
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-muted-foreground
            "
          >
            Set up your storefront, share it with customers, and
            receive orders—all within Telegram.
          </p>
        </div>

        <div className="mt-20">
          <StepsFlow />
        </div>
      </div>
    </section>
  );
};
